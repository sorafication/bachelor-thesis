
/////////////////
//  UTILITIES  //
/////////////////

function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

function sortMenuArray(m) {
	m.sort(function(a, b){
	    var headA=a.headline.toLowerCase(), headB=b.headline.toLowerCase()
	    if (headA < headB) //sort string ascending
	        return -1;
	    if (headA > headB)
	        return 1;
	    return 0; //default return value (no sorting)
	})
	return(m);
}

//////////////////
//  NAV SEARCH  //
//////////////////

$( window ).on( "load", function() {
 
   $('#search-btn').click(searchFunction);
   $('#search-btn-2').click(searchFunction2);

});

function searchFunction() {
    var navSearch = $("#nav-search-form");
    if ($(navSearch).is(":hidden")) {
    	$(navSearch).show();
    } else {
    	$(navSearch).submit();
    }
}

function searchFunction2() {
    var navSearch = $("#nav-search-form-2");
    if ($(navSearch).is(":hidden")) {
    	$(navSearch).show();
    } else {
    	$(navSearch).submit();
    }
}

//////////////////
// SEARCH PAGE  //
//////////////////

// NOTE: The search page js included in searchResults.ftl.
// It is dependent on FreeMarker values so must be included in the ftl.


//////////////////////////
//SITE MENU TOP NAV  //
//////////////////////////

$( window ).on( "load", function() {

if($('#top-nav-homepage').length > 0){

   var TopNavbaseUrl = '';
   var navref = '';

   switch(location.hostname) {
   case "www.crn.com":         TopNavbaseUrl="https://www.crn.com";         break; 
   case "crn.com":             TopNavbaseUrl="https://www.crn.com";         break;
   case "custom.crn.com":      TopNavbaseUrl="https://www.crn.com";         break;
   case "closeup.crn.com":     TopNavbaseUrl="https://www.crn.com";         break;
   case "www.crnfrance.fr":    TopNavbaseUrl="https://www.crnfrance.fr";    break;
   case "www.crnitalia.it":    TopNavbaseUrl="https://www.crnitalia.it";    break;
   case "beta.crn.com":        TopNavbaseUrl="https://beta.crn.com";        break;
   case "beta-custom.crn.com": TopNavbaseUrl="https://beta.crn.com";        break;
   case "beta-closeup.crn.com":TopNavbaseUrl="https://beta.crn.com";        break;
   case "beta.crnfrance.fr":   TopNavbaseUrl="https://beta.crnfrance.fr";   break;
   case "beta.crnitalia.it":   TopNavbaseUrl="https://beta.crnitalia.it";   break;
   case "qa.crn.com":          TopNavbaseUrl="https://qa.crn.com";          break;
   case "custom-qa.crn.com":   TopNavbaseUrl="https://qa.crn.com";          break;
   case "closeup-qa.crn.com":  TopNavbaseUrl="https://qa.crn.com";          break;
   case "www.qa-crn.fr":       TopNavbaseUrl="https://www.qa-crn.fr:5703";   break;
   case "www.qa-crnitalia.it": TopNavbaseUrl="https://www.qa-crnitalia.it:5703"; break;
   case "www.dev-crn.com":     TopNavbaseUrl="http://www.dev-crn.com:5703"; break;
   case "custom.dev-crn.com":  TopNavbaseUrl="http://www.dev-crn.com:5703"; break;
   case "closeup.dev-crn.com": TopNavbaseUrl="http://www.dev-crn.com:5703"; break;
   case "www.dev-crn.fr":      TopNavbaseUrl="http://www.dev-crn.fr:5703";  break;
   case "www.dev-crnitalia.it":TopNavbaseUrl="http://www.dev-crnitalia.it:5703"; break;
   case "localhost":           TopNavbaseUrl="http://localhost:8480";       break;
   default:                    TopNavbaseUrl="/"; 
   }
   navref += '<@server_include uri="';
   navref += TopNavbaseUrl ;
   navref += '/custom-menu/" template="homepage-nav-menu" />';
   $('#top-nav-homepage').replaceWith(navref);

}});

//////////////////////////
//  SITE MENU HOMEPAGE  //
//////////////////////////

