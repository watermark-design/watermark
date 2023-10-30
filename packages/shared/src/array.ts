export const generateMatrix = (rows: number, columns: number, value: any) => {
  return Array.from({ length: rows }, () => new Array(columns).fill(value));
};
