const count = () => {
  let value = document.getElementById("array").value;
  let array = value.split(',');
  console.log(array);
  let max = Math.max(...array);
  let min = Math.min(...array);
  let sort = array.sort((a,b) => {
    return a - b ;
  });
  document.getElementById("max").innerText = max ;
  document.getElementById("min").innerText = min ;
  document.getElementById("sort").innerText = sort ;
  reverse();
}

const find = () => {
  let value = document.getElementById("array").value;
  let array = value.split(',');
  let index = document.getElementById("index").value;
  let point = array.indexOf(index)+1;
  console.log(value,array,index,point);
  document.getElementById("find").innerText = point ;
}

const reverse = () => {
  let value = document.getElementById("array").value;
  let array = value.split(',');
  let reverse = array.reverse();
  document.getElementById("reverse").innerText = reverse ;
}

const add = () => {
  let value = document.getElementById("array").value;
  let array = value.split(',');
  let index = document.getElementById("addindex").value;
  array.push(index);
  document.getElementById("addArray").innerText = array ;
}

const del = () => {
  let value = document.getElementById("array").value;
  let array = value.split(',');
  let newarray = array.pop();
  console.log(newarray);
  document.getElementById("delArray").innerHTML = array;
}

const remove = () => {
  let value = document.getElementById("array").value;
  let array = value.split(',');
  let index = document.getElementById("removeindex").value;
  let point = array.indexOf(index);
  array.splice(point , 1);
  document.getElementById("removeArray").innerText = array ;
}