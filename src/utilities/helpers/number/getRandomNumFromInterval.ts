type Props = {
    maxVal: number;
    minVal: number;
};

export function getRandomNumFromInterval({ minVal, maxVal }: Props) {
    return Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);
}
