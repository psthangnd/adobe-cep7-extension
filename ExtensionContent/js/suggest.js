
	//CSSパス.
	var cssPath = "/css/"
	//スクリプトパス.
	var scriptPath = "/scripts/"


	//結果表示関数.
//	this.__items.initResultDataFunc = function ( func ){
	//検索クエリー取得関数.
//	this.__items.initSerachFunc = function ( func ){
	//DBS情報設定.
//	this.setrpcInfo = function ( rpcInfo ) {

	if (!window[ 'initSerach' ]) {
		//スクリプトのロード&初期化.
		function initSerach( keyword ){

			//var qString = "freeword=" + encodeURIComponent(keyword);

			//var qString = "freeword=" + "%u3042";
			var qString = "freeword=" + escape( keyword );

			return( qString );

		}
	}
	if (!window[ 'initResultData' ]) {
		//スクリプトのロード&初期化.
		function initResultData( responseData ){

			//alert( responseData );

			var response = new Array( 4 );

			var option = new Array( responseData["count"] );
			var value = new Array( responseData["count"] );
			var separate = new Array( responseData["count"] );
			for( var i = 0; i< responseData["count"]; i ++ ){

				//var menuData = [ responseData["data"]["keyword"][i], responseData["data"]["category"][i], responseData["data"]["photo_num"][i] ];
				var menuData = [ responseData["data"]["keyword"][i], responseData["data"]["priority"][i], responseData["data"]["explanation"][i] ];

				option[i] = createMenuItem( i, menuData );
				value[i] = responseData["data"]["keyword"][i];
				separate[i] = menuData[1];

			}

			response[0] = option;
			response[1] = value;
			response[2] = separate;

            //080414 ページデータ.
			response[3] = responseData["pagedata"];

			//var number = responseData["pagedata"]["no"];
			//var size = responseData["pagedata"]["size"];
			//alert( responseData["pagedata"]["no"] + ":" + responseData["pagedata"]["size"] );

			return( response );

		}
	}
	function createMenuItem( no, items ){
/*
		var table = "<table class=\"menu_item\" style=\"width:100%;\" cellspacing=\"0\" cellpadding=\"0\"><tr class=\"menu_item\">";
		table += "<td class=\"menu_item menu_off_1 menu_item_c\" id=\"menu_1_" + no + "\">" + items[0] + "&nbsp;" + "</td>";
		table += "<td class=\"menu_item menu_off_2 menu_item_c\" id=\"menu_2_" + no + "\"><span style=\"white-space: nowrap;\">" + "" + "</span>";
		table += "<span class=\"menu_item menu_off_3 menu_item_c\" id=\"menu_3_" + no + "\">" + items[1] + "</span>" + "</td>";
		table += "<td class=\"menu_item menu_off_4 menu_item_c\" id=\"menu_4_" + no + "\">" + "[" + items[2] + "hit]"+ "</td>";
		table += "</tr></table>";
*/
		var table = "<table class=\"menu_item\" style=\"width:100%;\" cellspacing=\"0\" cellpadding=\"0\"><tr class=\"menu_item\">";
		//table += "<td class=\"menu_item menu_off_1 menu_item_c\" id=\"menu_1_" + no + "\">" + items[0] + "&nbsp;" + "</td>";
        //080414 次ページ呼び出し.
		if( items[0].substring(0,6) != "func:[" ){
			table += "<td class=\"menu_item menu_off_1 menu_item_c\" id=\"menu_1_" + no + "\">" + items[0] + "&nbsp;" + "</td>";
			table += "<td class=\"menu_item menu_off_2 menu_item_c\" id=\"menu_2_" + no + "\"><span style=\"white-space: nowrap;\">" + "" + "</span>";
			table += "<span class=\"menu_item menu_off_3 menu_item_c\" id=\"menu_3_" + no + "\">"  + "</span>" + "</td>";
			table += "<td class=\"menu_item menu_off_4 menu_item_c\" id=\"menu_4_" + no + "\">" + items[2] + "</td>";
		}else{
			table += "<td class=\"menu_item menu_off_1 menu_item_c\" id=\"menu_1_" + no + "\">" + "&nbsp;" + "</td>";
			table += "<td class=\"menu_item menu_off_2 menu_item_c\" id=\"menu_2_" + no + "\"><span style=\"white-space: nowrap;\">" + "" + "</span>";
			table += "<span class=\"menu_item menu_off_3 menu_item_c\" id=\"menu_4_" + no + "\">"  + "</span>" + "</td>";
			table += "<td class=\"menu_item menu_off_3 menu_item_c\" id=\"menu_3_" + no + "\">" + items[2] + "</td>";
		}
		table += "</tr></table>";

		var div = document.createElement("div");
		div.style.width = "100%";
		div.innerHTML = table;
//		if( items[1] == "separate" ){
//			div.className	= "separate";
//		}

		return( div );
	}


	if (!window[ 'include' ]) {
		//スクリプトのロード&初期化.
		function include(){
			var check = 0;
			try{
				eval("check = " + "xmlrpcQuote" );
			}catch(e){}

			if(check){
			}else{

				document.write("<link   type='text/css' rel='stylesheet' href='" + cssPath + "suggest.css'>");
				document.write("<script type='text/javascript' src='" + scriptPath + "xmlhttp.js'></script>");
				document.write("<script type='text/javascript' src='" + scriptPath + "initcompletion.js'></script>");
				document.write("<script type='text/javascript' src='" + scriptPath + "suggestObject.js'></script>");

				//部品群格納.
				suggestObjects = new Object();
				suggestObjects.iCount = 0;
				suggestObjects.items = new Array();

			}
		}
	}include();


	if (!window[ 'createSuggestObject' ]) {
		function createSuggestObject( id, callback, valueSetOption, mode, menuInfo, cookieName ){
			if( !id ){
				alert( 'Input tag id is not found' );
				return;
			}

			// Mac Safari 5.1 のサジェスト不具合対応
			try {
				// Safariの場合
				if ( navigator.userAgent.indexOf( "Safari" ) > 0 ) {
					// Safari5以上の場合
					if ( navigator.userAgent.indexOf( "Version/5" ) > 0 ) {
						if ( navigator.userAgent.indexOf( "Version/5.0" ) > 0 ) {
							// Safari5.0.xの場合
						}
						else {
							// Safari5.1.x以上の場合はリターン
							return;
						}
					}
					// Add 2012/08/13 T.fukuoka Safari6対応 Start
					if ( navigator.userAgent.indexOf( "Version/6" ) > 0 ) {
							// Safari6の場合はリターン
							return;						
					}
					// Add 2012/08/13 T.fukuoka Safari6対応 End
				}
			} catch( e ){}
			

			suggestObjects.items[ suggestObjects.iCount ] = new Object();

			suggestObjects.items[ suggestObjects.iCount ].id = id || null;

			//alert(callback);
			suggestObjects.items[ suggestObjects.iCount ].callback = callback || null;

			if( valueSetOption || valueSetOption == 0 ){
				suggestObjects.items[ suggestObjects.iCount ].valueSetOption = valueSetOption;
			}else{
				suggestObjects.items[ suggestObjects.iCount ].valueSetOption = 1;
			}

			suggestObjects.items[ suggestObjects.iCount ].mode = mode || null;

			suggestObjects.items[ suggestObjects.iCount ].menuInfo = menuInfo || null;

			suggestObjects.items[ suggestObjects.iCount ].cookieName = cookieName || null;

			//alert(suggestObjects.items[ suggestObjects.iCount ].callback);
			//suggestObjects.items[ suggestObjects.iCount ].rpcObj = new xmlrpcQuote( 'suggestObjects.items[ ' + suggestObjects.iCount + ' ].rpcObj', suggestObjects.items[ suggestObjects.iCount ].id, suggestObjects.items[ suggestObjects.iCount ].mode, suggestObjects.items[ suggestObjects.iCount ].option, suggestObjects.items[ suggestObjects.iCount ].refcount, null, suggestObjects.items[ suggestObjects.iCount ].callback, suggestObjects.items[ suggestObjects.iCount ].valueSetOption, suggestObjects.items[ suggestObjects.iCount ].mktnOption );

			//setSuggestOption( 'idSearchForm_txt_SearchKeywords', function(){__doPostBack('idSearchForm_txt_SearchKeywords','');}, 1, null, { "top" : 0 , "left" : 0, "width": 360 } );
			//function xmlrpcQuote( myName, textboxId, ms, callback, valueSetOption, mode )
			suggestObjects.items[ suggestObjects.iCount ].rpcObj = new xmlrpcQuote( 
				'suggestObjects.items[ ' + suggestObjects.iCount + ' ].rpcObj', 
				suggestObjects.items[ suggestObjects.iCount ].id, 
				null, 
				suggestObjects.items[ suggestObjects.iCount ].callback, 
				suggestObjects.items[ suggestObjects.iCount ].valueSetOption, 
				suggestObjects.items[ suggestObjects.iCount ].mode,
				suggestObjects.items[ suggestObjects.iCount ].cookieName
				);

			if( suggestObjects.items[ suggestObjects.iCount ].menuInfo ){
				suggestObjects.items[ suggestObjects.iCount ].rpcObj.setMenuInfo( suggestObjects.items[ suggestObjects.iCount ].menuInfo );
			}

			suggestObjects.items[ suggestObjects.iCount ].rpcObj.initSerachFunc( initSerach );
			suggestObjects.items[ suggestObjects.iCount ].rpcObj.initResultDataFunc( initResultData );

			suggestObjects.iCount += 1;
		}
	}

	if (!window[ 'setSuggestOption' ]) {
		function setSuggestOption( id, callback, valueSetOption, mode, menuInfo, cookieName ){

			//alert(callback);
			createSuggestObject( id, callback, valueSetOption, mode, menuInfo, cookieName );

		}
	}


	if (!window[ 'setMenuInfo' ]) {
		//メニューのスタイル指定.
		function setMenuInfo( objNo, menuInfo ) {
			suggestObjects.items[ objNo ].rpcObj.setMenuInfo( menuInfo );
		}
	}
	

/*動画検索対応*/
	if (!window[ 'setProductInfo' ]) {
		//ProductType指定.
		function setProductInfo( objNo, productInfo ) {
			
			if (suggestObjects.items[ objNo ]) {
				suggestObjects.items[ objNo ].rpcObj.setProductInfo( productInfo );
			}
		}
	}

