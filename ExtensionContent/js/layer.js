var openid=0;


/***********************
  検索フォームの表示変更 写真Or動画
************************/

function changeLayerPM(id){
	
	// 写真検索の場合
	if(id=='0'){
		document.getElementById('sfMotion').style.display='none';
		document.getElementById('sfPhoto').style.display='';
	}
	else if(id =='1'){
	// 動画検索の場合
		document.getElementById('sfMotion').style.display='';
		document.getElementById('sfPhoto').style.display='none';
	}

}
/***********************
  オプション検索の表示変更 動画
************************/
function changeLayerForMotion(id){
	if(document.getElementById){
		if(id=='1'){
			hideLayer('layer01m');
			hideLayer('layer02m');
		}
		else if(id=='2'){
			layerStatus=document.getElementById('layer02').style.display;
			if(layerStatus==''){
				hideLayer('layer01');
				hideLayer('layer02');
				globalchangeOptionBtn('3','1');
			}else{
				showLayer('layer01');
				showLayer('layer02');
				globalchangeOptionBtn('3','2');
			}
		}
	}
}

//'ThreeDimension:3D---------------------------------------------------------
//'1103xx qzc kawashima Add.
/***********************
  オプション検索の表示変更 3D
************************/
function changeLayerFor3DModel(id){
	var layerStatus;

	if(document.getElementById){
		if(id=='1'){
			hideLayer('layer01m');
			hideLayer('layer02m');
		}
		else if(id=='2'){
			if (document.getElementById('layer02')) {
				layerStatus=document.getElementById('layer02').style.display;
			}
			if(layerStatus==''){
				hideLayer('layer01');
				hideLayer('layer02');
				globalchangeOptionBtn('4','1');
			}else{
				showLayer('layer01');
				showLayer('layer02');
				globalchangeOptionBtn('4','2');
			}
		}
	}
}
//'---------------------------------------------------------ThreeDimension:3D

//'Sound:MUSIC&SFX---------------------------------------------------------
//'1108xx qzc kawashima Add.
/***********************
  オプション検索の表示変更 Sound
************************/
function changeLayerForSound(id){
	if(document.getElementById){
		if(id=='1'){
			showLayer('optMusic01');
			hideLayer('optMusic02_1');
			hideLayer('optMusic02_2');

			showLayer('optSfx01');
			hideLayer('optSfx02_1');
			hideLayer('optSfx02_2');
			
		}
		else if(id=='2'){
			hideLayer('optMusic01');
			showLayer('optMusic02_1');
			showLayer('optMusic02_2');

			hideLayer('optSfx01');
			showLayer('optSfx02_1');
			showLayer('optSfx02_2');
		}
	}
}
function changeLayerForSoundCategory(id){
	if(document.getElementById){
		if(id=='1'){
			showLayer('catMusic01');
			hideLayer('catMusic02');

			showLayer('catSfx01');
			hideLayer('catSfx02');
		}
		else if(id=='2'){
			hideLayer('catMusic01');
			showLayer('catMusic02');

			hideLayer('catSfx01');
			showLayer('catSfx02');
		}
	}
}
//'---------------------------------------------------------Sound:MUSIC&SFX


/***********************
  検索フォームの表示変更
************************/
function changeLayer(id){
	var layerStatus;

	if(document.getElementById){
		if(id=='1'){
			hideLayer('layer02');
		}
		else if(id=='2'){
			if (document.getElementById('layer02'))
			{
				layerStatus=document.getElementById('layer02').style.display;
			}
			if(layerStatus==''){
				hideLayer('layer02');
				globalchangeOptionBtn('2','1');
			}else{
				showLayer('layer01');
				showLayer('layer02');
				globalchangeOptionBtn('2','2');
			}
		}
		else if(id=='40'){
			if (document.getElementById('layer03') == null) {
			}
			else {
				layerid='layer03';
				hideLayer(layerid);
				if (document.getElementById('idSearchForm_rblSupportOn') == null ) {
				}
				else {
					document.getElementById('idSearchForm_rblSupportOn').checked = false;
					document.getElementById('idSearchForm_rblSupportOff').checked = true;
				}
			}
			setCookie_hintOff();
		}
		else if(id=='41'){
			if (document.getElementById('layer03') == null) {
			}
			else {
				layerid='layer03';
				showLayer(layerid);
				if (document.getElementById('idSearchForm_rblSupportOn') == null ) {
				}
				else {
					document.getElementById('idSearchForm_rblSupportOn').checked = true;
					document.getElementById('idSearchForm_rblSupportOff').checked = false;
				}
			}
			setCookie_hintOn();
		}
	}
}
function changeSupportLayer(rbl){
	if(rbl == 1){
		if (document.getElementById('layer03') == null) {
		}
		else {
			layerid='layer03';
			showLayer(layerid);
			document.forms[0].rblSupportOn.checked = true;
			document.forms[0].rblSupportOff.checked = false;
		}
		setCookie_hintOn();
	}
	if(rbl == 0){
		if (document.getElementById('layer03') == null) {
		}
		else {
			layerid='layer03';
			hideLayer(layerid);
			document.forms[0].rblSupportOn.checked = false;
			document.forms[0].rblSupportOff.checked = true;
		}
		setCookie_hintOff();
	}
}

