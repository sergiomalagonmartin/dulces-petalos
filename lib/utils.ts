/* eslint-disable @typescript-eslint/no-explicit-any */

export function debounce(fn: (...args: any[]) => void, delay: number) {
  let timeout: NodeJS.Timeout;

  return function (...args: any[]) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
