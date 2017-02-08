//EventFrameDown.js
function Js_AdjustImage_LightBox_ViaImageLink( strMiddleOrLarge )
{
	var arr_Images = new Array();
	var str_ImageMaxDimension = "0";
	var str_ElementName = "";
	var obj_Element;
	var obj_ImageElement;
	var i = 0;

	if ( strMiddleOrLarge == "1" )
	{
	    str_ImageMaxDimension = '64';
	}
	else
	{
	    str_ImageMaxDimension = '130';
	}
	arr_Images = document.images;
	for ( i = 0; i < arr_Images.length; i++ )
	{
	    obj_Element = arr_Images[ i ];
	    if ( obj_Element.src.match(/cache2.amana.jp/) )
	    {
	        obj_ImageElement = obj_Element;
	        if ( obj_ImageElement.width > obj_ImageElement.height )
		    {
		        if ( parseInt( obj_ImageElement.width ) > parseInt( str_ImageMaxDimension ) )
		        {
		            eval( "obj_ImageElement.width = '" + str_ImageMaxDimension + "';" );
		        }
		    }
		    else
		    {
		        if ( parseInt( obj_ImageElement.height ) > parseInt( str_ImageMaxDimension ) )
		        {
		            eval( "obj_ImageElement.height = '" + str_ImageMaxDimension + "';" );
		        }
		    }
	    }
	}
}

function Js_AdjustImage_LightBox( strMiddleOrLarge )
{
	var arr_Images = new Array();
	var str_ImageMaxDimension = "0";

	if ( strMiddleOrLarge == "1" )
	{
	    str_ImageMaxDimension = '64';
	}
	else
	{
	    str_ImageMaxDimension = '130';
	}
	arr_Images = document.getElementsByName("imgThumbnail");
	for ( var i = 0; i < arr_Images.length; i++ )
	{
		if ( arr_Images[i].width > arr_Images[i].height )
		{
		    if ( parseInt( arr_Images[i].width ) > parseInt( str_ImageMaxDimension ) )
		    {
		        eval( "arr_Images[i].width = '" + str_ImageMaxDimension + "';" );
		    }
		}
		else
		{
		    if ( parseInt( arr_Images[i].height ) > parseInt( str_ImageMaxDimension ) )
		    {
		        eval( "arr_Images[i].height = '" + str_ImageMaxDimension + "';" );
		    }
		}
	}
}

function Js_AdjustImage_OrderBox( strMiddleOrLarge )
{
	var arr_Images = new Array();
	var str_ImageMaxDimension = "0";

	if ( strMiddleOrLarge == "1" )
	{
	    str_ImageMaxDimension = '64';
	}
	else if ( strMiddleOrLarge == "2" )
	{
	    str_ImageMaxDimension = '130';
	}
	arr_Images = document.getElementsByName("imgThumbnail");
	for ( var i = 0; i < arr_Images.length; i++ )
	{
		if ( arr_Images[i].width > arr_Images[i].height )
		{
		    if ( parseInt( arr_Images[i].width ) > parseInt( str_ImageMaxDimension ) )
		    {
		        eval( "arr_Images[i].width = '" + str_ImageMaxDimension + "';" );
		    }
		}
		else
		{
		    if ( parseInt( arr_Images[i].height ) > parseInt( str_ImageMaxDimension ) )
		    {
		        eval( "arr_Images[i].height = '" + str_ImageMaxDimension + "';" );
		    }
		}
	}
}

function Js_LoadOnChange_OrderBox( str_FrameSize, str_BoxFlag )
{
    var bln_ReturnValueNeeded = false;
    var bln_ToReturn = false;
    var str_TopLocation = top.location;
    var obj_QueryString;
    var str_TopLocationPathName = "";
    var str_TopLocationSearch = "";
    var str_RedirectUrl = "";

    str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "BoxSize" );
    str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "BoxMode" );
    obj_QueryString = str_TopLocation.split( "?" );
    if ( obj_QueryString.length == 1 )
    {
        str_TopLocationPathName = obj_QueryString[0];
        str_TopLocationSearch = "?BoxMode=" + str_FrameSize;
    }
    else if ( obj_QueryString.length == 2 )
    {
        str_TopLocationPathName = obj_QueryString[0];
        str_TopLocationSearch = obj_QueryString[1];
        str_TopLocationSearch = AddTo_String( str_TopLocationSearch, "BoxMode=" + str_FrameSize, "&" );
    }
    if ( ( str_FrameSize != "0" ) && ( str_FrameSize != "1" ) && ( str_FrameSize != "2" ) )
    {
        str_FrameSize = "0";
    }    
	switch ( str_BoxFlag )
	{
		case "LightBox":
		    str_RedirectUrl = "/common/openframe.aspx?BoxMode=" + str_FrameSize + "&open=lightbox&pathname=" + escape(str_TopLocationPathName) + "&search=" + escape(str_TopLocationSearch);
			top.location.href = str_RedirectUrl;
			bln_ToReturn = false;
			break;
		case "OrderBox":
		    if ( int_SignedIn == 0 )
		    {
		        str_RedirectUrl = "/account/SignIn.aspx?Purpose=OrderBox";
		        document.location = str_RedirectUrl;
			    bln_ToReturn = false;
		    }
		    else
		    {
		        str_RedirectUrl = "/common/openframe.aspx?BoxMode=" + str_FrameSize + "&open=orderbox&pathname=" + escape(str_TopLocationPathName) + "&search=" + escape(str_TopLocationSearch);
		        top.location.href = str_RedirectUrl;
			    bln_ToReturn = false;
		    }
		    break;
	}
	if ( bln_ReturnValueNeeded )
	{
	    return bln_ToReturn;
	}
}

function Js_LightBox_Large_HideLayers()
{
    // 多分「/scripts/layer.js」に定義されてる"function"だと想定
    hideLayer('layer01');
    hideLayer('layer02');
    hideLayer('layer03');
    hideLayer('layer04');
}

function Js_FrameDown_BodyOnLoad_LightBox( strMiddleOrLarge, strBoxHandle )
{
    var obj_Form = document.forms[0];
    var str_BoxHandle = "";
    var str_PageControl_PageHandle = "";
    var str_PageControl_DisplaySize = "";

    if ( strMiddleOrLarge == "1" )
    {
        eval( "Js_AdjustImage_LightBox( '" + strMiddleOrLarge + "' );" );
    }
    else if ( strMiddleOrLarge == "2" )
    {
//		Js_LightBox_Large_HideLayers();
        eval( "Js_AdjustImage_LightBox_ViaImageLink( '" + strMiddleOrLarge + "' );" );
    }
    if ( Js_HtmlFrameObject_Exists( "hddn_BoxHandle" ) && Js_HtmlFrameObject_Exists( "ddl_MyLightBox" ) )
    {
        str_BoxHandle = strBoxHandle;
        if ( str_BoxHandle != "" )
        {
            Js_FrameDown_SelectDropDownByValue( obj_Form.ddl_MyLightBox, str_BoxHandle );
        }
    }
    if ( strMiddleOrLarge == "1" )
    {
    }
    else if ( strMiddleOrLarge == "2" )
    {
//		Js_FrameDown_Load_MyLightBox( obj_Form.slct_EmailSend_MyLightBox, strBoxHandle );
        Js_FrameDown_BodyOnLoad_LightBox_LoadDataListLightBoxes( strBoxHandle );
    }
    str_PageControl_PageHandle = obj_Form.hddn_PageControl_PageHandle.value;
    str_PageControl_DisplaySize = obj_Form.hddn_PageControl_DisplaySize.value;
//    Js_FrameDown_SelectDropDownByValue( obj_Form.slct_PageDisplaySize, str_PageControl_DisplaySize );
}

