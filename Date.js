const dated = document.getElementById('Date-today'); 

const todayName = document.getElementById('day-today');
function date (){

    var dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]

    

    let tdate = new Date();

    let cdate = tdate.getDate();

    let month = tdate.getMonth() + 1;

    let year = tdate.getFullYear();

    let day = dayNames[tdate.getDay()];

    

    let result = cdate+"/"+month+"/"+year;


    dated.innerHTML = result;
    
    todayName.innerHTML = day;
}

setInterval (date,1000);