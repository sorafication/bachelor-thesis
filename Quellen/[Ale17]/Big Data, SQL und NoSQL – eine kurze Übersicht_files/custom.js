var contentadmove;

var topbody;

var headerheight;

var savefix = true;
var savefixmain = true;
var savesearchfilter = true;
var savecompanynav = true;
var scrollnotnull_navi = true;
var scrollnotnull_fixmain = true;
var scrollnotnull_searchfilter = true;
var scrollnotnull_companynav = true;
var no_fixnav = true;
var no_fixsearchfilter = true;
var no_fixcompanynav = true;

var save_pos_navi;
var save_pos_fixmain;
var save_pos_searchfilter;
var save_pos_companynav;
var position_navigation;
var position_fixmain;
var position_searchfilter;
var position_companynav;

var scrollpos_navigation = $(".inf-website").height();
var scrollpos_fixmain = $(".inf-website").height();
var scrollpos_searchfilter = $(".inf-website").height();
var scrollpos_companynav = $(".inf-website").height();


$(document).ready(function ()
{


	$(".inf-mainnav").delay(1).css("opacity", 1);


	headerheight = $('.inf-mainheader').height();


	/* Bildergalerie - Springt an richtige Stelle, wenn neues Bild geladen */
	var galleryurl = window.location.href;

	if(galleryurl.search ("#gallerydetail") >= 0) {

		var gallerytop = document.querySelector("#inf-gallery-detail").getBoundingClientRect().top;
		gallerytop = gallerytop - 45;

		// Animate the scroll bar action so its smooth instead of a hard jump
		$('html, body').stop().animate({
			'scrollTop' : gallerytop
		}, 0, 'swing');
	}


	/* Zeitverzögerung bei Flyout im Menu */
	$('.inf-mainnav__item').hoverIntent({
		sensitivity: 150, // number = sensitivity threshold (must be 1 or higher)
		interval: 150,  // number = milliseconds for onMouseOver polling interval
		timeout: 300,   // number = milliseconds delay before onMouseOut
		over: function ()
		{
			$(this).find('.inf-subnav-flyout')
			       .fadeIn(200).css("display", "flex");
		},
		out: function ()
		{
			$(this).find('.inf-subnav-flyout')
			       .fadeOut(200);
		}
	});


	// Bei Klick auf Body/ESC close Suchfeld od. Accountinfo
	$('body').click(function (e)
	{
		var target = $(e.target);
		if (!target.closest('#inf-searchinput, .inf-search-header').length)
		{
			$('.inf-search-header').removeClass('inf-search-header--open');
		}


	});
	$(document).on('keyup', function (evt)
	{
		if (evt.keyCode == 27)
		{
			$('.inf-search-header').removeClass('inf-search-header--open');
		}
	});

	var count = 0;
	var menuout = false;

	function hamburgerclick ()
	{
		$('.inf-mobile-menu').toggleClass("inf-mobile-menu--open");
		$('.inf-mainheader__menu-icon').toggleClass("inf-icon--close");
		$('.inf-search-header').removeClass('inf-search-header--open');

		count++;
		var isEven = function(someNumber) {
			return (someNumber % 2 === 0) ? true : false;
		};
		if (isEven(count) === false) {

			topbody = window.pageYOffset;

			document.body.style.overflow = "hidden";
			document.body.style.position = "fixed";
			document.body.style.height = "100vh";
			document.body.style.top = "-" + topbody + "px";
			document.body.style.width = "100%";

			menuout = true;

		} else if (isEven(count) === true) {

			document.body.style.overflow = "auto";
			document.body.style.height = "auto";
			document.body.style.position = "static";
			document.body.style.top = "0";
			document.body.style.width = "100%";

			window.scrollTo( 0, topbody );

			menuout = false;
		}

	};


	function searchclick ()
	{

		if(menuout){
			hamburgerclick();
		}

		$('.inf-search-header').toggleClass("inf-search-header--open");
		$('.inf-search-header__input-text').focus();


	};


	// Klick auf Hamburger-Menu
	$(document).on("click", ".inf-mainheader__menu-icon", hamburgerclick);

	// Klick auf Lupe
	$(document).on("click", "#inf-searchinput", searchclick);




	// Klick auf Menupunkt mit Pfeil
	$(".inf-mobile-menu__item--arrow").click(function ()
	{
		$(this).toggleClass("inf-mobile-menu__item--open");
	});

	// Klick auf Usermneu MyAccount
	$(".inf-usermenu__button-account").click(function ()
	{
		$('.inf-mobile-submenu--usermenu').toggleClass('inf-mobile-submenu--usermenu-open');
		$('.inf-mobile-submenu--searchmenu').removeClass('inf-mobile-submenu--searchmenu-open');
		$(this).toggleClass("inf-usermenu__button-account-open");
		$('.inf-usermenu__button-search').removeClass('inf-usermenu__button-search-open');
	});

	// Klick auf Mehr bei Firmen
	$(".inf-companies-rel__link").click(function ()
	{
		$('.inf-companies-rel-flyout').toggleClass('inf-companies-rel-flyout-open');
		$('.inf-companies-rel__content').toggleClass('inf-companies-rel__content--open');
	});

	// Klick auf Usermenu Suche
	$(".inf-usermenu__button-search").click(function ()
	{
		$('.inf-mobile-submenu--searchmenu').toggleClass('inf-mobile-submenu--searchmenu-open');
		$('.inf-mobile-submenu--usermenu').removeClass('inf-mobile-submenu--usermenu-open');
		$(this).toggleClass("inf-usermenu__button-search-open");
		$('.inf-usermenu__button-account').removeClass('inf-usermenu__button-account-open');

	});

	// Click auf Auge
	$(".inf-icon--eye").click(function ()
	{

		// Icon tauschen
		$(this).toggleClass("inf-icon--eye").toggleClass("inf-icon--eye-disabled");

		// Input-Feld
		var OBJ_input = $(this).parent().find("input");
		OBJ_input.attr("type", (OBJ_input.attr("type") === "password") ? "text" : "password");

	});


	// Upload Formbuilder

	var inputs = document.querySelectorAll( '.inf-form__upload' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});
	});



	//Passwort Validation
	var password = "";
	let hasEightChars = false;
	let hasLowerCase = false;
	let hasUpperCase = false;
	let hasNumber = false;
	let hasSpecialChar = false;

	$("#password").keyup(function ()
	{
		password = $(this).val();

		$(".inf-password-requirements").css('display', 'flex');

			hasEightChars = password.length >= 8;
			hasLowerCase = password.match(/[a-z]/);
			hasUpperCase = password.match(/[A-Z]/);
			hasNumber = password.match(/\d/);
			hasSpecialChar = password.match(/[!?$%^&*(){}[\]<>\/|\-=+~_.,;:]|[0-9]/);

			//validate the length
			if ( hasEightChars ) {
				$('.inf-passwordhint-icon--8-chars').removeClass('inf-icon--circle').removeClass('inf-icon--close-circled').addClass('inf-icon--checkmark-circled');
				$('#password').removeClass('inf-form__input-text--error');
			} else {
				$('.inf-passwordhint-icon--8-chars').removeClass('inf-icon--checkmark-circled').removeClass('inf-icon--close-circled').addClass('inf-icon--circle');
			}

			//validate lower case
			if ( hasLowerCase ) {
				$('.inf-passwordhint-icon--lower-case').addClass('inf-icon--checkmark-circled').removeClass('inf-icon--circle').removeClass('inf-icon--close-circled');
				$('#password').removeClass('inf-form__input-text--error');
			} else {
				$('.inf-passwordhint-icon--lower-case').addClass('inf-icon--circle').removeClass('inf-icon--checkmark-circled').removeClass('inf-icon--close-circled');
			}

			//validate upper case
			if ( hasUpperCase ) {
				$('.inf-passwordhint-icon--upper-case').addClass('inf-icon--checkmark-circled').removeClass('inf-icon--circle').removeClass('inf-icon--close-circled');
				$('#password').removeClass('inf-form__input-text--error');
			} else {
				$('.inf-passwordhint-icon--upper-case').addClass('inf-icon--circle').removeClass('inf-icon--checkmark-circled').removeClass('inf-icon--close-circled');
			}

			//validate number or special char
			if ( hasNumber || hasSpecialChar ) {
				$('.inf-passwordhint-icon--special-char').addClass('inf-icon--checkmark-circled').removeClass('inf-icon--circle').removeClass('inf-icon--close-circled');
				$('#password').removeClass('inf-form__input-text--error');
			} else {
				$('.inf-passwordhint-icon--special-char').addClass('inf-icon--circle').removeClass('inf-icon--checkmark-circled').removeClass('inf-icon--close-circled');
			}
	});

	$("#password").blur(function ()
	{
		if( $(this).val() ) {                      //if it is blank.

			if ( !hasEightChars ) {
				$('.inf-passwordhint-icon--8-chars').addClass('inf-icon--close-circled').removeClass('inf-icon--checkmark-circled').removeClass('inf-icon--circle');
				$('#password').addClass('inf-form__input-text--error');
			}
			if ( !hasLowerCase ) {
				$('.inf-passwordhint-icon--lower-case').addClass('inf-icon--close-circled').removeClass('inf-icon--checkmark-circled').removeClass('inf-icon--circle');
				$('#password').addClass('inf-form__input-text--error');
			}
			if ( !hasUpperCase ) {
				$('.inf-passwordhint-icon--upper-case').addClass('inf-icon--close-circled').removeClass('inf-icon--checkmark-circled').removeClass('inf-icon--circle');
				$('#password').addClass('inf-form__input-text--error');
			}
			if ( !(hasNumber || hasSpecialChar) ) {
				$('.inf-passwordhint-icon--special-char').addClass('inf-icon--close-circled').removeClass('inf-icon--checkmark-circled').removeClass('inf-icon--circle');
				$('#password').addClass('inf-form__input-text--error');
			}
		}
	});
});



