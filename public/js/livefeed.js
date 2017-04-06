function LiveFeedConnect() {
    var wsUri = "wss://hon-hackaton-team3-nr.mybluemix.net/ws/livefeed";
    var ws = new WebSocket(wsUri);

    ws.onmessage = function (ev) {
        var payload = JSON.parse(ev.data);

        switch (payload.id) {
            case 'lights':
                updateStates(payload);
                break;

            case 'alarms':
                SetAlarmState(payload);
                break;

            case 'comfort':
                updateTemps(payload);
                break;

            case 'ext:lights':
                UpdateExternalLights(payload);
                break;

            default:
                break;
        }
    };

    ws.onclose = function (e) {
        console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
        setTimeout(function () {
            LiveFeedConnect();
        }, 1000)
    };
}

$(document).ready(function () {
    LiveFeedConnect();
});