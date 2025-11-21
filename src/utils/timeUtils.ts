export function generateTimes(
  openingHour: number,
  closingHour: number,
  intervalMinutes: number
): string[] {
  const times: string[] = [];

  let lastStartHour: number = closingHour - 1;

  for (let hour: number = openingHour; hour <= lastStartHour; hour++) {
    for (let minute: number = 0; minute < 60; minute += intervalMinutes) {
      if (hour === lastStartHour && minute > 0) break;
      const hh: string = String(hour).padStart(2, '0');
      const mm: string = String(minute).padStart(2, '0');
      times.push(`${hh}:${mm}`);
    }
  }
  return times;
}
