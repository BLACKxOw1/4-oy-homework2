// //                                  Func1
// const power = (a, n) => {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= a;
//   }
//   return result;
// };
// console.log(power(3, 5));

// //                                  Func2
// const mean = (a, b) => {
//   const result1 = (a + b) / 2;
//   const result2 = Math.sqrt(a * b);
//   return [result1, result2];
// };
// console.log(mean(12, 58));

// //                                  Func3
// const sign = (n) => {
//   if (n > 0) {
//     return 1;
//   } else if (n < 0) {
//     return -1;
//   } else {
//     return 0;
//   }
// };
// console.log(sign(10));

// //                                  Func4
// const numberOfRoots = (A, B, C) => {
//   let D = B ** 2 - 4 * A * C;
//   if (D > 0) {
//     return 2;
//   } else if (D == 0) {
//     return 1;
//   } else if (D < 0) {
//     return 0;
//   }
// };
// console.log('ildizlar sonini :', numberOfRoots(1, -6, 9), 'ta');

// //                                  Func5
// const areaCircle = (R) => {
//   const S = Math.PI * R * R;
//   return S.toFixed(2);
// };
// console.log('Doiraning yuzi :', areaCircle(5));

// //                                  Func6
// const sumRange = (A, B) => {
//   let result = 0;
//   if (A > B) {
//     return 0;
//   } else {
//     for (let i = A; i <= B; i++) {
//       result += i;
//     }
//     return result;
//   }
// };
// console.log('A va B sonlari orasidagi sonlar yig\'indisi :', sumRange(8, 10));

// //                                  Func7
// const calc = (A, B, S) => {
//   if (S === "+") {
//     return A + B;
//   } else if (S === "-") {
//     return A - B;
//   } else if (S === "*") {
//     return A * B;
//   } else if (S === "/") {
//     return A / B;
//   } else {
//     return 0;
//   }
// };
// console.log(calc(10, 15, "+"));

// //                                  Func8
// const isEven = (K) => {
//   if (K % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log('juft sonmi', isEven(11));

// //                                  Func9
// const sortABC = (a, b, c) => {
//   let min;
//   let mid;
//   let max;

//   if (a <= b && a <= c) {
//     min = a;
//     if (b <= c) {
//       mid = b;
//       max = c;
//     } else {
//       mid = c;
//       max = b;
//     }
//   } else if (b <= a && b <= c) {
//     min = b;
//     if (a <= c) {
//       mid = a;
//       max = c;
//     } else {
//       mid = c;
//       max = a;
//     }
//   } else {
//     min = c;
//     if (a <= b) {
//       mid = a;
//       max = b;
//     } else {
//       mid = b;
//       max = a;
//     }
//   }

//   return min + ", " + mid + ", " + max;
// };
// console.log(sortABC(10, 5, 8));

// //                                  Func10
// const isPowerN = (K, N) => {
//   if (K <= 0 || N <= 1) return false;

//   let power = 1;

//   while (power < K) {
//     power *= N;
//   }

//   return power === K;
// };
// console.log(isPowerN(27, 3));

// //                                  Func11
// const isPrime = (n) => {
//   if (n < 2) return false;

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// };
// console.log(isPrime(7));

// //                                  Func12
// let tub = 0;

// const isPrime2 = (N) => {
//   let loop = 0;
//   if (N < 2) {
//     return false;
//   }
//   for (let i = 1; i <= N; i++) {
//     if (N % i == 0) {
//       loop++;
//     }
//   }
//   if (loop == 2) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const numberOfPrime = (number) => {
//   let count = 0;
//   for (let j = 1; j <= number; j++) {
//     if (isPrime2(j)) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(numberOfPrime(10));

// //                                  Func13
// const digitCount = (K) => {
//   return K.toString().length;
// };

// const digitNth = (K, N) => {
//   let count = digitCount(K);

//   if (N > count) {
//     return -1;
//   }

//   return parseInt(K.toString()[N - 1]);
// };
// console.log(digitNth(105782, 7));

// //                                  Func14
// const inverseNumber = (N) => {
//   let inverse = '';
//   let last = 0;
//   while (N != 0) {
//     last = N % 10;
//     N = Math.floor(N / 10);
//     inverse += last;
//   }
//   return parseInt(inverse);
// };
// console.log(inverseNumber(12456));

// //                                  Func15
// const inverseNumber2 = (N) => {
//   let inverse = '';
//   let last = 0;
//   while (N != 0) {
//     last = N % 10;
//     N = Math.floor(N / 10);
//     inverse += last;
//   }
//   return parseInt(inverse);
// };

// const isPalindrom = (N) => {
//   return N == inverseNumber2(N);
// };
// console.log(isPalindrom(1224221));

// //                                  Func16
// const factorial = (N) => {
//   if (N <= 0) {
//     return 1;
//   } else {
//     let result = 1;
//     for (let i = 1; i < N; i++) {
//       result *= i;
//     }
//     return result;
//   }
// };
// console.log(factorial(0));

// //                                  Func17
// const getSum3 = (N) => {
//   if (N <= 0) {
//     return '0 dan katta son kiriting';
//   } else {
//     let result = 0;
//     for (let i = 0; i <= N; i += 3) {
//       result += i;
//     }
//     return result;
//   }
// };
// console.log(getSum3(15));

// //                                  Func18
// const sumOddEven = (N) => {
//   if (N <= 0) {
//     return '0 dan katta son kiriting';
//   } else {
//     let odd = 0;
//     let even = 0;
//     for (let i = 0; i <= N; i++) {
//       if (i % 2 === 1) {
//         odd += i;
//       } else {
//         even += i;
//       }
//     }
//     return [even, odd];
//   }
// };
// console.log(sumOddEven(10));

// //                                  Func19
// const invertTime = (H, M, S) => {
//   let T = H * 3600 + M * 60 + S;
//   return T;
// };
// console.log(invertTime(0, 6, 40));

// //                                  Func20
// const invertTime2 = (H, M, S) => {
//   if (S > 0) {
//     S = S - 1;
//   } else {
//     if (M > 0) {
//       M = M - 1;
//       S = 59;
//     } else {
//       if (H > 0) {
//         H = H - 1;
//         M = 59;
//         S = 59;
//       } else {
//         H = 23;
//         M = 59;
//         S = 59;
//       }
//     }
//   }
//   return H + ":" + M + ":" + S;
// };
// console.log(invertTime2(0, 6, 0));

// //                                  Func21
// const isLeapYear = (Y) => {
//   if (Y % 400 === 0) {
//     return true;
//   } else if (Y % 100 === 0) {
//     return false;
//   } else if (Y % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(`kabisa yilimi?  ${isLeapYear(2040)}`);

// //                                  Func22
// const isLeapYear2 = (Y) => {
//   if (Y % 400 === 0) {
//     return true;
//   } else if (Y % 100 === 0) {
//     return false;
//   } else if (Y % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const monthDays = (M, Y) => {
//   if (M === 1 || M === 3 || M === 5 || M === 7 || M === 8 || M === 10 || M === 12) {
//     return 31;
//   }

//   if (M === 4 || M === 6 || M === 9 || M === 11) {
//     return 30;
//   }

//   if (M === 2) {
//     if (isLeapYear2(Y)) {
//       return 29;
//     } else {
//       return 28;
//     }
//   }

//   return -1;
// };
// console.log(monthDays(2, 2020));
