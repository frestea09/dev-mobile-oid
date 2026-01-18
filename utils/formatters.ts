export const formatCurrency = (value: number) => `Rp ${value.toLocaleString('id-ID')}`;

export const formatDateLabel = (value: string) => {
  const [year, month, day] = value.split('-').map(Number);
  if (!year || !month || !day) {
    return value;
  }
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};
