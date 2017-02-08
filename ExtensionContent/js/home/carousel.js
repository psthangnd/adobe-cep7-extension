var jq = jQuery;

jq(function(){
	// prev,nextをクリックしたときに動かすliの数
	var li_move = 10;
	// カルーセルパネルの幅を取得
	var carousel_wid = jq("#lb-pickuparea").width();
	// liのpaddingを含む幅を取得
	var li_wid = jq("#lb-pickupbox li").outerWidth();
	// liの数を取得
	var li_num = jq("#lb-pickupbox li").size();
	// ulの幅を計算(liを全部横に並べた幅)
	var ul_wid = li_wid*li_num;
	// ulにスタイルを追加
	var hidecartinlb;
	jq('#lb-pickupbox ul').css({
		position: 'absolute',
		top: '0',
		left: '0',
		width: ul_wid+'px'
	});
	jq('#prev').click(function(){
		// prevをクリックしたときにclass=showが指定されていれば、以下を実行
		if(jq(this).hasClass("show")){
			// ulのpositionを左に動かすアニメーション(:not(:animated)は動いている最中のクリック防止用)
			jq('#lb-pickupbox ul:not(:animated)').animate({left:'+='+li_wid*li_move},600,
			function(){
				// アニメーションが完了したらulのposition-leftの位置を取得
				var ul_pos = boxPosition("#lb-pickupbox ul","left");
				// nextのclassを「show」に書き換え
				jq('#next').attr("class","show");
				// ulのposition-leftが0の場合、prevのclassを「hide」に書き換え
				if(ul_pos === 0) {
					jq('#prev').attr("class","hide");
				}
			});
		} else if(jq(this).hasClass("hide")){
			return false;
		} else {
			return false;
		}
	});
	jq('#next').click(function(){
		// nextをクリックしたときにclass=showが指定されていれば、以下を実行（以下略）
		if(jq(this).hasClass("show")) {
			jq('#lb-pickupbox ul:not(:animated)').animate({left:'-='+li_wid*li_move},600,
			function(){
				var ul_pos = boxPosition("#lb-pickupbox ul","left");
				jq('#prev').attr("class","show");
				if(carousel_wid > (ul_wid+ul_pos)) {
					jq('#next').attr("class","hide");
				}
			});
		} else if(jq(this).hasClass("hide")){
			return false;
		} else {
			return false;
		}
	});
	function boxPosition(ele,pos) {
		// 指定されたエレメントのpositionの各値を取得
		var position = jq(ele).position();
		// 指定された位置の値をリターン
		return position[pos];
	}
	
//======ライトボックス======

 var lightboxBtm = jq('#lightbox.lb-b');
	
	// 更新用関数
	function updateLightboxItems(box_no) {
		jq('#lb-pickupbox ul').empty();
		jq.ajax({
			type:"GET",
			url:"/home/LightboxManager.aspx",
			dataType: "json",
			cache: false,
			data: {operation:"getitems", box_no:box_no},
			success: function(data) {
				jq('#lb-pickupbox ul').empty();
				jq.each(data.details, function(i, detail){
					var htmlDetail;
					if (detail.addcart_flg != "True") {
						htmlDetail = "<li><input type=\"hidden\" class=\"image_id\" value=\"" + detail.image_id + "\" /><span class=\"lb-canvas\"><img src=\"../img/sorry-icon.jpg\" alt=\"\" class=\"lb-thumb\"><span class=\"lb-slideup ";
					} else {
						htmlDetail = "<li><input type=\"hidden\" class=\"image_id\" value=\"" + detail.image_id + "\" /><span class=\"lb-canvas\"><img src=\"" + detail.thumb_path + "\" alt=\"\" class=\"lb-thumb\"><span class=\"lb-slideup ";
					}
					switch (detail.image_type) {
						case '1':
						case '2':
						case '3':
						case '53':
						case '54':
							htmlDetail += "lb-creative";
							break;
						case '8':
						case '9':
						case '10':
						case '11':
							htmlDetail += "lb-motion";
							break;
						case '12':
							htmlDetail += "lb-3dmodel";
							break;
						case '41':
						case '42':
							htmlDetail += "lb-sound";
							break;
						case '21':
						case '22':
						case '23':
							htmlDetail += "lb-font";
							break;
						default:
							break;
					}
					htmlDetail += "\">";
					if (detail.detail_path == "" || detail.addcart_flg != "True") {
						//htmlDetail += "<a>" + detail.image_id + "</a>";
					} else {
						htmlDetail += "<a href=\"" + detail.detail_path + "\" title=\"作品詳細を見る\"></a>";
					}
					htmlDetail += "<img src=\"../img/common/lb-close-n.png\" alt=\"削除する\" title=\"削除する\" class=\"lb-close\">"
					if (detail.addcart_path != "" && detail.detail_path != "" && detail.addcart_flg == "True") {
						htmlDetail += "<a href=\"" + detail.addcart_path + "\" class=\"lb-cart\" title=\"ショッピングカートに入れる\"><img src=\"../img/btn-005sc-130.gif\" alt=\"ショッピングカートに入れる\"></a></span></span>";
					} else if (detail.addcart_path == ""){
						htmlDetail += "<a class=\"lb-cart-check\" title=\"ショッピングカートに入っています\"><img src=\"../img/cart-btn/btn-cart-small-on-op.gif\" alt=\"ショッピングカートに入っています\"></a></span></span>";
					} else {
						htmlDetail += "<a class=\"lb-cart discon\" title=\"この作品はご利用いただけません\"><img src=\"../img/cart-btn/btn-cart-small-forbidden.png\" alt=\"この作品はご利用いただけません\"></a></span></span>";
					}
					switch (detail.image_type ) {
						case "1":
						case "2":
						case "3":
						case "53":
						case "54":
							//htmlDetail += "<span class=\"lb-category\">写真・イラスト素材</span>";
							break;
						case "8":
						case "9":
						case "10":
						case "11":
							//htmlDetail += "<span class=\"lb-category\">動画素材</span>";
							break;
						case "12":
							//htmlDetail += "<span class=\"lb-category\">3D素材</span>";
							break;
						case "41":
						case "42":
							//htmlDetail += "<span class=\"lb-category\">音素材</span>";
							break;
						case "21":
						case "22":
						case "23":
							//htmlDetail += "<span class=\"lb-category\">フォント素材</span>";
							break;
						default:
							break;
					}
					htmlDetail += "</li>";
					jq('#lb-pickupbox ul').append(htmlDetail);
				});
				
				// ライトボックスの削除ボタン挙動
				if(jq('#lb-pickupbox').find("img.lb-close").length>0){
					jq('#lb-pickupbox').find("img.lb-close").hover(function(){
						jq(this).attr("src","../img/common/lb-close.gif");
					},function(){
						jq(this).attr("src","../img/common/lb-close-n.png");
					});
				}
				
 				// サムネイル読み込み状態に応じて、リサイズさせる
				jq("#lb-pickuparea #lb-pickupbox ul li span.lb-canvas img.lb-thumb").each(function() {
					if (this.complete) {
						fw = "100%";
						fh = "100%";
						if(jq(this).width()!=0){
							var imgw = jq(this).width(); //画像の元のサイズを取得⇒タテヨコを比較
 							var imgh = jq(this).height();
 							if(imgw > imgh){ //ヨコ位置の場合
 								jq(this).width(fw);
 								thumbw = -(jq(this).width()/2);
 								thumbh = -(jq(this).height()/2);
 							} else if(imgw < imgh){ //タテ位置の場合
 								jq(this).height(fh);
 								thumbw = -(jq(this).width()/2);
 								thumbh = -(jq(this).height()/2);
 							} else { //正方形の場合
 								jq(this).width(fw);
 								thumbw = -(jq(this).width()/2);
 								thumbh = -(jq(this).height()/2);
 							}
 							jq(this).css({"margin-left":thumbw,"margin-top":thumbh}); //検知した条件でマイナスマージンを設定
 						}
					} else {
						jq(this).load(function(){
					fw = "100%";
					fh = "100%";
						if(jq(this).width()!=0){
							var imgw = jq(this).width(); //画像の元のサイズを取得⇒タテヨコを比較
 							var imgh = jq(this).height();
 							if(imgw > imgh){ //ヨコ位置の場合
 								jq(this).width(fw);
 								thumbw = -(jq(this).width()/2);
 								thumbh = -(jq(this).height()/2);
 							} else if(imgw < imgh){ //タテ位置の場合
 								jq(this).height(fh);
 								thumbw = -(jq(this).width()/2);
 								thumbh = -(jq(this).height()/2);
 							} else { //正方形の場合
 								jq(this).width(fw);
 								thumbw = -(jq(this).width()/2);
 								thumbh = -(jq(this).height()/2);
 							}
 							jq(this).css({"margin-left":thumbw,"margin-top":thumbh}); //検知した条件でマイナスマージンを設定
 						}
 					});
 				}
 				});
 			
				jq(".lb-canvas").each(function(){
					jq(this).find(".lb-slideup").css("opacity","0");
					jq(this).find(".lb-close").css("opacity", "0");
					jq(this).find(".lb-cart").css("opacity", "0");
					jq(this).find(".lb-cart-check").css("opacity", "0");
					jq(this).hover(function(){
						jq(this).find(".lb-slideup").animate({"opacity":"1"},100);
						jq(this).find(".lb-close").animate({ "opacity": "1" }, 100);
						jq(this).find(".lb-cart").animate({ "opacity": "1" }, 100);
						jq(this).find(".lb-cart-check").animate({ "opacity": "1" }, 100);
					},function(){
						jq(this).find(".lb-slideup").animate({"opacity":"0"},100);
						jq(this).find(".lb-close").animate({ "opacity": "0" }, 100);
						jq(this).find(".lb-cart").animate({ "opacity": "0" }, 100);
						jq(this).find(".lb-cart-check").animate({ "opacity": "0" }, 100);
					});
				});
				
				// エリア幅の再設定
				li_wid = jq("#lb-pickupbox li").outerWidth();
				li_num = jq("#lb-pickupbox li").size();
				ul_wid = li_wid*li_num;
				// スライド状態のリセット
				jq('#lb-pickupbox ul').css({
					position: 'absolute',
					top: '0',
					left: '0',
					width: ul_wid+'px'
				});
				var ul_pos = boxPosition("#lb-pickupbox ul","left");
				jq('#prev').attr("class","hide");
				if(carousel_wid > (ul_wid+ul_pos)) {
					jq('#next').attr("class","hide");
				} else {
					jq('#next').attr("class","show");
				}
				
				jq('.lb-print a').css('display', '');
				if (data.details.length==0) {
					jq('.lb-print a').css('display', 'none');
				}
				
				// イベント貼り付け
				jq('.lb-canvas .lb-slideup .lb-close').click(function(){
					var box_no = jq('#lightboxname').val();
					var item_box = jq(this).parent().parent().parent();
					var image_id = item_box.children('input').val();
					if (image_id != null) {
						jq.ajax({
							type:"GET",
							url:"/home/LightboxManager.aspx",
							cache: false,
							data: {operation:"deleteitem", box_no:box_no, image_id:image_id},
							success: function(data) {
								var ret = data.split(':');
								if (ret[0] == '0') {
									// 削除成功したので、一覧から消す
									item_box.remove();
									if (jq('#historybox').length > 0) {
										changeHistoryBoxLightboxBotton(image_id, "off");
									}
									changeLightboxItemCount(box_no, "delete");
								} else {
									// エラー
									// TODO エラーのリアクションを追加すること
								}
							}
						});
					}
				});
				jq("#lb-pickupbox a.lb-cart:not(.discon)").click(function(e){
					var ww = jq('.lb-b').offset().left;
					e.stopPropagation();
					
					var cartintxtlb = jq("#lb-box .cartin_lb");
					
					var thumbwidth = jq(this).parent().parent().parent().width() + 5;
					var cartinmargin = jq("#lb-box").offset().left + jq("#lb-pickuparea #prev").width() + 5;//46;
					var cartxlb = Math.floor(e.pageX - cartinmargin);
					var cartxmultiple = Math.ceil(cartxlb/thumbwidth);
					cartleftlb = thumbwidth*cartxmultiple - jq("#lb-pickuparea #prev").width() - 15 - cartintxtlb.width()/2;

//					var cartxlb = Math.floor(e.pageX - ww);
//					var cartleftlb;
//					if(cartxlb > 20 && cartxlb < 144){
//						cartleftlb = 41;
//					} else if(cartxlb > 150 && cartxlb < 275){
//						cartleftlb = 170;
//					} else if(cartxlb > 280 && cartxlb < 405){
//						cartleftlb = 299;
//					} else if(cartxlb > 410 && cartxlb < 535){
//						cartleftlb = 428;
//					} else if(cartxlb > 540 && cartxlb < 665){
//						cartleftlb = 557;
//					} else if(cartxlb > 670 && cartxlb < 795){
//						cartleftlb = 686;
//					} else if(cartxlb > 800 && cartxlb < 925){
//						cartleftlb = 815;
//					};
					
					cartintxtlb.removeClass("error");
					
					var targetbtn = jq(this);
					var cartinevent = jq(this).attr('href');
					jq.ajax({'type': 'GET',
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
												cartintxtlb.addClass("error");
												break;
											case 4:
												alert("複数サイトで同一コンテンツをショッピングカートに入れることはできません。\r\n別サイトのショッピングカートからこのコンテンツを削除いたしました。");
											default:
												targetbtn.attr('disabled', 'disabled');
												targetbtn.removeAttr('href');
												targetbtn.addClass('lb-cart-check');
												targetbtn.removeClass('lb-cart');
												targetbtn.unbind();
												var icon = targetbtn.children('img');
												if (icon) {
													icon.attr('alt', 'すでにショッピングカートに入っています');
													icon.attr('src', '/img/cart-btn/btn-cart-small-on-op.gif');
												}
												if (jq('#historybox').length > 0) {
													changeHistoryBoxCartinBotton(targetbtn.parent().children('input').val());
												}
												break;
										}
										var hidejoblb = function(){
											cartintxtlb.animate({opacity:0},500).css("display","none");
										}
										
										if(cartintxtlb.css("opacity") > 0){
											cartintxtlb.css("opacity",0);
											clearTimeout(hidecartinlb);
										}
										cartintxtlb.css({"left":cartleftlb,"display":"block"}).animate({opacity:1},100);
										hidecartinlb = setTimeout(hidejoblb,5000);
										
										if (parent.down) {
											ReloadAll(null,1);
										}
									}
								}
					});
					
					return false;
				});
 			}
		});
	}
	
	if(jq('#lightbox.lb-b').size()>0){
		lightboxtab = jq.cookie("lightboxtab");
		if(lightboxtab == null){ //初めての人には初期値を設定する
			lightboxtab = 1;
			jq.cookie("lightboxtab", 1, {path: "/"});
		}
		
		//var lbheight = jq("#lightbox").innerHeight() - jq("#lb-tab").innerHeight();
		var lbheight = jq("#lb-box").innerHeight() + 2;
		var hideheight = -(lbheight) + "px"; //closeのときのbottom数値
		
		var lbdetail = -(jq("#lb-tab div").width() + 1);
		
		var lbTabElemNl = jq("#lb-tab-nl h1 a"); // ログイン前のタブの要素
		var lbTabElem = jq("#lb-tab h1 a"); // ログイン時のタブの要素
				
		var tabReloadTimer = false;
		
		if(lightboxtab > 0){ //リロード時の対応
			jq("#lightbox.lb-b").css("bottom",hideheight);
			jq("#lb-tab").children("div").css("margin-left",lbdetail);
			jq("#lb-tab").children("h1").css("border-right-width",0).addClass("lb-close");
			jq("#lb-tab h1 a span span").text("ライトボックスを開く");
			if(tabReloadTimer !== false){
				clearTimeout(tabReloadTimer);
			}
			tabReloadTimer = setTimeout(function(){
				closeTab();
				tabDetailBtn.animate({"margin-left":lbdetail},300);
				tabDetailBtn.children("a").animate({"width":"hide"},100);
				tabDetailBtn.children("a span").animate({"margin-left":lbdetail},300);
				lbTabElem.parent("h1").css("border-right-width",0).addClass("lb-close");
			},5000);
		} else {
			jq("#lightbox.lb-b").css("bottom","0px");
			jq("#lb-tab").children("div").css("margin-left",0);
			jq("#lb-tab").children("h1").css("border-right-width",1).removeClass("lb-close");
			jq("#lb-tab h1 a span span").text("ライトボックスを閉じる");
			if(tabReloadTimer !== false){
				clearTimeout(tabReloadTimer);
			}
			tabReloadTimer = setTimeout(function(){
				closeTab();
				tabDetailBtn.animate({"margin-left":lbdetail},300);
				tabDetailBtn.children("a").animate({"width":"hide"},100);
				tabDetailBtn.children("a span").animate({"margin-left":lbdetail},300);
				lbTabElem.parent("h1").css("border-right-width",0).addClass("lb-close");
			},5000);
		}
		
		if(lbTabElemNl.length>0){ //ログイン前のリロード
			if(tabReloadTimer !== false){
				clearTimeout(tabReloadTimer);
			}
			tabReloadTimer = setTimeout(function(){
				closeTabNl();
			},5000);
		}
		
		if (jq("#lb-tab").length > 0) {
			var lightboxsellect = jq.cookie("lightboxselect");
			if (lightboxsellect != null) {
				if (jq('#lightboxname option[value="' + lightboxsellect + '"]').length > 0)
				{
					jq('#lightboxname').val(lightboxsellect);
				}
			}
			if(lightboxtab == 0){
				updateLightboxItems(jq('#lightboxname').val());
				jq('.lb-print a').prop('href', '/LightBox/LightBoxPDF.aspx?BoxHandle='+jq('#lightboxname').val());
			} else {
				jq('.lb-print a').prop('href', '/LightBox/LightBoxPDF.aspx?BoxHandle=' + jq('#lightboxname').val());
			}
			
			jq('#lightboxname').change(function(){
				jq.cookie("lightboxselect", jq('#lightboxname').val(), {path:"/"});
				updateLightboxItems(jq('#lightboxname').val());
				jq('.lb-print a').prop('href', '/LightBox/LightBoxPDF.aspx?BoxHandle='+jq('#lightboxname').val());
			});
		}
		
		// 下フレームを表示しているときは、ライトボックスボタンは非表示
//	try
//	{
//		if (top.frames["down"]) {
//			if (top.frames["down"].frameElement.scrollHeight && (top.frames["down"].frameElement.scrollHeight > 0)) {
//				lightboxBtm.css("display", "none");
//			} else {
//				lightboxBtm.css("display", "box");
//			}
//		}
//	}catch(e){}
		var lbTabFlag = 0; // タブの隠れている状態

		lbTabElem.click(function(){ //クリック時の対応
			lightboxtab = jq.cookie("lightboxtab");
			if(lightboxtab > 0){
				showLbBtm();
				jq(this).parent().next("div").delay(200).animate({"margin-left":0},200);
				jq(this).parent().next("div").children("a").delay(100).animate({"width":"show"},100);
				jq(this).parent().delay(150).animate({"border-right-width":1},200);
				jq(this).parent().removeClass("lb-close");
				jq(this).children("span").children("span").text("ライトボックスを閉じる");
			} else {
				jq("#lightbox").animate({bottom:hideheight},200);
				jq.cookie("lightboxtab", 1, {path: "/"});
				jq(this).parent().next("div").delay(100).animate({"margin-left":lbdetail},300);
				jq(this).parent().next("div").children("a").delay(400).animate({"width":"hide"},100);
				jq(this).parent().css("border-right-width",0).addClass("lb-close");
				jq(this).children("span").children("span").text("ライトボックスを開く");
				jq(this).children("span").delay(500).animate({"width":"hide"},100);
				jq(this).children("span").children("span").delay(550).animate({"margin-left":"-11em"},300);
			}
			return false;
		});
		
		var lbTabTimer = false;
		var lbTabCloseTimer = false;
		var lbTabDetailTimer = false;
		var tabDisplay = lbTabElem.children("span").css("display");
		var tabNlDisplay = lbTabElemNl.children("span").css("display");
		var tabDetailBtn = lbTabElem.parent().next(".lb-large");

		//lbTabElem.parent("h1").mouseenter(function(){ //ログイン後マウスオーバー（←改定前トリガ）
		jq("#lightbox").mouseenter(function(){ //ログイン後マウスオーバー
			if(tabReloadTimer !== false){
				clearTimeout(tabReloadTimer);
			}
			if(lbTabCloseTimer !== false){
				clearTimeout(lbTabCloseTimer);
			}
			if(lbTabFlag == 0){
				lbTabFlag = 1;
				showTab();
				if(lbTabTimer !== false){
					clearTimeout(lbTabTimer);
				}
				lbTabTimer = setTimeout(function(){lbTabFlag = 0},300);
				if(lbTabDetailTimer !== false){
					clearTimeout(lbTabDetailTimer);
				}
				if(jq("#lightbox").css("bottom") == "0px"){
					lbTabDetailTimer = setTimeout(function(){
						openDetailTab();
					},100);
				}
			}
		});
		
		//jq("#lb-tab").mouseleave(function(){ //ログイン後マウスアウト（←改定前トリガ）
		jq("#lightbox").mouseleave(function(){ //ログイン後マウスアウト
			lbBottom = jq("#lightbox").css("bottom");
			if(tabReloadTimer !== false && lbBottom == "0px"){
				clearTimeout(tabReloadTimer);
				tabDetailBtn.animate({"margin-left":lbdetail},300);
				tabDetailBtn.children("a").animate({"width":"hide"},100);
				tabDetailBtn.children("a span").animate({"margin-left":lbdetail},300);
				lbTabElem.parent("h1").css("border-right-width",0).addClass("lb-close");
			}
			if(lbTabFlag == 0 && lbTabElem.parent("h1").hasClass("lb-close")==true){
				closeTab();
			}
			if(lbTabCloseTimer !== false){
				clearTimeout(lbTabCloseTimer);
			}
			lbTabCloseTimer = setTimeout(function(){
				if(lbTabTimer !== false){
					clearTimeout(lbTabTimer);
				}
				if(lbTabFlag == 0 && tabDisplay == "inline-block"){
					closeTab();
				}
				closeDetailTab();
			},2000);
		});
		
		lbTabElemNl.parent("h1").mouseenter(function(){ //ログイン前マウスオーバー
			if(tabReloadTimer !== false){
				clearTimeout(tabReloadTimer);
			}
			if(lbTabCloseTimer !== false){
				clearTimeout(lbTabCloseTimer);
			}
			if(lbTabFlag == 0){
				lbTabFlag = 1;
				showTabNl();
				if(lbTabTimer !== false){
					clearTimeout(lbTabTimer);
				}
				lbTabTimer = setTimeout(function(){lbTabFlag = 0},200);
			}
		});
		
		lbTabElemNl.parent("h1").mouseleave(function(){ //ログイン前マウスアウト
			if(tabReloadTimer !== false){
				clearTimeout(tabReloadTimer);
				tabDetailBtn.animate({"margin-left":lbdetail},300);
				tabDetailBtn.children("a").animate({"width":"hide"},100);
				tabDetailBtn.children("a span").animate({"margin-left":lbdetail},300);
				lbTabElem.parent("h1").css("border-right-width",0).addClass("lb-close");
			}
			if(lbTabFlag == 0){
				closeTabNl();
			}
			if(lbTabCloseTimer !== false){
				clearTimeout(lbTabCloseTimer);
			}
			lbTabCloseTimer = setTimeout(function(){
				if(lbTabTimer !== false){
					clearTimeout(lbTabTimer);
				}
				if(lbTabFlag == 0 && tabNlDisplay == "inline-block"){
					closeTabNl();
				}
			},2000);
		});
		
		
		function showTab(){
			lbTabElem.children("span").animate({"width":"show"},100);
			lbTabElem.children("span").children("span").animate({"margin-left":0},200);
		}
		
		function showTabNl(){
			lbTabElemNl.children("span").animate({"width":"show"},100);
			lbTabElemNl.children("span").children("span").animate({"margin-left":0},200);
		}
		
		function closeTab(){
			lbTabElem.children("span").animate({"width":"hide"},200);
			lbTabElem.children("span").children("span").animate({"margin-left":"-11em"},300);
			var lbdetail = -(jq("#lb-tab div").width() + 1);
		}
		
		function closeTabNl(){
			lbTabElemNl.children("span").animate({"width":"hide"},200);
			lbTabElemNl.children("span").children("span").animate({"margin-left":"-7em"},300);
			var lbdetail = -(jq("#lb-tab div").width() + 1);
		}
		
		function openDetailTab(){
			if(tabDetailBtn.css("margin-left")!="0px"){
				tabDetailBtn.animate({"margin-left":"0px"},200);
				tabDetailBtn.children("a").animate({"width":"show"},100);
				tabDetailBtn.children("a span").animate({"margin-left":"0px"},200);
				lbTabElem.parent("h1").css("border-right-width",1).removeClass("lb-close");
			}
		}
		
		function closeDetailTab(){
			closeFlg = 0;
			if(tabDetailBtn.css("margin-left")=="0px"){
				closeFlg = 1;
			} else {
				btnOpenLbML = tabDetailBtn.prev("h1").children("a").children("span").children("span").css("margin-left");
				if(btnOpenLbML!="0px"){
					closeFlg = 1;
				}
			}
			if(closeFlg == 1){
				tabDetailBtn.animate({"margin-left":lbdetail},300);
				tabDetailBtn.children("a").animate({"width":"hide"},100);
				tabDetailBtn.children("a span").animate({"margin-left":lbdetail},300);
				lbTabElem.parent("h1").css("border-right-width",0).addClass("lb-close");
			}
		}
		
		jq('.lb-new a').click(function() {
			var selectNo = jq('#lightboxname').val();
			var w = 487;
			var h = 750;
            var url = "/LightBox/PopUp/Create.aspx?BxHndl=" + selectNo + "&BxMd=3";
			// 中央座標
			var left = Math.floor((screen.width - w) / 2);
			var top  = Math.floor((screen.height - h) / 2);
			var win = null;
			var name = "lbnew"
			
			// ウインドウを開く
			if (document.all) 
			{
				win = window.open(url, name, "width="+w+",height="+h+",status="+"yes"+",scrollbars="+"yes"+",resizable="+"yes"+",left="+left+",top="+top);
			}
			else
			{
				win = window.open(url, name, "width="+w+",height="+h+",status="+"yes"+",scrollbars="+"yes"+",resizable="+"yes"+",screenX="+left+",screenY="+top);
			}

			win.blur();
			win.focus();
		});
		jq('.lb-send a').click(function() {
			var selectNo = jq('#lightboxname').val();
			var w = 487;
			var h = 750;
            var url = "/LightBox/PopUp/EmailSend.aspx?BxHndl=" + selectNo + "&BxMd=3";
			// 中央座標
			var left = Math.floor((screen.width - w) / 2);
			var top  = Math.floor((screen.height - h) / 2);
			var win = null;
			var name = "lbsend"
			
			// ウインドウを開く
			if (document.all) 
			{
				win = window.open(url, name, "width="+w+",height="+h+",status="+"yes"+",scrollbars="+"yes"+",resizable="+"yes"+",left="+left+",top="+top);
			}
			else
			{
				win = window.open(url, name, "width="+w+",height="+h+",status="+"yes"+",scrollbars="+"yes"+",resizable="+"yes"+",screenX="+left+",screenY="+top);
			}

			win.blur();
			win.focus();
		});
		jq(".lb-large a").click(function(){
			var selectNo = jq('#lightboxname').val();
			document.location="/LightBox/OpenLargeMini.aspx?BoxHandle="+selectNo;
			return false;
		});
		jq("#lb-selector .lb-cart a").click(function(){
			document.location="/OrderBox/OpenLarge.aspx";
			return false;
		});
 }
	
	function showLbBtm(){
		lightboxBtm.animate({bottom:"0px"},300);
		jq.cookie("lightboxtab", 0, {path: "/"});
		
		var lightboxsellect = jq.cookie("lightboxselect");
		if (lightboxsellect != undefined) {
			if (jq('#lightboxname option[value="' + lightboxsellect + '"]').length > 0) {
				jq('#lightboxname').val(lightboxsellect);
			}
		}
		
		if (jq('#lb-pickupbox ul').children().length == 0) {
			updateLightboxItems(jq('#lightboxname').val());
		}
	}
	
	if(jq("#lightbox").size()>0){
		fw = "100%";
		fh = "100%";
		jq("#lb-pickuparea #lb-pickupbox ul li span.lb-canvas img.lb-thumb").each(function(){ //IE 8以下
			if(jq(this).width()!=0){
				var imgw = jq(this).width(); //画像の元のサイズを取得⇒タテヨコを比較
 			var imgh = jq(this).height();
 			if(imgw > imgh){ //ヨコ位置の場合
 				jq(this).width(fw);
 				thumbw = -(jq(this).width()/2);
 				thumbh = -(jq(this).height()/2);
 			} else if(imgw < imgh){ //タテ位置の場合
 				jq(this).height(fh);
 				thumbw = -(jq(this).width()/2);
 				thumbh = -(jq(this).height()/2);
 			} else { //正方形の場合
 				jq(this).width(fw);
 				thumbw = -(jq(this).width()/2);
 				thumbh = -(jq(this).height()/2);
 			}
 			jq(this).css({"margin-left":thumbw,"margin-top":thumbh}); //検知した条件でマイナスマージンを設定
 		}
 	});
		jq("#lb-pickuparea #lb-pickupbox ul li span.lb-canvas img.lb-thumb").bind('load',function(){
			var imgw = jq(this).width(); //画像の元のサイズを取得⇒タテヨコを比較
			var imgh = jq(this).height();
			if(imgw > imgh){ //ヨコ位置の場合
				jq(this).width(fw);
				thumbw = -(jq(this).width()/2);
				thumbh = -(jq(this).height()/2);
			} else if(imgw < imgh){ //タテ位置の場合
				jq(this).height(fh);
				thumbw = -(jq(this).width()/2);
				thumbh = -(jq(this).height()/2);
			} else { //正方形の場合
				jq(this).width(fw);
				thumbw = -(jq(this).width()/2);
				thumbh = -(jq(this).height()/2);
			}
			jq(this).css({"margin-left":thumbw,"margin-top":thumbh}); //検知した条件でマイナスマージンを設定
		});
		jq(".lb-canvas").each(function(){
			jq(this).find(".lb-slideup").css("opacity","0");
			jq(this).find(".lb-close").css("opacity","0");
			jq(this).find(".lb-cart").css("opacity", "0");
			jq(this).find(".lb-cart-check").css("opacity", "0");
			jq(this).hover(function(){
				jq(this).find(".lb-slideup").animate({"opacity":"1"},100);
				jq(this).find(".lb-close").animate({"opacity":"1"},100);
				jq(this).find(".lb-cart").animate({ "opacity": "1" }, 100);
				jq(this).find(".lb-cart-check").animate({ "opacity": "1" }, 100);
			},function(){
				jq(this).find(".lb-slideup").animate({"opacity":"0"},100);
				jq(this).find(".lb-close").animate({"opacity":"0"},100);
				jq(this).find(".lb-cart").animate({ "opacity": "0" }, 100);
				jq(this).find(".lb-cart-check").animate({ "opacity": "0" }, 100);
			});
		});
		
		jq(document).click(function(){
			clearTimeout(hidecartinlb);
		jq("#lb-box .cartin_lb").animate({opacity:0},500).css("display","none");
		});
		
	}
	
});