function Js_FrameDown_GetLocalLightBoxes()
{
    // slct_CopyToLightBox
    var objSlct = document.forms[0].ddl_MyLightBox;
    var i = 0;
    var int_Max = objSlct.options.length;
    var str_ToReturn = "";
    var str_Temp = "";
    var obj_Option;

    for ( i = 0; i < int_Max; i++ )
    {
        obj_Option = objSlct.options[ i ];
        str_Temp = obj_Option.value + "_+_" + obj_Option.text;
        str_ToReturn = AddTo_String( str_ToReturn, str_Temp, "][" );
    }
    return str_ToReturn;
}

function Js_FrameDown_UnLoad_Select_All( obj_Select )
{
    var i = 0;

    for ( i = obj_Select.options.length; i > 0; i-- )
    {
        obj_Select.options[ i - 1 ] = null;
    }
}

function Js_FrameDown_Load_MyLightBox( objBoxToLoad, strBoxHandle )
{
    var obj_Form = document.forms[0];
    var obj_Element;
    var str_List = Js_FrameDown_GetLocalLightBoxes();
    var str_Temp = "";
    var int_MaxLength = 0;
    var arr_LightBoxData;
    var arr_Option;
    var i = 0;
    var j = 0;

    if ( str_List != "" )
    {
        arr_LightBoxData = str_List.split(/\]\[/);
        int_MaxLength = arr_LightBoxData.length;
        Js_FrameDown_UnLoad_Select_All( objBoxToLoad );
        for ( j = 0; j < int_MaxLength; j++ )
        {
            str_Temp = arr_LightBoxData[ j ];
            arr_Option = str_Temp.split(/_\+_/);
            objBoxToLoad.options[ j ] = new Option( arr_Option[ 1 ], arr_Option[ 0 ] );
            if ( arr_Option[ 0 ].replace( " ", "" ) == strBoxHandle.replace( " ", "" ) )
            {
                objBoxToLoad.options[ j ].selected = true;
            }
            else
            {
                objBoxToLoad.options[ j ].selected = false;
            }
        }        
    }
}

function Js_FrameDown_BodyOnLoad_LightBox_LoadDataListLightBoxes( strBoxHandle )
{
    var obj_Form = document.forms[0];
    var obj_Element;
    var str_List = Js_FrameDown_GetLocalLightBoxes();
    var str_Temp = "";
    var int_MaxLength = 0;
    var arr_LightBoxData;
    var arr_Option;
    var i = 0;
    var j = 0;

    if ( str_List != "" )
    {
        arr_LightBoxData = str_List.split(/\]\[/);
        int_MaxLength = arr_LightBoxData.length;
        for ( i = 0; i < obj_Form.elements.length; i++ )
        {
            obj_Element = obj_Form.elements[i];
            if ( obj_Element.name.match(/slct_CopyToLightBox/) )
            {
                Js_FrameDown_UnLoad_Select_All( obj_Element );
                for ( j = 0; j < int_MaxLength; j++ )
                {
                    str_Temp = arr_LightBoxData[ j ];
                    arr_Option = str_Temp.split(/_\+_/);
                    obj_Element.options[ j ] = new Option( arr_Option[ 1 ], arr_Option[ 0 ] );
                    if ( arr_Option[ 0 ].replace( " ", "" ) == strBoxHandle.replace( " ", "" ) )
                    {
                        obj_Element.options[ j ].selected = true;
                    }
                    else
                    {
                        obj_Element.options[ j ].selected = false;
                    }
                }
            }
        }        
    }
}

function Js_FrameDown_BodyOnLoad_LightBox_Middle( strMiddleOrLarge, strBoxHandle )
{
    var obj_Form = document.forms[0];
    var str_BoxHandle = "";

    if ( strBoxHandle != "" )
    {
        str_BoxHandle = strBoxHandle;
        Js_FrameDown_SelectDropDownByValue( obj_Form.ddl_MyLightBox, str_BoxHandle );
    }
    else
    {
        if ( Js_HtmlFrameObject_Exists( "hddn_BoxHandle" ) == true )
        {
            str_BoxHandle = obj_Form.hddn_BoxHandle.value;
            if ( str_BoxHandle != "" )
            {
                Js_FrameDown_SelectDropDownByValue( obj_Form.ddl_MyLightBox, str_BoxHandle );
            }
        }
        else
        {
        }
    }
    eval( "Js_AdjustImage_LightBox( '" + strMiddleOrLarge + "' );" );
}

function Js_FrameDown_BodyOnLoad_LightBox_Middle_Deprecated( strMiddleOrLarge )
{
    var obj_Form = document.forms[0];
    var str_BoxHandle = "";

    if ( Js_HtmlFrameObject_Exists( "hddn_BoxHandle" ) == true )
    {
        str_BoxHandle = obj_Form.hddn_BoxHandle.value;
        if ( str_BoxHandle != "" )
        {
            Js_FrameDown_SelectDropDownByValue( obj_Form.ddl_MyLightBox, str_BoxHandle );
        }
    }
    else
    {
    }
    eval( "Js_AdjustImage_LightBox( '" + strMiddleOrLarge + "' );" );
}

function Js_FrameDown_BodyOnLoad_LightBox_Large( strMiddleOrLarge )
{
    // 多分「/scripts/layer.js」に定義されてる"function"だと想定
    hideLayer('layer01');
    hideLayer('layer02');
    hideLayer('layer03');
    hideLayer('layer04');
    eval( "Js_AdjustImage_LightBox( '" + strMiddleOrLarge + "' );" );
}

function Js_FrameDown_BodyOnLoad_OrderBox( strBoxMode )
{
    var obj_Form = document.forms[0];
    var str_BoxHandle = "";

    switch ( strBoxMode )
    {
        case "1":
            Js_AdjustImage_OrderBox( strBoxMode );
            break;
        case "2":
            Js_AdjustImage_OrderBox( strBoxMode );
            break;
    }
}

function Js_FrameDown_BodyOnLoad_OrderBox_Middle()
{
    var obj_Form = document.forms[0];
    var str_BoxHandle = "";

    Js_AdjustImage_OrderBox( '1' );
}

function Js_FrameDown_SelectDropDownByValue( obj_DropDown, str_ValueToMatch )
{
    var i = 0;
    var tmp_Value = "";

    for ( i = 0; i < obj_DropDown.options.length; i++ )
    {
        tmp_Value = obj_DropDown.options[ i ].value;
        if ( tmp_Value == str_ValueToMatch )
        {
            obj_DropDown.options[ i ].selected = true;
        }
        else
        {
            obj_DropDown.options[ i ].selected = false;
        }
    }
}

function Js_FrameDown_GetObjectLabel_LightBoxToCopy( strObjectHandleValue )
{
    var currentObj;
    var currentObjName = "";
    var currentObjValue = "";
    var str_ObjectHandle = "";
    var str_ImageHandle = "";
    var str_GroupHandle = "";
    var str_ToReturn = "";
    var int_SelectedIndex = 0;
    var i = 0;

	for ( i = 0; i < document.forms[0].elements.length; i++ )
	{
		currentObj = document.forms[0].elements[i];
	    currentObjName = currentObj.name;
	    currentObjValue = currentObj.value;
		if ( ( currentObjName == "hddn_List_ObjectHandle" ) && ( currentObjValue.replace( " ", "" ) == strObjectHandleValue.replace( " ", "" ) ) )
		{
			int_SelectedIndex = document.forms[0].elements[i - 1].selectedIndex;
			str_ToReturn = document.forms[0].elements[i - 1].options[ int_SelectedIndex ].text;
			return str_ToReturn;
		}
	}
	return str_ToReturn;
}

