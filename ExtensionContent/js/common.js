
//change image
var HISTORY_PUSH_STATE_MAX_SIZE = 640;
function changeImage(target,imgsrc){
	if(document.images){
	document.images[target].src = imgsrc;
	}
}

if(document.images) {
	info01on = new Image();
	info01on.src = '../img/parts-004in.gif';
	info02on = new Image();
	info02on.src = '../img/parts-004lb.gif';
	info03on = new Image();
	info03on.src = '../img/parts-004sc.gif';
	info04on = new Image();
	info04on.src = '../img/parts-004va.gif';
	info05on = new Image();
	info05on.src = '../img/parts-004si.gif';

	preloadFlag = true;
}

//scroll

var nowpos=0;
var tempflag=1;
var timer;
var IE = navigator.appName.charAt(0)=="M";
var NN = navigator.appName.charAt(0)=="N";

function getScrollTop() {
	if (IE) {
		return document.body.scrollTop;
	} else if (NN) {
		return window.pageYOffset;
	}
}

function getLayerTop(layerid){
	if(document.getElementById){
		return parseInt(document.getElementById(layerid).offsetTop);
	}else if(document.all){
		return document.all(layerid).style.pixelTop;
	}else if(document.layers){
		return document.layers[layerid].top;
	}
	return 0;
}

function scrollblock(thnum){
	if(document.getElementById){
		var threadtop=getLayerTop(thnum);
		scrollit(threadtop);
	}else{
		location.href="#"+thnum;
	}
}

function scrolltop(){
	scrollit(0);
}

function scrollit(pos){
clearTimeout(timer);
	if(tempflag==1){
		nowpos=getScrollTop();
		newpos=pos;
		timer=setTimeout('moveit('+newpos+')',1);
	}else{
		dis=0;
		nowdis=0;
		newpos=pos;
		clearTimeout(timer);
		timer=setTimeout('moveit('+newpos+')',1);
	}
}

function moveit(newpos){
	tempflag=0;
	dis=(newpos-nowpos)/7;
	nowpos=nowpos+dis;
	nowdis=newpos-nowpos;
	if(nowdis<1 && nowdis>-1){
		nowpos=newpos;
		window.scroll(0,nowpos);
		clearTimeout(timer);
		tempflag=1;
	}else{
		window.scroll(0,nowpos);
		timer=setTimeout('moveit('+newpos+')',50);
	}
}

//============================START USING PJAX====================================

//Bind event click for tag a, button next, back
function BindEventToElement() {
	//remove session
	var sPageNumber = Number(jQuery(".page-list-number span").first().html());
	sessionStorage.removeItem(cacheKey + (sPageNumber - 2));
	sessionStorage.removeItem(cacheKey + (sPageNumber + 2));
	NavigateByKeyDown();
	//process hyperlink click
	jq("div.page-list-number a").on("click", function (e) {
		var href = jq(this).attr("href");
		var pageNumber = jq(this).html();
		CompileGallery(pageNumber, href, e);
	});

	//process button back
	jq(".page-back").click(function (e) {
		var href = jq(".page-back").attr("href");
		var pageNumber = GetPageNumber(href);
		CompileGallery(pageNumber, href, e);
	});

	//process button next
	jq(".page-next").click(function (e) {
		var href = jq(".page-next").attr("href");
		var pageNumber = GetPageNumber(href);
		CompileGallery(pageNumber, href, e);
	});
}

