//EventNavigation.js

var PopUpWindow_Js_Launch_Popup = null;
var winJs_Launch_Popup = null;

function JsPrep_ForPostBack( prmtr_Page, prmtr_ReturnNeeded )
{
    var bln_ToReturn = false;
    var obj_Form = document.forms[0];
    
    switch( prmtr_Page )
    {
        case "SignIn":
            obj_Form.hddn_JsPathName.value = escape(top.location.pathname);
            obj_Form.hddn_JsSearch.value = escape(top.location.search);
            bln_ToReturn = true;
            break;
    }
    if ( prmtr_ReturnNeeded )
    {
        return bln_ToReturn;
    }    
}

function Js_ProcessOnLoad( prmtr_Page )
{
    var bln_ToReturn = false;
    var obj_Form = document.forms[0];
    
    switch( prmtr_Page )
    {
        case "SignIn":
            alert( 'ログインが必要です' );
            obj_Form.txt_UserHandle.focus();
            break;
    }
    return true;
}

function Js_Reload_SignIn( str_AlertMsg, str_BoxMode )
{
	var str_Url = top.location.href;
	
	str_Url = Replace_QueryStringValue( str_Url, "BoxSize", str_BoxMode );
	str_Url += "&BoxMode=" + str_BoxMode;
	top.location.href = str_Url;
	//メッセージがある場合
	if ( str_AlertMsg != "" )
	{
		alert( str_AlertMsg );
	}
}

function Js_Dispatch_WithInDataList( strProcessCode, strImageHandle )
{
	var portno = "";
	var str_GroupHandle = "";
	var str_Path = "";
	
	if ( location.port != "" )
	{
		portno = ":" + location.port;
	}
	
	switch ( strProcessCode )
	{
		case "ImageDetails":
		    js_Launch_Popup( "", 750, 500, "yes", "yes", "yes", "JsPopUp_RightManaged" );
		    break;
		case "LicenseHistory":
		    str_Path = "/info/UsageHistory.aspx?SearchKey=" + strImageHandle + "&GroupCD=" + str_GroupHandle;
		    Js_Launch_Popup( str_Path, 750, 500, "yes", "yes", "yes", "JsPopUp_RightManaged" );
		    break;
		case "VerifyPriceList_RF":
		    str_Path = "";
		    Js_Launch_Popup( str_Path, 600, 400, "yes", "yes", "yes", "JsPopUp_RoyaltyFree" );
		    break;
	}
	// return true;
}

function Js_Dispatcher( strProcessCode )
{
	var portno = "";
	
	if ( location.port != "" )
	{
		portno = ":" + location.port;
	}
	switch ( strProcessCode )
	{
		/*--------------------*/
		/* HTTPS化 yuk.suzuki */
		/*--------------------*/
		case "SignIn":
			Js_Launch_Popup( "https://"+location.hostname+"/account/Popup_signIn.aspx", 500, 700, "yes", "yes", "yes", "JsPopUp_SignIn_Cr" );
			break;
		case "SignOut":
			Js_Launch_Popup( "https://"+location.hostname+"/account/Popup_signOut.aspx?direct=on", 500, 300, "yes", "yes", "yes", "JsPopUp_SignOut" );
			break;
		case "SignOutNonRidirect":
			Js_Launch_Popup( "https://"+location.hostname+"/account/Popup_signOut.aspx", 500, 300, "yes", "yes", "yes", "JsPopUp_SignOut" );
			break;
		case "Help":
		    Js_Launch_Popup( "/help/help.html?help=qaa0000", 827, 600, "yes", "yes", "yes", "JsPopUp_Help" );
		    break;
		case "ImageDetails":
		    js_Launch_Popup( "", 750, 500, "yes", "yes", "yes", "JsPopUp_RightManaged" );
		    break;
		case "SignInMail":
			alert("送信先を変更する前にログインが必要です。");
			Js_Launch_Popup( "https://"+location.hostname+"/account/Popup_signIn.aspx?signInFrom=mailmagazine", 500, 700, "yes", "yes", "yes", "JsPopUp_SignIn_Cr" );
			break;
		case "SignInMail2":
			Js_Launch_Popup( "https://"+location.hostname+"/account/Popup_signIn.aspx?signInFrom=mailmagazine&RegistMailMagazine=Regist", 500, 700, "yes", "yes", "yes", "JsPopUp_SignIn_Cr" );
			break;
		case "SignInTop":
			Js_Launch_Popup( "https://"+location.hostname+"/account/Popup_signIn.aspx?signInFrom=signIntop&direct=on", 500, 700, "yes", "yes", "yes", "JsPopUp_SignIn_Cr" );
			break;
		case "SignInTopNonRidirect":
			Js_Launch_Popup( "https://"+location.hostname+"/account/Popup_signIn.aspx?signInFrom=signIntop", 500, 700, "yes", "yes", "yes", "JsPopUp_SignIn_Cr" );
			break;			
		case "searchEditEstimateLogin":
			Js_Launch_Popup( "https://"+location.hostname+"/account/Popup_signIn.aspx?signInFrom=searchEditEstimateLogin&direct=on", 500, 700, "yes", "yes", "yes", "JsPopUp_SignIn_Cr" );
			break;	

		case "SignInTopFromTpoint":
			Js_Launch_Popup( "https://"+location.hostname+"/account/Popup_signIn.aspx?signInFrom=signIntop&direct=on&fromTpoint=1", 500, 700, "yes", "yes", "yes", "JsPopUp_SignIn_Cr" );
			break;
			
		case "SignInTopFromSatsueiTop":
			Js_Launch_Popup( "https://"+location.hostname+"/account/Popup_signIn.aspx?signInFrom=signIntop&direct=on&fromSatsuei=1", 500, 700, "yes", "yes", "yes", "JsPopUp_SignIn_Cr" );
			break;

		case "SignInToCart":
			Js_Launch_Popup( "https://"+location.hostname+"/account/Popup_signIn.aspx?signInFrom=signIntop&direct=on&gotoCart=1", 500, 700, "yes", "yes", "yes", "JsPopUp_SignIn_Cr" );
			break;
	}
}

