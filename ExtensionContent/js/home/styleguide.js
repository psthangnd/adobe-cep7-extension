var jq = jQuery;

//===== Back Forward Cache の対応 =====//
jq(window).bind("unload",function(){});

jq(function(){
	
	//====== ユーザーエージェント ==========
	
	var ismsie = window.navigator.userAgent.toLowerCase().indexOf('msie') != -1;
	var isie7 = window.navigator.appVersion.toLowerCase().indexOf('msie 7.') != -1;
	var isie8 = window.navigator.appVersion.toLowerCase().indexOf('msie 8.') != -1;
	var isie9 = window.navigator.appVersion.toLowerCase().indexOf('msie 9.') != -1;
	var isie11 = window.navigator.appVersion.toLowerCase().indexOf('rv:11.') != -1;
	var isAndroid = navigator.userAgent.indexOf('Android') != -1;
	var isiphone = navigator.userAgent.indexOf('iPhone') != -1;
	var isipad = navigator.userAgent.indexOf('iPad') != -1;
	var isff = navigator.userAgent.indexOf('Gecko') != -1;

	//====== ディレクトリによる商材判定 ==========
	var url = location.href;
	var dircategory;
	if(url.indexOf("/illustration/")>0){
		var dircategory = "illustration";
	} else if(url.indexOf("/fineart/")>0){
		var dircategory = "fineart";
	} else if(url.indexOf("/archive/")>0){
		var dircategory = "archive";
	} else if(url.indexOf("/3dmodel/")>0){
		var dircategory = "treed";
	} else if(url.indexOf("/motion/")>0){
		var dircategory = "motion";
	} else if(url.indexOf("/sound/")>0){
		var dircategory = "sound";
	} else if(url.indexOf("/font/")>0){
		var dircategory = "font";
	} else if(jq("#home-user-tools").size()>0){
		var dircategory = "home";
	}
	
	//カテゴリ検索時のラジオボタン表示
	if(url.indexOf("/Category/result.aspx")>0){
		jq("#catsearchradio").css("display","block");
	} else {
		jq("#catsearchradio").css("display","none");
	}
	
	//====== ディレクトリによる商材判定 ==========
	var url = location.href;
	var dircategory;
	if(url.indexOf("/illustration/")>0){
		var dircategory = "illustration";
	} else if(url.indexOf("/fineart/")>0){
		var dircategory = "fineart";
	} else if(url.indexOf("/archive/")>0){
		var dircategory = "archive";
	} else if(url.indexOf("/3dmodel/")>0){
		var dircategory = "treed";
	} else if(url.indexOf("/motion/")>0){
		var dircategory = "motion";
	} else if(url.indexOf("/sound/")>0){
		var dircategory = "sound";
	} else if(url.indexOf("/font/")>0){
		var dircategory = "font";
	} else if(jq("#home-user-tools").size()>0){
		var dircategory = "home";
	} else if (url.indexOf("/topics") > 0) {
		var dircategory = "topics";
	} else if (url.indexOf("/Feature/014") > 0) {
		var dircategory = "feature014";
	} else if (url.indexOf("/Feature/019") > 0) {
		var dircategory = "feature019";
	} else if (url.indexOf("/Feature/023") > 0) {
		var dircategory = "feature023";
	} else if (url.indexOf("/Feature/result.aspx") > 0) {
		var dircategory = "featureresult";
	} else if (url.indexOf("/Feature") > 0) {
		var dircategory = "feature";
	}

	//====== よく使う共通要素の値を定義 ==========
	
	var headrheight = jq("#header").height(); //ヘッダーエリアの高さ
 var topBtn = jq('#goto-top'); //ページトップへのボタン
	var headSearch = jq('#user-tools'); //追従検索窓のエリア
	var lightboxBtm = jq('#lightbox.lb-b'); //ライトボックスのエリア
	
	//===== VISITフラグがない人（ド新規さん）対応 =====//
	nowhost = location.hostname;
	customurl = nowhost + "/custom/";
	nowloc = location.href.indexOf(customurl); //カスタムTopかどうか判断
	
	cookiecustom = jq.cookie("CookieNameAmanaCustomSiteFlg");
	cookieamanavisit = jq.cookie("firstvisit");
	
	//リファラを持っていて且つamanaを含まない時、naverまとめを判別するフラグを吐く
//	var docRef = document.referrer;
//	if(docRef.length !=0 && docRef.indexOf("amana")<0){
//		nflag = docRef.indexOf("matome.naver.jp");
//	}
	
	if(nowhost.indexOf("amanaimages.com") >= 0 || nowhost == "10.12.1.205" || nowhost.indexOf("10.75.10") != -1 || nowhost == "localhost"){
		dotcom = 1; //dotcom判定
	} else {
		dotcom = 0; //dotcom以外
	}
	
	if(nowloc < 0 && dotcom == 1 && cookiecustom != 1){
		jq.cookie("firstvisit",1,{expires:9999,path:'/'}); //カスタムじゃないときドットコムアクセスありを書き込む
	}

	//======カスタムでの検索結果簡易さしかえ==========
	phkwbox = "";
	if(jq("#idSearchForm_txt_SearchKeywords").size()>0){
		phkwbox = jq("#idSearchForm_txt_SearchKeywords").val();
	}
	if(jq(".notice .customuser").length > 0 && cookiecustom==1){
		jq(".notice .customuser").css("display","block"); //カスタムサイトで検索ヒットゼロ件だったときの文字追加
	}
	
	//======シャコッとキャプションつき画像==========
	
	//パターン１（3カラム用）
	if(jq(".img-caption01 a").size()>0){
		caption01 = jq(".img-caption01 a");
		coverpos = 142;
		txtmax = 15;
		caption01.children("span.caption-text").css({top:coverpos,opacity:'0.9'});
		
		if(caption01.children("span.category-line").size()>0){
			caption01.children("span.caption-title").each(function(){
				titletxt = jq(this).text();
				titlelength = titletxt.length;
				if(titlelength > txtmax){
					var showtitle = titletxt.substring(0,txtmax);
					var hidetitle = titletxt.substring(txtmax,titlelength);
					var inserttxt = showtitle + '<span class="hidetitle">' + hidetitle + '</span>' + '<span class="omit"> ...</span>';
					jq(this).html(inserttxt);
					jq(".hidetitle",this).hide();
				}
			});
		}
		
		//マスオーバー時にキャンプション表示
		jq('.img-caption01 a').hover(function(){
			jq("span.caption-text", this).stop().animate({top:'0',opacity:'0.8'},{queue:false,duration:160});
			jq("span.update-icon", this).stop().animate({opacity:'0'},{queue:false,duration:160});
			jq("span.category-line", this).stop().animate({opacity:'0'},{queue:false,duration:160});
			jq(".hidetitle",this).show();
			jq(".omit",this).hide();
		}, function() {
			jq("span.caption-text", this).stop().animate({top:coverpos,opacity:'0.9'},{queue:false,duration:160});
			jq("span.update-icon", this).stop().animate({opacity:'1'},{queue:false,duration:160});
			jq("span.category-line", this).stop().animate({opacity:'1'},{queue:false,duration:160});
			jq(".hidetitle",this).hide();
			jq(".omit",this).show();
		});
		
		staticCap = caption01.children("span.caption-static");
		if(staticCap.size()>0){
			staticLink = staticCap.parent("a");
			staticLink.hover(function(){
				jq(this).children(".thumb").stop().animate({opacity:'0.6'},{queue:false,duration:160});
			},function(){
				jq(this).children(".thumb").stop().animate({opacity:'1'},{queue:false,duration:160});
			});
		}
	}
	
	//パターン２（4カラム用）
	if(jq(".img-caption02 a").size()>0){
		caption02 = jq(".img-caption02 a");
		coverpos2 = 120;
		txtmax2 = 15;
		caption02.children("span.caption-text").css({top:coverpos2});
		
		if(caption02.children("span.category-line").size()>0){
			caption02.children("span.caption-title").each(function(){
				titletxt2 = jq(this).text();
				titlelength2 = titletxt2.length;
				if(titlelength2 > txtmax2){
					var showtitle2 = titletxt2.substring(0,txtmax2);
					var hidetitle2 = titletxt2.substring(txtmax2,titlelength2);
					var inserttxt2 = showtitle2 + '<span class="hidetitle">' + hidetitle2 + '</span>' + '<span class="omit"> ...</span>';
					jq(this).html(inserttxt2);
					jq(".hidetitle",this).hide();
				}
			});
		}
		
		//マスオーバー時にキャンプション表示
		jq('.img-caption02 a').hover(function(){
			jq("span.caption-text", this).stop().animate({top:'0'},{queue:false,duration:160});
			jq("span.update-icon", this).stop().animate({opacity:'0'},{queue:false,duration:160});
			jq("span.category-line", this).stop().animate({opacity:'0'},{queue:false,duration:160});
			jq(".hidetitle",this).show();
			jq(".omit",this).hide();
		}, function() {
			jq("span.caption-text", this).stop().animate({top:coverpos2},{queue:false,duration:160});
			jq("span.update-icon", this).stop().animate({opacity:'1'},{queue:false,duration:160});
			jq("span.category-line", this).stop().animate({opacity:'1'},{queue:false,duration:160});
			jq(".hidetitle",this).hide();
			jq(".omit",this).show();
		});
	}
	
	//======スクロール対応==========
	
	if (typeof ! isiphone && ! isipad && ! isAndroid){
		if(topBtn.length>0){ //スクロールしてトップ
			topBtn.click(function (){
				jq('body,html').animate({
					scrollTop: 0
				}, 500);
				return false;
			});
		}
		
		jq("a[href^='#']").click(function(){
			// 商材セレクターの選択時処理
			if(jq(this).parent().parent().parent().hasClass("selectbox")){
				var pdhref= jq(this).attr("href");
				var fontsound = jq(this).parent().parent().parent().siblings("a");
				if((fontsound.size() == 1 && fontsound.attr("href") == "#font")||(fontsound.size() == 1 && fontsound.attr("href") == "#sound")){
					var pdclass = jq(this).parent().parent().parent().parent().parent(".pulldown").size();
				} else {
					var pdclass = jq(this).parent().parent(".pulldown").size();
				}
				if(pdclass != 0){
					var speed = 500;
					var target = jq(pdhref == "#" || pdhref == "" ? 'html' : pdhref);
					var position = target.offset();
					if (position != null) {
						var positiontop = position.top;
						if(jq("#home-user-tools").size() < 0 || positiontop > headrheight){
							topadjust = jq("#user-tools").height() + 10;
							positiontop = positiontop - topadjust;
						}
						if(pdhref != "#"){
							jq("html, body").animate({scrollTop:positiontop}, speed, "swing");
							return false;
						}
					}
				}
			} else if(jq(this).parent().hasClass("lb-print")){
				//LB印刷
			} else if(location.href.indexOf("/safe-secure/casestudy/")>=0){
				// ケーススタディのコンテンツだった時はこちらでの制御をしない
			} else {
				thishash = jq(this).attr("href");
				var position = jq(thishash).offset();
				if (position != null) {
					var positiontop = position.top;
				}
				if(jq("#home-user-tools").size() < 0 || positiontop > headrheight){
					if(jq("#user-tools #search-wrap").size()>0){ // 追従検索窓の有無を調整
						topadjust = jq("#user-tools").height() + 12;
					} else {
						topadjust = -1;
					}
					positiontop = positiontop - topadjust;
				}
				if(thishash != "#"){
					jq("html, body").animate({scrollTop:positiontop}, 500);
					return false;
				}
			}
		});
	}
	
	//====== 新規会員獲得のクーポン誘導フキダシ挙動 ==========
	msug = jq(".scr-entry .msuggest");
	if(msug.size()>0){
		msug.removeClass("msugnone").css("opacity",0).animate({opacity:1},1000).delay(5000).animate({opacity:0},1000);
		mtextlen = parseInt(msug.children().children().text().length) -1;
		mtextwidth = mtextlen + "em";
		mtextmargin = -(mtextlen/2) + "em";
		msug.children().css({"width":mtextwidth,"margin-right":mtextmargin});
		setTimeout(function(){msug.addClass("msugnone")}, 7000);  
	}
	
	// 会員登録ボタンを定義
	noentrybtn = jq(".noentry .btn-newentry");
	noentryheight = noentrybtn.innerHeight() - 4;
	
	//====== スクロール検知要素の設定 ==========
	if(headSearch.size() > 0){
		var usertoolheight = jq("#user-tools").innerHeight() - 2; //user-toolsの高さ
		var wsflag = 0; //スクロール中を判定するフラグ
		
		if(wsflag == 0){
			jq(window).scroll(function(){
				wsflag = 1;//フラグを立てる
				
				//スクロールがヘッダーエリアの高さに達したらサーチバー固定
				scrollpos = jq(this).scrollTop();
				if(scrollpos > headrheight){
					if (typeof isiphone && isipad && ! isAndroid) { //iOSだったときの対応
						slidepoint = scrollpos - headrheight - 2;
						headSearch.stop().animate({'top':slidepoint,'position':'fixed'},300);
					} else {
						headSearch.stop().css({'top':'0','position':'fixed','z-index':1002});
					}
					jq("#user-tools-area").css({"height":usertoolheight,"border-top":"1px solid #d5d5d5","border-bottom":"1px solid #d5d5d5"}); //メニューエリアが抜けた所の高さを補填
				} else {
					jq("#user-tools-area").css({"height":"auto","border-top":"0 solid #d5d5d5","border-bottom":"0 solid #d5d5d5"}); //メニューエリアの高さを補填削除
					headSearch.stop().css({'top':'auto','position':'relative','z-index':999});
				}
				
				//メンバー登録ボタンを追従させる
				if(jq(".header-wrap").size()>0 && jq("#user-tools-area").size()>0){
					wwidth = jq(window).width();
					wadj = (wwidth - 980)/2;
					noentryleft = wadj + 765;
					if(scrollpos>headrheight){
						jq(".scr-entry").addClass("noentry");
						jq(".btn-newentry").css({"position":"fixed","top":0,"z-index":2100});
					} else {
						jq(".scr-entry").removeClass("noentry");
						jq(".btn-newentry").css({"position":"static"});
					}
				}
				
				// スクロールを検知したら絞り込みボックスを閉じる
				if(jq("#optionbox").size()>0){
					if(jq("#optionbtn").hasClass("open")){
						jq("#optionbox").slideUp(300);
						jq("#optionbtn").removeClass("open");
						jq("#optionbtn a").text("検索オプションを開く");
						jq("#sort-submit").animate({top:0},300);
					}
				}
				
				wsflag = 0;//フラグを戻す
			});
		}
		
		//青いバーがあるページにhashつきで遷移して来たときのスクロール
		if((location.href).indexOf("#") != -1){
			var scrollhash = location.hash;
			if (jq(scrollhash).length > 0) {
				scrollpoint = jq(scrollhash).offset().top - usertoolheight - 12;
				jq("html, body").animate({ scrollTop: scrollpoint }, 1000);
			}
		}
	}
		

	//======検索エリアのセレクトボックス挙動======
	
	var searchkw = jq("#search-wrap .searchtext"); //プレースホルダの対象を特定

	function searchkwbox(){
		// プレースホルダに入力する文字列を決定する（HTML5）				
		var nowplaceholder = jq("#selectbox").val();
		switch(nowplaceholder){
			case "creative":
				if (dircategory == "illustration") {
					if (url.indexOf("/vector.aspx") >= 0) {
						placeholdertxt = "ベクターを検索";
						break;
					}
					var vectorCheck = jq.find('#idSearchForm_chck_Ctgy_choice05');
					if (vectorCheck.length == 0) {
						placeholdertxt = "イラスト・CGを検索";
					} else {
						placeholdertxt = "イラスト・ベクター・CGを検索";
					}
				} else if (dircategory == "fineart") {
					placeholdertxt = "ファインアート(絵画・美術)を検索";
				} else if (dircategory == "archive") {
					placeholdertxt = "歴史的写真を検索";
				} else if (dircategory == "topics") {
					placeholdertxt = "世界遺産を検索";
				} else if (dircategory == "feature014") {
					placeholdertxt = "ファインアートを検索";
				} else if (dircategory == "feature019") {
					placeholdertxt = "ロイヤリティフリーを検索";
				} else if (dircategory == "feature023") {
					placeholdertxt = "医療と介護を検索";
				} else if (dircategory == "featureresult") {
					placeholdertxt = "";
				} else if (dircategory == "feature") {
					placeholdertxt = "世界遺産を検索";
				} else {
					placeholdertxt = "写真・イラストを検索";
				}
				break;
			case "editorial":
			placeholdertxt = "出版・報道・教育写真を検索";
			break;
			case "motion":
			placeholdertxt = "動画素材を検索";
			break;
			case "threed":
			placeholdertxt = "3Dモデリング素材を検索";
			break;
			case "soundmu":
			placeholdertxt = "音素材（楽曲）を検索";
			break;
			case "soundse":
			placeholdertxt = "音素材（効果音）を検索";
			break;
			case "fontdl":
			placeholdertxt = "ダウンロードフォントを検索";
			break;
			case "fontpk":
			placeholdertxt = "パッケージフォントを検索";
			break;
			case "fontweb":
			jq.cookie("CookieNameAmanaLastVisitItemType","creative",{expires:9999,path:"/"}); //Webフォントは終了しているので写真にする
			jq("#selectbox").val("creative");
			placeholdertxt = "写真・イラストを検索";
			break;
		}
	}
	
	function placeholder(){ //プレースホルダに文字列を入力する
		if(jq("#search-wrap").size()>0){
			searchkwbox();
			if((isie8 || isie9)) { // IE8 と IE9は、placeholderが使えないのでvalueに入れる
			 if (searchkw.val().length == 0) {
					searchkw.val(placeholdertxt).css("color", "#a1a1a1");
				}
				searchkw.focus(function(){
					if(searchkw.val()==placeholdertxt){
						searchkw.val("").css("color","#505055");
					}
				}).blur(function(evt){
					if(searchkw.val()==""){
						searchkw.val(placeholdertxt).css("color","#a1a1a1");
					}
				});
			}
			searchkw.attr("placeholder",placeholdertxt);
		}
	}
	
	if((isie8 || isie9)){ // IE8 or IE9 で文字列入力なしで検索ボタンが押された時の処理
		jq("#searchbtn").click(function(){
			searchkwbox();
			if(searchkw.val()==placeholdertxt){
				searchkw.val("");
			}
		});
		jq('#sort-submit').click(function(){
			searchkwbox();
			if(searchkw.val()==placeholdertxt){
				searchkw.val("");
			}
		});
		jq('.btn-submit-area input').click(function(){
			searchkwbox();
			if(searchkw.val()==placeholdertxt){
				searchkw.val("");
			}
		});
	}
	
	// ========== 検索窓のあるページ読み込み時、商材セレクトの挙動 ==========
	if(jq("#search-wrap").size()>0){
		
		jq('#search-wrap div.selectbox').each(function(){
			var self = jq(this);
			if(jq("#home-user-tools").size()>0){ //HOMEか下層かの判定
				var selectlink = jq('#home-user-tools .search-area #search-wrap div.selectbox .select');
			} else {
				var selectlink = jq('#user-tools .search-area #search-wrap div.selectbox .select');
			}
			var pulldown = jq('.pulldown',self);
			var data = jq('#selectbox',self); //検索対象hidden要素
			
			var select_value = jq('a',selectlink);
			if (select_value.length == 0) {
				var selectlink2 = jq('#user-tools .search-area #search-wrap div.selectbox .select');
				select_value = jq('a',selectlink2);
				selectlink2.click(function(){
					jq("#search-wrap .searchtext").focus();
					return false;
				})
			}
			var searchtext = jq('.search-area #search-wrap div.selectbox .searchtext'); //検索窓要素を定義
			
			//カドマルを適用するためクラス追加
//			pulldown.children(':first-child').addClass('first-child');
//			pulldown.hide().children(':nth-last-child(2)').addClass('last-child');
//			
//			pulldown.children().children("div").children("ul").children(':first-child').addClass('first-child');
//			pulldown.children().children("div").children("ul").children(':last-child').addClass('last-child');
			
			// ====== 画面表示時に画像を検索対象と一致させる ====== //
			var nestarrow = '<img src="../img/common/sct-nest-arrow2.png" alt="" class="nest-arrow">'; //ネストする要素用画像
			
			jq('a',pulldown).each(function() {
				var anchor = jq(this);
				var value1 = anchor.attr('href').replace('#','');
				if (data.val() == value1) {
					var text = anchor.html();
					textname = text.split(".gif")[0];
					textalt = text.split(".gif")[1];
					var nowtextall = (textname + "-now.gif" + textalt);
					var nowtext = nowtextall.split("><")[0] + ">";
					
					if(dircategory == "home"){ //HOMEを読み込んだら必ず「写真・イラスト」にする
						jq.cookie("CookieNameAmanaLastVisitItemType","creative",{expires:9999,path:"/"});
						jq("#selectbox").val("creative");
					} else {
						select_value.html(nowtext);
					}
					
					// フォームの表示切替も併せて対応する
					if (value1 == "creative" && dircategory != "home") {
						optCreative();
						setCookie_suggestOn();
						setProductInfo( 0, 0 );
					} else if (value1 == "motion" && dircategory != "home") {
						optMotion();
						setCookie_suggestOn();
						setProductInfo( 0, 1 );
					} else if (value1 == "threed" && dircategory != "home") {
						optThreed();
						setCookie_suggestOn();
						setProductInfo( 0, 2 );
					} else if (value1 == "fontdl" && dircategory != "home") {
						fontDl();
						setCookie_suggestOff();
					} else if (value1 == "fontpk" && dircategory != "home") {
						fontPk();
						setCookie_suggestOff();
					} else if (value1 == "fontweb" && dircategory != "home") {
						//fontWeb();
						optCreative();
						setCookie_suggestOff();
					} else if (value1 == "soundmu" && dircategory != "home") {
						soudMu();
						setCookie_suggestOff();
					} else if (value1 == "soundse" && dircategory != "home") {
						soudSe();
						setCookie_suggestOff();
					} else {
						jq("#optionbtn").hide();
						setCookie_suggestOff();
					}
					
//					if(dircategory != "home"){ //HOME以外
//						jq('.selected',pulldown).removeClass('selected');
//						jq('.select_focus').removeClass('select_focus');
//						jq(this).parent("li").addClass('selected');
//						var selimg = jq('.selected img').attr("src").split(".gif")[0];
//						selectedimg = selimg + "-a.gif";
//						jq(this).children("img").attr("src",selectedimg);
//						if(value1=="fontdl" || value1 == "fontpk" || value1 == "fontweb"){ //fontだったらサブカテゴリを表示
//							jq(this).parent("li").children("div").css("display","none");
//							jq(this).parent().parent().parent("div").css("display","block");
//							jq(".nest-font").parent("li").addClass("selected");
//							ficon = jq(".nest-font").prev("a").html();
//							sdficon = ficon.split(".gif")[0] + "-a.gif" + ficon.split(".gif")[1];
//							jq(".nest-font").prev("a").html(sdficon);
//						}
//						if(value1=="soundmu" || value1 == "soundse"){ //soundだったらサブカテゴリを表示
//							jq(this).parent("li").children("div").css("display","none");
//							jq(this).parent().parent().parent("div").css("display","block");
//							jq(".nest-sound").parent("li").addClass("selected");
//							sicon = jq(".nest-sound").prev("a").html();
//							sdsicon = sicon.split(".gif")[0] + "-a.gif" + sicon.split(".gif")[1];
//							jq(".nest-sound").prev("a").html(sdsicon);
//						}
//					} else if(dircategory == "home"){ //HOMEを読み込んだら必ず「写真・イラスト」にする
						
						// 読み込み時に静止画RM/RFチェックの挙動を制御
						jq("#home-user-tools #search-wrap .selectbox .pulldown li.pdphoto").addClass('selected').find("img").attr("src","img/header2/icon-sct-photo-a.gif");
						jq("#home-user-tools #content-type-photo").css("display","block");
						jq("#home-user-tools #idSearchForm_txt_SearchKeywords").css("width","480px");
//					}
				}
			});
			
			//検索窓の商材アイコンをクリックしたとき
			selectlink.click(function(e){
				if (pulldown.is(':hidden') && (dircategory == "home")){
					pulldown.show();
					if(jq("#optionbtn").hasClass("open")){
						optionBoxOC();
					}
					jq(this).addClass('select_focus');
					if(jq('.fontpkg').hasClass("selected")){
						jq('.fontpkg').parent().parent("div").addClass("select-pkg");
					} else {
						jq('.fontpkg').parent().parent("div").removeClass("select-pkg");
					};
					e.stopPropagation();
				} else {
					pulldown.hide();
				}
				return false;
			});
			
			searchtext.click(function(e){ //HOME、音、フォントの検索ボックスをクリックしたとき
				if(dircategory != "home"){
					optionBoxOC();
				} else if (pulldown.is(':hidden') && (dircategory == "home")){
					pulldown.show();
					if(jq("#optionbtn").hasClass("open")){
						optionBoxOC();
					}
					jq(this).addClass('select_focus');
					if(jq('.fontpkg').hasClass("selected")){
						jq('.fontpkg').parent().parent("div").addClass("select-pkg");
					} else {
						jq('.fontpkg').parent().parent("div").removeClass("select-pkg");
					};
					e.stopPropagation();
				} else {
					pulldown.hide();
				}
				return false;
			});
			
			jq('a',pulldown).click(function(){
				var value = jq(this).attr('href').replace('#','');
				var text = jq(this).html();
				var titletext = jq(this).attr('title');
				textname = text.split(".gif")[0];
				textalt = text.split(".gif")[1];
				var nowtextall = (textname + "-now.gif" + textalt);
				var nowtext = nowtextall.split("><")[0] + ">";
				
				// ie8, 9は切り替え前にプレースホルダーを掃除してやらないといけない
				if (isie8 || isie9) {
					if (value != "font" && value != "sound" && searchkw.val() == placeholdertxt) {
						searchkw.val("");
					}
				}
				
				if(text.indexOf("-a.gif")!=-1){ //アクティブな要素をクリックしちゃったら動きを止めてプルダウン消す
					jq('.pulldown').hide();
					return false;
				}
				
				jq('img',pulldown).each(function(){
					var allimg = jq(this).attr("src");
					if(allimg.indexOf("-a.gif")!=-1){
						normimg = jq(this).attr("src").split("-a")[0] + ".gif";
						jq(this).attr("src",normimg);
					}
				});
				
				// 選択した商材によって静止画RM/RFチェックの挙動を制御
				if(value == "creative"){
					jq("#content-type-photo").css("display","block");
					jq("#idSearchForm_txt_SearchKeywords").css("width","480px");
				} else if (value == "sound" || value == "font"){
				} else {
					jq("#content-type-photo").css("display","none");
					jq("#idSearchForm_txt_SearchKeywords").css("width","600px");
				}
				
				jq('.selected',pulldown).removeClass('selected');
				jq(this).parent("li").addClass('selected');
				var selimg = jq('.selected img').attr("src").split(".gif")[0];
				selectedimg = selimg + "-a.gif";
				selectlink.children("a").attr("title",titletext);
				jq(this).children("img").attr("src",selectedimg);
				if(value=="soundmu"||value=="soundse"||value=="fontdl"||value=="fontpk"||value=="fontweb"){ //サブカテゴリだった場合、親カテゴリの見た目を保つ
					nestparent = jq(this).parent().parent().parent().parent("li");
					if(jq(this).parent().parent().hasClass("pulldown")){
						nestparent = jq(this).parent("li");
					}
					nestparent.addClass('selected');
					nestparenticon = nestparent.children("a").children("img");
					if(nestparenticon.attr("src").indexOf("-a.gif")==-1){
						selimg = nestparenticon.attr("src").split(".gif")[0] + "-a.gif";
						nestparenticon.attr("src",selimg);
					}
				}
				
				if(value=="font"){ //fontだったらサブカテゴリを表示
					jq(this).parent().parent().children("li").children("div").css("display","none");
					jq(this).parent().parent().children("li").children("div").next("img").remove();
					jq(this).next("div").css("display","block");
					//jq(this).parent().append(nestarrow);
					return false;
				}
				
				if(value=="sound"){ //soundだったらサブカテゴリを表示
					jq(this).parent().parent().children("li").children("div").css("display","none");
					jq(this).parent().parent().children("li").children("div").next("img").remove();
					jq(this).next("div").css("display","block");
					//jq(this).parent().append(nestarrow);
					return false;
				}
				
				if(value.indexOf("font")==-1 || value.indexOf("sound")==-1){ //fontシリーズまたはsoundシリーズじゃなかったらサブカテゴリを消す
					jq(this).parent().parent().children("li").children("div").css("display","none");
					//jq(this).parent().parent().children("li").children("div").next("img").remove();
				}
				
				select_value.html(nowtext);
				data.val(value);
				
				if (value == "creative" && dircategory != "home") {
					optCreative();
					setCookie_suggestOn();
					setProductInfo( 0, 0 );
				} else if (value == "motion" && dircategory != "home") {
					optMotion();
					setCookie_suggestOn();
					setProductInfo( 0, 1 );
				} else if (value == "threed" && dircategory != "home") {
					optThreed();
					setCookie_suggestOn();
					setProductInfo( 0, 2 );
				} else if (value == "fontdl" && dircategory != "home") {
					fontDl();
					setCookie_suggestOff();
				} else if (value == "fontpk" && dircategory != "home") {
					fontPk();
					setCookie_suggestOff();
				} else if (value == "fontweb" && dircategory != "home") {
					//fontWeb();
					optCreative();
					setCookie_suggestOff();
				} else if (value == "soundmu" && dircategory != "home") {
					soudMu();
					setCookie_suggestOff();
				} else if (value == "soundse" && dircategory != "home") {
					soudSe();
					setCookie_suggestOff();
				} else {
					if(jq("#optionbtn").hasClass("open")){
						jq("#optionbox").slideUp(300);
						jq("#optionbtn").removeClass("open");
						jq("#optionbtn a").text("検索オプションを開く");
						jq("#sort-submit").animate({top:0},300);
					}
					jq("#optionbtn").hide();
					setCookie_suggestOff();
				}
				
				jq('.select_focus').removeClass('select_focus');
				
				placeholder(); //プレースホルダに文字列追加
				
				pulldown.hide();
				
				if(ismsie || isie11){
				} else {
					jq("#search-wrap .searchtext").focus();
				}
				
				return false;
			});
			
			// 静止画RM/RFチェック自体の挙動を制御
			jq("#content-type-photo li input[type=checkbox]").click(function(){
				checkNum = jq("#content-type-photo li input[type=checkbox]:checked").length;
				typeText = jq(this).attr("id").split("switchForCreative")[1];
				targetCheck = "#idSearchForm_chck_License_Creative" + typeText;
				if(jq(this).is(":checked")){
					jq(targetCheck).prop("checked",true);
				} else {
					jq(targetCheck).prop("checked",false);
				}
				if(checkNum < 1){
					jq(this).prop("checked",true);
					jq(targetCheck).prop("checked",true);
				}
			});

			//音素材・フォントでサブタブが選択された時の挙動

			jq(".option-tab li").click(function(){
				var tabvalue = jq(this).attr("id");//選択したの条件を取得
				alttxt = "";
				tabsrc = "../img/header2/icon-sct-" + tabvalue + "-now.gif";
				targetsrc="../img/header2/icon-sct-" + tabvalue + "-a.gif";
				nestsound = jq(".nest-sound ul li");
				nestfont = jq(".nest-font ul li");
				data.val(tabvalue);
				
				// ie8, 9は切り替え前にプレースホルダーを掃除してやらないといけない
				if (isie8 || isie9) {
					if (searchkw.val() == placeholdertxt) {
						searchkw.val("");
					}
				}
				
				if(tabvalue == "soundmu"){
					alttxt = "楽曲";
					soudMu();
					jq(this).addClass('current');
					jq("#soundse").removeClass('current');
					if(dircategory == "home"){
						nestsound.removeClass("selected");
						nestsound.find("a").each(function(){
							nestsrc = jq(this).children("img");
							if(nestsrc.attr("src").indexOf("-a")>0){
								resetsrc = nestsrc.attr("src").split("-a")[0] + ".gif";
								nestsrc.attr("src",resetsrc);
							}
						});
						targetitem = nestsound.eq(0);
						targetitem.addClass("selected");
						targetitem.find("a").children("img").attr("src",targetsrc);
					}
				} else if(tabvalue == "soundse"){
					alttxt = "効果音";
					soudSe();
					jq(this).addClass('current');
					jq("#soundmu").removeClass('current');
					if(dircategory == "home"){
						nestsound.removeClass("selected");
						nestsound.find("a").each(function(){
							nestsrc = jq(this).children("img");
							if(nestsrc.attr("src").indexOf("-a")>0){
								resetsrc = nestsrc.attr("src").split("-a")[0] + ".gif";
								nestsrc.attr("src",resetsrc);
							}
						});
						targetitem = nestsound.eq(1);
						targetitem.addClass("selected");
						targetitem.find("a").children("img").attr("src",targetsrc);
					}
				} else if(tabvalue == "fontdl"){
					alttxt = "ダウンロードフォント";
					fontDl();
					jq(this).addClass('current');
					jq("#fontpk").removeClass('current');
					jq("#fontweb").removeClass('current');
					if(dircategory == "home"){
						nestfont.removeClass("selected");
						nestfont.find("a").each(function(){
							nestsrc = jq(this).children("img");
							if(nestsrc.attr("src").indexOf("-a")>0){
								resetsrc = nestsrc.attr("src").split("-a")[0] + ".gif";
								nestsrc.attr("src",resetsrc);
							}
						});
						targetitem = nestfont.eq(0);
						targetitem.addClass("selected");
						targetitem.find("a").children("img").attr("src",targetsrc);
					}
				} else if(tabvalue == "fontpk"){
					alttxt = "パッケージフォント";
					fontPk();
					jq(this).addClass('current');
					jq("#fontdl").removeClass('current');
					jq("#fontweb").removeClass('current');
					if(dircategory == "home"){
						nestfont.removeClass("selected");
						nestfont.find("a").each(function(){
							nestsrc = jq(this).children("img");
							if(nestsrc.attr("src").indexOf("-a")>0){
								resetsrc = nestsrc.attr("src").split("-a")[0] + ".gif";
								nestsrc.attr("src",resetsrc);
							}
						});
						targetitem = nestfont.eq(1);
						targetitem.addClass("selected");
						targetitem.find("a").children("img").attr("src",targetsrc);
					}
				} else {
					if(jq("#optionbtn").hasClass("open")){
						jq("#optionbox").slideUp(300);
						jq("#optionbtn").removeClass("open");
						jq("#optionbtn a").text("検索オプションを開く");
						jq("#sort-submit").animate({top:0},300);
						//setCookie();
					}
					jq("#optionbtn").hide();
				}
				selectlink.children("a").attr("title",alttxt);
				selectlink.children("a").children("img").attr("alt",alttxt).attr("src",tabsrc);
				placeholder(); //プレースホルダに文字列追加
			});
			
			jq('body').click(function(){ //プルダウン以外の箇所が押されたらプルダウン消す
				jq('.select_focus').removeClass('select_focus');
				jq('.pulldown').hide();
			});
		});
		
		//========== 検索オプションボタンの制御を関数として定義 ==========
		function optCreative(){
			jq("#optionbtn").show();
			jq("#optioncreative").show();
			jq("#optionmotion").hide();
			jq("#option3d").hide();
			jq("#optionfont").hide();
			jq("#optionfontdl").hide();
			jq("#optionfontpk").hide();
			jq("#optionfontweb").hide();
			jq("#optionsound").hide();
			jq("#optionsoundmu").hide();
			jq("#optionsoundse").hide();
		}
		
		function optMotion(){
			jq("#optionbtn").show();
			jq("#optioncreative").hide();
			jq("#optionmotion").show();
			jq("#option3d").hide();
			jq("#optionfont").hide();
			jq("#optionfontdl").hide();
			jq("#optionfontpk").hide();
			jq("#optionfontweb").hide();
			jq("#optionsound").hide();
			jq("#optionsoundmu").hide();
			jq("#optionsoundse").hide();
		}
		
		function optThreed(){
			jq("#optionbtn").show();
			jq("#optioncreative").hide();
			jq("#optionmotion").hide();
			jq("#option3d").show();
			jq("#optionfont").hide();
			jq("#optionfontdl").hide();
			jq("#optionfontpk").hide();
			jq("#optionfontweb").hide();
			jq("#optionsound").hide();
			jq("#optionsoundmu").hide();
			jq("#optionsoundse").hide();
		}
		
		function soudMu(){
			jq("#optionbtn").show();
			jq("#optioncreative").hide();
			jq("#optionmotion").hide();
			jq("#option3d").hide();
			jq("#optionfont").hide();
			jq("#optionfontdl").hide();
			jq("#optionfontpk").hide();
			jq("#optionfontweb").hide();
			jq("#optionsound").show();
			jq("#optionsoundmu").show();
			jq("#optionsoundse").hide();
			jq(".option-tab li").removeClass('current');
			jq("#soundmu").addClass('current');
			if(dircategory == "sound"){
				jq('.cat-sound #top-sln-bnr').removeClass('sln-se');
			}
			if (jq('#pankuzu-area .current').text() == "効果音") {
				jq('#pankuzu-area .current').removeClass('current').text('').prev('li').addClass('current');
			}
			setCategorySearchParam('mu');
		}
			
		function soudSe(){
			jq("#optionbtn").show();
			jq("#optionbtn").show();
			jq("#optioncreative").hide();
			jq("#optionmotion").hide();
			jq("#option3d").hide();
			jq("#optionfont").hide();
			jq("#optionfontdl").hide();
			jq("#optionfontpk").hide();
			jq("#optionfontweb").hide();
			jq("#optionsound").show();
			jq("#optionsoundmu").hide();
			jq("#optionsoundse").show();
			jq(".option-tab li").removeClass('current');
			jq("#soundse").addClass('current');
			if(dircategory == "sound"){
				jq('.cat-sound #top-sln-bnr').addClass('sln-se');
			}
			if (jq('#pankuzu-area .current').text() == "音素材") {
				jq('#pankuzu-area .current').removeClass('current').html('<a href="/sound">音素材</a>').next('li').addClass('current').text('効果音');
			}
			setCategorySearchParam('se');
		}
			
		function fontDl(){
			jq("#optionbtn").show();
			jq("#optioncreative").hide();
			jq("#optionmotion").hide();
			jq("#option3d").hide();
			jq("#optionfont").show();
			jq("#optionfontdl").show();
			jq("#optionfontpk").hide();
			jq("#optionfontweb").hide();
			jq("#optionsound").hide();
			jq("#optionsoundmu").hide();
			jq("#optionsoundse").hide();
			jq(".option-tab li").removeClass('current');
			jq("#fontdl").addClass('current');
		}
		
		function fontPk(){
			jq("#optionbtn").show();
			jq("#optioncreative").hide();
			jq("#optionmotion").hide();
			jq("#option3d").hide();
			jq("#optionfont").show();
			jq("#optionfontdl").hide();
			jq("#optionfontpk").show();
			jq("#optionfontweb").hide();
			jq("#optionsound").hide();
			jq("#optionsoundmu").hide();
			jq("#optionsoundse").hide();
			jq(".option-tab li").removeClass('current');
			jq("#fontpk").addClass('current');
		}
		
		function fontWeb(){
			jq("#optionbtn").show();
			jq("#optioncreative").hide();
			jq("#optionmotion").hide();
			jq("#option3d").hide();
			jq("#optionfont").show();
			jq("#optionfontdl").hide();
			jq("#optionfontpk").hide();
			jq("#optionfontweb").show();
			jq("#optionsound").hide();
			jq("#optionsoundmu").hide();
			jq("#optionsoundse").hide();
			jq(".option-tab li").removeClass('current');
			jq("#fontweb").addClass('current');
		}
			
	}
	
	if(jq('#optionbar').length > 0){
		optionbartop = jq('div.selectbox').height() + 11;
		optionbarleft = - jq('#optionbar').width()/2;
		if(jq('#searchmode #optionbar').length > 0) {
			optionbarleft = 50;
			if(jq('#searchmode.centerlayout').length > 0){
				optionbarleft = - jq('#optionbar').width()/2;
			}
		}
		jq('#optionbar').css({"top":optionbartop,"margin-left":optionbarleft});
	}
	
	//======絞り込み検索ボックス======
	
	if(jq("#optionbox").size()>0){
		
		if(window.navigator.userAgent.match(/Mac|PPC/) != null && !window.chrome && typeof document.webkitIsFullScreen != undefined){
			jq("#optionbox").addClass("macwebkit");
		}
		
		jq("#optionbtn a").click(function(){
			if(jq("#optionbtn").hasClass("open")){
				jq("#optionbox").slideUp(300);
				jq("#optionbtn").removeClass("open");
				jq("#optionbtn a").text("検索オプションを開く");
				jq("#sort-submit").animate({top:0},300);
				return false;
			}else{
				jq("#optionbox").slideDown(300);
				jq("#optionbtn").addClass("open");
				jq("#optionbtn a").text("検索オプションを閉じる");
				jq("#sort-submit").animate({top:20},300);
				if(jq(".sort-photo-right").size()>0){
					sortpl = jq(".sort-photo-left").height();
					sortpr = jq(".sort-photo-right").height();
					if(sortpr > sortpl){
						jq(".sort-photo-left").height(sortpr);
					} else if(sortpr < sortpl){
						jq(".sort-photo-right").height(sortpl);
					}
				}
				jq('.pulldown').hide();
				if (jq('#idSearchForm_lb_instrumentation')) {
					jq('#idSearchForm_lb_instrumentation').hide();
				}
				return false;
			}
		});
	}
	
	//絞り込みオプションのリストがクリックされたときの背景色挙動
	//Photo RM
	var rmlabel = jq("#idSearchForm_chck_License_Creative_RightsManaged");
	var rmallcheck = jq("#idSearchForm_allCheck_rm");
	var rmallcheckli = rmallcheck.parent().parent("li");
	var rmlist = jq("#idSearchForm_dtlRMList");
	var rmlistchek = rmlist.find("input:checkbox");
	var rmlistli = rmlist.children().children("li")
	if(rmallcheck.size()>0 && rmallcheck.prop('checked')){
		rmallcheckli.addClass("listcheck");
	}
	rmlistchek.each(function() {
		if(jq(this).prop('checked')) {
			jq(this).parent("li").addClass("listcheck");
		}
	});
	rmlabel.click(function(){
		rmInputChecker();
	});
	rmallcheck.click(function(){
		rmInputChecker();
	});
	function rmInputChecker(){
		if(rmallcheck.prop('checked')){
			rmlistli.removeClass("listcheck");
			if(!rmallcheckli.hasClass("listcheck")){
				rmallcheckli.addClass("listcheck");
			}
		} else {
			if (jq('#idSearchForm_chck_License_Creative_RoyaltyFree').prop("checked")) {
				rmlistli.removeClass("listcheck");
			}
			if(rmallcheckli.hasClass("listcheck")){
				rmallcheckli.removeClass("listcheck");
			} else if(rmallcheck.prop('checked')){
				rmallcheckli.addClass("listcheck");
			}
		}
	}
	rmlistchek.each(function(){
		jq(this).click(function(){
			if(jq(this).prop('checked')){
				jq(this).parent("li").addClass("listcheck");
				rmallcheckli.removeClass("listcheck");
			} else {
				jq(this).parent("li").removeClass("listcheck");
				if (!rmlistli.hasClass("listcheck") && !jq('#idSearchForm_chck_License_Creative_RoyaltyFree').prop("checked")) {
					rmallcheckli.addClass("listcheck");
				}
			}
		});
	});
	
	//Photo RF
	var rflabel = jq("#idSearchForm_chck_License_Creative_RoyaltyFree");
	var rfallcheck = jq("#idSearchForm_allCheck_rf");
	var rfallcheckli = rfallcheck.parent().parent("li");
	var rflist = jq("#idSearchForm_dtlRFList");
	var rflistchek = rflist.find("input:checkbox");
	var rflistli = rflist.children().children("li")
	if(rfallcheck.size()>0 && rfallcheck.prop('checked')){
		rfallcheckli.addClass("listcheck");
	}
	rflistchek.each(function() {
		if(jq(this).prop('checked')) {
			jq(this).parent("li").addClass("listcheck");
		}
	});
	rflabel.click(function(){
		rfInputChecker();
	});
	rfallcheck.click(function(){
		rfInputChecker();
	});
	function rfInputChecker(){
		if(rfallcheck.prop('checked')){
			rflistli.removeClass("listcheck");
			if(!rfallcheckli.hasClass("listcheck")){
				rfallcheckli.addClass("listcheck");
			}
		} else {
			if (jq('#idSearchForm_chck_License_Creative_RightsManaged').prop("checked")) {
				rflistli.removeClass("listcheck");
			}
			if(rfallcheckli.hasClass("listcheck")){
				rfallcheckli.removeClass("listcheck");
			} else if(rfallcheck.prop('checked')){
				rfallcheckli.addClass("listcheck");
			}
		}
	}
	rflistchek.each(function(){
		jq(this).click(function(){
			if(jq(this).prop('checked')){
				jq(this).parent("li").addClass("listcheck");
				rfallcheckli.removeClass("listcheck");
			} else {
				jq(this).parent("li").removeClass("listcheck");
				if (!rflistli.hasClass("listcheck") && !jq('#idSearchForm_chck_License_Creative_RightsManaged').prop("checked")) {
					rfallcheckli.addClass("listcheck");
				}
			}
		});
	});
	
	//Motion RM
	var rmmolabel = jq("#idSearchForm_chck_Motion_License_RightsManaged");
	var rmmoallcheck = jq("#idSearchForm_allCheck_rm_Motion");
	var rmmoallcheckli = rmmoallcheck.parent().parent("li");
	var rmmolist = jq("#idSearchForm_dtlRMList_Motion");
	var rmmolistchek = rmmolist.find("input:checkbox");
	var rmmolistli = rmmolist.children().children("li")
	if(rmmoallcheck.size()>0 && rmmoallcheck.prop('checked')){
		rmmoallcheckli.addClass("listcheck");
	}
	rmmolistchek.each(function() {
		if(jq(this).prop('checked')) {
			jq(this).parent("li").addClass("listcheck");
		}
	});
	rmmolabel.click(function(){
		rmmoInputChecker();
	});
	rmmoallcheck.click(function(){
		rmmoInputChecker();
	});
	function rmmoInputChecker(){
		if(rmmoallcheck.prop('checked')){
			rmmolistli.removeClass("listcheck");
			if(!rmmoallcheckli.hasClass("listcheck")){
				rmmoallcheckli.addClass("listcheck");
			}
		} else {
			if (jq('#idSearchForm_chck_Motion_License_RoyaltyFree').prop("checked")) {
				rmmolistli.removeClass("listcheck");
			}
			if(rmmoallcheckli.hasClass("listcheck")){
				rmmoallcheckli.removeClass("listcheck");
			} else if(rmmoallcheck.prop('checked')){
				rmmoallcheckli.addClass("listcheck");
			}
		}
	}
	rmmolistchek.each(function(){
		jq(this).click(function(){
			if(jq(this).prop('checked')){
				jq(this).parent("li").addClass("listcheck");
				rmmoallcheckli.removeClass("listcheck");
			} else {
				jq(this).parent("li").removeClass("listcheck");
				if (!rmmolistli.hasClass("listcheck") && !jq('#idSearchForm_chck_Motion_License_RoyaltyFree').prop("checked")) {
					rmmoallcheckli.addClass("listcheck");
				}
			}
		});
	});
	
	//Motion RF
	var rfmolabel = jq("#idSearchForm_chck_Motion_License_RoyaltyFree");
	var rfmoallcheck = jq("#idSearchForm_allCheck_rf_Motion");
	var rfmoallcheckli = rfmoallcheck.parent().parent("li");
	var rfmolist = jq("#idSearchForm_dtlRFList_Motion");
	var rfmolistchek = rfmolist.find("input:checkbox");
	var rfmolistli = rfmolist.children().children("li")
	if(rfmoallcheck.size()>0 && rfmoallcheck.prop('checked')){
		rfmoallcheckli.addClass("listcheck");
	}
	rfmolistchek.each(function() {
		if(jq(this).prop('checked')) {
			jq(this).parent("li").addClass("listcheck");
		}
	});
	rfmolabel.click(function(){
		rfmoInputChecker();
	});
	rfmoallcheck.click(function(){
		rfmoInputChecker();
	});
	function rfmoInputChecker(){
		if(rfmoallcheck.prop('checked')){
			rfmolistli.removeClass("listcheck");
			if(!rfmoallcheckli.hasClass("listcheck")){
				rfmoallcheckli.addClass("listcheck");
			}
		} else {
			if (jq('#idSearchForm_chck_Motion_License_RightsManaged').prop("checked")) {
				rfmolistli.removeClass("listcheck");
			}
			if(rfmoallcheckli.hasClass("listcheck")){
				rfmoallcheckli.removeClass("listcheck");
			} else if(rfmoallcheck.prop('checked')){
				rfmoallcheckli.addClass("listcheck");
			}
		}
	}
	rfmolistchek.each(function(){
		jq(this).click(function(){
			if(jq(this).prop('checked')){
				jq(this).parent("li").addClass("listcheck");
				rfmoallcheckli.removeClass("listcheck");
			} else {
				jq(this).parent("li").removeClass("listcheck");
				if (!rfmolistli.hasClass("listcheck") && !jq('#idSearchForm_chck_Motion_License_RightsManaged').prop("checked")) {
					rfmoallcheckli.addClass("listcheck");
				}
			}
		});
	});
	
	//3D Brand
	var br3dallcheck = jq("#idSearchForm_chck_3D_Brand_All");
	var br3dallcheckli = br3dallcheck.next("label");
	var br3dlist = jq("#idSearchForm_dtl_Brand_3D");
	var br3dlistchek = br3dlist.find("input:checkbox");
	var br3dlistli = br3dlist.children("span")
	if(br3dallcheck.size()>0 && br3dallcheck.prop('checked')){
		br3dallcheckli.addClass("listcheck");
	}
	br3dlistchek.each(function() {
		if(jq(this).prop('checked')) {
			jq(this).parent("li").addClass("listcheck");
		}
	});
	br3dallcheck.click(function(){
		br3dInputChecker();
	});
	function br3dInputChecker(){
		if(br3dallcheck.prop('checked')){
			br3dlistli.removeClass("listcheck");
			if(!br3dallcheckli.hasClass("listcheck")){
				br3dallcheckli.addClass("listcheck");
			}
		} else {
			br3dlistli.removeClass("listcheck");
			if(br3dallcheckli.hasClass("listcheck")){
				br3dallcheckli.removeClass("listcheck");
			} else if(br3dallcheck.prop('checked')){
				br3dallcheckli.addClass("listcheck");
			}
		}
	}
	br3dlistchek.each(function(){
		jq(this).click(function(){
			if(jq(this).prop('checked')){
				jq(this).parent("span").addClass("listcheck");
				br3dallcheckli.removeClass("listcheck");
			} else {
				jq(this).parent("span").removeClass("listcheck");
				if (!br3dlistli.hasClass("listcheck")) {
					br3dallcheckli.addClass("listcheck");
				}
			}
		});
	});

	//3D Apprication
	var app3dallcheck = jq("#idSearchForm_chck_3D_App_All");
	var app3dallcheckli = app3dallcheck.next("label");
	var app3dlist = jq("#idSearchForm_dtl_App_3D");
	var app3dlistchek = app3dlist.find("input:checkbox");
	var app3dlistli = app3dlist.children("span")
	if(app3dallcheck.size()>0 && app3dallcheck.prop('checked')){
		app3dallcheckli.addClass("listcheck");
	}
	app3dlistchek.each(function() {
		if(jq(this).prop('checked')) {
			jq(this).parent("li").addClass("listcheck");
		}
	});
	app3dallcheck.click(function(){
		app3dInputChecker();
	});
	function app3dInputChecker(){
		if(app3dallcheck.prop('checked')){
			app3dlistli.removeClass("listcheck");
			if(!app3dallcheckli.hasClass("listcheck")){
				app3dallcheckli.addClass("listcheck");
			}
		} else {
			app3dlistli.removeClass("listcheck");
			if(app3dallcheckli.hasClass("listcheck")){
				app3dallcheckli.removeClass("listcheck");
			} else if(app3dallcheck.prop('checked')){
				app3dallcheckli.addClass("listcheck");
			}
		}
	}
	app3dlistchek.each(function(){
		jq(this).click(function(){
			if(jq(this).prop('checked')){
				jq(this).parent("span").addClass("listcheck");
				app3dallcheckli.removeClass("listcheck");
			} else {
				jq(this).parent("span").removeClass("listcheck");
				if (!app3dlistli.hasClass("listcheck")) {
					app3dallcheckli.addClass("listcheck");
				}
			}
		});
	});
	
	//3D MDL
	var mdl3dallcheck = jq("#idSearchForm_chck_3D_MDL_Exte_All");
	var mdl3dallcheckli = mdl3dallcheck.next("label");
	var mdl3dlist = jq("#idSearchForm_dtl_MDL_Exte_3D");
	var mdl3dlistchek = mdl3dlist.find("input:checkbox");
	var mdl3dlistli = mdl3dlist.children("span")
	if(mdl3dallcheck.size()>0 && mdl3dallcheck.prop('checked')){
		mdl3dallcheckli.addClass("listcheck");
	}
	mdl3dlistchek.each(function() {
		if(jq(this).prop('checked')) {
			jq(this).parent("li").addClass("listcheck");
		}
	});
	mdl3dallcheck.click(function(){
		mdl3dInputChecker();
	});
	function mdl3dInputChecker(){
		if(mdl3dallcheck.prop('checked')){
			mdl3dlistli.removeClass("listcheck");
			if(!mdl3dallcheckli.hasClass("listcheck")){
				mdl3dallcheckli.addClass("listcheck");
			}
		} else {
			mdl3dlistli.removeClass("listcheck");
			if(mdl3dallcheckli.hasClass("listcheck")){
				mdl3dallcheckli.removeClass("listcheck");
			} else if(mdl3dallcheck.prop('checked')){
				mdl3dallcheckli.addClass("listcheck");
			}
		}
	}
	mdl3dlistchek.each(function(){
		jq(this).click(function(){
			if(jq(this).prop('checked')){
				jq(this).parent("span").addClass("listcheck");
				mdl3dallcheckli.removeClass("listcheck");
			} else {
				jq(this).parent("span").removeClass("listcheck");
				if (!mdl3dlistli.hasClass("listcheck")) {
					mdl3dallcheckli.addClass("listcheck");
				}
			}
		});
	});
	
	//3D File type
	var ft3dallcheck = jq("#idSearchForm_chck_3D_TEX_Exte_All");
	var ft3dallcheckli = ft3dallcheck.next("label");
	var ft3dlist = jq("#idSearchForm_dtl_TEX_Exte_3D");
	var ft3dlistchek = ft3dlist.find("input:checkbox");
	var ft3dlistli = ft3dlist.children("span")
	if(ft3dallcheck.size()>0 && ft3dallcheck.prop('checked')){
		ft3dallcheckli.addClass("listcheck");
	}
	ft3dlistchek.each(function() {
		if(jq(this).prop('checked')) {
			jq(this).parent("li").addClass("listcheck");
		}
	});
	ft3dallcheck.click(function(){
		ft3dInputChecker();
	});
	function ft3dInputChecker(){
		if(ft3dallcheck.prop('checked')){
			ft3dlistli.removeClass("listcheck");
			if(!ft3dallcheckli.hasClass("listcheck")){
				ft3dallcheckli.addClass("listcheck");
			}
		} else {
			ft3dlistli.removeClass("listcheck");
			if(ft3dallcheckli.hasClass("listcheck")){
				ft3dallcheckli.removeClass("listcheck");
			} else if(ft3dallcheck.prop('checked')){
				ft3dallcheckli.addClass("listcheck");
			}
		}
	}
	ft3dlistchek.each(function(){
		jq(this).click(function(){
			if(jq(this).prop('checked')){
				jq(this).parent("span").addClass("listcheck");
				ft3dallcheckli.removeClass("listcheck");
			} else {
				jq(this).parent("span").removeClass("listcheck");
				if (!ft3dlistli.hasClass("listcheck")) {
					ft3dallcheckli.addClass("listcheck");
				}
			}
		});
	});
	
	//Sound Brand
	var brmuallcheck = jq("#idSearchForm_chck_Brand_All_Sound");
	var brmuallcheckli = brmuallcheck.next("label");
	var brmulist = jq("#idSearchForm_dtl_Brand_Sound");
	var brmulistchek = brmulist.find("input:checkbox");
	var brmulistli = brmulist.children("span")
	if(brmuallcheck.size()>0 && brmuallcheck.prop('checked')){
		brmuallcheckli.addClass("listcheck");
	}
	brmulistchek.each(function() {
		if(jq(this).prop('checked')) {
			jq(this).parent("span").addClass("listcheck");
		}
	});
	brmuallcheck.click(function(){
		brmuInputChecker();
	});
	function brmuInputChecker(){
		if(brmuallcheck.prop('checked')){
			brmulistli.removeClass("listcheck");
			if(!brmuallcheckli.hasClass("listcheck")){
				brmuallcheckli.addClass("listcheck");
			}
		} else {
			brmulistli.removeClass("listcheck");
			if(brmuallcheckli.hasClass("listcheck")){
				brmuallcheckli.removeClass("listcheck");
			} else if(brmuallcheck.prop('checked')){
				brmuallcheckli.addClass("listcheck");
			}
		}
	}
	brmulistchek.each(function(){
		jq(this).click(function(){
			if(jq(this).prop('checked')){
				jq(this).parent("span").addClass("listcheck");
				brmuallcheckli.removeClass("listcheck");
			} else {
				jq(this).parent("span").removeClass("listcheck");
				if (!brmulistli.hasClass("listcheck")) {
					brmuallcheckli.addClass("listcheck");
				}
			}
		});
	});
	
	//Sound Category
	var camuallcheck = jq("#category_all_mu");
	var camuallcheckli = camuallcheck.parent();
	if(camuallcheck.size()>0 && camuallcheck.prop('checked')){
		camuallcheckli.addClass("listcheck");
	}
	
	//SE Brand
	var brseallcheck = jq("#idSearchForm_chck_Brand_All_Sfx");
	var brseallcheckli = brseallcheck.next("label");
	var brselist = jq("#idSearchForm_dtl_Brand_Sfx");
	var brselistchek = brselist.find("input:checkbox");
	var brselistli = brselist.children("span")
	if(brseallcheck.size()>0 && brseallcheck.prop('checked')){
		brseallcheckli.addClass("listcheck");
	}
	brselistchek.each(function() {
		if(jq(this).prop('checked')) {
			jq(this).parent("span").addClass("listcheck");
		}
	});
	brseallcheck.click(function(){
		brseInputChecker();
	});
	function brseInputChecker(){
		if(brseallcheck.prop('checked')){
			brselistli.removeClass("listcheck");
			if(!brseallcheckli.hasClass("listcheck")){
				brseallcheckli.addClass("listcheck");
			}
		} else {
			brselistli.removeClass("listcheck");
			if(brseallcheckli.hasClass("listcheck")){
				brseallcheckli.removeClass("listcheck");
			} else if(brseallcheck.prop('checked')){
				brseallcheckli.addClass("listcheck");
			}
		}
	}
	brselistchek.each(function(){
		jq(this).click(function(){
			if(jq(this).prop('checked')){
				jq(this).parent("span").addClass("listcheck");
				brseallcheckli.removeClass("listcheck");
			} else {
				jq(this).parent("span").removeClass("listcheck");
				if (!brselistli.hasClass("listcheck")) {
					brseallcheckli.addClass("listcheck");
				}
			}
		});
	});
	
	//SE Category
	var caseallcheck = jq("#category_all_se");
	var caseallcheckli = caseallcheck.parent();
	if(caseallcheck.size()>0 && caseallcheck.prop('checked')){
		caseallcheckli.addClass("listcheck");
	}
		
	//======ライトボックス======
	
	if(lightboxBtm){
		// 下フレームを表示しているときは、ライトボックスボタンは非表示
	try
	{
		if (top.frames["down"]) {
			if (top.frames["down"].frameElement.scrollHeight && (top.frames["down"].frameElement.scrollHeight > 0)) {
				lightboxBtm.css("display", "none");
			} else {
				lightboxBtm.css("display", "box");
			}
		}
	}catch(e){}
		lightboxBtm.css("bottom",0);
	}
	
	function showLbBtm(){
		lightboxBtm.animate({bottom:"0px"},300);
		jq.cookie("lightboxtab", 0);
	}
	
	//======グローバルナビ======
	
	if(jq("#global")){
		
		jq("#header #utility ul.for-order li a").each(function(){
			jq(this).hover(function(){
				jq(this).parent("li").addClass("hover");
			},function(){
				jq(this).parent("li").removeClass("hover");
			});
		});
		
		jq("#global li.grlist").each(function(){
			jq(this).unbind("mouseenter").unbind("mouseleave");
			jq(this).hover(function(){
				var thiswidth = jq(this).children("ul").width();
				var thisheight = jq(this).children("ul").height();
				var thisiframe = jq(this).children("iframe");
				var thisul = jq(this).children("ul");
				var thisanchor = jq(this).children("a");
				
				var t = setTimeout(function(){
     thisiframe.css({"width":thiswidth,"height":thisheight});
					thisiframe.slideDown(100);
					thisul.slideDown(100);
					thisanchor.addClass("hover");
    }, 300);
				jq(this).data('timeout', t);
				
			},function(){
				clearTimeout(jq(this).data('timeout'));
				jq(this).children("iframe").slideUp(100);
				jq(this).children("ul").slideUp(100);
				jq(this).children("a").removeClass("hover");
			});
		});
		
		if(jq(window).width() <= 768){
			if(jq("#mobilemenu")){
				jq("#mobilemenu a").click(function(){
					jq("#widenav").slideDown();
					jq("#mobile-close").slideDown();
					return false;
				});
				jq("#mobile-close").click(function(){
					jq("#widenav").slideUp();
					jq("#mobile-close").slideUp();
				});
			}
		}
	}
	
	//====== homeの「購入情報」まわりのボックス ======
	jq("#buyinfo-text div").boxheight("buyinfo");
	
	//======メガフッターの高さあわせ======
	if(jq("#footer-amanainfo")){
		megafooter();
	}
	
	function megafooter(){
		mftlink = jq("#megalink-area").innerHeight();
		mftinfo = jq("#footer-amanainfo").innerHeight();
		if(mftlink<mftinfo){
			mfheight = mftinfo;
		} else {
			mfheight = mftlink;
		}
		jq("#megalink-area").css("height",mfheight);
		jq("#footer-amanainfo").css("height",mfheight);
	}
	
	//======コピーライトエリアの調整======
	
	if(jq("#copyright")){
		// ライン消し
		jq("#copyright .footer-phones li:last-child").css("border-right","none");
		// 高さ合わせ
		var fphoneh = 80;
//		jq("#copyright .footer-phones li").each(function(){
//			checkh = jq(this).height();
//			if(checkh > fphoneh){
//				fphoneh = checkh;
//			}
//		});
		jq("#copyright .footer-phones li").css("height",fphoneh);
	}
	

 //====== ログイン時のヘッダにあるユーザ情報フキダシ ======
	if(jq("#utility.userlogin #user-status .userlank")){
		jq("#utility.userlogin #user-status .userlank a").hover(function(){
			ustalttxt = jq(this).children("img").attr("alt");
			usttipwidth = ustalttxt.length + 1;
			usttipleft = -(usttipwidth/2);
			usttiptxt = '<span class="tipust"><span>' + ustalttxt + '</span></span>';
			jq(this).append(usttiptxt);
			jq(this).children(".tipust").css({"width":usttipwidth +"em","margin-left":usttipleft +"em","z-index":3000});
		},function(){
			jq(this).children("span").remove();
		});
	}
	
	//====== 検索結果のフキダシ ======
	searchbody = document.URL;
	photoindex = searchbody.indexOf(location.hostname + "/keyword/result.aspx");
	motionindex = searchbody.indexOf(location.hostname + "/motion/result.aspx");
	threedindex = searchbody.indexOf(location.hostname + "/3dmodel/result.aspx");
	soundindex = searchbody.indexOf(location.hostname + "/sound/result.aspx");
	if(photoindex >= 1){
		icon001 = jq("#idResultList_dtlSearchResult .icon001");
		icon002 = jq("#idResultList_dtlSearchResult .icon002");
		icon003 = jq("#idResultList_dtlSearchResult .icon003");
	} else if(motionindex >= 1){
		icon001 = jq("#idResultListMotion_dtlSearchResult .icon001");
		icon002 = jq("#idResultListMotion_dtlSearchResult .icon002");
		icon003 = jq("#idResultListMotion_dtlSearchResult .icon003");
	} else if(threedindex >= 1){
		icon001 = jq("#idResultList3DModel_dtlSearchResult .icon001");
		icon002 = jq("#idResultList3DModel_dtlSearchResult .icon002");
		icon003 = jq("#idResultList3DModel_dtlSearchResult .icon003");
	} else if(soundindex >= 1){
		searchbtninfo = jq(".music-flash-link a");
	} else {
		icon001 = jq("#idResultList_dtlSearchResult .icon001");
		icon002 = jq("#idResultList_dtlSearchResult .icon002");
		icon003 = jq("#idResultList_dtlSearchResult .icon003");
	}
	
	if ((soundindex >= 1)){
		searchbtninfo.hover(function(){
			titletxt = jq(this).children("img").attr("alt");
			tipcontent = '<span class="tipcontent">' + titletxt + '</span>'
			textlength = titletxt.length;
			txtwidth = textlength + "em";
			txtleft = - (textlength/2 + 0.5) + "em";
			jq(this).before(tipcontent);
			jq(".tipcontent").css({"width":txtwidth,"top":"27px","margin-left":txtleft});
		},function(){
			jq(this).siblings(".tipcontent").remove();
		});
	} else {
			icon001.hover(function(){
  		titletxt = jq(this).children("a").children("img").attr("alt");
  		tipcontent = '<span class="tipcontent">' + titletxt + '</span>'
  		textlength = titletxt.length;
  		txtwidth = textlength + "em";
  		txtleft = - (textlength/2 + 0.5) + "em";
  		//jq(this).parent().append(tipcontent);
				jq(this).append(tipcontent);
  		jq(".tipcontent").css({"width":txtwidth,"top":"25px","margin-left":txtleft});
  	},function(){
  		jq(".tipcontent").remove();
  	});
  	icon002.hover(function(){
  		titletxt = jq(this).children("a").children("img").attr("alt");
  		tipcontent = '<span class="tipcontent">' + titletxt + '</span>'
  		textlength = titletxt.length;
  		txtwidth = textlength + "em";
  		txtleft = - (textlength/2 + 0.5) + "em";
  		//jq(this).parent().append(tipcontent);
				jq(this).append(tipcontent);
  		jq(".tipcontent").css({"width":txtwidth,"top":"25px","margin-left":txtleft}).addClass("ic002");
  	},function(){
  		jq(".tipcontent").removeClass("ic002").remove();
  	});
  	icon003.hover(function(){
  		titletxt = jq(this).children("a").children("img").attr("alt");
  		tipcontent = '<span class="tipcontent">' + titletxt + '</span>'
  		textlength = titletxt.length;
  		txtwidth = textlength + "em";
  		txtleft = - (textlength/2 + 0.5) + "em";
  		//jq(this).parent().append(tipcontent);
				jq(this).append(tipcontent);
  		jq(".tipcontent").css({"width":txtwidth,"top":"25px","margin-left":txtleft});
  	},function(){
  		jq(".tipcontent").remove();
  	});
	}
	
	//====== 検索結果の各画像配置 ======
	thumbnailbox = jq(".thumbnailBox");
	if(thumbnailbox.size()>0){
		thumbnailbox.each(function(){
			thumbnailimg = jq(this).children(".thumbnailImgLoad").children("a:first-child").children("img");
			thumbnailwidth = thumbnailimg.width();
			if(thumbnailwidth % 2 == 0){
				thumbnailimg.css("margin-left",0);
			} else {
				thumbnailimg.css("margin-left",-1);
			}
		});
	}
	
	//====== シャドウ出したい ======
	var keytag = jq("header");
	var hometag = jq(".home-header-wrap").size();
	var newsitetag = jq("#user-tools-area").size();
	var tplpankuzu = jq(".tpl-pankuzu").size();
	if(0 < hometag){
	} else {
		if(0 < newsitetag || 0 < tplpankuzu){
		} else {
			keytag.css({"border-bottom-color":"#e6e6e6","border-bottom-style":"solid","border-bottom-width":"1px"});
		}
	};
	
	//====== テキストボックスのフォーカス ======
	var searchtext = jq("#search-wrap .searchtext");
//	var searchtextmo = jq("#idSearchFormMotion_txt_SearchKeywords");
//	var searchtext3d = jq("#idSearchForm3DModel_txt_SearchKeywords");
	if(0 < searchtext.size()){
		if((ismsie && jq("#home-user-tools").size() > 0) || (isie11 && jq("#home-user-tools").size() > 0) || (isff && location.href.indexOf("#")>0) || (url.indexOf("result.aspx")>0)){
		} else {
			searchtext.focus();
		}
	};
//	if(0 < searchtextmo.size()){
//		searchtextmo.focus();
//	};
//	if(0 < searchtext3d.size()){
//		searchtext3d.focus();
//	};
	placeholder(); //プレースホルダに文字列追加
	
	//====== google adservice の挿入タグが邪魔 ======
	if(jq("#usual-wrapper").size()>0){
		jq("#usual-wrapper").nextAll("img").css("position","fixed");
	};
});

