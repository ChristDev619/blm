'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getTranslation } from '@/lib/translations';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [locale, setLocale] = useState('en');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Check credentials
    if (credentials.username === 'adminBLM' && credentials.password === 'p@ssw0rdBL!M') {
      // Store authentication in sessionStorage
      sessionStorage.setItem('adminAuthenticated', 'true');
      router.push('/admin/messages');
    } else {
      setError(locale === 'ar' ? 'اسم المستخدم أو كلمة المرور غير صحيحة' : 'Invalid username or password');
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Language Switcher */}
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
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen relative z-10 px-4">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-2xl">
              <span className="text-3xl">🎨</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {getTranslation(locale, 'admin.login.title')}
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed"
               dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {getTranslation(locale, 'admin.login.subtitle')}
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-gradient-to-br from-white/10 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            {/* Form Background Pattern */}
            <div className="absolute inset-0 opacity-30 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl"></div>
              <div className="absolute top-0 left-0 w-full h-full rounded-3xl" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username Field */}
                <div>
                  <label htmlFor="username" className="block text-sm font-semibold text-white mb-3"
                         dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                    {getTranslation(locale, 'admin.login.username')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-slate-400 text-lg">👤</span>
                    </div>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={credentials.username}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-white/60 backdrop-blur-sm transition-all duration-300 hover:bg-white/25"
                      placeholder={getTranslation(locale, 'admin.login.usernamePlaceholder')}
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-white mb-3"
                         dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                    {getTranslation(locale, 'admin.login.password')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-slate-400 text-lg">🔒</span>
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-white/60 backdrop-blur-sm transition-all duration-300 hover:bg-white/25"
                      placeholder={getTranslation(locale, 'admin.login.passwordPlaceholder')}
                      required
                    />
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-red-400 text-xl">⚠️</span>
                      <p className="text-red-300 text-sm" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                        {error}
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span className="flex items-center justify-center">
                    {loading ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        <span>{getTranslation(locale, 'admin.login.signingIn')}</span>
                      </>
                    ) : (
                      <>
                        <span className="mr-2">🚀</span>
                        <span>{getTranslation(locale, 'admin.login.signIn')}</span>
                      </>
                    )}
                  </span>
                </button>
              </form>

              {/* Business Description */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl mb-3">🏢</div>
                  <h3 className="text-lg font-semibold text-white mb-2"
                      dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                    {getTranslation(locale, 'admin.login.businessTitle')}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed"
                     dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                    {getTranslation(locale, 'admin.login.businessDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-slate-400 text-sm" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {getTranslation(locale, 'admin.login.footer')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
