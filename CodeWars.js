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

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//   var val = weight / (height * height);
//   if(val <= 18.5) {
//     return 'Underweight';
//   }
//   if(val <= 25.0) {
//     return 'Normal';
//   }
//   if(val <= 30.0) {
//     return 'Overweight';
//   }
//   return 'Obese';
// }

// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// function enough(cap, on, wait) {
//   if(cap >= on + wait){
//     return 0
//   }else{
//     return on - wait
//   }
// }

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// function highAndLow(numbers){
//   numbers = numbers.split(' ');
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// function getAge(inputString){
//   return parseInt(inputString)
// }

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

// function removeChar(str) {
//   return str.slice(1, -1);
// }

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// function descendingOrder(n){
//   return parseInt(String(n).split('').sort().reverse().join(''))
// }

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// function problem(x){
// if(typeof x==='string'){
// return 'Error';
// // }
// //   //your code here
// //   return x*50+6;
// // }

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// function findUniq(arr) {
//   arr.sort((a,b)=>a-b);
//   return arr[0]==arr[1]?arr.pop():arr[0]
// }

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

// function hero(bullets, dragons){

//   if(dragons*2 <= bullets){
//     return true
//   }else{
//     return false
//   }
// }


// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// function likes(names) {
//   if(names.length === 0) return "no one likes this";
//   if(names.length === 1) return names[0] + " likes this";
//   if(names.length === 2) return names[0] + " and " + names[1] + " like this";
//   if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
//   return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
// }

// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0..

// function find_average(array) {
//   if (array.length === 0){return 0}
//  return array.reduce((previousValue, currentValue) => previousValue + currentValue) / array.length
// }

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// var humanYearsCatYearsDogYears = function(y) {
//   if (y == 1) return [1, 15, 15]
//   if (y == 2) return [2, 24, 24]
//   return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
// }

// Complete function padIt, which accepts 2 parameters:

// 1. str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// 2. n: a number indicating how many times to pad the string.
// Behaviour
// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

// Finally, return the padded string.

// function padIt(str, n){
//       while(n>0){
//             if(n%2 === 0) {
//                   str = str + "*";
//             }else{
//                   str = "*" + str;
//             }
//             n --;
//       }
//       return str;
// }

// Task
// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

// If you forgot how to push an element to an array, please refer to lesson 4.

// function pickIt(arr){
//   var odd=[],even=[]
//   //coding here
//   for (var i=0;i<arr.length;i++){
//     if (arr[i]%2==1) odd.push(arr[i]);
//     else            even.push(arr[i]);
//   }
//   return [odd,even];
// }

// Task
// Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

// You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

// When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

// Return the bag after for loop finished.

// function grabDoll(dolls){
//   var bag=[];
  
//   for(var i = 0; i < dolls.length; i++) {
  
//     if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
//       bag.push(dolls[i]);
//     else
//       continue;
      
//     if(bag.length === 3) break;
//   }
  
//   return bag;
// }

// Task
// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.

// for example:

// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"
// That's all of your work. My work is print your color code on your screen.

// function colorOf(r, g, b) {
//   let R = r.toString(16)
//   let G = g.toString(16)
//   let B = b.toString(16)
  
//   if (r < 16) R = '0' + R
//   if (g < 16) G = '0' + G
//   if (b < 16) B = '0' + B
  
//   return '#' + R + G + B
// }

// Task
// Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.

// The first mission: let all elements in the array keep two decimal places(No need to convert number n).

// The second mission: Traversal arr, count the number of elements which are smaller than n and return it.

// howManySmaller=(arr,n)=>arr.filter(a=>a.toFixed(2)<n).length

// Task
// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

// function cutIt(arr) {
//   var smallest = arr[0].length;
//   for(var i = 0; i < arr.length; i++) {
//     if(arr[i].length < smallest) {
//       smallest = arr[i].length;
//     }
//   }
//   var map = arr.map(function(x) {
//     return x.slice(0, smallest);
//   });
//   return map;
// };

