function taskTwo() {
  const numTotal = Number(prompt("Enter total of numbers:"));
  const minRange = Number(prompt("Enter your minimum Range:"));
  const maxRange = Number(prompt("Enter your maximum Range:"));
  const nNum = Number(prompt("Enter nth smallest number to find:"));
  let numbers = new Array(+numTotal);

  function randomNum(min, max) {
    return Math.floor(Math.random() * (maxRange - minRange) + minRange);
  }

  for (let i = 0; i < numTotal; i++) {
    numbers[i] = randomNum(minRange, maxRange);
    //console.log(numbers[i]);
  }
  console.log(numbers);
  let temp;
  function findNthNum(n) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
          temp = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = temp;
        }
      }
    }
    //console.log(numbers);
    return numbers[n - 1];
  }

  const nthNumber = findNthNum(nNum);
  console.log(numbers);
  console.log(nthNumber);
}
