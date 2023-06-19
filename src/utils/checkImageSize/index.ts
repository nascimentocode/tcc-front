const MAX_FILE_SIZE = 1024 * 1024; // 1MB
const MAX_WIDTH = 1500;
const MAX_HEIGHT = 1500;

export async function checkImageSize(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const { width, height } = img;
      const size = file.size;

      const hasInvalidDimensions = width > MAX_WIDTH || height > MAX_HEIGHT;
      const hasInvalidSize = size > MAX_FILE_SIZE;

      if (hasInvalidDimensions) {
        reject(
          new Error(
            'Os arquivos de imagem devem ter uma altura e largura maxima de 1500 pixels.'
          )
        );
      } else if (hasInvalidSize) {
        reject(new Error('Os arquivos de imagem não devem exceder 1 MB.'));
      } else {
        resolve('Valid image');
      }
    };

    img.onerror = () => {
      reject(new Error('Upload error.'));
    };

    img.src = window.URL.createObjectURL(file);
  });
}
