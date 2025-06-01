export const generateToken = (userId: string): string => {
  const secret = process.env.JWT_SECRET || 'secretoTemporal';
  return jwt.sign({ id: userId }, secret, {
    expiresIn: '7d',
  });
};

