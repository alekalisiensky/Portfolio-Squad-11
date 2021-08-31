$(document).on("click", 'a[href*="#"]', function(event) {
    
    event.preventDefault();
    var id = $(this).attr("href");
    targetOffset = $(id).offset().top;

    $('html,body').animate({ 
        scrollTop: targetOffset - 100}, 500
    );
});