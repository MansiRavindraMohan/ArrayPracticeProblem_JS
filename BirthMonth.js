let birthMonths = new Map();
let year92 = 794880000000; // January 1, 1992 in milliseconds
let year93 = 828288000000; // December 31, 1993 in milliseconds

for (let i = 1; i <= 50; i++) {
  let birthDate = new Date(Math.floor(Math.random() * (year93 - year92)) + year92);
  let month = birthDate.getMonth();

  if (birthMonths.has(month)) {
    let persons = birthMonths.get(month);
    persons.push(`Person ${i}`);
    birthMonths.set(month, persons);
  } else {
    birthMonths.set(month, [`Person ${i}`]);
  }
}

for (let [month, persons] of birthMonths) {
  console.log(`Month ${month + 1}: ${persons.join(", ")}`);
}