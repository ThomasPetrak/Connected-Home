var tempNames = ["temp1", "temp2", "temp3"];
var temps = [0, 0, 0];

$(document).ready(function(){
    for(i=0; i<tempNames.length; i++){
        temps[i] = parseInt($("#" + tempNames[i]).text());
    }
});


function decreaseTemp(id){
    temps[getKey(id)] = temps[getKey(id)] - 1;
    $("#" + id).text(temps[getKey(id)]);
}

function increaseTemp(id){
    temps[getKey(id)] = temps[getKey(id)] + 1;
    $("#" + id).text(temps[getKey(id)]);
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