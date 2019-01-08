export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomInArray(arr) {
  return Math.floor(Math.random() * arr.length);
}

