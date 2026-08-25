// https://projecteuler.net/problem=2
// Name: Even Fibonacci Numbers

let result002: number[] = [1, 2];
let ltn: number[] = [1, 2];
let a: number, b: number, c: number;

function evenFibonacciNumbers() {
  a = ltn[0];
  b = ltn[1];

  while (ltn[1] <= 10 ** 6 * 4) {
    c = a + b;
    if (c > 10 ** 6 * 4) break;
    a = b; //2
    b = c; //3
    ltn[0] = a;
    ltn[1] = b;
    result002.push(b);
  }

  console.log(result002);
}

evenFibonacciNumbers();
