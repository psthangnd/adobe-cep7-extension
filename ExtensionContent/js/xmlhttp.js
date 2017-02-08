//------------------------------------------------------------------------------
//	Filename	: qzsxmlrpc.js
//	Content		: QZS XMLRPC Module for JavaScript
//	Date		: 2006/04/05
//	Version		: 1.0.0.0
//	Author		: Atsushi Kawashima ( QZC )
//	Copyright	: Copyright (c) 2006 Q'z Creative Co.,Ltd.
//	History		: 2005/04/05 -1.0.0.0
//				: Ver.1
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// オブジェクト宣言部
//------------------------------------------------------------------------------

	//オブジェクト宣言.
	function Qzsxmlrpc( xmlrpcInfo )
	{
		this.xmlHttp	= this.getXmlHttpObject();

		//プロパティ------------------------

		//クエリーストリング.
			this.send = 'dummy';

		//[XMLRPC関連].
		if( xmlrpcInfo != null ){
			//HTTPメソッド.
			this.method = xmlrpcInfo['method'] || 'post';

			//XMLRPCサーバURL.
			this.url = xmlrpcInfo['url'] || '';

			//同期非同期.
			this.mode = xmlrpcInfo['mode'] || true;
		}else{
			//HTTPメソッド.
			this.method = 'post';

			//XMLRPCサーバURL.
			this.url = '';

			//同期非同期.
			this.mode = true;
		}

	}

//------------------------------------------------------------------------------
// オブジェクト宣言部
//------------------------------------------------------------------------------

	//通信中インスタンス管理
	Qzsxmlrpc.insAry = [];
	
	//通信中インスタンスを途中切断
	Qzsxmlrpc.allAbort = function(){

		//xmlhttp通信停止
		for(var i=0; i<Qzsxmlrpc.insAry.length; i++){
			Qzsxmlrpc.insAry[i].abort();
		}
	};

	//通信中インスタンス配列から自分を削除
	Qzsxmlrpc.remove = function(xmlhttp){
		for(var i=0; i<Qzsxmlrpc.insAry.length; i++){
			if(Qzsxmlrpc.insAry[i] == xmlhttp){
				Qzsxmlrpc.insAry.splice(i,1);
				break;
			}
		}
	};

	Qzsxmlrpc.prototype.Submit = function ( funk ){

		var xmlHttp = this.xmlHttp;

		//ブラウザ判定
		var ua = navigator.userAgent
		var safari	= ua.indexOf("Safari")!=-1
		var konqueror = ua.indexOf("Konqueror")!=-1
		var mozes	 = ((a=navigator.userAgent.split("Gecko/")[1] )
				?a.split(" ")[0]:0) >= 20011128 

		xmlHttp.open( this.method, this.url, this.mode);

		if( this.method.match(/post/i) )
			xmlHttp.setRequestHeader("Content-Type","text/xml");
			//xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

		if(window.opera || safari || mozes){
			xmlHttp.onload = function () {
				//通信管理から削除
				Qzsxmlrpc.remove(xmlHttp);
				if( xmlHttp.status == 200 ){
					funk( xmlHttp.responseText );
				}else{
					//alert("xmlhttp status ="+ xmlHttp.status );
				}
			}
		} else {
			xmlHttp.onreadystatechange = function (){
				//通信成功.
				if( xmlHttp.readyState == 4 ){
					//通信管理から削除
					Qzsxmlrpc.remove(xmlHttp);
					if( xmlHttp.status == 200 ){
						funk( xmlHttp.responseText );
					}else{
						//alert("xmlhttp status ="+ xmlHttp.status );
					}
				}else{
					;
				}
				
			};
		}

		//通信管理に追加
		Qzsxmlrpc.insAry.push(xmlHttp);
		xmlHttp.send( this.send );
	}

	Qzsxmlrpc.prototype.SubmitXML = function ( submitXml, funk ){

		var xmlHttp = this.xmlHttp;

		//ブラウザ判定
		var ua = navigator.userAgent
		var safari	= ua.indexOf("Safari")!=-1
		var konqueror = ua.indexOf("Konqueror")!=-1
		var mozes	 = ((a=navigator.userAgent.split("Gecko/")[1] )
				?a.split(" ")[0]:0) >= 20011128 

		xmlHttp.open( this.method, this.url, this.mode );

		if( this.method.match(/post/i) )
			xmlHttp.setRequestHeader("Content-Type","text/xml");
			//xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

		if(window.opera || safari || mozes){

			xmlHttp.onload = function () {
				//通信管理から削除
				Qzsxmlrpc.remove(xmlHttp);
				if( xmlHttp.status == 200 ){
					funk( xmlHttp.responseXML );
				}else{
					//alert("xmlhttp status ="+ xmlHttp.status );
				}
			}

		} else {
			xmlHttp.onreadystatechange = function (){
				//通信成功.
				if( xmlHttp.readyState == 4 ){
					//通信管理から削除
					Qzsxmlrpc.remove(xmlHttp);
					if( xmlHttp.status == 200 ){
						funk( xmlHttp.responseXML );
					}else{
						//alert("xmlhttp status ="+ xmlHttp.status );
					}
				}else{
					;
				}
				
			};
		}

		//通信管理に追加
		Qzsxmlrpc.insAry.push(xmlHttp);

		//センド
		xmlHttp.send( submitXml );
	}

	Qzsxmlrpc.prototype.SubmitXML2 = function ( submitObj, funk ){

		this.submitObj = submitObj;

		var xmlHttp = this.xmlHttp;

		//ブラウザ判定
		var ua = navigator.userAgent
		var safari	= ua.indexOf("Safari")!=-1
		var konqueror = ua.indexOf("Konqueror")!=-1
		var mozes	 = ((a=navigator.userAgent.split("Gecko/")[1] )
				?a.split(" ")[0]:0) >= 20011128 

		xmlHttp.open( this.method, this.url, this.mode );

		if( this.method.match(/post/i) )
			xmlHttp.setRequestHeader("Content-Type","text/xml");
			//xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

		if(window.opera || safari || mozes){

			xmlHttp.onload = function () {
				//通信管理から削除
				Qzsxmlrpc.remove(xmlHttp);
				if( xmlHttp.status == 200 ){
					funk( this.submitObj, xmlHttp.responseXML );
				}else{
					//alert("xmlhttp status ="+ xmlHttp.status );
				}
			}

		} else {
			xmlHttp.onreadystatechange = function (){
				//通信成功.
				if( xmlHttp.readyState == 4 ){
					//通信管理から削除
					Qzsxmlrpc.remove(xmlHttp);
					if( xmlHttp.status == 200 ){
						funk( xmlHttp.responseXML );
					}else{
						//alert("xmlhttp status ="+ xmlHttp.status );
					}
				}else{
					;
				}
				
			};
		}

		//通信管理に追加
		Qzsxmlrpc.insAry.push(xmlHttp);

		//センド
		xmlHttp.send( this.submitObj.xmldoc );
	}


	Qzsxmlrpc.prototype.getXmlDoc = function(){
		if(!this.xmldoc){
			this.xmldoc = getXmlObject();
		}
		return this.xmldoc;
	};

	window.onunload = function(){Qzsxmlrpc.allAbort()};



