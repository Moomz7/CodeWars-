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

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// function remove(s) {
//   return s.endsWith('!') ? s.slice(0, -1) : s;
// }

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

// function updateLight(current) {
//   if(current == "green"){
//     return "yellow"
//   }else if(current == "yellow"){
//     return "red"
//   }else if(current == "red"){
//     return "green"
//   }
// }

// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20

// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
// Make sure your solution takes into account all of the nesting within the stairs array.

// Each weekday in the stairs array is an array.

// sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// Your function should return the 20 year estimate of the stairs climbed using the formula above.

// const stairsIn20 = s => s.flat().reduce((p,c)=> p+c ,0)*20

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

// function include(arr, item){
//   return arr.includes(item)
// }

// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// function twoDecimalPlaces(n) {
  
//   let result = Number(n.toFixed(2))
  
//   return result
// }

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// function squareArea(A){
//   // Calculate the circumference of A 
//   const circumference = A * 4;
  
//   // Calculate the radius of A
//   const radius = circumference / (Math.PI * 2);
  
//   // Calculate the area of the square, rounded to 2 decimal places
//   const area = Number((radius**2).toFixed(2));
  
//   // Return the result
//   return area;
// }

// Create a function named combineNames/combine_names/CombineNames that accepts two parameters (first and last name). The function should return the full name.

// function combineNames(firstName, lastName){
//   return `${firstName}` + " " + `${lastName}`
// }

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// function arithmetic(a, b, operator){
//   if(operator == "add"){
//     return a + b
//   }else if(operator == "subtract"){
//     return a - b
//   }else if(operator == "multiply"){
//     return a*b
//   }else if(operator == "divide"){
//     return a/b
//   }
// }

// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

// function xor(a, b) {
//   if(a == b){
//     return false
//   }else if(a == true && b == false){
//     return true
//   }else if(a == false && b == true){
//     return true
//   }else{
//     return false
//   }
// }

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// 1. "I love you"
// 2. "a little"
// 3. "a lot"
// 4. "passionately"
// 5. "madly"
// 6. "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

// function howMuchILoveYou(petals) {
//   const phrases = [
//     "I love you",
//     "a little",
//     "a lot",
//     "passionately",
//     "madly",
//     "not at all"
//   ];
//   return phrases[(petals - 1) % 6];
// }

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

// function pillars(num_pill, dist, width) {
//   return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
// }

// Create a function that takes three arguments:

// a value to be evaluated for truthiness.
// a function to execute if the first argument is truthy.
// a function to execute if the first argument is falsy.
// If the first argument evaluates to truthy, call the second argument (a function). If it evaluates to falsy, call the third argument instead (also a function).

// function _if(bool, func1, func2) {
//   return bool ? func1() : func2()
// }

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// function position(letter){
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
// }

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// function invert(array) {
//   var newArr = [];
//   for(var i = 0; i < array.length; i++){
//     newArr.push(-array[i]);
//   }
//    return newArr;
// }

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// const areaOrPerimeter = function(l , w) {
//   if(l == w){
//     return l*w
//   }else{
//     return l + l + w + w
//   }
// };

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

// function gooseFilter (birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   return birds.filter( bird => geese.indexOf(bird) < 0 );
// };

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// function multipleOfIndex(array) {
//   return array.filter((x,i) => x == 0 || x % i === 0)
// }

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// function findSmallestInt(arr) {
//   return Math.min(...arr);
// }

// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

// function getDrinkByProfession(param) {
//   switch (param.toLowerCase()) {
//     case 'jabroni':
//       return 'Patron Tequila';
//     case 'school counselor':
//       return 'Anything with Alcohol';
//     case 'programmer':
//       return 'Hipster Craft Beer';
//     case 'bike gang member':
//       return 'Moonshine';
//     case 'politician':
//       return 'Your tax dollars';
//     case 'rapper':
//       return 'Cristal';
//     default:
//       return 'Beer';
//   }
// }

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

// function vowelIndices(word){
//   vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
//   result = []
//   for (var i = 0; i < word.length; i++) {
//     if (vowels.indexOf(word[i]) != -1) {
//       result.push(i + 1);
//     }
//   }
//   return result;
// }

// You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function that takes the website date/time in its original string format and returns the shortened format.

// Input
// Input will always be a string, e.g., "Friday May 2, 7pm". 

// Output
// Output will be the shortened string, e.g., "Friday May 2".

// const shortenToDate = longDate => longDate.slice(0,longDate.indexOf(','))

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// function warnTheSheep(queue) {
//   var sheep = queue.length - queue.indexOf('wolf') - 1
//     if (sheep ==0 ){
//       return "Pls go away and stop eating my sheep"
//     } else {
//       return "Oi! Sheep number "+ sheep +"! You are about to be eaten by a wolf!"
//     }
// }

// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

// Examples (Input -> Output)
// 15  -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

// function usdcny(usd) {
//   return `${(usd*6.75).toFixed(2)} Chinese Yuan`
// }

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }