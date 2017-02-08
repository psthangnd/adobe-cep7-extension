//緊急情報お知らせ外部化

//ボタンを表示させたい時は、この値を「1」にする
var urgentflag = 1;

//ボタンに表示させるテキストを記述
var btntext = "Otopro（オトプロ）サービス終了のお知らせ";

//開いた「お知らせ」のタイトル
var infotitle = "【Otopro（オトプロ）サービス終了のお知らせ】";

//キャプションをなるべく改行なしで。改行したい場合は「<br>」を入れる
var infotxt = "Otopro（オトプロ）は2016年09月30日（金）をもって終了いたしました。<br><a href=\"https://otopro.amanaimages.com/?p=2103\" target=\"_blank\">詳しくはこちら</a>";

//クリエイティブの電話番号を掲載したい場合は、この値を「1」に、エディトリアルの電話番号を掲載したい場合は、この値を「2」に、掲載しない場合は「0」にする
var contacttxt = 0;



// ↓↓↓↓↓↓ここから下は絶対いじらないで↓↓↓↓↓↓
//sound＞index.aspx
$(function(){
if(urgentflag == 1){
	$("#top-sln-bnr").append('<div class="ungent-area change"><div class="urgentbtn"><p><a href="#" class="modal-urgent" name="modal-u">'+ btntext +'</a></p></div></div>');
	
	//$('#urgentinfo.change').css("display","block");
	$('#top-sln-bnr div.ungent-area.change').css({"display":"block","margin-left":"-490px"});
	
	//$('#urgentinfo.change p a').text(btntext);
	//$('#top-sln-bnr div.ungent-area.change p a').text(btntext);
	
	infottlhtml = "<h2>"+ infotitle +"</h2>"
	infotxthtml = "<p>" + infotxt + "</p>"
	
	if(contacttxt == 1){
		contactinfo = '<div class="contacttxt"><p>●広告・販促・CM・WEB制作ほか<br>TEL：0120-410-225<br>E-mail：acs@amanaimages.com<br>営業時間 9:30～19:00（土日祝日除く）</p><p>●新聞・出版<br>TEL：0120-252-452<br>E-mail：editorial@amanaimages.com<br>営業時間 9:30～19:00（土日祝日を除く）</p><p>●TV番組<br>（株式会社フルタイム ［アマナイメージズ特約代理店］）<br>TEL：0120-868-816<br>E-mail：photo@fulltime.co.jp<br>営業時間 &lt;月～金&gt;10:00～22:00 &lt;土&gt;12:00～20:00（日祝日を除く）</p></div>';
	} else if(contacttxt == 2){
		contactinfo = '<div class="contacttxt"><p>●新聞・出版に関するお問い合わせ<br>アマナイメージズ エディトリアル<br>TEL：0120-252-452<br>E-mail：editorial@amanaimages.com<br>営業時間 9:30～19:00（土日祝日除く）</p><p>●TV番組使用に関するお問い合わせ<br>TVリサーチセンター<br>（株式会社フルタイム ［アマナイメージズ特約代理店］）<br>TEL：0120-868-816<br>E-mail：photo@fulltime.co.jp<br>営業時間 &lt;月～金&gt;10:00～22:00 &lt;土&gt;12:00～20:00（日祝日を除く）</p></div>';
	} else {
		contactinfo = "";
	}
	
	
	infohtml = infottlhtml + infotxthtml + contactinfo;
	
	modalbox = '<div class="modal-u"><div class="modalbody"><div class="modalarea"><div id="caution-contents"></div></div><!--/modalarea--><span class="close"><img src="/img/common/btn-close01.gif" alt="閉じる"></span></div><!--/modalbody--><div class="modalbk"></div></div><!--/modal-->'
	
	$("body").append(modalbox);
	//home.aspx
	$('#caution-contents').html(infohtml);
}

	//モーダルウィンドウ
	
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