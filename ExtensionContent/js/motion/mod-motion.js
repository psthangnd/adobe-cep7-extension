var jq = jQuery;

// ========== for saloon navigation ==========
jq(function(){
	
//	var mnav = jq("#motion-navi");
//	var mnavsw = jq("#motion-navi li");
//	var vimeo = jq("#vimeo");
//	var currentdomain = location.hostname;
//	var currenturl = location.href;
//	
//	if(mnav.size()>0){
//		
//		msrc = ["corbis-140401","dkmotion-140401","bsntv-140401","sizzle-140717","huukei-141016","chikara-150521","chikara-150716","chikara-150820","chikara-151015","chikara-151119","chikara-151217"];
//		malt = ["corbis motion 世界屈指の動画コレクション 美しい自然風景からセレブ、歴史的な瞬間まで販売！","第一興商 世界の風景 世界各国のダイナミック風景映像を「フルHD」「ロイヤリティフリー」で一挙販売！","ヨーロッパ水紀行 BS日テレの人気番組「ヨーロッパ水紀行シリーズ」の映像が、動画素材に！","シズル感あふれる食材・料理動画 「食」を中心にシズル表現にこだわりをもつ制作会社「hue」から新作動画が入荷。","ロイヤリティフリー動画 鮮やかな日本の四季　色彩豊かに四季折々を捉えたアマナイメージズのオリジナル動画","ニッポンの力","ニッポンの力","ニッポンの力","ニッポンの力","ニッポンの力","ニッポンの力"]
//		spurl = ["http://" + currentdomain + "/motion/corbismotion/?rtm=mov-slider","http://" + currentdomain + "/motion/dkmotion/?rtm=mov-slider","http://" + currentdomain + "/motion/bsntv/?rtm=mov-slider","http://" + currentdomain + "/motion/result.aspx?Page=Search&KeyWord=15167&ImageID=&Pick=1&rtm=mov-slider","http://" + currentdomain + "/motion/result.aspx?Page=Search&KeyWord=15001&ImageID=&Pick=1&rtm=mov-slider","http://" + currentdomain + "/lp/chikara/?rtm=mov-slider","http://" + currentdomain + "/lp/chikara/?rtm=mov-slider","http://" + currentdomain + "/lp/chikara/?rtm=mov-slider","http://" + currentdomain + "/lp/chikara/?rtm=mov-slider","http://" + currentdomain + "/lp/chikara/?rtm=mov-slider","http://" + currentdomain + "/lp/chikara/?rtm=mov-slider"];
//		sptext = ["特集ページへ","特集ページへ","特集ページへ","他の作品も見る","他の作品も見る","特集ページへ","特集ページへ","特集ページへ","特集ページへ","特集ページへ","特集ページへ"];
//		
//		vimeodef = vimeo.find(".vimeo-def");
//		cpbnr = jq("#motion-sample .motion");//T-POINT CPバナー
//		
//		mnavsw.click(function(){
//			jq('#top-sln-bnr div.ungent-area.change').css("display","none");
//			vimeoimg = vimeo.find("img");
//			vimeoiframe = vimeo.find("iframe");
//			mnavclicked = jq(this).attr("class");
//			mnavnum = parseInt(mnavclicked.split("motion")[1]) - 1;
//			msrcnow = "http://" + currentdomain + "/img/motion/motion-sln-" + msrc[mnavnum] + ".jpg";
//			nowimg = "<img src=\"" + msrcnow + "\" alt=\"" + malt[mnavnum] + "\" class=\"vimeo" + mnavnum + "\">";
//			closebtn = '<div id="appendarea"><a href="#" class="jumplink">特集ページへ</a><img src="/img/common/btn-close02.gif" alt="閉じる" class="sampleclose" onclick="sampleClose();"></div>';
//			
//			if(jq(".sampleclose").size() < 1){
//				$("#motion-sample").after(closebtn);
//			}
//			
//			if(jq(this).hasClass("current")){
//				return false;
//			}
//			
//			mnavsw.each(function(){
//				thisthumb = jq("img",this).attr("src");
//				if(thisthumb.indexOf("a.jpg")>0){
//					resetthumb = thisthumb.split("a.jpg")[0] + ".jpg";
//					jq("img",this).attr("src",resetthumb);
//				}
//			});
//			
//			navithumb = jq(this).find("img");
//			if(!jq(this).hasClass("current")){
//				nowthumb = navithumb.attr("src").split(".jpg")[0] + "a.jpg";
//				navithumb.attr("src",nowthumb);
//			}
//
//			vimeodef.css("display","none");
//			cpbnr.css("display","none");//T-POINT CPバナー
//			if(vimeoiframe.size() > 0){
//				vimeoiframe.remove();
//				vimeo.append(nowimg);
//				mnavsw.removeClass("current");
//				jq(this).addClass("current");
//				jq("#appendarea").children("a").attr("href",spurl[mnavnum]);
//				jq("#appendarea").children("a").text(sptext[mnavnum]);
//			} else if(vimeoimg.size() > 0){
//				vimeoimg.attr("src",msrcnow);
//				vimeoimg.attr("alt",malt[mnavnum]);
//				mnavsw.removeClass("current");
//				jq(this).addClass("current");
//				vimeoimg.removeClass().addClass("vimeo" + mnavnum);
//				vimeo.addClass("viewing");
//				jq("#appendarea").children("a").attr("href",spurl[mnavnum]);
//				jq("#appendarea").children("a").text(sptext[mnavnum]);
//			} else {
//				vimeo.append(nowimg);
//				vimeo.addClass("viewing");
//				jq("#appendarea").children("a").attr("href",spurl[mnavnum]);
//				jq("#appendarea").children("a").text(sptext[mnavnum]);
//				jq(this).addClass("current");
//			}
//			var jumplinkw = jq("#appendarea").children("a").width();
//			var appendadjust = 38 - jumplinkw;
//			jq("#appendarea").css("margin-left", appendadjust);
//			return false;
//		});
//		
//		vimeo.click(function(){
//			vimeoaltimg = jq(this).find("img");
//			vimeoclass = vimeoaltimg.attr("class");
//			if(vimeoclass != undefined){
//				videonum = parseInt(vimeoclass.split("vimeo")[1]) + 1;
//				nowvimeo = "<iframe src=\"motion" + videonum + ".html\" width=\"615\" height=\"346\" id=\"player\" frameborder=\"0\" scrolling=\"no\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"
//				vimeoaltimg.remove();
//				vimeo.append(nowvimeo);
//				vimeo.addClass("viewing");
//			}
//		});
//	}
	
	var catdiv = jq("#motion-category .list-cateogry li div");
	var catcell = catdiv.children("ul");
	var cellheight = new Array();
	catcell.each(function(mch){
		cellheight[mch] = catcell.children("li").innerHeight();
	});
	
	var catcellmin = Math.min.apply(null,cellheight);
	//var defheight = catcellmin*4 + 159;
	
	catdiv.each(function(){
		if(jq(this).children("ul").children("li").length == 4){
			defh2 = jq(this).children("h2").children("span").innerHeight() + 120;
			defheight = jq(this).children("ul").innerHeight() + defh2;
		}
		
		if(jq(this).children("ul").children("li").length > 4){
			jq(this).css({"height":defheight,"overflow":"hidden"});
			jq(this).append('<span class="andmore">mouse on</span>');
		}
	});
	
	jq(".defheight").css("height",defheight);
	
	catdiv.hover(function(){
		cellnum = jq(this).children("ul").children("li").length;
		if(cellnum > 4){
			thisheight = catcellmin * cellnum + defh2;
			jq(this).animate({"height":thisheight},100);
			jq(".andmore",this).animate({opacity:0.6},100);
		}
	},function(){
		if(cellnum > 4){
			jq(this).animate({"height":defheight},100);
			jq(".andmore",this).animate({opacity:1},100);
		}
	});
	
	jq("#motion-navi li:last-child").addClass("last-child");
	
	// 動画埋め込みのスクリプト
	
	videoAdjust();
	
	vflag = 0;
	if(vflag==0){
		vflag = 1;
		jq(window).resize(function(){
			videoAdjust();
		});
		vflag = 0;
	}
	
});

