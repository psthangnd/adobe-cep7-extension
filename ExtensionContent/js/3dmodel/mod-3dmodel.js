var jq = jQuery;

// 番号指定によるチェックボックスのON/OFF設定(3Dモデル)
function checkboxOnOff3D(chkNum,mode)
{
	// inputタグの取得
	var inputelm;
	if (chkNum == "01") {
		inputelm = document.getElementById("idSearchForm_chck_3D_Model");
	} else {
		inputelm = document.getElementById("idSearchForm_chck_3D_Texture");
	}

	if (inputelm != null) {
		if(mode == 0){inputelm.checked =  true;}
		else if(mode == 1){inputelm.checked =  false;}
		else
		{
			if(!inputelm.checked && !IschekboxOff3D(chkNum)){
				inputelm.checked = true;
			}
		}
	}
}

// 指定チェックボックス以外がすべてOFFか調べる(3Dモデル)
function IschekboxOff3D(chkNum)
{
	if(document.getElementById("idSearchForm_chck_3D_Model").checked)
	{
		if(chkNum != "01"){return true;}
	}
	
	if(document.getElementById("idSearchForm_chck_3D_Texture").checked)
	{
		if(chkNum != "02"){return true;}
	}
	
	return false;
}

// ========== for select navigation ==========
jq(function(){
	// ホーム画面のみ対象
	if (jq('home-user-tools').length > 0) {
		checkboxOnOff3D('01', 0);
		checkboxOnOff3D('02', 0);
	}

	var tab3dm = jq("#tab3dm");
	var tab3dt = jq("#tab3dt");
	var option3dm = jq("#option3dm");
	var option3dt = jq("#option3dt");
	
	if (tab3dt.find('input:checked').length > 0 && tab3dm.find('input:checked').length == 0) {
		tab3dm.removeClass("current");
		tab3dt.addClass("current");
		option3dm.css("visibility","hidden");
		option3dt.css("visibility","visible");
	}
	
	tab3dm.click(function(evtm){
		if(evtm.target.nodeName != "INPUT"){
			if(tab3dt.hasClass("current")){
				tab3dt.removeClass("current");
				tab3dm.addClass("current");
				option3dm.css("visibility","visible");
				option3dt.css("visibility","hidden");
			}
		}
	});
	
	tab3dt.click(function(evtt){
		if(evtt.target.nodeName != "INPUT"){
			if(tab3dm.hasClass("current")){
				tab3dm.removeClass("current");
				tab3dt.addClass("current");
				option3dm.css("visibility","hidden");
				option3dt.css("visibility","visible");
			}
		}
	});
	
	var catdiv = jq("#threed-category .list-cateogry li div");
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
	
	if(jq(".defheight").size()>0){
		jq(".defheight").css("height",defheight);
	}
	
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
	
	jq("#threed-category .list-cateogry li div li:last-child").addClass("last-child");
	
});