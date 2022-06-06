// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const random = function getRandomIntInclusive(min, max) {
  if (max <= min) {
    console.log('Максимально допустимое число!')
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

random(0, 45);
console.log('Случайное число равно ' + ': ' + random(0, 10));

// Источник https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Useful_string_methods#строки_как_объекты
let browserType = 'mozilla';
browserType = browserType.length;
console.log('Количество символов равно ' + ': ' + browserType);
