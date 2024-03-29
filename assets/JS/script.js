//When Document Loads
$(document).ready(function(){

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
    let isShadowOnDate = 1;
    let isShadowOnTime = 1;
    let isDateOn = 1;
    let slideOn = 0;
    let t;
    let currentDateTop =-130;
    let currentTimeTop = -30;
    let currentTheme = '';
    let timeFontSize = 330;
    let dateFontSize = 160;
    const time = document.getElementById("currTime");
    const date = document.getElementById("currDate");
    const speedLabel = document.getElementById("speedLabel");
    const selectFontTime = document.querySelector('#font-select-time');
    const currentTime = document.querySelector('#currTime');
    const selectFontDate =  document.querySelector('#font-select-date');
    const currentDate = document.querySelector('#currDate');
    const themeSelect = document.querySelector('#theme-select');
    const picOne = document.querySelector('#picOne');
    const picTwo = document.querySelector('#picTwo');
    const picThree = document.querySelector('#picThree');
    const picFour = document.querySelector('#picFour');
    const picFive = document.querySelector('#picFive');
    const picSix = document.querySelector('#picSix');
    

    document.querySelector('#speed').onchange = s =>{
        speedLabel.innerHTML = "Speed: " + s.target.value;
        slideShowSpeed = s.target.value * 1000;
    }; //get the value of speed from the range element

    document.querySelector('#color-select-time').onchange = t =>{
        time.style.color = t.target.value;
    }; //change the font color of time

    document.querySelector('#color-select-date').onchange = d =>{
        date.style.color = d.target.value;
    }; //change the font color of date

    document.querySelector('#color-select-tshadow').onchange = ts =>{
        time.style.textShadow = "0 0 3px" + ts.target.value + ", 0 0 5px" + ts.target.value;
    }; //change the shadow color of time

    document.querySelector('#color-select-dshadow').onchange = ds =>{
        date.style.textShadow = "0 0 3px" + ds.target.value + ", 0 0 5px" + ds.target.value;
    };//change the shadow color of date

    document.querySelector('#toggle-time-shadow').onclick = tts =>{
        if(isShadowOnTime === 1){
            time.style.textShadow = "none";
            document.querySelector('#toggle-time-shadow').value="Off";
            isShadowOnTime = 0;
        }
        else{
            time.style.textShadow = "0 0 3px #ffffff, 0 0 5px #ffffff";
            isShadowOnTime = 1; 
            document.querySelector('#toggle-time-shadow').value="On";
        }
    }; //this toggles the shadow on time

    document.querySelector('#toggle-date-shadow').onclick = tds =>{
        if(isShadowOnDate === 1){
            date.style.textShadow = "none";
            document.querySelector('#toggle-date-shadow').value="Off";
            isShadowOnDate = 0;
        }
        else{
            date.style.textShadow = "0 0 3px #ffffff, 0 0 5px #ffffff";
            isShadowOnDate = 1; 
            document.querySelector('#toggle-date-shadow').value="On";
        }
    }; //this toggles the shadow on date

    document.querySelector('#toggle-date').onclick = td =>{
        if(isDateOn === 1){
            currentDate.hidden = true;
            isDateOn = 0;
            document.querySelector('#toggle-date').value='Off';
        }
        else{
            currentDate.hidden = false;
            isDateOn = 1
            document.querySelector('#toggle-date').value = 'On';
        }
    }; //This toggles the date

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
    };// this pauses the slideshow

    document.querySelector('#play').onclick = () => {
        slideOn = 1;
        startSlide();
    };//this listens for the play button to be clicked then calls the startSlide function

    document.querySelector('#next').onclick = () => {
        plusSlides(1);
    };//this listens for the next button then calls the plusSlides function

    document.querySelector('#previous').onclick = () => {
        plusSlides(-1);
    };//this listens for the previous button then calls the plusSlides function

    document.querySelector('#pause').onclick = () => {
        slideOn = 0;
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

    document.querySelector('#italic-date').onclick = () => {
        if (isDateItalicPressed === 0){
            isDateItalicPressed = 1;
            currentDate.style.fontStyle = "italic";
        }
        else {
            isDateItalicPressed = 0;
            currentDate.style.fontStyle = 'normal';
        }
    };//Adds and removes Italics from date
    
    document.querySelector('#bold-date').onclick = () => {
        if (isDateBoldPressed === 0){
            isDateBoldPressed = 1;
            currentDate.style.fontWeight = 'bold';
        }
        else {
            isDateBoldPressed = 0;
            currentDate.style.fontWeight = 'normal';
        }
    };//Adds and removes Bold from date

    document.querySelector('#underline-date').onclick = () => {
        if (isDateUnderlinePressed === 0){
            isDateUnderlinePressed = 1;
            currentDate.style.textDecoration = 'underline';
        }
        else {
            isDateUnderlinePressed = 0;
            currentDate.style.textDecoration = 'none';
        }
    };//adds and removes underline from time
    
    document.querySelector('#move-date-up').onclick = () => {
        currentDateTop -= 4;
        currentDate.style.top = `${currentDateTop}px`;
    };//moves the date up
    
    document.querySelector('#move-date-down').onclick = () => {
        currentDateTop += 4;
        currentDate.style.top = `${currentDateTop}px`;
    };//moves the date down

    document.querySelector('#move-time-up').onclick = () => {
        currentTimeTop -= 4;
        currentTime.style.top =`${currentTimeTop}px`;
    };//moves the time up
    
    document.querySelector('#move-time-down').onclick = () => {
        currentTimeTop += 4;
        currentTime.style.top =`${currentTimeTop}px`;
    };//moves the time down

    let changeTheme = function(theme){

        if (theme === "animals"){
            picOne.src = "./assets/Images/animal/Gorilla.jpg";
            picTwo.src = "./assets/Images/animal/pandaBear.jpg";
            picThree.src = "./assets/Images/animal/polarBear.jpg";
            picFour.src = "./assets/Images/animal/redPanda.jpg";
            picFive.src = "./assets/Images/animal/tiger.jpg";
            picSix.src = "./assets/Images/animal/wolf.jpg";
            currentTheme = 'animals';
        }
        else if (theme === 'aurora'){
            picOne.src = "./assets/Images/auroraB/auroraLake.jpg";
            picTwo.src = "./assets/Images/auroraB/purpleAurora.jpg";
            picThree.src = "./assets/Images/auroraB/redAurora.jpg";
            picFour.src = "./assets/Images/auroraB/redGreenLakeAurora.jpg";
            picFive.src = "./assets/Images/auroraB/snowAurora.jpg";
            picSix.src = "./assets/Images/auroraB/starryAurora.jpg";
            currentTheme = 'aurora';
        }
        else if (theme === 'castle'){
            picOne.src = "./assets/Images/castle/castleLights.jpg";
            picTwo.src = "./assets/Images/castle/castleMountain.jpg";
            picThree.src = "./assets/Images/castle/castleRuins.jpg";
            picFour.src = "./assets/Images/castle/SloveniaCastle.jpg";
            picFive.src = "./assets/Images/castle/snowCastle.jpg";
            picSix.src = "./assets/Images/castle/whiteTreeCastle.jpg";
            currentTheme = 'castle';
        }
        else if (theme === 'city'){
            picOne.src = "./assets/Images/city/boston.jpg";
            picTwo.src = "./assets/Images/city/manchester.jpg";
            picThree.src = "./assets/Images/city/nashville.jpeg";
            picFour.src = "./assets/Images/city/newYork.jpg";
            picFive.src = "./assets/Images/city/seattle.jpg";
            picSix.src = "./assets/Images/city/washington.jpg";
            currentTheme = 'city';
        }
        else if (theme === 'graffiti'){
            picOne.src = "./assets/Images/graffiti/bonesGraffiti.jpg";
            picTwo.src = "./assets/Images/graffiti/nomNom.png";
            picThree.src = "./assets/Images/graffiti/robotWoman.jpg";
            picFour.src = "./assets/Images/graffiti/seaMonster.jpg";
            picFive.src = "./assets/Images/graffiti/warehouse.png";
            currentTheme = 'graffiti';
        }
        else if (theme === 'lighthouse'){
            picOne.src = "./assets/Images/lighthouse/calmLighthouse.jpg";
            picTwo.src = "./assets/Images/lighthouse/capeElizabethLighthouse.png";
            picThree.src = "./assets/Images/lighthouse/christmasLighthouse.jpg";
            picFour.src = "./assets/Images/lighthouse/crumblingLighthouse.jpg";
            picFive.src = "./assets/Images/lighthouse/nubbleLighthouse.jpg";
            picSix.src = "./assets/Images/lighthouse/sunsetLighthouse.jpg";
            currentTheme = 'lighthouse';
        }
        else if (theme === 'nature'){
            picOne.src = "./assets/Images/nature/bridge.jpg";
            picTwo.src = "./assets/Images/nature/cherryNightRiver.jpg";
            picThree.src = "./assets/Images/nature/mountainLake.jpg";
            picFour.src = "./assets/Images/nature/sunRayTrail.jpg";
            picFive.src = "./assets/Images/nature/waterfall.jpg";
            picSix.src = "./assets/Images/nature/winterNight.jpg";
            currentTheme = 'nature';
        }
        else if (theme === 'nebula'){
            picOne.src = "./assets/Images/nebula/blueEyeNebula.jpg";
            picTwo.src = "./assets/Images/nebula/butterflyNebula.jpg";
            picThree.src = "./assets/Images/nebula/eyeNebula.jpg";
            picFour.src = "./assets/Images/nebula/guitarPickNebula.jpg";
            picFive.src = "./assets/Images/nebula/manNebula.jpg";
            picSix.src = "./assets/Images/nebula/tyeDyeNebula.jpg"; 
            currentTheme = 'nebula';
        }
        else if (theme === 'resetSlides'){
            picOne.src = "./assets/Images/city.jpg";
            picTwo.src = "./assets/Images/fallview.jpg";
            picThree.src = "./assets/Images/golfCourse.jpg";
            picFour.src = "./assets/Images/moon.jpg";
            picFive.src = "./assets/Images/northernLights.webp";
            picSix.src = "./assets/Images/redHouse.webp";
            currentTheme = 'resetSlides';
        }
    
    }; //this function changes theme

    themeSelect.onchange = () => {
        changeTheme(themeSelect.value);
    }; //when a new theme is selected this calls the function that changes it

    document.querySelector('#reset-settings').onclick = () => {
        if (confirm('Do you want to reset settings?')){
            changeTheme('resetSlides');
            currentTime.style.fontFamily = '"Times New Roman", Times, Serif';
            time.style.color = "#8C031C";
            time.style.textShadow = '0 0 3px #ffffff, 0 0 5px #ffffff';
            currentTime.style.fontStyle = "normal";
            isTimeItalicPressed = 0;
            isTimeBoldPressed = 0;
            isTimeUnderlinePressed = 0;
            currentTime.style.fontWeight = "normal";
            currentTime.style.textDecoration = "none";
            currentTime.style.fontSize = '330px';
            timeFontSize = 330;
            currentTimeTop = -30;
            currentTime.style.top = `${currentTimeTop}px`;
            currentDate.hidden = false;
            isDateOn = 1;
            document.querySelector('#toggle-date').value = 'On';
            currentDate.style.fontFamily = '"Times New Roman", Times, Serif';
            date.style.color = '#8C031C';
            date.style.textShadow = '0 0 3px #ffffff, 0 0 5px #ffffff';
            currentDate.style.fontStyle = "normal";
            isDateItalicPressed = 0;
            isDateBoldPressed = 0;
            isDateUnderlinePressed = 0;
            currentDate.style.fontWeight = 'normal';
            currentDate.style.textDecoration = 'none';
            currentDate.style.fontSize = '160px';
            dateFontSize = 160;
            currentDateTop = -130;
            currentDate.style.top = `${currentDateTop}px`;
            isShadowOnTime = 1;
            isShadowOnDate = 1;
            document.querySelector('#toggle-time-shadow').value = 'On';
            document.querySelector('#toggle-date-shadow').value = 'On';
            clearTimeout(t);
            slideShowSpeed = 15000;
            speedLabel.innerHTML = `Speed: ${slideShowSpeed/1000}`;
        }
        else {
            alert('Settings will not be reset.');
        }
    };


    let storeIt = function(){
        let timeString = currentTime.style.textShadow;
        let dateString = currentDate.style.textShadow;
        let charIndexDate = dateString.indexOf(')');
        let charIndexTime = timeString.indexOf(')');
        localStorage.setItem("timeFont", currentTime.style.fontFamily);
        localStorage.setItem("timeColor", currentTime.style.color);
        localStorage.setItem("timeShadow", timeString.slice(0, charIndexTime + 1));
        localStorage.setItem("timeItalic", isTimeItalicPressed);
        localStorage.setItem('timeBold', isTimeBoldPressed);
        localStorage.setItem('timeUnderline', isTimeUnderlinePressed);
        localStorage.setItem('timePosition', currentTimeTop);
        localStorage.setItem('dateOn', isDateOn);
        localStorage.setItem('dateFont', currentDate.style.fontFamily);
        localStorage.setItem('dateShadow', dateString.slice(0, charIndexDate + 1));
        localStorage.setItem('dateColor', currentDate.style.color);
        localStorage.setItem('dateItalic', isDateItalicPressed);
        localStorage.setItem('dateBold', isDateBoldPressed);
        localStorage.setItem('dateUnderline', isDateUnderlinePressed);
        localStorage.setItem('datePosition', currentDateTop);
        localStorage.setItem('timeShadowToggle', isShadowOnTime);
        localStorage.setItem('dateShadowToggle', isShadowOnDate);
        localStorage.setItem('theme', currentTheme);
        localStorage.setItem('slideshowOn', slideOn);
        localStorage.setItem('slideSpeed', document.querySelector('#speed').value);
        localStorage.setItem('fontSizeTime', timeFontSize);
        localStorage.setItem('fontSizeDate', dateFontSize);
        
        //localStorage.setItem('settingsChecked', isChecked);
    };

    let retrieveIt = function(){
        let getTimeFont = localStorage.getItem('timeFont');
        let getTimeColor = localStorage.getItem('timeColor');
        let getTimeShadow = localStorage.getItem('timeShadow');
        let getTimeItalic = localStorage.getItem('timeItalic');
        let getTimeBold = localStorage.getItem('timeBold');
        let getTimeUnderline = localStorage.getItem('timeUnderline');
        let getTimePosition = localStorage.getItem('timePosition');
        let getDateOn = localStorage.getItem('dateOn');
        let getDateFont = localStorage.getItem('dateFont');
        let getDateShadow = localStorage.getItem('dateShadow');
        let getDateColor = localStorage.getItem('dateColor');
        let getDateItalic = localStorage.getItem('dateItalic');
        let getDateBold = localStorage.getItem('dateBold');
        let getDateUnderline = localStorage.getItem('dateUnderline');
        let getDatePosition = localStorage.getItem('datePosition');
        let getTimeShadowToggle = localStorage.getItem('timeShadowToggle');
        let getDateShadowToggle = localStorage.getItem('dateShadowToggle');
        let getTheme = localStorage.getItem('theme');
        let getSlideshowOn = localStorage.getItem('slideshowOn');
        let getSlideSpeed = localStorage.getItem('slideSpeed');
        let getFontSizeTime = localStorage.getItem('fontSizeTime');
        let getFontSizeDate = localStorage.getItem('fontSizeDate');

        if (getFontSizeTime !== null){
            currentTime.style.fontSize = `${getFontSizeTime}px`;
            timeFontSize = getFontSizeTime;
        };

        if (getFontSizeDate !== null){
            currentDate.style.fontSize = `${getFontSizeDate}px`;
            dateFontSize = getFontSizeDate;
        };

        if (getTheme !== null){
            changeTheme(getTheme);
        };
        
        if (getTimeFont !== null){
            currentTime.style.fontFamily = getTimeFont;
        };
        if (getTimeColor !== null){
            time.style.color = getTimeColor;
        };
        if (getTimeShadow !== null){
            time.style.textShadow = `0 0 3px ${getTimeShadow}, 0 0 5px ${getTimeShadow}`;
        };
        
        if (getTimeItalic !== null && parseInt(getTimeItalic) === 1){
            currentTime.style.fontStyle = "italic";
            isTimeItalicPressed = 1;
        };

        if (getTimeBold !== null && parseInt(getTimeBold) === 1){
            currentTime.style.fontWeight = "bold";
            isTimeBoldPressed = 1;
        };

        if (getTimeUnderline !== null && parseInt(getTimeUnderline) === 1){
            currentTime.style.textDecoration = "underline";
            isTimeUnderlinePressed = 1;
        };
        
        if (getTimePosition !== null){
            currentTime.style.top = `${parseInt(getTimePosition)}px`;
            currentTimeTop = parseInt(getTimePosition);
        };

        if (getDateOn !== null && parseInt(getDateOn) === 0){
            document.getElementById('currDate').hidden = true;
            isDateOn = 0;
            document.querySelector('#toggle-date').value ='Off';
        };

        if (getDateFont !== null){
            currentDate.style.fontFamily = getDateFont;
        };

        if (getDateShadow !== null){
            date.style.textShadow = `0 0 3px ${getDateShadow}, 0 0 5px ${getDateShadow}`;
        };

        if (getDateColor !== null){
            date.style.color = getDateColor;
        };

        if (getDateItalic !== null && parseInt(getDateItalic) === 1){
            currentDate.style.fontStyle = 'italic';
            isDateItalicPressed = 1;
        };

        if (getDateBold !== null && parseInt(getDateBold) === 1){
            currentDate.style.fontWeight = "bold";
            isDateBoldPressed = 1;
        };

        if (getDateUnderline !== 1 && parseInt(getDateUnderline) === 1){
            currentDate.style.textDecoration = 'underline';
            isDateUnderlinePressed = 1;
        };

        if (getDatePosition !== null){
            currentDate.style.top = `${parseInt(getDatePosition)}px`;
            currentDateTop = parseInt(getDatePosition);
        };

        if (getDateShadowToggle !== null && parseInt(getDateShadowToggle) === 0){
            date.style.textShadow = "none";
            document.querySelector('#toggle-date-shadow').value="Off";
            isShadowOnDate = 0;
        };

        if (getTimeShadowToggle !== null && parseInt(getTimeShadowToggle) === 0){
            time.style.textShadow = "none";
            document.querySelector('#toggle-time-shadow').value="Off";
            isShadowOnTime = 0;
        }; 

        if (getSlideSpeed !== null){
            slideShowSpeed = parseInt(getSlideSpeed * 1000);
            speedLabel.innerHTML = `Speed: ${getSlideSpeed}`;
        };
        
        if (getSlideshowOn !== null && parseInt(getSlideshowOn) === 1){
            slideOn = 1;
            startSlide();
        };

    }; //retrieves settings from localStorage

    document.querySelector('#save-settings').onclick = () => {
        storeIt();
        //document.querySelector('#label-save-settings').innerHTML = "You currently have saved settings."
    }; //when button is clicked settings are saved to local storage
    
    


    selectFontTime.onchange = () => {
        if (selectFontTime.value === 'lobster'){
            currentTime.style.fontFamily = 'lobster, cursive';
            currentTime.style.fontSize = '320px'
            timeFontSize = 320;
        }
        else if (selectFontTime.value === 'geostarFill'){
            currentTime.style.fontFamily = '"Geostar Fill", cursive';
            currentTime.style.fontSize = '200px'
            timeFontSize = 200;
        }
        else if (selectFontTime.value === 'dancingScript'){
            currentTime.style.fontFamily = '"Dancing Script", cursive';
            currentTime.style.fontSize = '310px'
            timeFontSize = 310;
        }
        else if (selectFontTime.value === 'monoton'){
            currentTime.style.fontFamily = '"Monoton", cursive';
            currentTime.style.fontSize = '260px'
            timeFontSize = 260;

        }
        else if (selectFontTime.value === 'permanentMarker'){
            currentTime.style.fontFamily = '"Permanent Marker", cursive';
            currentTime.style.fontSize = '280px'
            timeFontSize = 280;
        }
        else if (selectFontTime.value === 'poorStory'){
            currentTime.style.fontFamily = '"Poor Story", cursive';
            currentTime.style.fontSize = '380px'
            timeFontSize = 380;
        }
        else if (selectFontTime.value === 'xanhMono'){
            currentTime.style.fontFamily = '"Xanh Mono", monospace';
            currentTime.style.fontSize = '310px'
            timeFontSize = 310;
        }
    };//this listens for the font-select-time drop down menu and applies the appropriate font

    selectFontDate.onchange = () => {
        if (selectFontDate.value === 'lobster'){
            currentDate.style.fontFamily = 'lobster, cursive';
            currentDate.style.fontSize = '170px'
            dateFontSize = 170;
        }
        else if (selectFontDate.value === 'geostarFill'){
            currentDate.style.fontFamily = '"Geostar Fill", cursive';
            currentDate.style.fontSize = '96px'
            dateFontSize = 96;
        }
        else if (selectFontDate.value === 'dancingScript'){
            currentDate.style.fontFamily = '"Dancing Script", cursive';
            currentDate.style.fontSize = '170px'
            dateFontSize = 170;
        }
        else if (selectFontDate.value === 'monoton'){
            currentDate.style.fontFamily = '"Monoton", cursive';
            currentDate.style.fontSize = '120px'
            dateFontSize = 120;
        }
        else if (selectFontDate.value === 'permanentMarker'){
            currentDate.style.fontFamily = '"Permanent Marker", cursive';
            currentDate.style.fontSize = '140px'
            dateFontSize = 140;
        }
        else if (selectFontDate.value === 'poorStory'){
            currentDate.style.fontFamily = '"Poor Story", cursive';
            currentDate.style.fontSize = '190px'
            dateFontSize = 190;
        }
        else if (selectFontDate.value === 'xanhMono'){
            currentDate.style.fontFamily = '"Xanh Mono", monospace';
            currentDate.style.fontSize = '156px'
            dateFontSize = 156;
        }
    };//this listens for the font-select-date drop down menu and applies the appropriate font4

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
    let init = function() {
        retrieveIt();
        //GetClock();
        //setInterval(GetClock, 1000);
    };

    init();
});



