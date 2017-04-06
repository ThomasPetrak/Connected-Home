// send
function GetNumericVal(onOff) {
    if (onOff === 'on') {
        return 1;
    }

    return 0;
}

var request = msg.payload;

var deviceMessage = {
    'd': {
        'House': {
            'Light1Status': GetNumericVal(request.firstLight),
            'Light2Status': GetNumericVal(request.secondLight),
            'Light3Status': GetNumericVal(request.thirdLight),
            'Light4Status': GetNumericVal(request.fourthLight)
        }
    }
};

msg.origPayload = msg.payload;
msg.payload = deviceMessage;

return msg;

// read
function GetOnOff(value) {
    return value === 0 ? 'off' : 'on';
}

var house = msg.payload.House;

var lightsMsgPayload = {
    "id": "lights",
    "firstLight": GetOnOff(house.Light1Status),
    "secondLight": GetOnOff(house.Light2Status),
    "thirdLight": GetOnOff(house.Light3Status),
    "fourthLight": GetOnOff(house.Light4Status)
};

msg.payload = lightsMsgPayload;

return msg;