      var modal = document.querySelector(".modal-write-us"); 
      var contactUs = document.querySelector(".contact-us-link");
      var form = modal.querySelector(".modal-form");
      var focus = modal.querySelector("[name=name]");
      var email = modal.querySelector("[name=email]");
      var close = modal.querySelector(".write-us-close");
      var map = document.querySelector(".modal-map");
      var mapMini = document.querySelector(".link-map"); 
      var mapClose = map.querySelector(".map-close");
      var search = document.getElementById("search-input");
      var hidden = document.querySelector(".btn-hidden");
      var catlink = document.querySelector(".cat-link");
      var submenu = document.querySelector(".submenu");
      
      mapMini.addEventListener("click", function (evt) {
	      evt.preventDefault();
	      map.classList.add("modal-show");
      });
      mapClose.addEventListener("click", function(evt){
        evt.preventDefault();
        map.classList.remove("modal-show");
      });
      contactUs.addEventListener("click", function(evt){
        evt.preventDefault();
        modal.classList.add("modal-show");
        focus.focus();
      });
      close.addEventListener("click", function(evt){
        evt.preventDefault();
        modal.classList.remove("modal-show");
      });
      form.addEventListener("submit", function(evt){
        if(!focus.value || !email.value){
          evt.preventDefault();
        }
      });
      search.addEventListener("focus", function(evt){
        hidden.classList.remove("visually-hidden");
      });
      search.addEventListener("blur", function(evt){
        hidden.classList.add("visually-hidden");
      });

      catlink.addEventListener("click", function(evt){
        submenu.classList.toggle("visually-hidden");
      });
