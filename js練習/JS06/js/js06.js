const Ans = () => {
  let = mos = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..',
    ]
  let val = document.getElementById("mos").value;
  let x = val.replaceAll("\n", " \n ");
  let array = x.split(" ");
  let ans = "";
  array.forEach( (x ,i ,array) => {
    if(x === "\n") {
      ans += "<br>";
    } else {
      mos.forEach( (y , j , array) => {
        if ( x === y ) {
          let d = String.fromCharCode(j+65);
          ans += d;
        }
      })
    }
  });
  document.getElementById("ans").innerHTML = ans;
}