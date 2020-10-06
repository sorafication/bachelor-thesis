$(document).ready(function ()
{

	var OBJ_menue =
		{
			INT_offset: 0,
			getDocumentWidth: function ()
			{
				return $(".inf-wrapper").width();
			},
			getMenueWidth: function (STR_id)
			{
				var INT_width = 0;
				$(STR_id + ">li").not("li.inf-nav__item---more").each(function ()
				{
					INT_width += $(this).width();
				});
				return INT_width;
			},
			customizeMenue: function (STR_id)
			{

				// Menue holen
				var OBJ_navi = $(STR_id);

				// "more" holen
				var OBJ_more = $(STR_id + " .inf-nav__item--more");

				// Alles zuruecksetzen
				$("*[data-id='mainnav-more']>li").remove();
				OBJ_more.hide();
				$(STR_id + "__item--hidden").show().removeClass(OBJ_navi.attr("class") + "__item--hidden");

				// Breiten auslesen
				var INT_document_width = OBJ_menue.getDocumentWidth() - 175;
				var INT_menue_width = OBJ_menue.getMenueWidth(STR_id);

				// Platz reicht nicht aus
				if (INT_menue_width > INT_document_width)
				{

					// "more" Breite speichern
					OBJ_more.show();
					var INT_width = OBJ_more.width();

					// li durchlaufen
					$(STR_id + ">li").not(STR_id + ">li.inf-nav__item--more").each(function ()
					{

						// Element auslesen
						var OBJ_child = $(this);

						// Breite li addieren
						INT_width += OBJ_child.width();

						// Platz reicht fuer dieses Element nicht mehr aus
						if (INT_width > INT_document_width)
						{

							// Original ausblenden
							OBJ_child.addClass(OBJ_navi.attr("class") + "__item--hidden").hide();

							// Elemente erstellen
							var OBJ_a = OBJ_child.find("a:first").clone();
							OBJ_a.removeClass().attr("id", "").addClass("inf-subnav__link");
							var OBJ_li = $(document.createElement("li")).addClass("inf-subnav__item").data("id", OBJ_child.attr("id")).append(OBJ_a);

							// Aktiv?
							if (OBJ_child.hasClass(OBJ_navi.attr("class") + "__item--active"))
							{
								// Aktiv-Klasse setzen
								OBJ_li.addClass("inf-subnav__item--active");
								$(STR_id + ">li.inf-nav__item--more").addClass("inf-mainnav__item--active");
							} // end if

							// Elemente in "more" verschieben
							OBJ_li.appendTo(STR_id + ">li.inf-nav__item--more ul:first");

							// Untermenue suchen
							var OBJ_child_ul = OBJ_child.find("ul:first");

							// Untermenue vorhanden
							if (OBJ_child_ul.length)
							{

								// LI suchen
								var OBJ_sub_lis = OBJ_child_ul.find(">li");

								// LI vorhanden
								if (OBJ_sub_lis.length > 0)
								{

									// Neues UL erstellen
									var OBJ_sub_ul = $(document.createElement("ul")).addClass("inf-subsubnav");

									// LI durchlaufen
									OBJ_sub_lis.each(function ()
									{

										// Elemente erstellen
										var OBJ_sub_a = $(this).find("a:first").clone();
										OBJ_sub_a.removeClass().attr("id", "").addClass("inf-subsubnav__link");
										var OBJ_sub_li = $(document.createElement("li")).addClass("inf-subsubnav__item").append(OBJ_sub_a);

										// Aktiv?
										if ($(this).hasClass("inf-subnav__item--active"))
										{
											// Aktiv-Klasse setzen
											OBJ_sub_li.addClass("inf-subsubnav__item--active");
										} // end if

										// LI dem UL hinzufuegen
										OBJ_sub_li.appendTo(OBJ_sub_ul);

									});

									// Zusaetlichen Link hinzufuegen
									$(document.createElement("a")).addClass("inf-icon--subnav-item inf-toggle inf-icon--arrow-dropdown").appendTo(OBJ_li);

									// UL einhaengen
									OBJ_sub_ul.appendTo(OBJ_li);

								} // end if

							} // end if

						} // end if

					});

				} // end if

			}
		};

	OBJ_menue.customizeMenue(".inf-mainnav");
	enableFlap();
	enableMobileFlap();
	$(window).resize(function ()
	{
		OBJ_menue.customizeMenue(".inf-mainnav");
		enableFlap();
	});


	// Sub-Nav-Klick aktivieren
	function enableFlap()
	{

		// Click auf Sub-Nav
		$(".inf-subnav__item a.inf-icon--subnav-item").click(function (event)
		{
			event.preventDefault();
			$(this).toggleClass("inf-icon--subnav-item-rotate").parent().find("ul.inf-subsubnav:first").slideToggle();
		});

	} // end function

	// Sub-Nav-Klick aktivieren
	function enableMobileFlap()
	{

		// Click auf Sub-Nav
		$(".inf-mobile-menu__item a.inf-icon--subnav-item").click(function (event)
		{
			event.preventDefault();
			$(this).toggleClass("inf-icon--subnav-item-rotate").parent().find("ul.inf-mobile-subnav:first").slideToggle();
		});

	} // end function

});