function Js_Launch_Popup(url, w, h, st, sc, rs, name)
{
	//alert("EventNavigation.js:Js_Launch_Popup:" + url)
	//今すぐ購入機能、非window.open 対応
	var indexOfaspx = url.toLowerCase().indexOf(".aspx");
	var indexOfprocessoraspx =url.toLowerCase().indexOf("orderbox/popup/processor.aspx");
	var indexOfDirectPurchaseNo =url.toLowerCase().indexOf("directpurchase=no");
	var indexOfDirectPurchase =url.toLowerCase().indexOf("directpurchase");

	if (indexOfprocessoraspx>-1 && indexOfprocessoraspx<indexOfaspx )
	{	
		if (indexOfDirectPurchase>-1 && indexOfDirectPurchaseNo==-1)
		{
			//親のさらに親に、購入画面を表示させる
			try
			{
				window.opener.opener.location.href=url;

				window.opener.opener.blur();
				window.opener.opener.focus();
			}
			catch(e)
			{
			}
		}
		else
		{
			//購入画面を表示
			window.location.href=url;
			window.blur();
			window.focus();
		}
		return true;
	}

	// 中央座標
	var left = Math.floor((screen.width - w) / 2);
	var top  = Math.floor((screen.height - h) / 2);
	
	// ウインドウを開く
	if (document.all) 
	{
		var win = window.open(url, name, "width="+w+",height="+h+",status="+st+",scrollbars="+sc+",resizable="+rs+",left="+left+",top="+top);
	}
	else
	{
		var win = window.open(url, name, "width="+w+",height="+h+",status="+st+",scrollbars="+sc+",resizable="+rs+",screenX="+left+",screenY="+top);
	}
	// ウインドウを前面に移動
	try {
		if( win ) 
		{
			win.focus();
	}
	
	PopUpWindow_Js_Launch_Popup=win;
	
	} catch(e) {}
	return true;
}



function Js_Launch_Popup2(url, w, h, st, sc, rs, name)
{

	// 中央座標
	var left = Math.floor((screen.width - w) / 2);
	var top  = Math.floor((screen.height - h) / 2);
	
	// ウインドウを開く
	if (document.all) 
	{
		 winJs_Launch_Popup = window.open(url, name, "width="+w+",height="+h+",status="+st+",scrollbars="+sc+",resizable="+rs+",left="+left+",top="+top);
	}
	else
	{
		 winJs_Launch_Popup = window.open(url, name, "width="+w+",height="+h+",status="+st+",scrollbars="+sc+",resizable="+rs+",screenX="+left+",screenY="+top);
	}
	// ウインドウを前面に移動
	winJs_Launch_Popup.focus();
	return true;
}

