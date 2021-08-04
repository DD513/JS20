const verify = () => {
  let english = [ 'A' ,'B' ,'C' ,'D' ,'E' ,
                  'F' ,'G' ,'H' ,'I' ,'J' ,
                  'K' ,'L' ,'M' ,'N' ,'O' ,
                  'P' ,'Q' ,'R' ,'S' ,'T' ,
                  'U' ,'V' ,'W' ,'X' ,'Y' ,
                  'Z'];
  let number = [10 ,11 ,12 ,13 ,14 ,
                15 ,16 ,17 ,34 ,18 , 
                19 ,20 ,21 ,22 ,35 ,
                23 ,24 ,25 ,26 ,27 ,
                28 ,29 ,32 ,30 ,31 ,
                33 ];
  let multiply = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  let ID =document.getElementById('ID').value;
  let firstChar = ID.charAt(0);
  let lastnum = ID.charAt(9);
  let first = number[english.indexOf(firstChar, 0)];
  let nums = new Array(2);
  let sum = 0;
  let result;
  
  nums [0] = Math.floor(first /10);
  nums [1] = first - (nums[0]*10);
  
  for(i = 0 ; i < multiply.length ; i++) {
    if ( i < 2 ) {
      sum += parseInt( nums[i] * multiply[i]) ;
    } else {
      sum += parseInt( ID.charAt(i-1))* multiply[i] ;
    }
  }
  sum +=parseInt(lastnum);
  console.log(ID,first,nums[0],nums[1],sum,lastnum);
  if ( sum%10 != 0) {
    result ='false';
  } else {
    result ='true';
  }
  
  document.getElementById("sum").innerText = '(2),(3) 及最後一碼的和為：' + sum ;
  document.getElementById("result").innerText = result;
  
}