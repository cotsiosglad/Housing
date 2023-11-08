export function ConvertPathToGalleriaModel(imagePath, imageName) {
  {
    /*Galleria component of prime react use the below model so we need to return the url like this*/
  }
  return {
    itemImageSrc: imagePath,
    thumbnailImageSrc: imagePath,
    alt: imageName,
  };
}

export function ConvertFilePathToFile(filePath) {
  return fetch(filePath)
    .then((response) => response.blob())
    .then((blob) => new File([blob]));
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

export function GetGoogleMapsEmbedUrlSrc(embed) {
  //const embed = '<iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3261.136955882085!2d33.3323333!3d35.1781389!3m2!1i1024!2i768!4f13.1!2m1!1s35.178143%2C%2033.332342!5e0!3m2!1sen!2s!4v1699113236789!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  if (embed) {
    // Create a temporary div element to parse the iframe HTML
    const div = document.createElement("div");
    div.innerHTML = embed;

    // Get the src attribute value
    const srcValue = div.querySelector("iframe")?.getAttribute("src");
    return srcValue ? srcValue : "";
  } else {
    return "";
  }
}

export async function CreateObjectURLFromURL(url) {
  try {
    if (url.includes("blob")) {
      return url;
    } else {
      // Fetch the resource from the URL
      const response = await fetch(url);
      const blob = await response.blob();

      // Create an Object URL from the blob
      const objectURL = URL.createObjectURL(blob);
      return objectURL;
    }
  } catch (error) {
    console.error("Error fetching or creating Object URL:", error);
  }
}
