clock = () => {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let d = new Date();
  let day = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  let hour = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let mill = d.getMilliseconds();
  document.getElementById("date").innerHTML = months[month] + " " + day +", "+ year + "<br>";
  document.getElementById("clock").innerHTML =hour+" "+ m + " " + s + " " + mill;
}

setInterval(clock,1000);