// Task
// Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

// Please return the gap between the first position of c and the last position of c.

// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

// function firstToLast(str,c){
//   var firstIndex = str.indexOf(c);
//   var lastIndex = str.lastIndexOf(c);
//   if (firstIndex === -1) {return -1}
//   else {return lastIndex-firstIndex}  
// }

// Task
// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

// function splitAndMerge(string, separator) {
//   return string.split('')
//         .join(separator + '')
//         .split(separator + ' ' + separator)
//         .join(' ');
// }

// Task
// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

// We translate the sentence into an alien language according to the following rules:

// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

// function alienLanguage(str){
//   var words = str.toUpperCase().split(" ");
//   for (var i = 0; i < words.length; i++) {
//     var precedingChars = words[i].slice(0, -1);
//     var lastChar = words[i].slice(-1).toLowerCase();  
//     words[i] = precedingChars + lastChar;
//   }
//   return words.join(" ");
// }

// Now you have to write a function that takes an argument and returns the square of it.

// function square(num){
//   let result = num*num;
//   return result
// }

// Task
// You get an array of numbers, return the sum of all of the positives ones.

// function positiveSum(arr) {
//    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; ++i) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i + 1]
//     }
//   }
//   return null
// }

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// function squareSum(numbers){
//   return numbers.reduce((sum,num) => sum + (num * num), 0);
// }

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// function between(a, b) {
//   // your code here
//   arr = []
//   for(i = a;i <= b; i++){ 
//       arr.push(i)
//   }
//   return arr
// }

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

// function nbDig(n, d) {
//     let totalOfDigit = 0;
  
//     for(let i = 0; i <= n; i++) {
//       totalOfDigit += (i*i).toString().split('').filter(n => n == d).length;
//     }
      
//     return totalOfDigit;
// }

// n this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// function find_difference(a, b) {
//   return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
// }

// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

// function addFive(num) {
//   var total = num + 5
//   return total
// }

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeExclamationMarks(s) {
//   return s.split('!').join('');
// }

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump/mpg <= fuelLeft
// };

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// function rentalCarCost(d) {
//   if(d <= 2){
//     return d*40
//   }else if(d >= 3 && d < 7){
//     return d*40-20
//   }else{
//     return d*40-50
//   }
// }

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

// var min = function(list){
//     return Math.min(...list)
// }

// var max = function(list){
    
//     return Math.max(...list)
// }

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// const reverseSeq = n => {
// let arr = [];
//   for (let i=n; i>0; i--) {
//     arr.push(i);
//     } return arr;
// };

// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// function repeatStr (n, s) {
//   return s.repeat(n)
// }

// Write a function that removes the spaces from the string, then return the resultant string.

// function noSpace(x){return x.split(' ').join('')}

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// function removeEveryOther(arr){
//   //your code here
//   for (var i = 1; i < arr.length;i++){
//       arr.splice(i,1);
//   }
//   return arr;
// }

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// function twoSort(s) {
//   return s.sort()[0].split('').join('***');
// }

// Messi's Goal Total
// Use variables to find the sum of the goals Messi scored in 3 competitions

// Information
// Messi goal scoring statistics:

// Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5
// Task
// Create these three variables and store the appropriate values using the table above:
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.

// var laLigaGoals = 43
// var championsLeagueGoals = 10
// var copaDelReyGoals = 5

// var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// function cockroachSpeed(s) {
//   return Math.floor(s*100000/3600);
// }

// Complete the function which converts hex number (given as a string) to a decimal number.

// function hexToDec(hexString){
//  return  parseInt(hexString, 16);
// }

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// function simpleMultiplication(number) {
//     if(number%2 == 0){
//       return number * 8
//     }else{
//       return number * 9
//     }
// }

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// function century(year){
//       return Math.ceil(year/100)
// }