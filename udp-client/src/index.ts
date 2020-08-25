require("dotenv").config();
const dgram = require("dgram");
const { decodeRapidWind, decodeObsSt } = require("./decode");
const { serialize, write } = require("./influx");

const client = dgram.createSocket("udp4");

client.bind(50222);

client.on("message", async (message: Uint8Array) => {
  const data = JSON.parse(message.toString());
  let ts, ob, body, response;
  switch (data.type) {
    case "rapid_wind":
      [ts, ob] = decodeRapidWind(data.ob);
      body = `rapid_wind,station=${data.serial_number} ${serialize(ob)} ${ts}`;
      response = await write(body);
      break;
    case "obs_st":
      [ts, ob] = decodeObsSt(data.obs);
      body = `obs_st,station=${data.serial_number} ${serialize(ob)} ${ts}`;
      response = await write(body);
      break;
    default:
      break;
  }
});
