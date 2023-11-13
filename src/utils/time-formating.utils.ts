export const formatMillisecondsToTimeString = (milliseconds: number) => {
  const date = new Date(milliseconds);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  };

  return date.toLocaleDateString('en-US', options);
};
