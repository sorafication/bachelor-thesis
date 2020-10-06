String.prototype.beginsWith = function(t, i) { if (i==false) { return (t == this.substring(0, t.length)); } else { return (t.toLowerCase() == this.substring(0, t.length).toLowerCase()); } } 

function GetContextualKeys(TheURL) {
    var ConString = TheURL ;
    ConString = ConString.replace(/[\/\. \+\-]/gi, '');
    ConString = ConString.substring(0, 34); 
	return ConString; 
}


AdUrl = unescape(window.location.pathname);



var AdGKeys = "NA";
AdGKeys = ( GetContextualKeys(AdUrl) ) ;
console.log("AdGKeys set: " + AdGKeys); 



var w = window.innerWidth;
if (w < 1000) {
    adWindowWidth = 'mobile';
} else {
    adWindowWidth = 'desktop';
}

function GetPageAlias(TheURL){
	var taxTag="None";

	if 		( TheURL.beginsWith('/news/applications-os') || TheURL.beginsWith('/slide-shows/applications-os') ) 				{taxTag='applicationsandos';}
	else if ( TheURL.beginsWith('/news/channel-programs') || TheURL.beginsWith('/slide-shows/channel-programs') ) 				{taxTag='channelprograms';}
	else if ( TheURL.beginsWith('/news/cloud') || TheURL.beginsWith('/slide-shows/cloud') ) 									{taxTag='cloud';}
	else if ( TheURL.beginsWith('/news/components-peripherals') || TheURL.beginsWith('/slide-shows/components-peripherals') ) 	{taxTag='componentsandperipherals';}
	else if ( TheURL.beginsWith('/news/data-center') || TheURL.beginsWith('/slide-shows/data-center') ) 						{taxTag='datacenter';}
	else if ( TheURL.beginsWith('/news/internet-of-things') || TheURL.beginsWith('/slide-shows/internet-of-things') ) 			{taxTag='internetofthings';}
	else if ( TheURL.beginsWith('/news/managed-services') || TheURL.beginsWith('/slide-shows/managed-services') ) 				{taxTag='managedservices';}
	else if ( TheURL.beginsWith('/news/mobility') || TheURL.beginsWith('/slide-shows/mobility') ) 								{taxTag='mobility';}
	else if ( TheURL.beginsWith('/news/networking') || TheURL.beginsWith('/slide-shows/networking') ) 							{taxTag='networking';}
	else if ( TheURL.beginsWith('/news/running-your-business') || TheURL.beginsWith('/slide-shows/running-your-business') ) 	{taxTag='runningyourbusiness';}
	else if ( TheURL.beginsWith('/news/security') || TheURL.beginsWith('/slide-shows/security') ) 								{taxTag='security';}
	else if ( TheURL.beginsWith('/news/storage') || TheURL.beginsWith('/slide-shows/storage') ) 								{taxTag='storage';}
	else if ( TheURL.beginsWith('/news/virtualization') || TheURL.beginsWith('/slide-shows/virtualization') ) 					{taxTag='virtualization';}
	
	else if (TheURL.beginsWith('/news/') ) {taxTag='news'; }
	else if (TheURL == '/') {taxTag='hp'; }
	else { taxTag='ros'; }

	return taxTag;
}


var AdPageAlias = "NA";
AdPageAlias = GetPageAlias(AdUrl);
console.log("AdPageAlias set: " + AdPageAlias); 



googletag.cmd.push(function() {

if (adWindowWidth == 'mobile' ) {
	googletag.defineSlot('/21804213519/crn.com/' + AdPageAlias + '/mobiletop', [320, 50], 'div-gpt-ad-1553031606296-6').addService(googletag.pubads());
	googletag.defineSlot('/21804213519/crn.com/' + AdPageAlias + '/mobileribbon', [320, 50], 'div-gpt-ad-1553031606296-5').addService(googletag.pubads());
} else {
// if page width is enough
	googletag.defineSlot('/21804213519/crn.com/' + AdPageAlias + '/top', [728, 90], 'div-gpt-ad-1553031606296-12').addService(googletag.pubads());
	googletag.defineSlot('/21804213519/crn.com/' + AdPageAlias + '/ribbon', [982, 100], 'div-gpt-ad-1553031606296-7').addService(googletag.pubads());
}

googletag.defineSlot('/21804213519/crn.com/' + AdPageAlias + '/curtain', [160, 600], 'div-gpt-ad-1553031606296-0').addService(googletag.pubads());
googletag.defineSlot('/21804213519/crn.com/' + AdPageAlias + '/halfpage', [300, 600], 'div-gpt-ad-1553031606296-1').addService(googletag.pubads());
googletag.defineSlot('/21804213519/crn.com/' + AdPageAlias + '/imu1', [336, 280], 'div-gpt-ad-1553031606296-2').addService(googletag.pubads());
googletag.defineSlot('/21804213519/crn.com/' + AdPageAlias + '/imu2', [336, 280], 'div-gpt-ad-1553031606296-3').addService(googletag.pubads());
googletag.defineSlot('/21804213519/crn.com/' + AdPageAlias + '/imu3', [336, 280], 'div-gpt-ad-1553031606296-4').addService(googletag.pubads());

//only articles
googletag.defineSlot('/21804213519/crn.com/' + AdPageAlias + '/sponsoredposttextlink', [500, 75], 'div-gpt-ad-1557853533371-0').addService(googletag.pubads());
// only home
googletag.defineSlot('/21804213519/crn.com/' + AdPageAlias + '/SponsoredPostHome', ['fluid'], 'div-gpt-ad-1556286094906-0').addService(googletag.pubads());
// only some slideshows
googletag.defineSlot('/21804213519/crn.com/' + AdPageAlias + '/sponsoredpostslideshow', ['fluid'], 'div-gpt-ad-1556033560721-0').addService(googletag.pubads());
// only news list pages
googletag.defineSlot('/21804213519/crn.com/' + AdPageAlias + '/sponsoredpostnews', ['fluid'], 'div-gpt-ad-1556033432100-0').addService(googletag.pubads());


googletag.pubads().enableSingleRequest();
googletag.pubads().setTargeting('URL', [AdGKeys]);
googletag.enableServices();
});




