
let id =0;
let user = [];

const saveuser = () => {
  let name = document.getElementById("Username").value;
  let password = document.getElementById("password").value;
  let table = document.querySelector("table");
  id++;
  if( name == '' || password == '') {
    console.log(456);
    alert ("您輸入的內容有少");
    id--;
    return false;
  } else {
    let data = { "name" : name , "password" : password };
    add( id , name , password );
    user[id] = data ;
  }
  document.getElementById("Username").value ="";
  document.getElementById("password").value ="";
  console.log(user);
}
const add = (id,name,password) => {
  let table = document.getElementById("msgbox");
  let row = table.insertRow();
  let tdId = row.insertCell(0);
  let tdName = row.insertCell(1);
  let tdPassword = row.insertCell(2);
  let tdAction = row.insertCell(3);
  tdId.innerHTML = id;
  tdName.innerHTML = name ;
  tdPassword.innerHTML = password ;
  tdAction.innerHTML = '<button class="edit" onclick="edit(this)">編輯</button><button class="del" onclick="del(this)">刪除</button>';
}

const del = (td) => {
  let row = td.parentElement.parentElement; // 拿取td的父元件的父元件
  document.getElementById("msgbox").deleteRow(row.rowIndex);
}

const edit = (td) => {
  let row = td.parentElement.parentElement;
  row.cells[2].innerHTML = '<input type = "text" id ="editContent">';
  row.cells[3].innerHTML = '<button id="check" onclick="check(this)">確認</button><button class = "cancel" onclick="cancel(this)">取消</button>';
}

const check = (td) => {
  let row = td.parentElement.parentElement;
  let editContent = document.getElementById('editContent').value;
  user[id].password = editContent;
  row.cells[2].innerHTML = user[id].password;
  row.cells[3].innerHTML = '<button class="edit" onclick="edit(this)">編輯</button><button class="del" onclick="del(this)">刪除</button>';
}

const cancel = (td) => { 
  let row = td.parentElement.parentElement;
  row.cells[2].innerHTML = user[id].password;
  row.cells[3].innerHTML = '<button class="edit" onclick="edit(this)">編輯</button><button class="del" onclick="del(this)">刪除</button>';
}

const search = () => {
  let id = document.getElementById('searchId').value;
  let searchUser = user[id];
  console.log(name,user[id]);
  if(!searchUser) {
    document.getElementById('searchUser').innerHTML = '<br><p>沒有該使用者</p>';
    return false;
  } else {
    document.getElementById('searchUser').innerHTML = "<br>使用者ID："+ id + "<br>使用者姓名：" +user[id].name + "<br>使用者密碼：" + user[id].password;
  }
}