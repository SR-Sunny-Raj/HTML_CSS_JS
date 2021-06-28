function displayTime() {
  time = new Date();
  console.log(time);
  document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 1000);