//2008/02/07 080402 QZC kawashima Suggest用.
//Suggest On/Off.
function changeSuggestLayer(rbl){
	if(rbl == 1){
		setCookie_suggestOn();
	}
	if(rbl == 0){
		setCookie_suggestOff();
	}
}

/***********************
  検索フォームの初期化
************************/
function initLayer(id, pos){
	/* 検索タイプの表示／非表示 */
	if ( pos == '1' )
	{
		showLayer('layer00');
	}
	else {
		hideLayer('layer00');
	}
	/* 検索オプションの表示／非表示 */
	if(document.getElementById){
		openid=id;
		if(openid=='1'){
			//hideLayer('layer01');
			hideLayer('layer02');
		}
		else if(openid=='2'){
			//showLayer('layer01');
			showLayer('layer02');
		}
		//globalchangeOptionBtn('2',openid);
	}
	/* 検索オプションの表示／非表示 */
	sOption = getCookie_hint();
	if(sOption == '0'){
		if (document.getElementById('idSearchForm_rblSupportOn') == null ) {
		}
		else {
			document.getElementById('idSearchForm_rblSupportOn').checked = false;
			document.getElementById('idSearchForm_rblSupportOff').checked = true;
		}
		if (document.getElementById('layer03') == null) {
		}
		else {
			document.forms[0].rblSupportOn.checked = false;
			document.forms[0].rblSupportOff.checked = true;
		}
	}
	else {
		if (document.getElementById('idSearchForm_rblSupportOn') == null ) {
		}
		else {
			document.getElementById('idSearchForm_rblSupportOn').checked = true;
			document.getElementById('idSearchForm_rblSupportOff').checked = false;
		}
		if (document.getElementById('layer03') == null) {
		}
		else {
			document.forms[0].rblSupportOn.checked = true;
			document.forms[0].rblSupportOff.checked = false;
		}
	}

	//2008/02/07 080402 QZC kawashima Suggest用.
	/* 検索オプションの表示／非表示 */
	sOption = getCookie_suggest();
	if(sOption == '0'){
		if (document.getElementById('idSearchForm_rblSuggestOn') == null ) {
		}
		else {
			document.getElementById('idSearchForm_rblSuggestOn').checked = false;
			document.getElementById('idSearchForm_rblSuggestOff').checked = true;
		}
	}
	else {
		if (document.getElementById('idSearchForm_rblSuggestOn') == null ) {
		}
		else {
			document.getElementById('idSearchForm_rblSuggestOn').checked = true;
			document.getElementById('idSearchForm_rblSuggestOff').checked = false;
		}
	}

}


/***********************
  検索フォームの初期化
************************/
function initLayerFont(id, pos){
}


/***********************
  検索フォームの初期化
************************/
function initLayerMotion(id, pos){
	/* 検索タイプの表示／非表示 */
	if ( pos == '1' )
	{
		showLayer('layer00');
	}
	else {
		hideLayer('layer00');
	}
	/* 検索オプションの表示／非表示 */
	if(document.getElementById){
		openid=id;
		if(openid=='1'){
			//hideLayer('layer01');
			hideLayer('layer02');
			//globalchangeOptionBtn('3','1');
		}
		else if(openid=='2'){
			//showLayer('layer01');
			showLayer('layer02');
			//globalchangeOptionBtn('3','2');
		}
		
	}
	
	/* 検索オプションの表示／非表示 */
	sOption = getCookie_hint();
	if(sOption == '0'){
		if (document.getElementById('idSearchFormMotion_rblSupportOn') == null ) {
		}
		else {
			document.getElementById('idSearchFormMotion_rblSupportOn').checked = false;
			document.getElementById('idSearchFormMotion_rblSupportOff').checked = true;
		}
		if (document.getElementById('layer03') == null) {
		}
		else {
			document.forms[0].rblSupportOn.checked = false;
			document.forms[0].rblSupportOff.checked = true;
		}
	}
	else {
		if (document.getElementById('idSearchFormMotion_rblSupportOn') == null ) {
		}
		else {
			document.getElementById('idSearchFormMotion_rblSupportOn').checked = true;
			document.getElementById('idSearchFormMotion_rblSupportOff').checked = false;
		}
		if (document.getElementById('layer03') == null) {
		}
		else {
			document.forms[0].rblSupportOn.checked = true;
			document.forms[0].rblSupportOff.checked = false;
		}
	}

	//2008/02/07 080402 QZC kawashima Suggest用.
	/* 検索オプションの表示／非表示 */
	sOption = getCookie_suggest();
	if(sOption == '0'){
		if (document.getElementById('idSearchFormMotion_rblSuggestOn') == null ) {
		}
		else {
			document.getElementById('idSearchFormMotion_rblSuggestOn').checked = false;
			document.getElementById('idSearchFormMotion_rblSuggestOff').checked = true;
		}
	}
	else {
		if (document.getElementById('idSearchFormMotion_rblSuggestOn') == null ) {
		}
		else {
			document.getElementById('idSearchFormMotion_rblSuggestOn').checked = true;
			document.getElementById('idSearchFormMotion_rblSuggestOff').checked = false;
		}
	}

}

