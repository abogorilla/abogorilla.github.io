
var header = document.getElementById("header")
header.style = "color:white; float: right";
var date = new Date();
var hours = date.getHours();

if(hours >= 5 && hours < 12){
    header.innerText = "God morgen";
}

if (hours >= 12 && hours < 17){
    header.innerText = "God dag";
}

if (hours >= 17 && hours < 20 ){
    header.innerText = "God ettermiddag";
    
}

if (hours >= 20 && hours <= 23 ){
    header.innerText = "God kveld";
    
}
if(hours <5){
    header.innerText = "God natt";
}