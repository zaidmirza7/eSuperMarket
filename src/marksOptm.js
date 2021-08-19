const marks = (numbers) =>
  numbers.reduce((acc, curr) => acc + curr) / numbers.length;

console.log(marks([45, 43, 67, 89, 68]));

console.log(marks([95, 90, 87, 94, 87, 86, 80]));

console.log(marks([78, 89, 35, 68, 99, 95, 97, 98, 69]));
