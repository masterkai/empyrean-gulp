$(function() {
  $("#GOTOP").click(function() {
    $("html,body").animate({
      scrollTop: 0
    }, 500);
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 120) {
      $("#GOTOP").fadeIn(300).addClass("active");
    } else {
      $("#GOTOP").stop().fadeOut(300).removeClass("active");
    }
  });
});