function taskFive() {
  const fullName = prompt("Enter your full name:");

  let i = 0;
  let firstName = " ";
  let lastName = " ";
  let index = 0;
  let lastIndex = 0;

  function findFirstName(name) {
    let tempArray = name.split(" ");
    firstName = tempArray[0];
    lastName = name.slice(name.indexOf(" ") + 1, name.length);
    let arrayName = [];
    arrayName.push(firstName);
    arrayName.push(lastName);
    return arrayName;
  }
  let nameArray = findFirstName(fullName);
  //console.log(nameArray);
  console.log(`FirstName: ${firstName}`);
  console.log(`LastName: ${lastName}`);

  const dataSize = Number(prompt("Enter count of users:"));
  let dataArray = [];

  for (let i = 0; i < dataSize; i++) {
    let userFullName = " ";
    dataArray[i] = {};
    userFullName = prompt(`Enter ${i + 1} user's fullname:`);
    //dataArray[i] = findFirstName(userFullName);
    nameArray = findFirstName(userFullName);
    dataArray[i].firstName = nameArray[0];
    dataArray[i].lastName = nameArray[1];
  }
  console.log(dataArray);

  let uperCaseArray = [].concat(dataArray);
  uperCaseArray.forEach(function (item) {
    item.firstName = item.firstName.toUpperCase();
    item.lastName = item.lastName.toUpperCase();
  });
  const str = prompt("Enter your text to search:");
  const searchName = str.toUpperCase();

  function searchElement(dname, array) {
    for (let i = 0; i < dataSize; i++) {
      if (array[i].firstName.includes(dname)) {
        console.log(array[i]);
      }
    }
  }
  searchElement(searchName, uperCaseArray);
}
