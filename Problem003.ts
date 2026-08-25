// https://projecteuler.net/problem=3
// Name: Largest Prime Factor

let n: number = 600851475143; // Put the number that you want
let pn: number = 2;
let pnList: number[] = [];

function LargestPrimeNum(number: number) {
  while (!(pn >= number)) {
    pn++;
    if (number % pn == 0) {
      pnList.push(pn);
      console.log(pnList);
      if (number / pn === pnList[0]) return;
    }
  }
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
