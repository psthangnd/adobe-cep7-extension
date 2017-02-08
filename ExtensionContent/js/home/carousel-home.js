$(function(){
	if($("#information")){
		//$("#information ul li:first-child").append("<span>UPDATE</span>");
	}
	
	// hprev,hnextをクリックしたときに動かすliの数
	var li_hmove = 6;
	// カルーセルパネルの幅を取得
	var hcarousel_wid = $("#historyslide").width();
	// liのpaddingを含む幅を取得
	var hli_wid = $("#historypickup li").outerWidth();
	// liの数を取得
	var hli_num = $("#historypickup li").size();
	// ulの幅を計算(liを全部横に並べた幅)
	var hul_wid = hli_wid*hli_num;
	var hidecartin;
	
	function boxPosition(ele,pos) {
		// 指定されたエレメントのpositionの各値を取得
		var position = $(ele).position();
		// 指定された位置の値をリターン
		return position[pos];
	}
	
	// 幅がパネルに満たないときはボタンオフ
	if(hcarousel_wid > hul_wid) {
		$('#hnext').attr("class","hide");
	}
	
	if($("#historypickup").size()>0){
		$('#historypickup ul').css({
		position: 'absolute',
		width: hul_wid+'px'
		});
		$('#hprev').click(function(){
		// prevをクリックしたときにclass=showが指定されていれば、以下を実行
		if($(this).hasClass("show")){
			// ulのpositionを左に動かすアニメーション(:not(:animated)は動いている最中のクリック防止用)
			$('#historypickup ul:not(:animated)').animate({left:'+='+hli_wid*li_hmove},600,
			function(){
				// アニメーションが完了したらulのposition-leftの位置を取得
				var hul_pos = boxPosition("#historypickup ul","left");
				// nextのclassを「show」に書き換え
				$('#hnext').attr("class","show");
				// ulのposition-leftが0の場合、prevのclassを「hide」に書き換え
				if(hul_pos === 0) {
					$('#hprev').attr("class","hide");
				}
			});
		} else if($(this).hasClass("hide")){
			return false;
		} else {
			return false;
		}
		});
		$('#hnext').click(function(){
		// nextをクリックしたときにclass=showが指定されていれば、以下を実行（以下略）
		if($(this).hasClass("show")) {
			$('#historypickup ul:not(:animated)').animate({left:'-='+hli_wid*li_hmove},600,
			function(){
				var hul_pos = boxPosition("#historypickup ul","left");
				$('#hprev').attr("class","show");
				if(hcarousel_wid > (hul_wid+hul_pos)) {
					$('#hnext').attr("class","hide");
				}
			});
		} else if($(this).hasClass("hide")){
			return false;
		} else {
			return false;
		}
		});
		
		hfw = "100%";
		hfh = "100%";
		$("#historybox #historyslide #historypickup li span.hist-canvas img.hist-thumb").each(function(){ //IE 8以下
			if($(this).width()!=0){
				var imgw = $(this).width(); //画像の元のサイズを取得⇒タテヨコを比較
 			var imgh = $(this).height();
 			if(imgw > imgh){ //ヨコ位置の場合
 				$(this).width(hfw);
 				thumbw = -($(this).width()/2) - 3;
 				thumbh = -($(this).height()/2) - 3;
 			} else if(imgw < imgh){ //タテ位置の場合
 				$(this).height(hfh);
 				thumbw = -($(this).width()/2) - 3;
 				thumbh = -($(this).height()/2) - 3;
 			} else { //正方形の場合
 				$(this).width(hfw);
 				thumbw = -($(this).width()/2) - 3;
 				thumbh = -($(this).height()/2) - 3;
 			}
 			$(this).css({"margin-left":thumbw,"margin-top":thumbh}); //検知した条件でマイナスマージンを設定
 		}
 	});
		$("#historybox #historyslide #historypickup li span.hist-canvas img.hist-thumb").bind('load',function(){
			var imgw = $(this).width(); //画像の元のサイズを取得⇒タテヨコを比較
			var imgh = $(this).height();
			if(imgw > imgh){ //ヨコ位置の場合
				$(this).width(hfw);
				thumbw = -($(this).width()/2) - 3;
				thumbh = -($(this).height()/2) - 3;
			} else if(imgw < imgh){ //タテ位置の場合
				$(this).height(hfh);
				thumbw = -($(this).width()/2) - 3;
				thumbh = -($(this).height()/2) - 3;
			} else { //正方形の場合
				$(this).width(hfw);
				thumbw = -($(this).width()/2) - 3;
				thumbh = -($(this).height()/2) - 3;
			}
			$(this).css({"margin-left":thumbw,"margin-top":thumbh}); //検知した条件でマイナスマージンを設定
		});
		
		jq(".hist-canvas").each(function(){
			jq(this).find(".hist-slideup").css("opacity","0");
			jq(this).find(".hist-close").css("opacity","0");
			jq(this).hover(function(){
				jq(this).find(".hist-slideup").animate({"opacity":"1"},100);
				jq(this).find(".hist-close").animate({"opacity":"1"},100);
			},function(){
				jq(this).find(".hist-slideup").animate({"opacity":"0"},100);
				jq(this).find(".hist-close").animate({"opacity":"0"},100);
			});
		});
		
		var arrowbox = $('#historybox .arrow_box');
		
		$(document).click(function(){
			arrowbox.removeClass("arrowright").hide();
			clearTimeout(hidecartin);
			$("#historybox .cartin_box").animate({opacity:0},500).css("display","none");
		});
		
		arrowbox.click(function(ev){
			ev.stopPropagation();
		});


//ここから、フキダシ表示
		var activelbbtn;
  
		$("a[class^='hist-lightbox']").click(function(e){
			// チェック済みになっていたら、以後の処理は実行しない
			if ($(this).hasClass('hist-lightbox-check')) {
				return false;
			} else if ($(this).hasClass('hist-lightbox-login')) {
				// ログイン用ボタンだった場合は、処理を抜ける
				return true;
			}
			
			activelbbtn = $(this);
		
			var wwbase = $(window).width();
			if(wwbase > 980){
				var ww = (wwbase - 980)/2;
			} else if(wwbase < 980){
				var ww = 0;
			}
			e.stopPropagation();
			
			var createlb = $("#historybox .arrow_box #createlb");
			if(createlb.css('display') == 'none'){
				var curtop = - (($("#historybox .arrow_box").innerHeight())/2) + $("#historybox h1").innerHeight() + 5;
			}
			var curx = Math.floor(e.pageX - ww);
			var curleft;
			if(curx > 20 && curx < 144){
				curleft = 154;
			} else if(curx > 150 && curx < 275){
				curleft = 284;
			} else if(curx > 280 && curx < 405){
				curleft = 414;
			} else if(curx > 410 && curx < 535){
				curleft = 544;
			} else if(curx > 540 && curx < 665){
				curleft = 674;
			} else if(curx > 670 && curx < 795){
				curleft = 804;
			} else if(curx > 800 && curx < 925){
				curleft = 934;
			} else if(curx > 930 && curx < 1055){
				curleft = 1064;
			}
						
			$("#historybox .arrow_box").css({"left":curleft,"margin-top":curtop,"display":"block"});
			
			createlb.css("display","none");
			$("#historybox .arrow_box .createlblink").css("display","inline-block");
			
			$('#addLbLink').val($(this).attr('href'));
			
			return false;
		});
		
		$("a.hist-cart").click(function(e){
			var wwbase = $(window).width();
			if(wwbase > 980){
				var ww = (wwbase - 980)/2;
			} else if(wwbase < 980){
				var ww = 0;
			}
			e.stopPropagation();
			
			var cartintxt = $("#historybox .cartin_box");
			var cartx = Math.floor(e.pageX - ww);
			var cartleft;
			if(cartx > 20 && cartx < 144){
				cartleft = 41;
			} else if(cartx > 150 && cartx < 275){
				cartleft = 170;
			} else if(cartx > 280 && cartx < 405){
				cartleft = 299;
			} else if(cartx > 410 && cartx < 535){
				cartleft = 428;
			} else if(cartx > 540 && cartx < 665){
				cartleft = 557;
			} else if(cartx > 670 && cartx < 795){
				cartleft = 686;
			} else if(cartx > 800 && cartx < 925){
				cartleft = 815;
			} else if(cartx > 930 && cartx < 1055){
				cartleft = 944;
			}
			
			cartintxt.removeClass("error");
			
			var targetbtn = $(this);
			var cartinevent = $(this).attr('href');
			$.ajax({'type': 'GET',
					'url': cartinevent,
					'cache': false,
					'success':
						function(data){
							if(data)
							{
								var retStatus=data.split(":");
								switch(parseInt(retStatus[1]))
								{
									case 1:
										alert("カート上限は30件です");
										return;
										break;
									case 2:
									case 3:
									case 9:
										cartintxt.addClass("error");
										break;
									case 4:
										alert("複数サイトで同一コンテンツをショッピングカートに入れることはできません。\r\n別サイトのショッピングカートからこのコンテンツを削除いたしました。");
									default:
										targetbtn.attr('disabled', 'disabled');
										targetbtn.removeAttr('href');
										targetbtn.addClass('hist-cart-check');
										targetbtn.removeClass('hist-cart');
										targetbtn.unbind();
										var icon = targetbtn.children('img');
										if (icon) {
											icon.attr('alt', 'すでにショッピングカートに入っています');
											icon.attr('src', '/img/common/icon-lb-cart01-check.png');
										}
										if ($('#lightbox').length > 0) {
											changeLightboxCartinBotton(targetbtn.parent().parent().parent().children('input[class="image_id"]').val());
										}
										break;
								}
								var hidejob = function(){
									cartintxt.animate({opacity:0},500).css("display","none");
								}
								
								if(cartintxt.css("opacity") > 0){
									cartintxt.css("opacity",0);
									clearTimeout(hidecartin);
								}
								cartintxt.css({"left":cartleft,"display":"block"}).animate({opacity:1},100);
								hidecartin = setTimeout(hidejob,5000);
								
								if (parent.down) {
									ReloadAll(null,1);
								}
							}
						}
			});
			
			
			//if($(this).hasClass("error")){
			//	cartintxt.addClass("error");
			//}
			
			
			return false;
		});
		
		$("a.hist-close").click(function(e){
			e.stopPropagation();
			var targetbtn = $(this);
			var deleteevent = $(this).attr('href');
			$.ajax({'type': 'GET',
					'url': deleteevent,
					'cache': false,
					'success':
						function(){
							targetbtn.parent().parent().parent().parent().remove();
							// 全件削除されたら、空表示に切り替える
							if ($('#idBrowsingHistory_dtlBrowsingHistoryList').children().length == 0) {
								$('#historyslide').html('<div class="blank-history-area">最近チェックした作品はありません。</div>');
							}
						}
			});
			return false;
		});
		
		$('#historybox .arrow_box .addtolblink').click(function(e){
			var wwbase = $(window).width();
			if(wwbase > 980){
				var ww = (wwbase - 980)/2;
			} else if(wwbase < 980){
				var ww = 0;
			}
			e.stopPropagation();
			
			var cartintxt = $("#historybox .cartin_box");
			var cartx = Math.floor(e.pageX - ww);
			var cartleft;
			if(cartx > 20 && cartx < 144){
				cartleft = 41;
			} else if(cartx > 150 && cartx < 275){
				cartleft = 170;
			} else if(cartx > 280 && cartx < 405){
				cartleft = 299;
			} else if(cartx > 410 && cartx < 535){
				cartleft = 428;
			} else if(cartx > 540 && cartx < 665){
				cartleft = 557;
			} else if(cartx > 670 && cartx < 795){
				cartleft = 686;
			} else if(cartx > 800 && cartx < 925){
				cartleft = 815;
			} else if(cartx > 930 && cartx < 1055){
				cartleft = 944;
			}
			
			cartintxt.removeClass("error");
			
			var lbinevent = $('#addLbLink').val();
			lbinevent = lbinevent + "&BoxNo=" + $('#addbox').val();
			$.ajax({'type': 'GET',
					'url': lbinevent,
					'cache': false,
					'success': 
						function(data){
							if(data)
							{
								var retStatus=data.split(":");
								switch(parseInt(retStatus[0]))
								{
									case 1:
										cartintxt.addClass("error");
										
										// ライトボックスに入らなかったときのみ吹きだしを出す
										var hidejob = function(){
											cartintxt.animate({opacity:0},500).css("display","none");
										}
										
										if(cartintxt.css("opacity") > 0){
											cartintxt.css("opacity",0);
											clearTimeout(hidecartin);
										}
										cartintxt.css({"left":cartleft,"display":"block"}).animate({opacity:1},100);
										hidecartin = setTimeout(hidejob,5000);
										break;
									default:
										activelbbtn.attr('disabled', 'disabled');
										//activelbbtn.removeAttr('href');
										activelbbtn.addClass('hist-lightbox-check');
										activelbbtn.removeClass('hist-lightbox');
										//activelbbtn.unbind();
										var icon = activelbbtn.children('img');
										if (icon) {
											icon.attr('alt', 'すでにライトボックスに入っています');
											icon.attr('src', '/img/common/icon-lightbox02-check.png');
										}
										$("#historybox .arrow_box").css({"display":"none"});
										// 新ライトボックスの更新
										updateActiveLightBoxItemLists($('#addbox').val());
										break;
								}
							}
						}
			});
			
			return false;
		});
		
		$("#historybox .arrow_box .createlblink").click(function(){
			$(this).css("display","none");
			$("#createlbname").val("");
			$("#historybox .arrow_box #createlb").css("display","block");
			$("#historybox .arrow_box #createlb input").focus();
			return false;
		});
		
		$("#historybox .arrow_box .createnewlb").click(function(e){
			var wwbase = $(window).width();
			if(wwbase > 980){
				var ww = (wwbase - 980)/2;
			} else if(wwbase < 980){
				var ww = 0;
			}
			e.stopPropagation();
			
			var cartintxt = $("#historybox .cartin_box");
			var cartx = Math.floor(e.pageX - ww);
			var cartleft;
			if(cartx > 20 && cartx < 144){
				cartleft = 41;
			} else if(cartx > 150 && cartx < 275){
				cartleft = 170;
			} else if(cartx > 280 && cartx < 405){
				cartleft = 299;
			} else if(cartx > 410 && cartx < 535){
				cartleft = 428;
			} else if(cartx > 540 && cartx < 665){
				cartleft = 557;
			} else if(cartx > 670 && cartx < 795){
				cartleft = 686;
			} else if(cartx > 800 && cartx < 925){
				cartleft = 815;
			} else if(cartx > 930 && cartx < 1055){
				cartleft = 944;
			}
			
			cartintxt.removeClass("error");
			
			var lbname = $('#createlbname').val();
			if (lbname && lbname.length>0) {
			    var eventurl = "/home/UserBrowsingHistoryManager.aspx?Operation=newlightbox&BoxName=" + replaceAll(escape(lbname), "+", encodeURIComponent("+"));
				$.ajax({'type': 'GET',
					'url': eventurl,
					'cache': false,
					'success':
						function(data){
							if(data)
							{
								var retStatus=data.split(":");
								switch(parseInt(retStatus[0]))
								{
									case 1:								
										cartintxt.addClass("error");
										var hidejob = function(){
											cartintxt.animate({opacity:0},500).css("display","none");
										}
										
										if(cartintxt.css("opacity") > 0){
											cartintxt.css("opacity",0);
											clearTimeout(hidecartin);
										}
										cartintxt.css({"left":cartleft,"display":"block"}).animate({opacity:1},100);
										hidecartin = setTimeout(hidejob,5000);

										break;
									default:
										$('#addbox').prepend('<option value=' + retStatus[1] + '>' + lbname + '</option>');
										$('#addbox').val(retStatus[1]);
										$("#historybox .arrow_box #createlb").css("display","none");
										$("#historybox .arrow_box .createlblink").css("display","block");
										$("#createlbname").val("");
										
										// ライトボックス側を更新
										if ($('.lb-b #lightboxname').length > 0) {
											$('.lb-b #lightboxname').prepend("<option value=\""+retStatus[1]+"\" title=\""+lbname+"\">"+lbname+" (0)</option>");
										}
										break;
								}
							}
						},
					error : function(data) {
						alert("使用できない文字列が入っています");
					}
				});
			}
			return false;
		});
		
		
	}
});