// 選択中のライトボックスの情報を返す
function getSelectedBoxNo() {
	return jq('#lightboxname').val();
}

function getSelectedBoxLabel() {
	return jq('#lightboxname option:selected').attr('title');
}

// ライトボックス一覧の更新
function updateLightboxList() {
	jq.ajax({
		type:"GET",
		url:"/home/LightboxManager.aspx",
		dataType: "json",
		cache: false,
		data: {operation:"getlist"} ,
		success: function(data) {
			jq('#lightboxname').empty();
			// 閲覧履歴側の更新
			if (jq('#historybox #addbox').length > 0) {
				jq('#historybox #addbox').empty();
			}
			jq.each(data.lightbox, function(i, lightbox){
				jq('#lightboxname').append("<option value=\""+lightbox.no+"\" title=\""+ lightbox.name.substring(0,lightbox.name.lastIndexOf(" ")) +"\">"+lightbox.name+"</option>");
				// 閲覧履歴側の更新
				if (jq('#historybox #addbox').length > 0) {
					jq('#historybox #addbox').append("<option value=\""+lightbox.no+"\">"+lightbox.name+"</option>");
				}
			});
			jq('#lightboxname').change();
		}
	});
}

// 現在開いているライトボックスが更新されたらリロードさせる
function updateActiveLightBoxItemLists(box_no) {
	changeLightboxItemCount(box_no, "add");
	if (jq('#lightboxname').val() == box_no) {
		jq('#lightboxname').change();
	}
}

