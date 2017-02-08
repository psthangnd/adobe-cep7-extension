//EventAccount.js

	// passwordMaxSize is definded in aspx file 
	var passwordMinSize=4;

var PopUpWindow_Account = null;
var PopUpWindow_MailMagazine = null;
var strPopUpWindow_MailMagazine_HandleName = "PopUpMailMagazine_Account";


function Js_Account_OnLoad_CreateModify()
{
    var strVal_PageMode = document.forms[0].hddn_PageMode.value;
    var strVal_Address_PrefectureHandle = document.forms[0].hddn_Address_PrefectureHandle.value;
    
    switch ( strVal_PageMode )
    {
        case "create":
            if ( strVal_Address_PrefectureHandle != "" )
            {
                Js_Account_Select_DropDown( document.forms[0].slct_Address_Prefecture, strVal_Address_PrefectureHandle );
            }
            break;
        case "modify":
            if ( strVal_Address_PrefectureHandle != "" )
            {
                Js_Account_Select_DropDown( document.forms[0].slct_Address_Prefecture, strVal_Address_PrefectureHandle );
            }
            break;
    }
}

function Js_Account_Select_DropDown( obj_DropDown, str_ValueToMatch )
{
    var i = 0;
    var tmp_Value = "";
    
    if (obj_DropDown.options) {
        for ( i = 0; i < obj_DropDown.options.length; i++ )
        {
            tmp_Value = obj_DropDown.options[ i ].value;
            if ( tmp_Value == str_ValueToMatch )
            {
                obj_DropDown.selectedindex = i;
                obj_DropDown.options[ i ].selected = true;
            }
            else
            {
                obj_DropDown.options[ i ].selected = false;
            }
        }
    }
}

function Js_AccountForm_Password_Check(mode)
{
	if ( mode == "modify" )
	{
    var obj_Form = document.forms[0];

		if ( obj_Form.hddn_UserHandle.value == obj_Form.txt_UserPassword.value)
		{
				alert( "ユーザIDとパスワードは、同一設定を避けてご登録下さい。" );
				obj_Form.txt_UserPassword.value = "";
				obj_Form.txt_UserPassword_Confirm.value = "";
				obj_Form.txt_UserPassword.focus();
				obj_Form.txt_UserPassword.className = "err";
				return false;
		}
	}
	return true;

}
function Js_AccountForm_CreateModify_Verify2(event)
{
    if (event)
    { return Js_AccountForm_CreateModify_Verify() }

}