function Js_FrameDown_GetObject_LightBoxToCopy( strObjectHandleValue )
{
    var currentObj;
    var currentObjName = "";
    var currentObjValue = "";
    var str_ObjectHandle = "";
    var str_ImageHandle = "";
    var str_GroupHandle = "";
    var str_ToReturn = "";
    var int_SelectedIndex = 0;
    var i = 0;

	for ( i = 0; i < document.forms[0].elements.length; i++ )
	{
		currentObj = document.forms[0].elements[i];
	    currentObjName = currentObj.name;
	    currentObjValue = currentObj.value;
		if ( ( currentObjName == "hddn_List_ObjectHandle" ) && ( currentObjValue.replace( " ", "" ) == strObjectHandleValue.replace( " ", "" ) ) )
		{
			int_SelectedIndex = document.forms[0].elements[i - 1].selectedIndex;
			str_ToReturn = document.forms[0].elements[i - 1].options[ int_SelectedIndex ].value.replace( " ", "" );
			return str_ToReturn;
		}
	}
	return str_ToReturn;
}

function Js_FrameDown_PopupWindow_Processor_NoReturn(url, w, h, st, sc, rs, name, intWindowPositionTop, intWindowPositionLeft )
{
	if ( intWindowPositionTop == 0 )
	{
	    intWindowPositionTop = Math.floor( ( screen.width - w ) / 2 );
	}
	
	if ( intWindowPositionLeft == 0 )
	{
	    intWindowPositionLeft = Math.floor( ( screen.height - h ) / 2 );
	}
	
	var left = parseInt( intWindowPositionTop );
	var top  = parseInt( intWindowPositionLeft );
	
	// ウインドウを開く
	if (document.all) 
	{
		var win = window.open( url, name, "width=" + w + ",height=" + h + ",status=" + st + ",scrollbars=" + sc + ",resizable=" + rs + ",left=" + left + ",top=" + top );
		win.focus();
	}
	else
	{
		var win = window.open( url, name, "width=" + w + ",height=" + h + ",status=" + st + ",scrollbars=" + sc + ",resizable=" + rs + ",screenX=" + left + ",screenY=" + top );
		win.focus();
	}
}

function Js_FrameDown_PopupWindow_Processor(url, w, h, st, sc, rs, name, intWindowPositionTop, intWindowPositionLeft )
{
//alert('Js_FrameDown_PopupWindow_Processor');

	if ( intWindowPositionTop == 0 )
	{
	    intWindowPositionTop = Math.floor( ( screen.width - w ) / 2 );
	}
	if ( intWindowPositionLeft == 0 )
	{
	    intWindowPositionLeft = Math.floor( ( screen.height - h ) / 2 );
	}
	
	var left = parseInt( intWindowPositionTop );
	var top  = parseInt( intWindowPositionLeft );
	var win = null;
		
	// ウインドウを開く
	if (document.all) 
	{
		win = window.open( url, name, "width=" + w + ",height=" + h + ",status=" + st + ",scrollbars=" + sc + ",resizable=" + rs + ",left=" + left + ",top=" + top );
	}
	else
	{
		win = window.open( url, name, "width=" + w + ",height=" + h + ",status=" + st + ",scrollbars=" + sc + ",resizable=" + rs + ",screenX=" + left + ",screenY=" + top );
	}
	return win;
}

function Js_FrameDown_PopupWindow(url, w, h, st, sc, rs, name)
{
	//alert("EventFrameDown.js:Js_FrameDown_PopupWindow:" + url)
	//今すぐ購入機能、非window.open 対応
	if (url.indexOf("Order")>-1 )
	{
		window.location.href=url;
		window.blur();
		window.focus();
		return true;
	}
	
	// 中央座標
	var left = Math.floor((screen.width - w) / 2);
	var top  = Math.floor((screen.height - h) / 2);
	var win = null;
	
	// ウインドウを開く
	if (document.all) 
	{
		win = window.open(url, name, "width="+w+",height="+h+",status="+st+",scrollbars="+sc+",resizable="+rs+",left="+left+",top="+top);
	}
	else
	{
		win = window.open(url, name, "width="+w+",height="+h+",status="+st+",scrollbars="+sc+",resizable="+rs+",screenX="+left+",screenY="+top);
	}
		window.blur();

	win.blur();
	win.focus();
	
	return win;
}
/*
 * 「BOX_MODE」が「MIDDLE('1')」の状態
 */
function Js_FrameDown_LightBox_Dynamic_Dispatcher_Middle( strActionType )
{
    var str_LightBox_NewName = "";
    var str_LightBox_Rename = "";
    var str_LightBox_BoxHandle = "";
    var str_LightBox_BoxMode = "";
    var str_Url = "";
    var str_PopUpWindow_Handle_CreateOrEmail = "PopUpWindow_Handle_CreateOrEmail";
    var int_PopUpWidth = 487;
    var int_PopUpHeight = 750;
    var obj_Form = document.forms[0];
    var obj_PopUpWindow_DynamicMenuAction;

    str_LightBox_BoxHandle = obj_Form.hddn_BoxHandle.value;
    str_LightBox_BoxMode = obj_Form.hddn_BoxMode.value;
    switch ( strActionType )
    {
        case "ProcessKeyDynamicMenuCreate":
            str_Url = "/LightBox/PopUp/Create.aspx?BxHndl=" + str_LightBox_BoxHandle + "&BxMd=" + str_LightBox_BoxMode;
            obj_PopUpWindow_DynamicMenuAction = Js_FrameDown_PopupWindow( str_Url, int_PopUpWidth, int_PopUpHeight, "yes", "yes", "yes", str_PopUpWindow_Handle_CreateOrEmail );
            break;
        case "ProcessKeyDynamicMenuEmail":
            str_Url = "/LightBox/PopUp/EmailSend.aspx?BxHndl=" + str_LightBox_BoxHandle + "&BxMd=" + str_LightBox_BoxMode;
            obj_PopUpWindow_DynamicMenuAction = Js_FrameDown_PopupWindow( str_Url, int_PopUpWidth, int_PopUpHeight, "yes", "yes", "yes", str_PopUpWindow_Handle_CreateOrEmail );
            obj_PopUpWindow_DynamicMenuAction.focus();
            break;
        case "ProcessKeyDynamicMenuRename":
            // 使用不可
            break;
        case "ProcessKeyDynamicMenuDelete":
            // 使用不可
            break;
    }
}

function Js_PopUp_AccountPurchaseHistory( strBoxMode )
{
    var str_Path = "";
	var obj_PopUp_PurchaseHistory;

    str_Path = "";
	str_Path = "/order/record.aspx?BoxSize=" + strBoxMode;
	obj_PopUp_PurchaseHistory = Js_FrameDown_PopupWindow( str_Path, 650, 600, "yes", "yes", "yes", "PopUpWindow_Handle_UserPurchaseHistory" );
}

