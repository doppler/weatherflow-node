require("dotenv").config();
const nodefetch = require("node-fetch");

exports.write = async (body: string) => {
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
  } catch (e) {
    response = { status: "error" };
    console.error(e);
  }
  console.log(response.status, url, body);
  return response.status;
};

exports.serialize = (obj: Object) => {
  const arr: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    arr.push(`${key}=${value}`);
  }
  return arr.join(",");
};
