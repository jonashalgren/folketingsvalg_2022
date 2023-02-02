export function removePreloader() {
  const preloaderElement = <HTMLDivElement>document.getElementById("preloader");
  if (preloaderElement) {
    setTimeout(() => {
      preloaderElement.style.opacity = "0";
    }, 300);
    setTimeout(() => {
      preloaderElement.remove();
    }, 1000);
  }
}