function Launch_Guide( strKey )
{

    var obj_PopUp_Guide;

    if ( document.PopUpWindow_Handle_Guide )
    {
        document.PopUpWindow_Handle_Guide.close();
    }
    
    str_Path=GetPriceMapUrl(strKey)
    if (!str_Path)
    {
    	if ( strKey == "guide")
    	{
			str_Path = "/help/qaa-0301.html";
			obj_PopUpGuide = Js_FrameDown_PopupWindow( str_Path, 1000, 600, "yes", "yes", "yes", "PopUpWindow_Handle_Guide" );
    	}
    	return 
    }
    
	switch ( strKey )
	{
	    case "rm":
	        obj_PopUpGuide = Js_FrameDown_PopupWindow( str_Path, 500, 270, "yes", "yes", "yes", "PopUpWindow_Handle_Guide" );
			break;

        case "guide":
            str_Path = "/help/qaa-0301.html";
		    obj_PopUpGuide = Js_FrameDown_PopupWindow( str_Path, 1000, 600, "yes", "yes", "yes", "PopUpWindow_Handle_Guide" );
            break;
	    case "Hi":
		case "St":
		case "Pr":
		case "SV":
		case "SW":
		case "SS":
		case "SU":
		case "MotionStandard":
		case "CorbisMotion":
		    obj_PopUpGuide = Js_FrameDown_PopupWindow( str_Path, 1000, 700, "yes", "yes", "yes", "PopUpWindow_Handle_Guide" );
            break;

	}
	obj_PopUpGuide.focus();
}

function Js_PopUp_ImageDetails_Rf( strImageHandle, strGoodsHandle )
{
    var str_Path = "";
	var obj_PopUp_ImageDetails;

    str_Path = "";
	str_Path = "/info/infoRF.aspx?SearchKey=" + escape( strImageHandle ) + "&GroupCD=" + escape( strGoodsHandle );
	obj_PopUp_ImageDetails = Js_FrameDown_PopupWindow( str_Path, 1020, 600, "yes", "yes", "yes", "PopUpWindow_Handle_ImageDetails" );
}

// テンプレート情報表示
function Js_PopUp_TemplateDetails( strTemplateHandle, strImageHandle, strPrice, strNotes )
{
    var str_Path = "/corporate/template/info_templete.aspx?ImageId=" + escape(strImageHandle) + "&" + "Price=" + escape(strPrice) + "&" + "TemplateId=" + escape(strTemplateHandle) + "&" + "Notes=" +  escape(strNotes);
	var obj_PopUp_TemplateDetails = Js_FrameDown_PopupWindow( str_Path, 650, 600, "yes", "yes", "yes", "PopUpWindow_Handle_TemplateDetails" );
}

function Js_FrameDown_OrderBox_Dispatcher( strActionType )
{
    var str_LightBox_NewName = "";
    var str_LightBox_Rename = "";
    var str_LightBox_Handle = "";
    var str_LightBox_BoxMode = "";
    var obj_Form = document.forms[0];
    var obj_PopUpWindow_Processor;
    var obj_PopUpWindow_CheckOut;
    var str_Exists_Template;
    var str_Exists_Rf;
    var str_Exists_Rm;
    var str_Exists_Cdrom;
    var now = new Date().getTime();

    switch ( strActionType )
    {
        case "ProcessKeyOrderBoxPurchaseHistory":
            str_Url = "/OrderBox/PopUpProcessor.aspx?pc=" + strActionType + "&" + now;
            obj_PopUpWindow_Processor = Js_FrameDown_PopupWindow_Processor( str_Url, 1, 1, "yes", "yes", "yes", "PopUpHandle_Processor", 3000, 3000 );
            obj_PopUpWindow_Processor.focus();
            break;
    }
}


/*--------*/
/* 動画RM */
/*--------*/
function Js_PopUp_ImageDetails_Motion_Rm( strImageHandle, strGroupHandle, strMiddleOrLarge )
{
    var obj_PopUpWindow_ImageDetails;
    var str_Location = "";

    switch ( strMiddleOrLarge )
    {
        case "8":
            str_Location = "/info/infoMotionRM.aspx?SearchKey=" + escape( strImageHandle ) + "&GroupCD=" + escape( strGroupHandle );
            obj_PopUpWindow_ImageDetails = Js_FrameDown_PopupWindow( str_Location, 1020, 600, "yes", "yes", "yes", "PopUpHandle_ImageDetails" );
            break;
    }
    obj_PopUpWindow_ImageDetails.focus();
}


/*--------*/
/* 動画RF */
/*--------*/
function Js_PopUp_ImageDetails_Motion_Rf( strImageHandle, strGoodsHandle )
{
    var str_Path = "";
	var obj_PopUp_ImageDetails;

    str_Path = "";
	str_Path = "/info/infoMotionRF.aspx?SearchKey=" + escape( strImageHandle ) + "&GroupCD=" + escape( strGoodsHandle );
	obj_PopUp_ImageDetails = Js_FrameDown_PopupWindow( str_Path, 1020, 600, "yes", "yes", "yes", "PopUpWindow_Handle_ImageDetails" );
}

//'ThreeDimension:3D---------------------------------------------------------
//'1103xx qzc kawashima Add.
/*-----------*/
/* 3DModelRF */
/*-----------*/
function Js_PopUp_ImageDetails_3DModel( strImageHandle, strGoodsHandle )
{
    var str_Path = "";
	var obj_PopUp_ImageDetails;

    str_Path = "";
	str_Path = "/info/info3D.aspx?SearchKey=" + escape( strImageHandle );
	obj_PopUp_ImageDetails = Js_FrameDown_PopupWindow( str_Path, 1020, 600, "yes", "yes", "yes", "PopUpWindow_Handle_ImageDetails" );
}
//'---------------------------------------------------------ThreeDimension:3D

//'Sound---------------------------------------------------------
function Js_PopUp_ImageDetails_SoundRF( strImageHandle, strGoodsHandle )
{
    var str_Path = "";
	var obj_PopUp_ImageDetails;

    str_Path = "";
	str_Path = "/info/infoSoundRF.aspx?SearchKey=" + escape( strImageHandle );
	obj_PopUp_ImageDetails = Js_FrameDown_PopupWindow( str_Path, 1020, 600, "yes", "yes", "yes", "PopUpWindow_Handle_ImageDetails" );
}
function Js_PopUp_ImageDetails_SoundRM( strImageHandle, strGoodsHandle )
{
    var str_Path = "";
	var obj_PopUp_ImageDetails;

    str_Path = "";
	str_Path = "/info/infoSoundRM.aspx?SearchKey=" + escape( strImageHandle );
	obj_PopUp_ImageDetails = Js_FrameDown_PopupWindow( str_Path, 1020, 600, "yes", "yes", "yes", "PopUpWindow_Handle_ImageDetails" );
}
//'---------------------------------------------------------Sound

