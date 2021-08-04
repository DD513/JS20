$.ajax({
  type:"get",
  url: "../product.json",
  dataType: "json",
  success: function(data) {
    console.log(data);
  },
  error:function()  {
    alert("請求失敗");
  }
});