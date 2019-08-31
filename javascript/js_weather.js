// javascript file for the weather App
// Author: Robin Hooda
// copyrights reserved

const array = [
    {   city:'Bangalore',
        state:'Karnataka',
        degree :22,
        weather:'Partly Cloudy ☁️'},
    {   city:'Chennai',
        state:'TamilNadu',
        degree :34,
        weather:'Sunny ☀️'},
    {   city:'Coimbatore',
        state:'TamilNadu',
        degree :26,
        weather:'Rainy ⛈️'},
    {   city:'Patna',
        state:'Bihar',
        degree :23,
        weather:'Cloudy ☁️' },
    {   city:'Gurugram',
        state:'Haryana',
        degree :34,
        weather:'Sunny ☀️'},
    {   city:'Mumbai',
        state:'Maharashtra',
        degree :20,
        weather:'Rainy ⛈️'},
    {   city:'Jaipur',
        state:'Rajasthan',
        degree :32,
        weather:'Sunny ☀️'}
    
    
];
let celsiusDetails = 22;
let celsius = celsiusDetails;
let farenheit;



function process(value)
{
    document.getElementsByClassName("celsius")[0].style.color = "#1890f0";
    document.getElementsByClassName("farenheit")[0].style.color = "#000000"
    console.log(value);
    array.forEach((arr)=>{
        if(arr.city===value)
        {
            let date = new Date();   
            let dayInNumber= date.getDay();
            let dayInString = dayInNumber==0?
            'Sunday':dayInNumber==1?
            'Monday':dayInNumber==2?
            'Tuesday':dayInNumber==3?
            'Wednesday':dayInNumber==4?
            'Thursday':dayInNumber==5?
            'Friday':'Saturday';
            let hours = date.getHours()+1;
            let meridiem = 'am'
            if(hours > 12)
            {
             hours -= 13;
             meridiem = 'pm';
            }
            let minutes = date.getMinutes();
            celsiusDetails = arr.degree;
            celsius = celsiusDetails;
            if(minutes<10)
            minutes = '0'+minutes;
            document.getElementsByClassName("cityName")[0]
            .innerHTML = arr.city+", "+arr.state;
            document.getElementsByClassName("date")[0]
            .innerHTML = dayInString+" "+hours+":"+minutes+" "+meridiem;
            document.getElementsByClassName("condition")[0]
            .innerHTML = arr.weather+img;
            document.getElementsByClassName("degree")[0]
            .innerHTML = arr.degree;
            console.log(img);
        }
    })
}

var input = document.getElementById("in");
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("button1").click();
  }
});
let celsiusCount = 0;

function changeToFarenheit()
{
  document.getElementsByClassName("farenheit")[0].style.color="#1890f0";
  document.getElementsByClassName("celsius")[0].style.color="#000000";
  console.log(celsiusDetails);
  if(celsiusCount < 1)
  {
  farenheit = Math.floor(celsius*1.8+32);
  celsiusDetails = farenheit;
  celsiusCount++;
  }
  console.log(farenheit);
  document.getElementsByClassName("degree")[0].innerHTML = farenheit;
}


function changeToCelsius()
{
    document.getElementsByClassName("celsius")[0].style.color="#1890f0";
    document.getElementsByClassName("farenheit")[0].style.color="#000000";
    celsiusDetails = celsius;
    celsiusCount--;
    console.log(celsius);
    document.getElementsByClassName("degree")[0].innerHTML = celsius;
}
