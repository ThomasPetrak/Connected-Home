var wsUri = "ws://hon-hackaton-team3-nr.mybluemix.net/ws/livefeed";
var ws = new WebSocket(wsUri);

ws.onmessage = function(ev) {
    var payload = JSON.parse(ev.data);

    switch (payload.id) {
        case 'lights':
            updateStates(payload);
            break;

        case 'alarms':
            SetAlarmState(payload);
            break;

        default:
            break;
    }
}
