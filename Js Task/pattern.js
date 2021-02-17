function taskSix() {
  const patternLength = prompt("Enter Number of Rows:");

  let pattern1 = "";
  let pattern2 = "";
  for (let i = 0; i < patternLength; i++) {
    for (let j = 0; j < i + 1; j++) {
      pattern1 = pattern1.concat("*");
    }
    pattern1 = pattern1.concat("\n");
  }
  console.log(pattern1);

  for (let i = 0; i < patternLength; i++) {
    for (let k = patternLength - i; k >= 0; k--) {
      pattern2 = pattern2.concat(" ");
    }
    for (let j = 1; j <= i + 1; j++) {
      pattern2 = pattern2.concat("*");
    }
    pattern2 = pattern2.concat("\n");
  }
  console.log(pattern2);
}