//'Sound:MUSIC&SFX---------------------------------------------------------
//'1108xx qzc kawashima Add.
/***********************
  検索フォームの初期化
************************/
function initLayerSound(id, pos){
	//var elements = document.getElementsByName( name );
	//alert(elements.length);
	//alert('ok');

	//hideLayer('optMusic01');
	/* 検索オプションの表示／非表示 */
	if(document.getElementById){
		openid=id;
	//alert('ok1');
		if(openid=='1'){
			hideLayer('optMusic02_1');
			hideLayer('optMusic02_2');
			hideLayer('optSfx02_1');
			hideLayer('optSfx02_2');
		}
		else if(openid=='2'){
			showLayer('optMusic02_1');
			showLayer('optMusic02_2');
			showLayer('optSfx02_1');
			showLayer('optSfx02_2');
		}
		
	}
	//alert('ok2');

	//2008/02/07 080402 QZC kawashima Suggest用.
	/* 検索オプションの表示／非表示 */
/*	sOption = getCookie_suggest();
	if(sOption == '0'){
		if (document.getElementById('idSearchFormSound_rblSuggestOn') == null ) {
		}
		else {
			document.getElementById('idSearchFormSound_rblSuggestOn').checked = false;
			document.getElementById('idSearchFormSound_rblSuggestOff').checked = true;
		}
	}
	else {
		if (document.getElementById('idSearchFormSound_rblSuggestOn') == null ) {
		}
		else {
			document.getElementById('idSearchFormSound_rblSuggestOn').checked = true;
			document.getElementById('idSearchFormSound_rblSuggestOff').checked = false;
		}
	}
*/
}
function initLayerSoundCategory(id, pos){
	//var elements = document.getElementsByName( name );
	//alert(elements.length);
	//alert('ok');

	//hideLayer('optMusic01');
	/* 検索オプションの表示／非表示 */
	if(document.getElementById){
		openid=id;
	//alert('ok1');
		if(openid=='1'){
			showLayer('catMusic01');
			hideLayer('catMusic02');

			showLayer('catSfx01');
			hideLayer('catSfx02');
		}
		else if(openid=='2'){
			hideLayer('catMusic01');
			showLayer('catMusic02');

			hideLayer('catSfx01');
			showLayer('catSfx02');
		}
		
	}
}
//'---------------------------------------------------------Sound:MUSIC&SFX

/***********************
  検索フォームの表示変更
************************/
function changeId(id){
	if(document.getElementById){
		openid=id;
	}
}

/***************
  レイヤー表示
***************/
function showLayer(layerid){
	if (document.getElementById(layerid) == null) {
	}
	else{
		document.getElementById(layerid).style.display='';
	}
}
/*****************
  レイヤー非表示
*****************/
function hideLayer(layerid){
	if (document.getElementById(layerid) == null) {
	}
	else{
		document.getElementById(layerid).style.display='none';
	}
}

function getCookie()
{
	theName = "SearchOption="; 
	theCookie = document.cookie+";";
	start = theCookie.indexOf(theName);
	if (start != -1)
	{
		end = theCookie.indexOf(";",start);
		return unescape(theCookie.substring(start+theName.length,end));
	}
	return false;
}

function setCookie()
{
	expDay = new Date();
	expDay.setTime(expDay.getTime()+(30*1000*60*60*24));
	expDay = expDay.toGMTString();
	sOption = getCookie();
	
	if(sOption=='1'){
		document.cookie = "SearchOption=0;expires="+expDay+";path=/;" + document.cookie;
	}else{
		document.cookie = "SearchOption=1;expires="+expDay+";path=/;" + document.cookie;
	}
	return true;
}

