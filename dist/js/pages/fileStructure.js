$(function () {
    var speed = 300;
    items = $(".file-list li");
    "use strict";
    // Simple but strong js.// By Design 
    // You can use other js function as you want
    // Basic
    $("li").click(function () {
        $(this).children('ul').slideToggle(speed, function () {
            $(this).parent("li").toggleClass("open")
        });
    });
    // For Disable li items otherwise it will auto close 
    items.click(function (event) {
        event.stopPropagation();
    });
    // Basic
    //
});
