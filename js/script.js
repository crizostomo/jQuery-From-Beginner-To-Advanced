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

  /** 
  // Moving Elements
  $(".blue-box").animate({
    "margin-left": "+=200px"
  }, 1000, "linear");
  */

  
  /** 
  // Custom Animations
  $(".blue-box").animate({
    "margin-left": "200px",
    "height": "50px",
    "width": "50px",
    "margin-top": "25px"
  }, 1000);

  $("p").animate({
    "font-size": "20px"
  }, 1000);
  */

  /**
  // Custom Animations
  $(".red-box").fadeTo(1000, 0.2);
  $(".green-box").delay(1000).fadeTo(1000, 0.5);
  $(".blue-box").delay(2000).fadeTo(1000, 0.8);
  */

  // Timing Animations Using Callback Functions
  $(".red-box").fadeTo(1000, 0.2, function() {
    alert("This is the callback: Animation finished");
  });
});