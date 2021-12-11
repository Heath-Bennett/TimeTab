

var allMonths = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

const GetClock = () => {
    const d = new Date();
    const newMonth= d.getMonth();
    const newDate= d.getDate(); 
    const newYear = d.getFullYear();
    const newHour = d.getHours();
    const newMin= d.getMinutes()
    var meridiem = " ";

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
    }
    document.getElementById('currTime').innerHTML = `${allMonths[newMonth]} ${newDate}, ${newYear} ${newHour}:${newMin}${meridiem} `;

};

window.onload=function(){
    GetClock();
    setInterval(GetClock, 1000)
};
