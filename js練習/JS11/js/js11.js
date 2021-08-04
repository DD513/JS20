const myJSON = () => {
  const data = {
    name: "DD",
    phone: "4125252",
    age: "21"
  }
  console.log(data);
  number = ['score1','score2','score3'];
  for(let i  = 0 ; i <number.length ; i++) {
    data[number[i]] = 10*(i+6) ;
  }
  console.log(data);
};