//------------------------------------------------------------------------------
/*
	//ブラウザ判定
	var ua = navigator.userAgent
	var safari	= ua.indexOf("Safari")!=-1
	var konqueror = ua.indexOf("Konqueror")!=-1
	var mozes	 = ((a=navigator.userAgent.split("Gecko/")[1] )
			?a.split(" ")[0]:0) >= 20011128 

	//受信処理
	//operaはonreadystatechangeに多重レスバグがあるのでonloadが安全
	//Moz,FireFoxはoj.readyState==3でも受信するので通常はonloadが安全
	//Win ieではonloadは動作しない
	//Konquerorはonloadが不安定
	//参考http://jsgt.org/ajax/ref/test/response/responsetext/try1.php
	//参考http://allabout.co.jp/internet/javascript/closeup/CU20050615A/index.htm

	if(opera || safari || mozes){
		oj.onload = function () { callback_onload(oj); }
	} else {

		oj.onreadystatechange =function () 
		{
			if ( oj.readyState == 4 ){
				//alert(oj.status+'--'+oj.getAllResponseHeaders());
				callback_onload(oj);
			}
		}
	}
*/
/*
//受信処理
//operaはonreadystatechangeに多重レスバグがあるのでonloadが安全
//Moz,FireFoxはoj.readyState==3でも受信するので通常はonloadが安全
//Win ieではonloadは動作しない
//Konquerorはonloadが不安定
//参考http://jsgt.org/ajax/ref/test/response/responsetext/try1.php
if(opera || safari || mozes){
	oj.onload = function () { callback_onload(oj); }
} else {

	oj.onreadystatechange =function () 
	{
		if ( oj.readyState == 4 ){
			//alert(oj.status+'--'+oj.getAllResponseHeaders());
			callback_onload(oj);
		}
	}
}
*/
/*
	//クラス変数.
	//XmlHttpObject.
	Qzsxmlrpc.xmlHttp	= getXmlHttpObject();


	function Response(){

		//alert( Qzsxmlrpc.xmlHttp.status );
		//通信成功.
		if( Qzsxmlrpc.xmlHttp.readyState == 4 ){
			if( Qzsxmlrpc.xmlHttp.status == 200 ){
				alert( 'OK!' );
				//帰ってきたデータをDOMへ格納.
				this.res_xmlDoc = Qzsxmlrpc.xmlHttp.responseXML;
				alert( this.res_xmlDoc.xml );
				//document.getElementById('debug').value = this.res_xmlDoc.xml;
				this.Set_title();
			}else{
				alert( Qzsxmlrpc.xmlHttp.status );
			}
		}
	}

	Qzsxmlrpc.prototype.Submit = Submit;
	function Submit( funk )
	{
		Qzsxmlrpc.xmlHttp.open( this.method, this.url, true);
		//callback.
		//Qzsxmlrpc.xmlHttp.onreadystatechange = this.Response;
		Qzsxmlrpc.xmlHttp.onreadystatechange = funk;
		//Qzsxmlrpc.xmlHttp.send(null);
		Qzsxmlrpc.xmlHttp.send( this.xmldoc );
	}
*/

