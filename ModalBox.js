$(document).ready(function () {
  $(".btn1").on("click", function () {
    console.log("ddadadadad");
    
    $(".modalbox").toggleClass("hienra");  
  });
  $(".btn2").on("click", function () {
    console.log("ddadadadad");
    
    $(".modalbox").removeClass("hienra");  
  });
});