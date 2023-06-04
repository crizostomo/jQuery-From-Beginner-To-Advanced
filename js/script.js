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

  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];

  /**
  // Coding Activity: Creating an Image Slideshow ********CHALLENGE********
  var galleryImage = $(".gallery").find("img").first();
  
  var i = 0;
  setInterval(function() {
    i = (i + 1) % images.length; // 0,1,2,0,1,2...
    galleryImage.fadeOut(function() {
      $(this).attr("src", images[i]);
      $(this).fadeIn();
    });
    console.log(galleryImage.attr("src"));
  }, 2000);
  */

  /**
  // Changing the CSS Properties of Elements
  $(".gallery").css("display", "none");

  var redBox = $(".red-box");
  console.log(redBox.css("width"));
  console.log(redBox.width);

  redBox.css("background-color", "transparent");
  $("p").css("font-size", "18px")
  redBox.css("width", "+=20px")

  var properties = $("p").css(["font-size", "line-height", "color"]);
  console.log(properties);
  console.log(properties["font-size"]);

  redBox.css("user-select", "none");
  */

  $("a").addClass("fancy-link");
  /** 
   Adding or Removing CSS Classes
  $("a").addClass("fancy-link");
  $("p:first").addClass("large emphasize");

  $("li li").addClass(function(index) {
    $(this).addClass("item-" + index);
  });

  $("div").addClass(function(index, currentClass) {
    if (currentClass === "dummy") {
      return "red-box";
    }
  });

  $(".red-box").removeClass("red-box").addClass("blue-box");

  $(".dummy").removeClass("dummy").addClass("green-box");
  */

  /**
  // Changing the Data of an Element
  var gallery = $(".gallery");
  gallery.data("images", images);
  console.log(gallery.data("images"));
  gallery.data("name", "The Awesome Gallery");
  console.log(gallery.data());
  gallery.removeData("name");
  console.log(gallery.data("name"));

  var firstPar = $("p.first");
  console.log(firstPar.data("mydata"));
  */

  /**
  // Retrieving and Changing the Content of an Element
  // text(), html()
  var firstPar = $("p:first");
  console.log(firstPar.text());
  console.log(firstPar.html());
  console.log($("p").html());

  //firstPar.text("<strong>Hello</strong> World!")
  //firstPar.html("<strong>Hello</strong> World!")

  firstPar.html(firstPar.html() + " This was just appended");
  */

  /**
  // Adding Click Handlers
  $("#btn-click").click(function(event) {
    console.log(event);
    alert("Button was clicked");
  });

  $(".red-box").click(function() {
    $(this).fadeTo(500, 0.5);
  });
  $(".red.box").click();
  */

  /**
  // Adding Hover Handlers
  $("#btn-hover").hover(function() {
    alert("Button was hovered")
  });

  $(".green-box").hover(function() {
    $(this).text("I was hovered");
  });
  */


  /**
  // Adding MouseEnter & MouseLeave Handlers
  var blueBox = $(".blue-box");
  //blueBox.mouseenter(function() {
  //  $(this).stop().fadeTo(500, 0.5);
  //});
  //blueBox.mouseleave(function() {
  //  $(this).stop().fadeTo(500, 1);
  //});

  // hover(handlerIn, handlerOut)
  blueBox.hover(function() {
    $(this).stop().fadeTo(500, 0.7);
  }, function() {
    $(this).stop().fadeTo(500, 1);
  });
  */

  /**
  // Adding the Same Handler for Multiple Events
  // .on("click", function() {....})
  $("html").on("click keydown", function() {
    console.log("Mouse was clicked");
  });

  var i = 0;
  $(".gallery").find("img").on("click", function() {
    i = (i + 1) % images.length;
    $(this).fadeOut(function() {
      $(this).attr("src", images[i]).fadeIn();
    });
  });
  */

  /**
  // Modularizing Event Handlers (No More Inline Functions)
  function logEvent() {
    console.log("Mouse was clicked");
  }

  $("html").on("click keydown", logEvent);

  var i = 0;
  var galleryImage =  $(".gallery").find("img");
  galleryImage.on("click", switchImage);

  function switchImage() {
    i = (i + 1) % images.length;
    $(this).fadeOut(function() {
      $(this).attr("src", images[i]).fadeIn();
    });
  }
  */

  /**
  // Delegated Events
  //$("p").click(function() {
  //  $(this).slideUp();
  //});
  //$("#content").append("<p>This was added</p>");

  $("#content").on("click", "p", function() {
    $(this).slideUp();
  });
  $("#content").append("<p>This was added</p>");

  $("body").on("mouseenter", "li", function() {
    $(this).css("color", "#666");
  });  
  */

  /**
  // Passing Additional Data to Events
  $("#btn-click").click({
    user: "Diogo",
    domain: "google.com"
  }, function(event) {
    greetUser(event.data);
  });

  function greetUser(userdata) {
    username = userdata.user || "Annonymous";
    domain = userdata.domain || "example.com";

    alert("Welcome back " + username + " from " + domain + "!");
  }
  */

  /**
  // Coding Activity: Creating an Image Gallery with Lightbox Preview
  var galleryItems =  $(".gallery").find("img");
  galleryItems.css("width", "33%").css("opacity", "0.7");

  galleryItems.mouseenter(function() {
    $(this).stop().fadeTo(500, 1);
  });

  galleryItems.mouseleave(function() {
    $(this).stop().fadeTo(500, 0.7);
  });

  galleryItems.click(function() {
    var source = $(this).attr("src");
    var image = $("<img>").attr("src", source).css("width", "100%");
    $(".lightbox").empty().append(image).fadeIn(2000);
  });

  $(".lightbox").click(function() {
    $(this).stop().fadeOut();
  });
  */

  // Handling KeyDown & KeyUp Events
  $("html").keydown(function(event) { // TO SEE THE EVENT THAT IS BEING EXHIBITED IN THE CONSOLE
    console.log(event.which);
  });

  var ARROW_RIGHT = 39;
  $("html").keydown(function(event) {
    if (event.which == ARROW_RIGHT) {
      $(".blue-box").stop().animate({
        marginLeft: "+=10px"
      }, 50);
    }
  });


});