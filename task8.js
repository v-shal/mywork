function taskEight(){

    const year = Number(prompt("Enter Year:"));
    const month = Number(prompt("Enter Index of Month between 0 to 11 :"));

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    function getDayName(year,month){
        let date = new Date(year,month+1,0);
        console.log(`${days[date.getDay()]} is the last day of ${monthArray[month]} month of year ${year}.`);
    }

    getDayName(year,month);


}