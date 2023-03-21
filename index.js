// iteration 3
function divisibles(a, b) {
  return a % b === 0;
}
//iteration 4
function wordsUpperCase(arr) {
  return arr.map((word) => word[0].toUpperCase());
}
// it 5
function numArr(arr) {
  return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}
//it 6
function objArr(arr) {
  return arr.filter((obj) => obj.edad > 18);
}
//it 7
function numArr(arr) {
  const sortedArr = [];
  // iterar sobre array de numeros
  for (let i = 0; i < arr.length; i++) {
    if (sortedArr[sortedArr.length - 1]) {
    }
  }
  // si el número actual es mayor al último número de sortedArr, push a sorted Arr. si es inferior al último, hacer una copia de sorted Arr, insertar el numero actual en la posición donde el previo sea inferior o igual al actual, y el siguiente sea superior al actual
  // devolver sortedArr
}
// it 8
function numArr(arr) {
  const newArr = arr.map((num) => {
    return {
      number: num,
      occurence: arr.filter((elem) => elem === num).length,
    };
  });
  return newArr.sort((a, b) => b.occurence - a.occurence)[0].number;
}
//it 9
function sentence(sen) {
  return sen
    .toLowerCase()
    .split("")
    .filter((letter) => letter == "a").length;
}
// it 10
function vowels(sen) {
  return sen
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (
        word.includes("a") ||
        word.includes("e") ||
        word.includes("i") ||
        word.includes("o") ||
        word.includes("u")
      ) {
        return word
          .split("")
          .filter((letter) => "aeiou".includes(letter))
          .join("");
      }
    })
    .join("");
}
// it 11
function vowelsCount(sen) {
  return vowels(sen).length;
}
// it 12
function vowelIndivCount(sen) {
  const vowelCount = vowels(sen);
  const occurrences = vowelCount
    .split("")
    .map((vowel, i) => {
      if (!vowelCount.indexOf(vowel) < i) {
        return {
          vowel: vowel,
          occurence: vowelCount.split("").filter((elem) => elem === vowel)
            .length,
        };
      }
    })
    .filter((elem) => elem !== undefined);
  return [...new Set(occurrences)];