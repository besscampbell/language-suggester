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
    else if(quest1==="b" && quest2==="b" && quest3==="b" || quest1==="b" && quest2==="b" && quest4==="b" || quest1==="b" && quest3==="b" && quest4==="b" || quest2==="b" && quest3==="b" && quest4==="b"){
      const python= "Python";
      $(".output").show();
      $("#prog-lang-answer").text(python);
    }
    else if (quest1==="C" && quest2==="c" && quest3==="c" || quest1==="c" && quest2==="c" && quest4==="c" || quest1==="c" && quest3==="c" && quest4==="c" || quest2==="c" && quest3==="c" && quest4==="c"){
      const go= "Go";
      $(".output").show();
      $("#prog-lang-answer").text(go);
    }
    else if (quest1==="d" && quest2==="d" && quest3==="d" || quest1==="d" && quest2==="d" && quest4==="d" || quest1==="d" && quest3==="d" && quest4==="d" || quest2==="d" && quest3==="d" && quest4==="d"){
      const rust= "Rust";
      $(".output").show();
      $("#prog-lang-answer").text(rust);
    }
  });
});