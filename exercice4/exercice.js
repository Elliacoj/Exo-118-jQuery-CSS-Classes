$("p").click(function(event){
    // add code here
    if($(this).hasClass("important")) {
        $(this).removeClass("important");
    }

    else {
        $(this).addClass("important");
    }
});