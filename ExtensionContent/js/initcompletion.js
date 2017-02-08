
//メニューオブジェクト.
function initCompletion(input, onClickCallback, menuOffCallbak ) {

	if (!input)	{
		return;
	}
	input.docStd = (document.compatMode && document.compatMode=="CSS1Compat");

	input.menuOnClick = onClickCallback;
	input.menuOffCallbak = menuOffCallbak;

	//引数で渡されたオブジェクト(TextBox)にDivを追加.
		input.__completionitems = document.createElement("div");
		input.__completionitems.id = "qzc_" + input.id + "_suggest_menu";
		input.__completionitems.style.display = "none";

//		if(window.opera || is_safari() || is_gecko()){
//			input.__completionitems.style.borderStyle = "solid";
//			input.__completionitems.style.borderWidth = "1px";
//		}else{
//		}

		input.__completionitems.style.position = "absolute";
		input.__completionitems.style.tabindex="0";
		//input.__completionitems.tabindex="0";

	//メニュー色、文字サイズのデフォルト指定.
//		input.__completionitems.__width				= 360;
		input.__completionitems.__top				= 0;
		input.__completionitems.__left				= 0;

//		input.__completionitems.style.height				= 700;

		input.__completionitems.__menuOffBgColor	= "white";		//メニューoff背景色.
		input.__completionitems.__menuOffColor		= "black";		//メニューoff文字色.
		input.__completionitems.__menuOnBgColor		= "#313b7a";	//メニューon背景色.
		input.__completionitems.__menuOnColor		= "white";		//メニューon文字色.
		input.__completionitems.__menuFontSize		= "12px";		//文字サイズ.

		input.__completionitems.__menuOff		= "menu_off";		//メニューoff.
		input.__completionitems.__menuOn		= "menu_on";		//メニューon.

//input.__completionitems.style.zIndex="100";
		input.__completionitems.style.zIndex="1000";

//		input.__completionitems.menuDiv = document.createElement("div");
//		input.__completionitems.menuDiv.tabindex="2";
//		input.__completionitems.appendChild( input.__completionitems.menuDiv );

/*
		input.__completionitems.iFlame = document.createElement("'iframe'");
		//input.__completionitems.iFlame.tabindex="1";
		input.__completionitems.appendChild( input.__completionitems.iFlame );
*/

	//表示フラグ.
		input.viewFlag = -1;

	//非表示フラグ.
		input.notViewFlag = 1;

	//ドキュメントに設定.
		//document.body.appendChild(input.__completionitems);

	//フォーカスが外れたらメニュークリア.
	input.onblur = function(){
		this.clearCompletionItems();
		this.viewFlag = -1;	//メニュー表示不許可.
		//alert( "onblur : " + input.viewFlag );
	}

	//フォーカスされたらメニュー表示許可.
	input.onfocus = function(){

		if (!window[ input.__completionitems.id ]) {
			document.body.appendChild(input.__completionitems);
		}

		input.viewFlag = 0;
		//alert( "onfocus : " + input.viewFlag );
	};

	//キーイベント設定.
	input.keyset = function( inparea ) {
		if(window.opera){
			inparea.onkeypress = input.inp_onkeydown;
		}else if(is_safari() || is_gecko()){
			inparea.onkeydown = input.inp_onkeydown;
		}else{
			inparea.onkeydown = input.inp_onkeydown;
			inparea.onkeyup = input.inp_onkeydown;
		}
	}

	//キーイベントクリア.
	input.keyclear = function( inparea )
	{
		if(window.opera){
			inparea.onkeypress = "";
		}else if(is_safari() || is_gecko()){
			inparea.onkeydown = "";
		}else{
			inparea.onkeydown = "";
			inparea.onkeyup = "";
		}
	}

	//メニュー表示時キーイベント処理.
	input.downFlag = 0;
	input.inp_onkeydown = function (evt) {
		var key = input.getKeyCode(evt);
		//alert(key);

		//IEでキーアップとキーダウン両対応.
		if( key == 40 || key == 38 || key == 13 || key == 27 ){
			e = window.event ? window.event : evt;
			if( e.type == 'keydown' ){
				input.downFlag = 1;
			}else if( input.downFlag == 1 ){
				input.downFlag = 0;
				return;
			}
		}

		//メニュー下移動.
		if(key == 40){ // down
			// down キー処理

			input.changeColor( input.__completionitems.__itemNum + 1 );

			//if(window.opera || is_safari() || is_gecko()){}
			//else{
			//}
		//メニュー上移動.
		}else if( key == 38 ){ // up
			// up キー処理
			input.changeColor( input.__completionitems.__itemNum - 1 );

			if( input.__completionitems.__itemNum == -1 ){
				input.focus(); // フォーカス移動
			}

		//コールバック.
		}else if( key == 13 || key == 9 ){ // Enter or Tab
			// return Tab キー処理
			if( input.__completionitems.__itemNum != -1 ){

				input.menuOnClick( input.valueArr[ input.__completionitems.__itemNum ] );

				input.notViewFlag = 1;
				input.clearCompletionItems();

				return(false);
			}
			// メニュー表示中は効かない
			else if( key == 13 ){ // Enter
				//return(false);
			}
		//メニュークリア.
		}else if( key == 27 ){ // Esc 
			//項目クリア.
			input.notViewFlag = 1;
			input.clearCompletionItems();
			input.focus(); // フォーカス移動
			return(false);
		}

	}

	//キーイベント設定.
	input.menuOffKeySet = function( inparea ) {
		if(window.opera){
			inparea.onkeypress = input.inp_menuOffOnkeydown;
		}else if(is_safari() || is_gecko()){
			inparea.onkeydown = input.inp_menuOffOnkeydown;
		}else{
			inparea.onkeydown = input.inp_menuOffOnkeydown;
		}
	}

	//キーイベントクリア.
	input.menuOffKeyClear = function( inparea )
	{
		if(window.opera){
			inparea.onkeypress = "";
		}else if(is_safari() || is_gecko()){
			inparea.onkeydown = "";
		}else{
			inparea.onkeydown = "";
		}
	}
	//メニュー非表示時キーイベント処理.
	input.inp_menuOffOnkeydown = function (evt) {
		var key = input.getKeyCode(evt);
		//alert(key);
		input.menuOffCallbak( key )
	}

	//キーコード取得.
	input.getKeyCode = function(e){
		var key;
		if(window.opera){	
			key = window.event.keyCode;
		}else if(e){ //Netscapeの場合
			key = e.which;
		}else if(window && window.event){ //IEの場合
			key = window.event.keyCode;
		}else{
			key = 0;
		}
		return( key );
	}

	//横幅の強制指定.
	input.setCompletionWidth = function(w) {
		input.__completionitems.__width = w;
	}

	//メニューのスタイル指定.
	input.setMenuInfo = function( menuInfo ) {

		input.__completionitems.__width				= menuInfo["width"]	|| input.__completionitems.__width;
		input.__completionitems.__top				= menuInfo["top"]	|| input.__completionitems.__top;
		input.__completionitems.__left				= menuInfo["left"]	|| input.__completionitems.__left;

		//メニューのCLASS名指定.
		if( menuInfo["menuOff"] ){
			input.__completionitems.__menuOff		= menuInfo["menuOff"]	|| input.__completionitems.__menuOff;		//メニューoff.
			input.__completionitems.__menuOn		= menuInfo["menuOn"]	|| input.__completionitems.__menuOn;		//メニューon.
		}else{
			input.__completionitems.__menuOffBgColor	= menuInfo["offBgColor"]	|| input.__completionitems.__menuOffBgColor;
			input.__completionitems.__menuOffColor		= menuInfo["offColor"]		|| input.__completionitems.__menuOffColor;
			input.__completionitems.__menuOnBgColor		= menuInfo["onBgColor"]		|| input.__completionitems.__menuOnBgColor;
			input.__completionitems.__menuOnColor		= menuInfo["onColor"]		|| input.__completionitems.__menuOnColor;

			input.__completionitems.__menuFontSize		= menuInfo["fontSize"]		|| input.__completionitems.__menuFontSize;
		}

	}

	//色を変える. 色を戻す. 現在ポインタを覚える.
	input.changeColor = function ( itemNum ) {
		//alert(itemNum);

		//範囲内か.
		if( itemNum >= -1 && this.__completionitems.__itemArr.length > itemNum ){

			var itemNumOld = this.__completionitems.__itemNum;
			var divObjOld, divObjNew;

			//色を戻す.
				if( itemNumOld >= 0  ){
					divObjOld = this.__completionitems.__itemArr[ itemNumOld ];

					//メニューのCLASS名指定.
					if( this.__completionitems.__menuOff ){

						divObjOld.className	= this.__completionitems.__menuOff;

						var itemName; 
						itemName = "menu_1_" + itemNumOld;
						document.getElementById( itemName ).className = "menu_off_1 menu_item_c";
						itemName = "menu_2_" + itemNumOld;
						document.getElementById( itemName ).className = "menu_off_2 menu_item_c";
						itemName = "menu_3_" + itemNumOld;
						document.getElementById( itemName ).className = "menu_off_3 menu_item_c";
						itemName = "menu_4_" + itemNumOld;
						document.getElementById( itemName ).className = "menu_off_4 menu_item_c";

					}else{
						divObjOld.style.backgroundColor	= this.__completionitems.__menuOffBgColor;
						divObjOld.style.color			= this.__completionitems.__menuOffColor;
					}
				}

			//色を変える.
				if( itemNum >= 0 ){
					divObjNew = this.__completionitems.__itemArr[ itemNum ];

					//メニューのCLASS名指定.
					if( this.__completionitems.__menuOn ){

						divObjNew.className	= this.__completionitems.__menuOn;

						var itemName; 
						itemName = "menu_1_" + itemNum;
						document.getElementById( itemName ).className = "menu_on_1 menu_item_c";
						itemName = "menu_2_" + itemNum;
						document.getElementById( itemName ).className = "menu_on_2 menu_item_c";
						itemName = "menu_3_" + itemNum;
						document.getElementById( itemName ).className = "menu_on_3 menu_item_c";
						itemName = "menu_4_" + itemNum;
						document.getElementById( itemName ).className = "menu_on_4 menu_item_c";

					}else{
						divObjNew.style.backgroundColor	= this.__completionitems.__menuOnBgColor;
						divObjNew.style.color			= this.__completionitems.__menuOnColor;
					}

				}

			//現在ポインタを覚える.
				this.__completionitems.__itemNum = itemNum;

		}
	}

	//メニュークリア.
	input.clearCompletionItems = function () {
//		alert( "clearCompletionItems : " + input.notViewFlag );
		if( input.notViewFlag == 1 ){
			this.__completionitems.innerHTML = "";
			this.__completionitems.style.display = "none";
			input.keyclear( input );
			input.menuOffKeySet( input );
		}
	}
	//強制メニュークリア.
	input.forciblyClearCompletionItems = function () {
		input.notViewFlag = 1;
		input.clearCompletionItems();
	}

	//メニュー項目設定 & 表示.
	//引数1 : メニュー表示文字の配列.
	//引数2 : メニュー項目クリック時に呼びだす関数.
	input.showCompletionItems = function (optionArr, valueArr, separateArr ){
		//alert( "showCompletionItems : " + input.viewFlag );
		if( input.viewFlag != 0 ){ return; }

		input.optionArr = optionArr;
		input.valueArr = valueArr;
		input.separateArr = separateArr;

		//デフォルトの位置取得.
			var x = 0; var y = 0;
			var xSc = 0; var ySc = 0;
			for (var o = this; o ; o = o.offsetParent) {
					//alert( "id:" + o.id.toString());
					//alert( "scroll:" + o.scrollLeft + ":" + o.scrollTop);
					//alert( "page Offset:" + o.pageXOffset + ":" + o.pageYOffset);
					//alert( "offset:" + o.offsetLeft + ":" + o.offsetTop);
				x += (o.offsetLeft || 0); y += (o.offsetTop || 0);
			}
			for (var o = this; o ; o = o.parentNode) {
					//alert( "id:" + o.id.toString());
					//alert( "scroll:" + o.scrollLeft + ":" + o.scrollTop);
					//alert( "page Offset:" + o.pageXOffset + ":" + o.pageYOffset);
					//alert( "offset:" + o.offsetLeft + ":" + o.offsetTop);
				if( o.tagName != "BODY" ){
					xSc += (o.scrollLeft || 0); ySc += (o.scrollTop || 0);
					//alert(o.tagName +":"+o.scrollTop );
				}
				//alert( o.scrollLeft +":"+ o.scrollTop );
			}
			x = x - xSc;
			y = y - ySc;
			//alert( xSc +":"+ ySc );
			//alert( x +":"+ y );

		//項目クリア.
			this.clearCompletionItems();

		//init時に作成したベースのDiv取得.
			var baseDiv = this.__completionitems;

		//ベースDivサイズ指定.
			//幅が指定されているか.いればその値を.なければデフォルト幅を.
			baseDiv.style.width = (baseDiv.__width ?
				//baseDiv.__width : this.offsetWidth);
				baseDiv.__width + "px" : this.offsetWidth + "px");

			if(window.opera || is_gecko()){
				if(is_gecko()){
					if( input.docStd ){
						if(document.getElementById("search-wrap")){
							baseDiv.style.top = ( y + baseDiv.__top ) + this.offsetHeight + 7 + "px";
						} else {
							baseDiv.style.top = ( y + baseDiv.__top ) + this.offsetHeight - 1 + "px";
						}
						baseDiv.style.left = ( x + baseDiv.__left ) + 0 + "px";
					}else{
						if(document.getElementById("search-wrap")){
							baseDiv.style.top = ( y + baseDiv.__top ) + this.offsetHeight + 7 + "px";
						} else {
							baseDiv.style.top = ( y + baseDiv.__top ) + this.offsetHeight - 1 + "px";
						}
						baseDiv.style.left = ( x + baseDiv.__left ) + 1 + "px";
					}
				}else{
					if(document.getElementById("search-wrap")){
						baseDiv.style.top = ( y + baseDiv.__top ) + this.offsetHeight + 21 + "px";
					} else {
						baseDiv.style.top = ( y + baseDiv.__top ) + this.offsetHeight + 13 + "px";
					}
					baseDiv.style.left = ( x + baseDiv.__left ) + 1 + "px";
					if( input.docStd ){
					}else{
					}
				}
			}else{
				if(document.getElementById("search-wrap")){
					baseDiv.style.top = ( y + baseDiv.__top ) + this.offsetHeight + 6 + "px";
				} else {
					baseDiv.style.top = ( y + baseDiv.__top ) + this.offsetHeight - 2 + "px";
				}
				baseDiv.style.left = ( x + baseDiv.__left ) + "px";
			}
/*
		//ベースDiv縦位置指定.
			if(window.opera || is_safari() || is_gecko()){
				baseDiv.style.top = ( y + baseDiv.__top - 1 ) + this.offsetHeight + "px";
			}else{
				//baseDiv.style.top = ( y + baseDiv.__top ) + this.offsetHeight + "px";
				baseDiv.style.top = ( y + baseDiv.__top ) + this.offsetHeight + "px";
			}

		//ベースDiv横位置指定.
			if(window.opera || is_safari() || is_gecko()){
				baseDiv.style.left = ( x + baseDiv.__left - 2 ) + "px";
			}else{
				//baseDiv.style.left = ( x + baseDiv.__left ) + "px";
				baseDiv.style.left = ( x + baseDiv.__left ) + "px";
			}
*/
//alert( baseDiv.style.top + ":" + baseDiv.style.left);
//alert( input.docStd);

		//表示.
			baseDiv.style.display = "block";
			baseDiv.style.backgroundColor = "white";


			if(window.opera || is_gecko()){

				baseDiv.menuBaseDiv = document.createElement("div");
				baseDiv.appendChild( baseDiv.menuBaseDiv );
				baseDiv.menuBaseDiv.style.margin = "3px";

				baseDiv.menuDiv = document.createElement("div");
				baseDiv.appendChild( baseDiv.menuDiv );

				baseDiv.menuDiv.id = "qzc_menudiv";

				baseDiv.menuDiv.style.zIndex="120";
				baseDiv.menuDiv.style.display = "block";
				baseDiv.menuDiv.style.position='absolute';
				baseDiv.menuDiv.style.top = "0px";
				baseDiv.menuDiv.style.left = "0px";
				baseDiv.menuDiv.style.borderStyle = "solid";
				baseDiv.menuDiv.style.borderWidth = "1px";


				if(is_gecko()){
					if( input.docStd ){
						baseDiv.menuDiv.style.width = (baseDiv.__width ? baseDiv.__width : this.offsetWidth ) + 4 + "px";
					}else{
						baseDiv.menuDiv.style.width = (baseDiv.__width ? baseDiv.__width : this.offsetWidth ) - 1 + "px";
					}
				}else{
					if( input.docStd ){
						baseDiv.menuDiv.style.width = (baseDiv.__width ? baseDiv.__width : this.offsetWidth ) + 6 + "px";
					}else{
						baseDiv.menuDiv.style.width = (baseDiv.__width ? baseDiv.__width : this.offsetWidth ) + "px";
					}
				}

			}else{

				baseDiv.menuBaseDiv = document.createElement("div");
				baseDiv.appendChild( baseDiv.menuBaseDiv );
				baseDiv.menuBaseDiv.style.margin = "3px";

				baseDiv.iframe = document.createElement("iframe");
//				baseDiv.menuBaseDiv.appendChild( baseDiv.iframe );
				baseDiv.appendChild( baseDiv.iframe );

				baseDiv.iframe.id = "qzc_iframe";
				baseDiv.iframe.style.zIndex="110";
				if( input.docStd ){
					baseDiv.iframe.style.width = (baseDiv.__width ? baseDiv.__width : this.offsetWidth ) + 8 + "px";
				}else{
					baseDiv.iframe.style.width = (baseDiv.__width ? baseDiv.__width : this.offsetWidth ) + 3 + "px";
				}

				baseDiv.iframe.style.position='absolute';
				baseDiv.iframe.style.top = "0px";
				baseDiv.iframe.style.left = "0px";

				baseDiv.iframe.frameBorder = 0;
				baseDiv.iframe.noResize = false;


				baseDiv.menuDiv = document.createElement("div");
//				baseDiv.menuBaseDiv.appendChild( baseDiv.menuDiv );
				baseDiv.appendChild( baseDiv.menuDiv );

				baseDiv.menuDiv.id = "qzc_menudiv";

				baseDiv.menuDiv.style.zIndex="120";

				baseDiv.menuDiv.style.width = "100%";
				baseDiv.menuDiv.style.display = "block";

				baseDiv.menuDiv.style.position='absolute';

				baseDiv.menuDiv.style.top = "0px";
				baseDiv.menuDiv.style.left = "0px";

//				if(window.opera || is_safari() || is_gecko()){
//				}else{
					baseDiv.menuDiv.style.borderStyle = "solid";
					baseDiv.menuDiv.style.borderWidth = "1px";
//				}

			}


		//メニューアイテム作成関数.
			function __addItem_base( menuStr, n) {

				//オブジェクトを作る.
				var div = document.createElement("div");

				if(window.opera || is_safari() || is_gecko()){
				//	div.style.width = (baseDiv.__width ?
				//		  baseDiv.__width - 6  : this.offsetWidth - 6 );
				}else{
					div.style.width = baseDiv.style.width;
				}

				div.style.whiteSpace = "nowrap";
				div.style.padding = "1px 3px 1px 3px";
				div.style.borderStyle = "solid";
				div.style.borderWidth = "0px";
				div.style.margin = "0px";

				//メニューのCLASS名指定.
				if( input.__completionitems.__menuOff ){
					div.className	= input.__completionitems.__menuOff
				}else{
					div.style.backgroundColor	= input.__completionitems.__menuOffBgColor;
					div.style.color				= input.__completionitems.__menuOffColor;
					div.style.fontSize			= input.__completionitems.__menuFontSize
				}

				//表示文字設定.
				//div.innerHTML = menuStr;
				div.appendChild( menuStr );

				//返す.
				return( div );

			}
			function __addItem( menuStr, n) {

				//オブジェクトを作る.
				var div = __addItem_base( menuStr, n);

				//通し番号を付ける.
				div.__id = n;

				//スタイルを設定.
				div.style.cursor = "pointer";

				//色を変えるイベント設定.
				div.onmouseover = function() {
					//alert(this.__id);
					input.changeColor( this.__id );
					input.notViewFlag = 0;
				}

				//色を戻すイベント設定.
				div.onmouseout = function() {
					input.changeColor( -1 );
					input.notViewFlag = 1;
				}

				//コールバックイベント設定.
				div.onclick = function() {
					input.menuOnClick( input.valueArr[ n ] );
					input.notViewFlag = 1;
					input.clearCompletionItems();
					input.focus(); // フォーカス移動
				}
				//返す.
				return( div );

			}

		//メニューアイテムの配列を作成.
			var itemArr = new Array( input.optionArr.length );

			for (var i = 0; i < input.optionArr.length; ++i){
				var div_d = __addItem_base( input.optionArr[i], i);
				var div = __addItem( input.optionArr[i], i);

				if(window.opera || is_safari() || is_gecko()){
					//baseDiv.menuDiv.appendChild( div );
				}else{
					//baseDiv.appendChild( div );
					if( i <= input.separateArr.length ){
						if( input.separateArr[i+1] == "1" ){
							div_d.style.padding = "2px 3px 1px 3px";
							baseDiv.menuBaseDiv.appendChild( div_d );
							baseDiv.appendChild( div_d );
						}else{
							baseDiv.menuBaseDiv.appendChild( div_d );
							baseDiv.appendChild( div_d );
						}
					}else{
						baseDiv.menuBaseDiv.appendChild( div_d );
						baseDiv.appendChild( div_d );
					}
				}

				if( i <= input.separateArr.length ){
					if( input.separateArr[i+1] == "1" ){
						var hr = document.createElement("div");
						hr.style.cursor = "pointer";
						hr.style.whiteSpace = "nowrap";
						hr.className	= "separate";
						hr.appendChild( div );
						baseDiv.menuDiv.appendChild( hr );
					}else{
						baseDiv.menuDiv.appendChild( div );
					}
				}else{
					baseDiv.menuDiv.appendChild( div );
				}


				itemArr[i] = div;
			}

			if(window.opera || is_gecko()){
			}else{
				if( input.docStd ){
					baseDiv.iframe.style.height = baseDiv.offsetHeight;
				}else{
					baseDiv.iframe.style.height = "100%";
				}
			}

			baseDiv.__itemArr = itemArr;	//divの配列.
			baseDiv.__itemNum = -1;		//現在ポインタ.

		//キーイベント設定.
			input.menuOffKeyClear( input );
			input.keyset( input );


//alert('ok000');




//alert('ok001');
/*
			for (var i = 0; i < input.optionArr.length; ++i){
				var div = __addItem( input.optionArr[i], i);
				if(window.opera || is_safari() || is_gecko()){
					baseDiv.appendChild( div );
				}else{
//alert('ok');
					baseDiv.menuDiv.appendChild( div );
//alert('ok');
				}

				itemArr[i] = div;
			}
*/

		//オブジェクトを返す.
		//	return input;
	}

	//キーイベント設定.
	input.menuOffKeySet( input );

}


/* MAC safari系 チェック */
function is_safari( )
{
	return navigator.userAgent.indexOf( 'Safari/' ) != -1;
}

/* firefox系 チェック*/
function is_gecko( )
{
	return navigator.userAgent.indexOf( 'Gecko/' ) != -1;
}
function contains_ns6(a, b) {
	//Determines if 1 element in contained in another- by Brainjar.com
	while (b.parentNode)
		if ((b = b.parentNode) == a)
			return true;
	return false;
}

