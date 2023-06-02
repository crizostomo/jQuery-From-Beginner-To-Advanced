$(function() {
  /**
   // Sliding Elements Up and Down
   $(".red-box").fadeOut(2000);
   $(".blue-box").slideUp(2000);
   $(".green-box").slideToggle(2000);
  // $(".green-box").fadeOut(3000);
  // $(".blue-box").fadeOut(4000);
  $("p").hide();
  $("p").slideDown(1000);
   */

  // Moving Elements
  $(".blue-box").animate({
    "margin-left": "+=200px"
  }, 1000, "linear");
});