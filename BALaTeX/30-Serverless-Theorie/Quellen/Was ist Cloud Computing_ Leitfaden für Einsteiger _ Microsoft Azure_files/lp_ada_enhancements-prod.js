var engagementFix = (function() {
    var engEl;

    function focus(eng) {
        // Run if a button was detected
        if (eng.engagementType === 5) {
            // Look in dom for a role of button.  We only need to do this once because each button load will cause this to run.
            setTimeout(function() {
                var button = document.querySelector('[role="button"]');

                if (button) {
                    button.removeAttribute('role');
                }
            }, 200);
        }

        if (eng.engagementType === 23) {
            document.querySelectorAll('[data-LP-event="close"]')[0].click();
        }

        engEl = document.getElementById("chatEngagement"); 

        if (engEl != null) {
            setTimeout(function() {
                document.getElementById("chatEngagement").focus();
            }, 200);
        } else {
            setTimeout(function() {
              var engagementContainer = document.getElementsByClassName('LPMcontainer')[0];
                if (engagementContainer) {
                  engagementContainer.removeAttribute('tabindex');
                }
            }, 500);
        }
    };

    function retry() {
        setTimeout(function(){
            bind();
        }, 150);
    };

    function bind() {
        if (lpTag.events) {
            if (lpTag.events.bind) {
                lpTag.events.bind('LP_OFFERS', 'OFFER_DISPLAY', focus);
            } else {
                retry();
            };
        } else {
            retry();
        };
    };

    return {
        start: bind
    };
}());

engagementFix.start();
     
var sectionCheck = function sectionCheck(section) {
    if (typeof lpTag.section == 'object') {
        return lpTag.section[0];
    } else {
        return lpTag.section;
    }
}

// Agent is typing update
var agentIsTypingFix = function agentIsTypingFix(state) {
    if (state == 'waiting' || state == 'interactive') {
        // agentIsTypingFix updates the 'agent is typing' area to have proper aria labels so it gets read to the user as things are typed.
        var agentTypingElement = document.getElementsByClassName('lp_agent_is_typing')[0];

        // If this element exists we set aria-live and the role.
        if (agentTypingElement) {
            agentTypingElement.setAttribute('aria-live', 'polite');
            agentTypingElement.setAttribute('role','alert');
        }
    }
};

if (lpTag.events) {
    lpTag.events.bind('ChatAPIV3', 'state', agentIsTypingFix);
}

// Star updates
function starColorHandler(_event){
    // Get the stars
    var stars = document.getElementsByClassName('chips-item');
    var value = _event.srcElement.attributes['data-star-value'].value;

    // Update color for stars = or > the star value
    for (i=0; i < stars.length; i++) {
        //console.log(stars[i].attributes['data-star-value'].value > value)
        if (stars[i].attributes['data-star-value'].value > value) {
            stars[i].innerHTML = '&#9734;';
        } else {
            stars[i].innerHTML = '&#9733;';
        }
    }
}

var starMsg = function(_button) {   
    var satMsg = document.createElement("div");
    satMsg.style.width="25%";
    satMsg.style.wordBreak="break-word";
    satMsg.style.padding="3px";
    satMsg.style.textAlign = "center";    
    var msg = _button.innerHTML.replace(/&nbsp;/g, " ");;
    satMsg.innerHTML = msg.substr(1);
    return satMsg;
}

var starInit = function() { 
  var chipsRow = document.querySelector('.chips-row');
  if(chipsRow!=null)
  {
    chipsRow.setAttribute('class','chips-row stars');
    chipsRow.style.justifyContent="space-around";
    // Get the stars
    var stars = chipsRow.getElementsByClassName('chips-item'); 
   //Add Star message Container .
    var msgEleContainer = document.createElement("div");
    msgEleContainer.id="lp-chips-item-msg"
    msgEleContainer.style.fontSize="11px";
    msgEleContainer.style.display="flex";    
    //msgEleContainer.append(starMsg());    
    
    // Assign click handler to them
    for (i=0; i < stars.length; i++) 
    {
        var starNums = i;
        starNums++;
        stars[i].addEventListener('click', starColorHandler);
        stars[i].addEventListener('mouseover', starColorHandler);
        stars[i].setAttribute('data-star-value', i+1);
        stars[i].style.fontSize="2em";
        stars[i].style.border="0px";
        stars[i].style.padding="5px";
        
        msgEleContainer.append(starMsg( stars[i]));
        stars[i].innerHTML = '&#9733;';
    }
    chipsRow.parentElement.append(msgEleContainer);    
    
  }
}

// Privacy Policy Update
function updateMSPrivacyStatement() {
    setTimeout(function() { 
        var privacyStmt = document.querySelectorAll(".lp_title_text a[href='http://go.microsoft.com/fwlink/?LinkID=267510&clcid=0x409']");

        if (privacyStmt.length > 0) {
            var latestEle = privacyStmt[privacyStmt.length-1];

            var currentSection;

            if (typeof lpTag.section == 'object') {
                currentSection = lpTag.section[0].toLowerCase();
            } else {
                currentSection = lpTag.section.toLowerCase();
            }

            switch (currentSection) {
                case 'store-sales-ko-kr':
                case 'azure-leadgen-ko-kr':
                case 'azure-leadgen-ko-kr':
                case 'office365-leadgen-ko-kr':
                case 'microsoft365-leadgen-ko-kr':
                case 'webpurchase-sales-ko-kr':
                    latestEle.innerHTML = decodeURIComponent('%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8');
                    break;
                    
                case 'store-sales-th-ww':
                case 'microsoft365-leadgen-th-th':
                case 'office365-leadgen-th-th':
                case 'webpurchase-sales-th-th':
                    latestEle.innerHTML = decodeURIComponent('%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%84%E0%B8%B8%E0%B8%81%E0%B8%81%E0%B8%B5%E0%B9%89');
                    break;
                
                case 'store-sales-fr-ww':
                case 'store-sales-fr-be':
                case 'store-sales-fr-ca':
                case 'store-sales-fr-fr':
                case 'store-sales-fr-ch':
                case 'store-sales-fr-lu':
                case 'office365-leadgen-fr-be':
                case 'office365-leadgen-fr-ca':
                case 'office365-leadgen-fr-fr':
                case 'office365-leadgen-fr-ch':
                case 'microsoft365-leadgen-fr-be':
                case 'microsoft365-leadgen-fr-ca':
                case 'microsoft365-leadgen-fr-fr':
                case 'microsoft365-leadgen-fr-ch':
                case 'dynamics-leadgen-fr-fr':
                case 'dynamics-leadgen-fr-ch':
                case 'azure-leadgen-fr-fr':
                case 'webpurchase-sales-fr-be':
                case 'webpurchase-sales-fr-ca':
                case 'webpurchase-sales-fr-ch':
                case 'webpurchase-sales-fr-fr':
                case 'webpurchase-sales-fr-lu':
                case 'webpurchase-sales-fr-ww':
                    latestEle.innerHTML = decodeURIComponent('Confidentialit%C3%A9%20et%20cookies');
                    break;

                case 'store-sales-de-ww':
                case 'store-sales-de-at':
                case 'store-sales-de-ch':
                case 'store-sales-de-de':
                case 'store-sales-de-lu':
                case 'office365-leadgen-de-at':
                case 'office365-leadgen-de-ch':
                case 'office365-leadgen-de-de':
                case 'microsoft365-leadgen-de-at':
                case 'microsoft365-leadgen-de-ch':
                case 'microsoft365-leadgen-de-de':
                case 'dynamics-leadgen-de-ch':
                case 'dynamics-leadgen-de-de':
                case 'azure-leadgen-de-de':
                case 'webpurchase-sales-de-at':
                case 'webpurchase-sales-de-ch':
                case 'webpurchase-sales-de-de':
                case 'webpurchase-sales-de-lu':
                case 'webpurchase-sales-de-ww':
                    latestEle.innerHTML = 'Datenschutz und Cookies';
                    break;

                case 'store-sales-es-us':
                case 'store-sales-es-es':
                case 'store-sales-es-ww':
                case 'store-sales-es-ar':
                case 'store-sales-es-cl':
                case 'store-sales-es-co':
                case 'store-sales-es-mx':
                case 'azure-leadgen-es-es':
                case 'dynamics-leadgen-es-es':
                case 'office365-leadgen-es-es':
                case 'microsoft365-leadgen-es-es':
                case 'office365-leadgen-es-cl':
                case 'microsoft365-leadgen-es-cl':
                case 'office365-leadgen-es-co':
                case 'microsoft365-leadgen-es-co':
                case 'office365-leadgen-es-ww':
                case 'microsoft365-leadgen-es-ww':
                case 'azure-leadgen-es-mx':
                case 'dynamics-leadgen-es-mx':
                case 'office365-leadgen-es-mx':
                case 'microsoft365-leadgen-es-mx':
                case 'office365-leadgen-es-ww':
                case 'microsoft365-leadgen-es-ww':
                case 'webpurchase-sales-es-ar':
                case 'webpurchase-sales-es-cl':
                case 'webpurchase-sales-es-co':
                case 'webpurchase-sales-es-es':
                case 'webpurchase-sales-es-mx':
                case 'webpurchase-sales-es-us':
                case 'webpurchase-sales-es-ww':
                    latestEle.innerHTML = 'Privacidad y cookies';
                    break;
                
                case 'store-sales-pt-br':
                case 'store-sales-pt-pt':
                case 'store-sales-pt-ww':
                case 'office365-leadgen-pt-pt':
                case 'microsoft365-leadgen-pt-pt':
                case 'azure-leadgen-pt-br':
                case 'dynamics-leadgen-pt-br':
                case 'office365-leadgen-pt-br':
                case 'microsoft365-leadgen-pt-br':
                case 'webpurchase-sales-pt-br':
                case 'webpurchase-sales-pt-pt':
                    latestEle.innerHTML = 'Privacidade e cookies';
                    break;

                case 'store-sales-cs-cz':
                case 'microsoft365-leadgen-cs-cz':
                case 'office365-leadgen-cs-cz':
                case 'webpurchase-sales-cs-cz':
                    latestEle.innerHTML = decodeURIComponent('Ochrana%20soukrom%C3%AD%20a%C2%A0soubory%20cookie');
                    break;

                case 'store-sales-da-dk':
                case 'store-sales-da-ww':
                case 'webpurchase-sales-da-dk':
                    latestEle.innerHTML = 'Beskyttelse af personlige oplysninger og cookies';
                    break;

                case 'store-sales-fi-fi':
                case 'webpurchase-sales-fi-fi':
                    latestEle.innerHTML = decodeURIComponent('Tietosuoja%20ja%20ev%C3%A4steet');
                    break;    

                case 'store-sales-he-il':
                case 'office365-leadgen-he-il':
                case 'microsoft365-leadgen-he-il':
                case 'webpurchase-sales-he-il':
                    latestEle.innerHTML = decodeURIComponent('%D7%A4%D7%A8%D7%98%D7%99%D7%95%D7%AA%20%D7%95%D7%A7%D7%91%D7%A6%D7%99%20Cookie');
                    break;   

                case 'store-sales-it-it':
                case 'store-sales-it-ww':
                case 'azure-leadgen-it-it':
                case 'dynamics-leadgen-it-it':
                case 'office365-leadgen-it-it':
                case 'microsoft365-leadgen-it-it':
                case 'webpurchase-sales-it-ch':
                case 'webpurchase-sales-it-it':
                    latestEle.innerHTML = 'Privacy e cookie';
                    break;

                case 'store-sales-nb-no':
                case 'webpurchase-sales-nb-no':
                    latestEle.innerHTML = 'Personvern og informasjonskapsler';
                    break;

                case 'store-sales-nl-be':
                case 'store-sales-nl-nl':
                case 'store-sales-nl-ww':
                case 'office365-leadgen-nl-be':
                case 'microsoft365-leadgen-nl-be':
                case 'azure-leadgen-nl-nl':
                case 'dynamics-leadgen-nl-nl':
                case 'office365-leadgen-nl-nl':
                case 'microsoft365-leadgen-nl-nl':
                case 'webpurchase-sales-nl-be':
                case 'webpurchase-sales-nl-nl':
                    latestEle.innerHTML = 'Privacy en cookies';
                    break;   

                case 'store-sales-pl-pl':
                case 'office365-leadgen-pl-pl':
                case 'microsoft365-leadgen-pl-pl':
                case 'webpurchase-sales-pl-pl':
                    latestEle.innerHTML = decodeURIComponent('Poufno%C5%9B%C4%87%20i%20pliki%20cookie');
                    break;   

                case 'store-sales-ru-ww':
                case 'store-sales-ru-ru':
                case 'office365-leadgen-ru-ru':
                case 'microsoft365-leadgen-ru-ru':
                case 'azure-leadgen-ru-ru':
                case 'dynamics-leadgen-ru-ru':
                case 'webpurchase-sales-ru-ww':
                    latestEle.innerHTML = decodeURIComponent('%D0%9A%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20%D0%B8%20%D1%84%D0%B0%D0%B9%D0%BB%D1%8B%20cookie');
                    break;  

                case 'store-sales-sv-se':
                case 'azure-leadgen-sv-se':
                case 'dynamics-leadgen-sv-se':  
                case 'office365-leadgen-sv-se':  
                case 'microsoft365-leadgen-sv-se':
                case 'webpurchase-sales-sv-se':
                    latestEle.innerHTML = 'Sekretess och cookies';
                    break;  

                case 'store-sales-tr-tr':
                case 'office365-leadgen-tr-tr':
                case 'microsoft365-leadgen-tr-tr':
                case 'webpurchase-sales-tr-tr':
                    latestEle.innerHTML = 'Gizlilik ve Tanımlama Bilgileri';
                    break;  

                case 'store-sales-uk-ww':
                case 'webpurchase-sales-uk-ua':
                    latestEle.innerHTML = decodeURIComponent('%D0%9A%D0%BE%D0%BD%D1%84%D1%96%D0%B4%D0%B5%D0%BD%D1%86%D1%96%D0%B9%D0%BD%D1%96%D1%81%D1%82%D1%8C%20%D1%96%20%D1%84%D0%B0%D0%B9%D0%BB%D0%B8%20cookie');
                    break;  
                    
                case 'store-sales-ja-jp':
                case 'azure-leadgen-ja-jp':
                case 'dynamics-leadgen-ja-jp':
                case 'office365-leadgen-ja-jp':
                case 'microsoft365-leadgen-ja-jp':
                case 'webpurchase-sales-ja-jp':
                    latestEle.innerHTML = decodeURIComponent('%E3%83%97%E3%83%A9%E3%82%A4%E3%83%90%E3%82%B7%E3%83%BC%20%26%20Cookie');
                    break;  
                    
                case 'store-sales-zh-cn':
                case 'store-postsales-zh-cn':
                case 'azure-leadgen-zh-cn':
                case 'dynamics-leadgen-zh-cn':
                case 'office365-leadgen-zh-cn':
                case 'microsoft365-leadgen-zh-cn':
                case 'webpurchase-sales-zh-cn':
                    latestEle.innerHTML = decodeURIComponent('%E9%9A%90%E7%A7%81%E5%92%8C%C2%A0Cookies');
                    break;  
                
                case 'office365-leadgen-sk-sk':
                case 'microsoft365-leadgen-sk-sk':
                    latestEle.innerHTML = decodeURIComponent('Ochrana%20soukrom%C3%AD%20a%C2%A0soubory%20cookie');
                    break;

                case 'store-sales-zh-tw':
                case 'microsoft365-leadgen-zh-tw':
                case 'webpurchase-sales-zh-tw':
                    latestEle.innerHTML = decodeURIComponent('%E9%9A%B1%E7%A7%81%E6%AC%8A%E8%88%87%20Cookie');
                    break;

                case 'microsoft365-leadgen-vi-vn':
                case 'office365-leadgen-vi-vn':
                    latestEle.innerHTML = decodeURIComponent('Quy%E1%BB%81n%20ri%C3%AAng%20t%C6%B0%20v%C3%A0%20cookie');
                    break;

                case 'office365-leadgen-zh-hk':
                case 'microsoft365-leadgen-zh-hk':
                case 'office365-leadgen-zh-cn-local':
                    latestEle.innerHTML = decodeURIComponent('%E9%9A%B1%E7%A7%81%E6%AC%8A%E8%88%87%20Cookie');
                    break;

                case 'office365-leadgen-hu-hu':
                case 'microsoft365-leadgen-hu-hu':
                    latestEle.innerHTML = decodeURIComponent('Adatv%C3%A1delem%20%C3%A9s%20s%C3%BCtik');
                    break;

                default:
                    latestEle.innerHTML = 'Privacy & Cookies';
                    break;
            }
        } 
    }, 100);
}

