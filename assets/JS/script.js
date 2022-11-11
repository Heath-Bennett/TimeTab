

const allMonths = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");


const time = document.getElementById("currTime");
const date = document.getElementById("currDate");
let speedLabel = document.getElementById("speedLabel");
let slideShowSpeed = 15000;


//get the value of speed from the range element
document.querySelector('#speed').onchange = s =>{
    speedLabel.innerHTML = "Speed: " + s.target.value;
    slideShowSpeed = s.target.value;
}

//change the font color of time
document.querySelector('#color-select-time').onchange = t =>{
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

//functionality for the changing of slides
let slideIndex = 1;
let t;
showSlides(slideIndex);//this calls the function for the slides

function plusSlides(n) {
    showSlides(slideIndex += n);
};// this advances the slide n amount of times

function startSlide () {
    clearTimeout(t)
    plusSlides(1);
    t = setTimeout(startSlide, slideShowSpeed);
};// this starts the slideshow

function pauseSlide () {
    clearTimeout(t);
}// this pauses the slideshow

document.querySelector('#play').onclick = () => {
    slideOn = 0;
    startSlide();
};//this listens for the play button to be clicked then calls the startSlide function

document.querySelector('#next').onclick = () => {
    plusSlides(1);
};//this listens for the next button then calls the plusSlides function

document.querySelector('#previous').onclick = () => {
    plusSlides(-1);
};//this listens for the previous button then calls the plusSlides function

document.querySelector('#pause').onclick = () => {
    pauseSlide();
};//this listens for the pauseSlide button then calls the pauseSlide function



function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display="none";
    }
    
    slides[slideIndex-1].style.display = "block";
    }// displays the slides and restarts them at one if the end is reached. 
    
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
