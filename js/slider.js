var backButton = document.querySelector (".slider-control-back");
var nextButton = document.querySelector (".slider-control-next");
var firstSlide = document.querySelector (".slide-on");
var secondSlide = document.querySelector (".slide-off");

var deliveryButton  = document.querySelector (".delivery-button");
var guaranteeButton = document.querySelector (".guarantee-button");
var creditButton =  document.querySelector (".credit-button");
var serviceDelivery = document.querySelector (".service-delivery");
var serviceGuarantee = document.querySelector (".service-guarantee");
var serviceCredit = document.querySelector (".service-credit");


// main slider

nextButton.addEventListener ("click", function (evt) {
    evt.preventDefault ();
    firstSlide.classList.add ("slide-off");
    firstSlide.classList.remove ("slide-on");
    secondSlide.classList.add ("slide-on");
    secondSlide.classList.remove ("slide-off");
});

backButton.addEventListener ("click", function (evt) {
    evt.preventDefault ();
    secondSlide.classList.add ("slide-off");
    secondSlide.classList.remove ("slide-on");
    firstSlide.classList.add ("slide-on");
    firstSlide.classList.remove ("slide-off");
});



// service slider

deliveryButton.addEventListener ("click", function (evt) {
    evt.preventDefault ();
    deliveryButton.classList.add ("active-button");
    guaranteeButton.classList.remove ("active-button");
    creditButton.classList.remove ("active-button");

    serviceDelivery.classList.add ("service-slide-on");
    serviceDelivery.classList.remove ("service-slide-off");
    serviceGuarantee.classList.add ("service-slide-off");
    serviceCredit.classList.add ("service-slide-off");
})

guaranteeButton.addEventListener ("click", function (evt) {
    evt.preventDefault ();
    deliveryButton.classList.remove ("active-button");
    guaranteeButton.classList.add ("active-button");
    creditButton.classList.remove ("active-button");

    serviceGuarantee.classList.add ("service-slide-on");
    serviceGuarantee.classList.remove ("service-slide-off");
    serviceDelivery.classList.add ("service-slide-off");
    serviceCredit.classList.add ("service-slide-off");
})

creditButton.addEventListener ("click", function (evt) {
    evt.preventDefault ();
    deliveryButton.classList.remove ("active-button");
    guaranteeButton.classList.remove ("active-button");
    creditButton.classList.add ("active-button");

    serviceCredit.classList.add ("service-slide-on");
    serviceCredit.classList.remove ("service-slide-off");
    serviceGuarantee.classList.add ("service-slide-off");
    serviceDelivery.classList.add ("service-slide-off");
})