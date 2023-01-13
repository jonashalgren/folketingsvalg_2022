export function throttle(callback: () => void, ms: number) {
  let inThrottle: any;
  return function (...args: any[]) {
    if (!inThrottle) {
      callback.apply(null, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), ms);
    }
  };
}
