let selectedDeviceId;

//initialization
const codeReader = new ZXing.BrowserMultiFormatReader();
//console.log("ZXing code reader initialized");

//Get device camera
codeReader
    .listVideoInputDevices()
    .then((videoInputDevices) => {
        selectedDeviceId = videoInputDevices[0].deviceId;
        if (videoInputDevices.length >= 1) {
            //console.log(videoInputDevices)
            modelSelectVideoDevice.setData(videoInputDevices);
        }
    })
    .catch((err) => {
        console.error(err);
    });
