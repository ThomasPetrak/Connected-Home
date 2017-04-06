function switchLight(id) {
    if(document.getElementById(id).src.indexOf("img/lightOn.png") != -1) {
        document.getElementById(id).src="img/lightOff.png";
        sendJson(id);
        alert(id);
    } else{
        document.getElementById(id).src="img/lightOn.png";
        sendJson(id);
    }
}