//====== 汎用型ボックスの高さあわせ ======
//記述の際、必ずページ内でユニークなパラメータを「heightid」につけること
	jq.fn.boxheight = function(heightid){
		var heightid=new Array();
		
		//各ボックスの高さを取得して配列に保存しておく
		jq(this).each(function(idx){ //高さを追加
			heightid[idx]=jq(this).height();
		});
		
		//各ボックスの高さの最大値をとる
		var maxH=Math.max.apply(null,heightid);
		
		jq(this).css({"height":maxH+"px"});
	}

//====== 絞り込みボックスを開閉する ======
function optionBoxOC(){
	if(jq("#optionbtn").hasClass("open")){
		jq("#optionbox").slideUp(300);
		jq("#optionbtn").removeClass("open");
		jq("#optionbtn a").text("検索オプションを開く");
		jq("#sort-submit").animate({top:0},300);
		return false;
	}else{
		jq("#optionbox").slideDown(300);
		jq("#optionbtn").addClass("open");
		jq("#optionbtn a").text("検索オプションを閉じる");
		jq("#sort-submit").animate({top:20},300);
		if(jq(".sort-photo-right").size()>0){
			sortpl = jq(".sort-photo-left").height();
			sortpr = jq(".sort-photo-right").height();
			if(sortpr > sortpl){
				jq(".sort-photo-left").height(sortpr);
			} else if(sortpr < sortpl){
				jq(".sort-photo-right").height(sortpl);
			}
		}
	return false;
	}
}

