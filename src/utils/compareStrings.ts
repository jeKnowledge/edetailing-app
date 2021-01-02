export const compareStrings = (str1: string, str2: string): number => {
  return str1
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .localeCompare(
      str2
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
    );
};
