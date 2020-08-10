
let secondHandRotation = 6 * new Date().getSeconds(); // 360 / 60 sec = 6 deg

const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const digital = document.getElementById('digital');
const hourHand = document.getElementById('hour-hand');

const zeroPad = (n) => {
  return n.toString().length === 1 ? `0${n}` : n
}

export const updateClock = () => {
  secondHandRotation += 6;
  const d = new Date();
  const [s, m, h] = [d.getSeconds(), d.getMinutes(), d.getHours()]
  secondHand.style.transform = `rotate(${secondHandRotation}deg)`
  minuteHand.style.transform = `rotate(${6 * m + (0.1 * s)}deg)`
  hourHand.style.transform = `rotate(${30 * (h % 12) + (0.5 * m)}deg)`
  digital.innerHTML = `${zeroPad(h)}:${zeroPad(m)}:${zeroPad(s)}`
}