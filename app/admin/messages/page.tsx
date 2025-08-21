'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getTranslation } from '@/lib/translations';

interface Message {
  id: string;
  name: string;
  phone: string;
  message: string;
  timestamp: string;
  ip?: string;
  userAgent?: string;
}

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [locale, setLocale] = useState('ar');
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  const loadMessages = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/contact');
      if (!response.ok) {
        throw new Error('Failed to load messages');
      }
      const data = await response.json();
      setMessages(data.messages || []);
    } catch (err) {
      console.error('Error loading messages:', err);
      setError('Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check authentication
    const isAuthenticated = sessionStorage.getItem('adminAuthenticated') === 'true';
    if (!isAuthenticated) {
      router.push('/admin/login');
      return;
    }
    setAuthenticated(true);
    loadMessages();
  }, [router]);

  const clearAllMessages = async () => {
    if (confirm('Are you sure you want to delete all messages?')) {
      try {
        const response = await fetch('/api/contact', {
          method: 'DELETE'
        });
        if (response.ok) {
          setMessages([]);
        } else {
          throw new Error('Failed to delete messages');
        }
      } catch (err) {
        console.error('Error deleting messages:', err);
        alert('Failed to delete messages');
      }
    }
  };

  const deleteMessage = async (id: string) => {
    try {
      const response = await fetch(`/api/contact?id=${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setMessages(messages.filter(msg => msg.id !== id));
      } else {
        throw new Error('Failed to delete message');
      }
    } catch (err) {
      console.error('Error deleting message:', err);
      alert('Failed to delete message');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    router.push('/admin/login');
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-6">🔒</div>
          <div className="text-white text-xl">Checking authentication...</div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-6">⏳</div>
          <div className="text-white text-xl">Loading messages...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-6">❌</div>
          <div className="text-red-400 text-xl mb-4">{error}</div>
          <button
            onClick={loadMessages}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Language Switcher and Logout */}
      <div className="absolute top-6 right-6 z-50">
        <div className="flex space-x-2 rtl:space-x-reverse">
          <button
            onClick={() => setLocale('en')}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              locale === 'en'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                : 'bg-white/10 text-slate-300 hover:bg-white/20'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLocale('ar')}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              locale === 'ar'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                : 'bg-white/10 text-slate-300 hover:bg-white/20'
            }`}
            dir="rtl"
          >
            العربية
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl font-medium transition-all duration-300 bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:from-red-600 hover:to-red-700"
          >
            🚪 {getTranslation(locale, 'admin.logout')}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-2xl">
            <span className="text-3xl">📬</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            {getTranslation(locale, 'admin.title')}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
             dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            {getTranslation(locale, 'admin.subtitle')}
          </p>
        </div>

        {/* Statistics Dashboard */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-500/20 via-blue-600/20 to-blue-700/20 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">📊</div>
              <div className="text-4xl font-bold text-blue-400">{messages.length}</div>
            </div>
            <div className="text-slate-300 text-lg font-medium" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {getTranslation(locale, 'admin.stats.total')}
            </div>
            <div className="text-blue-400/60 text-sm mt-2" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {getTranslation(locale, 'admin.stats.totalDesc')}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/20 via-green-600/20 to-green-700/20 backdrop-blur-xl rounded-3xl p-8 border border-green-500/30 shadow-2xl hover:shadow-green-500/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">📅</div>
              <div className="text-4xl font-bold text-green-400">
                {messages.filter(msg => {
                  const date = new Date(msg.timestamp);
                  const today = new Date();
                  return date.toDateString() === today.toDateString();
                }).length}
              </div>
            </div>
            <div className="text-slate-300 text-lg font-medium" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {getTranslation(locale, 'admin.stats.today')}
            </div>
            <div className="text-green-400/60 text-sm mt-2" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {getTranslation(locale, 'admin.stats.todayDesc')}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/20 via-purple-600/20 to-purple-700/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">📈</div>
              <div className="text-4xl font-bold text-purple-400">
                {messages.filter(msg => {
                  const date = new Date(msg.timestamp);
                  const weekAgo = new Date();
                  weekAgo.setDate(weekAgo.getDate() - 7);
                  return date > weekAgo;
                }).length}
              </div>
            </div>
            <div className="text-slate-300 text-lg font-medium" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {getTranslation(locale, 'admin.stats.week')}
            </div>
            <div className="text-purple-400/60 text-sm mt-2" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {getTranslation(locale, 'admin.stats.weekDesc')}
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <div className="text-white text-xl font-medium" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            {messages.length > 0 ? (
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {getTranslation(locale, 'admin.showing').replace('{count}', messages.length.toString())}
              </span>
            ) : (
              <span className="text-slate-400">{getTranslation(locale, 'admin.noMessages')}</span>
            )}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={loadMessages}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 font-medium flex items-center space-x-2"
            >
              <span className="text-xl">🔄</span>
              <span>{getTranslation(locale, 'admin.refresh')}</span>
            </button>
            {messages.length > 0 && (
              <button
                onClick={clearAllMessages}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 font-medium flex items-center space-x-2"
              >
                <span className="text-xl">🗑️</span>
                <span>{getTranslation(locale, 'admin.clearAll')}</span>
              </button>
            )}
          </div>
        </div>

        {/* Messages Section */}
        {messages.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-8 opacity-50">📭</div>
            <h3 className="text-3xl font-bold text-white mb-6" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {getTranslation(locale, 'admin.noMessagesTitle')}
            </h3>
            <p className="text-slate-400 max-w-md mx-auto text-lg leading-relaxed"
               dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {getTranslation(locale, 'admin.noMessagesDesc')}
            </p>
            <div className="mt-8 text-slate-500 text-sm" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {getTranslation(locale, 'admin.storageInfo')}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className="bg-gradient-to-br from-white/10 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-white/10 transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Message Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {message.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{message.name}</h3>
                        <p className="text-blue-400 text-lg font-medium">{message.phone}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                                             <div className="text-slate-300 text-sm font-medium" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                         {getTranslation(locale, 'admin.submitted')}
                       </div>
                      <div className="text-white font-semibold">
                        {new Date(message.timestamp).toLocaleDateString()}
                      </div>
                      <div className="text-slate-400 text-xs">
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                    <button
                      onClick={() => deleteMessage(message.id)}
                      className="bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-400 hover:text-red-300 hover:from-red-500/30 hover:to-red-600/30 transition-all duration-300 p-3 rounded-xl border border-red-500/30"
                      title="Delete message"
                    >
                      <span className="text-xl">🗑️</span>
                    </button>
                  </div>
                </div>

                {/* Message Content */}
                <div className="bg-gradient-to-r from-white/10 via-white/15 to-white/10 rounded-2xl p-6 mb-6">
                                     <div className="text-slate-300 text-sm font-medium mb-3 text-blue-400" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                     {getTranslation(locale, 'admin.message')}:
                   </div>
                  <p className="text-white leading-relaxed whitespace-pre-wrap text-lg">
                    {message.message}
                  </p>
                </div>

                {/* Technical Details */}
                {message.ip && (
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                                             <div className="text-slate-400 font-medium mb-2" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                         📍 {getTranslation(locale, 'admin.ipAddress')}
                       </div>
                      <div className="text-white font-mono">{message.ip}</div>
                    </div>
                    {message.userAgent && (
                      <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                                                 <div className="text-slate-400 font-medium mb-2" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                           🌐 {getTranslation(locale, 'admin.browserInfo')}
                         </div>
                        <div className="text-white font-mono text-xs truncate" title={message.userAgent}>
                          {message.userAgent.substring(0, 100)}...
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