$( window ).on( "load", function() {

	if($('#site-menu-homepage').length > 0){

	        var HomebaseUrl = '';
	        var myref = '';

	        switch(location.hostname) {
	        case "www.crn.com":         HomebaseUrl="https://www.crn.com";         break;
	        case "crn.com":             HomebaseUrl="https://www.crn.com";         break;
	        case "custom.crn.com":      HomebaseUrl="https://www.crn.com";         break;
	        case "closeup.crn.com":     HomebaseUrl="https://www.crn.com";         break;
	        case "www.crnfrance.fr":    HomebaseUrl="https://www.crnfrance.fr";    break;
	        case "www.crnitalia.it":    HomebaseUrl="https://www.crnitalia.it";    break;
	        case "beta.crn.com":        HomebaseUrl="https://beta.crn.com";        break;
	        case "beta-custom.crn.com": HomebaseUrl="https://beta.crn.com";        break;
	        case "beta-closeup.crn.com":HomebaseUrl="https://beta.crn.com";        break;
	        case "beta.crnfrance.fr":   HomebaseUrl="https://beta.crnfrance.fr";   break;
	        case "beta.crnitalia.it":   HomebaseUrl="https://beta.crnitalia.it";   break;
	        case "qa.crn.com":          HomebaseUrl="https://qa.crn.com";          break;
	        case "custom-qa.crn.com":   HomebaseUrl="https://qa.crn.com";          break;
	        case "closeup-qa.crn.com":  HomebaseUrl="https://qa.crn.com";          break;
	        case "www.qa-crn.fr":       HomebaseUrl="https://www.qa-crn.fr:5703";   break;
	        case "www.qa-crnitalia.it": HomebaseUrl="https://www.qa-crnitalia.it:5703"; break;
	        case "www.dev-crn.com":     HomebaseUrl="http://www.dev-crn.com:5703"; break;
	        case "custom.dev-crn.com":  HomebaseUrl="http://www.dev-crn.com:5703"; break;
	        case "closeup.dev-crn.com": HomebaseUrl="http://www.dev-crn.com:5703"; break;
	        case "www.dev-crn.fr":      HomebaseUrl="http://www.dev-crn.fr:5703";  break;
	        case "www.dev-crnitalia.it":HomebaseUrl="http://www.dev-crnitalia.it:5703"; break;
	        case "localhost":           HomebaseUrl="http://localhost:8480";       break;
	        default:                    HomebaseUrl="/"; 
	        }
	        myref += '<a href="';
	        myref += HomebaseUrl ;
	        myref += '">Homepage</a>';
	        $('#site-menu-homepage').replaceWith(myref);
        
	}});
    
//////////////////////////
//  SITE MENU SECTIONS  //
//////////////////////////