//'Font---------------------------------------------------------
function Js_PopUp_ImageDetails_FontDownload( strImageHandle, strGoodsHandle )
{
    var str_Path = "";
	var obj_PopUp_ImageDetails;

    str_Path = "";
	str_Path = "/info/infoFontDownload.aspx?SearchKey=" + escape( strImageHandle );
	obj_PopUp_ImageDetails = Js_FrameDown_PopupWindow( str_Path, 1020, 600, "yes", "yes", "yes", "PopUpWindow_Handle_ImageDetails" );
}
function Js_PopUp_ImageDetails_FontPackage( strImageHandle, strGoodsHandle )
{
    var str_Path = "";
	var obj_PopUp_ImageDetails;

    str_Path = "";
	str_Path = "/info/infoFontPackage.aspx?SearchKey=" + escape( strImageHandle );
	obj_PopUp_ImageDetails = Js_FrameDown_PopupWindow( str_Path, 1020, 600, "yes", "yes", "yes", "PopUpWindow_Handle_ImageDetails" );
}
function Js_PopUp_ImageDetails_FontWeb( strImageHandle, strGoodsHandle )
{
    var str_Path = "";
	var obj_PopUp_ImageDetails;

    str_Path = "";
	str_Path = "/info/infoFontWeb.aspx?SearchKey=" + escape( strImageHandle );
	obj_PopUp_ImageDetails = Js_FrameDown_PopupWindow( str_Path, 1020, 600, "yes", "yes", "yes", "PopUpWindow_Handle_ImageDetails" );
}
//'---------------------------------------------------------Font

/*
 * 「BOX_MODE」が「LARGE('2')」の状態
 */
 
function Js_FrameDown_LightBox_Dynamic_Dispatcher( strActionType )
{
    var str_LightBox_NewName = "";
    var str_LightBox_Rename = "";
    var str_LightBox_Handle = "";
    var str_LightBox_BoxMode = "";
    var obj_Form = document.forms[0];
    var obj_PopUpWindow_Processor;
    var now = new Date().getTime();

    switch ( strActionType )
    {
        case "ProcessKeyDynamicMenuCreate":

            if(obj_Form.txt_LightBox_NewName.value.length > 12)
            {
				window.alert("ライトボックス名が長すぎます。指定できる最大文字12文字を超えるため追加できません。");
				return;
            }

            str_LightBox_NewName = obj_Form.txt_LightBox_NewName.value;
            if ( str_LightBox_NewName != "" )
            {
                str_Url = "/LightBox/PopUpProcessor.aspx?pc=" + strActionType + "&BxLbl=" + replaceAll(escape(str_LightBox_NewName), "+", encodeURIComponent("+")) + "&" + now;
                obj_PopUpWindow_Processor = Js_FrameDown_PopupWindow_Processor( str_Url, 1, 1, "yes", "yes", "yes", "PopUpHandle_Processor", 3000, 3000 );
                window.focus();
            }
            else
            {
				window.alert("ライトボックス名を入力してください。");
				return;
            }
            break;
        case "ProcessKeyDynamicMenuEmail":
            break;
        case "ProcessKeyDynamicMenuRename":
            
            if(obj_Form.txt_LightBox_Rename.value.length > 12)
            {
				window.alert("ライトボックス名が長すぎます。指定できる最大文字12文字を超えるため追加できません。");
				return;
            }
            
            str_LightBox_Rename = obj_Form.txt_LightBox_Rename.value;
            str_LightBox_Handle = obj_Form.hddn_BoxHandle.value;
            str_LightBox_BoxMode = obj_Form.hddn_BoxMode.value;
            if ( ( str_LightBox_Rename != "" ) && ( str_LightBox_Handle != "" ) )
            {
                str_Url = "/LightBox/PopUpProcessor.aspx?pc=" + strActionType + "&BxHndl=" + str_LightBox_Handle + "&BxLbl=" + replaceAll(escape(str_LightBox_Rename), "+", encodeURIComponent("+")) + "&BxMd=" + str_LightBox_BoxMode + "&" + now;
                obj_PopUpWindow_Processor = Js_FrameDown_PopupWindow_Processor( str_Url, 1, 1, "yes", "yes", "yes", "PopUpHandle_Processor", 3000, 3000 );
                window.focus();
            }
            else
            {	
				if( str_LightBox_Rename == "" ){
            		window.alert("ライトボックス名を入力してください。");
					return;
				}
            }
            break;
        case "ProcessKeyDynamicMenuDelete":
            str_LightBox_Handle = obj_Form.hddn_BoxHandle.value;
            str_lightBox_Name = trim(document.getElementById("ddl_MyLightBox").options[document.getElementById("ddl_MyLightBox").selectedIndex].text);
            if ( str_LightBox_Handle != "" )
            {
                if (confirm("ライトボックス「" + str_lightBox_Name + "」を削除しますか？")) {
                    str_Url = "/LightBox/PopUpProcessor.aspx?pc=" + strActionType + "&BxHndl=" + str_LightBox_Handle + "&" + now;
                    obj_PopUpWindow_Processor = Js_FrameDown_PopupWindow_Processor(str_Url, 1, 1, "yes", "yes", "yes", "PopUpHandle_Processor", 3000, 3000);
                    window.focus();
                }
            }
            else
            {
                // do nothing
            }
            break;
    }
}

