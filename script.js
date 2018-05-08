  $(() => {
  $( ".reserved" ).on( "click", function() {
    alert("sorry, this table is takend! plese select other table");
  });

$( ".open" ).on( "click", function() {
  alert("this table is available!");
  let user = prompt("would you like to reserve this table?");
  if(user === "yes"){
    window.location.href = "index.html";

  }
  else if(user === "no"){
    alert("thank you! Good bye!");

  }
  else{
    alert("please, say yes or no!");
  }


});

});
$(()=>{
  $("h2").hide().delay(1600).fadeIn(1200);
});
$(()=>{
  $("h3").hide().delay(1600).fadeIn(1200);
});
