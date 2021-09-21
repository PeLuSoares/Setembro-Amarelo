$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});

$(document).ready(function(){
    $("#ajuda-mostrar").click(function(){
        $("#ajuda-container").show();
        $("#main-frase").hide();
    })
    $("#fechar").click(function(){
        $("#ajuda-container").hide();
        $("#main-frase").show();
    })
// BUNDA
})