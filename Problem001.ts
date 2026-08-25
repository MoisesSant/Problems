// https://projecteuler.net/problem=1
// Name: Multiples of 3 or 5

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
