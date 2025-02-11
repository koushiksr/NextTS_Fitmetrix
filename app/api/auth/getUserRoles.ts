const users = [
  { email: 'technohmsi2t@gmail.com', role: 'admin' },
  { email: 'koushiksr19991@gmail.com', role: 'school' },
  { email: 'koushiksr1999@gmail.com', role: 'assessor' },
  { email: 'student@example.com', role: 'student' },
  { email: 'adult@example.com', role: 'adult' },
];

export const getRole = (email: string) => {
  const user = users.find((user) => user.email === email);
  return user ? user.role : 'guest'; // Default role
};

// Email exists or not; if email does not exist, redirect to unauthorized page
export const checkEmail = (email: string) => {
  return users.some((user) => user.email === email);
};