// user agent type
var ua = {};
ua.name = window.navigator.userAgent.toLowerCase();

ua.isIE = (ua.name.indexOf('msie') >= 0 || ua.name.indexOf('trident') >= 0);
ua.isiPhone = ua.name.indexOf('iphone') >= 0;
ua.isiPod = ua.name.indexOf('ipod') >= 0;
ua.isiPad = ua.name.indexOf('ipad') >= 0;
ua.isiOS = (ua.isiPhone || ua.isiPod || ua.isiPad);
ua.isAndroid = ua.name.indexOf('android') >= 0;
ua.isTablet = (ua.isiPad || (ua.isAndroid && ua.name.indexOf('mobile') < 0));
ua.isChrome = ua.name.indexOf('chrome') >= 0;

// video position adjuster

function videoAdjust(){
	if(ua.isiPhone || ua.isiPod || ua.isiPad || ua.isiOS || ua.isTablet){
		videoPlace = "#" + jq("#bgvid").parent("div").attr("id");
		posterImgPass = "url(" + jq("#bgvid").attr("poster") + ")";
		jq(videoPlace).css({"background-image":posterImgPass,"background-size":"cover","background-position":"50%","background-repeat":"none"});
		jq("#bgvid").remove();
		return false;
	}
	vwidth = jq("#bgvid").width();
	vadjust = (455-(vwidth*0.5625))/2;
	jq("#bgvid").css("margin-top",vadjust);
}

//sample close

function sampleClose(){
	jq(".sampleclose").remove();
	jq("#appendarea").remove();
	jq("#motion-navi li").removeClass("current");
	jq("#motion-navi li").each(function(){
		thisthumb = jq("img",this).attr("src");
		if(thisthumb.indexOf("a.jpg")>0){
			resetthumb = thisthumb.split("a.jpg")[0] + ".jpg";
			jq("img",this).attr("src",resetthumb);
		}
	});
	jq("#vimeo").find("img").remove();
	jq("#vimeo").find("iframe").remove();
	jq("#vimeo").removeClass("viewing");
	jq("#vimeo").find(".vimeo-def").css("display","block");
	jq("#motion-sample .motion").css("display","block");//T-POINT CPバナー
	jq('#top-sln-bnr div.ungent-area.change').css("display","block");
}