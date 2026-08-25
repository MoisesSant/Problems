// https://projecteuler.net/problem=3

/* 
Question 3: Largest Prime Factor

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143?
*/

let n: number = 732144532; // Put any number you want
let pn: number = 2;
let pnList: number[] = [];

function LargestPrimeNum(number: number) {
  while (!(pn >= number)) {
    pn++;
    if (number % pn == 0) {
      pnList.push(pn);
      console.log(pnList);
      if (number / pn === pnList[0]) break;
    }
  }
  console.log("Final Result: ");
  console.log(pnList);
}

LargestPrimeNum(n);

/*

Findings:
        71,          839,
       1471,        6857,
      59569,      104441,
     486847,     1234169,
    5753023,    10086647,
   87625999,   408464633,
  716151937,  8462696833

  Which 600851475143(n) / 8462696833(pn) = 71(pnList[0]) And 600851475143(n) / 71(pn) = 8462696833(pnList[13])
  
*/
