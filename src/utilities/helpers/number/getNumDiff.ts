type Props = {
    aVal: number;
    bVal: number;
};

export function getNumDiff({ aVal, bVal }: Props) {
    return aVal > bVal ? aVal - bVal : bVal - aVal;
}
