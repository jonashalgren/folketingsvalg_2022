type Props = {
    aNum: number;
    bNum: number;
};

export function getMedianNum({ aNum, bNum }: Props) {
    return Math.round((aNum + bNum) / 2);
}
