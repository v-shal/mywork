function taskTen(){

    let year = Number(prompt("Enter year:"));
    let month = Number(prompt("Enter Index of Month between 0 to 11 :"));
    let date = Number(prompt("Enter Date between 1 to 31 :"));

    function dateFun(year,month,date){
        let d = new Date(year,month,date);
        let day = d.getDay();
        let newDate = new Date(year,month,date+(7-day));
        console.log(newDate);
    }
    
    dateFun(year,month,date);

}