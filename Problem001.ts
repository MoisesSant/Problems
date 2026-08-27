// https://projecteuler.net/problem=1

/*
Question 1: Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

let result001a: number[] = [];
let result001b: number[] = [];

function multiples(a: number, b: number) {
  while (a && b < 1000) {
    result001a.push(a);
    result001b.push(b);
    b *= 2;
    a *= 2;
  }
  console.log(result001a);
  console.log(result001b);
}

multiples(3, 5);

// it's wrong, but I'll not change