function Js_FrameDown_Launch_PopUpProcessor( strImageHandle, strObjectHandleValue, strActionCode )
{
//alert('Js_FrameDown_Launch_PopUpProcessor:' + strImageHandle + strObjectHandleValue + strActionCode );

    var str_BoxHandle = document.forms[0].hddn_BoxHandle.value;
    var str_AddKey = "][";
    var str_ObjectDetails = "";
    var str_Url = "";
    var str_LightBox_CopyTo = "";
    var str_LightBox_Label_CopyTo = "";
    var str_FrameDetails_Down = Js_FrameDown_Get_FrameDownDetails( "Down" );
    var obj_PopUpWindow_Processor;
    var arr_ObjectDetails;
    var strTmp_EmailSend_Subject = ""; //2007/07/05 kuramochi
    var now = new Date().getTime();
    
    switch ( strActionCode )
    {
        case "ProcessKeyLightBoxRemove":
            str_Url = "/LightBox/PopUpProcessor.aspx?pc=" + strActionCode + "&ImgHndl=" + strImageHandle + "&BxHndl=" + str_BoxHandle + "&" + now;
            obj_PopUpWindow_Processor = Js_FrameDown_PopupWindow_Processor( str_Url, 1, 1, "yes", "yes", "yes", "PopUpHandle_Processor", 3000, 3000 );
            window.focus();
            break;
        case "ProcessKeyLightBoxCopyTo":
            str_LightBox_CopyTo = Js_FrameDown_GetObject_LightBoxToCopy( strObjectHandleValue );
            str_LightBox_Label_CopyTo = Js_FrameDown_GetObjectLabel_LightBoxToCopy( strObjectHandleValue );
            str_Url = "/LightBox/PopUpProcessor.aspx?pc=" + strActionCode + "&ImgHndl=" + strImageHandle + "&BxHndl=" + str_BoxHandle + "&BxHndlTo=" + str_LightBox_CopyTo + "&BxLblTo=" + str_LightBox_Label_CopyTo + "&" + now;
            obj_PopUpWindow_Processor = Js_FrameDown_PopupWindow_Processor( str_Url, 1, 1, "no", "no", "no", "PopUpHandle_Processor", 3000, 3000 );
            window.focus();
            break;
        case "ProcessKeyLightBoxMoveTo":
            str_LightBox_CopyTo = Js_FrameDown_GetObject_LightBoxToCopy( strObjectHandleValue );
            str_LightBox_Label_CopyTo = Js_FrameDown_GetObjectLabel_LightBoxToCopy( strObjectHandleValue );
            str_Url = "/LightBox/PopUpProcessor.aspx?pc=" + strActionCode + "&ImgHndl=" + strImageHandle + "&BxHndl=" + str_BoxHandle + "&BxHndlTo=" + str_LightBox_CopyTo + "&BxLblTo=" + str_LightBox_Label_CopyTo + "&" + now;
            obj_PopUpWindow_Processor = Js_FrameDown_PopupWindow_Processor( str_Url, 1, 1, "yes", "yes", "yes", "PopUpHandle_Processor", 3000, 3000 );
            window.focus();
            break;
        case "ProcessKeyOrderBoxAdd":
            str_Url = "/LightBox/PopUpProcessor.aspx?pc=" + strActionCode + "&ImgHndl=" + strImageHandle + "&BxHndl=" + str_BoxHandle + "&" + now;
            obj_PopUpWindow_Processor = null;
            obj_PopUpWindow_Processor = Js_FrameDown_PopupWindow_Processor( str_Url, 1, 1, "no", "no", "no", "PopUpHandle_Processor", 3000, 3000 );
            break;
        case "ProcessKeyOrderBoxRemove":
        case "ProcessKeyOrderBoxClear":
            str_Url = "/OrderBox/PopUpProcessor.aspx?pc=" + strActionCode + "&ItmHndl=" + strImageHandle + "&" + now;
            obj_PopUpWindow_Processor = Js_FrameDown_PopupWindow_Processor( str_Url, 1, 1, "yes", "yes", "yes", "PopUpHandle_Processor", 3000, 3000 );
            window.focus();
            break;
        case "ProcessKeyDynamicMenuEmail":
            //無効メールアドレスチェック
            if (!CheckEmailAddress(document.forms[0].txt_EmailSend_Recipient, true, "送信あて先メールアドレス")) {
                return false;
            }

            if (!CheckEmailAddress(document.forms[0].txt_EmailSend_CarbonCopy, false, "CCメールアドレス")) {
                return false;
            }

            if (!CheckEmailAddress(document.forms[0].txt_EmailSend_BlindCarbonCopy, false, "BCCメールアドレス")) {
                return false;
            }

            //2007/07/05 kuramochi ライトメール送信件名　必須 Start
            strTmp_EmailSend_Subject = document.forms[0].txt_EmailSend_Subject.value;

            if (strTmp_EmailSend_Subject == "") {
                alert('件名を入力してください。');
                document.forms[0].txt_EmailSend_Subject.focus();
                return false;
            }

            str_Url = "/LightBox/PopUpProcessor.aspx?pc=" + strActionCode + "&BxHndl=" + str_BoxHandle + "&BxMd=2" + "&" + now;
            obj_PopUpWindow_Processor = Js_FrameDown_PopupWindow_Processor( str_Url, 1, 1, "no", "no", "no", "PopUpHandle_Processor", 3000, 3000 );
            
            /*
            if ( strTmp_EmailSend_Recipient != "" )
            {
                // launch pop up
                str_Url = "/LightBox/PopUpProcessor.aspx?pc=" + strActionCode + "&BxHndl=" + str_BoxHandle + "&BxMd=2";
                obj_PopUpWindow_Processor = Js_FrameDown_PopupWindow_Processor( str_Url, 1, 1, "no", "no", "no", "PopUpHandle_Processor", 3000, 3000 );
            }
            else
            {
                alert( '送信あて先メールアドレスを入力してください。' );
            }
            break;
            */
        	//2007/07/05 kuramochi ライトメール送信件名　必須 End
        	break;
    }
    return false;
}

function Js_HtmlFrameObject_Exists( str_ObjectHandle )
{
    var bln_ToReturn = false;
    var currentObj;
    var currentObjName;
    var i = 0;

	for ( i = 0; i < document.forms[0].elements.length; i++ )
	{
		currentObj = document.forms[0].elements[i];
	    currentObjName = currentObj.name;
		if ( currentObjName == str_ObjectHandle )
		{
			return true;
		}
	}
	return false;
}

function Js_FrameDown_LightBox_Dispatch_ImageDetails_ViaImage( strImageHandle, strGroupHandle, strImageType, strMiddleOrLarge )
{
    var obj_PopUpWindow_ImageDetails;
    var str_Location = "";

    switch ( strMiddleOrLarge )
    {
        case "1":
            str_Location = "/info/infoRM.aspx?SearchKey=" + escape( strImageHandle ) + "&GroupCD=" + escape( strGroupHandle );
            obj_PopUpWindow_ImageDetails = Js_FrameDown_PopupWindow( str_Location, 1020, 600, "yes", "yes", "yes", "PopUpHandle_ImageDetails" );
            break;
        case "2":
            str_Location = "/info/infoRM.aspx?SearchKey=" + escape( strImageHandle ) + "&GroupCD=" + escape( strGroupHandle );
            obj_PopUpWindow_ImageDetails = Js_FrameDown_PopupWindow( str_Location, 1020, 600, "yes", "yes", "yes", "PopUpHandle_ImageDetails" );
            break;
    }
    obj_PopUpWindow_ImageDetails.focus();
}

function Js_FrameDown_LightBox_Dispatch_ImageDetails( strImageHandle, strGroupHandle, strMiddleOrLarge )
{
    var obj_PopUpWindow_ImageDetails;
    var str_Location = "";

    switch ( strMiddleOrLarge )
    {
        case "1":
            str_Location = "/info/infoRM.aspx?SearchKey=" + escape( strImageHandle ) + "&GroupCD=" + escape( strGroupHandle );
            obj_PopUpWindow_ImageDetails = Js_FrameDown_PopupWindow( str_Location, 1020, 600, "yes", "yes", "yes", "PopUpHandle_ImageDetails" );
            break;
        case "2":
            str_Location = "/info/infoRM.aspx?SearchKey=" + escape( strImageHandle ) + "&GroupCD=" + escape( strGroupHandle );
            obj_PopUpWindow_ImageDetails = Js_FrameDown_PopupWindow( str_Location, 1020, 600, "yes", "yes", "yes", "PopUpHandle_ImageDetails" );
            break;
    }
    obj_PopUpWindow_ImageDetails.focus();
}

function Js_FrameDown_GetDdlValue( objDdl )
{
    var i = 0;
    var tmp_Value = "";

    for ( i = 0; i < objDdl.options.length; i++ )
    {
        if ( objDdl.options[ i ].selected )
        {
            return objDdl.options[ i ].value;
        }
    }
}

function Js_FrameDown_GetDdlText( objDdl )
{
    var str_ValueToReturn = "";

    str_ValueToReturn = objDdl.options[objDdl.selectedIndex].text;
    return str_ValueToReturn;
}

function Js_FrameDown_LaunchCalculator( strImageHandle, strFromSource )
{
    var bln_ToReturn = false;
    
    switch ( strFromSource )
    {
        case "OrderBoxCalculate":
            break;
        case "OrderBoxRecalculate":
            bln_ToReturn = JsPriceCalculator( strImageHandle, "Step3FromOrderBox" );
            break;
    }
}

function Js_FrameDown_LaunchCalculator_OtherWindow( strImageHandle, strFromSource )
{
    var bln_ToReturn = false;
    
    switch ( strFromSource )
    {
        case "OrderBoxCalculate":
            break;
        case "OrderBoxRecalculate":
            bln_ToReturn = JsPriceCalculator_OtherWindow( strImageHandle, "Step3FromOrderBox" );
            break;

        case "Step2FromOrderBoxAdd":
            bln_ToReturn = JsPriceCalculator_OtherWindow( strImageHandle, strFromSource );
            break;
    }
}

