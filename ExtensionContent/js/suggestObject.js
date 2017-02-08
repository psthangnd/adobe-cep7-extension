//------------------------------------------------------------------------------
//	Filename	: quote_xml.js
//	Content		: QZS XMLRPC Quick Quote Search XML for JavaScript
//	Date		: 2007/04/05
//	Version		: 1.0.0.0
//	Author		: Atsushi Kawashima ( QZC )
//	Copyright	: Copyright (c) 2007 Q'z Creative Co.,Ltd.
//	History		: 2007/04/05 -1.0.0.0
//				: Ver.1
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 宣言部
//------------------------------------------------------------------------------

	//オブジェクト宣言.
	function xmlrpcQuote( myName, textboxId, ms, callback, valueSetOption, mode, cookieName )
	{
		//部品群格納.
		this.__items = new Object();


		//XHR方式.
		this.__items.itemXmlHttp	= new Qzsxmlrpc();


		//識別名を格納.
		this.__items.myName	= myName; 
		//テキストボックスのIDを格納.
		this.__items.textboxId	= textboxId; 

		//リフレッシュレート.
		this.__items.ms				= ms || 500; 

		//alert(callback);
		//callbackを格納.
		this.__items.callback	= callback || null; 

		//valueSetOptionを格納. 1 : メニュー選択時、テキストボックスに値を入力.
		if( valueSetOption || valueSetOption == 0 ){
			this.__items.valueSetOption	= valueSetOption; 
		}else{
			this.__items.valueSetOption	= 1; 
		}

		//モードを格納.
		if( mode || mode != 0 ){
			this.__items.mode	= mode; 
		}else{
			this.__items.mode	= 0; 
		}
		//Cookie名 設定した名前の値が"1"もしくはCookie名が設定されていない場合は作動.
		//"0"の場合は動作しない.
		this.__items.cookieName	= cookieName || null; 

		//080414 ページデータ.
		this.__items.pagedata = null;
		
		/*動画検索対応*/
		//ProductType指定.
		this.__items.productInfo = 0; 
		
		//検索クエリー設定関数.
		this.initSerachFunc = function ( func ){
			__items.initSerach = func
			//alert(__items.initSerach);
		}

		//検索関数.
		this.__items.serach = function (){
		//function search()

			if (__items.itemTextBox) {
				var keyword = __items.itemTextBox.value;
			}

			//alert( __items.cookieName + ":" + getSuggestCookie( __items.cookieName ) );
			//Cookie確認.
			if( "" != __items.cookieName && '0' == getSuggestCookie( __items.cookieName ) ){
				return(0);
			}

			if( keyword != '' ){

				//前回行った検索語と違ったら検索.
				if( __items.oldKeyword != keyword ){
					//前回行った検索語を覚える.
					__items.oldKeyword = keyword;
					// 補完候補を消去
					__items.itemTextBox.forciblyClearCompletionItems();

					// 動的にscriptタグを作ってAPIを呼び出す
					var baseurl = __items.url;


					//検索クエリー設定関数.
					baseurl += "?" + __items.initSerach( keyword );
					
					/*動画検索対応*/
					//ProductType指定.
					baseurl += "&" + "ptype=" + __items.productInfo;
					
			        //080414 ページデータ.
					if( __items.pagedata ){
						//alert( __items.pagedata['more'] );
						if( __items.pagedata['run'] == "1" && __items.pagedata['more'] == "1" ){
							__items.pagedata['run'] = '0';
							baseurl += "&" + "no=" + ( __items.pagedata['no'] + 1 ) ;
							baseurl += "&" + "size=" + ( __items.pagedata['size'] ) ;
							//alert( baseurl );
						//080602 ページ遷移巻き戻し.
						}else if( __items.pagedata['run'] == "1" && __items.pagedata['prev'] == "1" ){
							__items.pagedata['run'] = '0';
						}
					}
					//baseurl += "&" + "no=2";
					//baseurl += "&" + "size=5";

					//JSONP用設定. Outputの指定,コールバック名
					baseurl += "&output=json&callback=" + __items.myName + ".resultcallback";
					baseurl += "&t=" + getRand();
					//alert( baseurl );

					//rpc server.
					__items.itemXmlHttp.url = baseurl;
					__items.itemXmlHttp.Submit( function(response){
							try {
								//alert( response );
								eval( response );
							} catch (e) {}
						} );

					//前回行った検索語を覚える.
					__items.oldKeyword = keyword;
				}
			}else{
				//document.form.title.options.length = 0;
				__items.pagedata = null;
				__items.oldKeyword = '';

				// 補完候補を消去
				__items.itemTextBox.forciblyClearCompletionItems();

			}
		}

		//結果表示関数.
		this.initResultDataFunc = function ( func ){
			__items.initResultData = func
		}

		//結果表示関数.
		this.resultcallback = function ( responseData ) {
		//function resultcallback(result)

			// 補完候補を消去
			__items.itemTextBox.forciblyClearCompletionItems();

			try{

				if( responseData ){

					//alert( "ok" );
					var dataBuf = __items.initResultData( responseData )

					var option = dataBuf[0];
					var value = dataBuf[1];
					var separate = dataBuf[2];

			        //080414 ページデータ.
					__items.pagedata = dataBuf[3];

					// 補完候補を表示
					// 第一引数: 候補表示対象(文字列の配列)
					// 第二引数: 候補値対象(文字列の配列)
					
					//9999/99/99 kuramochi ここコメントすると表示されなくなる 
					__items.itemTextBox.showCompletionItems( option, value, separate );
					return;
				}else{
					// 補完候補を消去
					__items.itemTextBox.forciblyClearCompletionItems();
					//alert(responseData);
					return;
				}

			}
			catch(e){
				return;
			}

		}

		//メニュー選択時動作.
		this.__items.menuOnClick = function( value ) {

			var opValue = value.replace('\n','');
			//alert(opValue);

			//080414 ページ遷移.
			//080602 ページ遷移巻き戻し.
			if( opValue == "func:[more]" || opValue == "func:[prev]" ){
				__items.oldKeyword = '';
				__items.pagedata['run'] = '1';
				__items.serach();
			}else{

				__items.oldKeyword = opValue;
//alert("test:"+opValue+"/"+ __items.valueSetOption);
				if( __items.valueSetOption == 0 ){
					__items.itemTextBox.value = '';
				}else{
					__items.itemTextBox.value = opValue;
				}

				//alert(__items.callback);
				if( __items.callback != null ){
					__items.callback( __items.textboxId, value );
				}
			}
	
		}

		//メニュー非表示時動作.
		this.__items.menuOff = function( key ) {

			if(key == 40){ // down
				__items.pagedata = null;
				__items.oldKeyword = '';
			}

		}


		// 初期化.
		this.__items.itemTextBox	= document.getElementById( textboxId ); 
 		initCompletion( this.__items.itemTextBox, this.__items.menuOnClick, this.__items.menuOff ); 

		if (this.__items.itemTextBox) {
			//入力済み検索語を再度検索させない.
			this.__items.oldKeyword = this.__items.itemTextBox.value;
		}
		
		//デファイン.
			//rpc server.
			this.__items.url = "/ajax/key_search.aspx";

//			__items.itemTextBox.setCompletionWidth( "270" );

		var __items = this.__items;

		//ドキュメントに設定.
			var scriptTag = document.createElement("script");
			scriptTag.id = 'import';
			scriptTag.charset= 'UTF-8';
			//scriptTag.charset= 'Shift_JIS';
			//document.body.appendChild(scriptTag);
			document.getElementsByTagName("head")[0].appendChild(scriptTag);


/*
		//タイマーで定期的にキーワードを監視.
		if( this.__items.mode == 0 ){

			setInterval( this.__items.Get_Quote , this.__items.ms );

		}ele if( this.__items.mode == 1 ){

			setInterval( this.__items.Get_QuoteEx , this.__items.ms );

		}
*/

		//タイマーで定期的にキーワードを監視.
		setInterval( this.__items.serach , this.__items.ms );





		//メニューのスタイル指定.
		this.setMenuInfo = function( menuInfo ) {
			if (this.__items.itemTextBox) {
				__items.itemTextBox.setMenuInfo( menuInfo );
			}
		}

		//DBS情報設定.
		this.setrpcInfo = function ( rpcInfo ) {
			if( rpcInfo != null ){

				//rpc server.
				if( rpcInfo['rpcurl'] ){
					__items.url = rpcInfo['rpcurl'];
				}

			}
		}

		/*動画検索対応*/
		//ProductType指定.
		this.setProductInfo = function( productInfo ) {
			this.__items.productInfo	= productInfo; 
		}

	}

	function getSuggestCookie( theName )
	{
		value = 1;

		theName = theName + "="

		//theCookie = document.cookie+";";
		theCookie = document.cookie;
		//alert(theCookie);
		pos = theCookie.indexOf( theName );

		if( pos != -1){
			start = pos + theName.length
			end = theCookie.indexOf(";",start);
			if( end == -1) end = theCookie.length
			value =  decodeURIComponent(theCookie.substring( start, end ) );
		}
		return value;
	}


	function getRand(){
		var now = new Date(); 

		//var year = now.getYear(); // 年 
		//var month = now.getMonth() + 1; // 月 
		//var day = now.getDate(); // 日 
		//var hour = now.getHours(); // 時 
		//var min = now.getMinutes(); // 分 
		var sec = now.getSeconds(); // 秒 
		var msec = now.getMilliseconds(); // 秒 
		return( Math.random() * sec * msec );
	}