function Js_FrameDown_Open( blnReturnValueNeeded, strBoxMode, strBoxType, strBoxHandle, strBoxLabel, int_SignedIn)
{
    var str_Self;
    var	strstr_BoxHandle;

	str_Index = "0";
	if ( ( strBoxMode != "0" ) && ( strBoxMode != "1" ) && ( strBoxMode != "2" ) )
	{
		strBoxMode = "0";
	}
	switch ( strBoxMode )
	{
	    case "1":
			// 新ライトボックス(フレーム外しの場合)
			if (self.location.href == self.parent.location.href) {
				closeLargePage(true);
				return false;
			}
	        str_RedirectUrl = "/" + strBoxType + "/OpenMiddle.aspx";
	        if ( strBoxType == "LightBox" )
	        {
			    str_RedirectUrl = str_RedirectUrl + "?BoxHandle=" + strBoxHandle + "&BxLbl=" + strBoxLabel;
	        }
	        break;
	    case "2":
	        str_RedirectUrl = "/" + strBoxType + "/OpenLarge.aspx";
	        if ( strBoxType == "LightBox" )
	        {
	            str_RedirectUrl = str_RedirectUrl + "?BoxHandle=" + strBoxHandle + "&BxLbl=" + strBoxLabel;
	        }
			// フレーム外し対応
			if (self.location.href == self.parent.location.href) {
				if (strBoxHandle == "") {
					str_RedirectUrl = "/" + strBoxType + "/OpenLarge.aspx" + "?BoxHandle=" + getSelectedLightbox() + "&BxLbl=" + strBoxLabel;
				}
				location.href = str_RedirectUrl
				return false;
			}
	        break;
	}
	str_Self = new String( self.location );
	if ( navigator.userAgent.toUpperCase().indexOf("MAC") != -1 && navigator.userAgent.toUpperCase().indexOf("MSIE 5") != -1 ) {
		str_Index = "1";
	}
	else if ( navigator.userAgent.toUpperCase().indexOf("MAC") != -1 ) {
		str_Index = "1";
	}
	else if ( navigator.userAgent.toUpperCase().indexOf("CHROME") != -1 ) {
		str_Index = "1";
	}
	else {
		if ( self.frameElement.offsetHeight == 31 ) {			// Small
			if ( strBoxMode == "0" ) {
				str_Index = "0";
			}
			else {
				str_Index = "1";
			}
		}
        //'ThreeDimension:3D---------------------------------------------------------
        //'110527 qzc kawashima 修正.
		//else if ( self.frameElement.offsetHeight == 145 ) {		// Middle
		else if ( self.frameElement.offsetHeight == 165 ) {		// Middle
        //'---------------------------------------------------------ThreeDimension:3D
			if ( strBoxMode == "1" ) {
				str_Index = "0";
			}
			else {
				str_Index = "1";
			}
		}
		else {													// Large
			if ( strBoxMode == "2" ) {
				str_Index = "0";
			}
			else {
				str_Index = "1";
			}
		}
	}
	if ( str_Index == "1" ) {
		str_RedirectUrl = "/index.aspx?BoxMode=" + strBoxMode + "&BxTyp=" + strBoxType;
	    if ( strBoxType == "LightBox" )
	    {
			strstr_BoxHandle = strBoxHandle;
			if ( strBoxHandle == '' ) {
				if ( document.getElementById('ddl_MyLightBox') == null ) {
				}
				else {
					strstr_BoxHandle = document.getElementById('ddl_MyLightBox').value;
				}
			}
	        str_RedirectUrl = str_RedirectUrl + "&BoxHandle=" + strstr_BoxHandle + "&BxLbl=" + strBoxLabel;
	    }
		self.parent.top.location.href = str_RedirectUrl;
	}
	else {
		self.location.href = str_RedirectUrl;
	}
	bln_ToReturn = false;
	if ( blnReturnValueNeeded )
	{
	    return bln_ToReturn;
	}
}
/*
function Js_FrameDown_Open( blnReturnValueNeeded, strBoxMode, strBoxType, strBoxHandle, strBoxLabel, int_SignedIn )
{
    var bln_ToReturn = false;
    var bln_ReloadNeeded = true;
    var str_TopLocation = "";    
    var str_TopLocationPathName = "";
    var str_TopLocationSearch = "";
    var str_FrameBodyLocation_Path = "";
    var str_FrameBodyLocation_Query = "";
    var obj_QueryString;
    var arr_CurrentFrameDown_Details;
    var str_RedirectUrl = "";
    var str_UrlDetails_FrameBody = "";
    var str_UrlDetails_FrameDown = "";
    var str_Url_CurrentFrameDown = "";
    var str_Url_CurrentFrameBody = "";
    var str_LocationHost = "";
    var str_CurrentFrameDown_BoxMode = "";
    var str_CurrentFrameDown_BoxType = "";
    var str_CurrentFrameDown_BoxHandle = "";
    var str_CurrentFrameDown_BoxLabel = "";
    var ObjStr_Path_Top;
    var ObjStr_Path_Top_Url;
    var ObjStr_Path_Top_Search;
    var objStr_Path_FrameBody;
    var objStr_Path_FrameDown;
    var strObj_Temp;
    var strObj_Temp_002;
    
    str_LocationHost = self.document.location.host;
    str_UrlDetails_FrameBody = JsNavigation_Get_FrameBodyDetails( "Down" );
    str_UrlDetails_FrameDown = JsNavigation_Get_FrameDownDetails( "Down" );
    str_Url_CurrentFrameBody = JsNavigation_Get_FrameBodyDetails( "Down" );
    str_Url_CurrentFrameDown = JsNavigation_Get_FrameDownDetails( "Down" );
    arr_CurrentFrameDown_Details = ( new String( str_Url_CurrentFrameDown ) ).split( '.' );
    if ( arr_CurrentFrameDown_Details.length > 1 )
    {
        str_CurrentFrameDown_BoxMode = arr_CurrentFrameDown_Details[ 0 ];
        str_CurrentFrameDown_BoxType = arr_CurrentFrameDown_Details[ 1 ];
        if ( arr_CurrentFrameDown_Details.length == 4 )
        {
            str_CurrentFrameDown_BoxHandle = arr_CurrentFrameDown_Details[ 2 ];
            str_CurrentFrameDown_BoxLabel = arr_CurrentFrameDown_Details[ 3 ];
        }
    }
	if ( ( str_CurrentFrameDown_BoxMode == strBoxMode ) && ( strBoxMode != "0" ) )
	{
	    if ( strBoxMode == "2" )
	    {
	        switch( str_CurrentFrameDown_BoxType )
	        {
	            case "PurchaseHistory":
	                bln_ReloadNeeded = false;
	                break;
	            case "GuestLight":
	                bln_ReloadNeeded = true;
	                break;
	            default:
	                bln_ReloadNeeded = false;
	                break;
	        }
	    }
	    else
	    {
	        switch( str_CurrentFrameDown_BoxType )
	        {
	            default:
	                bln_ReloadNeeded = false;
	                break;
	        }
	    }
	}
	else
	{
	    bln_ReloadNeeded = true;
	}
	if ( bln_ReloadNeeded )
	{
        switch( str_CurrentFrameDown_BoxType )
	    {
	        case "GuestLight":
	            str_TopLocation = "http://" + str_LocationHost + "/keyword/?PageRedirect=PhotoService";
	            break;
	        default:
	            str_TopLocation = self.parent.top.location;
	            break;
	    }
        ObjStr_Path_Top = new String( str_TopLocation );
        str_TopLocation = ObjStr_Path_Top.substring( ( ObjStr_Path_Top.lastIndexOf( str_LocationHost ) + str_LocationHost.length) , ObjStr_Path_Top.length );
        str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "BoxSize" );
        str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "BoxMode" );
        str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "BxMd" );
        str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "BxSz" );
        str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "BxHndl" );
        str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "BxLbl" );
        str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "PageRedirect" );
        ObjStr_Path_Top = new String( str_TopLocation );
        obj_QueryString = ObjStr_Path_Top.split( '?' );
        if ( obj_QueryString.length == 1 )
        {
            str_TopLocationPathName = obj_QueryString[0];
            str_TopLocationSearch = "";
        }
        else if ( obj_QueryString.length == 2 )
        {
            str_TopLocationPathName = obj_QueryString[0];
            str_TopLocationSearch = obj_QueryString[1];
            ObjStr_Path_Top_Search = new String( str_TopLocationSearch );
            if ( ObjStr_Path_Top_Search.indexOf( "PrcssTyp=SearchCdRom" ) > 0 )
            {
                switch ( strBoxType )
                {                
                    case "OrderBox":
                        str_TopLocationSearch = RemoveFrom_QueryString_PathSearchStringOnly( str_TopLocationSearch, "BxTyp" );
                        str_TopLocationSearch = RemoveFrom_QueryString_PathSearchStringOnly( str_TopLocationSearch, "FrmPgSrc" );
                        str_TopLocationSearch = str_TopLocationSearch + "&BxTyp=" + "order";
                        str_TopLocationSearch = RemoveFrom_QueryString_PathSearchStringOnly( str_TopLocationSearch, "FrmDwnDtls" );
                        break;
                    case "LightBox":
                        str_TopLocationSearch = RemoveFrom_QueryString_PathSearchStringOnly( str_TopLocationSearch, "BxTyp" );
                        str_TopLocationSearch = RemoveFrom_QueryString_PathSearchStringOnly( str_TopLocationSearch, "FrmPgSrc" );
                        str_TopLocationSearch = str_TopLocationSearch + "&BxTyp=" + "light";
                        str_TopLocationSearch = RemoveFrom_QueryString_PathSearchStringOnly( str_TopLocationSearch, "FrmDwnDtls" );
                        break;
                    default:
                        break;
                }
            }
        }
        strObj_Temp = new String( str_UrlDetails_FrameBody );
        str_UrlDetails_FrameBody = strObj_Temp.substring( ( strObj_Temp.lastIndexOf( str_LocationHost ) + str_LocationHost.length) , strObj_Temp.length );
        str_UrlDetails_FrameBody = RemoveFrom_QueryString( str_UrlDetails_FrameBody, "BoxSize" );
        str_UrlDetails_FrameBody = RemoveFrom_QueryString( str_UrlDetails_FrameBody, "BoxMode" );
        str_UrlDetails_FrameBody = RemoveFrom_QueryString( str_UrlDetails_FrameBody, "BxMd" );
        str_UrlDetails_FrameBody = RemoveFrom_QueryString( str_UrlDetails_FrameBody, "BxSz" );
        str_UrlDetails_FrameBody = RemoveFrom_QueryString( str_UrlDetails_FrameBody, "BxHndl" );
        str_UrlDetails_FrameBody = RemoveFrom_QueryString( str_UrlDetails_FrameBody, "BxLbl" );
        if ( ( new String( str_UrlDetails_FrameBody ) ).split( '?' ).length > 1 )
        {
        }
        else
        {
            str_UrlDetails_FrameBody = str_UrlDetails_FrameBody + "?";
        }
        if ( strBoxType == "OrderBox" )
        {
            str_UrlDetails_FrameBody = ( new String( str_UrlDetails_FrameBody ) ).replace( "BxTyp=LightBox", "BxTyp=OrderBox" );
            str_UrlDetails_FrameBody = ( new String( str_UrlDetails_FrameBody ) ).replace( "OrdrBxOpnLrgSrchCdrm", "OrdrBxOpnLrg" );
            str_UrlDetails_FrameBody = ( new String( str_UrlDetails_FrameBody ) ).replace( "LghtBxOpnLrgSrchCdrm", "OrdrBxOpnLrg" );
            str_UrlDetails_FrameBody = RemoveFrom_QueryString( str_UrlDetails_FrameBody, "FrmDwnDtls" );            
        }
        else if ( strBoxType == "LightBox" )
        {
            str_UrlDetails_FrameBody = ( new String( str_UrlDetails_FrameBody ) ).replace( "BxTyp=OrderBox", "BxTyp=LightBox" );
            str_UrlDetails_FrameBody = ( new String( str_UrlDetails_FrameBody ) ).replace( "LghtBxOpnLrgSrchCdrm", "LghtBxOpnLrg" );
            str_UrlDetails_FrameBody = ( new String( str_UrlDetails_FrameBody ) ).replace( "OrdrBxOpnLrgSrchCdrm", "LghtBxOpnLrg" );
            str_UrlDetails_FrameBody = RemoveFrom_QueryString( str_UrlDetails_FrameBody, "FrmDwnDtls" );            
        }
        obj_QueryString = ( new String( str_UrlDetails_FrameBody ) ).split( '?' );
        if ( obj_QueryString.length == 1 )
        {
            str_FrameBodyLocation_Path = obj_QueryString[0];
            str_FrameBodyLocation_Query = "";
        }
        else if ( obj_QueryString.length == 2 )
        {
            str_FrameBodyLocation_Path = obj_QueryString[0];
            str_FrameBodyLocation_Query = obj_QueryString[1];
        }
        if ( ( strBoxMode != "0" ) && ( strBoxMode != "1" ) && ( strBoxMode != "2" ) )
        {
            strBoxMode = "0";
        }
        str_UrlDetails_FrameDown = strBoxMode + "." + strBoxType;
        if ( strBoxHandle != "" )
        {
            str_UrlDetails_FrameDown = str_UrlDetails_FrameDown + "." + strBoxHandle;
            if ( strBoxLabel != "" )
            {
                str_UrlDetails_FrameDown = str_UrlDetails_FrameDown + "." + strBoxLabel;
            }
        }
        else
        {
            if ( strBoxType == "LightBox" )
            {
                if ( ( str_CurrentFrameDown_BoxHandle != "" ) && ( str_CurrentFrameDown_BoxLabel != "" ) )
                {
                    str_UrlDetails_FrameDown = str_UrlDetails_FrameDown + "." + str_CurrentFrameDown_BoxHandle + "." + str_CurrentFrameDown_BoxLabel;
                }
            }
        }
	    str_RedirectUrl = "/common/LaunchFrame.aspx?TpPth=" + escape( str_TopLocationPathName ) + "&TpQry=" + escape( str_TopLocationSearch );
	    str_RedirectUrl = str_RedirectUrl + "&FrmBdyPth=" + escape( str_FrameBodyLocation_Path );
	    str_RedirectUrl = str_RedirectUrl + "&FrmBdyQry=" + escape( str_FrameBodyLocation_Query );
	    str_RedirectUrl = str_RedirectUrl + "&FrmDwnDtls=" + escape( str_UrlDetails_FrameDown );
	    self.parent.top.location.href = str_RedirectUrl;
	}
	else
	{
	    switch ( strBoxMode )
	    {
	        case "1":
	            str_RedirectUrl = "/" + strBoxType + "/OpenMiddle.aspx";
	            if ( strBoxType == "LightBox" )
	            {
	                str_RedirectUrl = str_RedirectUrl + "?BxHndl=" + strBoxHandle + "&BxLbl=" + strBoxLabel;
	            }
	            break;
	        case "2":
	            str_RedirectUrl = "/" + strBoxType + "/OpenLarge.aspx";
	            if ( strBoxType == "LightBox" )
	            {
	                str_RedirectUrl = str_RedirectUrl + "?BxHndl=" + strBoxHandle + "&BxLbl=" + strBoxLabel;
	            }
	            break;
	    }
	    self.location.href = str_RedirectUrl;
	}
	bln_ToReturn = false;
	if ( blnReturnValueNeeded )
	{
	    return bln_ToReturn;
	}
}
*/

