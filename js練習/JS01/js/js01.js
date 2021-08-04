 const count = () => {
  let km = document.getElementById("distance").value;
  let cost = ''
  let money = 70
  if (km < 1.5) {
    cost = money ;
  }else {
    if( ( km - 1.5 ) % 0.5 == 0 ) {
      cost = money + ((( km - 1.5) / 0.5) * 5);
    } else {
      cost = money + (Math.ceil((km - 1.5) / 0.5) * 5) ;
    }
  }
  document.getElementById("cost").innerText = cost + '元';
} 