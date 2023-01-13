export async function preloadImages(images: string[]) {
    return Promise.all(images.map((image) => preloadImage(image)));
}

export async function preloadImage(image: string) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve(img);
        };
        img.onerror = () => {
            reject();
        };
        img.src = image;
    });
}