//'Sound:MUSIC&SFX---------------------------------------------------------
//'1108xx qzc kawashima Add.
function getCookieSoundCategory()
{
	theName = "SearchOptionSoundCategory="; 
	theCookie = document.cookie+";";
	start = theCookie.indexOf(theName);
	if (start != -1)
	{
		end = theCookie.indexOf(";",start);
		return unescape(theCookie.substring(start+theName.length,end));
	}
	return false;
}

function setCookieSoundCategory()
{
	expDay = new Date();
	expDay.setTime(expDay.getTime()+(30*1000*60*60*24));
	expDay = expDay.toGMTString();
	sOption = getCookieSoundCategory();
	
	if(sOption=='1'){
		document.cookie = "SearchOptionSoundCategory=0;expires="+expDay+";path=/;" + document.cookie;
	}else{
		document.cookie = "SearchOptionSoundCategory=1;expires="+expDay+";path=/;" + document.cookie;
	}
	return true;
}
//'---------------------------------------------------------Sound:MUSIC&SFX


	function HistorychangeLayerStatus(layerid){
		var anchorTags = document.getElementsByTagName("DIV");
		var cID;
		var sID;
		var layerStatus;
		var arrowid;

		cID = 'History_layer' + layerid;
		for (var i = 0; i < anchorTags.length; i++)
		{
			if ( anchorTags[i].id.substring(0,cID.length) == cID && anchorTags[i].id.length < 21 ) 
			{
				if (anchorTags[i].id == cID)
				{
				}
				else {
					sID = anchorTags[i].id;
					layerStatus=document.getElementById(sID).style.display;
					arrowid=sID.substring(13, (sID.length - 2));
					arrowid='arrowh'+arrowid;
					if(layerStatus==''){
						if (document.images[arrowid] != null) {
							document.images[arrowid].src = '/img/parts-034.gif';
						}
						hideLayer(sID);
					}else{
						if (document.images[arrowid] != null) {
							document.images[arrowid].src = '/img/parts-034o.gif';
						}
						showLayer(sID);
					}
				}
			}
		}
	}

function getCookie_hint()
{

	theName = "HintOnOff="; 
	theCookie = document.cookie+";";
	start = theCookie.indexOf(theName);

	if (start != -1)
	{
			end = theCookie.indexOf(";",start);
		return unescape(theCookie.substring(start+theName.length,end));
	}
	return 2;
}

function setCookie_hintOn()
{

	expDay = new Date();
	expDay.setTime(expDay.getTime()+(30*1000*60*60*24));
	expDay = expDay.toGMTString();
	sOption = getCookie_hint();

	document.cookie = "HintOnOff=1;expires="+expDay+";path=/";
	return true;
}

function setCookie_hintOff()
{

	expDay = new Date();
	expDay.setTime(expDay.getTime()+(30*1000*60*60*24));
	expDay = expDay.toGMTString();
	sOption = getCookie_hint();

	document.cookie = "HintOnOff=0;expires="+expDay+";path=/";
	return true;
}

//2008/02/07 080402 QZC kawashima Suggest用Cookie設定.
function getCookie_suggest()
{

	theName = "SuggestOnOff="; 
	theCookie = document.cookie+";";
	start = theCookie.indexOf(theName);

	if (start != -1)
	{
			end = theCookie.indexOf(";",start);
		return unescape(theCookie.substring(start+theName.length,end));
	}
	return 2;
}
function setCookie_suggestOn()
{

	expDay = new Date();
	expDay.setTime(expDay.getTime()+(30*1000*60*60*24));
	expDay = expDay.toGMTString();

	//alert( encodeURIComponent( "SuggestOnOff=1;expires="+expDay+";path=/" ) );
	//document.cookie = encodeURIComponent( "SuggestOnOff=1;expires=0;path=/" ) );
	document.cookie = "SuggestOnOff=1;expires="+expDay+";path=/";
	//alert( document.cookie);
	return true;
}
function setCookie_suggestOff()
{

	expDay = new Date();
	expDay.setTime(expDay.getTime()+(30*1000*60*60*24));
	expDay = expDay.toGMTString();

	//alert( encodeURIComponent( "SuggestOnOff=0;expires="+expDay+";path=/" ) );
	//document.cookie = encodeURIComponent( "SuggestOnOff=1;expires=0;path=/" ) );
	document.cookie = "SuggestOnOff=0;expires="+expDay+";path=/";
	//alert( document.cookie);
	return true;
}