
<!--
/*　ここです。*/


	var ver = navigator.appVersion;	
	var agent = navigator.userAgent;
	var ap = navigator.appName;
	var Mac2 = ver.indexOf('Mac',0) != -1;
	var IE = ap.indexOf("Microsoft Internet Explorer",0) != -1; 
	var MIE5 = ((Mac2 && ap.indexOf('MSIE 5',0) != -1) || (Mac2 && IE && parseInt(ver) >= 4));

	if(!MIE5){

		var Mac   = navigator.userAgent.indexOf("Mac") != -1   ? true : false;
		
		//alert(navigator.userAgent);
		
		function mdown(e) {
		alert(navigator.appName);
		if (navigator.appName == "Microsoft Internet Explorer") {
			if (event.button == 2 || (Mac && (event.ctrlKey || event.keyCode == 91))) {
				alert("作品の本使用には料金が発生します。事前に使用条件をご確認ください。");
				return(true);
			}
		} else if (navigator.appName == "Netscape") {
			if (e.which == 3 || e.modifiers == 2 || e.ctrlKey) {
				alert("作品の本使用には料金が発生します。事前に使用条件をご確認ください。");
				return true;
			}
		} 
		}

		function noright(e){
			
			if (navigator.appName == "Microsoft Internet Explorer") {
				if(event.srcElement.tagName=="IMG" && event.srcElement.name == "Thumbnail"){
					alert("作品の本使用には料金が発生します。事前に使用条件をご確認ください。");
				}
				return true;
	 		}else if (navigator.appName == "Netscape") {
				if(e.target.name== "Thumbnail"){
				alert("作品の本使用には料金が発生します。事前に使用条件をご確認ください。");
				}
				return true;
			}
			else{
				alert("作品の本使用には料金が発生します。事前に使用条件をご確認ください。");
				return true;		
			}
			
		}

		document.oncontextmenu = noright;
		
		if (document.all && (Mac || ! document.getElementById)) {
			document.onmousedown = mdown;
			document.onkeydown = mdown;
		} else if (document.layers) {
			window.captureEvents(Event.MOUSEDOWN | Event.modifiers | Event.KEYDOWN);
			window.onmousedown = mdown;
			window.onkeydown = mdown;
		} else if(navigator.userAgent.indexOf("Netscape6")!=-1){
			//onmousedownだとalertが表示、同時にデフォルトのコンテクストメニューも表示される
			//なのでonmouseupを使います
  			document.onmouseup = mdown; 
			document.onkeydown = mdown;
		}
	}

-->
