import axios from 'axios';

// Get role of the user
export const getRole = async (email: string) => {
  try {
    const baseUrl = process.env.NEXTAUTH_URL;
    const role = await axios.get(`${baseUrl}/api/auth/verifyCredentials/getRole?email=${email}`);
    if (!role.data.success) {
      return null;
    }
    return role.data.role;
  } catch (error) {
    console.error('Error during authorization:', error);
    return null;
  }
};

// verify credentials
export const verifyCredentials = async ({ username, password }: { username: String; password: String }) => {
  try {
    const baseUrl = process.env.NEXTAUTH_URL;
    const credentials = await axios.post(`${baseUrl}/api/auth/verifyCredentials`, { username, password });
    if (!credentials.data.success) {
      return null;
    }
    return credentials.data;
  } catch (error) {
    console.error('Error during authorization:', error);
    return null;
  }
};
