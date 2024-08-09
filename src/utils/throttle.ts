export const throttle = <R, A extends any[]>(fn: (...args: A) => R, delay: number): ((...args: A) => R | undefined) => {
  let wait = false;
  let timeout: undefined | number;
  let cancelled = false;

  return (...args: A) => {
    if (cancelled) return undefined;
    if (wait) return undefined;

    const val = fn(...args);

    wait = true;

    timeout = window.setTimeout(() => {
      wait = false;
    }, delay);

    return val;
  };
};
