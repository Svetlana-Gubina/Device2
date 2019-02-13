'use strict';
(function() {
  // Promo-slider
    var promoSlide1 = document.querySelector(".promo-slide-1");
    var promoSlide2 = document.querySelector(".promo-slide-2");
    var promoSlide3 = document.querySelector(".promo-slide-3");
    var toggle1 = document.getElementById('btn-1');
    var toggle2 = document.getElementById('btn-2');
    var toggle3 = document.getElementById('btn-3');

    toggle2.onchange = function () {
      promoSlide2.classList.remove('visually-hidden');
      promoSlide1.classList.add('visually-hidden');
      promoSlide3.classList.add('visually-hidden');
    };
    toggle3.onchange = function () {
      promoSlide3.classList.remove('visually-hidden');
      promoSlide1.classList.add('visually-hidden');
      promoSlide2.classList.add('visually-hidden');
    };
    toggle1.onchange = function () {
      promoSlide1.classList.remove('visually-hidden');
      promoSlide2.classList.add('visually-hidden');
      promoSlide3.classList.add('visually-hidden');
    };
    // Services-slider
    var deliveryLink = document.querySelector(".delivery-link");
    var varrantyLink = document.querySelector(".varranty-link");
    var creditLink = document.querySelector(".credit-link");
    var deliverySlide = document.querySelector(".services-slide-1");
    var varrantySlide = document.querySelector(".services-slide-2");
    var creditSlide = document.querySelector(".services-slide-3");
    var list = document.querySelector('.services-list');
   
    list.addEventListener("click", function(evt){
      evt.preventDefault();
      var target = evt.target;
      if (target === deliveryLink) {
        deliverySlide.classList.remove("visually-hidden");
        varrantySlide.classList.add("visually-hidden");
        creditSlide.classList.add("visually-hidden");
        
        list.children[0].classList.add('current-item');
        list.children[1].classList.remove('current-item');
        list.children[2].classList.remove('current-item');
      } else if (target === varrantyLink) {
        varrantySlide.classList.remove("visually-hidden");
        deliverySlide.classList.add("visually-hidden");
        creditSlide.classList.add("visually-hidden");

        list.children[1].classList.add('current-item');
        list.children[0].classList.remove('current-item');
        list.children[2].classList.remove('current-item');
      } else if (target === creditLink) {
        creditSlide.classList.remove("visually-hidden");
        varrantySlide.classList.add("visually-hidden");
        deliverySlide.classList.add("visually-hidden");

        list.children[2].classList.add('current-item');
        list.children[0].classList.remove('current-item');
        list.children[1].classList.remove('current-item');
      }
    });
})();




