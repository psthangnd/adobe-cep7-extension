//EventCommon.js
var ClickCount = 0;
// change image
function changeImage(target,imgsrc){
	if(document.images){
		if (document.images[target])
		{
			document.images[target].src = imgsrc;
		}
	}
}

function changeImageCtrl(target,imgsrc){
//Minus:�}�C�i�X---------------------------------------------------------
	/*QZC kawashima 090213 �C���[�W�ϊ��Ώۂ�input��ǉ�*/
	//if(target.tagName == 'IMG'){
	if(target.tagName == 'IMG' || target.tagName == 'INPUT'){
//---------------------------------------------------------Minus:�}�C�i�X
		target.src = imgsrc;
	}
}

function changeImageByID(id,imgsrc){
	target = document.getElementById(id);
	if(target && target.src){
		target.src = imgsrc;
	}
}

//Minus:�}�C�i�X---------------------------------------------------------
/*QZC kawashima 090210 �}�C�i�X�����p*/
function changeMinusInputBox(target){
	if( 0 <= target.className.indexOf( 'minus_box_off' ) ){
		target.className = 'minus_box_on';
		target.value = '';
	}
}
function changeMinusInputBox2(target){
	if( 0 <= target.className.indexOf( 'minus_box_off' ) ){
		target.className = 'inputstyle';
		target.value = '';
		
	}
	

}
//---------------------------------------------------------Minus:�}�C�i�X

/*
if(document.images) {
	info01on = new Image();
	info01on.src = '../img/parts-004in.gif';
	info02on = new Image();
	info02on.src = '../img/parts-004lb.gif';
	info03on = new Image();
	info03on.src = '../img/parts-004sc.gif';
	info04on = new Image();
	info04on.src = '../img/parts-004va.gif';
	info05on = new Image();
	info05on.src = '../img/parts-004si.gif';

	preloadFlag = true;
}
*/

//scroll

var nowpos=0;
var tempflag=1;
var timer;
var IE = navigator.appName.charAt(0)=="M";
var NN = navigator.appName.charAt(0)=="N";

function getScrollTop() {
	if (IE) {
		return document.body.scrollTop;
	} else if (NN) {
		return window.pageYOffset;
	}
}

function getLayerTop(layerid){
	if(document.getElementById){
		return parseInt(document.getElementById(layerid).offsetTop);
	}else if(document.all){
		return document.all(layerid).style.pixelTop;
	}else if(document.layers){
		return document.layers[layerid].top;
	}
	return 0;
}

function scrollblock(thnum){
	if(document.getElementById){
		var threadtop=getLayerTop(thnum);
		scrollit(threadtop);
	}else{
		location.href="#"+thnum;
	}
}

function scrolltop(){
	scrollit(0);
}

function scrollit(pos){
clearTimeout(timer);
	if(tempflag==1){
		nowpos=getScrollTop();
		newpos=pos;
		timer=setTimeout('moveit('+newpos+')',1);
	}else{
		dis=0;
		nowdis=0;
		newpos=pos;
		clearTimeout(timer);
		timer=setTimeout('moveit('+newpos+')',1);
	}
}

function moveit(newpos){
	tempflag=0;
	dis=(newpos-nowpos)/7;
	nowpos=nowpos+dis;
	nowdis=newpos-nowpos;
	if(nowdis<1 && nowdis>-1){
		nowpos=newpos;
		window.scroll(0,nowpos);
		clearTimeout(timer);
		tempflag=1;
	}else{
		window.scroll(0,nowpos);
		timer=setTimeout('moveit('+newpos+')',50);
	}
}

// ��

