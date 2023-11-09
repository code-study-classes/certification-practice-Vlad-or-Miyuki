export const calculateDistance = (x1, x2) => Math.abs(x2 - x1);

export const calculateSegmentProduct = (a, b, c) => {
  const lengthAC = Math.abs(c - a);
  const lengthBC = Math.abs(b - c);
  const result = lengthAC * lengthBC;
  return result;
};

export const calculateKilobytes = (fileSizeInBytes) => {
  const kilobytes = Math.floor(fileSizeInBytes / 1024);
  return kilobytes;
};

export const calculateSegments = (A, B) => {
  const result = Math.floor(A / B);
  return result;
};

export const calculateDigitSum = (number) => {
  const firstDigit = Math.floor(number / 10);
  const secondDigit = number % 10;
  return firstDigit + secondDigit;
};

export const swapHundredsAndTens = (str) => {
  const f = String(str);
  const a1 = String(f[0]);
  const a2 = String(f[1]);
  const a3 = String(f[2]);
  const h = a2 + a1 + a3;
  const result = Number(h);
  return result;
};

export const  getHundredsDigit = (number) => {
  if (number <= 999) {
    return 0;
  }
  return Math.floor((number / 100) % 10);
};

export const getFullHours = (seconds) => {
  if (!Number.isInteger(seconds) || seconds < 0) {
    return;
  }
  const result = Math.floor(seconds / 3600);
  return result;
};

export const getDayOfWeek = () => {

};

export const countSquares = () => {

};
