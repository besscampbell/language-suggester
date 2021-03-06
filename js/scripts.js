$(document).ready(function(){
  $("#language").submit(function(event){
    event.preventDefault();
    const quest1 = $("input:radio[name=destination]:checked").val();
    const quest2 = $("input:radio[name=animal]:checked").val();
    const quest3 = $("input:radio[name=activity]:checked").val();
   
    if (quest1 === "a" && quest2 === "a" && quest3 === "a" || quest1 === "a" && quest2 === "a" || quest1 === "a" && quest3 === "a" || quest2 === "a" && quest3 === "a"){
      const ruby = "you would do well learning Ruby. You like to be productive but have fun!";
      $("#output").toggle();
      $("#prog-lang-answer").text(ruby);
      $("img").hide();
      $("#ruby").toggle();
      $("#language").hide();
      $(window).scrollTop(0);
    } else if (quest1 === "b" && quest2 === "b" && quest3 === "b" || quest1 === "b" && quest2 === "b" || quest1 === "b" && quest3 === "b" || quest2 === "b" && quest3 === "b"){
      const python = "you would do well learning Python. You think beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.";
      $("#output").toggle();
      $("#prog-lang-answer").text(python);
      $(".logo").hide();
      $("#python-logo").toggle();
      $("#language").hide();
      $(window).scrollTop(0);
    } else if (quest1 === "c" && quest2 === "c" && quest3 === "c" || quest1 === "c" && quest2=== "c" || quest1 === "c" && quest3 === "c" || quest2 === "c" && quest3 === "c"){
      const go = "you would do well learning Go. You are efficient and high-performing.";
      $("#output").toggle();
      $("#prog-lang-answer").text(go);
      $(".logo").hide();
      $("#go").toggle();
      $("#language").hide();
      $(window).scrollTop(0);
    } else if (quest1 === "d" && quest2 === "d" && quest3 === "d" || quest1 === "d" && quest2 === "d" || quest1 === "d" && quest3 === "d" || quest2 === "d" && quest3 === "d"){
      const rust = "you would do well learning Rust. You are a performer at heart, with safety in mind. Above all else, you are the loved the most!";
      $("#output").toggle();
      $("#prog-lang-answer").text(rust);
      $(".logo").hide();
      $("#rust").toggle();
      $("#language").hide();
      $(window).scrollTop(0);
    } else {
      $("#output").show();
      const tossUp = "you have many likes and little focus! You could choose any of these languages but I suggest you do some more research. Click on a logo to learn more about each programming language."
      $("#output").show();
      $("#prog-lang-answer").text(tossUp);
      $(".logo").hide();
      $("#ruby, #rust, #go, #python-logo").toggle();
      $("#language").hide();
      $(window).scrollTop(0);
    }
  });
  $(".clickable").click(function(){
    $("#language, .radio-pic").show().trigger("reset");
    $("#output").toggle();
  });
});
