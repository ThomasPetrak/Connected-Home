var tempNames = ["temp1", "temp2", "temp3"];
var temps = [0, 0, 0];

$(document).ready(function(){
    for(i=0; i<tempNames.length; i++){
        temps[i] = parseInt($("#" + tempNames[i]).text());
    }
});




