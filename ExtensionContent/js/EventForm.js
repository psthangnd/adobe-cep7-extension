function CheckText(name, value, need, min, max, format) {

	if (value.length == 0) {
		if (need == true) {
//			alert(name + "が入力されていません。");
			return false;
		}
	}
	else {
		var len = getByte(value);

		if (min == max) {
			if (value.length != min) {
//				alert(name + "は" + min + "文字で入力してください。");
				return false;
			} 
		} else {
			if ((0 < min) && (value.length < min)) {
//				alert(name + "は" + min + "文字以上入力してください。");
				return false;
			}	
			if ((0 < max) && (max < value.length)) {
//				alert(name + "は" + max + "字以内で入力して下さい。");
				return false;			
			}	
		}
		switch (format) {
			case "Hankaku":
				if (ZenkakuCheck(value)) {
					alert(name+"は半角文字で入力してください。");
					return false;
				}
				break;
			case "Zenkaku":
				break;
			case "EndUser":
				break;
			case "AlphaNum":
				if (! (value.match(/^[A-Za-z0-9]+$/)) ) {
					alert(name+"は半角英数で入力してください。");
					return false;
				}
				break;
			case "Alphabet":
				if (! (value.match(/^[A-Za-z]+$/)) ) {
					alert(name+"は半角英字で入力してください。");
					return false;
				}
				break;
			case "CardNo":
				if (! (value.match(/^[0-9]+$/)) ) {
					alert(name+"は半角数字で入力してください。");
					return false;
				}
				break;
			case "E-mail":
				if (CheckText(name, value, need, min, max, "Hankaku")) {
					var atindex = value.indexOf("@");
					if ((atindex < 1) || (value.length -1 <= atindex)) {
						alert(name+"の入力形式が間違っています。");
						return false;
					}
					if (value.indexOf("@", atindex+1) >= 0) {
						alert(name+"の入力形式が間違っています。");
						return false;
					}
					// xxxx@xxxx.xxx の ドットチェック
					if (value.indexOf(".", atindex+1 +1) < 0) {
						alert(name+"の入力形式が間違っています。");
						return false;
					}
					// 終端ドットチェック
					if (value.substr(value.length-1, 1) == ".") {
						alert(name+"の入力形式が間違っています。");
						return false;
					}
					// 無効文字チェック
					if (value.match(/[\<\>\"\']/))  {
						alert(name+"の入力形式が間違っています。");
						return false;
					}
				} else {
					return false;
				}
				break;
			case "Tel":
				if (! (value.match(/^[0-9\-\(\)]+$/)) ) {
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;
			case "tel1":
				if ( ! ( value.match(/^[0-9]+$/) ) ) 
				{
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;
			case "tel2":
				if ( ! ( value.match(/^[0-9]+$/) ) ) 
				{
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;
			case "tel3":
				if ( ! ( value.match(/^[0-9]+$/) ) ) 
				{
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;
			case "Fax":
				if (! (value.match(/^[0-9\-\(\)]+$/)) ) {
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;
			case "fax1":
				if ( ! ( value.match(/^[0-9]+$/) ) ) 
				{
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;
			case "fax2":
				if ( ! ( value.match(/^[0-9]+$/) ) ) 
				{
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;				
			case "fax3":
				if ( ! ( value.match(/^[0-9]+$/) ) ) 
				{
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;
			case "Number":
				if ( ! ( value.match(/^[0-9]+$/) ) ) 
				{
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;
			case "URL":
				//RFC 3986
				//pchar＋reserved＋escape
				if (! value.match(/^[a-zA-Z0-9\-\.\_\~\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\%]+$/) )
				{
					alert(name+"の入力形式が間違っています。");
					return false;
				}
			default:
				break;
		}
	}
	return true;
}

// 全角文字が含まれていたらtrueを返す
function ZenkakuCheck(moji) {
	if (getByte(moji) != getLength(moji)) {
		return true;
	} else {
		return false;
	}
}

function getByte(str) {
	if (str=="" || !str || str==null) return 0;
	str=trashGomi(str);
	var strS=str.replace(/[^0-9a-zｱ-ﾝ\!\"\#\$\%\&\'\(\)\-\=\^\~\\\|\@\`\[\{\;\+\:\*\]\}\,\<\.\>\/\?\_]/ig,"##");
	return strS.length;
}

function getLength(str) {
	if (str=="" || !str || str==null) return 0;
	str=trashGomi(str);
	var strS=str.replace(/[^0-9a-zｱ-ﾝ\!\"\#\$\%\&\'\(\)\-\=\^\~\\\|\@\`\[\{\;\+\:\*\]\}\,\<\.\>\/\?\_]/ig,"#");
	return strS.length;
}

function trashGomi(s) {
	s=unescape(escape(s).split("%00")[0]);
	return s;
}

function CheckTextForMonitor(name, value, need, min, max, format) {

	if (value.length == 0) {
		if (need == true) {
			alert(name + "が入力されていません。");
			return false;
		}
	}
	else {
		var len = getByte(value);

		if (min == max) {
			if (value.length != min) {
//				alert(name + "は" + min + "文字で入力してください。");
				return false;
			} 
		} else {
			if ((0 < min) && (value.length < min)) {
//				alert(name + "は" + min + "文字以上入力してください。");
				return false;
			}	
			if ((0 < max) && (max < value.length)) {
//				alert(name + "は" + max + "字以内で入力して下さい。");
				return false;			
			}	
		}
		switch (format) {
			case "Hankaku":
				if (ZenkakuCheck(value)) {
					alert(name+"は半角文字で入力してください。");
					return false;
				}
				break;
			case "Zenkaku":
				break;
			case "EndUser":
				break;
			case "AlphaNum":
				if (! (value.match(/^[A-Za-z0-9]+$/)) ) {
					alert(name+"は半角英数で入力してください。");
					return false;
				}
				break;
			case "Alphabet":
				if (! (value.match(/^[A-Za-z]+$/)) ) {
					alert(name+"は半角英字で入力してください。");
					return false;
				}
				break;
			case "CardNo":
				if (! (value.match(/^[0-9]+$/)) ) {
					alert(name+"は半角数字で入力してください。");
					return false;
				}
				break;
			case "E-mail":
				if (CheckText(name, value, need, min, max, "Hankaku")) {
					var atindex = value.indexOf("@");
					if ((atindex < 1) || (value.length -1 <= atindex)) {
						alert(name+"の入力形式が間違っています。");
						return false;
					}
					if (value.indexOf("@", atindex+1) >= 0) {
						alert(name+"の入力形式が間違っています。");
						return false;
					}
					// xxxx@xxxx.xxx の ドットチェック
					if (value.indexOf(".", atindex+1 +1) < 0) {
						alert(name+"の入力形式が間違っています。");
						return false;
					}
					// 終端ドットチェック
					if (value.substr(value.length-1, 1) == ".") {
						alert(name+"の入力形式が間違っています。");
						return false;
					}
					// シングルクォートチェック
					if (value.indexOf("'") != -1) {
						alert(name+"の入力形式が間違っています。");
						return false;
					}
					// 無効文字チェック
					if (value.match(/[\<\>\"]/))  {
						alert(name+"の入力形式が間違っています。");
						return false;
					}
				} else {
					return false;
				}
				break;
			case "Tel":
				if (! (value.match(/^[0-9\-\(\)]+$/)) ) {
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;
			case "tel1":
				if ( ! ( value.match(/^[0-9]+$/) ) ) 
				{
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;
			case "tel2":
				if ( ! ( value.match(/^[0-9]+$/) ) ) 
				{
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;
			case "tel3":
				if ( ! ( value.match(/^[0-9]+$/) ) ) 
				{
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;
			case "Fax":
				if (! (value.match(/^[0-9\-\(\)]+$/)) ) {
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;
			case "fax1":
				if ( ! ( value.match(/^[0-9]+$/) ) ) 
				{
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;
			case "fax2":
				if ( ! ( value.match(/^[0-9]+$/) ) ) 
				{
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;				
			case "fax3":
				if ( ! ( value.match(/^[0-9]+$/) ) ) 
				{
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;
			case "Number":
				if ( ! ( value.match(/^[0-9]+$/) ) ) 
				{
					alert(name+"の入力形式が間違っています。");
					return false;
				}
				break;
			default:
				break;
		}
	}
	return true;
}