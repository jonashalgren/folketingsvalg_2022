type Props = {
    val: number;
    from: number;
    to: number;
};

export function getIsNumInRange({ val, from, to }: Props) {
    return (val - from) * (val - to) <= 0;
}
