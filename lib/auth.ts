export function isAdminAuthenticated(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  
  const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
  const loginTime = localStorage.getItem('adminLoginTime');
  
  if (!isAuthenticated || !loginTime) {
    return false;
  }
  
  // Check if login is still valid (24 hours)
  const loginTimestamp = parseInt(loginTime);
  const now = Date.now();
  const hoursSinceLogin = (now - loginTimestamp) / (1000 * 60 * 60);
  
  if (hoursSinceLogin >= 24) {
    // Session expired, clear storage
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminLoginTime');
    return false;
  }
  
  return true;
}

export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminLoginTime');
  }
}

export function login(): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('adminAuthenticated', 'true');
    localStorage.setItem('adminLoginTime', Date.now().toString());
  }
}
