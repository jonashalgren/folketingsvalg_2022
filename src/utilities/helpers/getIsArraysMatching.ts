type Props = {
    arr1: (number | string)[];
    arr2: (number | string)[];
};

export function getIsArraysMatching({ arr1, arr2 }: Props) {
    const length = arr1.length >= arr2.length ? arr1.length : arr2.length;
    let isMatching = true;

    for (let i = 0; i < length; i++) {
        isMatching = arr1[i] === arr2[i];
    }

    return isMatching;
}
