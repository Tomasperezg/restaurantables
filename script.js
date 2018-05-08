  $(() => {
  $( ".reserved" ).on( "click", function() {
    alert("sorry, this table is takend! plese select other table");
  });

$( ".open" ).on( "click", function() {
  $("#reservation").show(1000);

});
$("#submit").on( "click", function(){
  $(".open").css(({"background-color": "black", "color": "white"}));

});
});
$(()=>{
  $("h2").hide().delay(1600).fadeIn(1200);
  $("#reservation").hide();
});
$(()=>{
  $("h3").hide().delay(1800).fadeIn(1400);
});
$('#myForm').submit(function() {
    doSomething();
});
$(()=>{
$("#return").on( "click", function(){
  $("#reservation").hide();
});
});