$( window ).on( "load", function() {
	
        var baseUrl = '';
        var crnUrl =  '';
        switch(location.hostname) {
        case "www.crn.com":         baseUrl="https://www.crn.com";             crnUrl = "//www.crn.com";	break;
        case "crn.com":             baseUrl="https://www.crn.com";             crnUrl = "//www.crn.com";	break;
        case "custom.crn.com":      baseUrl="https://www.crn.com";             crnUrl = "//www.crn.com";	break;
        case "closeup.crn.com":     baseUrl="https://www.crn.com";             crnUrl = "//www.crn.com";	break;
        case "www.crnfrance.fr":    baseUrl="https://www.crnfrance.fr";        crnUrl = "//www.crnfrance.fr";	break;
        case "www.crnitalia.it":    baseUrl="https://www.crnitalia.it";        crnUrl = "//www.crnitalia.it";	break;
        case "beta.crn.com":        baseUrl="https://beta.crn.com";            crnUrl = "//beta.crn.com";	break;
        case "beta-custom.crn.com": baseUrl="https://beta.crn.com";            crnUrl = "//beta.crn.com";	break;
        case "beta-closeup.crn.com":baseUrl="https://beta.crn.com";            crnUrl = "//beta.crn.com";	break;
        case "beta.crnfrance.fr":   baseUrl="https://beta.crnfrance.fr";       crnUrl = "//beta.crn.com";	break;
        case "beta.crnitalia.it":   baseUrl="https://beta.crnitalia.it";       crnUrl = "//beta.crn.com";	break;
        case "qa.crn.com":          baseUrl="https://qa.crn.com";              crnUrl = "//qa.crn.com";	    break;
        case "custom-qa.crn.com":   baseUrl="https://qa.crn.com";              crnUrl = "//qa.crn.com";	    break;
        case "closeup-qa.crn.com":  baseUrl="https://qa.crn.com";              crnUrl = "//qa.crn.com";	    break;
        case "www.qa-crn.fr":       baseUrl="https://www.qa-crn.fr:5703";       crnUrl = "//www.qa-crn.fr:5703";	    break;
        case "www.qa-crnitalia.it": baseUrl="https://www.qa-crnitalia.it:5703"; crnUrl = "//www.qa-crn.fr:5703";	    break;
        case "www.dev-crn.com":     baseUrl="http://www.dev-crn.com:5703";     crnUrl = "//www.dev-crn.com:5703";	break;
        case "custom.dev-crn.com":  baseUrl="http://www.dev-crn.com:5703";     crnUrl = "//www.dev-crn.com:5703";	break;
        case "closeup.dev-crn.com": baseUrl="http://www.dev-crn.com:5703";     crnUrl = "//www.dev-crn.com:5703";	break;
        case "www.dev-crn.fr":      baseUrl="http://www.dev-crn.fr:5703";      crnUrl = "//www.dev-crn.fr:5703";	break;
        case "www.dev-crnitalia.it":baseUrl="http://www.dev-crnitalia.it:5703"; crnUrl = "//www.dev-crnitalia.it:5703";	break;
        case "localhost":           baseUrl="http://localhost:8480";           crnUrl = "//localhost:8480";	break;
        default:                    baseUrl="/"; 
        }
        
        var qUrl = crnUrl + "/api/site";
        document.getElementById("jlft-2").innerHTML = qUrl;
        
        $.get( qUrl, function( response ) {
            if(response && response.root && response.root.items && response.root.items.length > 0){
                var s = response.root.items;
                var sectionlist = '';
                for(var i=0;i<s.length;i++){
                    var r = s[i];
                    var r2 = s[i];
                    if(r2.title == "News"){var mydrop="newsDrop";} else{var mydrop="slideDrop";}
                    if( (r.title == "Slide Shows" || r.title == "News") && r.items.length > 0){
                        sectionlist += '<div class="dropdown special-pages"><button class="dropbtn" onclick="jlftDropdownBtn(\''
                        sectionlist += mydrop + '\')">' + r.title;
                        sectionlist += '&nbsp;<img class="nav-drop" src="/assets/themes/crn/img/caret-down.svg" alt=""></button><div id="'
                        sectionlist += mydrop + '" class="dropdown-content">';
                        
                        // sort messy dropdown items
                        // but only on Custom pages because Eidos is retarded
                        // If you want the CRN menu go look in article-leftbar-menu.ftl
                        	r.items.sort(function(a, b){
                        		var x = a.title.toLowerCase();
                            	var y = b.title.toLowerCase();
                            	if (x < y) {return -1;}
                            	if (x > y) {return 1;}
                            	return 0;
                        	});
                        // list items in dropdown
                        for(var x=0;x<r.items.length;x++){
                            sectionlist += '<a href="'+baseUrl + r.items[x].uri+'">'+r.items[x].title+'</a>';
                        }}
                        sectionlist += '</div></div>';
			    };
                $('#site-menu-sections').replaceWith(sectionlist);
        }});
	    // Temporarily forcing News and Slide-Show links until we get answer from Eidos regarding their API use being blocked in Production
        // Remove all this if Eidos opens up API access in Prod
	    sectionlist = '<a href="'+baseUrl+'/news/">News</a><a href="'+baseUrl+'/slide-shows/">All Carousels</a>';
        $('#site-menu-sections').replaceWith(sectionlist);
});


///////////////////////////////
//  SPONSORED RESOURCE LIST  //
///////////////////////////////

$( window ).on( "load", function() {
 
    if($('#rr-sr-list').length > 0){

        var qUrl = "/query/all-sponsored-resources?";
        var qParmas = {
            "option.template": "sponsored-resources"
        }
        qUrl += $.param(qParmas, true);

        $.get( qUrl, function( response ) {
            if(response && response.resources && response.resources.length > 0){
                var sa = shuffleArray(response.resources);
                var list = '';
                for(var i=0;i<sa.length;i++){
                    if(i>=5)break;
                    var res = sa[i];
                    list += '<li><a href="'+ res.url +'"><p>';
                    list += res.title +'</p></a></li>';
                };
                $('#rr-sr-list').empty().append(list);
            }
        });
    }
 
 });

/////////////////////////////////
//  FROM OUR ADVERTISERS LIST  //
/////////////////////////////////

