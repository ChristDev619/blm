import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import * as nodemailer from 'nodemailer';

interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  message: string;
  timestamp: string;
  ip?: string;
  userAgent?: string;
}

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'messages.txt');

// Email configuration
const EMAIL_CONFIG = {
  to: 'Info@blm.sa',
  subject: 'New Contact Form Submission - Best Look Contracting',
  from: process.env.EMAIL_USER || 'noreply@bestlook.com'
};

// Create email transporter
const createTransporter = () => {
  // Check if email credentials are configured
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailService = process.env.EMAIL_SERVICE || 'gmail';
  
  // If no credentials, return null for test mode
  if (!emailUser || !emailPass || emailUser === 'your-email@gmail.com') {
    console.log('📧 Email credentials not configured - running in test mode');
    return null;
  }

  // Configure transporter based on service
  const config: any = {
    auth: {
      user: emailUser,
      pass: emailPass
    }
  };

  // Add service-specific configuration
  if (emailService === 'gmail') {
    config.host = 'smtp.gmail.com';
    config.port = 587;
    config.secure = false;
    config.auth = {
      user: emailUser,
      pass: emailPass
    };
    config.tls = {
      rejectUnauthorized: false
    };
  } else if (emailService === 'sendgrid') {
    config.host = 'smtp.sendgrid.net';
    config.port = 587;
    config.secure = false;
  } else if (emailService === 'mailgun') {
    config.host = 'smtp.mailgun.org';
    config.port = 587;
    config.secure = false;
  } else if (emailService === 'outlook' || emailService === 'hotmail') {
    config.service = 'outlook';
  } else {
    // Custom SMTP
    config.host = process.env.EMAIL_HOST;
    config.port = process.env.EMAIL_PORT || 587;
    config.secure = process.env.EMAIL_SECURE === 'true';
  }

  return nodemailer.createTransport(config);
};

// Send email function
const sendEmail = async (message: ContactMessage) => {
  try {
    const transporter = createTransporter();
    
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${message.name}</p>
      <p><strong>Phone:</strong> ${message.phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Submitted on: ${new Date(message.timestamp).toLocaleString()}</small></p>
      <p><small>IP: ${message.ip}</small></p>
    `;

    const mailOptions = {
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      subject: EMAIL_CONFIG.subject,
      html: emailContent
    };

    // If no transporter (test mode), just log the email
    if (!transporter) {
      console.log('📧 TEST MODE - Email would be sent to:', EMAIL_CONFIG.to);
      console.log('📧 Subject:', EMAIL_CONFIG.subject);
      console.log('📧 Content:', emailContent);
      console.log('📧 Email logged successfully (not actually sent)');
      return true;
    }

    const result = await transporter.sendMail(mailOptions);
    console.log('📧 Email sent successfully to:', EMAIL_CONFIG.to);
    console.log('📧 Message ID:', result.messageId);
    console.log('📧 Response:', result.response);
    console.log('📧 Accepted recipients:', result.accepted);
    console.log('📧 Rejected recipients:', result.rejected);
    return true;
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return false;
  }
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new message
    const newMessage: ContactMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      phone: phone.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    // Send email
    const emailSent = await sendEmail(newMessage);

    // Try to save to file (optional - don't fail if this doesn't work on Vercel)
    try {
      // Ensure data directory exists
      const dataDir = path.dirname(DATA_FILE_PATH);
      if (!existsSync(dataDir)) {
        await mkdir(dataDir, { recursive: true });
      }

      // Read existing messages
      let messages: ContactMessage[] = [];
      if (existsSync(DATA_FILE_PATH)) {
        try {
          const fileContent = await readFile(DATA_FILE_PATH, 'utf-8');
          if (fileContent.trim()) {
            messages = JSON.parse(fileContent);
          }
        } catch (error) {
          console.error('Error reading messages file:', error);
        }
      }

      // Add new message
      messages.push(newMessage);

      // Write back to file
      await writeFile(DATA_FILE_PATH, JSON.stringify(messages, null, 2), 'utf-8');
    } catch (fileError) {
      console.error('Error saving message to file (non-critical):', fileError);
      // Don't fail the entire request if file saving fails on Vercel
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully',
      emailSent,
      id: newMessage.id 
    });

  } catch (error) {
    console.error('Error processing message:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Ensure data directory exists
    const dataDir = path.dirname(DATA_FILE_PATH);
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    // Read messages from file
    let messages: ContactMessage[] = [];
    if (existsSync(DATA_FILE_PATH)) {
      try {
        const fileContent = await readFile(DATA_FILE_PATH, 'utf-8');
        if (fileContent.trim()) {
          messages = JSON.parse(fileContent);
        }
      } catch (error) {
        console.error('Error reading messages file:', error);
      }
    }

    // Sort by timestamp (newest first)
    messages.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return NextResponse.json({ messages });

  } catch (error) {
    console.error('Error reading messages:', error);
    return NextResponse.json(
      { error: 'Failed to read messages' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!existsSync(DATA_FILE_PATH)) {
      return NextResponse.json({ error: 'No messages file found' }, { status: 404 });
    }

    // Read existing messages
    const fileContent = await readFile(DATA_FILE_PATH, 'utf-8');
    let messages: ContactMessage[] = [];
    
    if (fileContent.trim()) {
      messages = JSON.parse(fileContent);
    }

    if (id) {
      // Delete specific message
      messages = messages.filter(msg => msg.id !== id);
    } else {
      // Delete all messages
      messages = [];
    }

    // Write back to file
    await writeFile(DATA_FILE_PATH, JSON.stringify(messages, null, 2), 'utf-8');

    return NextResponse.json({ 
      success: true, 
      message: id ? 'Message deleted successfully' : 'All messages deleted successfully' 
    });

  } catch (error) {
    console.error('Error deleting message:', error);
    return NextResponse.json(
      { error: 'Failed to delete message' },
      { status: 500 }
    );
  }
}