function Js_AccountForm_CreateModify_Verify(mode)
{
    var obj_Form = document.forms[0];
    var strVal_PageMode = mode || document.forms[0].hddn_PageMode.value;
    var errMsg_NumbersOnly = "数値を入力してください";

	var strVal_IndustrySuper = ""

    if ((obj_Form.txt_Name_Shi) && ( obj_Form.txt_Name_Shi.value == "" ))
    {
        alert( "お名前（姓）を入力してください。" );
        obj_Form.txt_Name_Shi.focus();
								obj_Form.txt_Name_Shi.className = "err";
        return false;
    }
    if ( (obj_Form.txt_Name_Mei) && (obj_Form.txt_Name_Mei.value == "" ))
    {
        alert( "お名前（名）を入力してください。" );
        obj_Form.txt_Name_Mei.focus();
								obj_Form.txt_Name_Mei.className = "err";
        return false;
    }
    if ( (obj_Form.txt_Name_Shi_Kana) && (obj_Form.txt_Name_Shi_Kana.value == "" ))
    {
        alert( "フリガナ（セイ）を入力してください。" );
        obj_Form.txt_Name_Shi_Kana.focus();
        obj_Form.txt_Name_Shi_Kana.className = "err";
        return false;
    }
    if ((obj_Form.txt_Name_Shi_Kana) && (!obj_Form.txt_Name_Shi_Kana.value.match(/^[0-9a-zA-Z０-９ァ-ンａ-ｚＡ-Ｚー\-]+$/))) {
        alert("フリガナ（セイ）は、全角カナ、英数字で入力して下さい。");
        obj_Form.txt_Name_Shi_Kana.focus();
        obj_Form.txt_Name_Shi_Kana.className = "err";
        return false;
    }
    if ((obj_Form.txt_Name_Mei_Kana) && (obj_Form.txt_Name_Mei_Kana.value == ""))
    {
        alert( "フリガナ（メイ）を入力してください。" );
        obj_Form.txt_Name_Mei_Kana.focus();
        obj_Form.txt_Name_Mei_Kana.className = "err";
        return false;
    }
    if ((obj_Form.txt_Name_Mei_Kana) && (!obj_Form.txt_Name_Mei_Kana.value.match(/^[0-9a-zA-Z０-９ァ-ンａ-ｚＡ-Ｚー\-]+$/))) {
        alert("フリガナ（メイ）は、全角カナ、英数字で入力して下さい。");
        obj_Form.txt_Name_Mei_Kana.focus();
        obj_Form.txt_Name_Mei_Kana.className = "err";
        return false;
    }
    if ((obj_Form.txt_CompanyName) && (obj_Form.txt_CompanyName.value == ""))
    {
        alert( "会社名を入力してください。" );
        obj_Form.txt_CompanyName.focus();
								obj_Form.txt_CompanyName.className = "err";
        return false;
    }
	
	//郵便番号は必須項目
	if ( obj_Form.txt_PostalCode )
	{ 
		if ( obj_Form.txt_PostalCode.value=='' )
		{
			alert( "郵便番号入力してください。" );
			obj_Form.txt_PostalCode.value = "";
			obj_Form.txt_PostalCode.focus();
			obj_Form.txt_PostalCode.className = "err";
			return false;
		}
		else
		{
			if(trim(obj_Form.txt_PostalCode.value).match(/[^0123456789-]+/))
			{ 
 				// 数字以外が入力された場合は警告ダイアログを表示 
 				alert("郵便番号は半角数字または半角ハイフンのみ入力してください。");
				obj_Form.txt_PostalCode.focus();
				obj_Form.txt_PostalCode.className = "err";
				return false;			
			}
			if(obj_Form.txt_PostalCode.value == "-")
			{ 
 				alert("郵便番号入力してください。");
				obj_Form.txt_PostalCode.focus();
				obj_Form.txt_PostalCode.className = "err";
				return false;			
			}
		}
	}

    if ( ( obj_Form.slct_Address_Prefecture) && (obj_Form.slct_Address_Prefecture.options[ obj_Form.slct_Address_Prefecture.selectedIndex ].value == 0 )    )
    {
        alert( "都道府県を選択してください。" );
        obj_Form.slct_Address_Prefecture.focus();
        return false;
    }

    if ( (obj_Form.txt_Address_Street) && (obj_Form.txt_Address_Street.value == "" ))
    {
        alert( "住所を入力してください。" );
        obj_Form.txt_Address_Street.focus();
								obj_Form.txt_Address_Street.className = "err";
        return false;
    }

    if ( strVal_PageMode == "create")
    {
	    if ( (obj_Form.txt_Phone_1) && ( obj_Form.txt_Phone_1.value != "" )   )
	    {
			if ( Js_AccountForm_VerifyNumber( obj_Form.txt_Phone_1, errMsg_NumbersOnly ) == false )
			{
	            obj_Form.txt_Phone_1.select();
				return false;
			}
		}
		if ( (obj_Form.txt_Phone_2) && (obj_Form.txt_Phone_2.value != "" )  )	
		{		
			if ( Js_AccountForm_VerifyNumber( obj_Form.txt_Phone_2, errMsg_NumbersOnly ) == false )
			{
	            obj_Form.txt_Phone_2.select();
				return false;
			}
		}
		if ( (obj_Form.txt_Phone_3) && ( obj_Form.txt_Phone_3.value != "") )
		{
			if ( Js_AccountForm_VerifyNumber( obj_Form.txt_Phone_3, errMsg_NumbersOnly ) == false )
			{
	            obj_Form.txt_Phone_3.select();
				return false;
			}
		}
	}
	// 電話番号
	if ( (obj_Form.txt_Phone_1) && (obj_Form.txt_Phone_1.value == "" ))
	{
	    alert( "電話番号を入力してください。" );
		obj_Form.txt_Phone_1.focus();
		obj_Form.txt_Phone_1.className = "err";
		return false;
	}
	else
	{
	    if ( Js_AccountForm_VerifyNumber( obj_Form.txt_Phone_1, errMsg_NumbersOnly ) == false )
		{
	        obj_Form.txt_Phone_1.select();
			return false;
		}
	}
	if ( (obj_Form.txt_Phone_2) && (obj_Form.txt_Phone_2.value == "" ))
	{
	    alert( "電話番号を入力してください。" );
		obj_Form.txt_Phone_2.focus();
		obj_Form.txt_Phone_2.className = "err";
		return false;
	}
	else
	{
		if ( Js_AccountForm_VerifyNumber( obj_Form.txt_Phone_2, errMsg_NumbersOnly ) == false )
		{
	        obj_Form.txt_Phone_2.select();
			return false;
		}
	}
	if ( (obj_Form.txt_Phone_3) && (obj_Form.txt_Phone_3.value == "" ))
	{
	    alert( "電話番号を入力してください。" );
		obj_Form.txt_Phone_3.focus();
		obj_Form.txt_Phone_3.className = "err";
		return false;
	}
	else
	{
	    if ( Js_AccountForm_VerifyNumber( obj_Form.txt_Phone_3, errMsg_NumbersOnly ) == false )
		{
	        obj_Form.txt_Phone_3.select();
			return false;
		}
	}
    if ( (obj_Form.txt_Phone_1) && ((obj_Form.txt_Phone_1.value + obj_Form.txt_Phone_2.value + obj_Form.txt_Phone_3.value).length > 20 ) )
		{
			alert( "電話番号は、20文字以内で入力してください。" );
			obj_Form.txt_Phone_1.focus();
			obj_Form.txt_Phone_1.className = "err";
			return false;
		}

	
	// FAX番号
	if (strVal_PageMode == "modify") {
		if (trim(obj_Form.txt_Fax_1.value) == "" && trim(obj_Form.txt_Fax_2.value) == "" && trim(obj_Form.txt_Fax_3.value) == "") {
		}
		else {
			if (Js_CheckPhoneNumber(obj_Form.txt_Fax_1, "FAX番号を入力してください。") == false) {
				return false;
			}
			if (Js_CheckPhoneNumber(obj_Form.txt_Fax_2, "FAX番号を入力してください。") == false) {
				return false;
			}
			if (Js_CheckPhoneNumber(obj_Form.txt_Fax_3, "FAX番号を入力してください。") == false) {
				return false;
			}
			if ((trim(obj_Form.txt_Fax_1.value).length + trim(obj_Form.txt_Fax_2.value).length + trim(obj_Form.txt_Fax_3.value).length) > 20) {
				alert("FAX番号は、20文字以内で入力してください。");
				obj_Form.txt_Fax_1.focus();
				return false;
			}
		}
	}

	// Eメールアドレス
	if (obj_Form.txt_Email)
    {
		if (obj_Form.txt_Email.value == "" )
		{
			alert( "メールアドレスを入力してください。" );
			obj_Form.txt_Email.focus();
			obj_Form.txt_Email.className = "err";
			return false;
		}
		if (obj_Form.txt_Email.value.length > 50 )
		{
			alert( "メールアドレスは50文字以内で入力してください。" );
			obj_Form.txt_Email.focus();
			obj_Form.txt_Email.className = "err";
			return false;
		}
		if (ZenkakuCheck(obj_Form.txt_Email.value)) {
			alert("メールアドレスは半角文字で入力してください。");
			obj_Form.txt_Email.focus();
			obj_Form.txt_Email.className = "err";
			return false;
		}
		var atindex = obj_Form.txt_Email.value.indexOf("@");
		if ((atindex < 1) || (obj_Form.txt_Email.value.length -1 <= atindex)) {
			alert("メールアドレスの入力形式が間違っています。");
			obj_Form.txt_Email.focus();
			obj_Form.txt_Email.className = "err";
			return false;
		}
		if (obj_Form.txt_Email.value.indexOf("@", atindex +1) >= 0) {
			alert("メールアドレスの入力形式が間違っています。");
			obj_Form.txt_Email.focus();
			obj_Form.txt_Email.className = "err";
			return false;
		}
		// xxxx@xxxx.xxx の ドットチェック
		if (obj_Form.txt_Email.value.indexOf(".", atindex+1 +1) < 0) {
			alert("メールアドレスの入力形式が間違っています。");
			obj_Form.txt_Email.focus();
			obj_Form.txt_Email.className = "err";
			return false;
		}
		// 終端ドットチェック
		if (obj_Form.txt_Email.value.substr(obj_Form.txt_Email.value.length-1, 1) == ".") {
			alert("メールアドレスの入力形式が間違っています。");
			obj_Form.txt_Email.focus();
			obj_Form.txt_Email.className = "err";
			return false;
		}
		// 無効文字チェック
		if (obj_Form.txt_Email.value.match(/[\<\>\"\']/))  {
			alert("メールアドレスの入力形式が間違っています。");
			obj_Form.txt_Email.focus();
			obj_Form.txt_Email.className = "err";
			return false;
		}
	}

	var Industry_msg="業種を選択してください。";
	var Job_msg="職種を選択してください。";
	
	if ( strVal_PageMode == "modify")
	{
		if ( obj_Form.ddl_IndustrySuper.selectedIndex != -1 &&
			obj_Form.ddl_IndustrySuper.options[ obj_Form.ddl_IndustrySuper.selectedIndex ].value != Industry_msg
		 )
		{
			if ( obj_Form.ddl_IndustrySub.selectedIndex == -1 ) {
				alert( Industry_msg );
				obj_Form.ddl_IndustrySub.focus();
				obj_Form.ddl_IndustrySub.className = "err";
				return false;
			}
			if ( obj_Form.ddl_IndustrySub.options[ obj_Form.ddl_IndustrySub.selectedIndex ].value == Industry_msg )
			{
				alert( Industry_msg );
				obj_Form.ddl_IndustrySub.focus();
				obj_Form.ddl_IndustrySub.className = "err";
				return false;
			}
        
			if ( obj_Form.ddl_IndustryLow )
			{
				if ( obj_Form.ddl_IndustryLow.selectedIndex == -1 ) {
					alert( Industry_msg );
					obj_Form.ddl_IndustryLow.focus();
					obj_Form.ddl_IndustryLow.className = "err";
					return false;
				}
				if ( obj_Form.ddl_IndustryLow.options[ obj_Form.ddl_IndustryLow.selectedIndex ].value == Industry_msg )
				{
					alert( Industry_msg );
					obj_Form.ddl_IndustryLow.focus();
					obj_Form.ddl_IndustryLow.className = "err";
					return false;
				}
			}
		}
		if ( obj_Form.ddl_JobTop.selectedIndex != -1 &&
			obj_Form.ddl_JobTop.options[ obj_Form.ddl_JobTop.selectedIndex ].value != Job_msg
		 )
		{
			if ( obj_Form.ddl_JobLow.selectedIndex == -1 ) {
				alert( Job_msg );
				obj_Form.ddl_JobLow.focus();
				obj_Form.ddl_JobLow.className = "err";
				return false;
			}
			if ( obj_Form.ddl_JobLow.options[ obj_Form.ddl_JobLow.selectedIndex ].value == Job_msg )
			{
				alert( Job_msg );
				obj_Form.ddl_JobLow.focus();
				obj_Form.ddl_JobLow.className = "err";
				return false;
			}
		}
	}

    if ( (obj_Form.txt_UserHandle) && (obj_Form.txt_UserHandle.value == "" ))
    {
        alert( "ユーザIDを入力して下さい。" );
        obj_Form.txt_UserHandle.focus();
								obj_Form.txt_UserHandle.className = "err";
        return false;
    }
    else
    {
        if ( (obj_Form.txt_UserHandle) && (obj_Form.txt_UserHandle.value.length < 8 || obj_Form.txt_UserHandle.value.length > 12 ))
        {
            alert( "ユーザIDは、半角英数8文字以上12文字以内で入力して下さい。" );
            obj_Form.txt_UserHandle.focus();
												obj_Form.txt_UserHandle.className = "err";
            return false;
        }
		//　半角英数文字のみ許可
        if ( ( obj_Form.txt_UserHandle) && (Js_AccountForm_VerifyAlphaNumber( obj_Form.txt_UserHandle ) == false ))
        {
            alert( "ユーザIDは、半角英数8文字以上12文字以内で入力して下さい。" );
            obj_Form.txt_UserHandle.focus();
												obj_Form.txt_UserHandle.className = "err";
            return false;
        }
    }
    // パスワード
    // 新規登録画面、もしくは更新画面のパスワード入力時はチェックを行う。
    if ((strVal_PageMode == "create") || 
		(( strVal_PageMode == "modify") && ((obj_Form.txt_UserPassword.value != "" ) || ( obj_Form.txt_UserPassword_Confirm.value != "" ))))
    {
		if ( (obj_Form.txt_UserPassword) && (obj_Form.txt_UserPassword.value == "" ))
		{
			alert( "パスワードを入力して下さい。" );
			obj_Form.txt_UserPassword.select();
			obj_Form.txt_UserPassword.className = "err";
			return false;
		}
		if ( (obj_Form.txt_UserPassword_Confirm) && (obj_Form.txt_UserPassword_Confirm.value == "" ))
		{
			alert( "パスワードを再入力して下さい。" );
			obj_Form.txt_UserPassword_Confirm.select();
			obj_Form.txt_UserPassword_Confirm.className = "err";
			return false;
		}
		//ユーザーID、パスワード同値チェック
		if (strVal_PageMode == "create")
		{
			if ( (obj_Form.txt_UserHandle) && (obj_Form.txt_UserHandle.value == obj_Form.txt_UserPassword.value))
			{
				alert( "ユーザIDとパスワードは、同一設定を避けてご登録下さい。" );
				obj_Form.txt_UserPassword.value = "";
				obj_Form.txt_UserPassword_Confirm.value = "";
				obj_Form.txt_UserPassword.focus();
				obj_Form.txt_UserPassword.className = "err";
				return false;
			}
		}
		else
		{
			if (! Js_AccountForm_Password_Check(strVal_PageMode))
			{
					return false;
			}
		}
        if ( (obj_Form.txt_UserPassword) && (obj_Form.txt_UserPassword.value.length < passwordMinSize || obj_Form.txt_UserPassword.value.length > passwordMaxSize ))
        {
            alert( "パスワードは、半角英数" + passwordMinSize.toString() +"文字以上" + passwordMaxSize.toString()  + "文字以内で入力して下さい。" );
            obj_Form.txt_UserPassword.focus();
												obj_Form.txt_UserPassword.className = "err";
            return false;
        }
        if ( (obj_Form.txt_UserPassword) && (Js_AccountForm_VerifyAlphaNumberPlusSymbol( obj_Form.txt_UserPassword ) == false ))
        {
            alert( "パスワードは、半角英数" + passwordMinSize.toString() + "文字以上" + passwordMaxSize.toString()  + "文字以内で入力して下さい。" );
            obj_Form.txt_UserPassword.focus();
												obj_Form.txt_UserPassword.className = "err";
            return false;
        }
        if ( (obj_Form.txt_UserPassword) && (obj_Form.txt_UserPassword.value != obj_Form.txt_UserPassword_Confirm.value ))
        {
            alert( "パスワードを再度入力して下さい。" );
            obj_Form.txt_UserPassword_Confirm.value = "";
            obj_Form.txt_UserPassword.select();
												obj_Form.txt_UserPassword.className = "err";
            return false;
        }        
    } 
    
	if ( Js_HtmlObject_Exists( "chck_Deactivate" ) )
    {
        if ( obj_Form.chck_Deactivate.checked == true )
        {
            if ( confirm("メンバーを脱退します。よろしいですか？") )
            {
            }
            else
            {
                return false;
            }
        }
        else
        {
        }
    }
    return true;
}

function Js_HtmlObject_Exists( str_ObjectHandle )
{
    var bln_ToReturn = false;
    
	for (var i = 0; i < document.forms[0].elements.length; i++)
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


function Js_AccountForm_VerifyNumber( objFormInput, strAlertMsg )
{
    var blnToReturn = true;
    
    if ( (objFormInput) && ( ! objFormInput.value.match(/^[0-9]+$/) ) )
	{
	    if ( strAlertMsg != "" )
	    {
	        alert( strAlertMsg );
	    }		
		objFormInput.focus();
		blnToReturn = false;
	}
	return blnToReturn;	
}
//2010/12/27 ユーザーIDに"@"､"-"､"_"の3文字を許可する対応
function Js_AccountForm_VerifyAlphaNumberPlus3Chars( objFormInput, strAlertMsg )
{
	var blnToReturn = true;
	
	if ( ! objFormInput.value.match(/^[\w\@\-]+$/) )
	{
		if ( typeof strAlertMsg != "undefined" && strAlertMsg != "" )
		{
			alert( strAlertMsg );
		}		
		objFormInput.focus();
		blnToReturn = false;
	}
	return blnToReturn;	
}
function Js_AccountForm_VerifyAlphaNumber( objFormInput, strAlertMsg )
{
    var blnToReturn = true;
    
    if ( ! objFormInput.value.match(/^[A-Za-z0-9]+$/) )
	{
	    if ( typeof strAlertMsg != "undefined" && strAlertMsg != "" )
	    {
	        alert( strAlertMsg );
	    }		
		objFormInput.focus();
		blnToReturn = false;
	}
	return blnToReturn;	
}
function Js_AccountForm_VerifyAlphaNumberPlusSymbol( objFormInput, strAlertMsg )
{
    var blnToReturn = true;
    
    if ( ! objFormInput.value.match(/^[A-Za-z0-9\_\.\@\!\#\$\%\'\+\-\/\?\^\{\}\~\(\)\[\]\\\:]+$/) )
	{
	    if ( typeof strAlertMsg != "undefined" && strAlertMsg != "" )
	    {
	        alert( strAlertMsg );
	    }		
		objFormInput.focus();
		blnToReturn = false;
	}
	return blnToReturn;	
}

function Js_AccountForm_VerifyAlphaNumberMix( objFormInput, strAlertMsg )
{
    var blnToReturn = true;
    
    if ( ! objFormInput.value.match(/^[A-Za-z0-9]+$/) )
	{
		
	    if ( typeof strAlertMsg != "undefined" && strAlertMsg != "" )
	    {
	        alert( strAlertMsg );
	    }		
		objFormInput.focus();
		blnToReturn = false;
	}
	else if ( objFormInput.value.match(/^[A-Za-z]+$/) ) {
		if ( typeof strAlertMsg != "undefined" && strAlertMsg != "" )
	    {
	        alert( strAlertMsg );
	    }		
		objFormInput.focus();
		blnToReturn = false;
	}
	else if ( objFormInput.value.match(/^[0-9]+$/) ) {
		if ( typeof strAlertMsg != "undefined" && strAlertMsg != "" )
	    {
	        alert( strAlertMsg );
	    }		
		objFormInput.focus();
		blnToReturn = false;
	}
	return blnToReturn;	
}

function Js_AccountForm_VerifyHankaku( strValueToCheck )
{
	if (Js_Account_GetByte(strValueToCheck) != Js_Account_GetLength(strValueToCheck)) 
	{
		return false;
	}
	else
	{
		return true;
	}
}

function Js_Account_GetByte(str)
{
	if (str=="" || !str || str==null) return 0;
	str=Js_Account_trashGomi(str);
	var strS=str.replace(/[^0-9a-zｱ-ﾝ\!\"\#\$\%\&\'\(\)\-\=\^\~\\\|\@\`\[\{\;\+\:\*\]\}\,\<\.\>\/\?\_]/ig,"##");
	return strS.length;
}

function Js_Account_GetLength(str)
{
	if (str=="" || !str || str==null) return 0;
	str=Js_Account_trashGomi(str);
	var strS=str.replace(/[^0-9a-zｱ-ﾝ\!\"\#\$\%\&\'\(\)\-\=\^\~\\\|\@\`\[\{\;\+\:\*\]\}\,\<\.\>\/\?\_]/ig,"#");
	return strS.length;
}

function Js_Account_trashGomi(s) {
	s=unescape(escape(s).split("%00")[0]);
	return s;
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

function JsAccount_FormVerify_FrameDown_SignIn()
{
    var obj_Form = document.forms[0];
        var str_FrameBodyDetails = JsAccount_Get_FrameBodyDetails( "Down" );
    
    if ( obj_Form.txt_UserHandle.value == "" )
    {
        obj_Form.txt_UserHandle.select();
        return false;
    }
    /*
    if ( Js_AccountForm_VerifyAlphaNumber( obj_Form.txt_UserHandle, "半角文字を使用してください" ) == false )
    {
        obj_Form.txt_UserHandle.select();
        return false;
    }
    */
    if ( obj_Form.txt_Password.value == "" )
    {
        obj_Form.txt_Password.select();
        return false;
    }
    obj_Form.hddn_FrameBodyLocation.value = str_FrameBodyDetails;
    return true;
}

function JsAccount_Get_FrameBodyDetails( strClickSource )
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
        try {
	        if ( obj_FrameBody.name == "body" )
		    {
			    str_FrameBody_Url = obj_FrameBody.location;
			}
		}catch(e){}
    }
    return str_FrameBody_Url;
}

function Js_Controller_Account( strProcessType, strParameter1 ){
//alert('Js_Controller_Account' & strProcessType &":" & strParameter1 );

 var str_Url = "/account";
 var str_PopUpHandle_Name = "PopUpHandle_Account_Cr";
 var bln_ToReturn = false;

 switch ( strProcessType ){
		case "AccountCreateAgree":
		//メンバー登録画面
		if (location.href.toLowerCase().indexOf("/account/info_signin.aspx")>-1 || location.href.toLowerCase().indexOf("/account/popup_signin.aspx")>-1)	{
			Js_Controller_Account("AccountCreateAgreeLogin",strParameter1);
			return bln_ToReturn;
		}	else	{
			PopUpWindow_Account = Js_Reload_PopUp( PopUpWindow_Account );
			str_Url = str_Url + "/TermsAgreement.aspx";
			
			//fromTpoint
			if(strParameter1) str_Url = str_Url + strParameter1;
			
			PopUpWindow_Account = Js_AccountPopupWindow( str_Url, 1030, 860, "yes", "yes", "yes", str_PopUpHandle_Name );
			PopUpWindow_Account.focus();
		}
		break;
		
		case "AccountCreateRtm":
		//メンバー登録画面
		PopUpWindow_Account = Js_Reload_PopUp( PopUpWindow_Account );
		str_Url = "https://" + location.hostname + "/account/MemberRegist.aspx?mode=create&UsrHndle=&rtm=" + strParameter1;
		
		PopUpWindow_Account = Js_AccountPopupWindow( str_Url, 1030, 860, "yes", "yes", "yes", str_PopUpHandle_Name );
		PopUpWindow_Account.focus();
		break;
		
  case "AccountCreateAgreeLogin":
		// 2012/05/08
		//メンバー登録画面
		PopUpWindow_Account = Js_Reload_PopUp( PopUpWindow_Account );
		str_Url = str_Url + "/TermsAgreement.aspx";
		
		//fromTpoint
  if(strParameter1) str_Url = str_Url + strParameter1;
		
		// 2012/05/08 自ウインドウで開く
		location.replace( str_Url );
		window.resizeTo(1040, 860);
		var left = Math.floor((screen.width - 1040) / 2);
		var top = Math.floor((screen.height - 860) / 2);
		window.moveTo(left, top);
		break;
		
		case "AccountCreate":
		PopUpWindow_Account = Js_Reload_PopUp( PopUpWindow_Account );
		// HTTPS化します
		str_Url = "https://" + location.hostname + "/account/MemberRegist.aspx?mode=create&UsrHndle=";
		PopUpWindow_Account = Js_AccountPopupWindow( str_Url, 1030, 860, "yes", "yes", "yes", str_PopUpHandle_Name );
		PopUpWindow_Account.focus();
		break;
		
		case "AccountModify":
		PopUpWindow_Account = Js_Reload_PopUp( PopUpWindow_Account );
		str_Url = "https://" + location.hostname + "/account/MemberModify.aspx?mode=modify&UsrHndle=" + strParameter1;
		PopUpWindow_Account = Js_AccountPopupWindow( str_Url, 1030, 860, "yes", "yes", "yes", str_PopUpHandle_Name );
		PopUpWindow_Account.focus();
		break;
		
		case "CouponInfo":
		PopUpWindow_Account = Js_Reload_PopUp( PopUpWindow_Account );
		str_Url = "https://" + location.hostname + "/Coupon/CouponInfo.aspx";
		PopUpWindow_Account = Js_AccountPopupWindow( str_Url, 1030, 860, "yes", "yes", "yes", str_PopUpHandle_Name );
		PopUpWindow_Account.focus();
		break;
		
		case "AccountPasswordRetrieve":
		PopUpWindow_Account = Js_Reload_PopUp( PopUpWindow_Account );
		// HTTPS化します
		str_Url = "https://" + location.hostname + "/account/PasswordRetrieve.aspx";
		//str_Url = str_Url + "/PasswordRetrieve.aspx";
		PopUpWindow_Account = Js_AccountPopupWindow( str_Url, 472, 600, "yes", "yes", "yes", str_PopUpHandle_Name );
		PopUpWindow_Account.focus();
		break;
		
		case "model":
		PopUpWindow_Account = Js_Reload_PopUp( PopUpWindow_Account );
		str_Url = "/PhotoModel/ModelEntry.aspx";
		PopUpWindow_Account = Js_AccountPopupWindow( str_Url, 489, 860, "yes", "yes", "yes", str_PopUpHandle_Name );
		PopUpWindow_Account.focus();
		break;
		
		case "sakka":
		PopUpWindow_Account = Js_Reload_PopUp( PopUpWindow_Account );
		str_Url = "/contract/entry.aspx";
		PopUpWindow_Account = Js_AccountPopupWindow( str_Url, 489, 860, "yes", "yes", "yes", str_PopUpHandle_Name );
		PopUpWindow_Account.focus();
		break;
	}
	return bln_ToReturn;
}

function Js_Reload_PopUp( objPopUp )
{
    if ( objPopUp )
    {
        objPopUp.close();
        objPopUp = null;
    }
    else
    {        
    }
    return objPopUp;
}

function Js_AccountPopupWindow(url, w, h, st, sc, rs, name)
{
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
	// ウインドウを前面に移動
	return win;
}

function JsAccount_HtmlFrames_Exists( obj_Document, str_ObjectHandle )
{
    var bln_ToReturn = false;
	for ( var i = 0; i < obj_Document.frames.length; i++ )
	{
		currentObj = obj_Document.frames[i];
		try {
		    currentObjName = currentObj.name;
			if ( currentObjName == str_ObjectHandle )
			{
				return true;
			}
		}catch(e) {}
	}
	return false;
}

function JsAccount_SignIn_ReloadFrames()
{
    var bln_FrameBody_Exists = false;
    var bln_FrameDown_Exists = false;
    var str_Url_Body = "";
    var str_Url_Down = "";
    try {
		var obj_WindowOpener = window.opener.parent;
	}
	catch(e) {
		var obj_WindowOpener = false;
		alert("ログインしました。元の画面を更新してください。");
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

            if ( StrObj_Url_Down_2.indexOf( "/lightbox/guest/accountguest_", 0 ) != -1 )
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
				if( window.opener.opener ){
					var obj_WindowOpenerOpener = window.opener.opener.parent;
				}
			}
			catch(e) {
				obj_WindowOpenerOpener = false;
				alert("ログインしました。元の画面を更新してください。");
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

					if ( StrObj_Url_Down_2.indexOf( "/guest/lightbox/accountguest_", 0 ) != -1 )
					{
						obj_WindowOpenerOpener.down.location.replace( ( StrObj_Url_Down_2 ).replace( "accountguest_viewm", "AccountMember_ViewM" ) );
					}
					else
					{
						obj_WindowOpenerOpener.down.location.reload();
					}
					window.opener.location.reload();
				}
				else {
					try {
						obj_WindowOpenerOpener.location.reload();
			            obj_WindowOpener.location.reload();
					} catch(e){}
					alert("ログインしました。元の画面を更新してください。");
				}
			}
		}
		obj_WindowOpener.focus();
    }
	
	window.close();
}

function JsAccount_SignIn_ReloadFrames2()
{
    var bln_FrameBody_Exists = false;
    var bln_FrameDown_Exists = false;
    var str_Url_Body = "";
    var str_Url_Down = "";
    try {
		var obj_WindowOpener = window.opener.parent;
	}
	catch(e) {
		var obj_WindowOpener = false;
		alert("ログインしました。元の画面を更新してください。");
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

            if ( StrObj_Url_Down_2.indexOf( "/lightbox/guest/accountguest_", 0 ) != -1 )
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
				var obj_WindowOpenerOpener = window.opener.opener.parent;
			}
			catch(e) {
				obj_WindowOpenerOpener = false;
				alert("ログインしました。元の画面を更新してください。");
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

					if ( StrObj_Url_Down_2.indexOf( "/guest/lightbox/accountguest_", 0 ) != -1 )
					{
						obj_WindowOpenerOpener.down.location.replace( ( StrObj_Url_Down_2 ).replace( "accountguest_viewm", "AccountMember_ViewM" ) );
					}
					else
					{
						obj_WindowOpenerOpener.down.location.reload();
					}
					window.opener.location.reload();
				}
				else {
					try{
						window.opener.location.reload();
						window.opener.opener.top.location.reload();
					}
					catch(e) {
						alert("ログインしました。元の画面を更新してください。");
					}
				}
			}
		}
    }
}

//2007/11/05 kuramochi Start
function JsAccount_SignIn_ReloadClose(argOption1)
{
//alert('JsAccount_SignIn_ReloadClose');
	try {
		var obj_WindowOpener = window.opener.parent;
		obj_WindowOpener.focus();
		window.opener.location.reload();
	}
	catch(e) {
	}
	
	if(!argOption1)
	{
		window.close();
	}
}
//2007/11/05 kuramochi End

// custom統合
function JsAccount_SignIn_ReloadParentClose()
{
	try {
		var obj_WindowOpener = window.opener.top;
		obj_WindowOpener.focus();
		obj_WindowOpener.location.reload(true);
	}
	catch(e) {
		alert("ログインしました。元の画面を更新してください。");
	}
	
	SetTimerWindowClose(1000);
}

function SetTimerWindowClose(iTimer)
{
	if ( (navigator.userAgent.indexOf("Safari") > 0 && navigator.userAgent.indexOf("Chrome") < 0 ) || navigator.userAgent.indexOf("Firefox") > 0 )
	{
		setTimeout( function() {window.close();}, iTimer);
	}
	else
	{
		window.close();
	}
}
// custom統合

// ログイン後、カート画面に遷移
function JsAccount_SignIn_GoToCart()
{
	try {
		var obj_WindowOpener = window.opener.top;
		obj_WindowOpener.focus();
		obj_WindowOpener.location.replace("http://" + location.hostname + "/OrderBox/OpenLarge.aspx");
	}
	catch(e) {
		alert("ログインしました。元の画面を更新してください。");
	}
	
	SetTimerWindowClose(1000);
}

function Js_PasswordRetrieval()
{
	/*---------*/
	/* HTTPS化 */
	/*---------*/
    var str_Url = "https://" + location.hostname + "/account/PasswordRetrieve.aspx";
    //var str_Url = "/account/PasswordRetrieve.aspx";
    
    PopUpWindow_Account = Js_AccountPopupWindow( str_Url, 472, 600, "yes", "yes", "yes", "PopUpHandle_Account_Cr" );
    PopUpWindow_Account.focus();
}


// --- custom統合 ------------------------------
function Js_PasswordRetrievalWithSitePath(site)
{
	/*---------*/
	/* HTTPS化 */
	/*---------*/
    var str_Url = "https://" + location.hostname + "/account/PasswordRetrieve.aspx?site=" + site;
    //var str_Url = "/account/PasswordRetrieve.aspx";
    
    PopUpWindow_Account = Js_AccountPopupWindow( str_Url, 472, 600, "yes", "yes", "yes", "PopUpHandle_Account_Cr" );
    PopUpWindow_Account.focus();
}
// --- custom統合 ------------------------------

function JsAccount_SignInReload( strUrlFrameBody, strUrlFrameDown )
{
	var obj_Opener;
	var int_Index = 0;
	var str_ToPopUp = "";
	var str_Url_Top = "";
	var str_Url_FrameBody = "";
	var str_Url_FrameDown = "";
	
	obj_Opener = window.opener;
	if ( obj_Opener )
	{
	    if ( obj_Opener.parent.frames.length > 0 )
	    {
	        str_ToPopUp = obj_Opener.document.location + "\n";
	        str_ToPopUp = str_ToPopUp + obj_Opener.parent.document.location + "\n";
	        str_ToPopUp = str_ToPopUp + obj_Opener.parent.frames[0].document.location + "\n";
	        str_ToPopUp = str_ToPopUp + obj_Opener.parent.frames[1].document.location + "\n";
	        str_Url_Top = obj_Opener.parent.document.location;
	        str_Url_Top = JsAccount_RemoveFrom_QueryString( str_Url_Top, "BoxMode" );
	        str_Url_Top = JsAccount_RemoveFrom_QueryString( str_Url_Top, "BoxSize" );
	        str_Url_Top = JsAccount_RemoveFrom_QueryString( str_Url_Top, "BoxType" );
	        if ( str_Url_Top.split( '?' ).length > 1 )
	        {
	            str_Url_Top = str_Url_Top + "&BoxMode=0";
	        }
	        else
	        {
	            str_Url_Top = str_Url_Top + "?BoxMode=0";
	        }
	        obj_Opener.parent.document.location = str_Url_Top;
	        window.close();
	    }
	    else
	    {
	    }
	}
	else
	{
	    window.close();
	}
}

function JsAccount_PopUp_ReloadAfterSignIn_BoxModeNoChange()
{
    var obj_Top;
    var obj_FrameBody;
    var obj_FrameDown;
    var obj_FrameDown_Form;

    obj_Top = self.opener.parent.top;
    if ( obj_Top.frames.length == 2 )
    {
        obj_FrameBody = obj_Top.frames[ 0 ]
        obj_FrameDown = obj_Top.frames[ 1 ];
        obj_FrameBody.location.reload();
        obj_FrameDown.location.reload();
    }
}

function JsAccount_ReloadFrames_ViaMemberCreate()
{
    var bln_FrameBody_Exists = false;
    var bln_FrameDown_Exists = false;
    
    var str_Url_Body = "";
    var str_Url_Down = "";

    var obj_WindowOpener = window.opener.parent;
    
    if ( obj_WindowOpener )
    {
        bln_FrameBody_Exists = JsAccount_HtmlFrames_Exists( obj_WindowOpener, "body" );
        bln_FrameDown_Exists = JsAccount_HtmlFrames_Exists( obj_WindowOpener, "down" );
        
        if ( ( bln_FrameBody_Exists ) && ( bln_FrameDown_Exists ) )
        {
			try{
	            str_Url_Body = obj_WindowOpener.body.location;
	            str_Url_Down = obj_WindowOpener.down.location;
	            
	            obj_WindowOpener.body.location.reload();
	            // obj_WindowOpener.down.location.reload();
	            obj_WindowOpener.down.location.replace( '/account/navigation.aspx' );
			} catch( ex ){}
        //2008/06/30 kuramochi Start        
        }else{    
			window.opener.location.reload();
		//2008/06/30 kuramochi End            
        }
    }
    else
    {
    	alert("333");
    
    }
    obj_WindowOpener.focus();
	window.close();
}

function JsAccount_ReloadFrames_ViaMemberCreate_new(url)
{
    var bln_FrameBody_Exists = false;
    var bln_FrameDown_Exists = false;
    
    var str_Url_Body = "";
    var str_Url_Down = "";

    var obj_WindowOpener2 = window.opener;
    if ( obj_WindowOpener2 )
    {
		var obj_WindowOpener = window.opener.parent;
	    
		if ( obj_WindowOpener )
		{
			bln_FrameBody_Exists = JsAccount_HtmlFrames_Exists( obj_WindowOpener, "body" );
			bln_FrameDown_Exists = JsAccount_HtmlFrames_Exists( obj_WindowOpener, "down" );
	        
			if ( ( bln_FrameBody_Exists ) && ( bln_FrameDown_Exists ) )
			{
				try{
					str_Url_Body = obj_WindowOpener.body.location;
					str_Url_Down = obj_WindowOpener.down.location;
		            
					obj_WindowOpener.body.location.reload();
//	ショッピングカートを詳細表示している状態だと、downは/OrderBox/OpenLarge.aspxだから、書き換えるのはNG。reload()でOKでは？
					obj_WindowOpener.down.location.reload();
//					obj_WindowOpener.down.location.replace( '/account/navigation.aspx' );
				} catch( ex ){}
			//2008/06/30 kuramochi Start        
			} else {
				try {
					window.opener.location.reload();
				} catch (e) {
					var protocol = window.location.protocol;
					if (protocol != null && protocol == "http:") {
						var currentUrl = window.location.href.replace(protocol, "https:");
						window.location.href = currentUrl;
					}
				}
			//2008/06/30 kuramochi End
			}
		}
    }

	if ( url != '' ) {
		location.replace( "https://" + location.hostname + "/account/cstmrcrd/index.aspx" );
	}
}

function JsAccount_ReloadFrames_ViaMemberModify() {
    var bln_FrameBody_Exists = false;
    var bln_FrameDown_Exists = false;
    var str_Url_Body = "";
    var str_Url_Down = "";

    var obj_WindowOpener = window.opener.parent;

    if (obj_WindowOpener) {
        bln_FrameBody_Exists = JsAccount_HtmlFrames_Exists(obj_WindowOpener, "body");
        bln_FrameDown_Exists = JsAccount_HtmlFrames_Exists(obj_WindowOpener, "down");

        if ((bln_FrameBody_Exists) && (bln_FrameDown_Exists)) {
            try {
                str_Url_Body = obj_WindowOpener.body.location;
                str_Url_Down = obj_WindowOpener.down.location;

                obj_WindowOpener.body.location.reload();
                obj_WindowOpener.down.location.reload();
            } catch (ex) { }
        } else {
            window.opener.location.reload();
        }
    }
    else {
        alert("333");

    }
    obj_WindowOpener.focus();
    window.close();
}

function JsAccount_ReloadFrames_ViaMemberDeactivate()
{
    var bln_FrameBody_Exists = false;
    var bln_FrameDown_Exists = false;
    var str_Url_Top = "";
    var str_Url_Body = "";
    var str_Url_Down = "";
    var obj_StrUrlTop;
    var obj_StrUrlBody;
    var obj_StrUrlDown;
    var str_TopLocationPathName = "";
    var str_TopLocationSearch = "";
    var str_FrameBodyLocation_Path = "";
    var str_FrameBodyLocation_Query = "";
    var str_RedirectUrl = "";
    var str_JsAlert = "";
    var obj_WindowOpener = window.opener.parent;
    
    //alert( "1" );
    
    if ( obj_WindowOpener )
    {
        //alert( "2" );

        str_Url_Top = "/account/MemberModifyComplete.aspx"//obj_WindowOpener.top.location;
        //alert( "2.1" );
        str_Url_Top = JsAccount_RemoveFrom_QueryString( str_Url_Top, 'BoxMode' );
        //alert( "2.2" );
        str_Url_Top = JsAccount_RemoveFrom_QueryString( str_Url_Top, 'BoxSize' );
        //alert( "2.3" );
        str_Url_Top = JsAccount_RemoveFrom_QueryString( str_Url_Top, 'BxMd' );
        //alert( "2.4" );
        str_Url_Top = JsAccount_RemoveFrom_QueryString( str_Url_Top, 'BxSz' );
        //alert( "2.5" );
        str_Url_Top = JsAccount_RemoveFrom_QueryString( str_Url_Top, 'BxHndl' );
        //alert( "2.6" );
        str_Url_Top = JsAccount_RemoveFrom_QueryString( str_Url_Top, 'BxLbl' );
        //alert( "2.7" );
		//alert( str_Url_Top );
		//alert( "2.8" );
        obj_StrUrlTop = new String( str_Url_Top );
        if ( obj_StrUrlTop.indexOf( '?' ) > 0 )
        {
            //alert( "3" );
            str_TopLocationPathName = obj_StrUrlTop.split( '?' )[ 0 ];
            str_TopLocationSearch = obj_StrUrlTop.split( '?' )[ 1 ];
        }
        else
        {
            //alert( "4" );
            str_TopLocationPathName = obj_StrUrlTop;
            //alert( str_TopLocationPathName );
            str_TopLocationSearch = "";
        }

		//alert( "5" );
        bln_FrameBody_Exists = JsAccount_HtmlFrames_Exists( obj_WindowOpener, "body" );
        //alert( "5.1" );
        bln_FrameDown_Exists = JsAccount_HtmlFrames_Exists( obj_WindowOpener, "down" );
        //alert( "5.2" );
        if ( ( bln_FrameBody_Exists ) && ( bln_FrameDown_Exists ) )
        {           
            str_Url_Body = obj_WindowOpener.body.location;
            str_Url_Body = JsAccount_RemoveFrom_QueryString( str_Url_Body, 'BoxMode' );
            str_Url_Body = JsAccount_RemoveFrom_QueryString( str_Url_Body, 'BoxSize' );
            str_Url_Body = JsAccount_RemoveFrom_QueryString( str_Url_Body, 'BxMd' );
            str_Url_Body = JsAccount_RemoveFrom_QueryString( str_Url_Body, 'BxSz' );
            str_Url_Body = JsAccount_RemoveFrom_QueryString( str_Url_Body, 'BxHndl' );
            str_Url_Body = JsAccount_RemoveFrom_QueryString( str_Url_Body, 'BxLbl' );
            obj_StrUrlBody = new String( str_Url_Body );
            if ( obj_StrUrlBody.indexOf( '?' ) > 0 )
            {
				//alert( "6" );
                str_FrameBodyLocation_Path = obj_StrUrlBody.split( '?' )[ 0 ];
                str_FrameBodyLocation_Query = obj_StrUrlBody.split( '?' )[ 1 ];
            }
            else
            {
				//alert( "7" );
                str_FrameBodyLocation_Path = obj_StrUrlBody;
                str_FrameBodyLocation_Query = "";
            }
            //alert( "8" );
            str_Url_Down = obj_WindowOpener.down.location;
            obj_StrUrlDown = new String( str_Url_Down );
            str_JsAlert = str_JsAlert + str_TopLocationPathName + "\n";
            str_JsAlert = str_JsAlert + str_TopLocationSearch + "\n";
            str_JsAlert = str_JsAlert + str_FrameBodyLocation_Path + "\n";
            str_JsAlert = str_JsAlert + str_FrameBodyLocation_Query + "\n";
            obj_WindowOpener.top.location.replace( "/" );
        }
        else {
			window.opener.location.reload();
        }
    }
    //alert( "9" );
    

}

function Js_AccountForm_PasswordRetrieval_Verify()
{
    var obj_Form = document.forms[0];
    
    if ( obj_Form.txt_UserEmail.value == "" )
    {
        alert( "メールアドレスを入力してください。" );
        obj_Form.txt_UserEmail.focus();
        return false;
    }
	if (obj_Form.txt_UserEmail.value.length > 50 )
	{
		alert( "メールアドレスは50文字以内で入力してください。" );
		obj_Form.txt_UserEmail.focus();
		return false;
	}
	if (ZenkakuCheck(obj_Form.txt_UserEmail.value)) {
		alert("メールアドレスは半角文字で入力してください。");
		obj_Form.txt_UserEmail.focus();
		return false;
	}
	var atindex = obj_Form.txt_UserEmail.value.indexOf("@");
	if ((atindex < 1) || (obj_Form.txt_UserEmail.value.length -1 <= atindex)) {
		alert("メールアドレスの入力形式が間違っています。");
		obj_Form.txt_UserEmail.focus();
		return false;
	}
	if (obj_Form.txt_UserEmail.value.indexOf("@", atindex +1) >= 0) {
		alert("メールアドレスの入力形式が間違っています。");
		obj_Form.txt_UserEmail.focus();
		return false;
	}
	// xxxx@xxxx.xxx の ドットチェック
	if (obj_Form.txt_UserEmail.value.indexOf(".", atindex+1 +1) < 0) {
		alert("メールアドレスの入力形式が間違っています。");
		obj_Form.txt_UserEmail.focus();
		return false;
	}
	// 終端ドットチェック
	if (obj_Form.txt_UserEmail.value.substr(obj_Form.txt_UserEmail.value.length-1, 1) == ".") {
		alert("メールアドレスの入力形式が間違っています。");
		obj_Form.txt_UserEmail.focus();
		return false;
	}
	// 無効文字チェック
	if (obj_Form.txt_UserEmail.value.match(/[\<\>\"\']/))  {
		alert("メールアドレスの入力形式が間違っています。");
		obj_Form.txt_UserEmail.focus();
		return false;
	}
    if ( obj_Form.txt_UserTel1.value == "" )
    {
        alert( "電話番号が正しく入力されていません。" );
        obj_Form.txt_UserTel1.focus();
        return false;
    }
    if ( obj_Form.txt_UserTel2.value == "" )
    {
        alert( "電話番号が正しく入力されていません。" );
        obj_Form.txt_UserTel2.focus();
        return false;
    }
    if ( obj_Form.txt_UserTel3.value == "" )
    {
        alert( "電話番号が正しく入力されていません。" );
        obj_Form.txt_UserTel3.focus();
        return false;
    }
    return true;
}

function JsAccount_RemoveFrom_QueryString( strUrl, strName )
{
	var str_PathUrl = "";
	var str_Query = "";
	var str_Temp = "";
	var obj_Url;
	var ObjStr_Temp = new String( strUrl );
	var int_Index = 0;
	
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

	// name=xxxを削除
	if ( str_Query.replace( " ", "" ) != "" )
	{
	    var obj_Temp = new String( str_Query );
		var arr_Query = obj_Temp.split("&");
		str_Query = "";
		for ( int_Index = 0; int_Index < arr_Query.length; int_Index++ )
		{
		    str_Temp = arr_Query[int_Index];
		    if ( arr_Query[int_Index].indexOf( strName + "=" ) == 0 )
		    {
		        // あり
		    }
		    else
		    {
		        str_Query = str_Query + arr_Query[int_Index] + "&";
		    }
		}
	}
	else
	{
	    // alert( "catch 1" );
	}
	if ( str_Query != "" )
	{
	    str_PathUrl = str_PathUrl + "?" + str_Query;
	}
	return str_PathUrl;
}

//2007/07/05 kuramochi Start
function Enquete_MarketResearch()
{
	//alert( document.forms[0].Txt_Opinion.value.length );
    if((document.forms[0].Txt_Opinion.value.length > 50)&&(document.forms[0].Txt_Opinion.value.length != 0))
    {
        alert( "当サイトご利用のご意見ご感想は50文字以内で入力してください。" );
		document.forms[0].Txt_Opinion.focus();
        return false;
    }
    
    if((document.forms[0].Txt_CompanyNm.value.length > 30)&&(document.forms[0].Txt_CompanyNm.value.length != 0))
    {
        alert( "30文字以内で入力してください。" );
		document.forms[0].Txt_CompanyNm.focus();
        return false;
    }    
}
//2007/07/05 kuramochi End


function jsRegistMailMagazine(id)
{
jsPopUpMailRegistSuccess('Regist');
return ;

	var blnState=false;
	var uniqueCookieStr;
	
	var uniqueExecTime='RegistMailMagazine'

	//戻るボタン対策 (既に実行済みである場合は何もしない)
	cookieList = document.cookie.split(';');
	
	uniqueCookieStr = escape(uniqueExecTime) + '=0';
	for (i = 0; i < cookieList.length; i++)
	{
		if (cookieList[i].indexOf(uniqueCookieStr) >= 0)
		{
			blnState=true;
				break;
		}
	}

	if (blnState)
	{
	}
	else
	{
		uniqueCookieStr = escape(uniqueExecTime) + '=1';
		for (i = 0; i < cookieList.length; i++)
		{
			if (cookieList[i].indexOf(uniqueCookieStr) >= 0)
			{
				return false;
			}
		}
	}
	
	//cookieに実行済み情報を書き込み
	document.cookie = escape(uniqueExecTime) + '=1;';

	var IsChrome=false;
	 if( navigator.appVersion.indexOf("Chrome") > -1)
	{
      	IsChrome=true;
	}
	
	if (!IsChrome)
	{
		jsPopUpMailRegistSuccess();
	}
	else
	{
		jsPopUpMailRegistSuccess();
	}
}


function myclick(id)
{
	var elm = document.getElementById(id);

    var evt = document.createEvent("MouseEvents");
    evt.initEvent("click", false, true);
    elm.dispatchEvent(evt);
}

function jsPopUpMailRegistSuccess(argType)
{

		PopUpWindow_Account = Js_Reload_PopUp( PopUpWindow_MailMagazine );
		
		switch(argType)
		{
		case 'Regist':
			str_Url = "/account/Popup_signIn.aspx?RegistMailMagazine=Regist";
            break;
		default:
			str_Url = "/account/Popup_signIn.aspx?RegistMailMagazine=Success";
		}
		
		PopUpWindow_MailMagazine = Js_AccountPopupWindow( str_Url, 500, 700, "yes", "yes", "yes", strPopUpWindow_MailMagazine_HandleName );
		PopUpWindow_MailMagazine.focus();

}
function myonload(){
	errtxt = getElementsByClassName("error-txt");
	if(errtxt.length == 0){
		document.Form1.txt_Name_Shi.focus();
	} else {
		if ((document.Form1.txt_UserHandle) && (document.Form1.txt_UserHandle.className == "err")) {
			document.Form1.txt_UserHandle.focus();
		} else if(document.Form1.txt_Email.className == "err"){
			document.Form1.txt_Email.focus();
		}
	}
}

function JS_SetMailAddToDecode(){
	var MailAdd = document.getElementById("txt_mail_address");
	var MailEnc = document.getElementById("hidden_mailadd_enc");
	var MailErr = document.getElementById("hidden_mailadd_err");
	if (MailErr.value == "1")  {
		MailAdd.value = decodeURI(MailEnc.value); //デコード
		MailEnc.value = "" //初期化
		MailErr.value = "" //初期化
	}
}

function JS_CheckSymbolsToEncode(){
	var MailAdd = document.getElementById("txt_mail_address");
	var MailEnc = document.getElementById("hidden_mailadd_enc");
	var MailErr = document.getElementById("hidden_mailadd_err");
	if (MailAdd.value.match(/[\<\>\"\']/))  {
		MailEnc.value = encodeURI(MailAdd.value); //エンコード
		MailAdd.value = ""
		MailErr.value = "1";
	}else{
		MailEnc.value = ""; //初期化
		MailErr.value = ""; //初期化
	}
}

function Js_CheckPhoneNumber(objFormInput, errMsg_NotInput) {
	if (trim(objFormInput.value) == "") {
		alert(errMsg_NotInput);
		objFormInput.focus();
		objFormInput.className = "err";
		return false;
	} else {
		if (Js_AccountForm_VerifyNumber(objFormInput, '数値を入力してください') == false) {
			// 数字以外が入力された場合は警告ダイアログを表示 
			objFormInput.select();
			return false;
		}
	}
	return true;
}
function getElementsByClassName(search)
{
	if (!document.getElementsByClassName) {
		var d = document, elements, pattern, i, results = [];
		if (d.querySelectorAll) { // IE8
		  return d.querySelectorAll("." + search);
		}
		if (d.evaluate) { // IE6, IE7
		  pattern = ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
		  elements = d.evaluate(pattern, d, null, 0, null);
		  while ((i = elements.iterateNext())) {
			results.push(i);
		  }
		} else {
		  elements = d.getElementsByTagName("*");
		  pattern = new RegExp("(^|\\s)" + search + "(\\s|$)");
		  for (i = 0; i < elements.length; i++) {
			if ( pattern.test(elements[i].className) ) {
			  results.push(elements[i]);
			}
		  }
		}
		return results;
	}else{
		return document.getElementsByClassName(search);
	}
}