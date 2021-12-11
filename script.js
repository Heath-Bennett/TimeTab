

var allMonths = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

const GetClock = () => {
    const d = new Date();
    const newMonth= d.getMonth();
    const newDate= d.getDate(); 
    const newYear = d.getFullYear();
    const newHour = d.getHours();
    const newMin= d.getMinutes()
    const meridiem = " ";

    if (newYear<1000) {
        newYear += 1000;
    };

    if (newHour == 0){
        meridiem = " AM";
        newHour = 12;
    }
    else if (newHour == 12){
        meridiem = " PM";
        newHour -= 12;
    }

    document.getElementById('currTime').innerHTML = `${allMonths[newMonth]} ${newDate}, ${newYear} ${newHour}:${newMin}${meridiem} `;

};

window.onload=function(){
    GetClock();
    setInterval(GetClock, 1000)
};
