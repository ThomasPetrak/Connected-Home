var firstLight = "off";
var secondLight = "off";
var thirdLight = "off";
var fourthLight = "off";

// get initial lights state
document.onreadystatechange = function () {
    if(document.getElementById("firstLight").src.indexOf("img/lightOn.png") != -1) {
        firstLight = "on";
    } else{
        firstLight = "off";
    }
    
    if(document.getElementById("secondLight").src.indexOf("img/lightOn.png") != -1) {
        firstLight = "on";
    } else{
        firstLight = "off";
    }
    
    if(document.getElementById("thirdLight").src.indexOf("img/lightOn.png") != -1) {
        firstLight = "on";
    } else{
        firstLight = "off";
    }
    
    if(document.getElementById("fourthLight").src.indexOf("img/lightOn.png") != -1) {
        firstLight = "on";
    } else{
        firstLight = "off";
    }
};


function switchLight(id) {
    if(document.getElementById(id).src.indexOf("img/lightOn.png") != -1) {
        document.getElementById(id).src="img/lightOff.png";
        sendJson();
    } else{
        document.getElementById(id).src="img/lightOn.png";
        sendJson();
    }
    
    reverseState(id);
}


function sendJson(){
    xhr = new XMLHttpRequest();
    var url = "https://hon-hackaton-team3-nr.mybluemix.net/ui/lights/fd6ce24c-2e31-4577-9479-f69fcdee5feb";
    xhr.open("PUT", url, true);
    xhr.setRequestHeader("Content-type", "application/json");

    var data = '{"id":"lights", "firstLight": "' + firstLight + '", "secondLight": "' + secondLight + '", "thirdLight": "' + thirdLight + '", "fourthLight": "' +  fourthLight + '"}';
    
    xhr.send(data);
}

function reverseState(id){
    if(id == "firstLight"){
        if(firstLight == "off"){
            firstLight = "on";
        } else {
            firstLight = "off";
        }
    }
    
    if(id == "secondLight"){
        if(secondLight == "off"){
            secondLight = "on";
        } else {
            secondLight = "off";
        }
    }
    
    if(id == "thirdLight"){
        if(thirdLight == "off"){
            thirdLight = "on";
        } else {
            thirdLight = "off";
        }
    }
    
    if(id == "fourthLight"){
        if(fourthLight == "off"){
            fourthLight = "on";
        } else {
            fourthLight = "off";
        }
    }
}



//{"id":"lights","Living Room":"off","Kitchen":"on","Garage":"off","Patio":"on"}

//https://hon-hackaton-team3-nr.mybluemix.net/ui/lights/fd6ce24c-2e31-4577-9479-f69fcdee5feb