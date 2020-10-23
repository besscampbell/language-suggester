$(document).ready(function(){
  $("#language").submit(function(event){
    event.preventDefault();
    const quest1= $("input:radio[name=destination]:checked").val();
    const quest2= $("input:radio[name=animal]:checked").val();
    const quest3= $("input:radio[name=activity]:checked").val();
    const quest4= $("#year-range").val();
    const quest5= $("#color").val();
    console.log(quest1, quest2, quest3, quest4, quest5);
    if (quest1==="a" && quest2==="a" && quest3==="a" || quest1==="a" && quest2==="a" && quest4==="a" || quest1==="a" && quest3==="a" && quest4==="a" || quest2==="a" && quest3==="a" && quest4==="a"){
      const ruby= "Ruby";
      $(".output").show();
      $("#prog-lang-answer").text(ruby);

    }
  });
});