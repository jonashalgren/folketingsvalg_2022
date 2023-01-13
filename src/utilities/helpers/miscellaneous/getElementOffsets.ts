type Props = {
    element: HTMLElement;
};

export function getElementOffsets({ element }: Props) {
    if (element) {
        const { pageYOffset } = window;
        const { top } = element.getBoundingClientRect();
        const { clientHeight } = element;

        const elementOffsetTop = top + pageYOffset;
        const elementOffsetCenter = top + pageYOffset + clientHeight / 2;
        const elementOffsetBottom = top + pageYOffset + clientHeight;
        return { elementOffsetTop, elementOffsetCenter, elementOffsetBottom };
    } else {
        return { elementOffsetTop: 0, elementOffsetCenter: 0, elementOffsetBottom: 0 };
    }
}
