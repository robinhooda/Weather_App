// javascript file for the weather App
// Author: Robin Hooda
// copyrights reserved

// <input list="hosting-plan" type="text"/>
 
// <datalist id="hosting-plan">
//     <option value="small"/>
//     <option value="medium"/>
//     <option value="large"/>
// </datalist>
function myFunction(){
    var welcome;
	var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
	var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday",
                "Friday","Saturday");
    document.getElementById("demo").innerHTML=weekday[date.getDate()];
    document.getElementById("demo1").innerHTML=(","+ hour +":" + minute+ ":" +second);
}

function ShowInput()
{
    var information = [
        
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
