
function JsTemplate_Get_FrameDownDetails( strClickSource )
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
			if (self.opener == null) {
			    return '';
			}
			else {
	            obj_Url_Top = self.opener.parent.top;
	        }
            break;
        case "Down_PopUp":
			if (self.opener == null) {
			    return '';
			}
			else {
	            obj_Url_Top = self.opener.parent.top;
	        }
            break;
    }
    int_FramesCount = obj_Url_Top.frames.length;
    if ( self != obj_Url_Top && int_FramesCount == 2)
    {
        obj_FrameDown = obj_Url_Top.frames[ 1 ];
        if ( obj_FrameDown.name == "down" )
        {
            str_FrameDown_Url = obj_FrameDown.location;
            str_PageType = JsTemplate_Decipher_FrameDown_PageType( str_FrameDown_Url );
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


function PopUp_Template_BodyOnLoad_ReloadWithOrderBox( strAction, strAlertMsg, strErrorFlg, strBoxMode, strCookieUserHandle, strCloseWindow )
{
    var bln_FrameBody_Exists = false;
    var bln_FrameDown_Exists = false;
    var bln_Success = false;
    var str_Url_Body = "";
    var str_Url_Down = "";
    var str_EmailBoxHandle = "";
    var str_EmailRecipient = "";
    var str_EmailCarbonCopy = "";
    var str_EmailBlindCarbonCopy = "";
    var str_EmailSubject = "";
    var str_EmailBody = "";
    var str_TopLocation = "";
    var obj_WindowOpener = window.opener.parent;

    if ( obj_WindowOpener )
    {
        switch ( strAction )
        {
            case "close":
                break;
            case "ReloadOnlyOrderBox":
                if ( ( strCookieUserHandle == "" ) || ( strCookieUserHandle == "Guest" ) )
                {
                }
                else
                {
                    bln_Success = PopUp_Template_ReloadOnlyOrderBox( "OrderBox", true, strBoxMode, 1, "" );
                }
                break;
        }        
        if ( strAlertMsg != "" )
        {
            alert( strAlertMsg );
        }
    }
    else
    {
    }
    obj_WindowOpener.focus();
    
    if ( strCloseWindow == "1" )
    {
        window.close();
    }
}

function PopUp_Template_BodyOnLoad_ReloadWithLightBox( strAction, strAlertMsg, strErrorFlg, strBoxMode, strBoxHandle, strCookieUserHandle, strCloseWindow )
{//alert("PopUp_Template_BodyOnLoad_ReloadWithLightBox")
    var bln_FrameBody_Exists = false;
    var bln_FrameDown_Exists = false;
    var bln_Success = false;
    var str_Url_Body = "";
    var str_Url_Down = "";
    var str_TopLocation = "";
    var obj_WindowOpener = window.opener.parent;

    if ( obj_WindowOpener )
    {
        switch ( strAction )
        {
            case "close":
                break;
            case "ReloadFrames":
                PopUp_ReloadFromAd( "ReloadFrames", true, strBoxMode, 0, strBoxHandle );
                break;
            case "ReloadWithLightBox":
                bln_Success = PopUp_Template_Open( "LightBox", true, strBoxMode, 0, strBoxHandle );
                break;
            case "ReloadOnlyLightBox":
                bln_Success = PopUp_Template_ReloadOnlyLightBox( "LightBox", true, strBoxMode, 0, strBoxHandle );
                break;
        }        
        if ( strAlertMsg != "" )
        {
            alert( strAlertMsg );
        }
    }
    obj_WindowOpener.focus();
	window.close();
}

function JsTemplate_Decipher_FrameDown_PageType( strUrlStringParam )
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
