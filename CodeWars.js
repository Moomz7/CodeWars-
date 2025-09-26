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

<<<<<<< HEAD
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//    if(weight/(height*height) <= 18.5){
//      return "Underweight"
//    }else if(weight/(height*height) <= 25.0){
//       return "Normal"
//    }else if(weight/(height*height) <= 30.0){
//       return "Overweight"
//    }else if(weight/(height*height) > 30){
//       return "Obese"
//    }
// }
=======
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

// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

// function combat(health, damage) {
//     if(health > damage){
//       return health - damage
//     }else if(health < damage){
//       return 0
//     }else{
      // return 0 
 //       }
//   }

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

// function plural(n) {
//       return n !== 1;
//     }

// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]

// var websites = [];
// websites.push("codewars");
// console.log(websites);

// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// var capitals = function (word) {
// 	let indices = [];
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] >= 'A' && word[i] <= 'Z') {
//             indices.push(i);
//         }
//     }
//     return indices;
// };
// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// function checkForFactor (base, factor) {
//       if(base % factor == 0){
//         return true
//       }else{
//         return false
//       }
//     }
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// function getGrade (s1, s2, s3) {
//       if((s1+s2+s3)/3 >= 90 && (s1+s2+s3)/3 <= 100){
//         return 'A'
//       }else if((s1+s2+s3)/3 >= 80 && (s1+s2+s3)/3 < 90){
//         return 'B'
//       }else if((s1+s2+s3)/3 >= 70 && (s1+s2+s3)/3 < 80){
//         return 'C'
//       }else if((s1+s2+s3)/3 >= 60 && (s1+s2+s3)/3 < 70){
//         return 'D'
//       }else{
//         return 'F'
//       }
//     }

// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//       return laLigaGoals + copaDelReyGoals + championsLeagueGoals
//     }

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// const countSheep = num => {
//       let val = '';
//       for (let i = 1; i <= num; i++) {
//         val += `${i} sheep...`;
//       }
//       return val;
//     }

// Complete the function which converts a binary number (given as a string) to a decimal number.

// function binToDec(bin){
//   return parseInt(bin,2);
// }

// Task
// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

// Note: Input will either be a positive integer (or a string for untyped languages).

// function apple(x){
// if(x*x > 1000){
//   return "It's hotter than the sun!!"
// }else{
//   return "Help yourself to a honeycomb Yorkie for the glovebox."
// }
// }

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// function otherAngle(a, b) {
//   return 180-(a+b);
// }

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// function sumOfDifferences(arr) {
//   arr.sort((a, b) => a - b);
//   let b = 0;
//   for(let a = arr.length - 1; a > 0; a--) {
//     b += arr[a] - arr[a - 1];
//   }
//   return b;
// }

// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate)=> 
//   enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate)

// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// function opposite(number) {
//   return(-number);
// }

// Write a function that returns a string in which firstname is swapped with last name.

// function nameShuffler(str){
//   return str.split(" ").reverse(str).join(" ")
// }

// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

// function chromosomeCheck(sperm) {
  
//   if(sperm === "XX"){
//     return "Congratulations! You're going to have a daughter."
//   }else if(sperm === "XY"){
//     return "Congratulations! You're going to have a son."
//   }
// }

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// function printArray(array){
//   return array.join(",")
// }