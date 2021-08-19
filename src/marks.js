const marks = (numbers) => {
  let TotalsOfNumbers = 0;
  numbers.forEach((element) => {
    TotalsOfNumbers = TotalsOfNumbers + element;
  });

  const average = TotalsOfNumbers / numbers.length;
  return average;
};

const data = {
  emp: { name: "zeesha" },
  org: { add: "Mumbai" },
  city: { 1: "Pune", 2: "mumbai", 3: ["Singapore", "Switzerland"] },
};

const keyList = Object.keys(data);
const newArr = keyList.map((key) => data[key]);

console.log(newArr);

// console.log(marks([45, 43, 67, 89, 68]));

// console.log(marks([95, 90, 87, 94, 87, 86, 80]));

// console.log(marks([78, 89, 35, 68, 99, 95, 97, 98, 69]));
