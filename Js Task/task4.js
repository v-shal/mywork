function taskFour() {
  const minRange = Number(prompt("Enter your minimum range:"));
  const maxRange = Number(prompt("Enter your maximum range:"));

  let array = [];
  function giveArray(min, max) {
    for (let i = min; i <= max; i++) {
      array.push(i);
    }
  }

  giveArray(minRange, maxRange);
  console.log(array);

  let sum = 0;
  let sumArray = [];
  function findSum(m, n) {
    if (m == n + 1) {
      return sumArray;
    } else {
      sum += m;
      sumArray[sumArray.length] = sum;
      return findSum(m + 1, n);
    }
  }

  findSum(minRange, maxRange);
  console.log(sumArray);
}