//Company mobile Menu ausblenden auf Desktop und reverse

if ($(window).width() < 654)
{
	$('.inf-company-wrapper-nav').remove();
}
if ($(window).width() > 654)
{
	$('.inf-company-wrapper-nav--mobile').remove();
}

if ($(window).width() > 654 && $(window).width() < 900)
{

	window.onscroll = function ()
	{

		// JavaScrip Fixed Companynav
		if ($(".inf-company-nav").length)
		{
			position_companynav = document.querySelector(".inf-company-nav").getBoundingClientRect().top;

			if (savecompanynav)
			{
				save_pos_companynav = position_companynav;
				savecompanynav = false;
			}

			if (save_pos_companynav > 0)
			{
				if ((position_companynav <= ($('.inf-mainheader').height() + 45)) && !(no_fixnav) && no_fixsearchfilter)
				{
					scrollpos_companynav = window.pageYOffset;
					$('.inf-company-nav').addClass('inf-company-nav--fixed');
					no_fixsearchfilter = false;

				}
				else if (window.pageYOffset < scrollpos_companynav)
				{
					$('.inf-company-nav').removeClass('inf-company-nav--fixed');
					no_fixsearchfilter = true;
				}
			}
			else
			{
				if (scrollnotnull_companynav)
				{
					scrollpos_companynav = window.pageYOffset+ save_pos_companynav;
					scrollnotnull_companynav = false;
				}

				if (window.pageYOffset >= scrollpos_companynav - 45)
				{
					$('.inf-company-nav').addClass('inf-company-nav--fixed');
				}
				else
				{
					$('.inf-company-nav').removeClass('inf-company-nav--fixed');
				}
			}
		}

		// JavaScrip Fixed Searchfilter


		if ($('.inf-search-filter-wrapper').length)
		{
			position_searchfilter = document.querySelector(".inf-search-filter-wrapper").getBoundingClientRect().top;


			if (savesearchfilter)
			{
				save_pos_searchfilter = position_searchfilter;
				savesearchfilter = false;
			}

			if (save_pos_searchfilter > 0)
			{

				if ((position_searchfilter <= ($('.inf-mainheader').height())) && !(no_fixnav) && no_fixsearchfilter)
				{
					scrollpos_searchfilter = window.pageYOffset;
					$('.inf-search-filter-wrapper').addClass('inf-search-filter-wrapper--fixed');
					no_fixsearchfilter = false;
				}
				else if (window.pageYOffset < scrollpos_searchfilter)
				{
					$('.inf-search-filter-wrapper').removeClass('inf-search-filter-wrapper--fixed');
					no_fixsearchfilter = true;
				}
			}
			else
			{
				if (scrollnotnull_searchfilter)
				{
					scrollpos_searchfilter = window.pageYOffset + save_pos_searchfilter;
					scrollnotnull_searchfilter = false;
				}

				if (window.pageYOffset >= scrollpos_searchfilter)
				{
					$('.inf-search-filter-wrapper').addClass('inf-search-filter-wrapper--fixed');
				}
				else
				{
					$('.inf-search-filter-wrapper').removeClass('inf-search-filter-wrapper--fixed');
				}
			}
		}


	}
}


