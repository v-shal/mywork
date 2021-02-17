function taskThree() {
  let str = prompt("Enter Paragraph :");
  console.log(str);
  let strLength = +str.length;

  console.log(`No of Character : ${strLength}`);

  let word = str.split(" ");
  let words = word.filter(function (item) {
    return item != "";
  });

  console.log(`No of Words : ${words.length}`);

  let space = +word.length - 1;
  console.log(`No of Space : ${space}`);
}
