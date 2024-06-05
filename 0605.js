$(document).ready(function () {
  $(".nav > ul >li ").on("mouseover", function () {
    $(".nav> ul >li > ul>li").css({ display: "block" });
  });
  $(".nav > ul >li ").on("mouseout", function () {
    $(".nav> ul >li > ul>li").css({ display: "none" });
  });
  setInterval(function () {
    $(".slide").animate({ "margin-left": "-100%" }, function () {
      $(".slimg").first().appendTo(".slide");
      $(".slide").css({ "margin-left": "0%" });
    });
  }, 5000);
  $("tr").on("click", function () {
    $("#pop").fadeIn();
  });
  $(".out").on("click", function () {
    $("#pop").fadeOut();
  });
});
