# weatherflow-node

Stores data from Weatherflow hub UDP broadcast into InfluxDB, and uses Grafana and some custom widgets to display a dashboard of data relevant to wind sport operations such as skydiving.

## Requirements

- [Weatherflow Tempest](https://weatherflow.com/tempest-weather-system/) weather station
- Linux - _Ubuntu 20.04 and Raspberry Pi OS 64-bit known to work_
- Rasberry PI - _(optional, Model 4B 8G RAM preferable)_
- [Docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

## Installation for Rasberry PI

Download and copy [64-bit Raspberry PI OS](http://downloads.raspberrypi.org/raspios_arm64/images/raspios_arm64-2020-08-24/2020-08-20-raspios-buster-arm64.zip) onto an SD card using the [Raspberry PI Imager](https://www.raspberrypi.org/downloads/). Insert the SD card into your Rasberry PI and turn it on. Once the OS boots, follow the prompts to set it up. Once setup is done, you'll be prompted to reboot the PI.

### Install Docker

In a Terminal window, run the following commands:

```
curl -fsSL https://get.docker.com -o get-docker.sh

sudo sh get-docker.sh

sudo usermod -aG docker pi

docker run hello-world
```

If the last command fails, log out and log back in, or reboot, and try it again.

### Install docker-compose

```
pip install docker-compose
```

### Install weatherflow-node

```
git clone https://github.com/doppler/weatherflow-node.git
```
