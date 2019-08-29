/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("mainDropdown").style.display = "block";
    document.getElementById("firstDropdown").classList.toggle("show");
    document.getElementById("epmenu").classList.toggle("show");
    document.getElementById("expertmenu").classList.toggle("show");
    document.getElementById("humres").classList.toggle("show");
    document.getElementById("reales").classList.toggle("show");
    // document.getElementsByClassName("showing").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content a')) {
      var dropdowns = document.getElementsByClassName("menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
          openDropdown.classList.remove('show');
      }
      console.log(dropdowns);
    }
  }

function menuAnimation(showElement, hideElement) {
  $(showElement).css('width', 'unset');
  $(showElement).css('right', 'unset');
  $(showElement).css('left', 'unset');
	$(showElement).css({visibility: "visible"}).animate({
		right: '100%',
		width: '50%'
	}, 150);

    //  $(hideElement).delay(150).hide();
    $(hideElement).css('width', 'unset');
    $(hideElement).css('right', 'unset');
    $(hideElement).css('left', 'unset');
    $(hideElement).animate({
		right: '100%',
		width: '100%'
	}, 150).css({visibility: "hidden"}, 150);
}

function backAnimation(showElement, hideElement) {
  showElement.style.transform = "translateX(-130%)";
	$(showElement).css({visibility: "visible"}).animate({
		left: '100%',
		width: '50%'
	}, 150);


    $(hideElement).animate({
		left: '100%',
		width: '50%'
	}, 150).css({visibility: "hidden"}, 150);
}