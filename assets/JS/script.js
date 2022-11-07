

const allMonths = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");


const time = document.getElementById("currTime");
const date = document.getElementById("currDate");

//change the font color of time
document.querySelector('#color-select-time').onchange = t =>{
    console.log(t.target.value);
    time.style.color = t.target.value;
};

//change the font color of date
document.querySelector('#color-select-date').onchange = d =>{
    date.style.color = d.target.value;
};

//change the shadow color of time
document.querySelector('#color-select-tshadow').onchange = ts =>{
    time.style.textShadow = "0 0 3px" + ts.target.value + ", 0 0 5px" + ts.target.value;
};

//change the shadow color of date
document.querySelector('#color-select-dshadow').onchange = ds =>{
    date.style.textShadow = "0 0 3px" + ds.target.value + ", 0 0 5px" + ds.target.value;
};

let slideIndex = 0;
showSlides();
//
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 15000); // Change image every 15 seconds
}
//creates clock
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
//start clock on load
window.onload=function(){
    GetClock();
    setInterval(GetClock, 1000)
};