function JsNavigation_Get_FrameBodyDetails( strClickSource )
{   
    var obj_Url_Top;
    var obj_FrameBody;
    var int_FramesCount = 0;
    var str_FrameBody_Url = "";
    var arr_FrameBodyPath;
  
    switch ( strClickSource )
    {
        case "Body":
            obj_Url_Top = self.parent.top;
            break;
        case "Down":
            obj_Url_Top = self.parent.top;
            break;
        case "Body_PopUp":
            obj_Url_Top = self.opener.parent.top;
            break;
        case "Down_PopUp":
            obj_Url_Top = self.opener.parent.top;
            break;
    }
    int_FramesCount = obj_Url_Top.frames.length;
    if (self != obj_Url_Top && int_FramesCount == 2)
    {
        obj_FrameBody = obj_Url_Top.frames[ 0 ];
        
        if ( obj_FrameBody.name == "body" )
        {
            str_FrameBody_Url = obj_FrameBody.location;
        }
    }
    else
    {
    }
    return str_FrameBody_Url;
}

function JsNavigation_Get_FrameDownDetails( strClickSource )
{   
    var obj_Url_Top;
    var obj_FrameDown;
    var int_PopUp_Width = 0;
    var int_PopUp_Height = 0;
    var int_PopUp_Position_Top = 0;
    var int_PopUp_Position_Left = 0;
    var int_FramesCount = 0;
    var str_PageType = "";
    var str_ProcessType = "";
    var str_FrameDown_Url = "";
    var str_FrameDown_PageType = "";
    var str_FrameDown_BoxMode = "";
    var str_FrameDown_BoxHandle = "";
    var str_FrameDown_BoxLabel = "";
    var arr_FrameDownPath;
    var obj_DdlMyLightBox;
    
    switch ( strClickSource )
    {
        case "Body":
            obj_Url_Top = self.parent.top;
            break;
        case "Down":
            obj_Url_Top = self.parent.top;
            break;
        case "Body_PopUp":
            obj_Url_Top = self.opener.parent.top;
            break;
        case "Down_PopUp":
            obj_Url_Top = self.opener.parent.top;
            break;
    }
    int_FramesCount = obj_Url_Top.frames.length;
    if ( self != obj_Url_Top && int_FramesCount == 2)
    {
        obj_FrameDown = obj_Url_Top.frames[ 1 ];
        if ( obj_FrameDown.name == "down" )
        {
            str_FrameDown_Url = obj_FrameDown.location;
            str_PageType = JsNavigation_Decipher_FrameDown_PageType( str_FrameDown_Url );
            if ( str_PageType.indexOf( "OrderBox" ) == 2 )
            {
            }
            else if ( str_PageType.indexOf( "LightBox" ) == 2 )
            {
                obj_DdlMyLightBox = obj_FrameDown.document.forms[ 0 ].ddl_MyLightBox;
                str_FrameDown_BoxHandle = obj_DdlMyLightBox.options[ obj_DdlMyLightBox.selectedIndex ].value;
                str_FrameDown_BoxLabel = obj_DdlMyLightBox.options[ obj_DdlMyLightBox.selectedIndex ].text;
                str_PageType = str_PageType + "." + str_FrameDown_BoxHandle + "." + str_FrameDown_BoxLabel;
            }
        }
    }
    else
    {
    }
    return str_PageType;
}

