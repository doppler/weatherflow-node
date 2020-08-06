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

const fetchCheckWxSunriseSunset = async () => {
  const response = await fetch('https://api.checkwx.com/station/KPUJ/suntimes', {
    headers: { "X-API-Key": "0e0ac3577f8440dcb50696047d" }
  })
  const json = await response.json();
  console.log(json)
}

document.onreadystatechange = async () => {
  if (document.readyState === 'interactive') {
    r = new Date().getSeconds(); // rotation

    const clockDiv = document.querySelector('#clock')
    const response = await fetch('clock.svg');
    const clock = await response.text();
    clockDiv.innerHTML = clock;
    const hourHand = document.getElementById('hour-hand')
    const minuteHand = document.getElementById('minute-hand')
    const secondHand = document.getElementById('second-hand')
    const digital = document.getElementById('digital')

    const updateClock = () => {
      r += 1;
      const d = new Date();
      const s = d.getSeconds();
      const m = d.getMinutes();
      const h = d.getHours();
      secondHand.style.transform = `rotate(${6 * r}deg)`
      minuteHand.style.transform = `rotate(${6 * m + (0.1 * s)}deg)`
      hourHand.style.transform = `rotate(${30 * (h % 12) + (0.5 * m)}deg)`
      const hh = h.toString().length === 1 ? `0${h}` : h
      const mm = m.toString().length === 1 ? `0${m}` : m
      const ss = s.toString().length === 1 ? `0${s}` : s
      digital.innerHTML = `${hh}:${mm}:${ss}`
    }

    populateWidgets();
    fetchWindsAloft();
    // fetchCheckWxSunriseSunset();

    const w = setInterval(fetchWindsAloft, 1000 * 60 * 10);
    const i = setInterval(updateClock, 1000)
  }
}