type Props = {
    val: number;
    decimals: number;
};

export function getRoundNum({ val, decimals }: Props) {
    const factor = 10 ** decimals;
    return Math.round(val * factor) / factor;
}