function Js_LoadOnChange_LightBox( str_FrameSize, str_BoxFlag )
{
    var obj_Form = document.forms[0];
    var str_SelectedLightBoxHandle = "";
    var str_SelectedLightBoxLabel = "";
    var str_CurrentLightBox_Path = "";
    
    str_SelectedLightBoxHandle = Js_FrameDown_GetDdlValue( obj_Form.ddl_MyLightBox );
    str_SelectedLightBoxLabel = Js_FrameDown_GetDdlText( obj_Form.ddl_MyLightBox );
    str_CurrentLightBox_Path = self.document.location;
    str_CurrentLightBox_Path = RemoveFrom_QueryString( str_CurrentLightBox_Path, "BoxSize" );
    str_CurrentLightBox_Path = RemoveFrom_QueryString( str_CurrentLightBox_Path, "BoxHandle" );
    str_CurrentLightBox_Path = RemoveFrom_QueryString( str_CurrentLightBox_Path, "BoxLabel" );
    str_CurrentLightBox_Path = RemoveFrom_QueryString( str_CurrentLightBox_Path, "BxHndl" );
    str_CurrentLightBox_Path = RemoveFrom_QueryString( str_CurrentLightBox_Path, "BxLbl" );
    if ( ( str_CurrentLightBox_Path ).split( '?' ).length > 1 )
    {
        str_CurrentLightBox_Path = str_CurrentLightBox_Path + "&BoxSize=" + str_FrameSize;
    }
    else
    {
        str_CurrentLightBox_Path = str_CurrentLightBox_Path + "?BoxSize=" + str_FrameSize;
    }
    str_CurrentLightBox_Path = str_CurrentLightBox_Path + "&BoxHandle=" + str_SelectedLightBoxHandle;
    str_CurrentLightBox_Path = str_CurrentLightBox_Path + "&BoxLabel=" + str_SelectedLightBoxLabel;
    str_CurrentLightBox_Path = ( new String( str_CurrentLightBox_Path ) ).replace( '#', '' );
    
    // 新ライトボックス用
    setSelectedLightbox(str_SelectedLightBoxHandle);
    
    document.location.replace( str_CurrentLightBox_Path );
}

function Js_LoadOnChange_LightBox_Deprecated( str_FrameSize, str_BoxFlag )
{
    var bln_ReturnValueNeeded = false;
    var bln_ToReturn = false;
    var str_TopLocation = top.location;
    var obj_QueryString;
    var str_TopLocationPathName = "";
    var str_TopLocationSearch = "";
    var str_RedirectUrl = "";
    var obj_Form = document.forms[0];
    var str_SelectedLightBoxHandle = "";

    str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "BoxSize" );
    str_TopLocation = RemoveFrom_QueryString( str_TopLocation, "BoxMode" );
    obj_QueryString = str_TopLocation.split( "?" );
    if ( obj_QueryString.length == 1 )
    {
        str_TopLocationPathName = obj_QueryString[0];
        str_TopLocationSearch = "?BoxMode=" + str_FrameSize;
    }
    else if ( obj_QueryString.length == 2 )
    {
        str_TopLocationPathName = obj_QueryString[0];
        str_TopLocationSearch = obj_QueryString[1];
        str_TopLocationSearch = AddTo_String( str_TopLocationSearch, "BoxMode=" + str_FrameSize, "&" );
    }
    if ( ( str_FrameSize != "0" ) && ( str_FrameSize != "1" ) && ( str_FrameSize != "2" ) )
    {
        str_FrameSize = "0";
    }    
	switch ( str_BoxFlag )
	{
		case "LightBox":
		    str_SelectedLightBoxHandle = Js_FrameDown_GetDdlValue( obj_Form.ddl_MyLightBox );
		    str_RedirectUrl = "/common/openframe.aspx?BoxMode=" + str_FrameSize + "&open=lightbox&BoxHandle=" + str_SelectedLightBoxHandle + "&pathname=" + escape(str_TopLocationPathName) + "&search=" + escape(str_TopLocationSearch);
			top.location.href = str_RedirectUrl;
			bln_ToReturn = false;
			break;
		case "OrderBox":
		    if ( int_SignedIn == 0 )
		    {
		        str_RedirectUrl = "/account/SignIn.aspx?Purpose=OrderBox";
		        document.location = str_RedirectUrl;
			    bln_ToReturn = false;
		    }
		    else
		    {
		        str_RedirectUrl = "/common/openframe.aspx?BoxMode=" + str_FrameSize + "&open=orderbox&pathname=" + escape(str_TopLocationPathName) + "&search=" + escape(str_TopLocationSearch);
		        top.location.href = str_RedirectUrl;
			    bln_ToReturn = false;
		    }
		    break;
	}
	if ( bln_ReturnValueNeeded )
	{
	    return bln_ToReturn;
	}
}

function Js_FrameDown_Get_FrameBodyDetails( strClickSource )
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
    if ( self != obj_Url_Top && int_FramesCount == 2)
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

function Js_FrameDown_Get_FrameDownDetails( strClickSource )
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
    if ( self != obj_Url_Top && int_FramesCount == 2 )
    {
        obj_FrameDown = obj_Url_Top.frames[ 1 ];
        if ( obj_FrameDown.name == "down" )
        {
            str_FrameDown_Url = obj_FrameDown.location;
            str_PageType = Js_FrameDown_Decipher_FrameDown_PageType( str_FrameDown_Url );
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

function Js_FrameDown_Decipher_FrameDown_PageType( strUrlStringParam )
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
    }
    return str_ToReturn;
}

function LightBox_Large_PageDisplaySize_OnChange()
{
    var obj_Form = document.forms[0];
    var str_PageHandle = "";
    var str_PageDisplaySize = "";
    var strUrl_LightBoxLarge = document.location;

    strUrl_LightBoxLarge = RemoveFrom_QueryString( strUrl_LightBoxLarge, "PgHndl" );
    strUrl_LightBoxLarge = RemoveFrom_QueryString( strUrl_LightBoxLarge, "PgDsplySz" );
    str_PageHandle = "1";
    str_PageDisplaySize = obj_Form.slct_PageDisplaySize.options[ obj_Form.slct_PageDisplaySize.selectedIndex ].value;
    strUrl_LightBoxLarge = strUrl_LightBoxLarge + "&PgHndl=" + str_PageHandle;
    strUrl_LightBoxLarge = strUrl_LightBoxLarge + "&PgDsplySz=" + str_PageDisplaySize;
    document.location.replace( strUrl_LightBoxLarge );
}

function LightBox_Large_PageDisplaySize_OnClick(strCurrentPageSize)
{
    var obj_Form = document.forms[0];
    var str_PageHandle = "";
    var str_PageDisplaySize = "";
    var strUrl_LightBoxLarge = document.location;

    strUrl_LightBoxLarge = RemoveFrom_QueryString( strUrl_LightBoxLarge, "PgHndl" );
    strUrl_LightBoxLarge = RemoveFrom_QueryString( strUrl_LightBoxLarge, "PgDsplySz" );
    str_PageHandle = "1";
    str_PageDisplaySize = strCurrentPageSize;
    strUrl_LightBoxLarge = strUrl_LightBoxLarge + "&PgHndl=" + str_PageHandle;
    strUrl_LightBoxLarge = strUrl_LightBoxLarge + "&PgDsplySz=" + str_PageDisplaySize;
    document.location.replace( strUrl_LightBoxLarge );
}

