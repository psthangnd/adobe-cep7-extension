/*------------------*/
/* メニュー開閉制御 */
/*------------------*/
function menuControl(subNaviName, iframeName, mode)
{
    if ( mode == "open" ) {
        document.getElementById(subNaviName).style.display='block';
        document.getElementById(iframeName).style.display='block';
    }
    else if ( mode == "close" ) {
        document.getElementById(subNaviName).style.display='none';
        document.getElementById(iframeName).style.display='none';
    }
}

/*----------------------------*/
/* メニュー現在位置クラス設定 */
/*----------------------------*/
function menuCurrentControl(naviLinkName){
    var UserAgent = navigator.userAgent.toLowerCase();
    var currentID = document.getElementById(naviLinkName);
    var addClassName = "main-current";
				
    // クラスを追加
    if ( currentID != null && currentID != "" ) {
        currentID.setAttribute("class", addClassName);
        currentID.setAttribute("className", addClassName);
    }
				if(naviLinkName == "naviLink01"){
					var rmpack = naviLinkName + "Rm"
					var rmtab = document.getElementById(rmpack);
					if(rmtab){
						rmtab.style.display="block";
					}
				}
}

/*--------------------------------*/
/* サブメニュー現在位置クラス設定 */
/*--------------------------------*/
function menuSubCurrentControl(naviLinkName)
{
    var UserAgent = navigator.userAgent.toLowerCase();
    var currentID = document.getElementById(naviLinkName);
    var addClassName = "sub-current";
    
    // クラスを追加
    if ( currentID != null && currentID != "" ) {
        currentID.setAttribute("class", addClassName);
        currentID.setAttribute("className", addClassName);
    }
}

/*--------------------*/
/* 料金表ポップアップ */
/*--------------------*/

function openPrice(catName){
	var nowdomain = location.hostname;
	if(nowdomain.indexOf("amanaimages.com") == -1){
		if(nowdomain.indexOf("10.12.1.3") == -1 && nowdomain.indexOf("10.75.10") == -1){
			nowdomain = "amanaimages.com";
		}
	} else {
		if(nowdomain.indexOf(".amanaimages.com") >= 0){
			nowdomain = "amanaimages.com";
		}
	}
	switch (catName) {
		case "naviLink01":
//			var junpuri = "/price/amana_rf_price.html";
			var junpuri = "http://help.amanaimages.com/price/photo/";
			var junpw = "1040";
			var junph = "650";
			break;
		case "naviLink02":
			var junpuri = "http://help.amanaimages.com/price/photo/";
			var junpw = "1040";
			var junph = "650";
			break;
		case "naviLink03":
			var junpuri = "http://help.amanaimages.com/price/3drf_price/"
			var junpw = "1040";
			var junph = "650";
			break;
		case "naviLink07":
			var junpuri = "http://help.amanaimages.com/price/sound_price/"
			var junpw = "1040";
			var junph = "650";
		 break;
		case "naviLink04":
			var junpuri = "http://help.amanaimages.com/price/motion/rf_price/"
			var junpw = "1040";
			var junph = "650";
			break;
		case "naviLink08":
			var junpuri = "http://help.amanaimages.com/price/font_price/"
			var junpw = "1040";
			var junph = "650";
			break;
		case "naviLink05":
			var junpuri = "http://help.amanaimages.com/price/photo/"
			var junpw = "1040";
			var junph = "650";
			break;
		case "naviLinkCrHayami":
			var junpuri = "http://help.amanaimages.com/price/photo/hayami_price/"
			var junpw = "1040";
			var junph = "650";
			break;
		default:
		 var junpuri = "http://help.amanaimages.com/price/photo/";
			var junpw = "1040";
			var junph = "650";
			break;
	}
	window.open(junpuri, "newpopup", "width=" + junpw + ",height=" +junph + ",status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
}


/*--------------------------*/
/* メニューホバークラス設定 */
/*--------------------------*/
function menuHoverControl(naviLinkName, mode)
{
    var UserAgent = navigator.userAgent.toLowerCase();
    var currentID = document.getElementById(naviLinkName);
    var className = "main-hover";
    var defaultClass;
    
    // クラスに設定されている値を取得
    if ( UserAgent.indexOf("msie") != -1 ) {
        defaultClass = currentID.getAttribute("className");
    }
    else {
        defaultClass = currentID.getAttribute("class");
    }
    
    // addの場合は追加、removeの場合は削除
    if ( mode == "add" ) {
        defaultClass += " " + className;
    }
    else if ( mode == "remove" ) {
        defaultClass = defaultClass.replace(className, "");
    }
    
    if ( UserAgent.indexOf("msie") != -1 ) {
        currentID.setAttribute("className", defaultClass);
    }
    else {
        currentID.setAttribute("class", defaultClass);
    }
}

/*-----------------------------*/
/* Newアイコン画像入れ替え設定 */
/*-----------------------------*/
function replaceNewIcon() {
    document.getElementById("new_icon").innerHTML = "<img src=\"../img/header/new_stop.gif\" alt=\"NEW\" title=\"NEW\" />";
}