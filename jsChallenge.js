/**
 * Connect this file to your github
 * you're going to create a "main" branch, then you're going to push this file to your main branch.
 * NEXT you're going to make a branch called "challenge 1". Solve the first coding challenge, push that branch to github, make a pull request, merge it into main.
 * NEXT make a branch called "challenge 2" and repeat the above for each coding challenge
 */

// Challenge 1:
/**
 * Console.log all even numbers from 0 - 10
 * Try to make the solution as efficient as possible. a "for" loop may not be the most efficeint way.
 */

const allEven = () => {

    let num = 0;
    let evenNums = [];
    while (num <= 10) { // the condition/Boolean condition is (num <= 10) which is an expression that will result in an answer of true or false. Figured it out by googling the way Kevin said and it was on FreeCode
        evenNums.push(num);
        num += 2;
    }
    return evenNums;
}

console.log(allEven());


//Challenge 2:
// Create a function that reverses an array
const reverseThis = [1, 'b', 'horse', { name: "Kevin" }, [0, 1, 2]];

reverseThis.reverse();

console.log(reverseThis);


//
//Challenge 3:
// Sort an array from lowest to highest
const array1 = [1, 123, 67342, 2, 43, 64];

array1.sort((a, b) => b - a);

// array1[1] = 2,
//     array1[2] = 43,
//     array1[3] = 64,
//     array1[4] = 123,
//     array1[5] = 67342;

console.log('sorted array ', array1);


//Challenge 4:
// Remove the spaces found in this string
const stringSpaces = "hello, my name is, PICKLES!!";
const noSpaces = stringSpaces.replace(/\s/g, ''); // Great Answer
const removeSpaces = stringSpaces.split(' ').join('');
console.log(noSpaces);
console.log('Kevins: ', removeSpaces);

//Challenge 5:
// Create a function that filters out odd numbers
/** You'll have a function that takes an array as an input and returns an array */

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterNeg = (arr) => {

    const newArr = arr.filter((pickles) => pickles % 2 === 0);

    return newArr;

}

console.log(filterNeg(numbersArray));
console.log([2, 4, 6, 8,]);
filterNeg(numbersArray)
filterNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// result should be [2, 4, 6, 8, 10];

const example = () => {
    return 2 + 2;
}

console.log(example());
