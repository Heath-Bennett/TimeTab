

var allMonths = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

const GetClock = () => {
    const d = new Date();
    const newMonth= d.getMonth();
    const newDate= d.getDate(); 
    let newYear = d.getFullYear();
    let newHour = d.getHours();
    let newMin= d.getMinutes();
    let meridiem = " ";

    if (newYear<1000) {
        newYear += 1000;
    }

    if (newMin <= 9){
        newMin = "0" + newMin;
    }

    
    if (newHour >= 0 && newHour <= 11){
        meridiem = " AM"
    }
    else{
        meridiem = " PM"
        if (newHour >= 13){
            newHour = newHour - 12;
        }
    }
    document.getElementById('currTime').innerHTML = `${newHour}:${newMin}${meridiem}`;
    document.getElementById('currDate').innerHTML = `${allMonths[newMonth]} ${newDate}, ${newYear}`;
};

window.onload=function(){
    GetClock();
    setInterval(GetClock, 1000)
};
