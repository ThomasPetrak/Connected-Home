var tempsURL = "https://hon-hackaton-team3-nr.mybluemix.net/ui/comfort/91c9e1d6-6976-452c-a431-c333fb12354d";
var tempNames = ["temp1", "temp2", "temp3"];
var temps = [0, 0, 0];
var json = "";

$(document).ready(function(){
    $.getJSON(tempsURL, function (data) {
        json = data;
        updateTemps(json);
    });
});


function setTemp(id){
    $("#" + id).text(temps[getKey(id)]);
}

function setTemp(id, temp){
    $("#" + id).text(temp);
}

function decreaseTemp(id){
    temps[getKey(id)] = temps[getKey(id)] - 1;
    $("#" + id).text(temps[getKey(id)]);
    
    sendTemps();
}

function increaseTemp(id){
    temps[getKey(id)] = temps[getKey(id)] + 1;
    $("#" + id).text(temps[getKey(id)]);
    
    sendTemps();
}

function getKey(id){
    if(id == "temp1"){
        return 0;
    } else if (id == "temp2"){
        return 1;
    } else {
        return 2;
    }
}

function sendTemps(){
    xhr = new XMLHttpRequest();
    xhr.open("PUT", tempsURL, true);
    xhr.setRequestHeader("Content-type", "application/json");

    json.room1.currentTemp = temps[0];
    json.room2.currentTemp = temps[1];
    json.room3.currentTemp = temps[2];

    xhr.send(data);
}

function updateTemps(json) {
    temps[0] = json.room1.currentTemp.toString();
    temps[1] = json.room2.currentTemp.toString();
    temps[2] = json.room3.currentTemp.toString();
    
    for(i=0; i<temps.length; i++){
        setTemp(tempNames[i], temps[i]);
    }
}


/*
JSON example

{
  "id": "comfort",
  "room1": {
    "currentTemp": 8,
    "targetTemp": 0
  },
  "room2": {
    "currentTemp": 20,
    "targetTemp": 0
  },
  "room3": {
    "currentTemp": 24,
    "targetTemp": 0
  },
  "room4": {
    "currentTemp": 23,
    "targetTemp": 0
  },
  "room5": {
    "currentTemp": 19,
    "targetTemp": 0
  },
  "room6": {
    "currentTemp": 19,
    "targetTemp": 0
  }
}


*/