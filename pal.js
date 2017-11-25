// let first = '1001';
// let second = '10001';
// let third = '88889';
// let fourth = '998';
//
// const isPalindrome = word => {
//   for (let i = 0; i < word.length / 2; i++) {
//     if (word[i] !== word[word.length - i - 1]) {
//       return false;
//     }
//   }
//
//   return true;
// };
//
// console.log(isPalindrome(first));
// console.log(isPalindrome(second));
// console.log(isPalindrome(third));
// console.log(isPalindrome(fourth));

// let firstWord = 'bannananana';
// let firstLetter = 'b';
// let secondLetter = 'a';
// let thirdLetter = 'n';
//
// const occurencesOfLetter = (word, letter) => {
//   let count = 0;
//
//   word.split('').forEach(l => {
//     if (l === letter) {
//       count++;
//     }
//   });
//
//   return count;
// };
//
// console.log(occurencesOfLetter(firstWord, firstLetter));
// console.log(occurencesOfLetter(firstWord, secondLetter));
// console.log(occurencesOfLetter(firstWord, thirdLetter));

//given an array of 1-100, one number is a duplicate, which is it
// let first = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10];
//
// const findDuplicate = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i - 1]) {
//       return arr[i];
//     }
//   }
// };
//
// console.log(findDuplicate(first));

let bool = true;

let p = new Promise((resolve, reject) => {
  if (bool) {
    let result = 'Was resolved!';
    resolve(result);
  } else {
    let error = new Error('Was rejected!');
    reject(error);
  }
});

const checkPromise = () => {
  p
    .then(fulfilled => {
      console.log(fulfilled);
    })
    .catch(rejected => {
      console.log(rejected);
    });
};

checkPromise();
