export const dateAndTimeFormatter = new Intl.DateTimeFormat(navigator.language, {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
});

export const dateFormatter = new Intl.DateTimeFormat(navigator.language, {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

export const numberFormatter = new Intl.NumberFormat(navigator.language, {
  notation: 'compact',
});

export const timeFormatter = new Intl.RelativeTimeFormat(navigator.language, {
  style: 'long',
});

export const timeShortFormatter = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
});

export const weekdayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

const maximums: [number, Intl.RelativeTimeFormatUnit][] = [
  [60, 'seconds'],
  [60, 'minutes'],
  [24, 'hours'],
  [7, 'days'],
  [4.34524, 'weeks'],
  [12, 'months'],
  [Number.POSITIVE_INFINITY, 'years'],
];

export function formatTimeAgo(date: Date) {
  let duration = (date.getTime() - Date.now()) / 1000;

  // biome-ignore lint/style/noNonNullAssertion: intended behaviour
  // biome-ignore lint/suspicious/useIterableCallbackReturn: intended behaviour
  const [, unit] = maximums.find(([amount]) => {
    if (Math.abs(duration) < amount) {
      return true;
    }
    duration /= amount;
  })!;

  return timeFormatter.format(Math.round(duration), unit);
}
