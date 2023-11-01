export function ConvertPathToGalleriaModel(imagePath, imageName) {
    {/*Galleria component of prime react use the below model so we need to return the url like this*/ }
    return {
        itemImageSrc: imagePath,
        thumbnailImageSrc: imagePath,
        alt: imageName,
    };
}

export function ConvertFilePathToFile(filePath, fileName) {
    return fetch(filePath)
        .then((response) => response.blob())
        .then((blob) => new File([blob], fileName));
}

export function ConvertFileToBytes(filePath) {
    return fetch(filePath)
        .then((response) => response.blob())
        .then((blob) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.onload = () => {
                    const arrayBuffer = reader.result;
                    const uint8Array = new Uint8Array(arrayBuffer);
                    resolve(uint8Array);
                };

                reader.onerror = (error) => {
                    reject(error);
                };

                reader.readAsArrayBuffer(blob);
            });
        });
}

export function ConvertFileToBase64(filePath) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result); // The result will be the Base64-encoded string
        };

        reader.onerror = (error) => {
            reject(error);
        };

        fetch(filePath)
            .then((response) => response.blob())
            .then((blob) => {
                reader.readAsDataURL(blob);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
