const input = () => {
  let value = document.getElementById("Decimal").value;
  let number = parseInt(value);
  document.getElementById("binary").innerHTML = Binary(number);
  document.getElementById("octal").innerHTML = Octal(number);
  document.getElementById("hex").innerHTML = Hex(number);
}

const Binary = (e) => {return e.toString(2);}

const Octal = (e) => {return e.toString(8);}

const Hex = (e) => {return e.toString(16);}