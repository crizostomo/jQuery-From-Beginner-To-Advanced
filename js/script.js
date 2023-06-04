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

  /**
  // Timing Animations Using Callback Functions
  $(".red-box").fadeTo(1000, 0.2, function() {
    alert("This is the callback: Animation finished");
  });
  */

  /**
  // Creating a Signup Lightbox
  $(".lightbox").delay(500).fadeIn(1000);
  */

  /**
  // Using CSS Selectors in jQuery
  //$("p").css("background-color", "rgba(180, 180, 30, 0.8)")
  //$(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)")
  //$("#list").css("background-color", "rgba(180, 180, 30, 0.8)")
  //$("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)")
  //$("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8)")
  $("p:first, li:last, li:odd").css("background-color", "rgba(180, 180, 30, 0.8)")
  */

  /**
  // jQuery Methods for Traversal
  //$("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)")
  //$("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)")
  //$("#list").parents("body").css("background-color", "rgba(180, 180, 30, 0.8)")
  //$("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8)")
  //$("#list").siblings(":header").css("background-color", "rgba(180, 180, 30, 0.8)")
  //$("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)")
  $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)")
  */

  /**
  // jQuery Methods for Filtering
  //$("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)")
  //$("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)")
  //$("li").filter(function(index) {
  //  return index % 3 === 1;
  //}).css("background-color", "rgba(180, 180, 30, 0.8)")
  //$("li").first().css("background-color", "rgba(180, 180, 30, 0.8)")
  //$("li").last().css("background-color", "rgba(180, 180, 30, 0.8)")
  //$("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)") // It selects backwards 
  //$("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)")
  //$("li").not("#list ul li").css("background-color", "rgba(180, 180, 30, 0.8)")
  $("li").not(function(index) {
    return index % 3 === 1;
  }).css("background-color", "rgba(180, 180, 30, 0.8)")
  */

  /**
  // Adding new Elements to the DOM
  //$("ul ul:first").append("<li> I'm gonna be the last sub-item");
  //$("<li> I'm gonna be the last item</li>").appendTo($("ul ul:first")); // Same result as the line above
  //$("ul ul:first").prepend("<li> I'm gonna be the first sub-item");
  //$("ul ul").prepend("<li> I'm gonna be the first sub-item");
  //$("<li> I'm gonna be the first item</li>").prependTo($("ul ul")); // Same result as the line above
  //$("<h4> Dev Developing</h4>").prependTo($("#content"));
  //$(".red-box").after("<div class='red-box'> Another Red </div>");
  //$(".blue-box").before("<div class='blue-box'> Another Blue </div>");
  //$(".blue-box").before(function() {
  //  return $("<div class='blue-box'> Blue 2 </div>")
  //});

  $(".blue-box").before($(".red-box"));
  $("p").after($("#list"));
  */

  /**
  // Replacing Elements and Content
  //$("li").replaceWith("<li>Replaced.</li>")
  //$("li").replaceWith(function(){
  //  return "<li>Replaced with function</li>"
  //});

  //var firstListItem = $("li.first");
  //$("p").replaceWith(firstListItem);

  //$(".red-box, .blue-box").replaceWith("<div class='green-box'>More Green</div>")

  $("<div class='green-box'>More Green!</div>").replaceAll(".red-box, .blue-box");
  */

  /**
  // Removing Elements and Content
  //$("li").remove();
  //$("form").children().not("input:text, textarea, br").remove();

  //var detachedListItem = $("li").detach();
  //$("#content").append(detachedListItem);

  //$("p:first").empty();

  $(".red-box, .blue-box, .green-box").empty();
  */

  /**
  // Manipulating Attributes and Properties
  // attr(), prop(), val()
  //var specialLink = $("#special-link");
  //console.log(specialLink.attr("href"));

  //specialLink.attr("href", "http://google.com");

  //var checkbox = $("input:checkbox");
  //console.log(checkbox.prop("checked"));
  //console.log(checkbox.attr("checked"));

  var textInput = $("input:text");
  textInput.val("Text 2")
  console.log(textInput.val());

  var rangeInput = $("input[type'range']");
  console.log(rangeInput.val());
  */

  // Coding Activity: Creating an Image Slideshow ********CHALLENGE********
  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];

  var i = 0;
  setInterval(function() {
    i = (i + 1) % images.length; // 0,1,2,0,1,2...
    galleryImage.fadeOut(function() {
      $(this).attr("src", images[i]);
      $(this).fadeIn();
    });
    console.log(galleryImage.attr("src"));
  }, 2000);

});