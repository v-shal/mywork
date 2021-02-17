function taskEleven(){

    let year = Number(prompt("Enter year:"));
    let month = Number(prompt("Enter Index of Month between 0 to 11 :"));
    let date = Number(prompt("Enter Date between 1 to 31 :"));
    let week = Number(prompt("Enter No of weeks you want to add"));

    let d = new Date(year,month,date + week*7);

    console.log(d);

}