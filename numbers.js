export const calculateDistance = (x1, x2) => Math.abs(x2 - x1);

export const calculateSegmentProduct = (a, b, c) => {
  const lengthAC = Math.abs(c - a);
  const lengthBC = Math.abs(b - c);
  const result = lengthAC * lengthBC;
  return result;
};
