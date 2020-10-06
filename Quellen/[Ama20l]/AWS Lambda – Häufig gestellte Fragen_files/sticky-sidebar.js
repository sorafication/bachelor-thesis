define(["librastandardlib/vendor/cssEscape/cssEscape","librastandardlib/dom-utils/smoothScrollToElem","libra/dom-utils/smoothScrollOptions"],function(cssEscape,smoothScrollToElem,smoothScrollOptions){"use strict";var defaults={deepLinkSelector:"a[href*=\\#]:not([href=\\#])",sidebarToggleSelector:".lb-toggle-wrapper",activeLinkClass:"lb-active",collapsedSidebarClass:"lb-sidebar-collapsed",scrollEventName:"scroll.lb-sticky-sidebar",pageHeaderSelector:"#aws-page-header",pageContentSelector:"#aws-page-content",scrollThreshold:90};function StickySidebar(elem){this.$elem=$(elem);this.deepLinks=[];this.$linksWithoutHref=[];this.$deepLinks=this.$elem.find(defaults.deepLinkSelector);this.$sidebarToggle=this.$elem.find(defaults.sidebarToggleSelector);this.$pageHeader=$(defaults.pageHeaderSelector);this.$pageContent=$(defaults.pageContentSelector);this.headerHeight=this.getHeaderHeight();this.findDeepLinks();this.removeLinksWithoutHref();this.bindHandlers();this.onScroll($(window))}StickySidebar.prototype={findDeepLinks:function(){this.$deepLinks.each(function(idx,elem){var $elem=$(elem);var url=$elem.attr("href");var $destination=this.$pageContent.find(cssEscape(url).substr(1));if($destination.length){this.deepLinks.push({$elem:$elem,$dest:$destination})}else{this.$linksWithoutHref.push(elem)}}.bind(this))},removeLinksWithoutHref:function(){this.$linksWithoutHref.forEach(function(link){for(var i=this.$deepLinks.length-1;i>=0;i--){if(link.hash===this.$deepLinks[i].hash){this.$deepLinks.splice(i,1)}}}.bind(this))},bindHandlers:function(){var that=this;var isHeaderHeightRecent=false;var $window=$(window);$window.on(defaults.scrollEventName,function(){if(!isHeaderHeightRecent){isHeaderHeightRecent=true;that.headerHeight=that.getHeaderHeight();var longScrollTime=1e3;setTimeout(function(){isHeaderHeightRecent=false},longScrollTime)}that.onScroll($window)});this.$sidebarToggle.on("click",function(){that.toggleSidebar()});this.deepLinks.forEach(function(item){$(item.$elem).on("click",function(e){e.preventDefault();e.stopImmediatePropagation();smoothScrollToElem(item.$dest,smoothScrollOptions)})})},toggleSidebar:function(){this.$pageContent.toggleClass(defaults.collapsedSidebarClass);$(window).trigger("resize")},getHeaderHeight:function(){if(this.$pageHeader.length>0&&this.$pageHeader.css("position")==="fixed"){return this.$pageHeader.height()}return 0},onScroll:function($window){var closestDeepLink;var smallestDeepLinkOffset=0;var scrollTop=$window.scrollTop()+this.headerHeight+defaults.scrollThreshold;var activeIdx;this.deepLinks.forEach(function(item,idx){var offsetTop=item.$dest.offset().top;var offset=scrollTop-offsetTop;if(offsetTop<scrollTop&&(smallestDeepLinkOffset===0||offset<smallestDeepLinkOffset)){smallestDeepLinkOffset=offset;closestDeepLink=item.$elem;activeIdx=idx}});if(this.activeIdx!==activeIdx){this.$deepLinks.eq(this.activeIdx).removeClass(defaults.activeLinkClass);$(closestDeepLink).addClass(defaults.activeLinkClass);this.activeIdx=activeIdx}}};Libra.Comp.register({name:"sticky-sidebar",initFct:function(elem){new StickySidebar(elem)},initTime:"documentReady"});return StickySidebar});