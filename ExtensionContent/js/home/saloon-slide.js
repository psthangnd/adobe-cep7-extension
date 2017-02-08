$(function(){
	
	if(document.getElementById("csitelogo")!= null){
		var siteid = $("#csitelogo").attr("name"); //カスタムサイトならIDを取得
	}
	
	var setImg = '#bnr-cover li'; //スライドの1セット
	var slidenum = $(setImg).length; //スライドの数をカウント＝スライド番号のmax取得
	
	var customslide = $("#bnr-cover li:first-child").hasClass("sln-text0"); //カスタムスライドありかどうかの判定を、1枚目のclassで
	
//	var sst; //スライドの一番最初の番号を定義
//	var fadeSpeed = 600; //スライドするスピード
//	var switchDelay = 9000; //1つのスライドが見えている秒数
//		
//	if(customslide){ //カスタムスライドありなら「0」スタート、そうでなければ「1」スタート
//		sst = 0;
//		slidenum = slidenum - 1;
//	} else {
//		sst = 1;
//	}
	
	var edlimit = $("#nav-edi a").size();//Editorial が制限されているかどうかを判別
	if(edlimit==0){//制限中ならEditorialスライドを削除する
		bnrcover = $("#bnr-cover li");
		bnrcover.each(function(){
			slidelinksrc = $(this).find("a").attr("href").indexOf("/editorial/");
			if(slidelinksrc >= 0){
				ediclass = $(this).attr("class").split("sln-text")[1];
				edinum = parseInt(ediclass.split(" ")[0]);
				follownum = parseInt(slidenum - edinum);
				lastnum = parseInt(edinum + follownum);
				for(eds = edinum; eds < lastnum; eds++){
					nowclassname = "sln-text" + parseInt(eds);
					nextclassname = "sln-text" + parseInt(eds+1);
					nextclass = "." + nextclassname;
					$(nextclass).removeClass(nextclassname).addClass(nowclassname);
				}
				$(this).remove();
				slidenum = slidenum - 1
			}
		});
	}
	
	if(customslide){ //カスタムスライドの有無で出し分け
		$("#bnr-cover li:last-child").remove();
		var randNum = 0; // カスタムスライドだけを選択するようにする
	} else {
		var randNum = Math.floor(Math.random()*slidenum) + 1; //カスタムのスライド定義がないなら、乱数を発生させる
	}
	
	nowSlnNum = ".sln-text" + randNum;	
	$(nowSlnNum).css("display","block");
	
	// カスタム挙動と、IP DESIGN SERVICE の検知
//	if($("#csitelogo").length > 0){
//		var csiteid = $("#csitelogo").attr("name"); //site id 取得
//		var priventid = ["194","19107","10239"];
//		ipdflag = $.inArray(csiteid, priventid);
//		if(ipdflag != -1 && $(".sln-text0").length > 0){// iP Design Service のテスト
//			for(k=1;k<=slidenum;k++){
//				remslide = ".sln-text" + k;
//				$(remslide).remove();
//			}
//			$(".sln-text0").css({"left":'0',"z-index":'1998'});
//			return false;
//		}
//	}
		
//	for(j=sst; j<=slidenum; j++){ //サルーンのナビゲーションの挿入
//		$('#saloon-nav').append('<li class="slidenav' + j + '"><a href="#slidenav' + j + '">' + j +'</a></li>');
//	}
//	
//	//サルーンナビゲーションの配置する位置計算
//	navwidth = -($("ul#saloon-nav").width()/2);
//	$("ul#saloon-nav").css("margin-left",navwidth);
	
	//クッキー操作
//	salooncount = $.cookie("salooncount");
//	if(salooncount == null){ //初めての人には初期値を設定する
//		salooncount = sst;
//		$.cookie("salooncount", sst);
//	}
//	
//	var i = parseInt(salooncount); //基本となる変数の初期値
//	if(!customslide && i==0){ //カスタムではないのに「0」だったら「1」に修正
//		i = 1;
//	}
//	if(customslide && i==slidenum+1){ //カスタムなのにHOMEのラストだったら「0」に修正
//		i = 0;
//	}
//	
//	$(setImg).css("left","100%"); //サルーンの初期設定
//	
//	firstslide = ".sln-text" + i;
//	$(firstslide).css({"left":'0',"z-index":'1998'});
//	
//	firstnav = ".slidenav" + i + " a"; //ナビゲーションの初期値にiを適用
//	$(firstnav).addClass("current");
//	
//	function fadeImage(){ //時間ごとに叩くプログラム
//		var next = i + 1;
//		if(next > slidenum){next = sst;}
//		var nowscene = '.sln-text' + i;
//		var nowlink = '.slidenav' + i + " a";
//		var nextscene = '.sln-text' + next;
//		var nextlink = '.slidenav' + next + " a";
//		
//		$(nowscene).css({"left":'0',"z-index":'1998'});
//		$(nowlink).removeClass("current");
//		$(nextscene).css({"left":"100%","z-index":'1999'});
//		$(nextscene).animate({left:'0'},fadeSpeed,function(){$(nowscene).css({"left":'100%',"z-index":'1999'});});
//		$(nextlink).addClass("current");
//		
//		i++;
//		if(i > slidenum){i = sst;}
//		$.cookie("salooncount", i);
//	}
//	
//	clossfade = setInterval(fadeImage , switchDelay); //スライドする間隔のタイマー
//	
//	$('#saloon-nav li a').click(function(){ //ナビゲーションをクリックした時の挙動
//		clearInterval(clossfade); //タイマー一時停止
//		clicked = $(this).attr("href").split("#slidenav")[1]; //押されたナビの番号を取得
//		cnum = parseInt(clicked); //取得した番号を文字列から整数に変換
//
//
//		if (i != cnum) {
//		selected = '.sln-text' + clicked; //押されたナビから表示するスライドのクラスを取得
//		selectedlink = '.slidenav' + clicked + " a"; //押されたナビのクラスを取得
//		for(k=sst; k<=slidenum; k++){
//			alltab = '.sln-text' + k; //全てのスライドのクラスを取得
//			alllink = '.slidenav' + k + " a"; //全てのナビのクラスを取得
//			var pastscene = '.sln-text' + i; //そのとき表示していたスライド
//			var pastlink = '.slidenav' + i + " a"; //そのとき表示していたスライド番号のナビ
//			if(k==cnum){
//				if(cnum<i){
//					$(selected).css({"left":"-100%","z-index":'1999'});
//				} else {
//					$(selected).css({"left":"100%","z-index":'1999'});
//				}
//				$(selected).animate({left:'0'},fadeSpeed,function(){$(pastscene).css({"left":'100%',"z-index":'1999'});}); //押された番号のスライドの挙動
//				$(selectedlink).addClass("current"); //ナビの現在位置表示クラスを追加
//			} else if(k==i){
//				//そのとき表示していたスライドの挙動
//				$(pastscene).css({"left":'0',"z-index":'1998'});
//				$(pastlink).removeClass("current");
//			} else {
//				$(alltab).css("left","100%"); //その他のスライドの挙動
//				$(alllink).removeClass("current"); //ナビの現在位置表示クラスを削除
//			}
//		}
//		i = cnum;
//		$.cookie("salooncount", i);
//		}
//		clossfade = setInterval(fadeImage , switchDelay);
//		return false;
//	});
	
});

function customOpenWin(uri, name, w, h, stts, scrl, resz){
	// 中央座標
	var left = Math.floor((screen.width - w) / 2);
	var top  = Math.floor((screen.height - h) / 2);
	// ウインドウを開く
	if (document.all) {
		var win = window.open(uri, name, "width="+w+",height="+h+",status="+stts+",scrollbars="+scrl+",resizable="+resz+",left="+left+",top="+top);
	} else {
		var win = window.open(uri, name, "width="+w+",height="+h+",status="+stts+",scrollbars="+scrl+",resizable="+resz+",screenX="+left+",screenY="+top);
	}
	// ウインドウを前面に移動
	win.focus();
}