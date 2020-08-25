"use strict";
exports.decodeRapidWind = function (ob) {
    var time = ob[0], mps = ob[1], dir = ob[2];
    return [time, { mps: mps, dir: dir }];
};
exports.decodeEvtStrike = function (evt) {
    var time = evt[0], distance = evt[1], energy = evt[2];
    return [time, { distance: distance, energy: energy }];
};
exports.decodeObsSt = function (obs) {
    var _a = obs[0], time = _a[0], windLull = _a[1], windAvg = _a[2], windGust = _a[3], windDirection = _a[4], windSampleInterval = _a[5], stationPressure = _a[6], airTemperature = _a[7], relativeHumidity = _a[8], illuminance = _a[9], uv = _a[10], solarRadiation = _a[11], precipAccumulated = _a[12], precipType = _a[13], lightningStrikeAvgDistance = _a[14], lightningStrikeCount = _a[15], battery = _a[16], reportInterval = _a[17];
    // InfluxDB doesn't like null
    if (windDirection === null)
        windDirection = 0;
    return [
        time,
        {
            windLull: windLull,
            windAvg: windAvg,
            windGust: windGust,
            windDirection: windDirection,
            windSampleInterval: windSampleInterval,
            stationPressure: stationPressure,
            airTemperature: airTemperature,
            relativeHumidity: relativeHumidity,
            illuminance: illuminance,
            uv: uv,
            solarRadiation: solarRadiation,
            precipAccumulated: precipAccumulated,
            precipType: precipType,
            lightningStrikeAvgDistance: lightningStrikeAvgDistance,
            lightningStrikeCount: lightningStrikeCount,
            battery: battery,
            reportInterval: reportInterval,
        },
    ];
};
