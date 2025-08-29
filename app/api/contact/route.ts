import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

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
      id: newMessage.id 
    });

  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { error: 'Failed to save message' },
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