//====== 料金表ポップアップ ======
function pricePop(){
	currenturl = document.URL;
	if(currenturl.indexOf("/photo/") > -1){
		pricepage = "http://help.amanaimages.com/price/photo/";
	} else if(currenturl.indexOf("/editorial/") > -1){
		pricepage = "http://help.amanaimages.com/price/photo/";
	} else if(currenturl.indexOf("/motion/") > -1){
		pricepage = "http://help.amanaimages.com/price/motion/";
	} else if(currenturl.indexOf("/3dmodel/") > -1){
		pricepage = "http://help.amanaimages.com/price/3drf_price/";
	} else if(currenturl.indexOf("/sound/") > -1){
		pricepage = "http://help.amanaimages.com/price/sound_price/";
	} else if(currenturl.indexOf("/font/") > -1){
		pricepage = "http://help.amanaimages.com/price/font_price/";
	} else if(currenturl.indexOf("/satsuei/") > -1){
		pricepage = "https://infotonetwork.com/fee/";
	} else {
		pricepage = "http://help.amanaimages.com/price/photo/";
	}
	var currentdomain = location.hostname;
	//priceurl = "http://" + currentdomain + "/" + pricepage;
//	pricew = 1000;
//	priceh = 700;
	pricew = 1040;
	priceh = 650;
	name = "";
	//window.open(priceurl, name, "width="+pricew+",height="+priceh+",status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
	window.open(pricepage, name, "width="+pricew+",height="+priceh+",status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
}

//====== ご利用ガイドのポップアップ ======
function faqPop(url){
	faqw = 800;
	faqh = 700;
	window.open(url, "faq", "width="+faqw+",height="+faqh+",status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
}