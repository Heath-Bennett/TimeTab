
//Declare Variables
const allMonths = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
let slideShowSpeed = 15000;
let slideIndex = 1;
let isTimeItalicPressed = 0;
let isTimeBoldPressed = 0;
let isTimeUnderlinePressed = 0;
let isDateItalicPressed = 0;
let isDateBoldPressed = 0;
let isDateUnderlinePressed = 0;
let t;
const time = document.getElementById("currTime");
const date = document.getElementById("currDate");
const speedLabel = document.getElementById("speedLabel");
const selectFontTime = document.querySelector('#font-select-time');
const currentTime = document.querySelector('#currTime');
const selectFontDate =  document.querySelector('#font-select-date');
const currentDate = document.querySelector('#currDate');


//get the value of speed from the range element
document.querySelector('#speed').onchange = s =>{
    speedLabel.innerHTML = "Speed: " + s.target.value;
    slideShowSpeed = s.target.value * 1000;
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

document.querySelector('#italic-time').onclick = () => {
    if (isTimeItalicPressed === 0){
        isTimeItalicPressed = 1;
        currentTime.style.fontStyle = "italic";
    }
    else {
        isTimeItalicPressed = 0;
        currentTime.style.fontStyle = 'normal';
    }
};//Adds and removes Italics from time

document.querySelector('#bold-time').onclick = () => {
    if (isTimeBoldPressed === 0){
        isTimeBoldPressed = 1;
        currentTime.style.fontWeight = 'bold';
    }
    else {
        isTimeBoldPressed = 0;
        currentTime.style.fontWeight = 'normal';
    }
};//Adds and removes Bold from time

document.querySelector('#underline-time').onclick = () => {
    if (isTimeUnderlinePressed === 0){
        isTimeUnderlinePressed = 1;
        currentTime.style.textDecoration = 'underline';
    }
    else {
        isTimeUnderlinePressed = 0;
        currentTime.style.textDecoration = 'none';
    }
}//adds and removes underline from time

selectFontTime.onchange = () => {
    if (selectFontTime.value === 'lobster'){
        currentTime.style.fontFamily = 'lobster, cursive';
        currentTime.style.fontSize = '248px'
    }
    else if (selectFontTime.value === 'geostarFill'){
        currentTime.style.fontFamily = '"Geostar Fill", cursive';
        currentTime.style.fontSize = '146px'
    }
    else if (selectFontTime.value === 'dancingScript'){
        currentTime.style.fontFamily = '"Dancing Script", cursive';
        currentTime.style.fontSize = '234px'
    }
    else if (selectFontTime.value === 'monoton'){
        currentTime.style.fontFamily = '"Monoton", cursive';
        currentTime.style.fontSize = '190px'
    }
    else if (selectFontTime.value === 'permanentMarker'){
        currentTime.style.fontFamily = '"Permanent Marker", cursive';
        currentTime.style.fontSize = '210px'
    }
    else if (selectFontTime.value === 'poorStory'){
        currentTime.style.fontFamily = '"Poor Story", cursive';
        currentTime.style.fontSize = '280px'
    }
    else if (selectFontTime.value === 'xanhMono'){
        currentTime.style.fontFamily = '"Xanh Mono", monospace';
        currentTime.style.fontSize = '234px'
    }
};//this listens for the font-select-time drop down menu and applies the appropriate font

selectFontDate.onchange = () => {
    if (selectFontDate.value === 'lobster'){
        currentDate.style.fontFamily = 'lobster, cursive';
        currentDate.style.fontSize = '120px'
    }
    else if (selectFontDate.value === 'geostarFill'){
        currentDate.style.fontFamily = '"Geostar Fill", cursive';
        currentDate.style.fontSize = '70px'
    }
    else if (selectFontDate.value === 'dancingScript'){
        currentDate.style.fontFamily = '"Dancing Script", cursive';
        currentDate.style.fontSize = '120px'
    }
    else if (selectFontDate.value === 'monoton'){
        currentDate.style.fontFamily = '"Monoton", cursive';
        currentDate.style.fontSize = '80px'
    }
    else if (selectFontDate.value === 'permanentMarker'){
        currentDate.style.fontFamily = '"Permanent Marker", cursive';
        currentDate.style.fontSize = '100px'
    }
    else if (selectFontDate.value === 'poorStory'){
        currentDate.style.fontFamily = '"Poor Story", cursive';
        currentDate.style.fontSize = '130px'
    }
    else if (selectFontDate.value === 'xanhMono'){
        currentDate.style.fontFamily = '"Xanh Mono", monospace';
        currentDate.style.fontSize = '110px'
    }
};//this listens for the font-select-date drop down menu and applies the appropriate font

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
