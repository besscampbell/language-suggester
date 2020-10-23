$(document).ready(function(){
  $("#language").submit(function(event){
    event.preventDefault();
    let quest1, quest2, quest3, quest4, quest5;
    quest1= $("input:radio[name=destination]:checked").val();
    quest2= $("input:radio[name=animal]:checked").val();
    quest3= $("input:radio[name=activity]:checked").val();
    quest4= $("#year-range").val();
    quest5= $("#color").val();
    console.log(quest1, quest2, quest3, quest4, quest5);
  });
});