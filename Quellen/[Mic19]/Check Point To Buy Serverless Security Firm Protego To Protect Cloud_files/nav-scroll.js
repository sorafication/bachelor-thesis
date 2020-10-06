// force to display logo and slogan on all pages that are not the homepage
$( window ).on( "load", function() {
	if ( window.location.pathname != '/' ){
		var element2 = document.getElementById("top-menu-logo");
		element2.className = "flex";
	}
});

// This is called when the window is scrolled.
// Changes the size of the top bar when scrolling down 
// Only in the homepage
window.onscroll = function (e) {
  var element1 = document.getElementById("sections-menu-wide");
  var element2 = document.getElementById("top-menu-logo");
  // if(element1 == null || element2 == null) return;
  if(element2 == null) return;
  if ( window.location.pathname == '/' ){
	// Index (home) page show logo and slogan when scrolling
	if (document.body.scrollTop > 10 ||  document.documentElement.scrollTop > 10) {
		// Hide 1 and show 2
		//element1.className="hide";
		element2.className="show";
	} else {
		// Hide 2 and show 1
		//element1.className="show";
		element2.className="hide";
	}
  }
}

// Toggle .show class on a given element 
// Used to show/hide dropdown menus
function jlftDropdownBtn(id) {
    document.getElementById(id).classList.toggle("showdrop");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showdrop')) {
        openDropdown.classList.remove('showdrop');
      }
    }
  }
}

$(document).ready(function() {
function setHeight() {
	windowHeight = $(window).innerHeight();
		$('.leftbar').css('min-height', windowHeight);
	};
	setHeight();
  
	$(window).resize(function() {
		setHeight();
	});
});


// Adds/removes .responsive class to crnTopnav element  
// Not used at the moment
function jlftToggleClassResponsive() {
    var x = document.getElementById("crnTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
