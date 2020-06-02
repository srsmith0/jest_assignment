// EXPORT ALL AS FUNCTIONS AND KEEP THE NAMES THE SAME

// ways to export

// export const methodName = (param) => {
// }

// ----or---------

// export methodName function(param){
// }


// ARRAY ITERATOR METHODS
// numberArray = [1,2,3,4]

// // return array with double values in array
// doubleArray(numberArray) // => [2,4,6,8];  hint use map 

// export const doubleArray = (arr) => {
//   let doubledArr = arr.map((number) => {
//     return number * 2;
//   });
//   return doubledArr
// };

// // return array with all even numbers
// evensOnlyArray(numberArray) // => [2,4,6,8];  hint use filter 
// export function evensOnlyArray (arr) {
//   return arr.filter((number) => {
//     number % 2 === 0
//   });
// };
// *******WHY IS THIS WRONG BUT BELOW IS RIGHT?!*********

// export function evensOnlyArray (arr) {
//   return arr.filter((number => 
//     number % 2 === 0 
//     ));
// };

// // return array with sum of numbers
// arraySum(numberArray) // => 10;  hint use reduce

// export function arraySum(arr) {
//   const reducer = (acc, cval) => acc + cval;
//   return arr.reduce(reducer)
// };


// // return true if every item greater than 0
// allNumbersGreaterThanZero(numberArray) // => true; use every

// export const allNumbersGreaterThanZero = (arr) => {
//   return arr.every((num => num > 0))
// };

// // return true if one or more items in array are odd
// someNumbersAreOdd(numberArray) // => true; use some

// export const someNumbersAreOdd = function (arr) { 
//   return arr.some((numbers => numbers % 2 !== 0));
// }

// // return array double and even
// evensOnlyAndDoubleArray(numberArray) // => [4,8]; // use map and filter

// export function evensOnlyAndDoubleArray (arr) {
//   let evenArr = arr.filter((num => num % 2 === 0));
//   return evenArr.map((num => num *2));
// };

// // find an item method return 'not found' if not found
// findItem(numberArray, 1) //=> 1

// export function findItem(arr, item) {
//    let y = arr.find(num => {
//     return num == item; 
//   })
//   if (y) {
//     return y
//   } else {
//   return "not found"
//   }
// }

// // sort array desc order
// sortArray(numberArray) //=> [4,3,2,1] *desc*

// export const sortArray = (arr) => {
//   let orderArr = arr.sort((a,b) => {
//     return a-b
//   });
//   return orderArr.reverse();
// }


// // -----BONUS------
// // ARRAY ITERATOR METHODS ON Objects with name age 

artists = [
  {name: 'a', likes:100},
  {name: 'c', likes:99},
  {name: 'c', likes:101}, 
]
// doubles likes of artist
doubleLikes(artists)
=> [
  {name: 'a', likes:200},
  {name: 'c', likes:198},
  {name: 'c', likes:202},  
]; 
// moreThan100Likes(artists)// =>[ {name: 'c', likes:101} ]; // use filter
export const moreThan100Likes = (artists) => {
  artists.filter((x => {
    x.likes > 100;
  }))
}



// //  return an array of strings of artist name
// justArtistMoreThan100Likes(artists) //=> ['c']; // use filter

// // get total number of likes fo all artists
// numberOfLikes(artists) //=> 300; // get all likes

// // find an item method. Returns 'not found' if not found
// findObjByName(artists, 'a') // => {name: 'a', likes:200}

// // returns array of artist sorted by likes
// sortArtistByName(artists)