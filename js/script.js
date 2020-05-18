var contactUs = document.querySelector(".js-button");
var popupWriteUs = document.querySelector(".modal-write-us");
var close = popupWriteUs.querySelector(".modal-close");

var form = popupWriteUs.querySelector(".feedback-form");
var yourName = popupWriteUs.querySelector("[name=name]");
var yourEmail = popupWriteUs.querySelector("[name=email]");
var yourText = popupWriteUs.querySelector("[name=letter-text]");

var mapButton = document.querySelector(".map-button");
var mapPopup = document.querySelector(".modal-map");
var closeMap = mapPopup.querySelector(".modal-close");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

// Модальное окно НАПИШИТЕ НАМ

contactUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal-show");

  if (storage) {
    yourName.value = storage;
    yourEmail.focus();
  } else {
    yourName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal-show");
  popupWriteUs.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!yourName.value || !yourEmail.value || !yourText.value) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal-error");
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add("modal-error");
  } else {
      if (isStorageSupport) {
        localStorage.setItem("name", yourName.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupWriteUs.classList.contains("modal-show")) {
      popupWriteUs.classList.remove("modal-show");
      popupWriteUs.classList.remove("modal-error");
    }
  }
});

// Модальное окно КАРТА

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show")
    }
  }
});