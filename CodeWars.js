// // n this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// // Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// // function move (position, roll) {
// //     return position + roll*2
// //   }

// // Nathan loves cycling.

// // Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// // You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// // function litres(time) {
// //   return Math.floor(time * 0.5)
// // }

// //Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// // function solution(nums){
// //     return (nums || []).sort(function(a, b){
// //       return a - b
// //     });
// //   }

// // Clock shows h hours, m minutes and s seconds after midnight.

// // Your task is to write a function which returns the time since midnight in milliseconds.

// // function past(h, m, s){
// //     return ((h*3600)+(m*60)+s)*1000;
// //   }

// // Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// // The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// // Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// // Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// // Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// // Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

// // function calculateYears(principal, interest, tax, desired){
// //     let years = 0;
// //     while(principal < desired){
// //         principal += (principal * interest) * (1 - tax);
// //         years++
// //     }
// //     return years;
// // }

// // Create a function which answers the question "Are you playing banjo?".
// // If your name starts with the letter "R" or lower case "r", you are playing banjo!

// // The function takes a name as its only argument, and returns one of the following strings:

// // name + " plays banjo" 
// // name + " does not play banjo"
// // Names given are always valid strings.

// // function areYouPlayingBanjo(name) {
// //     if(name[0] === "r" || name[0] === "R"){
// //        return `${name} plays banjo`;
// //     }else{
// //       return `${name} does not play banjo`
// //     }
   
// //   }

// // We need a function that can transform a string into a number. What ways of achieving this do you know?

// // Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// // const stringToNumber = function(str){
// //     return Number(str)
// //   }

// // Code as fast as you can! You need to double the integer and return it.

// // function doubleInteger(i) {
  
// //     return i*2;
// //   }

// // Count the number of divisors of a positive integer n.

// // Random tests go up to n = 500000, but fixed tests go higher.

// // function getDivisorsCnt(n){
// //     let num=0;
// //     if( n==1 ) return 1;
// //     if( n%Math.sqrt(n)==0 ) num++;
// //     for( var i=1;i<Math.sqrt(n);i++ ){
// //         if( n%i==0 ){
// //             num+=2;
// //         }
// //     }
// //     return num;
// // }

// // Story
// // Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// // Task
// // Write a function that returns both the minimum and maximum number of the given list/array.

// // function minMax(arr) {
// //     let min = Math.min(...arr);
// //     let max = Math.max(...arr);
// //     return [min, max];
// //   }
// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// function testEven(n) {
//     if( n%2 == 0){
//       return true
//     }else{
//       return false
//     }
// }

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// function friend(friends) {
//     return friends.filter(name => name.length === 4);
//   }

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// function dnaStrand(dna) {
//     const complement = {
//         'A': 'T',
//         'T': 'A',
//         'C': 'G',
//         'G': 'C'
//     };
//     return dna.split('').map(nucleotide => complement[nucleotide]).join('');
// }

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// function rowSumOddNumbers(n) {
//     return n * n * n
// }

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// function reverseList(list) {
//return list.reverse()
//}

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// function filter_list(l) {
//     return l.filter(item => typeof item === 'number');
//   }

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

// String.prototype.toAlternatingCase = function () {
//     return this.split('').map(char => {
//       if (char === char.toUpperCase()) {
//         return char.toLowerCase();
//       } else {
//         return char.toUpperCase();
//       }
//     }).join('');
//   }

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// function removeUrlAnchor(url){
//     return url.split('#')[0]
//   }

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// function sumTwoSmallestNumbers(numbers) {
//     // Sort the numbers in ascending order
//     numbers.sort(function(a, b) { return a - b; });
    
//     // Sum the first two elements (the two smallest numbers)
//     return numbers[0] + numbers[1];
//   }
  
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// function gimme(triplet) {
//     const sortedTriplet = [...triplet].sort((a, b) => a - b);
//     const middleValue = sortedTriplet[1]; 
//     return triplet.indexOf(middleValue); 

// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.

// function setAlarm(employed, vacation){
//     if(employed == true && vacation == false){
//       return true
//     }else{
//       return false
//     }
//   }

// Write a function which takes a number and returns the corresponding ASCII char for that value.

// function getChar(c){
//   return String.fromCharCode(c)
// }

// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// function pipeFix(numbers) {
//     let min = Math.min(...numbers);
//     let max = Math.max(...numbers);
//     let result = [];
    
//     for (let i = min; i <= max; i++) {
//       result.push(i);
//     }
    
//     return result;
//   }
  
//   // Example usage:
//   let nums = [1, 2, 3, 5, 6, 8, 9];
//   let result = pipeFix(nums);
//   console.log(result);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// function smallEnough(a, limit) {
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] > limit) {
//         return false;
//       }
//     }
//     return true;
//   }