export function generateTwoMonthsDates(): { full: string; display: string }[] {
  const dates: { full: string; display: string }[] = [];
  const today = new Date();
  const endDate = new Date(today);
  endDate.setMonth(today.getMonth() + 2);

  for (let d = new Date(today); d <= endDate; d.setDate(d.getDate() + 1)) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const date = String(d.getDate()).padStart(2, '0');
    const full = `${year}-${month}-${date}`;

    const display = convertDateToDisplay(full);

    dates.push({ full, display });
  }

  return dates;
}

export function convertDateToDisplay(fullDate: string): string {
  const date = new Date(fullDate);

  const monthNames = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ];

  return `${date.getDate()} ${monthNames[date.getMonth()]}`;
}