function PageControls_ImgBttn_Navigation( strBackOrNext )
{
    var obj_Form = document.forms[0];
    var int_CurrentPage = 0;
    var int_MaxPageCount = 0;
    var int_PageDisplaySize = 0;
    var strUrl_LightBoxLarge = document.location;

    strUrl_LightBoxLarge = RemoveFrom_QueryString( strUrl_LightBoxLarge, "PgHndl" );
    strUrl_LightBoxLarge = RemoveFrom_QueryString( strUrl_LightBoxLarge, "PgDsplySz" );
    int_CurrentPage = parseInt( obj_Form.hddn_PageControl_PageHandle.value );
    int_MaxPageCount = parseInt( obj_Form.hddn_PageControl_MaxPagesToDisplay.value );
    int_PageDisplaySize = parseInt( obj_Form.hddn_PageControl_DisplaySize.value );
    switch ( strBackOrNext )
    {
        case "back":
            if ( int_CurrentPage > 1 )
            {
                strUrl_LightBoxLarge = strUrl_LightBoxLarge + "&PgHndl=" + ( int_CurrentPage - 1 );
                strUrl_LightBoxLarge = strUrl_LightBoxLarge + "&PgDsplySz=" + int_PageDisplaySize;
                document.location.replace( strUrl_LightBoxLarge );
            }
            else
            {
                // 何もしない；前に戻ません
            }
            break;
        case "next":
            if ( int_CurrentPage < int_MaxPageCount )
            {
                strUrl_LightBoxLarge = strUrl_LightBoxLarge + "&PgHndl=" + ( int_CurrentPage + 1 );
                strUrl_LightBoxLarge = strUrl_LightBoxLarge + "&PgDsplySz=" + int_PageDisplaySize;
                document.location.replace( strUrl_LightBoxLarge );
            }
            else
            {
                // 何もしない；次へ進めません
            }
            break;
    }
}

function PageControls_HyprLnk_PageHandle( intNextPage )
{
    var obj_Form = document.forms[0];
    var int_CurrentPage = 0;
    var int_MaxPageCount = 0;
    var int_PageDisplaySize = 0;
    var strUrl_LightBoxLarge = document.location;

    strUrl_LightBoxLarge = RemoveFrom_QueryString( strUrl_LightBoxLarge, "PgHndl" );
    strUrl_LightBoxLarge = RemoveFrom_QueryString( strUrl_LightBoxLarge, "PgDsplySz" );
    int_CurrentPage = parseInt( obj_Form.hddn_PageControl_PageHandle.value );
    int_MaxPageCount = parseInt( obj_Form.hddn_PageControl_MaxPagesToDisplay.value );
    int_PageDisplaySize = parseInt( obj_Form.hddn_PageControl_DisplaySize.value );
    strUrl_LightBoxLarge = strUrl_LightBoxLarge + "&PgHndl=" + intNextPage;
    strUrl_LightBoxLarge = strUrl_LightBoxLarge + "&PgDsplySz=" + int_PageDisplaySize;
    document.location.replace( strUrl_LightBoxLarge );
}

function LightBox_Large_ResultViewMode_OnChange( strCurrentViewMode )
{
    var obj_Form = document.forms[0];
    var str_ViewMode = "";
    var strUrl_LightBoxLarge = document.location;

    strUrl_LightBoxLarge = ( new String( strUrl_LightBoxLarge ) ).replace( '#', '' );
    str_ViewMode = obj_Form.slct_ResultViewMode.options[ obj_Form.slct_ResultViewMode.selectedIndex ].value;
    if ( ( new String( strUrl_LightBoxLarge ) ).indexOf( 'OpenLarge.aspx' ) != -1 )
    {
        strUrl_LightBoxLarge = ( new String( strUrl_LightBoxLarge ) ).replace( 'OpenLarge.aspx', 'OpenLarge' + str_ViewMode + '.aspx' ); 
    }
    else if ( ( new String( strUrl_LightBoxLarge ) ).indexOf( 'OpenLargeMini.aspx' ) != -1 )
    {
        strUrl_LightBoxLarge = ( new String( strUrl_LightBoxLarge ) ).replace( 'OpenLargeMini.aspx', 'OpenLarge' + str_ViewMode + '.aspx' ); 
    }
    else
    {
    }
    document.location.replace( strUrl_LightBoxLarge );
}

function LightBox_Large_ResultViewMode_OnClick( strCurrentViewMode )
{
    var obj_Form = document.forms[0];
    var str_ViewMode = "";
    var strUrl_LightBoxLarge = document.location;

    strUrl_LightBoxLarge = ( new String( strUrl_LightBoxLarge ) ).replace( '#', '' );
    str_ViewMode = strCurrentViewMode;
    if ( ( new String( strUrl_LightBoxLarge ) ).indexOf( 'OpenLarge.aspx' ) != -1 )
    {
        strUrl_LightBoxLarge = ( new String( strUrl_LightBoxLarge ) ).replace( 'OpenLarge.aspx', 'OpenLarge' + str_ViewMode + '.aspx' ); 
    }
    else if ( ( new String( strUrl_LightBoxLarge ) ).indexOf( 'OpenLargeMini.aspx' ) != -1 )
    {
        strUrl_LightBoxLarge = ( new String( strUrl_LightBoxLarge ) ).replace( 'OpenLargeMini.aspx', 'OpenLarge' + str_ViewMode + '.aspx' ); 
    }
    else
    {
    }
    document.location.replace( strUrl_LightBoxLarge );
}

//2011/02/14 電子領収書発行機能
//【内容を確認する】ボタン押下時のValidation
function AddresseeCheck(orderNumber,mode)
{
	//チェック対象の宛名入力欄
	var t;
	//チェックエラー時のメッセージ
	var m,m2;
	if(mode)
	{
		//ダウンロード画面の場合
		t=document.getElementById('txtAddressee');
		m=document.getElementById('AddresseeCheckMsg');
		m2=document.getElementById('AddresseeCheckMsg2');
	}
	else
	{
		//購入履歴画面の場合
		t=document.getElementById('txtAddressee_' + orderNumber);
		m=document.getElementById('AddresseeCheckMsg_' + orderNumber);
		m2=document.getElementById('AddresseeCheckMsg2_' + orderNumber);
	}
	if(!t || !m|| !m2) return false;
	
	var v=t.value;
	
	v=v.replace(/\s+/g,'');
	v=v.replace(/　+/g,'');

	m.style.visibility='hidden';
	m2.style.visibility='hidden';
	//未入力か初期値のまま
	if(v.length<=0 || v==='領収証に記載する宛名を入力')
	{
		m.style.visibility='visible';
	}
	else if(v.length>40)
	{
		m2.style.visibility='visible';
	}
	else
	{
		//宛名確認画面をポップアップ
		var w=Js_FrameDown_PopupWindow_Processor('/OrderBox/ConfirmAddressee.aspx?Addressee='+ 
		EscapeSJIS(t.value)
		+'&OrderNumber='+ orderNumber , 480, 340, 'no', 'no', 'no', '_blank', 0, 0 );
		w.focus();
	}
	return false;
}
//2011/02/14 電子領収書発行機能
//購入履歴画面 【領収書(PDF)】ボタン押下時
function PrintPDF(arg)
{
	window.open(arg ,'_blank');
	return false;
}
function Js_FrameDown_LightBox_Dynamic_DispatcherOnKeyPress(e, controlId) {
    // Press ENTER key
    if (e.keyCode == 13) {
        if (e.preventDefault)
        {
            e.preventDefault();
        }
        else
        {
            e.returnValue = false;
        }
        document.getElementById(controlId).click();
        return false;
    }
}