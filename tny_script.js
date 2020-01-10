"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case
   Countdown Clock
   Author: Jazzmyne Nixon
   Date:   1/9/2020
*/
runClock();
setInterval("runClock()", -10);
function runClock(){
   // Changed todays date
   (document.getElementById("dateNow"));

   // Created a variable for todays date
   var currentYear = new Date();
   var thisDate = currentYear.toDateString(); //thisDate == 1/7/2020
   var thisTime = currentYear.toLocaleTimeString(); //thisTime == 4:40:23 PM
   document.getElementById("dateNow").innerHTML = thisDate + "<br>" + thisTime;

   //calculate the days until Jan 1st
   var newYear = new Date("January 1, 2020");
   var nextYear = currentYear.getFullYear() +1;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentYear)/(1000*60*60*24);
   var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
   var minsLeft =(hrsLeft - Math.floor(hrsLeft))*60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

   //Changed the countdown Clock
   document.getElementById("days").innerHTML = Math.floor(daysLeft);
   document.getElementById("hrs").innerHTML = Math.floor(hrsLeft);
   document.getElementById("mins").innerHTML = Math.floor(minsLeft);
   document.getElementById("secs").innerHTML = Math.ceil(secsLeft);
}

function Area() {
   var width = Math.ceil(Math.random() * 10);
   var length = Math.ceil(Math.random() * 10);

   //what is the area of a rectangle that has a random length and width
   var area = width * length;
   console.log("The rectangle has a length of " + length + " and a width of "+width+" so the area is " +area);
}
window.setInterval("Area()", 1000);

