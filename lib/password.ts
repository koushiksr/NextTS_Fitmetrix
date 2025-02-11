import bcrypt from "bcryptjs";

export const saltAndHashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return `${salt}:${hash}`;
};
