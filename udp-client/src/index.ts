require("dotenv").config();
const dgram = require("dgram");
const nodefetch = require("node-fetch");
const { decodeRapidWind, decodeObsSt, decodeEvtStrike } = require("./decode");

const client = dgram.createSocket("udp4");

client.bind(50222);

client.on("message", async (message: Uint8Array) => {
  const data = JSON.parse(message.toString());
  // console.log(data);
  let ts, ob, body, response;
  switch (data.type) {
    case "rapid_wind":
      [ts, ob] = decodeRapidWind(data.ob);
      body = `rapid_wind,station=${data.serial_number} ${serialize(ob)} ${ts}`;
      response = await writeToInfluxDB(body);
      break;
    case "obs_st":
      [ts, ob] = decodeObsSt(data.obs);
      body = `obs_st,station=${data.serial_number} ${serialize(ob)} ${ts}`;
      response = await writeToInfluxDB(body);
      break;
    case "evt_strike":
      [ts, ob] = decodeEvtStrike(data.evt);
      body = `evt_strike,station=${data.serial_number} ${serialize(ob)} ${ts}`;
      response = await writeToInfluxDB(body);
    default:
      break;
  }
});

const writeToInfluxDB = async (body: string) => {
  let response;
  let url = `${process.env["INFLUXDB_HOST"]}/api/v2/write?org=${
    encodeURIComponent(
      //@ts-ignore
      process.env["INFLUXDB_ORG"],
    )
  }&bucket=${process.env["INFLUXDB_BUCKET"]}&precision=s`;
  try {
    response = await nodefetch(url, {
      method: "POST",
      headers: { Authorization: `Token ${process.env["INFLUXDB_TOKEN"]}` },
      body,
    });
    // const b = new Uint8Array(await response.arrayBuffer());
    // console.log(new TextDecoder().decode(b));
  } catch (e) {
    response = { status: "error" };
    console.error(e);
  }
  console.log(response.status, url, body);
  return response.status;
};

const serialize = (obj: Object) => {
  const arr: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    arr.push(`${key}=${value}`);
  }
  return arr.join(",");
};
