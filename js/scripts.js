$(document).ready(function() {
  $("#hello").click(function() {
    $("ul.cat").prepend("<li>Meow</li>");
    $("ul.dog").prepend("<li>Woof</li>");
    $("ul.cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul.dog").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("#food").click(function() {
    $("ul.cat").prepend("<li>Fish</li>");
    $("ul.dog").prepend("<li>Lamb</li>");
    $("ul.cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul.dog").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("#temper").click(function() {
    $("ul.cat").prepend("<li>If I am in my good mood.</li>");
    $("ul.dog").prepend("<li>I am always friendly, no matter what</li>");
    $("ul.cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul.dog").children("li").first().click(function() {
      $(this).remove();
    });
  });


});
