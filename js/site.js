$("main").css("min-height", "calc(100% - " + ($("header").height() + $("footer").height()) + "px)");

$(document).ready(function () {
    $(window).on("resize", function () {
        $("main").css("min-height", "calc(100% - " + ($("header").height() + $("footer").height()) + "px)");
    });
});