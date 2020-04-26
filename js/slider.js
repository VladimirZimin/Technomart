var backButton = document.querySelector (".slider-control-back");
var nextButton = document.querySelector (".slider-control-next");
var firstSlide = document.querySelector (".slide-on");
var secondSlide = document.querySelector (".slide-off");

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