function hookAfterLinesHandler() {
    // adding hooks namespace if customer code is not version 1.8.0
    if (parseInt(lpTag._v) < 1.8) {
        lpTag.hooks = lpTag.hooks || [];
    }

    // create hook to catch new messages
    try {
        setTimeout(function() {
            lpTag.hooks.push({ 
                name: "AFTER_GET_LINES", 
                callback: function(options) {
                    var richContentUpdates = {
                        'dynamics-leadgen-en-au':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-AU/support'],
                            ['Technical Support', 'https://dynamics.microsoft.com/en-au/support/'],
                            ['Billing Support', 'https://dynamics.microsoft.com/en-au/support/']
                        ], 
                        'microsoft365-leadgen-en-au':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-AU/support'],
                            ['Technical Support', 'https://support.office.com/en-us/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/en-us/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-en-au':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-AU/support'],
                            ['Technical Support', 'https://support.office.com/en-us/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/en-us/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-en-gb':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-gb/support'],
                            ['Technical Support', 'https://support.office.com/en-gb/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/en-gb/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-de-de':[
                            ['MPN Partner', 'https://partner.microsoft.com/de-de/support'],
                            ['Technischer Support', 'https://support.office.com/de-de/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Abrechnungssupport', 'https://support.office.com/de-de/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-pt-br':[
                            ['Parceiro MPN', 'https://partner.microsoft.com/pt-br/support'],
                            ['Suporte%20t%C3%A9cnico', 'https://support.office.com/pt-br/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Suporte%20a%20cobran%C3%A7a%20e%20faturamento', 'https://support.office.com/pt-br/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-ja-jp':[
                            ['MPN %E3%83%91%E3%83%BC%E3%83%88%E3%83%8A', 'https://partner.microsoft.com/ja-jp/support'],
                            ['%E3%83%86%E3%82%AF%E3%83%8B%E3%82%AB%E3%83%AB%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88', 'https://support.office.com/ja-jp/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['%E3%81%8A%E6%94%AF%E6%89%95%E3%81%84%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6', 'https://support.office.com/ja-jp/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-en-ie':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-ie/support'],
                            ['Technical Support', 'https://support.office.com/en-ie/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/en-ie/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-de-at':[
                            ['MPN Partner', 'https://partner.microsoft.com/de-at/support'],
                            ['Technischer Support', 'https://support.office.com/en-gb/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Abrechnungssupport', 'https://support.office.com/en-gb/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-fr-fr':[
                            ['Partenaire MPN', 'https://partner.microsoft.com/fr-fr/support'],
                            ['Support Technique', 'https://support.office.com/fr-fr/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Support%20li%C3%A9%20%C3%A0%20la%20facturation', 'https://support.office.com/fr-fr/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-es-es':[
                            ['MPN Partner', 'https://partner.microsoft.com/es-es/support'],
                            ['Soporte%20T%C3%A9cnico', 'https://support.office.com/es-es/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Soporte%20de%20Facturaci%C3%B3n', 'https://support.office.com/es-es/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-it-it':[
                            ['Partner MPN', 'https://partner.microsoft.com/it-it/support'],
                            ['Supporto Tecnico', 'https://support.office.com/it-it/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Supporto con la fatturazione', 'https://support.office.com/it-it/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-en-us':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-us/support'],
                            ['Technical Support', 'https://support.office.com/en-us/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/en-us/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-en-ca':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-ca/support'],
                            ['Technical Support', 'https://support.office.com/en-ca/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/en-ca/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-en-in':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-in/support'],
                            ['Technical Support', 'https://support.office.com/en-in/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/en-in/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-ar-ww':[
                            ['MPN Partner', 'https://partner.microsoft.com/ar-sa/support'],
                            ['Technical Support', 'https://support.office.com/ar-sa/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/ar-sa/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-en-ww':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-ae/support'],
                            ['Technical Support', 'https://support.office.com/en-ae/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/en-ae/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-de-ch':[
                            ['MPN Partner', 'https://partner.microsoft.com/de-ch/support'],
                            ['Technischer Support', 'https://support.office.com/de-ch/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Abrechnungssupport', 'https://support.office.com/de-ch/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-fr-ch':[
                            ['Partenaire MPN', 'https://partner.microsoft.com/fr-ch/support'],
                            ['Support Technique', 'https://support.office.com/fr-ch/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Support%20li%C3%A9%20%C3%A0%20la%20facturation', 'https://support.office.com/fr-ch/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-es-mx':[
                            ['Socio MPN', 'https://partner.microsoft.com/es-mx/support'],
                            ['Soporte%20T%C3%A9cnico', 'https://support.office.com/es-mx/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Soporte%20de%20Facturaci%C3%B3n', 'https://support.office.com/es-mx/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-es-co':[
                            ['Socio MPN', 'https://partner.microsoft.com/es-co/support'],
                            ['Soporte%20T%C3%A9cnico', 'https://support.office.com/es-co/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Soporte%20de%20Facturaci%C3%B3n', 'https://support.office.com/es-co/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-es-ww':[
                            ['Socio MPN', 'https://partner.microsoft.com/es-pe/support'],
                            ['Soporte%20T%C3%A9cnico', 'https://support.office.com/es-es/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Soporte%20de%20Facturaci%C3%B3n', 'https://support.office.com/es-es/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-es-cl':[
                            ['Socio MPN', 'https://partner.microsoft.com/es-cl/support'],
                            ['Soporte%20T%C3%A9cnico', 'https://support.office.com/es-cl/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Soporte%20de%20Facturaci%C3%B3n', 'https://support.office.com/es-cl/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-en-za':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-za/support'],
                            ['Technical Support', 'https://support.office.com/en-za/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/en-za/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-pl-pl':[
                            ['Program Partnerski', 'https://partner.microsoft.com/pl-pl/support'],
                            ['Wsparcie techniczne', 'https://support.office.com/pl-pl/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Rozliczenia', 'https://support.office.com/pl-pl/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-en-ng':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-ng/support'],
                            ['Technical Support', 'https://support.office.com/en-ng/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/en-ng/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-nl-nl':[
                            ['MPN Partner', 'https://partner.microsoft.com/nl-nl/support'],
                            ['Technische ondersteuning', 'https://support.office.com/nl-nl/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['factureringsondersteuning', 'https://support.office.com/nl-nl/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-tr-tr':[
                            ['MPN%20%C4%B0%C5%9F%20Orta%C4%9F%C4%B1', 'https://partner.microsoft.com/tr-tr/support'],
                            ['Teknik Destek', 'https://support.office.com/tr-tr/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Fatura%20ve%20Abonelik%20Deste%C4%9Fi', 'https://support.office.com/tr-tr/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-en-my':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-my/support'],
                            ['Technical Support', 'https://support.office.com/en-us/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/en-us/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-en-nz':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-nz/support'],
                            ['Technical Support', 'https://support.office.com/en-us/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/en-us/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-en-ph':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-ph/support'],
                            ['Technical Support', 'https://support.office.com/en-us/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/en-us/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-en-sg':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-sg/support'],
                            ['Technical Support', 'https://support.office.com/en-us/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/en-us/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-fr-be':[
                            ['Partenaire MPN', 'https://partner.microsoft.com/fr-be/support'],
                            ['Support Technique', 'https://support.office.com/fr-fr/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Support%20li%C3%A9%20%C3%A0%20la%20facturation', 'https://support.office.com/fr-fr/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-fr-ca':[
                            ['Partenaire MPN', 'https://partner.microsoft.com/fr-ca/support'],
                            ['Support Technique', 'https://support.office.com/fr-fr/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Support%20li%C3%A9%20%C3%A0%20la%20facturation', 'https://support.office.com/fr-fr/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-da-dk':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-US/support'],
                            ['Technical Support', 'https://support.office.com/da-dk/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/da-dk/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-fi-fi':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-US/support'],
                            ['Technical Support', 'https://support.office.com/fi-fi/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/fi-fi/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-nb-no':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-US/support'],
                            ['Technical Support', 'https://support.office.com/nb-no/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/nb-no/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-pt-pt':[
                            ['Parceiro MPN', 'https://partner.microsoft.com/pt-pt/support'],
                            ['Suporte%20T%C3%A9cnico', 'https://support.office.com/pt-pt/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Suporte%20de%20Fatura%C3%A7%C3%A3o', 'https://support.office.com/pt-pt/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-ar-ww':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-US/support'],
                            ['Technical Support', 'https://support.office.com/ar-sa/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing Support', 'https://support.office.com/ar-sa/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-zh-cn':[
                            ['MPN%E5%90%88%E4%BD%9C%E4%BC%99%E4%BC%B4', 'https://partner.microsoft.com/zh-cn/support'],
                            ['%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81', 'https://support.office.com/zh-cn/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['%E8%B4%A6%E5%8D%95%E6%94%AF%E6%8C%81', 'https://support.office.com/zh-cn/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-zh-hk':[
                            ['MPN%E5%90%88%E4%BD%9C%E5%A4%A5%E4%BC%B4', 'https://partner.microsoft.com/zh-hk/support'],
                            ['%E6%8A%80%E8%A1%93%E6%94%AF%E6%8F%B4', 'https://support.office.com/zh-hk/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['%E5%B8%B3%E5%96%AE%E6%94%AF%E6%8F%B4', 'https://support.office.com/zh-hk/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['%E5%80%8B%E4%BA%BA%E4%BD%BF%E7%94%A8', 'https://www.microsoftestore.com.hk/partner?locale=zh_HK']
                        ], 
                        'office365-leadgen-id-id':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-US/support'],
                            ['Dukungan Teknis', 'https://support.office.com/id-id/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Dukungan Penagihan', 'https://support.office.com/id-id/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-ko-kr':[
                            ['MPN%20%ED%8C%8C%ED%8A%B8%EB%84%88', 'https://partner.microsoft.com/ko-kr/support'],
                            ['%EA%B8%B0%EC%88%A0%20%EC%A7%80%EC%9B%90', 'https://support.office.com/ko-kr/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['%EA%B2%B0%EC%A0%9C%20%EA%B4%80%EB%A0%A8%20%EC%A7%80%EC%9B%90', 'https://support.office.com/ko-kr/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-zh-tw':[
                            ['%E5%BE%AE%E8%BB%9F%E5%90%88%E4%BD%9C%E5%A4%A5%E4%BC%B4%28%E4%BB%A3%E7%90%86%E5%95%86%29', 'https://partner.microsoft.com/zh-tw/support'],
                            ['%E6%8A%80%E8%A1%93%E6%94%AF%E6%8F%B4', 'https://support.office.com/zh-tw/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['%E5%B8%B3%E5%96%AE%E8%88%87%E5%B8%B3%E6%88%B6%E6%94%AF%E6%8F%B4', 'https://support.office.com/zh-tw/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-th-th':[
                            ['%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%8B%E0%B8%AD%E0%B8%9F%E0%B8%97%E0%B9%8C', 'https://partner.microsoft.com/th-th/support'],
                            ['%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%84%E0%B8%99%E0%B8%B4%E0%B8%84', 'https://support.office.com/th-th/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['%E0%B8%9D%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99', 'https://support.office.com/th-th/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-vi-vn':[
                            ['H%E1%BB%87%20th%E1%BB%91ng%20%C4%90%E1%BB%91i%20t%C3%A1c%20c%E1%BB%A7a%20Microsoft', 'https://partner.microsoft.com/en-US/support'],
                            ['H%E1%BB%97%20tr%E1%BB%A3%20k%E1%BB%B9%20thu%E1%BA%ADt', 'https://support.office.com/vi-vn/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['H%E1%BB%97%20tr%E1%BB%A3%20thanh%20to%C3%A1n', 'https://support.office.com/vi-vn/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-he-il':[
                            ['%D7%A9%D7%95%D7%AA%D7%A3%20%20%20%20%28%20MPN%20Partner%29', 'https://partner.microsoft.com/en-US/support'],
                            ['%D7%AA%D7%9E%D7%99%D7%9B%D7%94%20%D7%98%D7%9B%D7%A0%D7%99%D7%AA', 'https://support.office.com/he-il/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['%D7%AA%D7%9E%D7%99%D7%9B%D7%94%20%D7%A2%D7%91%D7%95%D7%A8%20%D7%97%D7%99%D7%95%D7%91%D7%99%D7%9D%20%D7%95%D7%AA%D7%A9%D7%9C%D7%95%D7%9E%D7%99%D7%9D', 'https://support.office.com/he-il/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-hu-hu':[
                            ['Microsoft Partner', 'https://partner.microsoft.com/hu-hu/support'],
                            ['Technikai%20t%C3%A1mogat%C3%A1s', 'https://support.office.com/hu-hu/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Sz%C3%A1ml%C3%A1z%C3%A1si%20t%C3%A1mogat%C3%A1s', 'https://support.office.com/hu-hu/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-cs-cz':[
                            ['Partner Microsoft', 'https://partner.microsoft.com/cs-cz/support'],
                            ['Technick%C3%A1%20podpora', 'https://support.office.com/cs-cz/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Faktura%C4%8Dn%C3%AD%20podpora', 'https://support.office.com/cs-cz/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-sk-sk':[
                            ['Partner Microsoft', 'https://partner.microsoft.com/sk-sk/support'],
                            ['Technick%C3%A1%20podpora', 'https://support.office.com/sk-sk/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Faktura%C4%8Dn%C3%AD%20podpora', 'https://support.office.com/sk-sk/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-nl-be':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-US/support'],
                            ['Technische ondersteuning', 'https://support.office.com/nl-nl/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['factureringsondersteuning', 'https://support.office.com/nl-nl/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'dynamics-leadgen-en-au':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-au/support'],
                            ['Technical Support', 'https://dynamics.microsoft.com/en-au/support/'],
                            ['Billing Support', 'https://dynamics.microsoft.com/en-au/support/']
                        ], 
                        'dynamics-leadgen-en-ca':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-ca/support'],
                            ['Technical Support', 'https://dynamics.microsoft.com/en-ca/support/'],
                            ['Billing Support', 'https://dynamics.microsoft.com/en-ca/support/']
                        ], 
                        'dynamics-leadgen-en-us':[
                            ['MPN Partner', 'https://partner.microsoft.com/en-us/support'],
                            ['Technical Support', 'https://dynamics.microsoft.com/en-us/support/'],
                            ['Billing Support', 'https://dynamics.microsoft.com/en-us/support/']
                        ], 
                        'office365-leadgen-ru-ru':[
                            ['%D0%9F%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%20%D0%9C%D0%B0%D0%B9%D0%BA%D1%80%D0%BE%D1%81%D0%BE%D1%84%D1%82', 'https://partner.microsoft.com/ru-ru/support'],
                            ['%D0%A2%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0', 'https://support.office.com/ru-ru/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0%20%D0%BF%D0%BE%20%D0%BF%D0%BB%D0%B0%D1%82%D0%B5%D0%B6%D0%B0%D0%BC', 'https://support.office.com/ru-ru/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ], 
                        'office365-leadgen-sv-se':[
                            ['Microsoft Partner', 'https://partner.microsoft.com/sv-se/support'],
                            ['Teknisk support', 'https://support.office.com/sv-se/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Fakturering support', 'https://support.office.com/sv-se/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655']
                        ],
                        'azure-leadgen-en-ca':[
                            ['Partner Network', 'https://partner.microsoft.com/en-ca/support'],
                            ['Technical support', 'https://azure.microsoft.com/en-ca/support/create-ticket/'],
                            ['Billing support', 'https://azure.microsoft.com/en-ca/support/create-ticket/'],
                            ['Education', 'https://azure.microsoft.com/en-ca/education']
                        ],
                        'azure-leadgen-en-us':[
                            ['Partner Network', 'https://partner.microsoft.com/en-us/support'],
                            ['Technical support', 'https://azure.microsoft.com/en-us/support/create-ticket/'],
                            ['Billing support', 'https://azure.microsoft.com/en-us/support/create-ticket/'],
                            ['Education', 'https://azure.microsoft.com/en-us/education'],
                            ['Billing or technical support','https://azure.microsoft.com/en-us/support/create-ticket/']
                        ],
                        'azure-leadgen-en-in':[
                            ['Partner Network', 'https://partner.microsoft.com/en-in/support'],
                            ['Technical support', 'https://azure.microsoft.com/en-in/support/create-ticket/'],
                            ['Billing support', 'https://azure.microsoft.com/en-in/support/create-ticket/'],
                            ['Education', 'https://azure.microsoft.com/en-in/education/']
                        ],
                        'azure-leadgen-en-au':[
                            ['Partner Network', 'https://partner.microsoft.com/en-au/support'],
                            ['Technical support', 'https://azure.microsoft.com/en-au/support/create-ticket/'],
                            ['Billing support', 'https://azure.microsoft.com/en-au/support/create-ticket/'],
                            ['Education', 'https://azure.microsoft.com/en-au/education/']
                        ],
                        'azure-leadgen-en-gb':[
                            ['Partner Network', 'https://partner.microsoft.com/en-gb/support'],
                            ['Technical support', 'https://azure.microsoft.com/en-gb/support/create-ticket/'],
                            ['Billing support', 'https://azure.microsoft.com/en-gb/support/create-ticket/'],
                            ['Education', 'https://azure.microsoft.com/en-gb/education/']
                        ],
                        'azure-leadgen-da-dk':[
                            ['Partner Network', 'https://partner.microsoft.com/da-dk/support'],
                            ['Technical support', 'https://azure.microsoft.com/da-dk/support/create-ticket/'],
                            ['Billing support', 'https://azure.microsoft.com/da-dk/support/create-ticket/'],
                            ['Education', 'https://azure.microsoft.com/da-dk/education/']
                        ],
                        'azure-leadgen-pt-pt':[
                            ['Partner Network', 'https://partner.microsoft.com/pt-pt/support'],
                            ['Technical support', 'https://azure.microsoft.com/pt-pt/support/create-ticket/'],
                            ['Billing support', 'https://azure.microsoft.com/pt-pt/support/create-ticket/'],
                            ['Education', 'https://azure.microsoft.com/pt-pt/education/']
                        ],
                        'azure-leadgen-nb-no':[
                            ['Partner Network', 'https://partner.microsoft.com/nb-no/support'],
                            ['Technical support', 'https://azure.microsoft.com/nb-no/support/create-ticket/'],
                            ['Billing support', 'https://azure.microsoft.com/nb-no/support/create-ticket/'],
                            ['Education', 'https://azure.microsoft.com/nb-no/education/']
                        ],
                        'education-marcom-en-us':[
                            ['I\'m a parent or homeschooler', 'https://www.microsoft.com/en-us/education/parents'],
                            ['I\'m a student', 'http://www.microsoft.com/en-us/education/students'],
                            ['Educator Office', 'https://www.microsoft.com/en-us/education/products/office'],
                            ['Educator Training', 'https://www.microsoft.com/en-us/education/educators/training-and-community'],
                            ['Partner Network Member', 'https://partner.microsoft.com/support'],
                            ['Technical support', 'https://support.office.com/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['Billing support', 'https://support.office.com/article/get-support-or-advice-18948a4c-3eb1-4b30-b1bc-a4cc29eb7655'],
                            ['I\'m looking for Office', 'https://www.microsoft.com/en-us/education/products/office'],
                            ['I\'m looking for training','https://www.microsoft.com/en-us/education/educators/training-and-community']
                        ]
                    }

                    options.data.lines.forEach(function(line) {
                    if (line.source == "agent") { 
                        if (line.type == "line") {
                            var msPrivacyStmt = line.text.indexOf('http://go.microsoft.com/fwlink/?LinkID=267510&clcid=0x409');

                            //Update Privacy Statement anchor element label
                            if (msPrivacyStmt != -1) {
                                updateMSPrivacyStatement();
                            }
                        }

                        if (line.type == "richContent") {
                            if (richContentUpdates[sectionCheck()]) {
                                line.text.elements.forEach(function(item) {
                                    if (item.title) {
                                        var contentUpdate = function contentUpdate(contentText) {
                                            setTimeout(function() {
                                                if (contentText[0].search('%') >= 0) {
                                                    var contentSearch = document.querySelectorAll('button[aria-label="' + decodeURIComponent(contentText[0]) + '"]');
                                                } else {
                                                    var contentSearch = document.querySelectorAll('button[aria-label="' + contentText[0] + '"]');
                                                }

                                                //var contentSearch = document.querySelectorAll("button[aria-label='" + contentText[0] + "']");

                                                if (contentSearch.length > 0) {
                                                    // We want to only update the last button, there may be others on the page.
                                                    contentSearch[contentSearch.length -1].addEventListener('click', function(){
                                                        window.open(contentText[1]);
                                                    });
                                                } 
                                            }, 100);
                                        }

                                        richContentUpdates[sectionCheck()].forEach(function(contentText){
                                            if (contentText[0].search('%') >= 0) {
                                                if (item.title.indexOf(decodeURIComponent(contentText[0])) != -1) {
                                                    contentUpdate(contentText);
                                                }
                                            } else {
                                                if (item.title.indexOf(contentText[0]) != -1) {
                                                    contentUpdate(contentText);
                                                }
                                            }
                                        });
                                    }
                                });
                            }
                        }
                        
                        var botName = line.by;
                        
                        if (botName != undefined && botName == "Microsoft Post Conversation Survey Bot") {
                            if (line.type == "richContent") {
                                setTimeout(function() {
                                    var pollackLayoutBtns = document.querySelectorAll(".lp-json-pollock-layout-vertical .lp-json-pollock-element-button");
                                    
                                    if (pollackLayoutBtns != null && pollackLayoutBtns.length > 0) {
                                        for (var index = 0; index < pollackLayoutBtns.length; index++) {
                                            pollackLayoutBtns[index].style.paddingBottom = "2px"; 
                                            pollackLayoutBtns[index].children[0].style.cursor = "pointer";
                                        }
                                    }

                                    var btnTiles = document.querySelectorAll(".lp-json-pollock-layout-vertical .lp-json-pollock-element-text");
                                    if (btnTiles != null && btnTiles.length > 0) {
                                        btnTiles[btnTiles.length - 1].style.backgroundColor = "#0363ad";
                                    }
                                }, 10);
                            }

                            var quickReplies = line.quickReplies;
                            
                            if (quickReplies != undefined && quickReplies.replies != null && quickReplies.replies.length == 5) {
                                setTimeout(function() {
                                    starInit();
                                }, 10);                
                            }
                        }             
                    }
            });

            return options;
            }
        });
        }, 100);
    } catch (e) {
        console.log('Error: ' + e);
    }
}

hookAfterLinesHandler();

var sliderMonitor = function sliderMonitor() {
    const maximizeButton = document.getElementsByClassName('lp_maximized')[0];

    const config = {subtree: false, attributes: true};

    let maximizeObserver = new MutationObserver(function(mutationRecords) {
        mutationRecords.forEach(function(item) {
            if (item.target.className && item.target.className.search('lp_slider_open') != -1) {
                var inviteText = document.getElementsByClassName('lp_cb_invitation_text')[0];
                
                if (inviteText) {
                    inviteText.innerHTML = inviteText.innerHTML.replace('Privacy Statement','<a href="http://go.microsoft.com/fwlink/?LinkID=267510&clcid=0x409" target="_blank">Privacy Statement</a>') 
                }
            }
        });
    });

    maximizeObserver.observe(maximizeButton, config);
}

var windowEventHandler = function windowEventHandler(state) {
    console.log(state);

    switch (state) {
        case 'init':

            sliderMonitor();
            break;
    
        default:
            break;
    }
}

if (lpTag.events) {
    lpTag.events.bind('ChatAPIV3', 'state', windowEventHandler);
}

if (sectionCheck() == 'OFFICE365-LEADGEN-EN-CA' || sectionCheck() == 'OFFICE365-LEADGEN-FR-CA' || sectionCheck() == 'OFFICE365-LEADGEN-EN-AU' || sectionCheck() == 'OFFICE365-LEADGEN-EN-ZA' || sectionCheck() == 'OFFICE365-LEADGEN-EN-IE' || sectionCheck() == 'OFFICE365-LEADGEN-EN-NZ' || sectionCheck() == 'OFFICE365-LEADGEN-EN-SG' || sectionCheck() == 'OFFICE365-LEADGEN-EN-GB' || sectionCheck() == 'OFFICE365-LEADGEN-EN-IN' || sectionCheck() == 'OFFICE365-LEADGEN-EN-MY' || sectionCheck() == 'OFFICE365-LEADGEN-CS-CZ' || sectionCheck() == 'OFFICE365-LEADGEN-DA-DK' || sectionCheck() == 'OFFICE365-LEADGEN-DE-AT' || sectionCheck() == 'OFFICE365-LEADGEN-DE-CH' || sectionCheck() == 'OFFICE365-LEADGEN-DE-DE' || sectionCheck() == 'OFFICE365-LEADGEN-ES-CL' || sectionCheck() == 'OFFICE365-LEADGEN-ES-CO' || sectionCheck() == 'OFFICE365-LEADGEN-ES-ES' || sectionCheck() == 'OFFICE365-LEADGEN-ES-MX' || sectionCheck() == 'OFFICE365-LEADGEN-FI-FI' || sectionCheck() == 'OFFICE365-LEADGEN-FR-BE' || sectionCheck() == 'OFFICE365-LEADGEN-FR-CH' || sectionCheck() == 'OFFICE365-LEADGEN-FR-FR' || sectionCheck() == 'OFFICE365-LEADGEN-HE-IL' || sectionCheck() == 'OFFICE365-LEAGEN-HU-HU' || sectionCheck() == 'OFFICE365-LEAGEN-ID-ID' || sectionCheck() == 'OFFICE365-LEADGEN-IT-IT' || sectionCheck() == 'OFFICE365-LEADGEN-JA-JP' || sectionCheck() == 'OFFICE365-LEADGEN-KO-KR' || sectionCheck() == 'OFFICE365-LEADGEN-NB-NO' || sectionCheck() == 'OFFICE365-LEADGEN-NL-BE' || sectionCheck() == 'OFFICE365-LEADGEN-NL-NL' || sectionCheck() == 'OFFICE365-LEADGEN-PL-PL' || sectionCheck() == 'OFFICE365-LEADGEN-PT-BR' || sectionCheck() == 'OFFICE365-LEADGEN-PT-PT' || sectionCheck() == 'OFFICE365-LEADGEN-RU-RU' || sectionCheck() == 'OFFICE365-LEADGEN-SK-SK' || sectionCheck() == 'OFFICE365-LEADGEN-SV-SE' || sectionCheck() == 'OFFICE365-LEADGEN-TH-TH' || sectionCheck() == 'OFFICE365-LEADGEN-TR-TR' || sectionCheck() == 'OFFICE365-LEADGEN-VI-VN' || sectionCheck() == 'OFFICE365-LEADGEN-ZH-TW') {
    var officeCSSUpdate = 'button.lp_submit_button {color: #fff !important;}';

    var newStyle = document.createElement('style');
        newStyle.setAttribute('type', 'text/css');
        newStyle.innerHTML = officeCSSUpdate;
        document.body.appendChild(newStyle);
}

/**************************************************************************
 * Taglet name: ADA Enhancements Sprint 4
 * Authors: Daniel Tucker & iSoftStone
 * Version: 4.1
 * @depend lp_global_utils
 * Description: Adds additional features to our ADA suite.
 **************************************************************************/

window.lpTag = window.lpTag || {};
lpTag.taglets = lpTag.taglets || {};
lpTag.taglets.ada_enhancements_4_1 = lpTag.taglets.ada_enhancements_4_1 || (function () {
    var v = '4.1',
        _name = 'ada_enhancements_4_1',
        _config = {},
        _isOffline = false;

    /**********************INVOCATION**************/
    function init(tagletConfig) {
        // Check to see if any config was passed into the init and double check its type.
        if (typeof tagletConfig === 'object') {
            // Valid config has been detected, setting the config passed through to the _config
            _config = tagletConfig;

            // Set validConfig to true so start will run.
            _config.validConfig = true;

            return true;
        } else {
            // Valid config hasn't been found, setting validConfig flag to false so start doesn't run.
            _config.validConfig = false;

            return false;
        }
    }
    /*********************PRIVATE METHODS*********************/

    var cssInjection = function cssInjection(domTarget, cssString) {
        // Check to see if both parameters exist
        if (domTarget && cssString) {
            var newStyle = document.createElement('style');
            newStyle.setAttribute('type', 'text/css');
            newStyle.innerHTML = domTarget + '{' + cssString + '}';
            document.body.appendChild(newStyle);
        }
    };

    var cssBlockInjection = function cssBlockInjection(cssString) {
        var newStyle = document.createElement('style');
            newStyle.setAttribute('type', 'text/css');
            newStyle.innerHTML = cssString;
            document.body.appendChild(newStyle);
    }

    var hideButtonCSS = '.LPMcontainer {display: none !important;}';

    var addStyling = function addStyling() {
        var link = document.createElement('link');
        link.id = 'adaStyle';
        link.rel = 'stylesheet';
        link.href = 'https://static-assets.dev.fs.liveperson.com/microsoft/lp_ada_enhancements-prod.css';
        document.head.appendChild(link);
    }
    
    var storeHeight = '.lp_desktop #lpChat > .lp_maximized {max-height: 100% !important};';

    if (sectionCheck() == 'office365-leadgen-en-in' || sectionCheck() == 'education-marcom-en-au' || sectionCheck() == 'office365-leadgen-en-in' || sectionCheck() == 'office365-leadgen-en-nz' || sectionCheck() == 'office365-leadgen-en-sg' || sectionCheck() == 'office365-leadgen-en-my' || sectionCheck() == 'office365-leadgen-id-id' || sectionCheck() == 'office365-leadgen-th-th' || sectionCheck() == 'office365-leadgen-en-ph' || sectionCheck() == 'office365-leadgen-vi-vn' || sectionCheck() == 'office365-leadgen-ko-kr' || sectionCheck() == 'office365-leadgen-ja-jp' || sectionCheck() == 'webpurchase-sales-en-us' || sectionCheck() == 'STORE-SALES-EN-US-EXP2' || sectionCheck() == 'STORE-SALES-EN-US-EXP1' || sectionCheck() == 'DXC-DEV2' || sectionCheck() == 'DXC-UAT' || sectionCheck() == 'DXC-DEV' || sectionCheck() == 'DXC-Stage' || sectionCheck() == 'DXC-EXP') {
        addStyling();
    } else if (sectionCheck().search('store-sales') >= 0) { 
        addStyling();
        cssBlockInjection(hideButtonCSS);
        cssBlockInjection(storeHeight);
    } else {
        addStyling();
        cssBlockInjection(hideButtonCSS);
    }

    // This function allows several other functions to inject alt attrubute into the dom
    var addAltAttribute = function addAltAttribute(domDivTarget, altTextString) {
        if (domDivTarget && altTextString) {
            if (document.getElementsByClassName(domDivTarget).length >= 1) {
                var domElement = document.getElementsByClassName(domDivTarget)[0];
                var img = domElement.getElementsByTagName('img')[0];
                img.setAttribute('alt', altTextString);
            }
        }
    };

    // This function allows several other functions to remove redundant title attributes
    var removeTitleAttr = function removeTitleAttr(domDivTarget) {
        if (domDivTarget) {
            var domElement = document.getElementsByClassName(domDivTarget);
            for (var t = 0; t < domElement.length; t++) {
                if (domElement[t].hasAttribute('title')) {
                    domElement[t].removeAttribute('title');
                }
            }
        }
    };

    // [CX/F004] + related bugs: screen readers are announcing way too much chatter and at awkard times
    // [5488903], [5488918]
    var landmarkRoleChanges = function landmarkRoleChanges() {

        // get the LP chat DOM object for easy reference
        var windowLP = document.getElementById('lpChat');

        // .lp_maximized and .lp_minimized both have role='complimentary' and both are being announced. put one dialog role on a parent instead.
        if (windowLP && !windowLP.hasAttribute('role')) {
            windowLP.setAttribute('role', 'dialog');
        }
        var chatMaximized = windowLP.getElementsByClassName('lp_maximized')[0];
        if (chatMaximized && chatMaximized.hasAttribute('role')) {
            chatMaximized.removeAttribute('role');
        }
        var chatMinimized = windowLP.getElementsByClassName('lp_minimized')[0];
        if (chatMinimized && chatMinimized.hasAttribute('role')) {
            chatMinimized.removeAttribute('role');
        }

        // chat window header has role of navigation that it doesn't need
        var chatHeader = windowLP.getElementsByClassName('lp_header');
        for (var h = 0; h < chatHeader.length; h++) {

            // [5488903], [5488918]
            chatHeader[h].setAttribute('aria-level', 1);

            if (chatHeader[h].hasAttribute('role')) {
                //chatHeader[h].removeAttribute('role');
            }
        }

        // chat window heading/title reset role and aria to be relevant to AT
        var chatTitle = windowLP.getElementsByClassName('lp_top-text');
        for (var t = 0; t < chatTitle.length; t++) {
            // if role is presentation and aria-live is set, change role to heading
            if (chatTitle[t].getAttribute('role', 'presentation') && chatTitle[t].hasAttribute('aria-live')) {
                chatTitle[t].setAttribute('role', 'heading');
            }
            // if role is heading then we also want the required attribute aria-level
            if (chatTitle[t].getAttribute('role', 'heading') && !chatTitle[t].hasAttribute('aria-level')) {
                chatTitle[t].setAttribute('aria-level', '1');
            }
            // aria-live should be polite by default
            if (chatTitle[t].getAttribute('aria-live', 'assertive')) {
                chatTitle[t].setAttribute('aria-live', 'polite');
            }
            // aria-atomic says to narrate the entire element, not just what changed
            if (!chatTitle[t].getAttribute('aria-atomic', 'true')) {
                chatTitle[t].setAttribute('aria-atomic', 'true');
            }
        }

        // .lp_main has role='main' but main should be in document, not in chat window
        var chatMain = windowLP.getElementsByClassName('lp_main');
        for (var m = 0; m < chatMain.length; m++) {
            if (chatMain[m].hasAttribute('role')) {
                chatMain[m].removeAttribute('role');
            }
        }

        // .lp_bottom_area has role='region' and aria-live='polite' and needs neither
        var chatFooter = windowLP.getElementsByClassName('lp_bottom_area')[0];
        if (chatFooter && chatFooter.hasAttribute('role')) {
            chatFooter.removeAttribute('role');
        }
        if (chatFooter && chatFooter.hasAttribute('aria-live')) {
            chatFooter.removeAttribute('aria-live');
        }

        // duplicate button info read aloud sometimes, so hide
        var actionBtnTitles = document.querySelectorAll('.lp_bottom_area .lp_title');
        if (actionBtnTitles) {
            for (var t = 0; t < actionBtnTitles.length; t++) {
                if (!actionBtnTitles[t].hasAttribute('aria-hidden')) {
                    actionBtnTitles[t].setAttribute('aria-hidden', 'true');
                }
            }
        }

        var actionClose = document.querySelector('[id*="LP_EndChatAction"]');
        if (actionClose) {
            actionClose.addEventListener('click', closeBtnEvent);
            actionClose.addEventListener('keydown', closeBtnEvent);
        }

        var actionClear = document.querySelector('[id*="LP_ForgetMeAction"]');
        if (actionClear) {
            actionClear.addEventListener('click', clearBtnEvent);
            actionClear.addEventListener('keydown', clearBtnEvent);
        }
    };

    // fixing roles and aria on dialog for screen readers
    var dialogAriaUpdate = function dialogAriaUpdate() {

        // fixing role alertdialog describedby and labeledby to be more accurate
        var dialogContainer = document.querySelector('.lp_dialog_container');
        if (dialogContainer && dialogContainer.hasAttribute('aria-labelledby')) {
            dialogContainer.removeAttribute('aria-labelledby');
            dialogContainer.removeAttribute('aria-describedby');
        }

        // help the dialog title get read by screen readers
        var dialogTitle = document.querySelector('.lp_dialog_container .lp_lpview_title');
        if (dialogTitle && dialogTitle.hasAttribute('role')) {
            dialogTitle.removeAttribute('role');
        }

        // Using below method for clear converstion button as the DOM for 'Yes','No' buttons gets added dynamically after clicking on close(x) button
        // 3180: [4824778][Chrome_NVDA][Live Person Chat - Clear History]NVDA narrating unnecessary Region information for 'No' button, when navigating using browse mode(down arrow).   
        var buttonsDomElement = document.getElementsByClassName('lp_buttons_area')[0];
        if (buttonsDomElement && buttonsDomElement.hasAttribute('role')) {
            buttonsDomElement.removeAttribute('role');
        }
    };

    // [4073962] [Edge_Narrator][Button Chat]: Narrator is not narrating the change of notification(connecting to connected customer information)
    // [4077215] [Edge_Narrator][Button Chat_Agent Message]: Using scan mode, narrator is not narrating the ‘send’ and ‘received’ message information in the button chat window
    var setAriaLiveAttributes = function setAriaLiveAttributes() {

        // change chat log from aria-live='assertive' which interrupts AT
        var chatLog = document.getElementsByClassName('lp_transcript_widget')[0];
        if (chatLog && chatLog.getAttribute('aria-live') == 'assertive') {
            chatLog.setAttribute('aria-live', 'polite');
            chatLog.setAttribute('aria-relevant', 'additions');
        }

        // remove extra unneeded aria-live
        var innerChatLog = document.querySelectorAll("div[data-lp-point='lines_area']")[0];
        if (innerChatLog && innerChatLog.hasAttribute('aria-live')) {
            innerChatLog.removeAttribute('aria-live');
        }

    };

    // set chat log aria atomic to false after the initial chat log is created for new chats
    var setAriaAtomic = function setAriaAtomic() {
        var chatLog = document.getElementsByClassName('lp_transcript_widget')[0];
        if (chatLog && chatLog.getAttribute('aria-atomic') == 'true') {
            chatLog.setAttribute('aria-atomic', 'false');
        }
    };

    // [4077175] Updating chat window min/max & send icons with proper aria labels
    // [4029454] Custom tooltips on tab/hover/focus
    // [4029454] Tool tips are not displayed for the ‘collapsed/expanded’ action button and ‘Send’ button
    // [5483489] [5483553] Action menu aria label text update        
    var setCustomTooltips = function setCustomTooltips() {

        // starting with styles for the tooltips we'll generate
        cssInjection('button.lp_ctooltip .lp_ctooltip_txt', 'visibility: hidden; position: absolute; bottom: 100%; right: 0; z-index: 5; opacity: 0; transition: opacity 0.3s;');
        cssInjection('button.lp_ctooltip .lp_ctooltip_txt.lp_ctooltip_left', 'left: 0; right: auto;');
        cssInjection('button.lp_ctooltip .lp_ctooltip_txt.lp_ctooltip_bottom', 'top: -2px; bottom: auto; right: 22px;');
        cssInjection('button.lp_ctooltip:hover .lp_ctooltip_txt, button:focus .lp_ctooltip_txt', 'visibility: visible; opacity: 1;'); 
        
        // check for custom tooltip CSS
        if (_config.value.cssFixes.customTooltips) {
            cssInjection('button.lp_ctooltip .lp_ctooltip_txt', _config.value.cssFixes.customTooltips)
        } 

        // [4077175] Updating chat window min/max & send icons with proper aria labels
        removeTitleAttr('lp_maximize');
        removeTitleAttr('lp_minimize');

        // [4029454] Custom tooltips on tab/hover/focus
        removeTitleAttr('lp_close');
        removeTitleAttr('lpview_form_textarea');

        // these classes are buttons that need custom tooltips
        var tooltipButtonsList = ['lp_close', 'lp_minimize', 'lp_maximize', 'lp_actions_button', 'lp_send_button'];

        // iterate through each button to add custom tooltips
        tooltipButtonsList.forEach(function (btn) {

            // grab the button elements that match the classes from the list and make a new object list
            var actionsButton = document.getElementsByClassName(btn);

            // grab the list, count, and make tooltips for each one
            for (var a = 0; a < actionsButton.length; a++) {

                // if the element doesn't already have the custom tooltip then make one
                if (!actionsButton[a].classList.contains('lp_ctooltip')) {

                    // add class to enable CSS custom tooltips styling and visibility
                    actionsButton[a].classList.add('lp_ctooltip');

                    // build the custom tooltip for each button in list
                    var spanTooltip = document.createElement('span');

                    // [4824784] fix: Buttons aria changes on icon images for when custom tooltips are in use
                    actionsButton[a].getElementsByTagName('img')[0].setAttribute('aria-hidden', 'true');

                    // check which button for associated tooltip styles and text
                    if (btn == 'lp_close') {
                        spanTooltip.textContent = _config.value.fixTextConfig.EndChatAction;
                        spanTooltip.setAttribute('class', 'lp_ctooltip_txt lp_ctooltip_bottom');

                        // [5483515] & [5483562]
                        actionsButton[a].addEventListener('keydown', function(event){
                            if (event.key == 'Escape') {
                                document.activeElement.blur();
                            }

                            // [5488790]
                            if (event.code == 'Enter' || event.code == 'Space') {
                                var confirmationDialogCheck = function confirmationDialogCheck() {
                                    setTimeout(function() {
                                        var confirmationDialog = document.getElementById('dialog_title');

                                        if (confirmationDialog) {
                                            confirmationDialog.setAttribute('aria-live', 'assertive');
                                            confirmationDialog.innerText = confirmationDialog.innerText + ' ';
                                        } else {
                                            confirmationDialogCheck();
                                        }
                                    }, 500);
                                }      

                                confirmationDialogCheck();
                            }
                        });

                        // [5488790]
                        actionsButton[a].addEventListener('click', function() {
                            var confirmationDialogCheck = function confirmationDialogCheck() {
                                setTimeout(function() {
                                    var confirmationDialog = document.getElementById('dialog_title');

                                    if (confirmationDialog) {
                                        confirmationDialog.setAttribute('aria-live', 'assertive');
                                        confirmationDialog.innerText = confirmationDialog.innerText + ' ';
                                    } else {
                                        confirmationDialogCheck();
                                    }
                                }, 500);
                            }    

                            confirmationDialogCheck();
                        });
                    } else if (btn == 'lp_minimize') {
                        spanTooltip.textContent = _config.value.fixTextConfig.ariaFixesChatMinBtn;
                        spanTooltip.setAttribute('class', 'lp_ctooltip_txt lp_ctooltip_bottom');

                        // [5483515] & [5483562]
                        actionsButton[a].addEventListener('keydown', function(event){
                            if (event.key == 'Escape') {
                                document.activeElement.blur();
                            }
                        });
                    } else if (btn == 'lp_maximize') {
                        spanTooltip.textContent = _config.value.fixTextConfig.ariaFixesChatMaxBtn;
                        spanTooltip.setAttribute('class', 'lp_ctooltip_txt lp_ctooltip_bottom');

                        // [5483515] & [5483562]
                        actionsButton[a].addEventListener('keydown', function(event){
                            if (event.key == 'Escape') {
                                document.activeElement.blur();
                            }
                        });
                    } else if (btn == 'lp_actions_button') {
                        spanTooltip.textContent = _config.value.fixTextConfig.ariaFixesActionExpand;
                        spanTooltip.setAttribute('class', 'lp_ctooltip_txt lp_ctooltip_left');
                        actionsButton[a].setAttribute('title','');
                        /* add a generic label for the action menu button for screen readers 
                            with expanded and collapsed already being read via aria-expanded attribute.
                            tooltip keeps text prompting to expand/collapse for sighted users. */
                        actionsButton[a].setAttribute('aria-label', _config.value.fixTextConfig.ariaFixesActionMenu);
                        actionsButton[a].addEventListener('keyup', updateActionMenuTooltip);
                        actionsButton[a].addEventListener('click', updateActionMenuTooltip);
                        actionsButton[a].addEventListener('keydown', removeTitles);
                        actionsButton[a].addEventListener('mouseover', removeTitles);

                        updateActionMenuTooltip('init');

                        actionsButton[a].addEventListener('keydown', function(event){
                            if (event.key == 'Escape') {
                                document.activeElement.blur();
                            }
                        });

                    } else if (btn == 'lp_send_button') {
                        spanTooltip.textContent = _config.value.fixTextConfig.ariaFixesChatSend;
                        spanTooltip.setAttribute('class', 'lp_ctooltip_txt');
                        actionsButton[a].setAttribute('title', '');
                        actionsButton[a].setAttribute('aria-label', _config.value.fixTextConfig.ariaFixesChatSend);
                        actionsButton[a].addEventListener('keydown', removeTitles);
                        actionsButton[a].addEventListener('mouseover', removeTitles);

                        actionsButton[a].addEventListener('keydown', function(event){
                            if (event.key == 'Escape') {
                                document.activeElement.blur();
                            }
                        });
                    }
                    
                    /* if the button has an aria-label then the custom tooltip doesn't need read out
                        BUT we do want the custom tooltip shown for sighted users */
                    if (actionsButton[a].hasAttribute('aria-label')) {
                        spanTooltip.setAttribute('aria-hidden', 'true');
                    }

                    // this inline style helps with IE
                    spanTooltip.setAttribute('style', 'position: absolute;');

                    // attach the custom tooltip to each button
                    actionsButton[a].appendChild(spanTooltip);
                }
            }
        });

        // event handler for the expand/collapse action menu
        function updateActionMenuTooltip(event) {
            // if enter key or click
            if (event.keyCode == 13 || event.type == 'click') {
                var actionMenuBtn = document.querySelector('#lpChat .lp_actions_button');
                //actionMenuBtn.setAttribute('aria-label', _config.value.fixTextConfig.ariaFixesActionMenu);

                if (actionMenuBtn.getAttribute('aria-expanded') == 'true') {
                    actionMenuBtn.getElementsByClassName('lp_ctooltip_txt')[0].textContent = _config.value.fixTextConfig.ariaFixesActionCollapse;

                    setTimeout(function() {
                        document.getElementsByClassName('lp_actions_button')[0].setAttribute('aria-label','Expanded action menu');
                        document.getElementsByClassName('lp_actions_button')[0].setAttribute('title','Expanded action menu');
                    }, 250);
                } else {
                    actionMenuBtn.getElementsByClassName('lp_ctooltip_txt')[0].textContent = _config.value.fixTextConfig.ariaFixesActionExpand;

                    setTimeout(function() {
                        document.getElementsByClassName('lp_actions_button')[0].setAttribute('aria-label','Collapsed action menu');
                        document.getElementsByClassName('lp_actions_button')[0].setAttribute('title','Collapsed action menu');
                    }, 250);
                }
            } else if (event == 'init') {
                var actionMenuBtn = document.querySelector('#lpChat .lp_actions_button');

                if (actionMenuBtn.getAttribute('aria-expanded') == 'true') {
                    setTimeout(function() {
                        document.getElementsByClassName('lp_actions_button')[0].setAttribute('aria-label','Expanded action menu');
                        document.getElementsByClassName('lp_actions_button')[0].setAttribute('title','Expanded action menu');
                    }, 250);
                } else {
                    setTimeout(function() {
                        document.getElementsByClassName('lp_actions_button')[0].setAttribute('aria-label','Collapsed action menu');
                        document.getElementsByClassName('lp_actions_button')[0].setAttribute('title','Collapsed action menu');
                    }, 250);
                }
            }
        }

        // removing title attributes since we have tooltips with that info
        function removeTitles() {
            var actionsBtn = document.getElementsByClassName('lp_actions_button')[0];
            if (actionsBtn) {
                actionsBtn.setAttribute('title', '');
            }
            var sendBtn = document.getElementsByClassName('lp_send_button')[0];
            if (sendBtn) {
                sendBtn.setAttribute('title', '');
            }
        }
        
    };

    // Fixes issue where alt attribute is not set for img tags
    // [4032987] Fix Alt attributes
    var addAltAttributesToImg = function addAltAttributesToImg() {
        setTimeout(function () {
            addAltAttribute('lp_add-attachment-action-icon', 'Add Attachment', _config.value.fixTextConfig.AddAttachmentAction);
            addAltAttribute('lp_mark_urgency-action-icon', _config.value.fixTextConfig.MarkUrgentAction);
            addAltAttribute('lp_print-transcript-action-icon', _config.value.fixTextConfig.PrintTranscriptAction);
            addAltAttribute('lp_mute-action-icon', 'Mute/Unmute', _config.value.fixTextConfig.MuteAction);
            addAltAttribute('lp_actions-forget-me-icon', 'Clear History', _config.value.fixTextConfig.ClearHistoryAction);
            addAltAttribute('lp_end-chat-action-icon', 'End Conversation', _config.value.fixTextConfig.EndChatAction);
        }, 3000);
    };

    // adding aria-labels to buttons for AT
    // fix for [4824784]
    var addAriaLabelToButtons = function addAriaLabelToButtons() {
        
        // close the conversation button needs aria-label set in config
        var closeBtn = document.getElementsByClassName('lp_close');
        for (var c = 0; c < closeBtn.length; c++) {
            if (!closeBtn[c].hasAttribute('aria-label')) {
                closeBtn[c].setAttribute('aria-label', _config.value.fixTextConfig.EndChatAction);
            }
        }

        // minimize the chat window button needs aria-label set in config
        var minBtn = document.getElementsByClassName('lp_minimize');
        for (var n = 0; n < minBtn.length; n++) {
            if (!minBtn[n].hasAttribute('aria-label')) {
                minBtn[n].setAttribute('aria-label', _config.value.fixTextConfig.ariaFixesChatMinBtn);
            }
        }

        // maximize the chat window button needs aria-label set in config
        var maxBtn = document.getElementsByClassName('lp_maximize');
        for (var x = 0; x < maxBtn.length; x++) {
            if (!maxBtn[x].hasAttribute('aria-label')) {
                maxBtn[x].setAttribute('aria-label', _config.value.fixTextConfig.ariaFixesChatMaxBtn);
            }
        }

    };

    // [4081012] After invoking the send button, there is loss of focus
    // [4029007] Focus is not in sequential order after pressing enter on the ‘No’ button
    // [4077167][Edge_Narrator][Contact Us]: Narrator focus is not moving to the triggered element after pressing enter on ‘X’ and ‘Close’ button using down arrow key.
    // [4076955][Edge_Narrator][Contact Us]: Focus is not moving to the triggered element after pressing enter on ‘X’ and ‘Close’ buttons.
    var setFocusToSequentialOrder = function setFocusToSequentialOrder() {

        document.getElementsByClassName('lp_close')[0].addEventListener('keydown', closeBtnEvent, false);
        document.getElementsByClassName('lp_close')[0].addEventListener('click', closeBtnEvent, false);
        document.getElementsByClassName('lp_close')[1].addEventListener('keydown', closeBtnEvent, false);
        document.getElementsByClassName('lp_close')[1].addEventListener('click', closeBtnEvent, false);

        var actionMenuBtn = document.getElementsByClassName('lp_actions_button')[0];
        if (actionMenuBtn) {
            actionMenuBtn.addEventListener('keydown', actionBtnEvent, false);
            actionMenuBtn.addEventListener('click', actionBtnEvent, false);
        }
        
        var sendBtn = document.getElementsByClassName('lp_send_button')[0];
        if (sendBtn) {
            sendBtn.addEventListener('keydown', sendBtnEvent, false);
            sendBtn.addEventListener('click', sendBtnEvent, false);
        }

    };

    // [4036547] Set tabindex order for individual controllers in chat window.
    var setTabIndexToChatWindow = function setTabIndexToChatWindow() {
        //var domList = ['lp_minimize', 'lp_close', 'lp_logo_link', 'lpview_form_textarea', 'lp_send_button', 'lp_actions_button'];
        var domList = ['lp_logo_link', 'lpview_form_textarea', 'lp_send_button', 'lp_actions_button'];
        setTimeout(function () {
            for (var i = 0; i < domList.length; i++) {
                var domObject = document.getElementsByClassName(domList[i]);
                for (var j = 0; j < domObject.length; j++) {
                    domObject[j].setAttribute('tabindex', '0');
                }
            }
        }, 2000);
    };

    // [4029073] Correct JAWS link Narration
    // [4073609] Logo alt and link aria updates
    var fixLinkNarrationForMSLogo = function fixLinkNarrationForMSLogo() {
        setTimeout(function () {
            var linkElement = document.getElementsByClassName('lp_logo_link')[0];
            if (linkElement) {
                linkElement.setAttribute('aria-label', _config.value.fixTextConfig.MicrosoftHomePage);
                addAltAttribute('lp_logo_image_wrapper', _config.value.fixTextConfig.MicrosoftLogo);
                // [4073609]
                linkElement.getElementsByClassName('lp_image')[0].setAttribute('aria-hidden', 'true');
            }
            var chatLogoLink = document.querySelector('.lp_logo_link.disableLinkClass'); // logo link if it's disabled
            if (chatLogoLink) {
                // When the logo link is disabled, add corresponding aria attribute
                chatLogoLink.setAttribute('aria-disabled', 'true');
            }
        }, 3000);
    };

    // Changing aria attributes on elements
    var ariaFixes = function ariaFixes() {

        // [4036793] Updating chat window input textarea with aria label
        var chatInput = document.getElementsByClassName('lpview_form_textarea')[0];
        if (chatInput) {
            chatInput.setAttribute('aria-label', _config.value.fixTextConfig.ariaFixesMessage);
            chatInput.setAttribute('title','');
            chatInput.setAttribute('aria-multiline', 'false');
        }

        // make sure action menu expand/collapse button's image is hidden from AT
        var actionMenuBtn = document.querySelector('[data-lp-point="actions_button"] img');
        if (actionMenuBtn) {
            if (actionMenuBtn && !actionMenuBtn.hasAttribute('aria-hidden')) {
                actionMenuBtn.setAttribute('aria-hidden','true');
            }
        }

            // make sure send button's image is hidden from AT
            var sendBtn = document.getElementsByClassName('lp_send_button')[0];
            if (sendBtn) {
                var sendBtnIcon = sendBtn.getElementsByClassName('lp_send-icon')[0];
                if (sendBtnIcon && !sendBtnIcon.hasAttribute('aria-hidden')) {
                    sendBtnIcon.setAttribute('aria-hidden','true');
                }
            }
            
        };

    // combined "Send" button events
    var sendBtnEvent = function sendBtnEvent(event) {
        // if tab key without shift key is presssed
        if (event.key == 'Tab' && !event.shiftKey) {
            // focus on the minimize button, which would be 'next' in chat window tab order
            document.getElementsByClassName('lp_minimize')[0].focus();
            event.preventDefault();
        } 
    };

    // combined "Action menu" button events
    var actionBtnEvent = function actionBtnEvent(event) {
        var actionsBtn = document.getElementsByClassName('lp_actions_button')[0];
        var sendBtn = document.getElementsByClassName('lp_send_button')[0];

        if (event.key == 'ArrowDown' && document.activeElement == actionsBtn || event.key == 'ArrowDown' && document.activeElement == actionsBtn) {
            event.preventDefault();

            setTimeout(function() {
                var firstActionElement = [document.getElementsByClassName('lp_action_file_input')[0], document.getElementById('LP_PrintTranscriptAction_1')]
                
                if (document.getElementById('a11y-transcriptPossibleMessages')) {
                    document.getElementById('a11y-transcriptPossibleMessages').remove();
                }

                if (firstActionElement[1]) {
                    firstActionElement = firstActionElement[1];
                } else {
                    firstActionElement = firstActionElement[0];
                }

                if (firstActionElement) {
                    firstActionElement.focus();
                }
            }, 250);
        }

        // if tab key is pressed without shift key being presssed
        if (event.key == 'Tab' && !event.shiftKey || event.key == 'ArrowDown' && !event.shiftKey) {
            var lastSibling = actionsBtn.previousElementSibling;
            // if there's a previous sibling to the action menu button, then the send button is next in tab order
            if (actionsBtn && sendBtn && lastSibling) {
                // if the send button is disabled then we don't want to tab to it
                
                if (sendBtn.hasAttribute('disabled', true)) {
                    // 5470634 & 5470959 Fixes 
                    // document.getElementsByClassName('lp_minimize')[0].focus();
                    // event.preventDefault();
                } 
            }
            
            // if the action menu is expanded then next tab is the first button in that menu
            if (actionsBtn && actionsBtn.getAttribute('aria-expanded') == 'true') {
                document.getElementsByClassName('lp_action_item')[0].focus();
                // event.preventDefault();
            } 
        }
    };

    // combined "End conversation" button events
    var closeBtnEvent = function closeBtnEvent() {

        // tell AT to wait while changes happen
        pauseAria();

        setTimeout(function() {
            // [CX/F004] update aria roles on 'are you sure you want to end conversation'
            if (_config.value.landmarkRoleChanges) {
                dialogAriaUpdate();
            }

            // if cancel button was triggered go back to focus on close conversation x button
            var cancelBtn = document.getElementsByClassName('lp_cancel_button')[0];
            var confirmBtn = document.getElementsByClassName('lp_confirm_button')[0];
            var closeBtn = document.getElementsByClassName('lp_close')[1];
            if (cancelBtn && closeBtn) {
                cancelBtn.addEventListener('keypress', endConvoNoEvent);
                cancelBtn.addEventListener('click', endConvoNoEvent);
            }
            if (confirmBtn && closeBtn) {
                confirmBtn.addEventListener('keypress', endConvoYesEvent);
                confirmBtn.addEventListener('click', endConvoYesEvent);
            }

            // tell AT to continue reading out info
            unpauseAria();

        }, 1000);

    };

    // combined "Clear History" button events
    var clearBtnEvent = function clearBtnEvent() {
        // [CX/F004] update aria roles on 'are you sure you want to end conversation'
        if (_config.value.landmarkRoleChanges) {
            dialogAriaUpdate();
        }
    };

    // combined events after "Are you sure you want to end the conversation?" "No" button is invoked
    var endConvoNoEvent = function endConvoNoEvent(e) {
        // if enter key pressed or btn clicked
        if (e.keyCode == 13 || e.type == 'click') {
            var focusTarget;
            var actionMenu = document.getElementsByClassName('lp_actions_button')[0];
            // which close button to focus on?
            if (actionMenu && actionMenu.getAttribute('aria-expanded') == "true") {
                var actionClose = document.querySelector('[id*="LP_EndChatAction"]');
                focusTarget = actionClose;
            } else {
                focusTarget = document.getElementsByClassName('lp_close')[1];
            }
            setTimeout(function () {
                focusTarget.focus();
                e.preventDefault();
            }, 1000);
        }
    };

    // combined events after "Are you sure you want to end the conversation?" "Yes" button is invoked
    var endConvoYesEvent = function endConvoYesEvent(e) {
        // if enter key pressed or btn clicked
        if (e.keyCode == 13 || e.type == 'click') {
            var focusTarget = document.getElementsByClassName('lpview_form_textarea')[0];
            setTimeout(function () {
                focusTarget.focus();
                e.preventDefault();
            }, 1000);
        }
    };

    // [CX/F001] - Action Menu ('+') Focus
    // [5470634] fix to make sure action menu items have keyboard focus order
    var fixActionMenuFocus = function fixActionMenuFocus() {
        setTimeout(function () {

            var actionMenuElement = document.querySelector('.lp_maximized .lp_location_bottom .lp_actions_button');
            var minBtnElement = document.querySelector('.lp_maximized .lp_minimize');

            // if the action menu is clicked/triggered we need an event to reset tab order inside
            if (actionMenuElement) {
                actionMenuElement.addEventListener('keydown', actionMenuReorder, true);
                actionMenuElement.addEventListener('click', actionMenuReorder, true);
            }

            function actionMenuReorder(e) {
                // on click, enter key (keycode 13), or space bar key (keycode 32)
                if (e.type == 'click' || e.keyCode == 13 || e.keyCode == 32) {
                    fixFocusOrderActionMenu();
                }

                // if tab is used without shift
                if ((!e.shiftKey) && e.keyCode == 9) {
                    var sendBtnElement = document.querySelector('.lp_maximized .lp_send_button');
                    var actionsBar = document.querySelector('.lp_maximized .lp_location_bottom .lp_actions_bar_container');
                    minBtnElement = document.querySelector('.lp_maximized .lp_minimize');

                    // if action menu is closed move focus to send or the next btn
                    if (sendBtnElement && actionsBar && actionsBar.getAttribute('aria-hidden') == 'true') {
                        // focus on send button unless disabled
                        if (sendBtnElement.hasAttribute('disabled')) {
                            minBtnElement.focus();
                            e.preventDefault();
                        } else {
                            sendBtnElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        document.getElementsByClassName('lp_action_items_wrapper')[0].firstChild.focus();
                    }
                }
            }

            function minBtnShift(e) {
                // if tab (keycode 9) is used with shift key, focus to be set in backwards order
                if ((e.shiftKey) && e.keyCode == 9) {
                    var sendBtnElement = document.querySelector('.lp_maximized .lp_send_button');
                    var actionsBar = document.querySelector('.lp_maximized .lp_location_bottom .lp_actions_bar_container');
                    minBtnElement = document.querySelector('.lp_maximized .lp_minimize');

                    if (sendBtnElement && actionsBar) {
                        // focus on send button unless disabled
                        if (sendBtnElement.hasAttribute('disabled')) {
                            actionMenuElement.focus();
                            e.preventDefault();
                        } else {
                            sendBtnElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            }

            // if shift tab from minimize window button then we need to set focus to action menu or send
            if (minBtnElement) {
                minBtnElement.addEventListener('keydown', minBtnShift, true);
            }

        }, 2500);
    };

    var fixFocusOrderActionMenu = function fixFocusOrderActionMenu() {
        //adding border to file Upload Btn, so as to get focus when tabbed through
        var fileUploadBtn = document.getElementById('LPfileUpload');

        if (fileUploadBtn) {
            fileUploadBtn.addEventListener('focus', function () {
                if (document.activeElement == fileUploadBtn) {
                    fileUploadBtn.parentNode.setAttribute('style', 'border: 1px dashed dimgrey;');
                }
            });

            fileUploadBtn.addEventListener('blur', function () {
                fileUploadBtn.parentNode.removeAttribute('style', 'border: 1px dashed dimgrey;');
            });
        }
        
        var actionMenuBtn = document.querySelector('.lp_maximized .lp_location_bottom .lp_actions_button');

        if (actionMenuBtn) {
            // empty array to be used for list of action menu items
            var actionItems = [];

            // fetching all the non-disabled action items and making a list of them
            var actionsBtnsList = document.querySelectorAll('.lp_maximized .lp_location_bottom .lp_action_item');

            for (var i = 0; i < actionsBtnsList.length; i++) {
                // remove any existing event listeners for the action menu buttons before adding new ones
                // actionsBtnsList[i].removeEventListener('keyup', actionBtnLastEvent, true);

                // skip any disabled buttons from tab order
                if (!actionsBtnsList[i].hasAttribute('disabled')) {
                    // Check to see if actionitem has an id and apply one if it doesn't.
                    if (actionsBtnsList[i].getAttribute('id') == null) {
                        var actionBtnId = actionsBtnsList[i].getAttribute('aria-label').replace('\n','')
                        actionsBtnsList[i].setAttribute('id', actionBtnId);
                    }
                    actionItems.push(actionsBtnsList[i].getAttribute('id'));
                }

                // Add event listner to tab or downarrow to next item
                actionsBtnsList[i].addEventListener('keyup', function(event) {
                    //if (i < actionsBtnsList.length - 1) {
                        if (event.key == 'ArrowDown') {
                            event.preventDefault();
                            if (this.nextSibling != null) {
                                this.nextSibling.focus();
                            } else {
                                // focus on action menu button
                                var actionMenuBtn = document.getElementsByClassName('lp_actions_button')[0];

                                if (actionMenuBtn) {
                                    actionMenuBtn.focus();
                                }
                            }
                        }
                    //}
                }, true)
            }

            //get the last action item and when it is tabbed, add focus to the Action Menu (+)
            var lastItem = actionItems.length > 0 ? actionItems[actionItems.length - 1] : undefined;
            
            if (lastItem) {
                document.getElementById(lastItem).addEventListener('keyup', actionBtnLastEvent, true); 
            }
        }
    }

    function actionBtnLastEvent(e) {
        // if tab is used without shift
        if ((!e.shiftKey) && e.keyCode == 9) {
            // focus on action menu button
            var actionMenuBtn = document.querySelector('#lpChat .lp_actions_button')[0];

            if (actionMenuBtn) {
                actionMenuBtn.focus();
                e.preventDefault();
            }
        }
    }

    // [CX/F003] - Action Menu ('+') Expand/Collapse Narration fix
    var fixActionMenuNarration = function fixActionMenuNarration() {
        setTimeout(function () {
            //fix Send Image Action Menu Icon Narration
            var sendImageActionElement = document.getElementById('LPfileUpload');
            if (sendImageActionElement && !sendImageActionElement.hasAttribute('aria-label')) {
                sendImageActionElement.setAttribute('aria-label', _config.value.fixTextConfig.AddAttachmentAction);
                sendImageActionElement.parentNode.removeAttribute('aria-label');
            }
        }, 3000);
    };

    // 40773899 - moving the action menu button to the other side of the textarea for discoverability by low/no vision users
    var moveActionMenu = function moveActionMenu() {

        var bottomArea = document.getElementsByClassName('lp_bottom_area')[0];
        if (bottomArea) {

            var actionButtonElement = bottomArea.getElementsByClassName('lp_actions_button')[0];
            var messageBox = bottomArea.getElementsByClassName('lp_input_area')[0];
            var firstChild = bottomArea.firstChild;

            // if the message textarea and action menu button exist AND the first child of the bottom area is the action menu, move the action menu button
            if (messageBox && actionButtonElement && firstChild.classList.contains('lp_actions_button')) {

                // change DOM order
                bottomArea.insertBefore(messageBox, actionButtonElement);

                // visually move the action menu botton icon since it's positioned absolute
                cssInjection('#lpChat .lp_main .lp_main_area .lp_location_bottom .lp_bottom_area', 'padding-left:16px !important; padding-right:67px;');
                cssInjection('#lpChat .lp_main .lp_main_area .lp_location_bottom .lp_actions_button', 'right:35px !important; left: auto !important;');
                cssInjection('#lpChat .lp_send_button', 'right:10px !important;');

                // put focus on textarea
                messageBox.getElementsByClassName('lpview_form_textarea')[0].focus();

                // change action menu custom tooltip position since we moved it
                var leftTooltip = actionButtonElement.getElementsByClassName('lp_ctooltip_left')[0];
                if (leftTooltip) {
                    leftTooltip.classList.remove('lp_ctooltip_left');
                }
            }
        }
    };

    // [4032826] submit button icon color contrast ratio by Angie
    var chatIconColorFixes = function chatIconColorFixes() {
        // the icons are images with too light of grey color, so we're 
        //     changing the contrast to meet accessibility requirements
        if (_config.value.cssFixes.chatIconColorFixes) {
            cssInjection('.lp_icon-dark', _config.value.cssFixes.chatIconColorFixes);
        } else {
            cssInjection('.lp_icon-dark', 'filter: contrast(200%)');
        }
    };

    // [4039773] Exit chat window 'yes' button color contrast ratio fix by Angela
    /* This can be better accomplished while styling in config options for clients instead of using this method
        Dark backgrounds should have white text, and light backgrounds should have dark text */
    var endChatBtnStyles = function endChatBtnStyles() {
        // if config styling is enabled use that
        if (_config.value.cssFixes.endChatBtnStyles) {
            cssInjection('#lpChat .lp_dialog_container .lp_buttons_area .lp_confirm_button', _config.value.cssFixes.endChatBtnStyles);
        }
    };

    // 3142: [4699548][Talk to an Expert]Focus indicator is not visible on the 'Privacy & cookies' link when navigated using keyboard key(Tab).
    var linkFocusStyle = function linkFocusStyle() {
        if (_config.value.cssFixes.linkFocusStyle) {
            cssInjection('#lpChat .lp_chat_line_wrapper .lp_chat_line .lp_title_text a:focus', _config.value.cssFixes.linkFocusStyle);
        } else {
            cssInjection('#lpChat .lp_chat_line_wrapper .lp_chat_line .lp_title_text a:focus','outline: #6A9FB1 solid 2px !important;'); 
        }
    };

    // [4934125] - High Contrast Black & White Modes in Windows - Angie
    var highContrastMode = function highContrastMode() {
        // build our selector for the button icons in the header
        var targetSelector = '.lp_header [class*="button-asset"]';
        // media query for Windows "High Contrast White"
        var fixCSS = '@media screen and (-ms-high-contrast: black-on-white) { ' + targetSelector + ' { filter: brightness(0) contrast(1) saturate(1.5); } }';
        // send it to the document so styles get applied
        cssBlockInjection(fixCSS);
    };

    // [4037083][IE11_JAWS][Button Chat_Agent Message]: Focus indicator is not completely visible[on four sides].
    var adjustChatActionButtonPosition = function adjustChatActionButtonPosition() {
        cssInjection('#lpChat .lp_actions_bar_container .lp_actions_bar .lp_action_items_wrapper, #lpChat .lp_actions_bar_container .lp_actions_bar .lp_action_placeholder_wrapper', 'top:1%; right:1%; left:1%; width:98%; height:98%');
    };

    //[4037975]: Screen reader NVDA is not narrating any information when the 'Pro-Active Invitation' window appears
    //[4080935][IE11_JAWS][Pro Active Invitation]: Screen reader JAWS is not narrating window information
    //[4081049][Safari_Voiceover][Pro Active Invitation]: VoiceOver is not narrating window information
    //[4080885][Chrome/JAWS][Pro-Active Invitation Window]: Screen reader JAWS is not narrating window information
    //[4043446][IE11_JAWS][Proactive Invitation Chat]: JAWS focus is not moving to the multiple text which are in 'Proactive Invitation Chat' window.
    var proActiveCleanup = function proActiveCleanup() {

        // delay to wait for DOM to load
        setTimeout(function() {
            
            // get the container that has the same class name as the pro-active UI
            var proActive = document.getElementsByClassName('LPMcontainer')[0];
            
            // if the container has the same attribute as the pro-active chat invitation UI then this is the one we want
            if (proActive && proActive.hasAttribute('role') == 'alert') {

                // pause the aria-live area
                proActive.setAttribute('aria-busy','true');

                /* Because of its intrusive nature, the alert role must be used sparingly and only in situations where 
                the user's immediate attention is required. Dynamic changes that are less urgent should use a less 
                aggressive method, such as aria-live='polite' or other live region roles. 
                https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Alert_Role */
                if (proActive.getAttribute('aria-live') == 'assertive') {
                    proActive.setAttribute('aria-atomic', 'false');
                    proActive.setAttribute('aria-live', 'off');
                }

                // unpause aria-live updates
                proActive.setAttribute('aria-busy','false');

            }

        }, 1000);

    };

    // [4045809][IE11_JAWS][Contact Us]
    // [4077182][Edge_Narrator][Contact Us]: Narrator is not narrating proper 'Contact us' window information
    var offlineChatAria = function offlineChatAria() {

        // delay to wait for DOM to load
        setTimeout(function() {

            var surveyContainer = document.getElementsByClassName('lp_survey_container')[0];
            if (surveyContainer) {

                // role region is unneccessary
                if (surveyContainer.hasAttribute('role')) {
                    surveyContainer.removeAttribute('role');
                }

                // tabindex needs removed since it's on a non-interactive container (contents inside need tab order, not container)
                if (surveyContainer.hasAttribute('tabindex')) {
                    surveyContainer.removeAttribute('tabindex');
                }
                
                // replacing aria-label (which may get repeated by AT) to point to title/heading for dialog
                if (surveyContainer.hasAttribute('aria-label')) {
                    surveyContainer.removeAttribute('aria-label');
                    surveyContainer.setAttribute('aria-labelledby','lp_survey_header_title');
                }
                var surveyHeader = surveyContainer.querySelector('.lp_lpview_survey_header .lp_header_text');
                if (surveyHeader && !surveyHeader.hasAttribute('id')) {
                    surveyHeader.setAttribute('id','lp_survey_header_title');
                }

            }

            // since chat window is a dialog, we need role='document' tabindex='0' on lp_survey_header_area for title/heading inside
            var surveyView = surveyContainer.getElementsByClassName('lp_survey_header_area')[0];
            if (surveyView) {
                // role region is unneccessary
                if (!surveyView.hasAttribute('role')) {
                    surveyView.setAttribute('tabindex','0');
                }
            }
            
        }, 2000);

    };

    // [4040278][4032855] alert role on 'Agent is typing' is causing interruptions
    var removeAgentDomRole = function removeAgentDomRole() {
        var agentDomElement = document.getElementsByClassName('lp_lpview_agent_is_typing')[0];
        if (agentDomElement && agentDomElement.hasAttribute('role')) {
            agentDomElement.removeAttribute('role');    
        }
    };

    // 3138: [4694378][Talk to an Expert]Invalid aria-describedby value="dialogFlyoutTextExample5" is provided for the chat window.
    var replaceExpertFlyoutAria = function replaceExpertFlyoutAria() {
        setTimeout(function () {
            // find the element with invalid aria value
            var domElement = document.getElementById('lp-iframe-container');
            // check to see if element exists AND has attr/value combo we want to change
            if (domElement && domElement.getAttribute('aria-describedby') == 'dialogFlyoutTextExample5') {
                // find a better value from the button that triggers the chat session
                var sourceElement = document.getElementById('top-multiflyout-button');
                // if this element exists then use it as aria value. otherwise, remove aria attribute.
                if (sourceElement) {
                    domElement.setAttribute('aria-describedby', 'top-multiflyout-button');
                } else {
                    domElement.removeAttribute('aria-describedby');
                }
            }
        }, 2000);
    };

    // 3052: [ISS00021][Edge-Narrator][Pro-active Invitation window]: Aria-Label of buttons is not descriptive enough.
    // 3066: [ISS00035][Firefox-NVDA][Pro-active Invitation window]: Aria-Label of buttons is not descriptive enough.
    var changeCarouselButtonsArialabel = function changeCarouselButtonsArialabel() {
        setTimeout(function () {
            var carousel = document.querySelectorAll('.lp-json-pollock-layout-carousel .lp-json-pollock-layout .lp-json-pollock-layout')
            if (carousel.length == 0) {
                changeCarouselButtonsArialabel();
            } else {
                for (var i = 0; i < carousel.length; i++) {
                    var buttons = carousel[i].getElementsByClassName('lp-json-pollock-element-button');
                    var buttonText = carousel[i].getElementsByClassName('lp-json-pollock-element-text')[0];

                // Check for this element existin before we go on as we were running into issues with certain carousels not having it.
                if (buttonText) {
                    buttonText = buttonText.childNodes[0].innerHTML;

                    for (var j = 0; j < buttons.length; j++) {
                        if (buttons[j].childNodes[0].getAttribute('aria-label').indexOf(buttonText) == -1) {
                            buttons[j].childNodes[0].setAttribute('aria-label', buttons[j].childNodes[0].getAttribute('aria-label') + ' ' + buttonText);
                        } 
                    }
                }
            }
        }
        }, 2000);
    };

    // 3049: [ISS00018][Edge-Narrator][Pro-Active Invitation Window]: Meaningful alt-attribute should be given for images.
    var addAltToCarouselsImages = function addAltToCarouselsImages() {
        setTimeout(function () {
            var imageParent = document.getElementsByClassName('lp-json-pollock-element-image');
            if (imageParent.length == 0) {
                addAltToCarouselsImages();
            } else {
                for (var i = 0; i < imageParent.length; i++) {
                    var imgElement = imageParent[i].childNodes[0];
                    if (imgElement && imageParent[i].nextSibling) {
                        if(imageParent[i].nextSibling.childNodes[0]) {
                        imgElement.setAttribute('alt', imageParent[i].nextSibling.childNodes[0].getAttribute('aria-label'));
                        imgElement.parentNode.setAttribute('aria-label', imageParent[i].nextSibling.childNodes[0].getAttribute('aria-label'));
                    }
                }
            }
        }
        }, 2000);
    }

    // 3046: [ISS00016][Edge- narrator][Button Chat_Agent Message]: Tooltips are shown for message options.
    var removeTitleForOptionMessages = function removeTitleForOptionMessages() {
        setTimeout(function () {
            var optionsMessages = document.getElementsByClassName('lp-json-pollock-element-button');
            if (optionsMessages.length == 0) {
                removeTitleForOptionMessages();
            } else {
                for (var i = 0; i < optionsMessages.length; i++) {
                    optionsMessages[i].childNodes[0].removeAttribute('title');
                }
            }
        }, 2000);
    };

    // 3041: [ISS00011][Edge- narrator][Button Chat_Agent Message]: Tooltips are shown for message options.
    var removeTitleForQuickReplies = function removeTitleForQuickReplies() {
        setTimeout(function () {
            var quickReplies = document.getElementsByClassName('chips-row');
            if (quickReplies.length == 0) {
                removeTitleForQuickReplies();
            } else {
                for (var i = 0; i < quickReplies.length; i++) {
                    for (var j = 0; j < quickReplies[i].childNodes.length; j++) {
                        quickReplies[i].childNodes[j].removeAttribute('title');
                    }
                }
            }
        }, 2000);
    };
    
    // ISS00053 sent/received message read twice by AT
    var removeTitleAttrLines = function removeTitleAttrLines() {

        var selectors = ["lp_time", "lp_line_state"];
        for (var s = 0; s < selectors.length; s++) {
            var lines = document.querySelectorAll('.lp_transcript_widget .' + selectors[s] + '[title]');
            for (var i = 0; i < lines.length; i++) {
                lines[i].removeAttribute('title');
            }
        }
    };

    // MAS [5484157],[5489087] Remove close and minimize tabIndex attributes
    // [5483497] Add aria label, remove alt text
    var removeHeaderButtonTabIndex = function removeHeaderButtonTabIndex() {
        setTimeout(function() {
            var headerMinimizeElements = document.getElementsByClassName('lp_minimize');
            var headerCloseElements = document.getElementsByClassName('lp_close');
        
            for (i = 0; i < headerMinimizeElements.length; i++) {
                headerMinimizeElements[i].removeAttribute('tabindex');
                headerMinimizeElements[i].setAttribute('aria-label', lpTag.taglets.ada_enhancements_4_1.inspect().value.fixTextConfig.ariaFixesChatMinBtn);
                headerMinimizeElements[i].firstChild.firstElementChild.setAttribute('title','');
            }
            
            for (i = 0; i < headerCloseElements.length; i++) {
                headerCloseElements[i].removeAttribute('tabindex');
                headerCloseElements[i].setAttribute('aria-label', lpTag.taglets.ada_enhancements_4_1.inspect().value.fixTextConfig.EndChatAction);
                headerCloseElements[i].firstChild.firstElementChild.setAttribute('title','');
            }
        }, 5000);
    }

    // [5476817] Voiceover wasn't announcing the header so we have it update itself onload
    var announceHeader = function announceHeader() {
        setTimeout(function() {
            var maximizedHeaderText = document.getElementsByClassName('lpc_maximized-header__text')[0];
            
            if (maximizedHeaderText && maximizedHeaderText.innerText) {
                document.getElementsByClassName('lpc_maximized-header__text')[0].innerText = document.getElementsByClassName('lpc_maximized-header__text')[0].innerText + ' ';
            }
        }, 5000)
    }

    // method to pause AT while we make changes
    var pauseAria = function pauseAria() {
        var pauseContainer = document.getElementsByClassName('lp_transcript_widget')[0];
        if (pauseContainer) { 
            pauseContainer.setAttribute('aria-busy', 'true');
        }
    }

    // method to unpause AT after we make changes
    var unpauseAria = function unpauseAria() {
        setTimeout(function () {
            var unpauseContainer = document.getElementsByClassName('lp_transcript_widget')[0];
            if (unpauseContainer) { 
                unpauseContainer.removeAttribute('aria-busy');
            }
        }, 1000);
    };

    lpTag.hooks.push({
        
        // 3184: [4824812][Chrome_NVDA][Live Person Chat- Message Us]NVDA focus is getting struck after invoking suggestion buttons present in Chat area, While navigating using browse mode.
        // This hook gets triggered after visitor sends the message and before it is received by the server
        name: "BEFORE_SEND_VISITOR_LINE",
        callback: function (options) {
            // focusing back to text area after sending message , 
            document.getElementsByClassName('lpview_form_textarea')[0].focus();
            return options;
        }

    });

    // This hook will get trigggered after every message is sent or received.
    lpTag.hooks.push({
        name: "AFTER_GET_LINES",
        callback: function (options) {
            options.data.lines.forEach(function(line){                
                lastMessageType = line.text.type;
            });

            // ISS00053
            if (_config.value.removeTitleAttrLines) {
                removeTitleAttrLines();
            }

            // ISS00021 ISS00035
            if (_config.value.changeCarouselButtonsArialabel) {
                // calling this method here as we need to update the aria-label of the new received carousel messages
                changeCarouselButtonsArialabel();
            }

            // ISS00018
            if (_config.value.addAltToCarouselsImages) {
                addAltToCarouselsImages();
            }

            // ISS00016
            if (_config.value.removeTitleForOptionMessages) {
                removeTitleForOptionMessages();
            }

            // ISS00011
            if (_config.value.removeTitleForQuickReplies) {
                removeTitleForQuickReplies();
            }

            return options;
        }
    });

    // chatWindowFixes is run once a state from chat api is passed (the window has been loaded)
    var chatWindowFixes = function chatWindowFixes(state) {

        // [CX/F004]
        if (_config.value.landmarkRoleChanges) {
            landmarkRoleChanges();
        }
        
        // [4073962] [4077215]
        if (_config.value.setAriaLiveAttributes) {
            setAriaLiveAttributes();
        }

        // 4029454
        if (_config.value.setCustomTooltips) {
            setCustomTooltips();
        }

        // [4032987]
        if (_config.value.addAltAttributesToImg) {
            addAltAttributesToImg();
        }

        // [4824784]
        if (_config.value.addAriaLabelToButtons) {
            addAriaLabelToButtons();
        }

        // [4081012][4029007][4077167][4076955]    
        if (_config.value.setFocusToSequentialOrder) {
            setFocusToSequentialOrder();
        }

        // [4029073] [4073609]
        if (_config.value.fixLinkNarrationForMSLogo) {
            fixLinkNarrationForMSLogo();
        }

        // [4029454] [4077175]
        if (_config.value.ariaFixes) {
            ariaFixes();
        }

        // [CX/F001]
        if (_config.value.fixActionMenuFocus) {
            fixActionMenuFocus();
        }

        // [CX/F003]
        if (_config.value.fixActionMenuNarration) {
            fixActionMenuNarration();
        }

        // 40773899
        if (_config.value.moveActionMenu) {
            moveActionMenu();
        }

        // [4032826]
        if (_config.value.chatIconColorFixes) {
            chatIconColorFixes();
        }

        // [4039773]
        if (_config.value.endChatBtnStyles) {
            endChatBtnStyles();
        }

        // 4699548
        if (_config.value.linkFocusStyle) {
            linkFocusStyle();
        }

        // [CX/F001]
        if (_config.value.fixActionMenuFocus) {
            fixActionMenuFocus();
        }

        // [4934125]
        if (_config.value.highContrastMode) {
            highContrastMode();
        }

        // [4039773]
        if (_config.value.adjustChatActionButtonPosition) {
            adjustChatActionButtonPosition();
        }

        // [4040278][4032855]
        if (_config.value.removeAgentDomRole) {
        removeAgentDomRole();
        }

        // 3138: [4694378]
        if (_config.value.replaceExpertFlyoutAria) {
            replaceExpertFlyoutAria();
        }

        // ISS00021 ISS00035
        if (_config.value.changeCarouselButtonsArialabel) {
            changeCarouselButtonsArialabel();
        }

        // ISS00053
        if (_config.value.removeTitleAttrLines) {
            removeTitleAttrLines();
        }

        // [5484157],[5489087] Remove button tabindex's
        // [5483497] Add aria label and remove alt text
        if (_config.value.removeHeaderButtonTabIndex) {
            removeHeaderButtonTabIndex();
        }

        // [5476817] Voiceover wasn't announcing the header so we have it update itself onload
        if (_config.value.announceHeader) {
            announceHeader();
        }

        _isOffline = false;

        // Here we run through the possible states that could have been passed into chatWindowFixes and run the fix that requires that state.
        switch (state) {
            case 'waiting':
                // [4036547]
                if (_config.value.setTabIndexToChatWindow) {
                    setTabIndexToChatWindow();
                }
                // [4040278][4032855]
                if (_config.value.removeAgentDomRole) {
                    removeAgentDomRole();
                }
                break;
            case 'chatting':
                // [4073962] [4077215]
                if (_config.value.setAriaLiveAttributes) {
                setAriaAtomic();
                }
                // [4036547]
                if (_config.value.setTabIndexToChatWindow) {
                    setTabIndexToChatWindow();
                }
                // [4040278][4032855]
                if (_config.value.removeAgentDomRole) {
                    removeAgentDomRole();
                }
                break;
            case 'interactive':
                // [4036547]
                if (_config.value.setTabIndexToChatWindow) {
                    setTabIndexToChatWindow();
                }
                // [4040278][4032855]
                if (_config.value.removeAgentDomRole) {
                    removeAgentDomRole();
                }
                break;
            case 'offline':
                _isOffline = true;
                // [4045809][4077182]
                if (_config.value.offlineChatAria) {
                    offlineChatAria();
                }
                break;
            default:
                break;
        }
    };

    /* The reloadFix solves the issue where when reloading the page events don't fire again.  
        For instance if you're in a chat the connected event doesn't fire again. */
    var reloadFix = function reloadFix() {
        // We make sure that lpChat exists (chat window exists) and that the api hasn't run
        if (document.getElementById('lpChat') !== null) {

            // [CX/F004]
            // [5488903] & [5488918]
            if (_config.value.landmarkRoleChanges) {
                landmarkRoleChanges();
            }
        
            // [4073962] [4077215]
            if (_config.value.setAriaLiveAttributes) {
                setAriaLiveAttributes();
                setAriaAtomic();
            }

            // 4029454
            if (_config.value.setCustomTooltips) {
                setCustomTooltips();
            }

            // [4032987]
            if (_config.value.addAltAttributesToImg) {
                addAltAttributesToImg();
            }

            // [4824784]
            if (_config.value.addAriaLabelToButtons) {
                addAriaLabelToButtons();
            }

            // [4081012][4029007][4077167][4076955]    
            if (_config.value.setFocusToSequentialOrder) {
                setFocusToSequentialOrder();
            }

            // [4036547]
            if (_config.value.setTabIndexToChatWindow) {
                setTabIndexToChatWindow();
            }

            // [4029073] [4073609]
            if (_config.value.fixLinkNarrationForMSLogo) {
                fixLinkNarrationForMSLogo();
            }

            // [4029454] [4077175]
            if (_config.value.ariaFixes) {
                ariaFixes();
            }

            // [CX/F001]
            if (_config.value.fixActionMenuFocus) {
                fixActionMenuFocus();
            }

            // [CX/F003]
            if (_config.value.fixActionMenuNarration) {
                fixActionMenuNarration();
            }

            // 40773899
            if (_config.value.moveActionMenu) {
                moveActionMenu();
            }

            // 4699548
            if (_config.value.linkFocusStyle) {
                linkFocusStyle();
            }

            // [4934125]
            if (_config.value.highContrastMode) {
                highContrastMode();
            }
            
            // [4040278][4032855]
            if (_config.value.removeAgentDomRole) {
                removeAgentDomRole();
            }
            
            // 3138: [4694378]
            if (_config.value.replaceExpertFlyoutAria) {
                replaceExpertFlyoutAria();
            }

            // ISS00021 ISS00035
            if (_config.value.changeCarouselButtonsArialabel) {
                changeCarouselButtonsArialabel();
            }

            // ISS00053
            if (_config.value.removeTitleAttrLines) {
                removeTitleAttrLines();
            }

            // [5476817] Voiceover wasn't announcing the header so we have it update itself onload
            if (_config.value.announceHeader) {
                announceHeader();
            }

        }
    };

    var _ada_enhancements_4_1 = function _ada_enhancements_4_1() {

        // trigger fixes when the chat window is reloaded
        reloadFix();

        // Binding to ChatAPIV3 events
        if (lpTag.events) {
            lpTag.events.bind('ChatAPIV3', 'state', chatWindowFixes);
        }

        // 4037975
        if (_config.value.proActiveCleanup) {
            proActiveCleanup();
        }

    };

    /*****************PUBLIC METHODS *****************************/
    function inspect() {
        return _config;
    }
    function start() {
        if (_config.validConfig) {
            _ada_enhancements_4_1();

            return true;
        } else {
            return false;
        }
    }

    return {
        v: v,
        name: _name,
        init: init,
        start: start,
        includes: [
            {
                name: 'lp_global_utils'
            }
        ],
        inspect: inspect
    };
})();

if (sectionCheck() == 'office365-leadgen-ar-ww' || sectionCheck() == 'microsoft365-leadgen-ar-ww' || sectionCheck() == 'office365-leadgen-en-za' || sectionCheck() == 'microsoft365-leadgen-en-za' || sectionCheck() == 'microsoft365-leadgen-en-ww' || sectionCheck() == 'office365-leadgen-en-gb' || sectionCheck() == 'office365-leadgen-pl-pl' || sectionCheck() == 'microsoft365-leadgen-pl-pl' || sectionCheck() == 'microsoft365-leadgen-en-gb' || sectionCheck() == 'microsoft365-leadgen-nb-no' || sectionCheck() == 'office365-leadgen-nb-no' || sectionCheck() == 'office365-leadgen-en-ww' || sectionCheck() == 'microsoft365-leadgen-en-in' || sectionCheck() == 'office365-leadgen-en-ie' || sectionCheck() == 'microsoft365-leadgen-fi-fi' || sectionCheck() == 'office365-leadgen-fi-fi' || sectionCheck() == 'microsoft365-leadgen-da-dk' || sectionCheck() == 'office365-leadgen-da-dk' || sectionCheck() == 'microsoft365-leadgen-en-ie' || sectionCheck() == 'office365-leadgen-ru-ru' || sectionCheck() == 'microsoft365-leadgen-ru-ru' || sectionCheck() == 'office365-leadgen-en-ca' || sectionCheck() == 'microsoft365-leadgen-en-ca' || sectionCheck() == 'office365-leadgen-en-us' || sectionCheck() == 'office365-leadgen-en-au' || sectionCheck() == 'office365-leadgen-id-id' || sectionCheck() == 'office365-leadgen-en-my' || sectionCheck() == 'office365-leadgen-en-nz' || sectionCheck() == 'office365-leadgen-en-sg' || sectionCheck() == 'office365-leadgen-zh-tw' || sectionCheck() == 'office365-leadgen-vi-vn' || sectionCheck() == 'office365-leadgen-th-th' || sectionCheck() == 'office365-leadgen-de-at' || sectionCheck() == 'office365-leadgen-de-ch' || sectionCheck() == 'office365-leadgen-de-de' || sectionCheck() == 'office365-leadgen-nl-be' || sectionCheck() == 'office365-leadgen-fr-be' || sectionCheck() == 'office365-leadgen-fr-ca' || sectionCheck() == 'office365-leadgen-fr-fr' || sectionCheck() == 'office365-leadgen-fr-ch' || sectionCheck() == 'office365-leadgen-it-it' || sectionCheck() == 'office365-leadgen-nl-nl' || sectionCheck() == 'office365-leadgen-pt-pt' || sectionCheck() == 'office365-leadgen-es-es' || sectionCheck() == 'office365-leadgen-sv-se' || sectionCheck() == 'office365-leadgen-pt-br' || sectionCheck() == 'office365-leadgen-es-cl' || sectionCheck() == 'office365-leadgen-es-co' || sectionCheck() == 'office365-leadgen-es-ww' || sectionCheck() == 'office365-leadgen-es-mx' || sectionCheck() == 'office365-leadgen-zh-cn' || sectionCheck() == 'office365-leadgen-zh-hk' || sectionCheck() =='office365-leadgen-zh-cn-local' || sectionCheck() == 'office365-leadgen-ja-jp' || sectionCheck() == 'office365-leadgen-ko-kr' || sectionCheck() == 'office365-leadgen-cs-cz' || sectionCheck() == 'office365-leadgen-he-il' || sectionCheck() == 'office365-leadgen-sk-sk' || sectionCheck() == 'office365-leadgen-tr-tr' || sectionCheck() == 'office365-leadgen-en-in' || sectionCheck() == 'store-office-sales-en-us' || sectionCheck() == 'store-office-sales-en-in' || sectionCheck() == 'store-office-sales-en-gb' || sectionCheck() == 'store-office-sales-en-au' || sectionCheck() == 'store-office-sales-en-nz' || sectionCheck() == 'store-office-sales-en-za' || sectionCheck() == 'office365-leadgen-hu-hu') {
    window.lpTag.events.bind('LP_OFFERS', 'OFFER_IMPRESSION', function(data) {
        if (data.engagementType == 1) {
            setTimeout(function(){
                var element = document.getElementsByClassName('chatContainer')[0];
            
                element.addEventListener('click', function(clickedElement) {
                    if (clickedElement.target.id == 'chatEngagement' && lpTag.sdes.get().lead == undefined) {
                        window.lpTag.sdes.push({
                            type: 'lead',
                            lead: {
                                topic: 'Office365'
                            }
                        });
                    }
    
                    element.remove();
                }, false);
            },500)
        }
    });
}

if (sectionCheck() == 'dynamics-leadgen-en-ca' || sectionCheck() == 'dynamics-leadgen-en-us' || sectionCheck() == 'dynamics-leadgen-en-au' || sectionCheck() == 'dynamics-leadgen-en-nz' || sectionCheck() == 'dynamics-leadgen-de-ch' || sectionCheck() == 'dynamics-leadgen-de-de' || sectionCheck() == 'dynamics-leadgen-fr-fr' || sectionCheck() == 'dynamics-leadgen-fr-ch' || sectionCheck() == 'dynamics-leadgen-da-dk' || sectionCheck() == 'dynamics-leadgen-it-it' || sectionCheck() == 'dynamics-leadgen-nl-nl' || sectionCheck() == 'dynamics-leadgen-ru-ru' || sectionCheck() == 'dynamics-leadgen-es-es' || sectionCheck() == 'dynamics-leadgen-sv-se' || sectionCheck() == 'dynamics-leadgen-en-gb' || sectionCheck() == 'dynamics-leadgen-pt-br' || sectionCheck() == 'dynamics-leadgen-es-mx' || sectionCheck() == 'dynamics-leadgen-zh-cn' || sectionCheck() == 'dynamics-leadgen-ja-jp' || sectionCheck() == 'dynamics-leadgen-en-in') {
    window.lpTag.events.bind('LP_OFFERS', 'OFFER_IMPRESSION', function(data) {
        if (data.engagementType == 1) {
            setTimeout(function(){
                var element = document.getElementsByClassName('chatContainer')[0];
            
                element.addEventListener('click', function(clickedElement) {
                    if (clickedElement.target.id == 'chatEngagement' && lpTag.sdes.get().lead == undefined) {
                        window.lpTag.sdes.push({
                            type: 'lead',
                            lead: {
                                topic: 'Dynamics'
                            }
                        });
                    }
    
                    element.remove();
                }, false);
            },500)
        }
    });
} 

if (sectionCheck() == 'cloudplatform-leadgen-en-us-education' || sectionCheck() == 'education-marcom-en-au') {
    window.lpTag.events.bind('LP_OFFERS', 'OFFER_IMPRESSION', function(data) {
        if (data.engagementType == 1) {
            setTimeout(function(){
                var element = document.getElementsByClassName('chatContainer');
                
                if (element[1] != undefined) {
                    element = element[1];
                } else {
                    element = element[0];
                }
            
                element.addEventListener('click', function(clickedElement) {
                    if (clickedElement.target.id == 'chatEngagement' && lpTag.sdes.get().lead == undefined) {
                        window.lpTag.sdes.push({
                            type: 'lead',
                            lead: {
                                topic: 'Education'
                            }
                        });
                    }
    
                    element.remove();
                }, false);
            },750)
        }
    });
}

if (sectionCheck() == 'powerapps-presales-en-us') {
    window.lpTag.events.bind('LP_OFFERS', 'OFFER_IMPRESSION', function(data) {
        if (data.engagementType == 1) {
            setTimeout(function(){
                var element = document.getElementsByClassName('chatContainer');
                
                if (element[1] != undefined) {
                    element = element[1];
                } else {
                    element = element[0];
                }
            
                element.addEventListener('click', function(clickedElement) {
                    if (clickedElement.target.id == 'chatEngagement' && lpTag.sdes.get().lead == undefined) {
                        window.lpTag.sdes.push({
                            type: 'lead',
                            lead: {
                                topic: 'PowerApps'
                            }
                        });
                    }
    
                    element.remove();
                }, false);
            },750)
        }
    });
}

if (sectionCheck() == 'cloudplatform-leadgen-en-us-sqlserver' || sectionCheck() == 'cloudplatform-leadgen-en-us-windowsserver' || sectionCheck() == 'cloudplatform-leadgen-en-us-visualstudio' || sectionCheck() == 'education-marcom-en-us') {
    window.lpTag.events.bind('LP_OFFERS', 'OFFER_IMPRESSION', function(data) {
        if (data.engagementType == 1) {
            setTimeout(function(){
                var element = document.getElementsByClassName('chatContainer');
                
                if (element[1] != undefined) {
                    element = element[1];
                } else {
                    element = element[0];
                }

                var topic;
                switch (lpTag.section) {
                    case 'cloudplatform-leadgen-en-us-sqlserver':
                        topic = 'SQLServer';
                        break;

                    
                    case 'cloudplatform-leadgen-en-us-windowsserver':
                        topic = 'WindowsServer';
                        break;

                    
                    case 'cloudplatform-leadgen-en-us-visualstudio':
                        topic = 'VisualStudio';
                        break;

                    case 'education-marcom-en-us':
                        topic = 'Education';
                        break;
                
                    default:
                        break;
                }
            
                element.addEventListener('click', function(clickedElement) {
                    if (clickedElement.target.id == 'chatEngagement' && lpTag.sdes.get().lead == undefined) {
                        window.lpTag.sdes.push({
                            type: 'lead',
                            lead: {
                                topic: topic
                            }
                        });
                    }
    
                    element.remove();
                }, false);
            },750)
        }
    });
}

if (sectionCheck() == 'microsoft365-leadgen-en-us') {
    window.lpTag.events.bind('LP_OFFERS', 'OFFER_IMPRESSION', function(data) {
        if (data.engagementType == 1) {
            setTimeout(function(){
                var element = document.getElementsByClassName('chatContainer')[0];
            
                element.addEventListener('click', function(clickedElement) {
                    if (clickedElement.target.id == 'chatEngagement' && lpTag.sdes.get().lead == undefined) {
                        window.lpTag.sdes.push({
                            type: 'lead',
                            lead: {
                                topic: 'Microsoft365'
                            }
                        });
                    }
    
                    element.remove();
                }, false);
            },500)
        }
    });
}

if (sectionCheck() == 'azure-leadgen-en-gb' || sectionCheck() == 'azure-leadgen-en-us') {
    window.lpTag.events.bind('LP_OFFERS', 'OFFER_IMPRESSION', function(data) {
        if (data.engagementType == 1) {
            setTimeout(function() {
                var element = document.getElementsByClassName('chatContainer')[0];
            
                element.addEventListener('click', function(clickedElement) {
                    if (clickedElement.target.id == 'chatEngagement' && lpTag.sdes.get().lead == undefined) {
                        window.lpTag.sdes.push({
                            type: 'lead',
                            lead: {
                                topic: 'Azure'
                            }
                        });
                    }
    
                    element.remove();
                }, false);
            },500)
        }
    });
}

setTimeout(function () {
    var landmarkChatLabel, ariaFixesChatMaxBtn, ariaFixesChatMinBtn, ariaFixesActionMenu, ariaFixesActionExpand, ariaFixesActionCollapse, EndChatAction, ariaFixesChatSend, MarkUrgentAction, PrintTranscriptAction, MuteAction, ClearHistoryAction, MicrosoftLogo, MicrosoftHomePage, ariaFixesMessage, AddAttachmentAction;

    switch (sectionCheck()) {
        case 'store-sales-es-us':
        case 'store-sales-es-es':
        case 'store-sales-es-ww':
        case 'store-sales-es-ar':
        case 'store-sales-es-cl':
        case 'store-sales-es-co':
        case 'store-sales-es-ms':
        case 'azure-leadgen-es-es':
        case 'dynamics-leadgen-es-es':
        case 'office365-leadgen-es-es':
        case 'microsoft365-leadgen-es-es':
        case 'office365-leadgen-es-cl':
        case 'microsoft365-leadgen-es-cl':
        case 'office365-leadgen-es-co':
        case 'microsoft365-leadgen-es-co':
        case 'office365-leadgen-es-ww':
        case 'microsoft365-leadgen-es-ww':
        case 'azure-leadgen-es-mx':
        case 'dynamics-leadgen-es-mx':
        case 'office365-leadgen-es-mx':
        case 'microsoft365-leadgen-es-mx':
        case 'office365-leadgen-es-ww':
        case 'microsoft365-leadgen-es-ww':
        case 'webpurchase-sales-ES-AR':
        case 'webpurchase-sales-ES-CL':
        case 'webpurchase-sales-ES-CO':
        case 'webpurchase-sales-ES-ES':
        case 'webpurchase-sales-ES-MX':
        case 'webpurchase-sales-ES-US':
        case 'webpurchase-sales-ES-WW':
            landmarkChatLabel = decodeURIComponent('Env%C3%ADenos%20un%20mensaje');
            ariaFixesChatMaxBtn = 'Minimizar';
            ariaFixesChatMinBtn = 'Maximizar';
            ariaFixesActionMenu = decodeURIComponent('Ampliar%20el%20men%C3%BA%20Acci%C3%B3n');
            ariaFixesActionExpand = decodeURIComponent('Ampliar%20el%20men%C3%BA%20Acci%C3%B3n');
            ariaFixesActionCollapse = decodeURIComponent('Contraer%20el%20men%C3%BA%20Acci%C3%B3n');
            EndChatAction = decodeURIComponent('Finalizar%20conversaci%C3%B3n');
            ariaFixesChatSend = 'Enviar';
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = decodeURIComponent('Imprimir%20transcripci%C3%B3n');
            MuteAction = 'Silenciar';
            ClearHistoryAction = 'Borrar historial';
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = 'Introduzca el texto aquí';
            AddAttachmentAction = 'Add attachment';
            break;

        case 'office365-leadgen-cs-cz':
        case 'microsoft365-leadgen-cs-cz':
        case 'webpurchase-sales-CS-CZ':
            landmarkChatLabel = decodeURIComponent('Po%C5%A1lete%20n%C3%A1m%20zpr%C3%A1vu');
            ariaFixesChatMaxBtn = 'Minimalizovat';
            ariaFixesChatMinBtn = decodeURIComponent('Zv%C4%9Bt%C5%A1it');
            ariaFixesActionMenu = decodeURIComponent('Rozbalit%20ak%C4%8Dn%C3%AD%20menu');
            ariaFixesActionExpand = decodeURIComponent('Rozbalit%20ak%C4%8Dn%C3%AD%20menu');
            ariaFixesActionCollapse = decodeURIComponent('Sbalit%20ak%C4%8Dn%C3%AD%20menu');
            EndChatAction = decodeURIComponent('Ukon%C4%8Dit%20rozhovor');
            ariaFixesChatSend = 'Odeslat';
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = decodeURIComponent('Vytisknout%20p%C5%99epis');
            MuteAction = 'Ztlumit';
            ClearHistoryAction = 'Vymazat historii';
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = 'Zde zadejte text';
            AddAttachmentAction = 'Add attachment';
            break;

        case 'webpurchase-sales-FI-FI':
            landmarkChatLabel = decodeURIComponent('L%C3%A4het%C3%A4%20meille%20viesti');
            ariaFixesChatMaxBtn = 'Suurenna';
            ariaFixesChatMinBtn = decodeURIComponent('Pienenn%C3%A4');
            ariaFixesActionMenu = 'Laajenna toimintovalikko';
            ariaFixesActionExpand = 'Laajenna toimintovalikko';
            ariaFixesActionCollapse = decodeURIComponent('Pienenn%C3%A4%20toimintovalikko');
            EndChatAction = 'Lopeta keskustelu';
            ariaFixesChatSend = decodeURIComponent('L%C3%A4het%C3%A4');
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = 'Tulosta kopio';
            MuteAction = decodeURIComponent('Mykist%C3%A4');
            ClearHistoryAction = decodeURIComponent('Tyhjenn%C3%A4%20historia');
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = decodeURIComponent('Sy%C3%B6t%C3%A4%20teksti%20t%C3%A4h%C3%A4n');
            AddAttachmentAction = 'Add attachment';
            break;

        case 'office365-leadgen-he-il':
        case 'microsoft365-leadgen-he-il':
        case 'webpurchase-sales-he-il':
            landmarkChatLabel = decodeURIComponent('%D7%A9%D7%9C%D7%97%D7%95%20%D7%9C%D7%A0%D7%95%20%D7%94%D7%95%D7%93%D7%A2%D7%94');
            ariaFixesChatMaxBtn = decodeURIComponent('%D7%94%D7%92%D7%93%D7%9C');
            ariaFixesChatMinBtn = decodeURIComponent('%D7%9E%D7%96%D7%A2%D7%A8');
            ariaFixesActionMenu = decodeURIComponent('%D7%94%D7%A8%D7%97%D7%91%D7%AA%20%D7%AA%D7%A4%D7%A8%D7%99%D7%98%20%D7%A4%D7%A2%D7%95%D7%9C%D7%95%D7%AA');
            ariaFixesActionExpand = decodeURIComponent('%D7%94%D7%A8%D7%97%D7%91%D7%AA%20%D7%AA%D7%A4%D7%A8%D7%99%D7%98%20%D7%A4%D7%A2%D7%95%D7%9C%D7%95%D7%AA');
            ariaFixesActionCollapse = decodeURIComponent('%D7%9B%D7%99%D7%95%D7%95%D7%A5%20%D7%AA%D7%A4%D7%A8%D7%99%D7%98%20%D7%A4%D7%A2%D7%95%D7%9C%D7%95%D7%AA');
            EndChatAction = decodeURIComponent('%D7%A1%D7%99%D7%99%D7%9D%20%D7%A9%D7%99%D7%97%D7%94');
            ariaFixesChatSend = decodeURIComponent('%D7%A9%D7%9C%D7%97');
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = decodeURIComponent('%D7%94%D7%93%D7%A4%D7%A1%D7%AA%D7%AA%D7%9E%D7%9C%D7%99%D7%9C%20%D7%A9%D7%99%D7%97%D7%94');
            MuteAction = decodeURIComponent('%D7%94%D7%A9%D7%AA%D7%A7%D7%94');
            ClearHistoryAction = decodeURIComponent('%D7%9E%D7%97%D7%A7%D7%95%20%D7%90%D7%AA%20%D7%94%D7%94%D7%99%D7%A1%D7%98%D7%95%D7%A8%D7%99%D7%94');
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = decodeURIComponent('%D7%94%D7%A7%D7%9C%D7%99%D7%93%D7%95%20%D7%98%D7%A7%D7%A1%D7%98%20%D7%9B%D7%90%D7%9F');
            AddAttachmentAction = 'Add attachment';
            break;

        case 'office365-leadgen-pl-pl':
        case 'microsoft365-leadgen-pl-pl':
        case 'webpurchase-sales-PL-PL':
            landmarkChatLabel = decodeURIComponent('Wy%C5%9Blij%20do%20nas%20wiadomo%C5%9B%C4%87');
            ariaFixesChatMaxBtn = decodeURIComponent('Maksymalizuj');
            ariaFixesChatMinBtn = decodeURIComponent('Minimalizuj');
            ariaFixesActionMenu = decodeURIComponent('Rozwi%C5%84%20menu%20dzia%C5%82ania');
            ariaFixesActionExpand = decodeURIComponent('Rozwi%C5%84%20menu%20dzia%C5%82ania');
            ariaFixesActionCollapse = decodeURIComponent('Zwi%C5%84%20menu%20dzia%C5%82ania');
            EndChatAction = decodeURIComponent('Zako%C5%84cz%20rozmow%C4%99');
            ariaFixesChatSend = decodeURIComponent('Wy%C5%9Blij');
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = decodeURIComponent('Drukuj%0Azapis');
            MuteAction = decodeURIComponent('Wycisz');
            ClearHistoryAction = decodeURIComponent('Zako%C5%84cz%0Arozmow%C4%99');
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = decodeURIComponent('Wpisz%20tekst%20tutaj');
            AddAttachmentAction = 'Add attachment';
            break;
        
        case 'store-sales-pt-br':
        case 'store-sales-pt-pt':
        case 'store-sales-pt-ww':
        case 'office365-leadgen-pt-pt':
        case 'microsoft365-leadgen-pt-pt':
        case 'azure-leadgen-pt-br':
        case 'dynamics-leadgen-pt-br':
        case 'office365-leadgen-pt-br':
        case 'microsoft365-leadgen-pt-br':
        case 'webpurchase-sales-PT-BR':
        case 'webpurchase-sales-PT-PT':
            landmarkChatLabel = 'Envie-nos uma mensagem';
            ariaFixesChatMaxBtn = 'Minimizar';
            ariaFixesChatMinBtn = 'Maximizar';
            ariaFixesActionMenu = decodeURIComponent('Expandir%20menu%20de%20a%C3%A7%C3%B5es');
            ariaFixesActionExpand = decodeURIComponent('Expandir%20menu%20de%20a%C3%A7%C3%B5es');
            ariaFixesActionCollapse = decodeURIComponent('Recolher%20menu%20de%20a%C3%A7%C3%B5es');
            EndChatAction = 'Finalizar conversa';
            ariaFixesChatSend = 'Enviar';
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = decodeURIComponent('Imprimir%20transcri%C3%A7%C3%A3o');
            MuteAction = 'Silenciar';
            ClearHistoryAction = decodeURIComponent('Limpar%20hist%C3%B3rico');
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = 'Insira o texto aqui';
            AddAttachmentAction = 'Add attachment';
            break;

        case 'store-sales-sv-se':
        case 'azure-leadgen-sv-se':
        case 'dynamics-leadgen-sv-se':
        case 'office365-leadgen-sv-se':
        case 'microsoft365-leadgen-sv-se':
        case 'webpurchase-sales-SV-SE':
            landmarkChatLabel = 'Meddela oss';
            ariaFixesChatMaxBtn = 'Maximera';
            ariaFixesChatMinBtn = 'Minimera';
            ariaFixesActionMenu = decodeURIComponent('F%C3%B6rstora%20%C3%A5tg%C3%A4rdsmeny');
            ariaFixesActionExpand = decodeURIComponent('F%C3%B6rstora%20%C3%A5tg%C3%A4rdsmeny');
            ariaFixesActionCollapse = decodeURIComponent('Minska%20%C3%A5tg%C3%A4rdsmeny');
            EndChatAction = 'Avsluta konversation';
            ariaFixesChatSend = 'Skicka';
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = 'Utskrift historik';
            MuteAction = 'Tyst';
            ClearHistoryAction = 'Rensa historik';
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = decodeURIComponent('Ange%20din%20text%20h%C3%A4r');
            AddAttachmentAction = 'Add attachment';
            break;

        case 'store-sales-ko-kr':
        case 'azure-leadgen-ko-kr':
        case 'azure-leadgen-ko-kr':
        case 'office365-leadgen-ko-kr':
        case 'microsoft365-leadgen-ko-kr':
        case 'webpurchase-sales-KO-KR':
            landmarkChatLabel = decodeURIComponent('%EC%A0%80%ED%9D%AC%EC%97%90%EA%B2%8C%20%EB%A9%94%EC%8B%9C%EC%A7%80');
            ariaFixesChatMaxBtn = decodeURIComponent('%EC%B5%9C%EB%8C%80%ED%99%94');
            ariaFixesChatMinBtn = decodeURIComponent('%EC%B5%9C%EC%86%8C%ED%99%94');
            ariaFixesActionMenu = decodeURIComponent('%EB%8F%99%EC%9E%91%20%EB%A9%94%EB%89%B4%ED%99%95%EC%9E%A5');
            ariaFixesActionExpand = decodeURIComponent('%EB%8F%99%EC%9E%91%20%EB%A9%94%EB%89%B4%ED%99%95%EC%9E%A5');
            ariaFixesActionCollapse = decodeURIComponent('%EB%8F%99%EC%9E%91%20%EB%A9%94%EB%89%B4%EC%B6%95%EC%86%8C');
            EndChatAction = decodeURIComponent('%EB%8C%80%ED%99%94%20%EB%81%9D%EB%82%B4%EA%B8%B0');
            ariaFixesChatSend = decodeURIComponent('%EB%B3%B4%EB%82%B4%EA%B8%B0');
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = decodeURIComponent('%EB%8C%80%ED%99%94%20%EB%82%B4%EC%9A%A9%20%EC%9D%B8%EC%87%84');
            MuteAction = decodeURIComponent('%EC%9D%8C%EC%86%8C%EA%B1%B0');
            ClearHistoryAction = decodeURIComponent('%EA%B8%B0%EB%A1%9D%20%EC%A7%80%EC%9A%B0%EA%B8%B0');
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = decodeURIComponent('%EC%97%AC%EA%B8%B0%EC%97%90%20%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%A5%BC%20%EC%9E%85%EB%A0%A5');
            AddAttachmentAction = 'Add attachment';
            break;

        case 'office365-leadgen-sk-sk':
        case 'microsoft365-leadgen-sk-sk':
            landmarkChatLabel = 'Microsoft Sales';
            ariaFixesChatMaxBtn = decodeURIComponent('Zv%C4%9Bt%C5%A1it');
            ariaFixesChatMinBtn = 'Minimalizovat';
            ariaFixesActionMenu = decodeURIComponent('Otvori%C5%A5');
            ariaFixesActionExpand = decodeURIComponent('Otvori%C5%A5');
            ariaFixesActionCollapse = 'Zatvorte';
            EndChatAction = decodeURIComponent('Ukon%C4%8Dit%20rozhovor');
            ariaFixesChatSend = decodeURIComponent('Odosla%C5%A5');
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = decodeURIComponent('Vytisknout%20p%C5%99epis');
            MuteAction = 'Ztlumit';
            ClearHistoryAction = 'Vymazat historii';
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = 'Zde zadejte text';
            AddAttachmentAction = 'Add attachment';
            break;

        case 'azure-leadgen-ja-jp':
        case 'dynamics-leadgen-ja-jp':
        case 'office365-leadgen-ja-jp':
        case 'microsoft365-leadgen-ja-jp':
        case 'webpurchase-sales-JA-JP':
            landmarkChatLabel = decodeURIComponent('%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B');
            ariaFixesChatMaxBtn = decodeURIComponent('%E6%9C%80%E5%A4%A7%E5%8C%96');
            ariaFixesChatMinBtn = decodeURIComponent('%E6%9C%80%E5%B0%8F%E5%8C%96');
            ariaFixesActionMenu = decodeURIComponent('%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC%E5%B1%95%E9%96%8B');
            ariaFixesActionExpand = decodeURIComponent('%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC%E5%B1%95%E9%96%8B');
            ariaFixesActionCollapse = decodeURIComponent('%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC%E6%8A%98%E3%82%8A%E3%81%9F%E3%81%9F%E3%82%80');
            EndChatAction = decodeURIComponent('%E4%BC%9A%E8%A9%B1%E3%82%92%E7%B5%82%E4%BA%86');
            ariaFixesChatSend = decodeURIComponent('%E9%80%81%E4%BF%A1');
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = decodeURIComponent('%E5%8D%B0%E5%88%B7');
            MuteAction = decodeURIComponent('%E6%B6%88%E9%9F%B3');
            ClearHistoryAction = decodeURIComponent('%E5%B1%A5%E6%AD%B4%E3%81%AE%E6%B6%88%E5%8E%BB');
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = decodeURIComponent('%E5%85%A5%E5%8A%9B');
            AddAttachmentAction = 'Add attachment';
            break;
            
        case 'store-sales-th-ww':
        case 'office365-leadgen-th-th':
        case 'microsoft365-leadgen-th-th':
        case 'webpurchase-sales-TH-TH':
            landmarkChatLabel = decodeURIComponent('%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B2');
            ariaFixesChatMaxBtn = decodeURIComponent('%E0%B8%AA%E0%B8%B9%E0%B8%87%E0%B8%AA%E0%B8%B8%E0%B8%94');
            ariaFixesChatMinBtn = decodeURIComponent('%E0%B8%A2%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81%E0%B8%AA%E0%B8%B8%E0%B8%94');
            ariaFixesActionMenu = decodeURIComponent('%E0%B8%82%E0%B8%A2%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%94%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3');
            ariaFixesActionExpand = decodeURIComponent('%E0%B8%82%E0%B8%A2%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%94%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3');
            ariaFixesActionCollapse = decodeURIComponent('%E0%B8%A2%E0%B8%B8%E0%B8%9A%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%94%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3');
            EndChatAction = decodeURIComponent('%E0%B8%AA%E0%B8%B4%E0%B9%89%E0%B8%99%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%99%E0%B8%97%E0%B8%99%E0%B8%B2');
            ariaFixesChatSend = decodeURIComponent('%E0%B8%AA%E0%B9%88%E0%B8%87');
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = decodeURIComponent('%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C%20%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%9B%E0%B8%97%E0%B9%8C');
            MuteAction = decodeURIComponent('ปิดเสียง');
            ClearHistoryAction = decodeURIComponent('%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2%E0%B8%87');
            MicrosoftLogo = 'Microsoft Logo';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = decodeURIComponent('%E0%B9%83%E0%B8%AA%E0%B9%88%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%95%E0%B8%A3%E0%B8%87%E0%B8%99%E0%B8%B5%E0%B9%89');
            AddAttachmentAction = 'Add attachment';
            break;
        
        case 'office365-leadgen-tr-tr':
        case 'microsoft365-leadgen-tr-tr':
        case 'webpurchase-sales-TR-TR':
            landmarkChatLabel = decodeURIComponent('Bize%20mesaj%20g%C3%B6nderin');
            ariaFixesChatMaxBtn = 'Ekranı kapla';
            ariaFixesChatMinBtn = decodeURIComponent('K%C3%BC%C3%A7%C3%BClt');
            ariaFixesActionMenu = decodeURIComponent('%C4%B0%C5%9Flem%20men%C3%BCs%C3%BC%20%28Geni%C5%9Flet%29');
            ariaFixesActionExpand = decodeURIComponent('%C4%B0%C5%9Flem%20men%C3%BCs%C3%BC%20%28Geni%C5%9Flet%29');
            ariaFixesActionCollapse = decodeURIComponent('%C4%B0%C5%9Flem%20men%C3%BCs%C3%BC%20%28Daralt%29');
            EndChatAction = decodeURIComponent('G%C3%B6r%C3%BC%C5%9Fmeyi%20sonland%C4%B1r');
            ariaFixesChatSend = decodeURIComponent('G%C3%B6nder');
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = decodeURIComponent('%C3%96zeti%20yazd%C4%B1r');
            MuteAction = 'Sessize Al';
            ClearHistoryAction = decodeURIComponent('Ge%C3%A7mi%C5%9Fi%20temizle');
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = decodeURIComponent('L%C3%BCtfen%20bu%20alan%C4%B1%20doldurunuz');
            AddAttachmentAction = 'Add attachment';
            break;
        
        case 'store-sales-fr-ww':
        case 'store-sales-fr-be':
        case 'store-sales-fr-ca':
        case 'store-sales-fr-fr':
        case 'store-sales-fr-ch':
        case 'store-sales-fr-lu':
        case 'office365-leadgen-fr-be':
        case 'office365-leadgen-fr-ca':
        case 'office365-leadgen-fr-fr':
        case 'office365-leadgen-fr-ch':
        case 'microsoft365-leadgen-fr-be':
        case 'microsoft365-leadgen-fr-ca':
        case 'microsoft365-leadgen-fr-fr':
        case 'microsoft365-leadgen-fr-ch':
        case 'dynamics-leadgen-fr-fr':
        case 'dynamics-leadgen-fr-ch':
        case 'azure-leadgen-fr-fr':
        case 'webpurchase-sales-FR-BE':
        case 'webpurchase-sales-FR-CA':
        case 'webpurchase-sales-FR-CH':
        case 'webpurchase-sales-FR-FR':
        case 'webpurchase-sales-FR-LU':
        case 'webpurchase-sales-FR-WW':
            landmarkChatLabel = 'Envoyez-nous un message';
            ariaFixesChatMaxBtn = 'Agrandir';
            ariaFixesChatMinBtn = 'Minimiser';
            ariaFixesActionMenu = 'Menu action';
            ariaFixesActionExpand = 'Menu action Agrandir';
            ariaFixesActionCollapse = 'Collapse the action menu';
            EndChatAction = 'Terminer la conversation';
            ariaFixesChatSend = 'Envoyer';
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = 'Imprimer la transcription';
            MuteAction = decodeURIComponent('Désactiver le son');
            ClearHistoryAction = decodeURIComponent('Effacer%20l%E2%80%99historique');
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = 'Saisissez le texte ici';
            AddAttachmentAction = 'Add attachment';
            break;

        case 'store-sales-de-ww':
        case 'store-sales-de-at':
        case 'store-sales-de-ch':
        case 'store-sales-de-de':
        case 'store-sales-de-lu':
        case 'office365-leadgen-de-at':
        case 'office365-leadgen-de-ch':
        case 'office365-leadgen-de-de':
        case 'microsoft365-leadgen-de-at':
        case 'microsoft365-leadgen-de-ch':
        case 'microsoft365-leadgen-de-de':
        case 'dynamics-leadgen-de-ch':
        case 'dynamics-leadgen-de-de':
        case 'azure-leadgen-de-de':
        case 'webpurchase-sales-DE-AT':
        case 'webpurchase-sales-DE-CH':
        case 'webpurchase-sales-DE-DE':
        case 'webpurchase-sales-DE-LU':
        case 'webpurchase-sales-DE-WW':
            landmarkChatLabel = 'Senden Sie uns eine Nachricht';
            ariaFixesChatMaxBtn = 'Maximieren';
            ariaFixesChatMinBtn = 'Minimieren';
            ariaFixesActionMenu = decodeURIComponent('Aktionsmen%C3%BC%20erweitern');
            ariaFixesActionExpand = decodeURIComponent('Aktionsmen%C3%BC%20erweitern');
            ariaFixesActionCollapse = decodeURIComponent('Aktionsmen%C3%BC%20reduzieren');
            EndChatAction = decodeURIComponent('Gespr%C3%A4ch%20beenden');
            ariaFixesChatSend = 'Senden';
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = 'Transkript drucken';
            MuteAction = 'Ton ausschalten';
            ClearHistoryAction = decodeURIComponent('Verlauf%20l%C3%B6schen');
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = 'Text hier Eingeben';
            AddAttachmentAction = 'Add attachment';
            break;

        case 'store-sales-da-dk':
        case 'store-sales-da-ww':
        case 'dynamics-leadgen-da-dk':
        case 'webpurchase-sales-DA-DK':
            landmarkChatLabel = 'Skriv til os';
            ariaFixesChatMaxBtn = 'Maksimer';
            ariaFixesChatMinBtn = 'Minimer';
            ariaFixesActionMenu = 'Udvid valgmenu';
            ariaFixesActionExpand = 'Udvid valgmenu';
            ariaFixesActionCollapse = 'Skjul valgmenu';
            EndChatAction = 'Afslut samtale';
            ariaFixesChatSend = 'Send';
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = 'Udskriv samtale';
            MuteAction = decodeURIComponent('Sl%C3%A5%20lyd%20fra');
            ClearHistoryAction = 'Slet historik';
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = 'Skriv tekst her';
            AddAttachmentAction = 'Add attachment';
            break;
        
        case 'store-sales-zh-cn':
        case 'store-sales-zh-tw':
        case 'office365-leadgen-zh-tw':
        case 'microsoft365-leadgen-zh-tw':
        case 'azure-leadgen-zh-cn':
        case 'dynamics-leadgen-zh-cn':
        case 'office365-leadgen-zh-cn':
        case 'microsoft365-leadgen-zh-cn':
        case 'office365-leadgen-zh-cn-local':
        case 'webpurchase-sales-ZH-CN':
        case 'webpurchase-sales-ZH-TW':
            landmarkChatLabel = decodeURIComponent('%E7%BB%99%E6%88%91%E4%BB%AC%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF');
            ariaFixesChatMaxBtn = decodeURIComponent('%E6%9C%80%E5%A4%A7%E5%8C%96');
            ariaFixesChatMinBtn = decodeURIComponent('%E6%9C%80%E5%B0%8F%E5%8C%96');
            ariaFixesActionMenu = decodeURIComponent('%E5%B1%95%E5%BC%80%E6%93%8D%E4%BD%9C%E8%8F%9C%E5%8D%95');
            ariaFixesActionExpand = decodeURIComponent('%E5%B1%95%E5%BC%80%E6%93%8D%E4%BD%9C%E8%8F%9C%E5%8D%95');
            ariaFixesActionCollapse = decodeURIComponent('%E6%8A%98%E5%8F%A0%E6%93%8D%E4%BD%9C%E8%8F%9C%E5%8D%95');
            EndChatAction = decodeURIComponent('%E7%BB%93%E6%9D%9F%E5%AF%B9%E8%AF%9D');
            ariaFixesChatSend = decodeURIComponent('%E5%8F%91%E9%80%81');
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = decodeURIComponent('%E6%89%93%E5%8D%B0%E8%81%8A%E5%A4%A9%E5%86%85%E5%AE%B9');
            MuteAction = decodeURIComponent('%E9%9D%99%E9%9F%B3');
            ClearHistoryAction = decodeURIComponent('%E6%B8%85%E9%99%A4%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95');
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = decodeURIComponent('%E5%9C%A8%E6%AD%A4%E8%BE%93%E5%85%A5%E6%96%87%E6%9C%AC');
            AddAttachmentAction = 'Add attachment';
            break;

        case 'office365-leadgen-zh-hk':
        case 'microsoft365-leadgen-zh-hk':
            landmarkChatLabel = decodeURIComponent('Microsoft Sales');
            ariaFixesChatMaxBtn = decodeURIComponent('%E6%9C%80%E5%A4%A7%E5%8C%96');
            ariaFixesChatMinBtn = decodeURIComponent('%E6%9C%80%E5%B0%8F%E5%8C%96');
            ariaFixesActionMenu = decodeURIComponent('%E5%B1%95%E9%96%8B%20%5B%E6%93%8D%E4%BD%9C%5D%E5%8A%9F%E8%83%BD%E8%A1%A8');
            ariaFixesActionExpand = decodeURIComponent('%E5%B1%95%E9%96%8B%20%5B%E6%93%8D%E4%BD%9C%5D%E5%8A%9F%E8%83%BD%E8%A1%A8');
            ariaFixesActionCollapse = decodeURIComponent('%E6%91%BA%E7%96%8A%20%5B%E6%93%8D%E4%BD%9C%5D%E5%8A%9F%E8%83%BD%E8%A1%A8');
            EndChatAction = decodeURIComponent('%E7%B5%90%E6%9D%9F%E5%B0%8D%E8%AB%87');
            ariaFixesChatSend = decodeURIComponent('%E5%82%B3%E9%80%81');
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = decodeURIComponent('%E5%88%97%E5%8D%B0%E5%B0%8D%E8%A9%B1%E5%85%A7%E5%AE%B9');
            MuteAction = decodeURIComponent('%E9%9D%9C%E9%9F%B3');
            ClearHistoryAction = decodeURIComponent('%E6%B8%85%E9%99%A4%E8%A8%98%E9%8C%84');
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = decodeURIComponent('%E5%9C%A8%E6%AD%A4%E8%BC%B8%E5%85%A5%E6%96%87%E5%AD%97');
            AddAttachmentAction = 'Add attachment';
            break;

        case 'office365-leadgen-id-id':
        case 'microsoft365-leadgen-id-id':
            landmarkChatLabel = 'Microsoft Sales';
            ariaFixesChatMaxBtn = 'Perbesar';
            ariaFixesChatMinBtn = 'Perkecil';
            ariaFixesActionMenu = 'Perluas menu tindakan';
            ariaFixesActionExpand = 'Perluas menu tindakan';
            ariaFixesActionCollapse = 'Ciutkan menu tindakan';
            EndChatAction = 'Akhiri percakapan';
            ariaFixesChatSend = 'Kirim';
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = 'Cetak transkrip';
            MuteAction = 'Matikan suara';
            ClearHistoryAction = 'Hapus Riwayat';
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = 'Masukkan teks di sini';
            AddAttachmentAction = 'Add attachment';
            break;
        
        case 'store-sales-it-it':
        case 'store-sales-it-ww':
        case 'azure-leadgen-it-it':
        case 'dynamics-leadgen-it-it':
        case 'office365-leadgen-it-it':
        case 'microsoft365-leadgen-it-it':
        case 'webpurchase-sales-IT-CH':
        case 'webpurchase-sales-IT-IT':
            landmarkChatLabel = 'Invia un messaggio';
            ariaFixesChatMaxBtn = 'Allarga';
            ariaFixesChatMinBtn = 'Minimizza';
            ariaFixesActionMenu = 'Espandi menu azioni';
            ariaFixesActionExpand = 'Espandi menu azioni';
            ariaFixesActionCollapse = 'Comprimi menu azioni';
            EndChatAction = 'Termina conversazione';
            ariaFixesChatSend = 'Invia';
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = 'Stampa trascrizione';
            MuteAction = 'Muto';
            ClearHistoryAction = 'Cancella cronologia';
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = 'Inserire il testo qui';
            AddAttachmentAction = 'Add attachment';
            break;

        case 'office365-leadgen-ru-ru':
        case 'microsoft365-leadgen-ru-ru':
        case 'azure-leadgen-ru-ru':
        case 'dynamics-leadgen-ru-ru':
        case 'webpurchase-sales-RU-WW':
            landmarkChatLabel = decodeURIComponent('%D0%9D%D0%B0%D0%BF%D0%B8%D1%88%D0%B8%D1%82%D0%B5%20%D0%BD%D0%B0%D0%BC');
            ariaFixesChatMaxBtn = decodeURIComponent('%D0%A0%D0%B0%D0%B7%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C');
            ariaFixesChatMinBtn = decodeURIComponent('%D0%A1%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C%20%D1%87%D0%B0%D1%82');
            ariaFixesActionMenu = decodeURIComponent('%D0%A0%D0%B0%D0%B7%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C%20%D0%BC%D0%B5%D0%BD%D1%8E%20%C2%AB%D0%94%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F%C2%BB');
            ariaFixesActionExpand = decodeURIComponent('%D0%A0%D0%B0%D0%B7%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C%20%D0%BC%D0%B5%D0%BD%D1%8E%20%C2%AB%D0%94%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F%C2%BB');
            ariaFixesActionCollapse = decodeURIComponent('%D0%A1%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C%20%D0%BC%D0%B5%D0%BD%D1%8E%20%C2%AB%D0%94%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F%C2%BB');
            EndChatAction = decodeURIComponent('%D0%97%D0%B0%D0%B2%D0%B5%D1%80%D1%88%D0%B8%D1%82%D1%8C%20%D1%80%D0%B0%D0%B7%D0%B3%D0%BE%D0%B2%D0%BE%D1%80');
            ariaFixesChatSend = decodeURIComponent('%D0%9E%D1%82%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D1%8C');
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = decodeURIComponent('%D0%A0%D0%B0%D1%81%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%B0%D1%82%D1%8C%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8E%20%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B9');
            MuteAction = decodeURIComponent('%D0%9E%D1%82%D0%BA%D0%BB%D1%8E%D1%87%D0%B8%D1%82%D1%8C%20%D0%B7%D0%B2%D1%83%D0%BA');
            ClearHistoryAction = decodeURIComponent('%D0%9E%D1%87%D0%B8%D1%81%D1%82%D0%B8%D1%82%D1%8C%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8E');
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = decodeURIComponent('%D0%9F%D0%B8%D1%88%D0%B8%D1%82%D0%B5%20%D0%B7%D0%B4%D0%B5%D1%81%D1%8C');
            AddAttachmentAction = 'Add attachment';
            break;

        case 'store-sales-nl-be':
        case 'store-sales-nl-nl':
        case 'store-sales-nl-ww':
        case 'office365-leadgen-nl-be':
        case 'microsoft365-leadgen-nl-be':
        case 'azure-leadgen-nl-nl':
        case 'dynamics-leadgen-nl-nl':
        case 'office365-leadgen-nl-nl':
        case 'microsoft365-leadgen-nl-nl':
        case 'webpurchase-sales-NL-BE':
        case 'webpurchase-sales-NL-NL':
            landmarkChatLabel = 'Stuur een bericht';
            ariaFixesChatMaxBtn = 'Maximaliseren';
            ariaFixesChatMinBtn = 'Minimaliseren';
            ariaFixesActionMenu = 'Uitvouwen menu Actie';
            ariaFixesActionExpand = 'Uitvouwen menu Actie';
            ariaFixesActionCollapse = 'Samenvouwen menu Actie';
            EndChatAction = decodeURIComponent('Gesprek%20be%C3%ABindigen');
            ariaFixesChatSend = 'Verstuur';
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = 'Transcript afdrukken';
            MuteAction = 'Volume dempen';
            ClearHistoryAction = 'Geschiedenis wissen';
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = 'Voer hier uw tekst in...';
            AddAttachmentAction = 'Add attachment';
            break;

        case 'office365-leadgen-vi-vn':
        case 'microsoft365-leadgen-vi-vn':
            landmarkChatLabel = 'Microsoft Sales';
            ariaFixesChatMaxBtn = decodeURIComponent('T%E1%BB%91i%20%C4%91a');
            ariaFixesChatMinBtn = decodeURIComponent('T%E1%BB%91i%20thi%E1%BB%83u%20h%C3%B3a');
            ariaFixesActionMenu = decodeURIComponent('Menu%20M%E1%BB%9F%20r%E1%BB%99ng%20H%C3%A0nh%20%C4%91%E1%BB%99ng');
            ariaFixesActionExpand = decodeURIComponent('Menu%20M%E1%BB%9F%20r%E1%BB%99ng%20H%C3%A0nh%20%C4%91%E1%BB%99ng');
            ariaFixesActionCollapse = decodeURIComponent('Menu%20Tho%C3%A1t%20kh%E1%BB%8Fi%20H%C3%A0nh%20%C4%91%E1%BB%99ng');
            EndChatAction = decodeURIComponent('Ch%E1%BA%A5m%20d%E1%BB%A9t%20h%E1%BB%99i%20tho%E1%BA%A1i');
            ariaFixesChatSend = decodeURIComponent('G%E1%BB%ADi');
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = decodeURIComponent('In%20b%E1%BA%A3n%20ch%C3%A9p%20l%E1%BA%A1i');
            MuteAction = decodeURIComponent('T%E1%BA%AFt%20ti%E1%BA%BFng');
            ClearHistoryAction = decodeURIComponent('X%C3%B3a%20l%E1%BB%8Bch%20s%E1%BB%AD');
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = decodeURIComponent('Nh%E1%BA%ADp%20v%C4%83n%20b%E1%BA%A3n%20c%E1%BB%A7a%20b%E1%BA%A1n%20t%E1%BA%A1i%20%C4%91%C3%A2y');
            AddAttachmentAction = 'Add attachment';
            break;

        case 'office365-leadgen-hu-hu':
        case 'microsoft365-leadgen-hu-hu':
            landmarkChatLabel = 'Microsoft Sales';
            ariaFixesChatMaxBtn = decodeURIComponent('Nagy%20m%C3%A9ret');
            ariaFixesChatMinBtn = decodeURIComponent('Kis%20m%C3%A9ret');
            ariaFixesActionMenu = decodeURIComponent('Men%C3%BC%20megnyit%C3%A1sa');
            ariaFixesActionExpand = decodeURIComponent('Men%C3%BC%20megnyit%C3%A1sa');
            ariaFixesActionCollapse = decodeURIComponent('Men%C3%BC%20bez%C3%A1r%C3%A1sa');
            EndChatAction = decodeURIComponent('Befejez%C3%A9s%20%C3%A1t%C3%ADr%C3%A1s');
            ariaFixesChatSend = decodeURIComponent('K%C3%BCld%C3%A9s');
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = decodeURIComponent('Besz%C3%A9lget%C3%A9s%20nyomtat%C3%A1sa');
            MuteAction = decodeURIComponent('N%C3%A9m%C3%ADt%C3%A1s');
            ClearHistoryAction = decodeURIComponent('El%C5%91zm%C3%A9nyek%20t%C3%B6rl%C3%A9se');
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = decodeURIComponent('K%C3%A9rj%C3%BCk%2C%20hogy%20ide%20%C3%ADrd%20az%20%C3%BCzeneted');
            AddAttachmentAction = 'Add attachment';
            break;

        case 'webpurchase-sales-NB-NO':
            landmarkChatLabel = 'Microsoft Sales';
            ariaFixesChatMaxBtn = 'Maksimer';
            ariaFixesChatMinBtn = 'Minimer';
            ariaFixesActionMenu = 'Utvid handlingsmeny';
            ariaFixesActionExpand = 'Utvid handlingsmeny';
            ariaFixesActionCollapse = 'Skjul handlingsmeny';
            EndChatAction = 'Avslutt samtale';
            ariaFixesChatSend = 'Send';
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = 'Skriv ut transkripsjon';
            MuteAction = 'Demp lyd';
            ClearHistoryAction = 'Slett historikk';
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = 'Tast inn tekst her';
            AddAttachmentAction = 'Add attachment';
            break;

        case 'webpurchase-sales-UK-UA':
            landmarkChatLabel = 'Microsoft Sales';
            ariaFixesChatMaxBtn = decodeURIComponent('%D0%A0%D0%BE%D0%B7%D0%B3%D0%BE%D1%80%D0%BD%D1%83%D1%82%D0%B8');
            ariaFixesChatMinBtn = decodeURIComponent('%D0%97%D0%B3%D0%BE%D1%80%D0%BD%D1%83%D1%82%D0%B8');
            ariaFixesActionMenu = decodeURIComponent('%D0%A0%D0%BE%D0%B7%D0%B3%D0%BE%D1%80%D0%BD%D1%83%D1%82%D0%B8%20%D0%BC%D0%B5%D0%BD%D1%8E%20%D0%B4%D1%96%D0%B9');
            ariaFixesActionExpand = decodeURIComponent('%D0%A0%D0%BE%D0%B7%D0%B3%D0%BE%D1%80%D0%BD%D1%83%D1%82%D0%B8%20%D0%BC%D0%B5%D0%BD%D1%8E%20%D0%B4%D1%96%D0%B9');
            ariaFixesActionCollapse = decodeURIComponent('%D0%97%D0%B3%D0%BE%D1%80%D0%BD%D1%83%D1%82%D0%B8%20%D0%BC%D0%B5%D0%BD%D1%8E%20%D0%B4%D1%96%D0%B9');
            EndChatAction = decodeURIComponent('%D0%97%D0%B0%D0%B2%D0%B5%D1%80%D1%88%D0%B8%D1%82%D0%B8%20%D1%80%D0%BE%D0%B7%D0%BC%D0%BE%D0%B2%D1%83');
            ariaFixesChatSend = decodeURIComponent('%D0%9D%D0%B0%D0%B4%D1%96%D1%81%D0%BB%D0%B0%D1%82%D0%B8');
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = decodeURIComponent('%D0%A0%D0%BE%D0%B7%D0%B4%D1%80%D1%83%D0%BA%D1%83%D0%B2%D0%B0%D1%82%D0%B8%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%20%D1%80%D0%BE%D0%B7%D0%BC%D0%BE%D0%B2%D0%B8');
            MuteAction = decodeURIComponent('%D0%92%D0%B8%D0%BC%D0%BA%D0%BD%D1%83%D1%82%D0%B8%20%D0%B7%D0%B2%D1%83%D0%BA');
            ClearHistoryAction = decodeURIComponent('%D0%9E%D1%87%D0%B8%D1%81%D1%82%D0%B8%D1%82%D0%B8%20%D1%96%D1%81%D1%82%D0%BE%D1%80%D1%96%D1%8E');
            MicrosoftLogo = 'Microsoft';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = decodeURIComponent('%D0%92%D0%B2%D0%B5%D0%B4%D1%96%D1%82%D1%8C%20%D1%82%D0%B5%D0%BA%D1%81%D1%82%20%D1%81%D1%8E%D0%B4%D0%B8');
            AddAttachmentAction = 'Add attachment';
            break;
    
        default:
            landmarkChatLabel = 'Contact us';
            ariaFixesChatMaxBtn = 'Maximize the chat window';
            ariaFixesChatMinBtn = 'Minimize the chat window';
            ariaFixesActionMenu = 'Chat action menu';
            ariaFixesActionExpand = 'Expand the action menu';
            ariaFixesActionCollapse = 'Collapse the action menu';
            EndChatAction = 'End the conversation';
            ariaFixesChatSend = 'Send your message';
            MarkUrgentAction = 'Mark message as urgent';
            PrintTranscriptAction = 'Print Transcript';
            MuteAction = 'Mute/Unmute';
            ClearHistoryAction = 'Clear History';
            MicrosoftLogo = 'Microsoft Logo';
            MicrosoftHomePage = 'Microsoft home page';
            ariaFixesMessage = 'Type a new message';
            AddAttachmentAction = 'Add attachment';
            break;
    }

    pcsConfig = {
        id: 'ada_enhancements_4_1',
        value: {
            options: {
                debug: 'true'
            },
            'landmarkRoleChanges': true,
            'setAriaLiveAttributes': true,
            'setFocusToSequentialOrder': true,
            'fixActionMenuFocus': true,
            'fixActionMenuNarration': true,
            'addAltAttributesToImg': true,
            'fixLinkNarrationForMSLogo': true,
            'setCustomTooltips': true,
            'ariaFixes': true,
            'chatIconColorFixes': true,
            'endChatBtnStyles': true,
            'adjustChatActionButtonPosition': true,
            'setTabIndexToChatWindow': true,
            'offlineChatAria': true, 
            'proActiveCleanup': true,
            'removeAgentDomRole': true,
            'moveActionMenu': true, 
            'replaceExpertFlyoutAria': true, 
            'linkFocusStyle': true, 
            'addAltToCarouselsImages': true,
            'removeTitleForOptionMessages': true, 
            'removeTitleForQuickReplies': true,
            'changeCarouselButtonsArialabel': true, 
            'removeTitleAttrLines': true,
            'removeHeaderButtonTabIndex': true,
            'announceHeader': true,
            'confirmationDialogAnnounce': true,
            'fixTextConfig': {
                'landmarkChatLabel': landmarkChatLabel,
                'ariaFixesChatMaxBtn': ariaFixesChatMaxBtn,
                'ariaFixesChatMinBtn': ariaFixesChatMinBtn,
                'ariaFixesActionMenu': ariaFixesActionMenu,
                'ariaFixesActionExpand': ariaFixesActionExpand,
                'ariaFixesActionCollapse': ariaFixesActionCollapse,
                'EndChatAction': EndChatAction,
                'ariaFixesChatSend': ariaFixesChatSend,
                'MarkUrgentAction': MarkUrgentAction,
                'PrintTranscriptAction': PrintTranscriptAction,
                'MuteAction': MuteAction,
                'ClearHistoryAction': ClearHistoryAction,
                'MicrosoftLogo': MicrosoftLogo,
                'MicrosoftHomePage': MicrosoftHomePage,
                'ariaFixesMessage': ariaFixesMessage,
                'AddAttachmentAction': AddAttachmentAction
            },
            'cssFixes': {
                'customTooltips': 'width: max-content !important; border: 1px solid #fff !important; background-color: #555 !important; color: #fff !important; font-size: .8rem !important; text-align: center !important; border-radius: 6px !important; padding: 5px 10px !important;',
                'chatIconColorFixes': 'filter: contrast(200%)',
                // 3179: [4824765][Live Person Chat - Clear History]Luminosity ratio is less than of 4.5:1 for the 'Yes' button text present in the 'Clear History' window.
                'endChatBtnStyles': 'color: white !important;background-color : #50e6ff !important', 
                'linkFocusStyle': 'outline: #6A9FB1 solid 2px !important;'
            }
        }
    };

    window.lpTag.taglets.ada_enhancements_4_1.init(pcsConfig);
    window.lpTag.taglets.ada_enhancements_4_1.start();
}, 5000);
