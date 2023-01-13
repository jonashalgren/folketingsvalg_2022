type Props = {
    val: number;
};

export function getNumThousandFormat({ val }: Props) {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
