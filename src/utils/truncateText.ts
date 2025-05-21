const truncateText = (str: string | undefined, maxLength: number = 20): string => {
  if (!str) return "";
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
};

export default truncateText;