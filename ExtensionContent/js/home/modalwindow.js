$(function(){

	//モーダルウィンドウ
	
	$('.modal-btn').click(function(){
		var wH = $(window).height();
		var wW = $(window).width();
		var wn = '.' + $(this).attr('name');
		var mW = wW/2;
		var mH = wH/2;
		var mWl = mW/2;
		var mHt = mH/2;
		wadjust = wH-mH;
		var wtop = $(window).scrollTop();
		var wposition = wtop + 50;
		if(wadjust <= 50){
			$(wn).find('.modalbody').css({'margin-left':-mWl,'margin-top':0,'top':0});
		} else if(wadjust > 50){
			$(wn).find('.modalbody').css({'margin-left':-mWl,'margin-top':-mHt,'top':mH});
		}
		//$(wn).find('.modalbody').css({"width":mW,"height":mH});
		$(wn).css({'display':'block'});
		$(wn).animate({'opacity':'1'},'fast');
		return false;
	});
	
	
	$('.modal-urgent').click(function(){
		var wH = $(window).height();
		var wW = $(window).width();
		var wnu = '.' + $(this).attr('name');
		$(wnu).css({'display':'block'});
		
		var mHu = $(wnu).children(".modalbody").innerHeight();
		var mHut = mHu/2
		wadjustu = wH-mHu;
		
		if(wadjustu < 0){
			$(wnu).find('.modalbody').css({'margin-top':0,'top':0});
			adjh = wH - 40;
			$(".modalarea").css({"height":adjh,"overflow-y":"scroll"});
		} else if(wadjustu >= 0){
			$(wnu).find('.modalbody').css({'margin-top':-mHut,'top':"50%"});
			$(".modalarea").css({"height":"auto","overflow-y":"auto"});
		}
		
		$(wnu).animate({'opacity':'1'},'fast');
		return false;
	});
	
	//モーダルの閉じ	
	$('.close,.modalbk,.modalbody').click(function(){
		$('.modal').animate({opacity:0},	{duration:'fast',complete:function(){	$('.modal').css({'display':'none'});}});
		$('.modal-u').animate({opacity:0},	{duration:'fast',complete:function(){	$('.modal-u').css({'display':'none'});}});
	});
	
});