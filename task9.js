function taskNine(){

    let yearOne = Number(prompt("Enter 1st Year:"));
    let monthOne = Number(prompt("Enter Index of Month(first) between 0 to 11 :"));

    let yearTwo = Number(prompt("Enter 2nd Year:"));
    let monthTwo = Number(prompt("Enter Index of Month(second) between 0 to 11 :"));

    let monthDiff = 0;
    if(yearOne > yearTwo){
        monthDiff = (Math.abs(yearTwo-yearOne)-1)*12 + monthOne + (11-monthTwo+1);
    }
    else{
        monthDiff = (Math.abs(yearTwo-yearOne)-1)*12 + monthTwo + (11-monthOne+1);
    }
    console.log(`There are ${monthDiff} months difference between given date.`);
}