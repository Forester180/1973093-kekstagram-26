// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    return -1;
  }

  if (min < 0 || max < 0) {
    return -1;
  }

  if (max <= min) {
    return -1;
  }

  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}

getRandomIntInclusive(0, 45);


function maxLengthString(checkString, maxLength) {
  if (checkString.length >= maxLength) {
    return true;
  }

  return false;
}

maxLengthString('ааааааааа', 45);
