export const createSession = async (userId: string) => {
  const res = await fetch('/api/sessions', {
    method: 'POST',
    body: JSON.stringify({ userId, ipAddress: '192.168.1.1', device: 'Chrome' }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await res.json();
  console.log('Session Created:', data);
};

export const fetchSessions = async (userId: string) => {
  const res = await fetch(`/api/sessions?userId=${userId}`);
  const data = await res.json();
  console.log('User Sessions:', data);
};

export const deleteSession = async (sessionId: string) => {
  await fetch('/api/sessions', {
    method: 'DELETE',
    body: JSON.stringify({ sessionId }),
    headers: { 'Content-Type': 'application/json' },
  });
};