function RemoveFrom_QueryString_PathSearchStringOnly( strUrl, strName )
{
	var str_PathUrl = "";
	var str_Query = "";
	var obj_Url;
	var ObjStr_Temp = new String( strUrl );

	str_Query = strUrl;
	if ( str_Query.length > 0 )
	{
		var params = str_Query.split("&");
		var count = 0;
		str_Query = "";
		
		for ( i = 0; i < params.length; i++ )
		{
		    if ( params[i].indexOf( strName + "=" ) == 0 )
		    {
		        // あり
		    }
		    else
		    {
		        str_Query = AddTo_StringList( str_Query, params[i], "&" );
		    }
		}
	}
	return str_Query;
}

function RemoveFrom_QueryString( strUrl, strName )
{
	var str_PathUrl = "";
	var str_Query = "";
	var obj_Url;
	var ObjStr_Temp = new String( strUrl );

	obj_Url = ObjStr_Temp.split("?");
	if ( obj_Url.length == 1 )
	{
	    str_PathUrl = obj_Url[0];
		str_Query = "";
	}
	else if ( obj_Url.length == 2 )
	{
	    str_PathUrl = obj_Url[0];
		str_Query = obj_Url[1];
	}
	if ( str_Query.length > 0 )
	{
		var params = str_Query.split("&");
		var count = 0;

		str_Query = "";
		for ( i = 0; i < params.length; i++ )
		{
		    if ( params[i].indexOf( strName + "=" ) == 0 )
		    {
		        // あり
		    }
		    else
		    {
		        str_Query = AddTo_StringList( str_Query, params[i], "&" );
		    }
		}
	}
	if ( str_Query != "" )
	{
	    str_PathUrl = str_PathUrl + "?" + str_Query;
	}
	return str_PathUrl;
}

