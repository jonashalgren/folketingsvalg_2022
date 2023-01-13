type Props = {
    arr: number[];
    val: number;
};

export function getClosestNum({ arr, val }: Props) {
    return arr.reduce(function (prev, curr) {
        return Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev;
    });
}
