type Props = {
  preloaderElement: HTMLDivElement;
};
export function removePreloader({ preloaderElement }: Props) {
  setTimeout(() => {
    preloaderElement.style.opacity = "0";
  }, 300);
  setTimeout(() => {
    preloaderElement.remove();
  }, 1000);
}