function JsNavigation_Decipher_FrameDown_PageType( strUrlStringParam )
{
    var str_ToReturn = "";
    var strUrlString = new String( strUrlStringParam );

    if ( strUrlString != "" )
    {
        if ( strUrlString.toLowerCase().indexOf( "account/signin" ) > 0 )
        {
            // box mode 0; no cookie
            str_ToReturn = "0.SignIn";
        }
        else if ( strUrlString.toLowerCase().indexOf( "navigation" ) > 0 )
        {
            // box mode 0; cookie exists/signed in
            str_ToReturn = "0.Navigation";
        }
        else if ( strUrlString.toLowerCase().indexOf( "orderbox/openmiddle" ) > 0 )
        {
            // box mode 1; cookie exists/signed in
            str_ToReturn = "1.OrderBox";
        }
        else if ( strUrlString.toLowerCase().indexOf( "lightbox/openmiddle" ) > 0 )
        {
            // box mode 1; cookie exists/signed in
            str_ToReturn = "1.LightBox";
        }
        else if ( strUrlString.toLowerCase().indexOf( "orderbox/openlarge" ) > 0 )
        {
            // box mode 2; cookie exists/signed in
            str_ToReturn = "2.OrderBox";
        }
        else if ( strUrlString.toLowerCase().indexOf( "lightbox/openlarge" ) > 0 )
        {
            // box mode 2; cookie exists/signed in
            str_ToReturn = "2.LightBox";
        }
        else if ( strUrlString.toLowerCase().indexOf( "purchasehistory" ) > 0 )
        {
            // box mode 2; cookie exists/signed in
            str_ToReturn = "2.PurchaseHistory";
        }
        else if ( strUrlString.toLowerCase().indexOf( "guest/lightbox" ) > 0 )
        {
            str_ToReturn = "2.GuestLight";
        }
    }
    return str_ToReturn;
}

