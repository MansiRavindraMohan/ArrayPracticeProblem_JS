const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);
const num3 = parseInt(process.argv[4]);

if (num1 + num2 + num3 === 0) {
  console.log("Sum of three integers is zero.");
} else {
  console.log("Sum of three integers is not zero.");
}