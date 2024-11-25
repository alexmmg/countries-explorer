export const debounce = <T extends unknown[]>(
  func: (...args: T) => void,
  delay: number
) => {
  let timeoutId: number;
  return function (this: unknown, ...args: T) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
