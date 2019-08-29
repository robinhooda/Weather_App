// javascript file for the weather App
// Author: Robin Hooda
// copyrights reserved

const array = [
    {   city:'Bangalore',
        state:'Karnataka',
        degree :26,
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

function dateTime(){
    var welcome;
	var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
	var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday");
      let conCat=   weekday[date.getDate()]+", "(","+ hour +":" + minute+ ":" +second);
    // document.getElementById("demo").innerHTML=weekday[date.getDate()];
    // document.getElementById("demo").innerHTML=(","+ hour +":" + minute+ ":" +second);
alert(date.getSeconds());
}
 window.onload=dateTime();

function ShowInput()
{
    let cities = [
        
        { mycity: "Bangalore,Karnataka", type:"humidity",temp: 27 },
       { mycity: "Hyderabad,Telangana", type:"humidity",temp: 22},
       { mycity: "Mumbai,Maharastra", type:"humidity",temp: 26},
       { mycity: "Pune,Maharastra", type:"humidity",temp: 21},
       { mycity: "New Delhi", type:"humidity",temp: 34 },
        
     ]
} 
//     if (minute < 10) {
//         minute = "0" + minute;
//     }
//     if (second < 10) {
//         second = "0" + second;
//     }
//     if (hour < 12) {
//         welcome = "Good morning";
//     }
//     else if (hour < 17) {
//         welcome = "Good afternoon";
//     }
//     else {
//         welcome = "Good evening";
//     }

//     document.write("<h2>" + "<font color='red'>" + welcome + "</font>" + ",time is:");
//     document.write(hour + ":" + minute + ":" + second);
//    document.write("<br><br>"+"Today is " + weekday[date.getDay()]+"</h2>")
