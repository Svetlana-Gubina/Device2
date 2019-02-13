'use strict';
(function () {
    // Каталог товаров
    var catlink = document.querySelector(".cat-link");
    var submenu = document.querySelector(".submenu");
   
    catlink.onclick = function (evt) {
      evt.preventDefault();
      submenu.classList.toggle("visually-hidden");
    };
    // Поиск
	  var search = document.getElementById("search-input");
	  var hidden = document.querySelector(".btn-hidden");
  
	  search.addEventListener("focus", function (evt) {
	  	hidden.classList.remove("visually-hidden");
	  });
	  search.addEventListener("blur", function (evt) {
	  	hidden.classList.add("visually-hidden");
	  });
})();

