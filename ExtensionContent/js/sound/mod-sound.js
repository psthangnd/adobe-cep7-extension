var jq = jQuery;

var isie8 = window.navigator.appVersion.toLowerCase().indexOf('msie 8.') != -1;
var isie9 = window.navigator.appVersion.toLowerCase().indexOf('msie 9.') != -1;
	
jq(function(){
	// ========== for select navigation ==========
/*	var nowlocate = location.href;
	var searchkw = jq("#search-wrap .searchtext"); //プレースホルダの対象を特定
	if(nowlocate.indexOf("categoryno=02")>0){
		jq("#top-sln-bnr").addClass("sln-se");
		jq("#search-wrap .selectbox .select a").attr("title","効果音");
		jq("#search-wrap .selectbox .select a img").attr("alt","効果音");
		nowimgsrc = jq("#search-wrap .selectbox .select a img").attr("src");
		nowsrc = nowimgsrc.split("icon-sct-")[0] + "icon-sct-soundse-now.gif";
	 jq("#search-wrap .selectbox .select a img").attr("src", nowsrc);
		jq("#selectbox").val("soundse");
		jq("#search-wrap .selectbox .pulldown .last-child").addClass("selected");
		selectedsrc = jq("#search-wrap .selectbox .pulldown .last-child a img").attr("src").split("soundse")[0] + "soundse-a.gif";
		jq("#search-wrap .selectbox .pulldown .last-child a img").attr("src",selectedsrc);
		if((isie8 || isie9)){ // IE8 と IE9は、placeholderが使えないのでvalueに入れる
			searchkw.val("音素材（効果音）を検索").css("color","#a1a1a1");
		} else {
			searchkw.attr("placeholder","音素材（効果音）を検索");
		}
		if(!jq("#sound-brand-mu").hasClass("menuhide")){
			jq("#sound-brand-mu").addClass("menuhide");
		}
		jq("#sound-brand-se").removeClass("menuhide");
		jq("#sound-instrumental").addClass("menuhide");
	} else {
		jq("#search-wrap .selectbox .pulldown .first-child").addClass("selected");
		selectedsrc = jq("#search-wrap .selectbox .pulldown .first-child a img").attr("src").split("soundmu")[0] + "soundmu-a.gif";
		jq("#search-wrap .selectbox .pulldown .first-child a img").attr("src",selectedsrc);
		if(!jq("#sound-brand-se").hasClass("menuhide")){
			jq("#sound-brand-se").addClass("menuhide");
		}
		jq("#sound-brand-mu").removeClass("menuhide");
		jq("#sound-instrumental").removeClass("menuhide");
	}
	
	*/
	
	// カテゴリーのチェックを設定
	setSoundCategory();
	
	var categoryheight = jq("#category-list-se").height();
	var catlistmu = jq("#category-list-mu");
	var defheight = catlistmu.height();
	catlistmu.css({"height":categoryheight,"overflow":"hidden"});
	catlistmu.parent(".category-box").hover(function(){
		catlistmu.animate({"height":defheight,"overflow":"auto"},100);
		jq(".andmore",this).animate({opacity:0.6},100);
	},function(){
		catlistmu.animate({"height":categoryheight,"overflow":"hidden"},100);
		jq(".andmore",this).animate({opacity:1},100);
	});
	
	// カテゴリーツリーのセルの高さが2行に改行されていた場合は調整
	
	jq("#sound-category .category-box ul li").each(function(){
		thisheight = jq(this).height();
		prevheight = jq(this).prev().height();
		if(thisheight < prevheight){
			gapheight = thisheight - prevheight;
			jq(this).css("margin-top",gapheight);
		}
	});
	
	jq('#user-tools a[href^=#]').click(function(){
		var pdhref= jq(this).attr("href");
		var fontsound = jq(this).parent().parent().parent().siblings("a");
		var pdclass = jq(this).parent().parent(".pulldown-sound").size();
		if(pdclass != 1){
			var speed = 500;
			var target = jq(pdhref == "#" || pdhref == "" ? 'html' : pdhref);
			var position = target.offset().top;
			if(pdhref != "#"){
				jq("html, body").animate({scrollTop:position}, speed, "swing");
				return false;
			}
		}
	});
		
	//======検索エリアのセレクトボックス======
	
	var searchkw = jq("#search-wrap .searchtext"); //プレースホルダの対象を特定
	
	function searchkwbox(){
		// プレースホルダに入力する文字列を決定する（HTML5）				
		var nowplaceholder = jq("#selectbox").val();
		switch(nowplaceholder){
			case "creative":
			placeholdertxt = "写真・イラストを検索";
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
			placeholdertxt = "WEBフォントを検索";
			break;
		}
	}
	
	function placeholder(){ //プレースホルダに文字列を入力する
		if(jq("#search-wrap").size()>0){
			searchkwbox();
			if((isie8 || isie9)){ // IE8 と IE9は、placeholderが使えないのでvalueに入れる
				searchkw.val(placeholdertxt).css("color","#a1a1a1");
				searchkw.focus(function(){searchkw.val("").css("color","#505055");}).blur(function(evt){searchkw.val(placeholdertxt).css("color","#a1a1a1");});
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
	}
	
	if(jq("#search-wrap").size()>0){
		jq('div.selectbox').each(function(){
			var self = jq(this);
			var selectlink = jq('#user-tools .search-area #search-wrap div.selectbox .select');
			selectlink.children("a").addClass('arrow');
			var pulldown = jq('.pulldown-sound',self);
			//var data = jq('input:hidden',self);
			var data = jq('#selectbox',self);
			
			var select_value = jq('a',selectlink);
			
			pulldown.children(':first-child').addClass('first-child');
			pulldown.hide().children(':last-child').addClass('last-child');
			
			pulldown.children().children("div").children("ul").children(':first-child').addClass('first-child');
			pulldown.children().children("div").children("ul").children(':last-child').addClass('last-child');
			
			// ====== 表示時に画像を検索対象と一致させる ====== //
			jq('a',pulldown).each(function() {
				var anchor = jq(this);
				var value1 = anchor.attr('href').replace('#','');
				if (data.val() == value1) {
					var text = anchor.html();
					textname = text.split(".gif")[0];
					textalt = text.split(".gif")[1];
					var nowtextall = (textname + "-now.gif" + textalt);
					var nowtext = nowtextall.split("><")[0] + ">";
					select_value.html(nowtext);
					
					// フォームの表示切替も併せて
					if (value1 == "soundmu") {
						jq("#optioncreative").hide();
						jq("#optionmotion").hide();
						jq("#option3d").hide();
						jq("#optionfontdl").hide();
						jq("#optionfontpk").hide();
						jq("#optionfontweb").hide();
						jq("#optionsoundmu").show();
						jq("#optionsoundse").hide();
						jq('.cat-sound #top-sln-bnr').removeClass('sln-se');
						jq(".option-tab li").removeClass('current');
						jq("#soundmu").addClass('current');
					} else if (value1 == "soundse") {
						jq("#optioncreative").hide();
						jq("#optionmotion").hide();
						jq("#option3d").hide();
						jq("#optionfontdl").hide();
						jq("#optionfontpk").hide();
						jq("#optionfontweb").hide();
						jq("#optionsoundmu").hide();
						jq("#optionsoundse").show();
						jq('.cat-sound #top-sln-bnr').addClass('sln-se');
						if (jq('#pankuzu-area .current').text() == "音素材") {
							jq('#pankuzu-area .current').removeClass('current').html('<a href="/sound">音素材</a>').next('li').addClass('current');
						}
						jq(".option-tab li").removeClass('current');
						jq("#soundse").addClass('current');
					} else {
						jq("#optionbtn").hide();
					}
					
					var titletext = jq(this).attr('title');
					jq('.selected',pulldown).removeClass('selected');
					jq('.select_focus').removeClass('select_focus');
					jq(this).parent("li").addClass('selected');
					var selimg = jq('.selected img').attr("src").split(".gif")[0];
					selectedimg = selimg + "-a.gif";
					selectlink.children("a").attr("title",titletext);
					jq(this).children("img").attr("src",selectedimg);
				}
			});
			
			selectlink.click(function(e){
				//jq('.pulldown').hide();
				
				if (pulldown.is(':hidden')){
					//pulldown.show();
					optionBoxOC();
					jq(this).addClass('select_focus');
					e.stopPropagation();
				} else {
					//pulldown.hide();
					optionBoxOC();
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
								
				if(text.indexOf("-a.gif")!=-1){ //アクティブな要素をクリックしちゃったら動きを止めてプルダウン消す
					jq('.pulldown-sound').hide();
					return false;
				}
				
				jq('img',pulldown).each(function(){
					var allimg = jq(this).attr("src");
					if(allimg.indexOf("-a.gif")!=-1){
						normimg = jq(this).attr("src").split("-a")[0] + ".gif";
						jq(this).attr("src",normimg);
					}
				});
				
				jq('.selected',pulldown).removeClass('selected');
				jq(this).parent("li").addClass('selected');
				var selimg = jq('.pulldown-sound .selected img').attr("src").split(".gif")[0];
				selectedimg = selimg + "-a.gif";
				selectlink.children("a").attr("title",titletext);
				jq(this).children("img").attr("src",selectedimg);
				
				select_value.html(nowtext);
				data.val(value);
				
				if (value == "soundmu") {
					jq("#optionbtn").show();
					jq("#optioncreative").hide();
					jq("#optionmotion").hide();
					jq("#option3d").hide();
					jq("#optionfontdl").hide();
					jq("#optionfontpk").hide();
					jq("#optionfontweb").hide();
					jq("#optionsoundmu").show();
					jq("#optionsoundse").hide();
					jq('.cat-sound #top-sln-bnr').removeClass('sln-se');
					//jq('#pankuzu-area .current').text('楽曲');
					jq('#pankuzu-area .current').removeClass('current').text('').prev('li').addClass('current').text('音素材');
				} else if (value == "soundse") {
					jq("#optionbtn").show();
					jq("#optioncreative").hide();
					jq("#optionmotion").hide();
					jq("#option3d").hide();
					jq("#optionfontdl").hide();
					jq("#optionfontpk").hide();
					jq("#optionfontweb").hide();
					jq("#optionsoundmu").hide();
					jq("#optionsoundse").show();
					jq('.cat-sound #top-sln-bnr').addClass('sln-se');
					//jq('#pankuzu-area .current').text('効果音');
					jq('#pankuzu-area .current').removeClass('current').html('<a href="/sound">音素材</a>').next('li').addClass('current').text('効果音');
				} else {
					if(jq("#optionbtn").hasClass("open")){
						jq("#optionbox").slideUp(500);
						jq("#optionbtn").removeClass("open");
						jq("#optionbtn a").text("検索オプションを開く");
						jq("#sort-submit").animate({top:0},500);
						//setCookie();
					}
					jq("#optionbtn").hide();
				}
				
				jq('.select_focus').removeClass('select_focus');
				
				placeholder(); //プレースホルダに文字列追加
				
				pulldown.hide();
				
				jq("#search-wrap .searchtext").focus();
				
				return false;
			});
			
			jq('body').click(function(){ //プルダウン以外の箇所が押されたらプルダウン消す
				jq('.select_focus').removeClass('select_focus');
				jq('.pulldown-sound').hide();
			});
		});
	}
	
	if(jq(".more-feature").size()>0){
		jq(".more-feature a span").each(function(){
			featureheight = -(jq(this).height()/2);
			jq(this).css("margin-top",featureheight);
		});
	}
	
});