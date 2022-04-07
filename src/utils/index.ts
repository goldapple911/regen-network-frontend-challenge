export const getRandomHash = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const getDateStringFromTimestamp = (timestamp: string | number): string => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};
