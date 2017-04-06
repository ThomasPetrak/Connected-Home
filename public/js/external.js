function UpdateExternalLights(data) {
    $('#lights-slider').slider("option", "value", data.lightIntensity);
}

$(document).ready(function () {
    $('#lights-slider').slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 255,
        value: 0,
        step: 51,
        change: function( event, ui ) {
            xhr = new XMLHttpRequest();
            var url = "https://hon-hackaton-team3-nr.mybluemix.net/ui/integration/lights/1711e73a-5de0-45fe-b285-a37c7fa76111";
            xhr.open("PUT", url, true);
            xhr.setRequestHeader("Content-type", "application/json");

            var data = '{"id":"ext:lights","lightIntensity":' + ui.value + '}';

            xhr.send(data);
        }
    });

    $.getJSON('https://hon-hackaton-team3-nr.mybluemix.net/ui/integration/lights/1711e73a-5de0-45fe-b285-a37c7fa76111', function (data) {
        UpdateExternalLights(data);
    });
});