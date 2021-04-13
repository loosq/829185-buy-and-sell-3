'use strict';

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

const getRandomInt = (min = 0, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getPictureFileName = (count) => `item${count < 10 ? `0${count}` : count}.jpg`;

const correctNounEnding = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const units = 4;
  const doubles = 20;
  const otherCases = 5;
  const lastTitleIndex = 2;
  let tileIndex;

  if (number % 100 > units && number % 100 < doubles) {
    tileIndex = lastTitleIndex;
  } else {
    tileIndex = cases[(number % 10 < otherCases) ? number % 10 : otherCases];
  }

  return titles[tileIndex];
};

module.exports = {
  shuffle,
  getRandomInt,
  getPictureFileName,
  correctNounEnding
};