function AddTo_String( strList, strToAdd, strAddKey )
{
    if ( strList == "" )
    {
        strList = strToAdd;
    }
    else
    {
        strList = strList + strAddKey + strToAdd;
    }
    return strList;
}

function AddTo_StringList( strList, strToAdd, strAddKey )
{
    if ( strList == "" )
    {
        strList = strToAdd;
    }
    else
    {
        strList = strList + strAddKey + strToAdd;
    }
    return strList;
}

function Js_BoxClose( strBoxType, blnReturnValueNeeded, strFrameSize, intSignedIn )
{
	//alert strBoxType;
	// フレーム外し対応
	if (self.location.href == self.parent.location.href) {
		closeLargePage(false);
	} else {
		self.parent.top.location.href = "/index.aspx?BoxMode=0";
		bln_ToReturn = false;
		if ( blnReturnValueNeeded )
		{
			return bln_ToReturn;
		}
	}
}
/*
function Js_BoxClose( strBoxType, blnReturnValueNeeded, strFrameSize, intSignedIn )
{
    var bln_ToReturn = false;
    var bln_ReloadNeeded = true;
    var str_TopLocation = "";
    var str_TopLocationPathName = "";
    var str_TopLocationSearch = "";
    var str_FrameBodyLocation_Path = "";
    var str_FrameBodyLocation_Query = "";
    var obj_QueryString;
    var arr_CurrentFrameDown_Details;
    var str_RedirectUrl = "";
    var str_UrlDetails_FrameBody = "";
    var str_UrlDetails_FrameDown = "";
    var str_Url_CurrentFrameDown = "";
    var str_LocationHost = "";
    var str_CurrentFrameDown_BoxMode = "";
    var str_CurrentFrameDown_BoxType = "";
    var strObj_Temp;

    str_LocationHost = self.document.location.host;
    str_Url_CurrentFrameDown = JsNavigation_Get_FrameDownDetails( "Down" );
    arr_CurrentFrameDown_Details = ( new String( str_Url_CurrentFrameDown ) ).split( '.' );
    if ( arr_CurrentFrameDown_Details.length > 1 )
    {
        str_CurrentFrameDown_BoxMode = arr_CurrentFrameDown_Details[ 0 ];
        str_CurrentFrameDown_BoxType = arr_CurrentFrameDown_Details[ 1 ];
    }
    // 常に「true」
	if ( bln_ReloadNeeded )
	{
        switch( str_CurrentFrameDown_BoxType )
	    {
	        case "GuestLight":
	            str_TopLocation = "http://" + str_LocationHost + "/keyword/?PageRedirect=PhotoService";
	            break;
	        default:
	            str_TopLocation = self.parent.top.location;
	            break;
	    }
        strObj_Temp = new String( str_TopLocation );
        str_TopLocation = strObj_Temp.substring( ( strObj_Temp.lastIndexOf( str_LocationHost ) + str_LocationHost.length) , strObj_Temp.length );
        str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "BoxSize" );
        str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "BoxMode" );
        str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "BxMd" );
        str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "BxSz" );
        str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "BxHndl" );
        str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "BxLbl" );
        obj_QueryString = ( new String( str_TopLocation ) ).split( '?' );
        if ( obj_QueryString.length == 1 )
        {
            str_TopLocationPathName = obj_QueryString[0];
            str_TopLocationSearch = "";
        }
        else if ( obj_QueryString.length == 2 )
        {
            str_TopLocationPathName = obj_QueryString[0];
            str_TopLocationSearch = obj_QueryString[1];
        }
        str_UrlDetails_FrameBody = JsNavigation_Get_FrameBodyDetails( "Down" );
        strObj_Temp = new String( str_UrlDetails_FrameBody );
        str_UrlDetails_FrameBody = strObj_Temp.substring( ( strObj_Temp.lastIndexOf( str_LocationHost ) + str_LocationHost.length) , strObj_Temp.length );
        str_UrlDetails_FrameBody = RemoveFrom_QueryString( str_UrlDetails_FrameBody, "BoxSize" );
        str_UrlDetails_FrameBody = RemoveFrom_QueryString( str_UrlDetails_FrameBody, "BoxMode" );
        str_TopLocation = RemoveFrom_QueryString( str_UrlDetails_FrameBody, "BxMd" );
        str_TopLocation = RemoveFrom_QueryString( str_UrlDetails_FrameBody, "BxSz" );
        str_TopLocation = RemoveFrom_QueryString( str_UrlDetails_FrameBody, "BxHndl" );
        str_TopLocation = RemoveFrom_QueryString( str_UrlDetails_FrameBody, "BxLbl" );
        obj_QueryString = ( new String( str_UrlDetails_FrameBody ) ).split( '?' );
        if ( obj_QueryString.length == 1 )
        {
            str_FrameBodyLocation_Path = obj_QueryString[0];
            str_FrameBodyLocation_Query = "";
        }
        else if ( obj_QueryString.length == 2 )
        {
            str_FrameBodyLocation_Path = obj_QueryString[0];
            str_FrameBodyLocation_Query = obj_QueryString[1];
        }
        strBoxMode = "0";
        str_UrlDetails_FrameDown = "0.Navigation";
	    str_RedirectUrl = "/common/LaunchFrame.aspx?TpPth=" + escape(str_TopLocationPathName) + "&TpQry=" + escape(str_TopLocationSearch);
	    str_RedirectUrl = str_RedirectUrl + "&FrmBdyPth=" + escape( str_FrameBodyLocation_Path );
	    str_RedirectUrl = str_RedirectUrl + "&FrmBdyQry=" + escape( str_FrameBodyLocation_Query );
	    str_RedirectUrl = str_RedirectUrl + "&FrmDwnDtls=" + escape( str_UrlDetails_FrameDown );
	    self.parent.top.location.href = str_RedirectUrl;
	}
	bln_ToReturn = false;
	if ( blnReturnValueNeeded )
	{
	    return bln_ToReturn;
	}
}
*/

