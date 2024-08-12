const genRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const genRandomStr = (len) => {
  const letters = ["a", "b", "c", "d", "e", "g", "h"];
  let str;
  for (let i = 0; i < len; i++) {
    str += letters[genRandomInt(0, letters.length - 1)];
  }
  return str;
};

export const genRandomId = () => `${genRandomStr(3)}_${genRandomInt(100, 999)}`;
