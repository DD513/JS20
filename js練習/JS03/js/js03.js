const print = () => {
  let i,j;
  let s1 = '';
  let s2 = '';
  let s3 = '';
  let s4 = '';
  let s5 = '';

  //s1
  for ( i = 0 ; i < 5 ; i++ ) {
    for ( j = 0 ; j <5 ; j++ ) {
      s1 += '*  ';
    }
    s1 += '<br>';
  }
  //s2
  for ( i = 0 ; i < 5 ; i++ ) {
    for ( j = 0 ; j <= i ; j++ ) {
      s2 += '*  ';
    }
    s2 += '<br>';
  }
  //s3
  for ( i = 0 ; i < 5 ; i++ ) {
    for ( j = 0 ; j < 4 - i ; j++ ) {
      s3 += '&nbsp';
    }
    for ( j = 0 ; j < i + 1 ; j++ ) {
      s3 += '* ';
    }
    s3 += '<br>';
  }
  //s4
  for ( i = 0 ; i < 5 ; i++ ) {
    for ( j = 0 ; j <5 ; j++ ) {
      if ( i == 0 || i == 4 || j == 0 || j == 4) {
        s4 += '* ';
      } else {
        s4 += '&nbsp&nbsp ';
      }
    }
    s4 += '<br>';
  }
  //s5
  for ( i = 0 ; i < 5 ; i++ ) {
    for ( j = 0 ; j <= i ; j++ ) {
      if ( j == 0 || i == 4 || i == j ) {
        s5 += '* ';
      } else {
        s5 += '&nbsp&nbsp&nbsp';
      }
    }
    s5 += '<br>';
  }


  document.getElementById("star1").innerHTML ='star1<br>'+ s1;
  document.getElementById("star2").innerHTML ='star2<br>'+ s2;
  document.getElementById("star3").innerHTML ='star3<br>'+ s3;
  document.getElementById("star4").innerHTML ='star4<br>'+ s4;
  document.getElementById("star5").innerHTML ='star5<br>'+ s5;
}