// ライトボックスボタンの状態を切り替える
function changeHistoryBoxLightboxBotton(image_id, onoff) {
	var target = $('#historybox #historyslide #historypickup .image_id[value="' + image_id + '"]');
	if (target.length > 0) {
		var activelbbtn = target.next('li').find('a[class^="hist-lightbox"]');
		if (onoff == "off") {
			activelbbtn.removeAttr('disabled');
			activelbbtn.addClass('hist-lightbox');
			activelbbtn.removeClass('hist-lightbox-check');
			var icon = activelbbtn.children('img');
			if (icon) {
				icon.attr('alt', 'ライトボックスに入れる');
				icon.attr('src', '/img/common/icon-lightbox02.png');
			}
		} else {
			activelbbtn.attr('disabled', 'disabled');
			activelbbtn.addClass('hist-lightbox-check');
			activelbbtn.removeClass('hist-lightbox');
			var icon = activelbbtn.children('img');
			if (icon) {
				icon.attr('alt', 'すでにライトボックスに入っています');
				icon.attr('src', '/img/common/icon-lightbox02-check.png');
			}
		}
	}
}

// カートボタンの状態を切り替える
function changeHistoryBoxCartinBotton(image_id) {
	var target = $('#historybox #historyslide #historypickup .image_id[value="' + image_id + '"]');
	if (target.length > 0) {
		var cartinbtn = target.next('li').find('a[class^="hist-cart"]');
		cartinbtn.attr('disabled', 'disabled');
		cartinbtn.removeAttr('href');
		cartinbtn.addClass('hist-cart-check');
		cartinbtn.removeClass('hist-cart');
		cartinbtn.unbind();
		var icon = cartinbtn.children('img');
		if (icon) {
			icon.attr('alt', 'すでにショッピングカートに入っています');
			icon.attr('src', '/img/common/icon-lb-cart01-check.png');
		}
	}
}