// カートボタンの状態を切り替える
function changeLightboxCartinBotton(image_id) {
	var target = $('#lightbox #lb-box #lb-pickuparea #lb-pickupbox .image_id[value="' + image_id + '"]');
	if (target.length > 0) {
		var cartinbtn = target.parent().find('a[class^="lb-cart"]');
		cartinbtn.attr('disabled', 'disabled');
		cartinbtn.attr('title', 'すでにショッピングカートに入っています');
		cartinbtn.removeAttr('href');
		cartinbtn.addClass('lb-cart-check');
		cartinbtn.removeClass('lb-cart');
		cartinbtn.unbind();
		var icon = cartinbtn.children('img');
		if (icon) {
			icon.attr('alt', 'すでにショッピングカートに入っています');
			icon.attr('src', '/img/cart-btn/btn-cart-small-on-op.gif');
		}
	}
}

// ライトボックスの商品数を更新する
function changeLightboxItemCount(box_no, status) {
	var target = "#lightboxname option[value='" + box_no + "']";
	var box_title = jq(target).attr('title');
	var box_name = jq(target).text();
	var box_parts = box_name.split("(");
	var box_count = box_parts[box_parts.length - 1].split(")")[0];
	if (status == "add") {
		box_count = parseInt(box_count) + 1;
	} else if (status == "delete") {
		box_count = parseInt(box_count) - 1;
	}
	jq(target).text(box_title + " (" + box_count + ")");
}