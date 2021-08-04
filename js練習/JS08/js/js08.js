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

  let tag = [],
      turnrow = beforeArray.length,
      turncol = beforeArray[0].length,
      direction = 0, //0右，1下，2左，3右
      result = [];
  //宣告初與原始矩陣相同之標誌矩陣，初始元素為1;
  for(let i = 0 ; i < turnrow ; i++ ) {
    tag[i] = [];
    for(let j = 0 ; j <turncol ; j++) {
      tag[i][j] = 1 ;
    }
  }
  let r = 0 , c = 0 , z = 0 ;
  while (tag[r] && tag[r][c] === 1 ) {
    result.push(beforeArray[r][c]);  // 將beforeArray填入result
    document.getElementById("after").innerHTML += result[z] + ' ';
    z++;
    tag[r][c] = 0 ;  //表示已訪問
    switch(direction) {
      case 0 :
        if (!tag[r][c+1]) {  //判斷的是tag[r][c]的下一個位置，如果為0或空字串，
          direction = 1 ;  
          r++;
        } else { c++ }
        break ;
      case 1 :
        if ( tag[r+1] && tag[r+1][c] ) {  //判斷下方整列與下方的值有沒有訪問過 都沒有的話
          r++;
        } else {
          direction =2; //方向切換為左
          c--;  //位置往左走一格
        }
        break;
      case 2 :
        if (!tag[r][c-1]) {  //判斷tag[r][c]左方是否為空值 是的話回傳true
          direction = 3 ; //方向切換到上
          r--; //往上走一行
        } else {c--}
        break;
      case 3 :
        if(!tag[r-1][c]) {  //如果上方列的值已訪問 回傳true 回到往右方走
          direction = 0;
          c++;
        } else {r--}
        break;
    }
    console.log(result);
  }


}