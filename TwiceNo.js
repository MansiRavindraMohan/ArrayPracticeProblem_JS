let repeatedDigits = [];

for (let i = 0; i <= 100; i++) {
  let digits = i.toString().split("");
  if (digits[0] === digits[1]) {
    repeatedDigits.push(i);
  }
}

console.log(repeatedDigits);
