// Header Scrolling Effect Start
let prevScrollPos = $(window).scrollTop();
const header = $("#sticky-header");
let timer;
function hideHeader() {
  header.addClass("hidden");
}
function showHeader() {
  clearTimeout(timer);
  const currentScrollPos = $(window).scrollTop();
  if (currentScrollPos < prevScrollPos || currentScrollPos === 0) {
    header.removeClass("hidden");
  } else {
    header.addClass("hidden");
    timer = setTimeout(hideHeader, 4000); // Adjust the timeout duration as needed (4000ms = 4 seconds)
  }
  prevScrollPos = currentScrollPos;
}
header.removeClass("hidden");
$(window).scroll(showHeader);

// Header Scrolling Effect End

// Hamburger Start
$(".hamburger").click(function () {
  $(this).toggleClass("active");
  // Bottom functionality for toggling navigation
  $(".main-header .navigation-header").slideToggle();
  // Bottom functionality for not scrolling body when navigation is open
  $("body").toggleClass("overflow-y-hidden");
});

// Hamburger End

// Accordion Start
$(".accordion-header").click(function () {
  // Toggle the visibility of the content when header is clicked
  $(this).next(".accordion-content").slideToggle();
  var icon = $(this).find(".icon");
  icon.text(icon.text() == "+" ? "-" : "+");
  // Hide other content
  $(".accordion-content").not($(this).next()).slideUp();
  $(".accordion-header .icon").not(icon).text("+");
});

// Accordion End

// Tabs Start
$(".tab-content:first").show();
// Handle tab click event
$(".tab").click(function () {
  // Hide all tab content
  $(".tab-content").hide();
  // Show the selected tab content
  var tabId = $(this).attr("data-tab");
  $("#" + tabId).show();
  // Remove active class from all tabs
  $(".tab").removeClass("active");
  // Add active class to the clicked tab
  $(this).addClass("active");
});

// Tabs End

// Modal Popup Start
$("#modalOpen").click(function () {
  $("#modal").show();
  $("body").addClass("overflow-y-hidden");
});
$(".close-btn").click(function () {
  $("#modal").hide();
  $("body").removeClass("overflow-y-hidden");
});
// Modal Popup End

// Load More Start
$(".load-btn").click(function () {
  $(".hidden-text").toggle();
  var buttonText = $(".hidden-text").is(":visible") ? "Load Less" : "Load More";
  $(this).text(buttonText);
});

//   Load More End
