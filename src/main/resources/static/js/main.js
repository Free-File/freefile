
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



$("header .nav a[href!=#]").each(function(){
    $($(this).attr("href"))                             // Fixes issue where navigating to page
        .css("padding-top", "40px")                     // section would hide top part
        .prev()                                         // of section behind navbar.
        .css("margin-bottom", "-40px");
});
