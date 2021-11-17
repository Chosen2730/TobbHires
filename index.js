$(".select-cars").hide();
$(".sign-in-cont").hide();

$(".nav").hide();
$("#clickme").click(function(){
    $(".select-cars").show();
})
$(".button2").click(function(){
    $(".select-cars").show();
    $('.schedule1').hide();
    $(".button2").css("background-color", "#113CFC");
    $(".button2").css("color", "#fff");
    $(".button1").css("background-color", "#EEEBDD");
    $(".button1").css("color", "#113CFC")
})
$(".button1").click(function(){
    $(".select-cars").hide();
    $('.schedule1').show();
    $(".button1").css("background-color", "#113CFC");
    $(".button1").css("color", "#fff");
    $(".button2").css("background-color", "#EEEBDD");
    $(".button2").css("color", "#113CFC")
});
$(".navbar").click(function () {
    $(".nav").slideToggle();
})
$(".nav-item").click(function(){
    $('.nav').slideUp();
})
$(".sign-click").click(function(){
    $('.log-in').hide();
    $(".user-img").hide();
    $('.sign-in-cont').show();
})
$(".login-click").click(function(){
    $('.log-in').show();
    $(".user-img").show();
    $('.sign-in-cont').hide();
})