type Props = {
  element: HTMLElement;
};

export function getElementOffsets({ element }: Props) {
  if (element) {
    const { pageYOffset } = window;
    const { top } = element.getBoundingClientRect();
    const { clientHeight } = element;

    const elementOffsetTop = Math.round(top + pageYOffset);
    const elementOffsetCenter = Math.round(top + pageYOffset + clientHeight / 2);
    const elementOffsetBottom = Math.round(top + pageYOffset + clientHeight);
    return { elementOffsetTop, elementOffsetCenter, elementOffsetBottom };
  } else {
    return { elementOffsetTop: 0, elementOffsetCenter: 0, elementOffsetBottom: 0 };
  }
}