/*
	function createMenuItem( no, items ){
//alert('ok');
*//*		var table = "<table class=\"menu_item\" style=\"width:100%;\" cellspacing=\"0\" cellpadding=\"0\"><tr class=\"menu_item\">";
		table += "<td class=\"menu_item menu_off_1\" id=\"menu_1_" + no + "\">" + items[0] + "<span class=\"menu_off_2\" id=\"menu_2_" + no + "\"> [" + items[1] + "]</span></td>";
		table += "<td class=\"menu_item menu_off_3\" id=\"menu_3_" + no + "\">" + items[2] + "</td>";
		table += "</tr></table>";
		return( table );
*//*
		var table = "<table class=\"menu_item\" style=\"width:100%;\" cellspacing=\"0\" cellpadding=\"0\"><tr class=\"menu_item\">";
		table += "<td class=\"menu_item menu_off_1 menu_item_c\" id=\"menu_1_" + no + "\">" + items[0] + "</td>";
		table += "<td class=\"menu_item menu_off_2 menu_item_c\" id=\"menu_2_" + no + "\"><span style=\"white-space: nowrap;\">" + items[1] + "</span>";
		table += "<span class=\"menu_item menu_off_3 menu_item_c\" id=\"menu_3_" + no + "\">" + items[2] + "</span>" + "</td>";
		table += "<td class=\"menu_item menu_off_4 menu_item_c\" id=\"menu_4_" + no + "\">" + items[3] + "</td>";
		table += "</tr></table>";
		return( table );
	}
*/