//Fill result data html
function UpdateContent(data) {
	jq("html").css("opacity", "0");
	window.scrollTo(0, 0);
	jq('#data-pjax').html('');
	document.getElementById('data-pjax').innerHTML = data;
	var imagesOnScreen = jq('#idResultList_dtlSearchResult img[name=\"Thumbnail\"]:onScreen');
	var iImagesOnScreen = jq(imagesOnScreen).length;
	var iComplete = 0;
	try {
		if (iImagesOnScreen == 0) {
			imagesOnScreen = jq('#idResultList_dtlSearchResult img[name=\"Thumbnail\"]');
			iImagesOnScreen = Math.floor(jq(imagesOnScreen).length / 3);
		}
		jq(imagesOnScreen).each(function () {
			jq(this).load(function () {
				iComplete++;
				if (iComplete == iImagesOnScreen) {
					jq("html").css("opacity", "1");
					BindEventToElement();
					jq.when(
						jq.getScript("https://bcx.amanaimages.com/bcx/rt_tag.js"),
						jq.getScript("/scripts/mod-rtmetrics.js?v=20160218"),
						jq.getScript("/scripts/home/jquery191.js"),
						jq.getScript("/scripts/mod-pager.js?v=20160818"),
						jq.Deferred(function (deferred) {
							jq(deferred.resolve);
						})
					).done(function () {
						try {
							bcxBeacon.setAltName(document.location.href);
							bcxBeacon.addQuery("bcn=1");
							bcxBeacon.send();
						}
						catch (err) {

						}
					});
				}
			}).error(function () {
				jq("html").css("opacity", "1");
				BindEventToElement();
			});
		});
	}
	catch (err) {
	    console.log(err);
		jq("html").css("opacity", "1");
		BindEventToElement();
	}
}

//Get version of IE browser
function GetVerIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // IE 12 => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return 0;
}
function isSupportHtml5() {
	var versionIE = GetVerIE();
	var elem = document.createElement("canvas");
	if ((versionIE == 0 || versionIE > 9) && elem.getContext && elem.getContext("2d") && typeof (Storage) !== undefined)
		return true;
	else
		return false;
}
function getURLParameter(url, name) {
	return (RegExp(name + '=' + '(.+?)(&|$)').exec(url) || [, null])[1];
}

//get page number from url
function GetPageNumber(url) {
	var iPageNumber = getURLParameter(url, "PageNum");
	if (iPageNumber == null || iPageNumber === undefined || iPageNumber == "" || isNaN(iPageNumber))
		iPageNumber = 1
	return Number(iPageNumber);
}
destroyState = function (e) {
	history.replaceState(null, document.title, window.location.href);
}
if (isSupportHtml5()) {
	window.addEventListener('beforeunload', destroyState, false);
}

//Check exist the cache of page
function CheckCacheExists(iPageNumber) {
	if (iPageNumber == null || iPageNumber === undefined || iPageNumber == "")
		iPageNumber = 1
	var item = sessionStorage.getItem(cacheKey + iPageNumber);
	if (item == null || item == "" || item === undefined) {
		return false;
	}
	else {
		return true;
	}
}
function DetectBrowser() {
	if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
		return 1;
	}
	else
		return -1;
}
var getStringMemorySize = function (_string) {
	var codePoint, accum = 0;
	for (var stringIndex = 0, endOfString = _string.length; stringIndex < endOfString; stringIndex++) {
		codePoint = _string.charCodeAt(stringIndex);

		if (codePoint < 0x100) {
			accum += 1;
			continue;
		}
		if (codePoint < 0x10000) {
			accum += 2;
			continue;
		}

		if (codePoint < 0x1000000) {
			accum += 3;
		} else {
			accum += 4;
		}
	}
	return accum * 2;
}
function isPageApply() {
	var page = window.location.pathname.toLowerCase();
	if (
			page.indexOf("photo") > -1 || page.indexOf("illustration") > -1
		|| page.indexOf("fineart") > -1 || page.indexOf("archive") > -1
		|| page.indexOf("category") > -1 || page.indexOf("brand") > -1
		|| page.indexOf("keyword/result.aspx") > -1) {
		return true;
	}
	else {
		return false;
	}
}
//============================END USING PJAX====================================
var GenerateGUID = function () {
	var S4 = function () {
		return (Math.floor(Math.random() * 0x10000).toString(16));
	};
	return (S4() + "-" + S4() + "-" + S4());
};