function CommonNavi(name) {
	var portno = "";
	var sabun = "/";
	try{
		if (location.port != ""){
			portno = ":" + location.port;
		}
	} catch(e) {}
	switch (name) {
		case "service":
			top.location.href = "http://"+location.hostname+"/service/";
			break;		
	    case "change":
			W_Create("http://"+location.hostname+"/member/change.aspx?direct=on", 500, 300, "yes", "yes", "yes");
			break;
		case "top":
			top.location.href = sabun + "/index.htm";
			break;
		case "pro":
			top.location.href = "/pro/index.aspx";
			break;
		case "case":
			top.location.href = "/case/index.aspx";
			break;
		case "corp":
			top.location.href = "/corporate/index.aspx";
			break;
		case "category":
			top.location.href = "/Category/index.aspx?Page=Category";
			break;
		case "brand":
			top.location.href = "/Brand/index.aspx?Page=Brand";
			break;
		case "photographer":
			top.location.href = "/Brand/Photographer/index.aspx?Page=Photographer";
			break;
		case "price":
			window.open("/price/amana_rm_price.pdf","popup","width=800,height=700,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
			break;
		case "pr":
			W_Create("http://"+location.hostname+"//pr/index.aspx?mod=new", 500, 700, "yes", "yes", "yes");
			break;
//			document.location.href = "/pr/";
//			break;
		case "cordination":
			top.location.href = "http://"+location.hostname+"/ors/";
			break;
			
		case "cordinationFineArt":
			top.location.href = "/ors/ar.aspx";
			break;
			
		case "comp":
			window.open("/comp/","comp"); //��L�������o�[���J���vDL���N���b�N�����Ƃ��ʑ��ŊJ��
//			document.location.href = "/comp/";
			break;
		case "contract":
			top.location.href = "/contract/";
			break;
		case "inquiry":
			top.location.href = "/inquiry/";
//			W_Create("http://amana.jp/inquiry/", 800, 700, "yes", "yes", "yes");
			break;
		//2007/06/13 kuramochi Start
		case "inquirypop":
			W_Create('/inquiry/index.aspx#DummyAnchor', 800 , 700, 'yes', 'yes', 'yes');
			break;	
		case "inquirypop2":
			window.open("/inquiry/index.aspx#DummyAnchor","HELP","width=800,height=700,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
			break;
		//2007/06/13 kuramochi End			
		case "help":
			window.open("/help/qaa.html","HELP","width=827,height=600,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
			//window.open("/help/help.html?help=qaa0000","HELP","width=827,height=600,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
			break;
		case "NewWindowHelp":
			window.open("/help/qaa.html","HELP","width=827,height=600,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
			//window.open("/help/help.html?help=qaa0000","HELP","width=827,height=600,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
			break;
		case "guide":
			window.open("/help/qaa.html","HELP","width=827,height=600,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
			//window.open("/help/help.html?help=qaa0000","HELP","width=827,height=600,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
			break;
		case "guide-rmrf":
			window.open("/help/qaa-0801.html","HELP","width=827,height=600,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
			break;
		case "top_info":
			W_Create("/info/information.html", 640, 480, "yes", "yes", "no");
			break;
		case "corbis_crop":
			window.open("http://www.amana.jp/Corbis/CROP/Crop1.html", "Corbis_Crop", "toolbar=no , location=no , directories=no , status=no , munubar=yes , scrollbars=yes , resizable=yes");
			break;
		case "policy":
			top.location.href = "http://"+location.hostname+"/policy/";
			break;
		case "regulation":
			top.location.href = "http://"+location.hostname+"/regulation/";
			break;
		case "ecpoint":
			top.location.href = "http://"+location.hostname+"/ecpoint/";
			break;
		case "group":
			window.open("http://amana.jp/","_blank");
			break;
		case "images":
			top.location.href = "/index.aspx?SearchMode=1";
			break;
		case "mailmagazine":
			top.location.href = "http://"+location.hostname+"/mailmagazine/index.aspx";
			break;
		case "model":
			top.location.href = "/PhotoModel/PhotoModelIndex.aspx";
			break;
		case "monitor":
			W_Create("http://"+location.hostname+"/topics/campaign-monitor1/MonitorEntry.aspx", 480, 800, "yes", "yes", "yes");
			break;
		case "monitor2":
			W_Create("http://"+location.hostname+"/topics/campaign-monitor2/MonitorEntry.aspx", 480, 800, "yes", "yes", "yes");
			break;
		case "monitor3":
			W_Create("http://"+location.hostname+"/topics/campaign-monitor3/MonitorEntry.aspx", 480, 800, "yes", "yes", "yes");
			break;
		case "campaignanyone":
			W_Create("http://"+location.hostname+"/topics/campaign-anyone/CampaignAnyoneEntry.aspx", 480, 800, "yes", "yes", "yes");
			break;
		case "editorial":
			top.location.href = "http://"+location.hostname+"/editorial/?SearchMode=1";
			break;
		case "CampaignCorbis":
			window.open("/topics/campaign-corbis/hint1.html","Campaign","width=500,height=500,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
			break;
		case "ToriKakuPdf":
			//window.open("http://"+location.hostname+"/help/qaa-0303.html#torikakupdf","_blank");
			window.open("http://"+location.hostname+"/help/qaa-0303.html#torikakupdf","HELP","width=827,height=600,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
			break;		
		case "CorporateInfo":
			window.open("http://amana.jp/company/groupcompanies/amanaimages.html","_blank");
			break;
		case "RecruitInfo":
			window.open("/recruit/","_top");
			break;
		case "settlement":
			top.location.href = "http://"+location.hostname+"/settlement/";
			break;
		case "sitemap":
			top.location.href = "http://"+location.hostname+"/sitemap/";
			break;
		//2011/02/14 �d�q�̎������s�@�\
		case "PdfReceipt1":
			//�w��������� �����u�̎��؁i�o�c�e)�Ƃ�
			window.open("/help/qaa-0304.html","HELP","width=827,height=600,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
			break;
		case "PdfReceipt2":
			//�_�E�����[�h��ʁu�̎��؁i�o�c�e)�Ƃ�
			window.open("/help/qaa-0401.html#receipt","HELP","width=827,height=600,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
			break;
		//�ӌ���
		case "voice":
			W_Create("http://"+location.hostname+"/voice/index.html?url=" + location.href, 518, 306, "no", "no", "no");
			break;
		//amana���N���[�g
		case "amanarecruit":
			W_Create("http://"+location.hostname+"/amanahd-recrit-detail.html", 745, 550, "no", "no", "no");
			break;
		//�_���ƕ�W
		case "CreatorEntry":
			window.open("/creator-entry/","_top");
			break;
		//�����}�K�T���v��
		case "MailSample":
			W_Create("http://cache1.amana.jp/mail/sample/index.html?rtm=accsample", 745, 550, "yes", "yes", "yes");
			break;
		//Coupon
		case "Coupon":
			W_Create("http://"+location.hostname+"/help/qaa-1001.html", 745, 550, "no", "no", "no");
			break;
		}
}

function W_Create(url, w, h, st, sc, rs){
	PopupWindow(url, w, h, st, sc, rs, "popup");
}

function W_Create_Ex(url, w, h, st, sc, rs){
	PopupWindow(url, w, h, st, sc, rs, "poppopup");
}

function TypeCheckChange(result) {
	for (var i = 0; i < document.forms[0].elements.length; i++) {
		var TagName = document.forms[0].elements[i].name;
		if (TagName.match(/chkRM/) || TagName.match(/chkRF/)) {
			if (result=="true") {
				document.forms[0].elements[i].disabled=false;
				document.forms[0].elements[i].checked=true;
			} else {
				document.forms[0].elements[i].disabled=true;
				document.forms[0].elements[i].checked=false;
			}
		}
	}
}

// �w���v��ʃ|�b�v�A�b�v
//  path     help or qaa    
//  pageid   �y�[�WID  
//  anchor   �A���J�[��
//
function NewWindowHelp(dummy, path, anchor) {
	var wNewWindowHelp=window.open('/help/' + path + '.html#' + anchor,"HELP","width=827,height=600,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
	wNewWindowHelp.focus();
	//window.open('/help/' + path + '.html?help=' + pageid + '#' + anchor,"HELP","width=827,height=600,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
}

function NewWindowHelpRt(dummy, path, rtm) {
	var wNewWindowHelp=window.open('/help/' + path + '.html?rtm=' + rtm,"HELP","width=827,height=600,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
	wNewWindowHelp.focus();
}

//2008/02/08 kuramochi Start
function OpenerReloadForTop( strPath )
{

	try {
		//TOP��ʂ���POPUP���ꂽ���O�C����ʂ��猩�������[�h
		var obj_WindowOpener = window.opener.parent;
		//https<--->http�Ή�
		obj_WindowOpener.location.href=obj_WindowOpener.location.href;
		
		try {
			//���O�C����ʁ��q��ʃ����[�h
			var obj_WindowOpener2 = window.opener;
			obj_WindowOpener2.location.reload();
		}
		catch(e) {}
		
		//opener��k��
		var opener2=window.opener.opener;
		if(opener2){
			//opener2.parent.location.reload();
			//���ƁA�t���[��������https�̂܂܂����Alocation.href����http�ɕς��B
			if(opener2 && opener2.parent) opener2.parent.location.href=opener2.parent.location.href;
			
			var opener3=opener2.opener;
			if(opener3 && opener3.parent) opener3.parent.location.href=opener3.parent.location.href;
		}
	}
	catch(e) {
		alert("���O�C�����܂����B���̉�ʂ��X�V���Ă��������B");
	}
	if(strPath) window.location.href = strPath;

}
//2008/02/08 kuramochi End

function OpenerReloadAddTimeParameter()
{
	var strUrl;
	var obj_WindowOpener;
    try {
		obj_WindowOpener = window.opener.parent;
	}
	catch(e) {}
	
    if ( obj_WindowOpener )
    {
		strUrl=obj_WindowOpener.location.href;
		if (window.opener.location.href.toLowerCase().indexOf("openlarge.aspx")!=-1)
		{
			if (strUrl.indexOf('?')!=-1)
			{
				if ( strUrl.indexOf("cpnreloadtime=")!=-1 )
				{
					obj_WindowOpener.location.href = strUrl.replace("cpnreloadtime=","cpnreloadtime=1" );
				}
				else
				{
					obj_WindowOpener.location.href = strUrl + "&cpnreloadtime=" + (new Date()).getTime(); 
				}
			}
			else
			{
				strUrl = strUrl + "?";
				obj_WindowOpener.location.href = strUrl + "cpnreloadtime=" + (new Date()).getTime(); 
			}
		}
	}
	else alert("�N�[�|����ύX���܂����B���̉�ʂ��X�V���Ă��������B")

}


function OpenerReload( strPath,option1 )
{
	var obj_WindowOpenerOpener;

    var bln_FrameBody_Exists = false;
    var bln_FrameDown_Exists = false;
    var str_Url_Body = "";
    var str_Url_Down = "";
    try {
		var obj_WindowOpener = window.opener.parent;
	}
	catch(e) {
		obj_WindowOpener = false;
		if (strPath.toLowerCase().indexOf('couponinfo.aspx')==-1)
		{
			alert("���O�C�����܂����B���̉�ʂ��X�V���Ă��������B");
		}
	}

    if ( obj_WindowOpener )
    {
        bln_FrameBody_Exists = JsAccount_HtmlFrames_Exists( obj_WindowOpener, "body" );
        bln_FrameDown_Exists = JsAccount_HtmlFrames_Exists( obj_WindowOpener, "down" );
        if ( ( bln_FrameBody_Exists ) && ( bln_FrameDown_Exists ) )
        {
            str_Url_Body = obj_WindowOpener.body.location;
            str_Url_Down = obj_WindowOpener.down.location;
            
            
            obj_WindowOpener.body.location.reload();

            var StrObj_Url_Down_1 = new String( str_Url_Down );
            var StrObj_Url_Down_2 = StrObj_Url_Down_1.toLowerCase();

            if ( StrObj_Url_Down_2.indexOf( "/LightBox/Guest/AccountGuest_", 0 ) != -1 )
            {
                obj_WindowOpener.down.location.replace( ( StrObj_Url_Down_2 ).replace( "accountguest_viewm", "AccountMember_ViewM" ) );
            }
            else
            {
                obj_WindowOpener.down.location.reload();
            }
        }
		else {
			try{
				obj_WindowOpenerOpener = window.opener.opener.parent;
			}
			catch(e) {
				obj_WindowOpenerOpener = false;
				if (strPath.toLowerCase().indexOf('couponinfo.aspx')>-1)
				{
					obj_WindowOpenerOpener = window.opener.parent;
				}
				else
				{
					alert("���O�C�����܂����B���̉�ʂ��X�V���Ă��������B");
				}
			}
			
			if ( obj_WindowOpenerOpener )
			{
				bln_FrameBody_Exists = JsAccount_HtmlFrames_Exists( obj_WindowOpenerOpener, "body" );
				bln_FrameDown_Exists = JsAccount_HtmlFrames_Exists( obj_WindowOpenerOpener, "down" );
				if ( ( bln_FrameBody_Exists ) && ( bln_FrameDown_Exists ) )
				{
					str_Url_Body = obj_WindowOpenerOpener.body.location;
					str_Url_Down = obj_WindowOpenerOpener.down.location;
					obj_WindowOpenerOpener.body.location.reload();

					var StrObj_Url_Down_1 = new String( str_Url_Down );
					var StrObj_Url_Down_2 = StrObj_Url_Down_1.toLowerCase();

					if ( StrObj_Url_Down_2.indexOf( "/LightBox/Guest/AccountGuest_", 0 ) != -1 )
					{
						obj_WindowOpenerOpener.down.location.replace( ( StrObj_Url_Down_2 ).replace( "accountguest_viewm", "AccountMember_ViewM" ) );
					}
					else
					{
						obj_WindowOpenerOpener.down.location.reload();
					}
					window.opener.location.reload();
				}
			}
		}
    }
    
	if(typeof strPath==='undefined')
	{}
	else
    {
	    if ( ( new String( strPath ) ).replace( ' ', '' ) != "" && ( new String( strPath ) ).replace( ' ', '' ) != "undefined"  )
	    {
			 window.location.href = strPath;
	    }
	    else
	    {
	    	try
	        {
	        	obj_WindowOpener.focus();
	        }
	        
			catch(e) {}
			
			if(typeof option1==='undefined')
			{
		    	window.close();
			}
	        else
	        {
				if (! DontCloseMySelf) window.close();
			}
		}
	}
}

// �S�̈ꊇ�����[�h
// �I�[�v�����̃E�B���h�E�̊e�t���[���Ƀ����[�h��������B
// �����̃E�B���h�E�̓N���[�Y���Ȃ�
function OpenerReloadNoClose() {
	var opnr;
	var url; 
	var i;
	
	opnr = window.opener;
	/* try {
		if( window.opener.parent ) opnr = window.opener;
	} catch( e ){

	} */

	if (opnr) {
		try {
	 		if (opnr.parent.frames.length > 0) {
	 			for (i = 0; i < opnr.parent.frames.length; i++) {
	 				opnr.parent.frames[i].location.reload();
	 			}
	 		} else {
	 			opnr.parent.location.reload();
	 		}
		} catch( e ){}
	}
	window.focus();
}
//	���O�A�E�g�p����
//  ���O�A�E�g�E�B���h�E����A���E�B���h�E�̃����[�h���s���B
function OpenerLogout() {
	if (window.opener) {
 		opnr = window.opener;
 		if (opnr.top.frames.length > 0) {
			// �{�b�N�X�����
			OpenerBoxSizeChange(0, true);
		} else {
			// ���X�V
			OpenerTopRedirect("", true);
		}
	} else {
		alert('�|�b�v�A�b�v�E�B���h�E�̌Ăяo���������݂��܂���B');
	}
}

// �I�[�v�����E�B���h�E�̃{�b�N�X�̃T�C�Y��ύX����
// size 0 : ��
//      1 : �J��
//      2 : �ő�
// close true/flase �E�B���h�E�����A���Ȃ�
function OpenerBoxSizeChange(size, close) {

	if (window.opener) {
		TopWindowBoxChange(size, window.opener);
		if (close) {
			window.close();
		}
	} else {
		alert('�|�b�v�A�b�v�E�B���h�E�̌Ăяo���������݂��܂���B');
	}	
}

//	�t���[�����X�V
//		url : �J�ڐ�string�i�󕶎��Ȃ�Reload�j
//		close : �|�b�v�A�b�v�������Ȃ� true/false
function OpenerTopRedirect(url, close) {
	if (window.opener) {
		if (url == "") {
			window.opener.top.location.reload();			
		} else {
			try {
				window.opener.top.location.href = url;
			}
			catch(e) {
				try {
					window.opener.top.location.reload();	
				}
				catch(e) {

				}
			}
		}
		
		if (close) {
			window.close();
		}
	} else {
//		alert('�|�b�v�A�b�v�E�B���h�E�̌Ăяo���������݂��܂���B');
		window.open(url,'_blank');
		if (close) {
			window.close();
		}
	}	
}
//	body�Ƀ��_�C���N�g
//		url : �J�ڐ�string�i�󕶎��Ȃ�Reload�j
//		close : �|�b�v�A�b�v�������Ȃ� true/false
function OpenerBodyRedirect(url, close) {
	// kuramochi test 070802
	//alert( url );
	if (window.opener) {
		if (window.opener.parent.body) {
			if (url == "") {
				window.opener.parent.body.location.reload();
			} else {
				window.opener.parent.body.location.href = url;
			}
			if (close) {
				window.close();
			}
		} else {
			alert('�Ăяo�����̃{�f�B�E�B���h�E�����݂��܂���B');
		}	
	} else {
		// alert('�|�b�v�A�b�v�E�B���h�E�̌Ăяo���������݂��܂���B');
		window.open(url,'_blank');
		if (close) {
			window.close();
		}
	}	
}

/*--------------------------------*/
/* RF�ꔭ�w���y�[�W�փ��_�C���N�g */
/*		url:�J�ڐ�URL             */
/*		image_id:��iID           */
/*		size:��i�T�C�Y           */
/*--------------------------------*/
function OpenerDirectPurchaseRedirect(url, image_id, size) {
	window.opener.location.href = url;
}


// �^�[�Q�b�g�E�B���h�E�̃{�b�N�X�T�C�Y��ύX����
// size 0 : ��
//      1 : �J��
//      2 : �ő�
// target : �^�[�Q�b�g�E�B���h�E
// ************************************************************************************************************************************************************************
function TopWindowBoxChange(size, target)
{
    var QueryStr_Url = SetQueryStringToURL(target.top.location.pathname + target.top.location.search,"BoxSize", size);

    QueryStr_Url = SetQueryStringToURL( QueryStr_Url, "PageNumberProcessFlag", "PageNumberRetreive" );
	target.top.location.replace( QueryStr_Url );
}

// URL������ɁA�N�G���������ݒ肷��B
// url URL������
// name ���O
// value �l
function SetQueryStringToURL(url, name, value) {
	var pathUrl = "";
	var query = "";

	index = url.indexOf("?");
	if (index >= 0) {
		pathUrl = url.substring(0, index);
		query   = url.substring(index+1);
	} else {
		pathUrl = url;
		query   = "";
	}
	// name=xxx���폜
	if (query.length > 0) {
		var params = query.split("&");
		count = 0;
		query = "";
		for (i=0 ; i<params.length ; i++) {
			if (params[i].indexOf(name + "=")==0) {
				continue;
			}
			query += count==0 ? "?" : "&";
			query += params[i];
			count++;
		}
	}
	// name=xxx ��ǉ�
	if (query.length==0) {
		query += "?";
	} else {
		query += "&";
	}
	query += name + "=" + value;
	pathUrl += query;
	return pathUrl;
}

//�ގ������`�F�b�N�{�b�N�X���̓`�F�b�N
function ResembleKeyCheck() {
	var KeyCheckFlg = 0;

	for (var i = 0; i < document.forms[0].elements.length; i++) {
		var TagName = document.forms[0].elements[i].name;
		if (TagName.match(/chkKeyWordA/) || TagName.match(/chkKeyWordB/)) {
			if (document.forms[0].elements[i].checked) {
				KeyCheckFlg++;
				if(KeyCheckFlg > 5 ) {
					alert("�I���ł���L�[���[�h�͂T�܂łł��B");
					return false;
				}
			}
		}
	}
}

function InfoLogin(type,id,vari,url,areacd,directPurchase) {
	/*--------------------*/
	/* HTTPS�� yuk.suzuki */
	/*--------------------*/
	url = "https://"+location.host+"/account/Info_signIn.aspx?direct=on&PageSource=info&SearchKey=" + escape(id) + "&GroupCD=" + escape(vari) + "&ImageType=" + escape(type) + "&DetailUrl=" + escape(url) + "&AreaCD=" + escape(areacd);
	//url = "/account/Info_signIn.aspx?direct=on&PageSource=info&SearchKey=" + escape(id) + "&GroupCD=" + escape(vari) + "&ImageType=" + escape(type) + "&DetailUrl=" + escape(url) + "&AreaCD=" + escape(areacd);
	if ( directPurchase != "" ) {
		url = url + "&DirectPurchase=" + escape(directPurchase);
	}
	else {
		url = url + "&DirectPurchase=no";
	}
	Js_Launch_Popup( url, 500, 700, "yes", "yes", "yes", "JsPopUp_SignIn_Cr" );
	return false;
}

function InfoLogin_ClickCheck(type,id,vari,url,areacd,directPurchase) {
	// �u�J���v�_�E�����[�h�v�����N�̔z��
	// ���O�C����ɁA�ڍ׉�ʂ������[�h���Ȃ������ꍇ�A���[�U�[�Ƀ����[�h�𑣂�
    
	ClickCount += 1;

	if (ClickCount > 1){
		alert("��ʂ��X�V���Ă��������B");
		return false;
	}

	/*--------------------*/
	/* HTTPS�� yuk.suzuki */
	/*--------------------*/
	url = "https://"+location.host+"/account/Info_signIn.aspx?direct=on&PageSource=info&SearchKey=" + escape(id) + "&GroupCD=" + escape(vari) + "&ImageType=" + escape(type) + "&DetailUrl=" + escape(url) + "&AreaCD=" + escape(areacd);
	//url = "/account/Info_signIn.aspx?direct=on&PageSource=info&SearchKey=" + escape(id) + "&GroupCD=" + escape(vari) + "&ImageType=" + escape(type) + "&DetailUrl=" + escape(url) + "&AreaCD=" + escape(areacd);
	if ( directPurchase != "" ) {
		url = url + "&DirectPurchase=" + escape(directPurchase);
	}
	else {
		url = url + "&DirectPurchase=no";
	}
	Js_Launch_Popup( url, 500, 700, "yes", "yes", "yes", "JsPopUp_SignIn_Cr" );
	return false;
}

function InfoLoginKani(type,id,vari,url,areacd,directPurchase) {
		
	// ���ς��艿�i������ꍇ�ɂ͌��ς�����e���ꏏ�ɑ��t
	var szPrice = $("ChargeBox").innerHTML + "";
	
	// (�ō�)����������ꍇ
	if(szPrice.indexOf("�ō�") > 0){
	// �ȈՌ��ς����񂠂�o�^
	
		// ���i�̎擾
		szPrice = szPrice.substring(0,szPrice.length-6);
	
		var index = $("Use_1").selectedIndex;
		var index2 = $("Use_2").selectedIndex;
		var index3 = $("Use_3").selectedIndex;
		var index4 = $("Period").selectedIndex;
		if(index3 == 0)index3=1;
		if(index4 == 0)index4=1;
		var index5 = $("Detail").selectedIndex;
		if(index5 == 0)index5=1;
		var szId = $("Use_1").options[index].value;
		var sz2Id = $("Use_2").options[index2].value;
		var sz3Id = $("Use_3").options[index3].value;
		var sz4Id = $("Period").options[index4].value;
		var sz5Id = $("Detail").options[index5].value;			
	
		// �T�C�Y�R�[�h�̕ϊ�(�Ƃ肠������)
		if(sz5Id == "1"){sz5Id = "50A101";}
		if(sz5Id == "2"){sz5Id = "50A102";}
		if(sz5Id == "19"){sz5Id = "50A401";}
		if(sz5Id == "20"){sz5Id = "50A402";}
		if(sz5Id == "21"){sz5Id = "50A403";}
		if(sz5Id == "22"){sz5Id = "50A404";}
		if(sz5Id == "23"){sz5Id = "50A405";}
		if(sz5Id == "24"){sz5Id = "50A406";}
		if(sz5Id == "12"){sz5Id = "50W112";}
		if(sz5Id == "13"){sz5Id = "50W113";}
		if(sz5Id == "4"){sz5Id = "50X104";}
		if(sz5Id == "5"){sz5Id = "50X105";}
		if(sz5Id == "14"){sz5Id = "50Y114";}
		if(sz5Id == "15"){sz5Id = "50Y115";}
		if(sz5Id == "17"){sz5Id = "50Z117";}
		if(sz5Id == "18"){sz5Id = "50Z118";}
		if(sz5Id == "19"){sz5Id = "50Z119";}
		if(sz5Id == "0"){sz5Id = "999999";}
		
		directPurchase = url + "&sl=" + szId + "&sm=" + sz2Id + "&ss=" + sz3Id + "&sp=" + sz4Id + "&sd=" + sz5Id + "&spr=" + szPrice;
	}			
	
	/*--------------------*/
	/* HTTPS�� yuk.suzuki */
	/*--------------------*/
	url = "https://"+location.host+"/account/Info_signIn.aspx?direct=on&PageSource=info&SearchKey=" + escape(id) + "&GroupCD=" + escape(vari) + "&ImageType=" + escape(type) + "&DetailUrl=" + escape(url) + "&AreaCD=" + escape(areacd);
	//url = "/account/Info_signIn.aspx?direct=on&PageSource=info&SearchKey=" + escape(id) + "&GroupCD=" + escape(vari) + "&ImageType=" + escape(type) + "&DetailUrl=" + escape(url) + "&AreaCD=" + escape(areacd);
	if ( directPurchase != "" ) {
		url = url + "&DirectPurchase=" + escape(directPurchase);
	}
	else {
		url = url + "&DirectPurchase=no";
	}
	Js_Launch_Popup( url, 500, 700, "yes", "yes", "yes", "JsPopUp_SignIn_Cr" );
	return false;
}


//
// ���W�I�{�^�����`�F�b�N����Ă��邩�ǂ���
//
function radiobtnChecked() {
	var chkradio = "false";

 	for (var i = 0; i < document.forms[0].elements.length; i++) {
		var TagName = document.forms[0].elements[i].name;
		if (TagName.match(/radio/)) {
			if (document.forms[0].elements[i].checked){
				chkradio = "true";
			}
		}
	}
	if (chkradio == "false"){
		alert("�T�C�Y���w�肳��Ă��܂���B");
		return false;
	}
	return true;
}

// RM/RF�`�F�b�N�{�b�N�X�̂ǂ��炩���`�F�b�N����Ă��邩�ǂ���
//
//	param      RM/RF
//
function checkboxChecked(param) {
	if (document.forms[0].chkRM.checked == false){
		if (document.forms[0].chkRF.checked == false){
			alert("�q�l/�q�e�w��Ȃ��͂ł��܂���B");
			switch (param) {
				case "RM":
					document.forms[0].chkRM.checked = true; 
					return false;
				case "RF":
					document.forms[0].chkRF.checked = true;
					return false;
			}
		}
	}
	return true;
}

// ��i���ă��[�h
// ���O�C����A�����̃E�C���h�E����i���ɖ߂��B
//
function ImageDetailLoad(detailUrl) {
	window.location.href = detailUrl;
}

function PopupWindow(url, w, h, st, sc, rs, name){
	// �������W
	var left = Math.floor((screen.width - w) / 2);
	var top  = Math.floor((screen.height - h) / 2);
	// �E�C���h�E���J��
	if (document.all) {
		var win = window.open(url, name, "width="+w+",height="+h+",status="+st+",scrollbars="+sc+",resizable="+rs+",left="+left+",top="+top);
	} else {
		var win = window.open(url, name, "width="+w+",height="+h+",status="+st+",scrollbars="+sc+",resizable="+rs+",screenX="+left+",screenY="+top);
	}
	// �E�C���h�E��O�ʂɈړ�
	win.focus();
	return true;
}

function GetPriceMapUrl(paramPrice_cd,paramBrandId)
{

	if (typeof paramBrandId == "undefined")
	{
		switch (paramPrice_cd) {
		    case "rm":
				return "http://help.amanaimages.com/price/photo/?rtm=20160401"
					break;
		    case "Pr":
				return "http://help.amanaimages.com/price/photo?rtm=20160401#pr"
					break;
		    case "Hi":
				return "http://help.amanaimages.com/price/photo?rtm=20160401#hi"
					break;
			case "St":
				return "http://help.amanaimages.com/price/photo?rtm=20160401#st"
					break;
			case "Rf":
				return "http://help.amanaimages.com/price/photo/rf_price/?rtm=20160401"
					break;
			case "Rfex":
				return "http://help.amanaimages.com/price/photo/rfextra_price/?rtm=20160401"
					break;
			case "St2":
				//return "/price/amana_st_price.html?rtm=130221#oth_ta2"
				return "http://help.amanaimages.com/price/photo/?rtm=20160401"
					break;
			case "St3":
				//return "/price/amana_st_price.html?rtm=130221#cm_ta11"
				return "http://help.amanaimages.com/price/photo/service-packs/?rtm=20160401"
					break;
			case "hayami":
				return "http://help.amanaimages.com/price/photo/hayami_price/?rtm=20160401"
					break;
			case "St_M":
				 return "http://help.amanaimages.com/price/motion?rtm=20160401#st"
					break;
			case "Corbis_M":
				 return "http://help.amanaimages.com/price/motion?rtm=20160401#st"
					break;
			case "St_3D":
				return "http://help.amanaimages.com/price/3drf_price/?rtm=20160401"
					break;
			case "Font":
				return "http://help.amanaimages.com/price/font_price/?rtm=20160401"
					break;
			case "SV":
			case "SW":
			case "SS":
			case "SU":
				return "http://help.amanaimages.com/price/sound_price/?rtm=20160401"
					break;
			case "MotionStandard":
				return "http://help.amanaimages.com/price/motion?rtm=20160401#st"
					break;
			case "CorbisMotion":
				return "http://help.amanaimages.com/price/motion?rtm=20160401#st"
				break;
			case "Ms":
				return "http://help.amanaimages.com/price/motion?rtm=20160401#st";
				break;
			case "Mh":
				return "http://help.amanaimages.com/price/motion?rtm=20160401#hi";
				break;
			case "Mp":
				return "http://help.amanaimages.com/price/motion?rtm=20160401#pr";
				break;
			case "Sp":
				return "http://help.amanaimages.com/price/motion?rtm=20160401#st";
				break;
			}
	
	}
	else
	{
		switch( paramBrandId)
		{
			case 41:
			case 551:
				switch (paramPrice_cd) {
				default:
					return GetPriceMapUrl(paramPrice_cd);
				}

			case 5501:
			case 5502:
			case 5503:
			case 5506:
			case 5017:
				return GetPriceMapUrl(paramPrice_cd);
				break;
			default:
				return GetPriceMapUrl(paramPrice_cd);
				break;
				
	
		}
	}
	

}

function WindowOpen(url, w, h, st, sc, rs, name, intWindowPositionTop, intWindowPositionLeft )
{
	
	var left = parseInt( intWindowPositionTop );
	var top  = parseInt( intWindowPositionLeft );
	
	// �E�C���h�E���J��
	if (document.all) 
	{
		var win = window.open( url, name, "width=" + w + ",height=" + h + ",status=" + st + ",scrollbars=" + sc + ",resizable=" + rs + ",left=" + left + ",top=" + top );
	}
	else
	{
		var win = window.open( url, name, "width=" + w + ",height=" + h + ",status=" + st + ",scrollbars=" + sc + ",resizable=" + rs + ",screenX=" + left + ",screenY=" + top );
	}
}


function InfoNavi(paramPrice_cd,paramBrandId,imageType) {

	var strPriceMapUrl;
	strPriceMapUrl=GetPriceMapUrl(paramPrice_cd,paramBrandId,imageType);
	
	if (strPriceMapUrl=='') return;
	
	var w=1040;
	var h=650;
	var st="yes";
	var sc="yes"
	var rs="yes"
	var name="newpopup";
	var intWindowPositionTop=50;
	var intWindowPositionLeft=50;

	
	switch (paramPrice_cd) {
	    case "rm":
			w=500;
			h=270;
	    
	}
		
	WindowOpen(strPriceMapUrl, w, h, st, sc, rs, name, intWindowPositionTop, intWindowPositionLeft );

}

function InquiryNavi()
{
	var portno = "";
	try {
		if (location.port != ""){
			portno = ":" + location.port;
		}
	} catch(e) {}
		W_Create("http://"+location.hostname+portno+"/inquiry/torikaku/form.aspx" , 500, 630, "yes", "yes", "yes");
//		W_Create("http://"+location.hostname+portno+"/inquiry/torikaku/form.aspx" , 500, 630, "yes", "yes", "yes");
}

function OpenerReload_Deprecated(detailUrl) {
	var opnr;
	var i;
	opnr = window.opener;
	if (window.opener) {
 		if (true) {
 			if (opnr.parent.parent.frames.length > 0) 
			{
 				for (i = 0; i < opnr.parent.parent.frames.length; i++) 
				{
					opnr.parent.parent.frames[i].location = opnr.parent.parent.frames[i].location;
 				}
 			} 
			else 
			{
 				opnr.parent.parent.location.reload();
 			}
 		} else {
 			opnr.top.location.reload();
 		}
		if (detailUrl != "") {
			window.location.href = detailUrl;
		} else {
			window.close();
			window.opener.focus();
		}
	}
}

function CheckBoxGroup_Is_Checked( str_ObjectNameIdentifier, str_ObjectNamePartial, str_AlertMsg )
{
    var str_ObjectName = "";
    var str_TmpName = "";
    var bln_ObjectChecked = false;
    var bln_ObjectFlag = false;
    var int_ObjectIndex = 0;
    

    for ( var i = 0; i < document.forms[0].elements.length; i++ )
    {
        var TagName = GetDocumentObjectName( document.forms[0].elements[i] );
        if ( eval( "TagName.match(/" + str_ObjectNamePartial + "/)" ) )        {
            if ( eval( "TagName.match(/" + str_ObjectNamePartial + "/)" ) && eval( "TagName.match(/" + str_ObjectNameIdentifier + "/)" ) )            {
                int_ObjectIndex = i;
                str_ObjectName = TagName;
                bln_ObjectFlag = document.forms[0].elements[i].checked;
            }
            else
            {
                if ( document.forms[0].elements[i].checked )
                {
                    bln_ObjectChecked = true;
                }
            }
        }
    }
    
    if ( ( ! bln_ObjectChecked ) && ( ! bln_ObjectFlag ) )
    {
        if ( str_AlertMsg != "" )
        {
            var obj_element = GetDocumentObjectByName( str_ObjectName, int_ObjectIndex );
            obj_element.checked = true;
        }
        return false;
    }
    return true;
}

function GetDocumentObjectName( obj_document )
{
    if ( navigator.appName.indexOf("Netscape") != -1 )    
    {
        return obj_document.id;
    }
    if ( ! NN )
    {
        return obj_document.name;
    }
}

function GetDocumentObjectByName( str_ElementName, int_ElementIndex )
{
    if ( NN )
    {
        return document.forms[0].elements[int_ElementIndex];
    }
    else
    {
        return document.forms[0].elements[int_ElementIndex];
    }
}

function windowsizeset( width, height )
{
	resizeTo(width, height);
}


function JsSelectSearch(SelectKey)
{
	// 1:��Јē�, 2:���ƕ񍐏�, 3:�Г���, 4:�G�����l�L��
	// ��Јē��Z���N�g �G�����l�L���Z���N�g �Г���Z���N�g ���ƕ񍐏��Z���N�g

	window.location.href = "/Category/result.aspx?Page=Contents&Category=Spe&Keyword=" + SelectKey;
}

//�V�K���חp�i�J�e�S���[�j
function NewArrivalSearchKey(str1,str2,str3) {
    if (str1.match(new RegExp("^%25"))) {
      str1 = str1.replace(new RegExp("%25","g"),"%");
    }
	//alert("/Category/result.aspx?Page=Contents&Category=New&KeyWord="+str1+"&ImageType="+escape(str2));
    
	window.location.href = "/Category/result.aspx?Page=Contents&Category=New&KeyWord="+str1+"&ImageType="+escape(str2);
	
}
//2008/03/25 kuramochi Start
function XMLRequestForForeignContentsUsageHistory(Str_ImageInfo_ImageHandle, Str_ImageInfo_ImageType, Str_ImageInfo_CatalogHandle, Str_CalculatorIndicate, Str_ItemIndex, Str_ImageInfo_GroupHandle, Str_ImageInfo_BrandHandle, Str_ImageInfo_ForeignCatalogHandle){

	var StrHtml_Url;
	var Str_conflict;
	
	var Str_Utl = "";

	//alert("Corbis MF123");
	
	StrHtml_Url = ""
	StrHtml_Url = StrHtml_Url + "/calculator/?Page=TermsAgreement"
	StrHtml_Url = StrHtml_Url + "&ImageHandle=" + Str_ImageInfo_ImageHandle
	StrHtml_Url = StrHtml_Url + "&ImageType=" + Str_ImageInfo_ImageType
	StrHtml_Url = StrHtml_Url + "&CatalogHandle=" + Str_ImageInfo_CatalogHandle
	StrHtml_Url = StrHtml_Url + "&Indicator=" + Str_CalculatorIndicate
	StrHtml_Url = StrHtml_Url + "&ItemIndex=0"
	StrHtml_Url = StrHtml_Url + "&GroupHandle=" + Str_ImageInfo_GroupHandle
	StrHtml_Url = StrHtml_Url + "&BrandHandle=" + Str_ImageInfo_BrandHandle
	StrHtml_Url = StrHtml_Url + "&ForeignConlict=" + Str_conflict
	StrHtml_Url = StrHtml_Url + "&ForeignCatalogHandle=" + Str_ImageInfo_ForeignCatalogHandle
		
	//window.alert(StrHtml_Url);
	
	//2009.10.19 kitazawa
	document.location.href = StrHtml_Url;
	//if (Str_CalculatorIndicate == "Step1FromOrderBox") {
	//	PopPopupWindow_NoReturn( StrHtml_Url, 710, 765, "yes", "yes", "yes", "PopUpWindow_Calculator" );
	//}else if (Str_CalculatorIndicate == "Step1FromOrderBoxKani") {
	//	PopPopupWindow_NoReturn( StrHtml_Url, 710, 765, "yes", "yes", "yes", "PopUpWindow_Calculator" );		
	//} else {
	//	top.location.href = StrHtml_Url;
	//}
	
	
}	
//2008/03/25 kuramochi End
// #if true then 'ADD  e�R�}�[�X���P�Ή���������

function XMLRequestForForeignContentsUsageHistory_OtherWindow(Str_ImageInfo_ImageHandle, Str_ImageInfo_ImageType, Str_ImageInfo_CatalogHandle, Str_CalculatorIndicate, Str_ItemIndex, Str_ImageInfo_GroupHandle, Str_ImageInfo_BrandHandle, Str_ImageInfo_ForeignCatalogHandle){

	var StrHtml_Url;
	var Str_conflict;
	
	var Str_Utl = "";

	//alert("Corbis MF123");
	
	StrHtml_Url = ""
	StrHtml_Url = StrHtml_Url + "/calculator/?Page=TermsAgreement"
	StrHtml_Url = StrHtml_Url + "&ImageHandle=" + Str_ImageInfo_ImageHandle
	StrHtml_Url = StrHtml_Url + "&ImageType=" + Str_ImageInfo_ImageType
	StrHtml_Url = StrHtml_Url + "&CatalogHandle=" + Str_ImageInfo_CatalogHandle
	StrHtml_Url = StrHtml_Url + "&Indicator=" + Str_CalculatorIndicate
	StrHtml_Url = StrHtml_Url + "&ItemIndex=0"
	StrHtml_Url = StrHtml_Url + "&GroupHandle=" + Str_ImageInfo_GroupHandle
	StrHtml_Url = StrHtml_Url + "&BrandHandle=" + Str_ImageInfo_BrandHandle
	StrHtml_Url = StrHtml_Url + "&ForeignConlict=" + Str_conflict
	StrHtml_Url = StrHtml_Url + "&ForeignCatalogHandle=" + Str_ImageInfo_ForeignCatalogHandle
		
	Calculate_OtherWindow( StrHtml_Url );	
}	
// #end if       'ADD  e�R�}�[�X���P�Ή���������


//2008/03/20��SEO kuramochi Start
/*
function getseoterms() {

    var params = Form.serialize('Form1');
	var query  = document.location.href;
	var params2 = query.split('&');
	var wUrl;    
	var os = 'Win'
	var browser = 'Ie'
	var detect = navigator.userAgent.toLowerCase();	

	if (detect.indexOf('mac')) OS = "Mac";
	if (detect.indexOf('msie')) browser = "Ie";

	if((os == "Mac") && (browser == "Ie")) {
		//alert("aiueo");
	}else{	
		new Ajax.Request('/ajax/TermsetForSeo.aspx', {
			method: 'post',
			postBody: params,
			asynchronous: false,

			onSuccess: function(r) {
			//alert("�������ڎ擾�����I");
			},
			onFailure: function(r) {
				window.alert('�G���[(' + r.status + ' - ' + r.statusText + ')');
			}
		});	
		
	}
}
*/
function getseoterms() {

	var detect = navigator.userAgent.toLowerCase();
	var OS,browser;


	OS = ""
	browser = ""
	
	if (checkIt('mac') > 0) {
		OS = "Mac";
	}else{
		OS = "";
	}

	if (checkIt('msie') > 0) {
		browser = "InternetExplorer";
	}else{
		browser = "";
	}

	if (checkIt('msie') > 0) browser = "InternetExplorer";

	//Mac IE��prototype�폜
	if((OS == "Mac") && (browser == "InternetExplorer")) {
		//�������Ȃ�
	}else{
		getseotermsAjax();
	}

}

function checkIt(string){
var detect = navigator.userAgent.toLowerCase();
place = detect.indexOf(string);
thestring = string;
return place;
}
	
function getseotermsAjax() {

	var $j = jQuery.noConflict();
    var params = $j('#Form1').serialize();
	params = params.replace(/^__VIEWSTATE=[^&]*(&__VIEWSTATE=[^&]*)*&?|&__VIEWSTATE=[^&]*/, '');
	var query  = document.location.href;
	var params2 = query.split('&');
	var wUrl;    
	
	$j.ajax({
		url: '/ajax/TermsetForSeo.aspx',
		type: 'post',
		data: params,
		async: false,

		success: function() {
		//alert("�������ڎ擾�����I");
		},
		error: function(jqXHR, textStatus, errorThrown) {
			window.alert('�G���[(' + textStatus + ' - ' + errorThrown + ')');
		}
	});	
}
//2008/03/20��SEO kuramochi End


function setImagePosition(targetID, x, y) {
    if( $(targetID) == undefined ) return;
    $(targetID).style.display = "inline";
    var position = Position.positionedOffset($(targetID));
    $(targetID).style.left = position[0]+parseInt(y);
    $(targetID).style.top = position[1]+parseInt(x);
}
/* effects.js�ɂ�鏈���͂�߂�
function imagefadeout(targetID) {
    if( $(targetID) == undefined ) return;
    new Effect.Fade(
        targetID,
        {
            from: 1.0,
            to: 0.0,
            delay: 3,
            duration: 3
        }
    );
}
*/
function ReLocationHrefAll( w,fidx )
{
	try {
		var cw=w || window;
		if(cw.top && cw.top.frames[fidx] && cw != cw.top)
		{
			cw.top.frames[fidx].location.href=cw.top.frames[fidx].location.href;
		}
		var o = cw.opener;
		if( o )ReLocationHrefAll(o,fidx);
	}
	catch(e) {
		//alert(e);
	}
}

function ReloadAll( w,fidx )
{
	try {
		var cw=w || window;
		if(cw.top && cw.top.frames[fidx] && cw != cw.top)
		{
			cw.top.frames[fidx].location.reload();
		}
		var o = cw.opener;
		if( o )ReloadAll(o,fidx);
	}
	catch(e) {
		//alert(e);
	}
}

function openDirectPurchaseAndClose(OpenUrl,isClose)
{
	openDirectPurchaseAndCloseAndReloadOpener(OpenUrl,isClose,true);
}

function openDirectPurchaseAndCloseAndReloadOpener(OpenUrl,isClose,isdReloadOpener)
{
	//�e�̂���ɐe�ɁA�w����ʂ�\��������
	Js_Launch_Popup(OpenUrl ,null, null, null, null, null, null);
	
	if (isClose)
	{
		window.close();
	}
	if (isdReloadOpener)
	{
		if (window.opener)
		{
			window.opener.location.reload();
		}
	}
}

//----------���[���A�h���X�Í���

function convertMoji(t){
	var s="",moji="";
	for(var i=0;i<t.length;i++){
		moji=t.charCodeAt(i);
		s +=String.fromCharCode(moji+1);
	}
	return s;
}
function mailCode(num){
	switch(num){
		case "acs":
		em = convertMoji(String.fromCharCode(96,98,114,63,96,108,96,109,96,104)+String.fromCharCode(108,96,102,100,114,45,98,110,108));
		break;
		
		case "aiwest":
		em = convertMoji(String.fromCharCode(104,109,101,110,63,96,108,96)+String.fromCharCode(109,96,118,100,114,115,45,105,111));
		break;
		
		case "edi":
		em = convertMoji(String.fromCharCode(100,99,104,115,110,113,104,96,107,63,96,108)+String.fromCharCode(96,109,96,104,108,96,102,100,114,45,98,110,108));
		break;
		
		case "tv":
		em = convertMoji(String.fromCharCode(111,103,110,115,110,63,101,116,107,107)+String.fromCharCode(115,104,108,100,45,98,110,45,105,111));
		break;
		
		case "houjin":
		em = convertMoji(String.fromCharCode(103,110,116,105,104,109,63,96,108,96,109)+String.fromCharCode(96,104,108,96,102,100,114,45,98,110,108));
		break;
		
		case "planet":
		em = convertMoji(String.fromCharCode(111,107,96,109,100,115,94,104,109,101,110,63,96)+String.fromCharCode(108,96,109,96,104,108,96,102,100,114,45,98,110,108));
		break;
		
		case "nagoya":
		em = convertMoji(String.fromCharCode(104,109,101,110,63,96,104,118,100,114)+String.fromCharCode(115,44,109,96,102,110,120,96,45,105,111));
		break;
		
		case "splive":
		em = convertMoji(String.fromCharCode(104,109,101,110,63,114,111,107)+String.fromCharCode(104,117,100,45,98,110,45,105,111));
		break;
		
		case "arc":
		em = convertMoji(String.fromCharCode(96,113,98,63,116,109,104,102,113,96)+String.fromCharCode(111,103,104,98,45,98,110,45,105,111));
		break;
		
		case "pby":
		em = convertMoji(String.fromCharCode(104,109,101,110,63,111,97)+String.fromCharCode(120,45,98,110,45,105,111));
		break;
		
		case "npl":
		em = convertMoji(String.fromCharCode(109,111,107,63,109,111)+String.fromCharCode(107,45,98,110,45,105,111));
		break;
		
		case "moonbase":
		em = convertMoji(String.fromCharCode(104,109,101,110,63,108,110)+String.fromCharCode(110,109,97,96,114,100,45,117,98));
		break;
		
		case "shikoku":
		em = convertMoji(String.fromCharCode(104,109,101,110,63,114,103,104,106,110)+String.fromCharCode(106,116,44,111,114,45,98,110,45,105,111));
		break;
		
		case "netwave":
		em = convertMoji(String.fromCharCode(111,96,114,63,108,96,104,107,45,109)+String.fromCharCode(100,115,118,96,117,100,45,110,113,45,105,111));
		break;
		
		case "japack":
		em = convertMoji(String.fromCharCode(104,109,101,110,63,105,96,111)+String.fromCharCode(96,98,106,45,98,110,45,105,111));
		break;
		
		case "artspace":
		em = convertMoji(String.fromCharCode(102,96,115,100,63,96,113,115,114,111,96)+String.fromCharCode(98,100,44,118,100,97,45,98,110,45,105,111));
		break;

		default:
		em = convertMoji(String.fromCharCode(96,98,114,63,96,108,96,109,96,104)+String.fromCharCode(108,96,102,100,114,45,98,110,108));
		break;
	}
	document.write("<a href=\"mai"+"lto:"+em+"\">"+em+"</a>");
}

// Cookie�ɃJ�X�^���̌`�Ղ����邩�m�F����
function remindCustom(){
	var CookieCustomFlag = "CookieNameAmanaCustomSiteFlg=";
	var referrer = document.referrer;
	var cookieAll = document.cookie;
	var cookiePosition = cookieAll.indexOf(CookieCustomFlag);
	var refPosition  = referrer.indexOf("/custom/");
	var refIpdPosition = referrer.indexOf("/stockphoto/index.aspx");
	customTopFlg = "";
	if(refPosition == -1 || refIpdPosition == -1){
		customTopFlg = 1;
	}
	var remindCustom = document.getElementById("customReminder");
	if(cookiePosition != -1 && remindCustom != null && customTopFlg == 1){
		remindCustom.className = "forcustom";
	}
}

// ICT_AGROUP-1156 �y�}���`�f�o�C�X�z ���o�C���T�C�g�ւ̃��_�C���N�g���� 
//[�萔]
//var CookieNameSpMode="spmode"
//var TbKeywords="(iPad|Android((?!Mobile).)+$|Kindle|Silk)";         //�^�u���b�g����L�[���[�h�Q
//var SpKeywords="(iPhone|iPod|Android.*Mobile|BlackBerry|IEMobile)"; //�X�}�[�g�t�H������L�[���[�h�Q
//var CookieNameCustomFlg = "CookieNameAmanaCustomSiteFlg";           // Cookie�� �J�X�^���T�C�g�t���O
//var SiteSpUrl = "https://sp.amanaimages.com";                     // ���_�C���N�g��URL
//// �񃊃_�C���N�g�Ώۂ�URL
//var NoRedirectList = ["/price/", "/regulation/", "/policy/", "/help/", "/research/", "/pr/", "/custom/", "/artgiving/", "/campaign/morisawa/", "/lp/", "/mailmagazine/", "/vbp/", "/pickup/feature/creative/"];

//�f�o�C�X���菈��
//�^�u���b�g/�X�}�[�g�t�H���ł̃A�N�Z�X���ɁAURL������s���A�w���URL�Ƀ��_�C���N�g
//function JS_CheckDevice()
//{
//	var RedirectUrl = SiteSpUrl; // ���_�C���N�g��URL(�����l)
//
//	var regexp = new RegExp(/^https?:\/\/[^\/]+/);
//	var SiteUrl = location.href.match(regexp); //�h���C���擾
//
//	//�f�o�C�X����
//	if ((JS_IsMatchDevice(TbKeywords)) || (JS_IsMatchDevice(SpKeywords)))
//	{
//
//		var SpMode = getCookie2(CookieNameSpMode); // ���o�C���T�C�g����̑J��(1)�͒E�o
//		if (SpMode == "1") {return;}
//
//		var refUrl = window.location.href; //�J�ڐ�URL�擾
//		
//		// �J�X�^���T�C�g�ւ̃A�N�Z�X������
//		var CustomFlg = getCookie2(CookieNameCustomFlg); // �J�X�^���T�C�g�t���O�擾
//		
//		if (CustomFlg == "1") // �J�X�^���T�C�g�t���O�m�F
//		{
//			RedirectUrl = ""; // �񃊃_�C���N�g
//		}else{
//			// ���̑��T�C�g�ւ̃A�N�Z�X������
//			for ( i = 0; i < NoRedirectList.length; i++)
//			{
//				if (refUrl.indexOf(SiteUrl + NoRedirectList[i]) > -1) // �񃊃_�C���N�gURL������
//				{
//					RedirectUrl = ""; // �񃊃_�C���N�g
//					break;
//				}
//			}
//		}
//		
//		// ���_�C���N�g
//		if (RedirectUrl != "") {document.location = RedirectUrl;}
//	}
//}

// ICT_AGROUP-1156 �y�}���`�f�o�C�X�z ���o�C���T�C�g�ւ̃��_�C���N�g���� 
// �f�o�C�X���菈�� �iTrue�F��v�AFalse�F�s��v�j
//function JS_IsMatchDevice(deviceKey)
//{
//	var ret = false;
//	var regexp = new RegExp(deviceKey);
//	var ua = navigator.userAgent;
//
//	if (ua.match(regexp)) {ret = true;}
//	return ret;
//}

//���[���A�h���X�`�F�b�N
function CheckEmailAddress(txtEmail, bCheckNull, strMessages) {
	if (txtEmail) {
		var strEmail = trim(txtEmail.value);
		if (strEmail == "" && bCheckNull) {
			alert(strMessages + "����͂��Ă��������B");
			txtEmail.focus();
			return false;
		}

		if (strEmail != "") {
			if (strEmail.length > 50) {
				alert(strMessages + "��50�����ȓ��œ��͂��Ă��������B");
				txtEmail.focus();
				return false;
			}

			if (ZenkakuCheck(strEmail)) {
				alert(strMessages + "�͔��p�����œ��͂��Ă��������B");
				txtEmail.focus();
				return false;
			}

			var atindex = strEmail.indexOf("@");
			if ((atindex < 1) || (strEmail.length - 1 <= atindex)) {
				alert(strMessages + "�̓��͌`�����Ԉ���Ă��܂��B");
				txtEmail.focus();
				return false;
			}

			if (strEmail.indexOf("@", atindex + 1) >= 0) {
				alert(strMessages + "�̓��͌`�����Ԉ���Ă��܂��B");
				txtEmail.focus();
				return false;
			}
			//xxxx@xxxx.xxx �� �h�b�g�`�F�b�N
			if (strEmail.indexOf(".", atindex + 1 + 1) < 0) {
				alert(strMessages + "�̓��͌`�����Ԉ���Ă��܂��B");
				txtEmail.focus();
				return false;
			}
			// �I�[�h�b�g�`�F�b�N
			if (strEmail.substr(strEmail.length - 1, 1) == ".") {
				alert(strMessages + "�̓��͌`�����Ԉ���Ă��܂��B");
				txtEmail.focus();
				return false;
			}
			// ���������`�F�b�N
			if (strEmail.match(/[\<\>\"\']/)) {
				alert(strMessages + "�̓��͌`�����Ԉ���Ă��܂��B");
				txtEmail.focus();
				return false;
			}
		}
	}

	return true;
}
function getByte(str) {
	if (str == "" || !str || str == null) return 0;
	str = trashGomi(str);
	var strS = str.replace(/[^0-9a-z�-�\!\"\#\$\%\&\'\(\)\-\=\^\~\\\|\@\`\[\{\;\+\:\*\]\}\,\<\.\>\/\?\_]/ig, "##");
	return strS.length;
}
function trashGomi(s) {
	s = unescape(escape(s).split("%00")[0]);
	return s;
}
function getLength(str) {
	if (str == "" || !str || str == null) return 0;
	str = trashGomi(str);
	var strS = str.replace(/[^0-9a-z�-�\!\"\#\$\%\&\'\(\)\-\=\^\~\\\|\@\`\[\{\;\+\:\*\]\}\,\<\.\>\/\?\_]/ig, "#");
	return strS.length;
}
function trim(str) {
	if (str == null) return null;
	if (str == undefined) return undefined;
	return String(str).replace(/^[ �@]*/gim, "").replace(/[ �@]*$/gim, "");
}
// �S�p�������܂܂�Ă�����true��Ԃ�
function ZenkakuCheck(moji) {
	if (getByte(moji) != getLength(moji)) {
		return true;
	} else {
		return false;
	}
}
function replaceAll(str, find, replace) {
    return str.replace(new RegExp('[' + find + ']', 'g'), replace);
}
//	iPDesign���O�A�E�g�p����
//  ���O�A�E�g�E�B���h�E����A���E�B���h�E�̃����[�h���s���B
function OpenerLogoutForIPDesign() {
	if (window.opener) {
		TopWindowIPDesignChange(window.opener)
	} else {
		alert('�|�b�v�A�b�v�E�B���h�E�̌Ăяo���������݂��܂���B');
	}
}

function TopWindowIPDesignChange(target) {
	var QueryStr_Url = "/stockphotos/";
	target.top.location.replace(QueryStr_Url);
	window.close();
}

function openRmGuide(loc){
	helpUrl = "/help/estimate001.html?rtm=" + loc;
	window.open(helpUrl,"estimate","width=830,height=700,status=yes,scrollbars=yes,resizable=yes,left=50,top=50")
}