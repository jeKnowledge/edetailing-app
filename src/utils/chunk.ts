export const chunk = (array: string[], size: number): string[][] => {
  const chunked_arr: string[][] = [];
  if (array === undefined || array === null) return [[]];
  for (let i = 0; i < array.length; i++) {
    const last = chunked_arr[chunked_arr.length - 1];
    if (!last || last.length === size) {
      chunked_arr.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunked_arr;
};
