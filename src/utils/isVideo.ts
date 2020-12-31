export const IsVideo = (filename: string) => {
  return /\.(mov|avi|wmv|flv|3gp|mp4|mpg)$/i.test(filename);
};