// Tablet
if ($(window).width() > 900)
{

	window.onscroll = function ()
	{

		// Javascript Fixedheader
		if (window.XMLHttpRequest)
		{

			if ($('.inf-mainnav').length)
			{
				position_navigation = document.querySelector("ul.inf-mainnav").getBoundingClientRect().top;

				if (savefix)
				{
					save_pos_navi = position_navigation;
					savefix = false;
				}


				if (save_pos_navi > 0)
				{
					if (position_navigation <= 0 && no_fixnav)
					{
						$('.inf-wrapper').addClass('inf-fixheader');
						document.getElementById("mainwrapper").style.marginTop = headerheight + 'px';
						scrollpos_navigation = window.pageYOffset;
						if ($('.fixed').length){
							$('.fixed').css('margin-top', '40px');
						}
						no_fixnav = false;
					}

					else if ((window.pageYOffset < scrollpos_navigation))
					{
						$('.inf-wrapper').removeClass('inf-fixheader');
						document.getElementById("mainwrapper").style.marginTop = '0px';
						scrollpos_navigation = $(".inf-website").height();
						if ($('.fixed').length){
							$('.fixed').css('margin-top', '0px');
						}
						no_fixnav = true;
					}
				}
				else
				{

					if (scrollnotnull_navi)
					{
						scrollpos_navigation = window.pageYOffset + save_pos_navi;
						scrollnotnull_navi = false;
					}
					if (window.pageYOffset >= scrollpos_navigation)
					{
						$('.inf-wrapper').addClass('inf-fixheader');
						document.getElementById("mainwrapper").style.marginTop = headerheight + 'px';
						if ($('.fixed').length){
							$('.fixed').css('margin-top', '40px');
						}
						no_fixnav = false;
					}
					else
					{
						$('.inf-wrapper').removeClass('inf-fixheader');
						document.getElementById("mainwrapper").style.marginTop = '0px';
						if ($('.fixed').length){
							$('.fixed').css('margin-top', '0px');
						}
						no_fixnav = true;
					}
				}
			}


			// Javascript Fixed Companies + SocialMedia

			if ($('.inf-detail-main').length)
			{

				position_fixmain = document.querySelector(".inf-detail-main").getBoundingClientRect().top;


				if (savefixmain)
				{
					save_pos_fixmain = position_fixmain;
					savefixmain = false;
				}



				if (save_pos_fixmain > 0)
				{
					if ((position_fixmain <= ($('.inf-mainheader').height() + 45)) && !no_fixnav)
					{
						scrollpos_fixmain = window.pageYOffset;
						$('.inf-detail-main').addClass('inf-fixmain');
					}
					else if (window.pageYOffset < scrollpos_fixmain)
					{
						$('.inf-detail-main').removeClass('inf-fixmain');
					}
				}
				else
				{
					if (scrollnotnull_fixmain)
					{
						scrollpos_fixmain = window.pageYOffset + save_pos_fixmain;
						scrollnotnull_fixmain = false;
					}

					if (window.pageYOffset >= scrollpos_fixmain)
					{
						$('.inf-detail-main').addClass('inf-fixmain');
					}
					else
					{
						$('.inf-detail-main').removeClass('inf-fixmain');
					}

				}
			}


			// Javascript Fixed Searchfilter

			if ($('.inf-search-filter-wrapper').length)
			{
				position_searchfilter = document.querySelector(".inf-search-filter-wrapper").getBoundingClientRect().top;



				if (savesearchfilter)
				{
					save_pos_searchfilter = position_searchfilter;
					savesearchfilter = false;

				}



				if (save_pos_searchfilter > 0)
				{



					if ((position_searchfilter <= ($('.inf-mainheader').height())) && !(no_fixnav) && no_fixsearchfilter)
					{
						scrollpos_searchfilter = window.pageYOffset;
						$('.inf-search-filter-wrapper').addClass('inf-search-filter-wrapper--fixed');
						no_fixsearchfilter = false;


					}
					else if (window.pageYOffset < scrollpos_searchfilter)
					{
						$('.inf-search-filter-wrapper').removeClass('inf-search-filter-wrapper--fixed');
						no_fixsearchfilter = true;
					}
				}
				else
				{
					if (scrollnotnull_searchfilter)
					{
						scrollpos_searchfilter = window.pageYOffset + save_pos_searchfilter;
						scrollnotnull_searchfilter = false;
					}

					if (window.pageYOffset >= scrollpos_searchfilter)
					{
						$('.inf-search-filter-wrapper').addClass('inf-search-filter-wrapper--fixed');

					}
					else
					{
						$('.inf-search-filter-wrapper').removeClass('inf-search-filter-wrapper--fixed');
					}
				}
			}


			// Javascript Fixed Companynav

			if ($(".inf-company-nav").length)
			{
				position_companynav = document.querySelector(".inf-company-nav").getBoundingClientRect().top;

				if (savecompanynav)
				{
					save_pos_companynav = position_companynav;
					savecompanynav = false;
				}


				if (save_pos_companynav > 0)
				{
					if ((position_companynav <= ($('.inf-mainheader').height() + 45)) && !(no_fixnav) && no_fixcompanynav)
					{
						scrollpos_companynav = window.pageYOffset;
						$('.inf-company-nav').addClass('inf-company-nav--fixed');
						no_fixcompanynav = false;

					}
					else if (window.pageYOffset < scrollpos_companynav)
					{
						$('.inf-company-nav').removeClass('inf-company-nav--fixed');
						no_fixcompanynav = true;
					}
				}
				else
				{
					if (scrollnotnull_companynav)
					{
						scrollpos_companynav = window.pageYOffset + save_pos_companynav;
						scrollnotnull_companynav = false;
					}

					if (window.pageYOffset >= scrollpos_companynav - 45)
					{
						$('.inf-company-nav').addClass('inf-company-nav--fixed');
					}
					else
					{
						$('.inf-company-nav').removeClass('inf-company-nav--fixed');
					}
				}
			}
		}
	}
}


// Content Ad Korrektur für Smartphones
$(document).ready(function ()
{
	if ($(window).width() < 340)
	{
		if (window.XMLHttpRequest)
		{
			contentadmove = ((340 - $(window).width()) * (-0.5));
			$('.inf-section--content-ad').css('left', contentadmove);
			$('.inf-section--content-ad').css('position', 'relative');
		}
	}
});

// Footer im Artikel, wenn SM-Leiste da
if ($(window).width() < 900)
{
	$(document).ready(function ()
	{
		if (window.XMLHttpRequest)
		{
			if (($('.inf-toolbar').length))
			{
				$('.inf-footer').css('margin-bottom', '50px');
			}
		}
	});
}

// Fitvid for Embedded Vids in iFrame (youtube, vimeo)
$(document).ready(function ()
{
	// Target your .container, .wrapper, .post, etc.
	$(".inf-html-snip iframe, .inf-html-video iframe").each(function (index, element)
	{
		$(element).parent().fitVids();
	});

});


// Responsive iFrames

var ri = responsiveIframe();
ri.allowResponsiveEmbedding();

(function ($)
{
	$(function ()
	{
		$('#inf-jobware-iframe').responsiveIframe({xdomain: '*'});
	});
})(jQuery);
