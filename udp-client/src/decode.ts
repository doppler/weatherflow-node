exports.decodeRapidWind = (ob: number[]): DecodedRapidWind => {
  const [time, mps, dir] = ob;
  return [time, { mps, dir }];
};

exports.decodeEvtStrike = (evt: number[]): DecodeEvtStrike => {
  const [time, distance, energy] = evt;
  return [time, { distance, energy }];
};

exports.decodeObsSt = (obs: any) => {
  let [
    time,
    windLull,
    windAvg,
    windGust,
    windDirection,
    windSampleInterval,
    stationPressure,
    airTemperature,
    relativeHumidity,
    illuminance,
    uv,
    solarRadiation,
    precipAccumulated,
    precipType,
    lightningStrikeAvgDistance,
    lightningStrikeCount,
    battery,
    reportInterval,
  ] = obs[0];
  // InfluxDB doesn't like null
  if (windDirection === null) windDirection = 0;

  return [
    time,
    {
      windLull,
      windAvg,
      windGust,
      windDirection,
      windSampleInterval,
      stationPressure,
      airTemperature,
      relativeHumidity,
      illuminance,
      uv,
      solarRadiation,
      precipAccumulated,
      precipType,
      lightningStrikeAvgDistance,
      lightningStrikeCount,
      battery,
      reportInterval,
    },
  ];
};

type DecodedRapidWind = [
  number,
  {
    mps: number;
    dir: number;
  },
];

type DecodeEvtStrike = [
  number,
  {
    distance: number;
    energy: number;
  },
];

type DecodedObsSt = [
  number,
  {
    windLull: number;
    windAvg: number;
    windGust: number;
    windDirection: number;
    windSampleInterval: number;
    stationPressure: number;
    airTemperature: number;
    relativeHumidity: number;
    illuminance: number;
    uv: number;
    solarRadiation: number;
    precipAccumulated: number;
    precipType: number;
    lightningStrikeAvgDistance: number;
    lightningStrikeCount: number;
    battery: number;
    reportInterval: number;
  },
];
