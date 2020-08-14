let r = 0;

const hostname = window.location.hostname;

const widgets = [
  {
    domId: "left-bottom",
    url: `http://${hostname}:3000/d-solo/LIc6Z0VMz/wind-and-temperature?orgId=1&refresh=5s&panelId=8`
  },
  {
    domId: "temperature",
    url: `http://${hostname}:3000/d-solo/LIc6Z0VMz/wind-and-temperature?orgId=1&refresh=5s&panelId=10`
  },
  {
    domId: "temperature-and-humidity",
    url: `http://${hostname}:3000/d-solo/LIc6Z0VMz/wind-and-temperature?orgId=1&refresh=5s&panelId=12`
  },
  {
    domId: "humidity",
    url: `http://${hostname}:3000/d-solo/LIc6Z0VMz/wind-and-temperature?orgId=1&refresh=5s&panelId=14`
  },
  {
    domId: "wind-graph",
    url: `http://${hostname}:3000/d-solo/LIc6Z0VMz/wind-and-temperature?orgId=1&refresh=5s&panelId=4`
  }
]

const populateWidgets = () => {
  widgets.forEach(widget => {
    const el = document.getElementById(widget.domId);
    const iframe = document.createElement('iframe')
    iframe.src = widget.url;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    el?.appendChild(iframe)
  })
}
const fetchWindsAloft = async () => {
  const response = await fetch('https://winds-aloft-json.herokuapp.com/forecast/mia/ATL.json');
  const json = await response.json()

  json.dataRows[0].forecast.forEach(forecast => {
    const arrow = new Image();
    arrow.src = "arrow.svg";
    arrow.style.transform = `rotate(${forecast.direction}deg)`

    const windsAloftDiv = document.querySelector(`#alt-${forecast.altitude}`)

    const arrowSpan = windsAloftDiv?.querySelector('.arrow')

    const textSpan = windsAloftDiv?.querySelector('#footer')
    let text = "";

    if (forecast.direction !== "L/V") {
      if (arrowSpan?.firstChild) {
        arrowSpan.removeChild(arrowSpan.firstChild)

      }
      arrowSpan.appendChild(arrow)
      text += `${forecast.direction}° @ ${forecast.speed.mph} mph`
    } else {
      text += "Light & Variable"
    }
    if (forecast.temperature) {
      text += `<br/>${forecast.temperature.farenheit} °F`
    }
    textSpan.innerHTML = text;
  });
}

document.onreadystatechange = async () => {
  if (document.readyState === 'interactive') {

    populateWidgets();
    fetchWindsAloft();

    const w = setInterval(fetchWindsAloft, 1000 * 60 * 10);
  }
}