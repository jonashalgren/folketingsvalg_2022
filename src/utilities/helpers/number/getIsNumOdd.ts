type Props = {
    val: number;
};
export function getIsNumOdd({ val }: Props) {
    return val % 2;
}
