$(document).ready(function(){
  $("#language").submit(function(event){
    event.preventDefault();
    const quest1= $("input:radio[name=destination]:checked").val();
    const quest2= $("input:radio[name=animal]:checked").val();
    const quest3= $("input:radio[name=activity]:checked").val();
    const quest4= $("#year-range").val();
    const quest5= $("#color").val();
    console.log(quest1, quest2, quest3, quest4, quest5);
    
    if (quest1==="a" && quest2==="a" && quest3==="a" || quest1==="a" && quest2==="a" || quest1==="a" && quest3==="a" || quest2==="a" && quest3==="a"){
      const ruby= "you would do well learning Ruby. You like to be productive but have fun!";
      $("#output").show();
      $("#prog-lang-answer").text(ruby);
      $("img").hide();
      $("#ruby").toggle();
    }
    else if(quest1==="b" && quest2==="b" && quest3==="b" || quest1==="b" && quest2==="b" || quest1==="b" && quest3==="b" || quest2==="b" && quest3==="b"){
      const python= "you would do well learning Python. You think beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.";
      $("#output").show();
      $("#prog-lang-answer").text(python);
      $(".logo").hide();
      $("#python-logo").toggle();
    }
    else if (quest1==="C" && quest2==="c" && quest3==="c" || quest1==="c" && quest2==="c"|| quest1==="c" && quest3==="c" || quest2==="c" && quest3==="c"){
      const go= "you would do well learning Go. You are efficient and high-performing.";
      $("#output").show();
      $("#prog-lang-answer").text(go);
      $(".logo").hide();
      $("#go").toggle();
    }
    else if (quest1==="d" && quest2==="d" && quest3==="d" || quest1==="d" && quest2==="d" || quest1==="d" && quest3==="d" || quest2==="d" && quest3==="d"){
      const rust= "you would do well learning Rust. You are a performer at heart, with safety in mind. Above all else, you are the loved the most!";
      $("#output").show();
      $("#prog-lang-answer").text(rust);
      $(".logo").hide();
      $("#rust").toggle();
    

    }
    else {
      $("#output").show();
      const tossUp= "you have many likes and little focus! You could choose any of these languages but I suggest you learn a little bit more about them here:"
      $("#output").show();
      $("#prog-lang-answer").text(tossUp);
      // $(".logo").hide();
      $("#ruby, #rust, #go, #python-logo").toggle();
    }
  });
});