//------------------------------------------------------------------------------
// XML、XMLHTTPオブジェクト宣言部
//------------------------------------------------------------------------------
	//オブジェクト作成
	Qzsxmlrpc.prototype.getXmlHttpObject = function () {
		var xmlhttp;
		/*@cc_on
			@if (@_jscript_version >= 5)
				try {
					xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try {
						xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
					} catch (E) {
						xmlhttp = false;
					}
				}
			@else
				xmlhttp = false;
			@end @*/

			if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
				try {
					xmlhttp = new XMLHttpRequest();
//alert('ok');
					xmlhttp.overrideMimeType("text/xml; charset=UTF-8");; 
				} catch (e) {
					xmlhttp = false;
				}
			}
			return xmlhttp;
	}


//------------------------------------------------------------------------------
// XMLオブジェクト生成部
//------------------------------------------------------------------------------

	//xmlオブジェクト作成.
	Qzsxmlrpc.prototype.getXmlObject = function () {
		var xmldom;

		Qzsxmlrpc.isMoz	= false;
		Qzsxmlrpc.isIE		= false;
		Qzsxmlrpc.isASV	= false;

		try{
			xmldom=document.implementation.createDocument("", "", null);
			Qzsxmlrpc.isMoz=true;
		}catch(e){
			try{
				xmldom=new ActiveXObject("Msxml2.DomDocument.4.0");
				Qzsxmlrpc.isIE=true;
			}catch(e){
				try{
					xmldom=new ActiveXObject("Msxml2.DomDocument");;
					Qzsxmlrpc.isIE=true;
				}catch(e){
					try{
						xmldom=new ActiveXObject("microsoft.XMLDOM");isIE=true;
						Qzsxmlrpc.isIE=true;
					}catch(e){
						throw xmldom=null;
					}
				}
			}
		}
		return xmldom;
	}

	//xmlファイル読み込み.
	Qzsxmlrpc.prototype.loadXml = function ( url, func ) {

		var xmldom;

		xmldom = Qzsxmlrpc.getXmlObject();

		// code for IE
		if ( Qzsxmlrpc.isIE ){
			xmlDoc.async=false;
			//xmlDoc.load("note.xml");
			if(xmlDoc.load(url)){func(xmlDoc);}

		// code for Mozilla, Firefox, Opera, etc.
		}else if (document.implementation && document.implementation.createDocument){

			xmlDoc.onload = function (){func(xmlDoc)}
			xmlDoc.load( url );

		}else{

			alert('Your browser cannot handle this script');

		}

		return xmldom;
	}

	//xml文字列パース.
	Qzsxmlrpc.prototype.parseXML=function(xml){
		var obj=null;
		Qzsxmlrpc.isMoz=false;
		Qzsxmlrpc.isIE=false;
		Qzsxmlrpc.isASV=false;
		try{
			var p=window.parseXML;
			if(p==null){
				throw "No ASV paseXML";
			}
			Qzsxmlrpc.isASV=true;
		}catch(e){
			try{
				obj=new DOMParser();
				Qzsxmlrpc.isMoz=true;
			}catch(e){
				try{
					obj=new ActiveXObject("Msxml2.DomDocument.4.0");
					Qzsxmlrpc.isIE=true;
				}catch(e){
					try{
						obj=new ActiveXObject("Msxml2.DomDocument");
						Qzsxmlrpc.isIE=true;
					}catch(e){
						try{
							obj=new ActiveXObject("microsoft.XMLDOM");
							Qzsxmlrpc.isIE=true;
						}catch(e){
							throw new mod.NoXMLParser(e);
						}
					}
				}
			}
		}

		return obj;

		try{
			if(Qzsxmlrpc.isMoz){
				obj=obj.parseFromString(xml,"text/xml");
				return obj;
			}else if(Qzsxmlrpc.isIE){
				obj.loadXML(xml);
				return obj;
			}else if(Qzsxmlrpc.isASV){
				return window.parseXML(xml,null);
			}
		}catch(e){
			throw new mod.ParsingFailed(xml,e);
		}

	};

