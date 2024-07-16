const authService = {
  getCurrentUser: async () => {
    // Fetch current user from the server
    const response = await fetch('/api/currentUser');
    return response.json();
  },
  login: async credentials => {
    // Send login request to the server
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },
  logout: () => {
    // Perform logout action
    fetch('/api/logout', { method: 'POST' });
  },
};

export default authService;
