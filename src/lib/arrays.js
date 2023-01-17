const getNthElement = (index, array) => {
  if (index > array.length - 1) {
    return array[index - array.length]
  }
  return array[index];
  };

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat([element]);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map((num) => {
    return num.toString();
  });
};

const uppercaseWordsInArray = strings => {
  return strings.map((string) => {
    return string.toUpperCase();
  });
};

const reverseWordsInArray = strings => {
  return strings.map((string) =>
    string
    .split('')
    .reverse()
    .join('')
  );
};

const onlyEven = numbers => {
  return numbers.filter(x => x % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter((_, itemIndex) => itemIndex !== index);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => /^[aeiou]/i.test(string));
};

const removeSpaces = string => {
  return string = string.split(' ').join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((a, b) => a + b);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
