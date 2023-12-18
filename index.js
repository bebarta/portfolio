function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var revealsLength = reveals.length;
    for (var i = 0; i < revealsLength; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

$(document).ready(function() {    
    $("#navbarNav").find("ul").find("li").find("a").on( "click", function() {
        removeActiveClass();
        $(this).addClass("active")
      });

    function removeActiveClass(){
        $("#navbarNav").find("ul").find("li").find("a").each(function( index ) {        
            $(this).removeClass("active")
        });
    }
});