$( window ).on( "load", function() {
 
    if($('#sponsored-slideshow').length > 0 && $('#horiz-slider-wrap').length > 0){

        var initSlideshow = function(sa){
            var ss = $('#sponsored-slideshow');
            var ssLength = $('#sponsored-slideshow').outerWidth(true);
            var $ssWrap = $("#horiz-slider-wrap");
            var $ssLeft = $(ss).find('.slideshow-arrow[data-dir=left]');
            var $ssRight = $(ss).find('.slideshow-arrow[data-dir=right]');
            
            var iLength = $ssWrap.find('article:eq(0)').outerWidth(true);
            var wrapSize = iLength * sa.length;
            var fit = Math.round(ssLength/iLength);

            if(sa.length > fit){
                $ssWrap.width(wrapSize);
                $ssRight.css('visibility', 'visible');
                var sliding = false;
                $('#sponsored-slideshow .slideshow-arrow').off().on('click',function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    if($ssWrap.is(':animated'))return;
                    var $this = $(this);
                    var curPos = parseInt($ssWrap.css("left")) || 0;
                    if($this.data('dir')=='right'){
                        var pos = curPos-iLength;
                        $ssWrap.animate({left:curPos-iLength});
                        $ssLeft.css('visibility', 'visible');
                        if(pos <= (sa.length-fit)*(-iLength))$ssRight.css('visibility', 'hidden');
                    }else{
                        var pos = curPos+iLength;
                        $ssWrap.animate({left:pos});
                        $ssRight.css('visibility', 'visible');
                        if(pos >= 0)$ssLeft.css('visibility', 'hidden');
                    }
                });
            }
        }

        var qUrl = "/special-pages-all-types?";
        var qParmas = {
            "option.template": "special-pages-all-types"
        }
        qUrl += $.param(qParmas, true);
        
// alert('qUrl:'+qUrl);

        $.get( qUrl, function( response ) {
            if(response && response.special_pages && response.special_pages.length > 0){
                var sa = shuffleArray(response.special_pages); //shuffle array
                // var sa = response.special_pages;
                var list = '';
                for(var i=0;i<sa.length;i++){
                    var res = sa[i];
                    list += '<article><a href="'+ res.url +'"><img src="'+ res.img + '">';
                    list += '<h5>' + res.subhead +'</h5><h3>' + res.headline + '</h3></a></article>';
                };
                $('#horiz-slider-wrap').empty().append(list);
                initSlideshow(sa);
                $(window).on('resize',function(){
                    $('#sponsored-slideshow .slideshow-arrow').css('visibility', 'hidden');
                    initSlideshow(sa);
                });
            }
        });
    }
 
 });

///////////////////////////////////////////////////////////////////////////////////////
// Assign IDs to resource list to target list elements on learning center pages only //
///////////////////////////////////////////////////////////////////////////////////////
$( window ).on( "load", function() {
  if($('body').hasClass('learning-center')){
	//Get all LI elements from UL class resources
    var element = document.querySelectorAll('.resources li');
    //Convert element UL into an array of LIs
    Array.from(element)
    // iterate over the element (each LI in the UL)
    .forEach(function(ele, i) {
      // generate and set id
      ele.setAttribute("id", 'item' + (i + 1));
    })
  }
});

/////////////////////////////////
// Special Pages Menu sorting  //
/////////////////////////////////

$( window ).on( "load", function() {

    var qUrl = "/query/crn360-special-pages?";
    var qParmas = {
        "option.template": "special-pages-all-types"
    }
    qUrl += $.param(qParmas, true);
	
    $.get( qUrl, function( response ) {
        if(response && response.special_pages && response.special_pages.length > 0){
            // var sa = response.special_pages;
            var sa = sortMenuArray(response.special_pages)
            var list = '';
            for(var i=0;i<sa.length;i++){
                var res = sa[i];
                list += '<a href="'+ res.url + '">' + res.headline + '</a>';
            };
            $('#c360Drop').empty().append(list);
        }
    });
    
    var qUrl = "/query/closeup-special-pages?";
    var qParmas = {
        "option.template": "special-pages-all-types"
    }
    qUrl += $.param(qParmas, true);
	
    $.get( qUrl, function( response ) {
        if(response && response.special_pages && response.special_pages.length > 0){
            // var sa = response.special_pages;
            var sa = sortMenuArray(response.special_pages)
            var list = '';
            for(var i=0;i<sa.length;i++){
                var res = sa[i];
                list += '<a href="'+ res.url + '">' + res.headline + '</a>';
            };
            $('#closeupDrop').empty().append(list);
        }
    });
    
    var qUrl = "/query/learning-center-special-pages?";
    var qParmas = {
        "option.template": "special-pages-all-types"
    }
    qUrl += $.param(qParmas, true);
	
    $.get( qUrl, function( response ) {
        if(response && response.special_pages && response.special_pages.length > 0){
            // var sa = response.special_pages;
            var sa = sortMenuArray(response.special_pages)
            var list = '';
            for(var i=0;i<sa.length;i++){
                var res = sa[i];
                list += '<a href="'+ res.url + '">' + res.headline + '</a>';
            };
            $('#learningDrop').empty().append(list);
        }
    });
    
});

