const Day = () =>  {
  let d = new Date();
  let year =d.getFullYear();
  let month =d.getMonth()+1;
  let day =d.getDate();
  alert('今天日期是' + year + '年' + month + '月' + day +'日');
}
const textOnblur = () => {
  alert('你不要我了');
}
const choose = (selectObject) => {
  let value = selectObject.value;
  alert(value + "在這");
}
