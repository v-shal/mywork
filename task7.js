function taskSeven(){

    const year = Number(prompt("Enter Year:"));
    const month = Number(prompt("Enter Index of Month between 0 to 11 :"));

    let monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    function getNoOfDays(year,month){
        let date= new Date(year,month+1,0);
        console.log(`There are ${date.getDate()} days in ${monthArray[month]} month of year ${year}.`);
    }

    getNoOfDays(year,month);

}