function Replace_QueryStringValue( strUrl, strName, strValue )
{
	var str_PathUrl = "";
	var str_Query = "";
	
	index = strUrl.indexOf("?");
	
	if ( index >= 0 )
	{
		str_PathUrl = strUrl.substring( 0, index );
		str_Query = strUrl.substring( index + 1 );
	}
	else
	{
		str_PathUrl = strUrl;
		str_Query = "";
	}

	// name=xxxを削除
	if ( str_Query.length > 0 )
	{
		var params = str_Query.split("&");
		var count = 0;
		str_Query = "";
	}
	
	// name=xxx を追加
	if ( str_Query.length == 0 )
	{
		str_Query += "?";
	}
	else
	{
		str_Query += "&";
	}
	
	str_Query += strName + "=" + strValue;
	str_PathUrl += str_Query;

	return str_PathUrl;
}

//Tポイント連携開始ページでSubmit前チェック処理
function checkBeforeOpenTSite()
{
	if(document.forms[0].chkOpenTSite.checked)
	{
		if(document.getElementById("PnlAfterLogin"))
		{
			document.forms[0].submit();
			return true;
		}
		else
		{
			if(document.getElementById("PnlFin"))
			{
				alert("既にTログインIDと連携済みです");
			}
			else
			{
				Js_Dispatcher( 'SignInTopFromTpoint' );
				//alert("ログインしてください。");
			}
		}
	}
	else
	{
		alert("重要事項の説明に同意してください。");
	}
	return false;
}

function TpointWindowManage(a)
{

	var p=a || 0;
	var win;
	switch(p)
	{
		case 0:
			win=window.open("/TPoint/index.aspx", "tpointIndex");
			break;
		case 1:
			win=window.open("/TPoint/alliance/index.aspx", "tpointAllianceIndex");
			break;
	}
	try {
		if( win ) win.focus();
		if( win.document ) win.document.focus();
	} catch(e) {}
	return true;
}
function JS_Display_Message_NoItem_LightBox(ddlLightBox) {
    alert('ライトボックスに作品が無いため送信できません。');
    ddlLightBox.focus();
    return false;
}
