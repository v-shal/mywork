function taskOne() {
  const inLength = prompt("Enter your length of total inputs:"); // length of input
  let inArray = new Array(inLength); // declaring array of input size

  //taking input from user and store it firstname and lastname wise
  for (let i = 0; i < inLength; i++) {
    inArray[i] = {};
    const fullName = prompt(`Enter ${i + 1} user's name:`);
    firstNameLastName = findFirstName(fullName);
    inArray[i].name = {};
    inArray[i].name.firstName = firstNameLastName[0].toUpperCase();
    inArray[i].name.lastName = firstNameLastName[1].toUpperCase();
    inArray[i].age = prompt(`Enter ${i + 1} user's age:`);
    console.log(
      `FirstName:${inArray[i].name.firstName}, LastName:${inArray[i].name.lastName}, Age:${inArray[i].age}`
    );
  }
  console.log(inArray);

  // function to find firstname and lastname from fullname input
  function findFirstName(name) {
    let tempArray = name.split(" ");
    firstName = tempArray[0];
    lastName = name.slice(name.indexOf(" ") + 1, name.length);
    let arrayName = [];
    arrayName.push(firstName);
    arrayName.push(lastName);
    return arrayName;
  }

  let searchUser = prompt("Enter your string to find match with Input array:");
  searchUser = searchUser.toUpperCase();

  // finding match based on user choise
  let flag = 0;
  function findMatch(str, inArray) {
    for (let i = 0; i < inLength; i++) {
      if (inArray[i].name.firstName.includes(str)) {
        console.log(inArray[i]);
        flag = 1; // flag is set to 1 if user search based on firstname
      } else if (inArray[i].name.lastName.includes(str)) {
        console.log(inArray[i]);
        flag = 2; //// flag is set to 1 if user search based on firstname
      }
    }
  }
  findMatch(searchUser, inArray);

  //sortarray function to sort
  let sortedArray = [].concat(inArray);
  function sortArray(sortedArray) {
    for (let i = 0; i < sortedArray.length; i++) {
      for (let j = i + 1; j < sortedArray.length; j++) {
        if (flag === 2) {
          // if searching done based on lastname
          if (sortedArray[i].name.firstName > sortedArray[j].name.firstName) {
            let temp = sortedArray[i];
            sortedArray[i] = sortedArray[j];
            sortedArray[j] = temp;
          }
        }
        if (flag === 1) {
          // if searching done based on firstname
          if (sortedArray[i].name.lastName > sortedArray[j].name.lastName) {
            let temp = sortedArray[i];
            sortedArray[i] = sortedArray[j];
            sortedArray[j] = temp;
          }
        }
      }
    }
  }
  sortArray(sortedArray);
  console.log(sortedArray);
}
