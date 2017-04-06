
function setAlarmOk(id) {
    var img = $('#' + id);
    img.removeAttr('title')
    img.attr('src', "img/ok.png");
}

function setAlarmWarning(id, message) {
    var img = $('#' + id);
    img.attr('title', message)
    img.attr('src', "img/warning.png");
}

function processWindow(id, state)
{
    switch (state) {
        case 'closed':
            setAlarmOk(id);
            break;

        case 'open':
            setAlarmWarning(id, 'Window opened!');
            break;

        default:
            break;
    }
}

function SetAlarmState(alarms) {
    var kitchenWindowState = alarms.kitchenWindow;
    processWindow('kitchenWindow', kitchenWindowState);
}