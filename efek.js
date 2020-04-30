function animasiIntro() {
    $("#text span").velocity("transition.slideLeftIn", {
        stagger: 150,
        complete: function () {
            animasiButtonStart();
        }
    });
}

function animasiButtonStart() {
    $("#start").velocity("transition.bounceUpIn")
        .mouseenter(function () {
            $(this).velocity({ width: 100 });
        })
        .mouseleave(function () {
            $(this).velocity({ width: 125 });
        });
}

function animasiIntroOut() {
    $("#start").velocity("transition.whirlOut", {
        stagger: 150,
        complete: function () {
            $("#text").velocity({
                "font-size": "25px",
                "top": "95%"
            }, {
                duration: 1000,
                complete: function(){
                    callMenu();
                }
            });
        }
    });
}

function callMenu(){
    $("#menu ul li").velocity("transition.slideLeftIn",{
        stagger: 250
    });
    $("#menu ul li a").click(function(){
        $(this).parent("li").addClass("active").siblings().removeClass("active");
    });
}

$(document).ready(function(){
    animasiIntro();
});



