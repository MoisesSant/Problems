// https://projecteuler.net/problem=4

/* 
Question 4: Largest Palindrome Product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

let n1: number;
let n2: number;
let result004: number;

function largestPolidrome() {
  n1 = 999;
  n2 = 991;
  result004 = n1 * n2;
  console.log(result004);
}

largestPolidrome();
