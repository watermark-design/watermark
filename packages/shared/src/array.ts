export const generateMatrix = <T>(rows: number, columns: number, value: T): T[][] => {
  return Array.from({ length: rows }, () => new Array(columns).fill(value));
};
