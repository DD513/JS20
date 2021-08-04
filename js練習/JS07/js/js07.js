const turn = () => {
  let val = document.getElementById("text").value;
  let row = [] ;
  let col = [] ;
  let i ;
  let beforeArray = [];
  let origin = '';

  row = val.split("\n");
  beforeArray = new Array(row.length);
  for(i = 0 ; i < row.length ; i ++ ) {
    col = row[i].split(" ");
    beforeArray[i] = new Array(col.length);
    for(let j = 0 ; j < col.length ; j++ ) {
      beforeArray[i][j] = col[j];
      origin += beforeArray[i][j] + ' ';
    }
    origin += '<br>';
  }
  // origin 為顯示在網頁上的樣式
  //beforeArray 為儲存的原始矩陣樣式
  document.getElementById("origin").innerHTML = origin;  
  // changeArray 為存放轉置矩陣的Array
  //change 為顯示在網頁上的樣式
  let changeArray = [] ;
  let change = '';
  for( i = 0 ; i<beforeArray[0].length ; i++) {
    changeArray[i] = [] ;
    for (let j = 0 ; j <beforeArray.length ; j ++) {
      changeArray[i][j] = beforeArray[j][i];
      change += changeArray[i][j] + ' ';
    }
    change += '<br>';
  }
  console.log(beforeArray,origin,change,changeArray);
  document.getElementById("before").innerHTML = change;

}