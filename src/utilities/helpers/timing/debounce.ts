export function debounce(callback: () => void, ms: number) {
  let timeoutId = null;
  return function (...args: any[]) {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, ms);
  };
}
