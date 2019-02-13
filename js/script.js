'use strict';
(function () {
	var overlay = document.querySelector(".modal-overlay");
	// Открытие и закрытие модального окна
	var modalClose = function (modal) {
		modal.classList.remove("modal-show");
		overlay.classList.remove("modal-show");
	};

	var modalOpen = function (modal) {
		modal.classList.add("modal-show");
		overlay.classList.add("modal-show");
	};

	// Карта
	var map = document.querySelector(".modal-map");
	var mapMini = document.querySelector(".link-map");
	var mapClose = map.querySelector(".map-close");

	var onMapEscPress = function (evt) {
		if (evt.keyCode === 27) {
			modalClose(map);
		}
	};
	mapMini.addEventListener("click", function (evt) {
		evt.preventDefault();
		modalOpen(map);
		document.addEventListener('keydown', onMapEscPress);
	});
	mapClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		modalClose(map);
		document.removeEventListener('keydown', onMapEscPress);
	});

	// Форма
	var modal = document.querySelector(".modal-write-us");
	var contactUs = document.querySelector(".contact-us-link");
	var form = modal.querySelector(".modal-form");
	var focus = modal.querySelector("[name=name]");
	var email = modal.querySelector("[name=email]");
	var close = modal.querySelector(".write-us-close");

	var onPopupEscPress = function (evt) {
		if (evt.keyCode === 27) {
			modalClose(modal);
		}
	};

	contactUs.addEventListener("click", function (evt) {
		evt.preventDefault();
		modalOpen(modal);
		focus.focus();
		document.addEventListener('keydown', onPopupEscPress);
	});
	close.addEventListener("click", function (evt) {
		evt.preventDefault();
		modalClose(modal);
		document.removeEventListener('keydown', onPopupEscPress);
	});

	form.addEventListener("submit", function (evt) {
		if (!focus.value || !email.value) {
			evt.preventDefault();
		}
	});
})();
