/**
 * Formats minutes and seconds into a "MM:SS" string.
 * @param min - minutes value
 * @param sec - seconds value
 * @returns formatted time string e.g. "02:09"
 */
export const formatTime = (min: number, sec: number): string => {
  const formattedMin = min < 10 ? `0${min}` : `${min}`;
  const formattedSec = sec < 10 ? `0${sec}` : `${sec}`;
  return `${formattedMin}:${formattedSec}`;
};

/**
 * Pads a single number with a leading zero if needed.
 * @param time - the time unit (minutes or seconds)
 * @returns padded string e.g. "05"
 */
export const padTime = (time: number): string | number => {
  return time < 10 ? `0${time}` : time;
};
