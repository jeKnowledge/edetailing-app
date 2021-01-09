export const isImage = (filename: string) => {
  return /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(filename);
};
