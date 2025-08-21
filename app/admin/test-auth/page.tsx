'use client';

import { useState, useEffect } from 'react';
import { isAdminAuthenticated, login, logout } from '@/lib/auth';

export default function TestAuth() {
  const [authStatus, setAuthStatus] = useState<string>('Checking...');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    if (isAdminAuthenticated()) {
      setAuthStatus('✅ Authenticated');
    } else {
      setAuthStatus('❌ Not Authenticated');
    }
  };

  const handleLogin = () => {
    login();
    checkAuthStatus();
  };

  const handleLogout = () => {
    logout();
    checkAuthStatus();
  };

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Authentication Test</h1>
        
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <p className="mb-2">Status: {authStatus}</p>
          <button
            onClick={checkAuthStatus}
            className="bg-blue-500 px-4 py-2 rounded mr-2"
          >
            Check Status
          </button>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleLogin}
            className="bg-green-500 px-4 py-2 rounded w-full"
          >
            Login
          </button>
          
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded w-full"
          >
            Logout
          </button>
        </div>

        <div className="mt-8 bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Test Credentials:</h2>
          <p>Username: adminBLM</p>
          <p>Password: p@ssw0rdBL!M</p>
        </div>
      </div>
    </div>
  );
}
