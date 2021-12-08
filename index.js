$(".select-cars").hide();
$(".sign-in-cont").hide();

$(".nav").hide();
$("#clickme").click(function () {
    $(".select-cars").show();
})
$(".button2").click(function () {
    $(".select-cars").show();
    $('.schedule1').hide();
    $('#orderType').val('rentalCar');
    $(".button2").css("background-color", "#113CFC");
    $(".button2").css("color", "#fff");
    $(".button1").css("background-color", "#EEEBDD");
    $(".button1").css("color", "#113CFC")
})
$(".button1").click(function () {
    $(".select-cars").hide();
    $('.schedule1').show();
    $('#orderType').val('interState');
    $(".button1").css("background-color", "#113CFC");
    $(".button1").css("color", "#fff");
    $(".button2").css("background-color", "#EEEBDD");
    $(".button2").css("color", "#113CFC")
});
$(".navbar").click(function () {
    $(".nav").slideToggle();
})
$(".nav-item").click(function () {
    $('.nav').slideUp();
})
$(".sign-click").click(function () {
    $('.log-in').hide();
    $(".user-img").hide();
    $('.sign-in-cont').show();
})
$(".login-click").click(function () {
    $('.log-in').show();
    $(".user-img").show();
    $('.sign-in-cont').hide();
})

$('#orderForm').submit(function (e) {
    e.preventDefault();
    const loading = document.querySelector('.loading');
    loading.style.display = 'block'
    $form = $(this)
    var formData = new FormData(this);
    $.ajax({
        //  url: `http://127.0.0.1:8000/api`,
        url: `https://tobhire.herokuapp.com/api`,
        type: 'POST',
        data: formData,
        success: function (res) {
            console.log(res)
            alert('Your order has been shechuled successfully')
            loading.style.display = 'none'
            location.reload();
        },
        cache: false,
        contentType: false,
        processData: false
    });
});