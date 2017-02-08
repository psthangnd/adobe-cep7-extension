
function setRegistApplicant(makecount)
{
	var baseNode = document.getElementById('EndTR');

	try{
	
		var n = new Number(makecount) + new Number(1);
		for(i=n;i<6;i++){
			var targetNode = document.getElementById('addtr1' + i);
			if(targetNode != null){
				targetNode.parentNode.removeChild(targetNode);
			}
			targetNode = document.getElementById('addtr2' + i);
			if(targetNode != null){
				targetNode.parentNode.removeChild(targetNode);
			}
			targetNode = document.getElementById('addtr3' + i);
			if(targetNode != null){
				targetNode.parentNode.removeChild(targetNode);
			}
			targetNode = document.getElementById('addtr4' + i);
			if(targetNode != null){
				targetNode.parentNode.removeChild(targetNode);
			}
		}
	}
	catch(e){}
	
	if(makecount == 3)
	{
		var targetNode2 = null;
		try{
			targetNode2 = document.getElementById('addtr12');
		}catch(e){}
		if(targetNode2 == null){
			setTag("2","２",baseNode);
		}
		targetNode2 = null;
		try{
			targetNode2 = document.getElementById('addtr13');
		}catch(e){}
		if(targetNode2 == null){
			setTag("3","３",baseNode);
		}
		return true;
	}else if(makecount == 5)
	{
		var targetNode3 = null;
		try{
			targetNode3 = document.getElementById('addtr12');
		}catch(e){}
		if(targetNode3 == null){
			setTag("2","２",baseNode);
		}
		targetNode3 = null;
		try{
			targetNode3 = document.getElementById('addtr13');
		}catch(e){}
		if(targetNode3 == null){
			setTag("3","３",baseNode);
		}
		targetNode3 = null;
		try{
			targetNode3 = document.getElementById('addtr14');
		}catch(e){}
		if(targetNode3 == null){
			setTag("4","４",baseNode);
		}
		targetNode3 = null;
		try{
			targetNode3 = document.getElementById('addtr15');
		}catch(e){}
		if(targetNode3 == null){
			setTag("5","５",baseNode);
		}
		return true;	
	}else{
		return false;
	}
}

function setTag(number,numberBig,baseNode)
{
	
	var tr1 = document.createElement('tr');
	var td1 = document.createElement('td');
	td1.innerHTML  = '<span class=text004>ご登録希望者 ' + numberBig + '</span>';
	tr1.appendChild(td1);
	tr1.id = 'addtr1' + number;
	baseNode.parentNode.insertBefore(tr1, baseNode);

	// 2行目

	var tr11 = document.createElement('tr');
	var td11 = document.createElement('td');
	td11.setAttribute('style','HEIGHT: 26px');
	td11.setAttribute('align','right');
	td11.innerHTML  = '<span class=text004>お名前：</span>';	
	tr11.appendChild(td11);
	
	var td12 = document.createElement('td');
	td12.setAttribute('style','HEIGHT: 26px');
	var img11 = document.createElement('img');
	img11.setAttribute('height','19px');
	img11.setAttribute('src','/img/parts-073.gif');
	img11.setAttribute('width','5pxf');
	td12.appendChild(img11);
	tr11.appendChild(td12);
	
	var td13 = document.createElement('td');
	td13.setAttribute('style','HEIGHT: 25px');
	td13.innerHTML  = '<span class="text004">姓</span>'  
					+ '<IMG height="10" alt="" src="../img/sp.gif" width="8">'
					+ '<input name="txt_Name_Shi0'  + number + '" id="txt_Name_Shi0'  + number + '" type="text" style="WIDTH: 60px" maxlength="12" size="12" />'
					+ '<IMG height="10" alt="" src="../img/sp.gif" width="10">'
					+ '<span class="text004">名</span>'
					+ '<IMG height="10" alt="" src="../img/sp.gif" width="8">'
					+ '<input name="txt_Name_Mei0' + number + '" id="txt_Name_Mei0'  + number + '" type="text" style="WIDTH: 60px" maxlength="12" size="12" />'
	
	tr11.appendChild(td13);
	tr11.id = 'addtr2' + number;

	baseNode.parentNode.insertBefore(tr11, baseNode);

	// 3行目
	var tr21 = document.createElement('tr');
	var td21 = document.createElement('td');
	td21.setAttribute('style','HEIGHT: 26px');
	td21.setAttribute('align','right');
	td21.innerHTML = '<span class="text004">ユーザーＩD ※2：</span>';
	
	tr21.appendChild(td21);

	var td22 = document.createElement('td');
	td22.setAttribute('style','HEIGHT: 26px');
	td22.innerHTML = '<IMG height="19" alt="" src="../img/parts-073.gif" width="5">'

	tr21.appendChild(td22);
	
	var td23 = document.createElement('td');
	td23.innerHTML = '<input name="txt_UserHandle0' + number + '" id="txt_UserHandle0'  + number 
					+ '" type="text" style="WIDTH: 140px; HEIGHT: 20px" maxlength="12" />';
		
	tr21.appendChild(td23);
	tr21.id = 'addtr3' + number;

	baseNode.parentNode.insertBefore(tr21, baseNode);

	// 4行目
	var tr31 = document.createElement('tr');
	var td31 = document.createElement('td');
	td31.setAttribute('style','HEIGHT: 26px');
	td31.setAttribute('align','right');
	
	td31.innerHTML = '<span class="text004">Eメール：</span>';
	
	//var span31 = document.createElement('span');
	//span31.setAttribute('class','text004');
	//var textNode31 = document.createTextNode('Eメール：');
	//span31.appendChild(textNode31);
	//td31.appendChild(span31);
	
	tr31.appendChild(td31);	
	
	var td32 = document.createElement('td');
	td32.setAttribute('style','HEIGHT: 26px');
	td32.innerHTML = '<IMG height="19" alt="" src="../img/parts-073.gif" width="5">';
	
	//var img31 = document.createElement('img');
	//img31.setAttribute('height','19px');
	//img31.setAttribute('src','/img/parts-073.gif');
	//img31.setAttribute('width','5pxf');
	//td32.appendChild(img31);
	
	tr31.appendChild(td32);
	
	var td33 = document.createElement('td');
	td33.innerHTML = '<input name="txt_Email0' + number + '" id="txt_Email0' + number + '" type="text" style="WIDTH: 230px" maxlength="100" size="38" />';
	
	//var imput31 = document.createElement('input');
	//imput31.setAttribute('id','txt_Email0' + number);
	//imput31.setAttribute('class','inputstyle');
	//imput31.setAttribute('style','WIDTH: 230px');
	//imput31.setAttribute('type','text');
	//imput31.setAttribute('maxLength','100');
	//imput31.setAttribute('size','38');
	//imput31.setAttribute('name','txt_Email0' + number);
	//td33.appendChild(imput31);
	
	tr31.appendChild(td33);
	
	tr31.id = 'addtr4' + number;
	baseNode.parentNode.insertBefore(tr31, baseNode);

	return true;
}

function trim(str){
	if( str == null ) return null;
	if( str == undefined ) return undefined;
	return String(str).replace(/^[ 　]*/gim, "").replace(/[ 　]*$/gim, "");
}

function CompForm_CreateModify_Verify()
{
	var obj_Form = document.forms[0];

	// メンバー登録情報
	// お名前
	if(trim(obj_Form.txt_Name_Shi.value) == "")
	{
		alert( "お名前（姓）を入力して下さい。" );
		obj_Form.txt_Name_Shi.focus();
		return false;	
	}
	if(trim(obj_Form.txt_Name_Mei.value) == "")
	{
		alert( "お名前（名）を入力して下さい。" );
		obj_Form.txt_Name_Mei.focus();
		return false;	
	}
	// 会社名
	if(trim(obj_Form.txt_CompanyName.value) == "")
	{
		alert( "会社名を入力して下さい。" );
		obj_Form.txt_CompanyName.focus();
		return false;	
	}
	//　住所
    if ( obj_Form.lst_Adress01.options[ obj_Form.lst_Adress01.selectedIndex ].value == 0 )    
    {
        alert( "都道府県を選択して下さい。" );
        obj_Form.lst_Adress01.focus();
        return false;
    }
	if(trim(obj_Form.txt_Adress02.value) == "")
	{
		alert( "住所を入力して下さい。" );
		obj_Form.txt_Adress02.focus();
		return false;	
	}

	// 電話番号
	if (Js_CheckPhoneNumber(obj_Form.txt_Phone_1, "電話番号を入力してください。") == false) {
		return false;
	}
	if (Js_CheckPhoneNumber(obj_Form.txt_Phone_2, "電話番号を入力してください。") == false) {
		return false;
	}
	if (Js_CheckPhoneNumber(obj_Form.txt_Phone_3, "電話番号を入力してください。") == false) {
		return false;
	}
	if ((obj_Form.txt_Phone_1) && ((obj_Form.txt_Phone_1.value + obj_Form.txt_Phone_2.value + obj_Form.txt_Phone_3.value).length > 20)) {
		alert("電話番号は、20文字以内で入力してください。");
		obj_Form.txt_Phone_1.focus();
		obj_Form.txt_Phone_1.className = "err";
		return false;
	}

	// FAX番号
	if (trim(obj_Form.txt_Fax_11.value) == "" && trim(obj_Form.txt_Fax_12.value) == "" && trim(obj_Form.txt_Fax_13.value) == "")
	{

	} else {
		if (Js_CheckPhoneNumber(obj_Form.txt_Fax_11, "FAX番号を入力して下さい。") == false) {
			return false;
		}

		if (Js_CheckPhoneNumber(obj_Form.txt_Fax_12, "FAX番号を入力して下さい。") == false) {
			return false;
		}

		if (Js_CheckPhoneNumber(obj_Form.txt_Fax_13, "FAX番号を入力して下さい。") == false) {
			return false;
		}

		if ((obj_Form.txt_Fax_11) && ((obj_Form.txt_Fax_11.value + obj_Form.txt_Fax_12.value + obj_Form.txt_Fax_13.value).length > 20)) {
			alert("FAX番号は、20文字以内で入力してください。");
			obj_Form.txt_Fax_11.focus();
			obj_Form.txt_Fax_11.className = "err";
			return false;
		}
	}

    // Eメール
	if (trim(obj_Form.txt_Email.value) == "") {
	    alert("Eメールを入力して下さい。");
	    obj_Form.txt_Email.focus();
	    obj_Form.txt_Email.className = "err";
	    return false;
	} else {
	    if (CheckText("Eメール", obj_Form.txt_Email.value, false, 0, 50, "E-mail") == false) {
	        obj_Form.txt_Email.focus();
	        obj_Form.txt_Email.className = "err";
	        return false;
	    }
	}
	
	// カンプフリー登録情報
	
	// 希望開始日
	
    var vYear = obj_Form.yy.value -0; 
    var vMonth = obj_Form.mm.value - 1;
    var vDay = obj_Form.dd.value - 0;
    // 月,日の妥当性チェック 
    if(vMonth >= 0 && vMonth <= 11 && vDay >= 1 && vDay <= 31){ 
        var vDt = new Date(vYear, vMonth, vDay); 
        if(isNaN(vDt)){
         alert( "希望開始日を指定して下さい。" );
        obj_Form.yy.focus();
            return false; 
        }else if(vDt.getFullYear() == vYear && vDt.getMonth() == vMonth && vDt.getDate() == vDay){ 
        }else{ 
			alert( "希望開始日を指定して下さい。" );
            obj_Form.yy.focus();
            return false; 
        } 
    }else{
    alert( "希望開始日を指定して下さい。" ); 
		obj_Form.yy.focus();
        return false; 
    } 	
	
	// 請求書送付担当者名
	if(trim(obj_Form.txt_Seikyu_Name_Shi.value) == "")
	{
		alert( "請求書送付担当者名（姓）を入力して下さい。" );
		obj_Form.txt_Seikyu_Name_Shi.focus();
		return false;		
	}
	if(trim(obj_Form.txt_Seikyu_Name_Mei.value) == "")
	{
		alert( "請求書送付担当者名（名）を入力して下さい。" );
		obj_Form.txt_Seikyu_Name_Mei.focus();
		return false;		
	}
	
	// 登録メンバー
	// ご登録希望者①
	// お名前
	if(trim(obj_Form.txt_Name_Shi01.value) == "")
	{
		alert( "ご登録希望者１ お名前（姓）を入力して下さい。" );
		obj_Form.txt_Name_Shi01.focus();
		return false;		
	}

	if(trim(obj_Form.txt_Name_Mei01.value) == "")
	{
		alert( "ご登録希望者１ お名前（名）を入力して下さい。" );
		obj_Form.txt_Name_Mei01.focus();
		return false;		
	}
	// ユーザID
	if(trim(obj_Form.txt_UserHandle01.value) == "")
	{
		alert( "ご登録希望者１ ユーザーIDを入力して下さい。" );
		obj_Form.txt_UserHandle01.focus();
		return false;		
	}
	// Eメール
	if(trim(obj_Form.txt_Email01.value) == "")
	{
		alert( "ご登録希望者１ Eメールを入力して下さい。" );
		obj_Form.txt_Email01.focus();
		return false;		
	}else{
		if (CheckText("ご登録希望者１ Eメール", obj_Form.txt_Email01.value, false, 0, 100, "E-mail") == false) 
		{
			obj_Form.txt_Email01.focus();
			return false;
		}
	}
	
	if(obj_Form.member_vol.options[ obj_Form.member_vol.selectedIndex ].value == 3 ||
		 obj_Form.member_vol.options[ obj_Form.member_vol.selectedIndex ].value == 5)
	{	
	// ご登録希望者②
		if(trim(obj_Form.txt_Name_Shi02.value) != "" || trim(obj_Form.txt_Name_Mei02.value) != "" ||
			 trim(obj_Form.txt_UserHandle02.value) != "" || trim(obj_Form.txt_Email02.value) != ""){
			// お名前
			if(trim(obj_Form.txt_Name_Shi02.value) == "")
			{
				alert( "ご登録希望者２お名前（姓）を入力して下さい。" );
				obj_Form.txt_Name_Shi02.focus();
				return false;		
			}
			if(trim(obj_Form.txt_Name_Mei02.value) == "")
			{
				alert( "ご登録希望者２ お名前（名）を入力して下さい。" );
				obj_Form.txt_Name_Mei02.focus();
				return false;		
			}
			// ユーザID
			if(trim(obj_Form.txt_UserHandle02.value) == "")
			{
				alert( "ご登録希望者２ ユーザーIDを入力して下さい。" );
				obj_Form.txt_UserHandle02.focus();
				return false;		
			}
			// Eメール
			if(trim(obj_Form.txt_Email02.value) == "")
			{
				alert( "ご登録希望者２ Eメールを入力して下さい。" );
				obj_Form.txt_Email02.focus();
				return false;	
			}else{
				if (CheckText("ご登録希望者２ Eメール", obj_Form.txt_Email02.value, false, 0, 100, "E-mail") == false) 
				{
					obj_Form.txt_Email02.focus();
					return false;
				}
			}
		}
			
	// ご登録希望者③
		if(trim(obj_Form.txt_Name_Shi03.value) != "" || trim(obj_Form.txt_Name_Mei03.value) != "" ||
			 trim(obj_Form.txt_UserHandle03.value) != "" || trim(obj_Form.txt_Email03.value) != ""){
			// お名前
			if(trim(obj_Form.txt_Name_Shi03.value) == "")
			{
				alert( "ご登録希望者３お名前（姓）を入力して下さい。" );
				obj_Form.txt_Name_Shi03.focus();
				return false;		
			}
			if(trim(obj_Form.txt_Name_Mei03.value) == "")
			{
				alert( "ご登録希望者３ お名前（名）を入力して下さい。" );
				obj_Form.txt_Name_Mei03.focus();
				return false;		
			}
			// ユーザID
			if(trim(obj_Form.txt_UserHandle03.value) == "")
			{
				alert( "ご登録希望者３ ユーザーIDを入力して下さい。" );
				obj_Form.txt_UserHandle03.focus();
				return false;		
			}
			// Eメール
			if(trim(obj_Form.txt_Email03.value) == "")
			{
				alert( "ご登録希望者３ Eメールを入力して下さい。" );
				obj_Form.txt_Email03.focus();
				return false;		
			}else{
				if (CheckText("ご登録希望者３ Eメール", obj_Form.txt_Email03.value, false, 0, 100, "E-mail") == false) 
				{
					obj_Form.txt_Email03.focus();
					return false;
				}
			}
		}
	}
	if(obj_Form.member_vol.options[ obj_Form.member_vol.selectedIndex ].value == 5)
	{	
	// ご登録希望者④
		if(trim(obj_Form.txt_Name_Shi04.value) != "" || trim(obj_Form.txt_Name_Mei04.value) != "" ||
			 trim(obj_Form.txt_UserHandle04.value) != "" || trim(obj_Form.txt_Email04.value) != ""){
			// お名前
			if(trim(obj_Form.txt_Name_Shi04.value) == "")
			{
				alert( "ご登録希望者４お名前（姓）を入力して下さい。" );
				obj_Form.txt_Name_Shi04.focus();
				return false;		
			}
			if(trim(obj_Form.txt_Name_Mei04.value) == "")
			{
				alert( "ご登録希望者４ お名前（名）を入力して下さい。" );
				obj_Form.txt_Name_Mei04.focus();
				return false;		
			}
			// ユーザID
			if(trim(obj_Form.txt_UserHandle04.value) == "")
			{
				alert( "ご登録希望者４ ユーザーIDを入力して下さい。" );
				obj_Form.txt_UserHandle04.focus();
				return false;		
			}
			// Eメール
			if(trim(obj_Form.txt_Email04.value) == "")
			{
				alert( "ご登録希望者４ Eメールを入力して下さい。" );
				obj_Form.txt_Email04.focus();
				return false;		
			}else{
				if (CheckText("ご登録希望者４ Eメール", obj_Form.txt_Email04.value, false, 0, 100, "E-mail") == false) 
				{
					obj_Form.txt_Email04.focus();
					return false;
				}
			}
		}
	// ご登録希望者⑤
		if(trim(obj_Form.txt_Name_Shi05.value) != "" || trim(obj_Form.txt_Name_Mei05.value) != "" ||
			 trim(obj_Form.txt_UserHandle05.value) != "" || trim(obj_Form.txt_Email05.value) != ""){
			// お名前
			if(trim(obj_Form.txt_Name_Shi05.value) == "")
			{
				alert( "ご登録希望者５お名前（姓）を入力して下さい。" );
				obj_Form.txt_Name_Shi05.focus();
				return false;		
			}
			if(trim(obj_Form.txt_Name_Mei05.value) == "")
			{
				alert( "ご登録希望者５ お名前（名）を入力して下さい。" );
				obj_Form.txt_Name_Mei05.focus();
				return false;		
			}
			// ユーザID
			if(trim(obj_Form.txt_UserHandle05.value) == "")
			{
				alert( "ご登録希望者５ ユーザーIDを入力して下さい。" );
				obj_Form.txt_UserHandle05.focus();
				return false;		
			}
			// Eメール
			if(trim(obj_Form.txt_Email05.value) == "")
			{
				alert( "ご登録希望者５ Eメールを入力して下さい。" );
				obj_Form.txt_Email05.focus();
				return false;	
			}else{
				if (CheckText("ご登録希望者５ Eメール", obj_Form.txt_Email05.value, false, 0, 100, "E-mail") == false) 
				{
					obj_Form.txt_Email05.focus();
					return false;
				}
			}
		}
	}
	
	// 同意
	if(obj_Form.AgreeRule.checked == false)
	{
		alert( "規約に同意して下さい。" );
		obj_Form.AgreeRule.focus();
		return false;		
	}
	
	return true;

}

function CompForm_ChangeModify_Verify()
{
	var obj_Form = document.forms[0];

	
	// メンバー登録情報
	// お名前
	if(trim(obj_Form.txt_Name_Shi.value) == "")
	{
		alert( "お名前（姓）を入力して下さい。" );
		obj_Form.txt_Name_Shi.focus();
		return false;	
	}
	if(trim(obj_Form.txt_Name_Mei.value) == "")
	{
		alert( "お名前（名）を入力して下さい。" );
		obj_Form.txt_Name_Mei.focus();
		return false;	
	}
	// 会社名
	if(trim(obj_Form.txt_CompanyName.value) == "")
	{
		alert( "会社名を入力して下さい。" );
		obj_Form.txt_CompanyName.focus();
		return false;	
	}
	//　住所
    if ( obj_Form.lst_Adress01.options[ obj_Form.lst_Adress01.selectedIndex ].value == 0 )    
    {
        alert( "都道府県を選択して下さい。" );
        obj_Form.lst_Adress01.focus();
        return false;
    }
	if(trim(obj_Form.txt_Adress02.value) == "")
	{
		alert( "住所を入力して下さい。" );
		obj_Form.txt_Adress02.focus();
		return false;	
	}
	// 電話番号
	if (Js_CheckPhoneNumber(obj_Form.txt_Phone_1, "電話番号を入力してください。") == false) {
		return false;
	}
	if (Js_CheckPhoneNumber(obj_Form.txt_Phone_2, "電話番号を入力してください。") == false) {
		return false;
	}
	if (Js_CheckPhoneNumber(obj_Form.txt_Phone_3, "電話番号を入力してください。") == false) {
		return false;
	}
	if ((obj_Form.txt_Phone_1) && ((obj_Form.txt_Phone_1.value + obj_Form.txt_Phone_2.value + obj_Form.txt_Phone_3.value).length > 20)) {
		alert("電話番号は、20文字以内で入力してください。");
		obj_Form.txt_Phone_1.focus();
		obj_Form.txt_Phone_1.className = "err";
		return false;
	}
	// FAX番号
	if (trim(obj_Form.txt_Fax_11.value) == "" && trim(obj_Form.txt_Fax_12.value) == "" && trim(obj_Form.txt_Fax_13.value) == "") {

	} else {
		if (Js_CheckPhoneNumber(obj_Form.txt_Fax_11, "FAX番号を入力してください") == false) {
			return false;
		}

		if (Js_CheckPhoneNumber(obj_Form.txt_Fax_12, "FAX番号を入力してください") == false) {
			return false;
		}

		if (Js_CheckPhoneNumber(obj_Form.txt_Fax_13, "FAX番号を入力してください") == false) {
			return false;
		}

		if ((obj_Form.txt_Fax_11) && ((obj_Form.txt_Fax_11.value + obj_Form.txt_Fax_12.value + obj_Form.txt_Fax_13.value).length > 20)) {
			alert("FAX番号は、20文字以内で入力してください。");
			obj_Form.txt_Fax_11.focus();
			obj_Form.txt_Fax_11.className = "err";
			return false;
		}
	}
	// Eメール
	if(trim(obj_Form.txt_Email.value) == "")
	{
		alert( "Eメールを入力して下さい。" );
		obj_Form.txt_Email.focus();
		obj_Form.txt_Email.className = "err";
		return false;
	}else{
	    if (CheckText("Eメール", obj_Form.txt_Email.value, false, 0, 50, "E-mail") == false)
	    {
			obj_Form.txt_Email.focus();
			obj_Form.txt_Email.className = "err";
			return false;
		}
	}
	
	// カンプフリー登録情報
	
	
	// 登録メンバー
	// 現ご登録者
	// お名前
	if(trim(obj_Form.txt_Name_Shi01.value) == "")
	{
		alert( "現ご登録者 お名前（姓）を入力して下さい。" );
		obj_Form.txt_Name_Shi01.focus();
		return false;		
	}
	if(trim(obj_Form.txt_Name_Mei01.value) == "")
	{
		alert( "現ご登録者 お名前（名）を入力して下さい。" );
		obj_Form.txt_Name_Mei01.focus();
		return false;		
	}
	// ユーザID
	if(trim(obj_Form.txt_UserHandle01.value) == "")
	{
		alert( "現ご登録者 ユーザーIDを入力して下さい。" );
		obj_Form.txt_UserHandle01.focus();
		return false;		
	}
	// Eメール
	if(trim(obj_Form.txt_Email01.value) == "")
	{
		alert( "現ご登録者 Eメールを入力して下さい。" );
		obj_Form.txt_Email01.focus();
		return false;		
	}else{
		if (CheckText("現ご登録者 Eメール", obj_Form.txt_Email01.value, false, 0, 100, "E-mail") == false) 
		{
			obj_Form.txt_Email01.focus();
			return false;
		}
	}
	
	// 新ご登録者
	// お名前
	if(trim(obj_Form.txt_Name_Shi02.value) == "")
	{
		alert( "新ご登録者お名前（姓）を入力して下さい。" );
		obj_Form.txt_Name_Shi02.focus();
		return false;		
	}
	if(trim(obj_Form.txt_Name_Mei02.value) == "")
	{
		alert( "新ご登録者 お名前（名）を入力して下さい。" );
		obj_Form.txt_Name_Mei02.focus();
		return false;		
	}
	// ユーザID
	if(trim(obj_Form.txt_UserHandle02.value) == "")
	{
		alert( "新ご登録者 ユーザーIDを入力して下さい。" );
		obj_Form.txt_UserHandle02.focus();
		return false;		
	}
	// Eメール
	if(trim(obj_Form.txt_Email02.value) == "")
	{
		alert( "新ご登録者 Eメールを入力して下さい。" );
		obj_Form.txt_Email02.focus();
		return false;		
	}else{
		if (CheckText("新ご登録者 Eメール", obj_Form.txt_Email02.value, false, 0, 100, "E-mail") == false) 
		{
			obj_Form.txt_Email02.focus();
			return false;
		}
	}
			

	// 同意
	if(obj_Form.AgreeRule.checked == false)
	{
		alert( "規約に同意して下さい。" );
		obj_Form.AgreeRule.focus();
		return false;		
	}
	
	return true;

}

function CstmrcrdForm_Create_Verify()
{
	var obj_Form = document.forms[0];

	//Del 2012/04/17 T.Fukuoka メンバー登録フォーム簡素化 Start
	/*
	// メンバー登録情報
	// お名前
	if(trim(obj_Form.txt_Name_Shi.value) == "")
	{
		alert( "お名前（氏）を入力して下さい。" );
		obj_Form.txt_Name_Shi.focus();
		return false;	
	}
	if(trim(obj_Form.txt_Name_Mei.value) == "")
	{
		alert( "お名前（名）を入力して下さい。" );
		obj_Form.txt_Name_Mei.focus();
		return false;	
	}
	// 会社名
	if(trim(obj_Form.txt_CompanyName.value) == "")
	{
		alert( "会社名を入力して下さい。" );
		obj_Form.txt_CompanyName.focus();
		return false;	
	}
	//　住所
    if ( obj_Form.lst_Adress01.options[ obj_Form.lst_Adress01.selectedIndex ].value == 0 )    
    {
        alert( "都道府県を選択して下さい。" );
        obj_Form.lst_Adress01.focus();
        return false;
    }
	if(trim(obj_Form.txt_Adress02.value) == "")
	{
		alert( "住所を入力して下さい。" );
		obj_Form.txt_Adress02.focus();
		return false;	
	}
	// 電話番号
	if(trim(obj_Form.txt_Phone_1.value) == "")
	{
		alert( "電話番号を入力して下さい。" );
		obj_Form.txt_Phone_1.focus();
		return false;	
	}else{
		if(trim(obj_Form.txt_Phone_1.value).match(/[^0123456789-]+/)){ 
 		// 数字以外が入力された場合は警告ダイアログを表示 
 		alert("半角数字または半角ハイフンのみ入力してください");
 		obj_Form.txt_Phone_1.focus();
  		return false;
  		}
	}
	// FAX番号
	if(trim(obj_Form.txt_Fax_1.value) == "" || trim(obj_Form.txt_Fax_1.value) == "例 : 03-3740-4036")
	{
	}else{
		if(trim(obj_Form.txt_Fax_1.value).match(/[^0123456789-]+/)){ 
 		// 数字以外が入力された場合は警告ダイアログを表示 
 		alert("半角数字または半角ハイフンのみ入力してください");
 		obj_Form.txt_Fax_1.focus();
  		return false;
  		}
	}
	// Eメール
	if(trim(obj_Form.txt_Email.value) == "")
	{
		alert( "Eメールを入力して下さい。" );
		obj_Form.txt_Email.focus();
		return false;	
	}
	*/
	//Del 2012/04/17 T.Fukuoka メンバー登録フォーム簡素化 End

	// お客様カード登録情報
	
	// 会社名
	if(trim(obj_Form.txt_sCompanyName.value) == "")
	{
		alert( "会社名を入力して下さい。" );
		obj_Form.txt_sCompanyName.focus();
		return false;	
	}
	
	// 会社名フリガナ
	//Upd 2012/04/27 T.Fukuoka メンバー登録フォーム簡素化
	//if(trim(obj_Form.txt_sCompanyName_Kana.value) == "")
	if(trim(obj_Form.txt_sCompanyName_Kana.value) == "" || obj_Form.txt_sCompanyName_Kana.value == "例 : アマナイメージズ")
	{
		alert( "会社名フリガナを入力して下さい。" );
		obj_Form.txt_sCompanyName_Kana.focus();
		return false;	
	}
	
	// 郵便番号
	if(trim(obj_Form.txt_sZIPCD1.value) == "" || obj_Form.txt_sZIPCD1.value == "例 : 140-0002")
	{
		alert( "郵便番号を入力して下さい。" );
		obj_Form.txt_sZIPCD1.focus();
		return false;	
	}else
	{	
		if(trim(obj_Form.txt_sZIPCD1.value).match(/[^0123456789-]+/))
		{ 
 			// 数字以外が入力された場合は警告ダイアログを表示 
 			alert("郵便番号は半角数字または半角ハイフンのみ入力してください");
			obj_Form.txt_sZIPCD1.focus();
			return false;			
		}
	}
	/*	
	if(trim(obj_Form.txt_sZIPCD2.value) == "" )
	{
		alert( "郵便番号を入力して下さい。" );
		obj_Form.txt_sZIPCD2.focus();
		return false;	
	}else
	{	
		if(obj_Form.txt_sZIPCD2.value.match(/[^0-9]/g))
		{
			alert( "郵便番号は数値で入力して下さい。" );
			obj_Form.txt_sZIPCD2.focus();
			return false;			
		}
	}	
	*/
	// ご住所
    if ( obj_Form.slct_CompanyAddress_Prefecture.options[ obj_Form.slct_CompanyAddress_Prefecture.selectedIndex ].value == 0 )    
    {
        alert( "都道府県を選択して下さい。" );
        obj_Form.slct_CompanyAddress_Prefecture.focus();
        return false;
    }
	//Upd 2012/04/27 T.Fukuoka メンバー登録フォーム簡素化
	//if(trim(obj_Form.txt_CompanyAddress_Street.value) == "")
	if(trim(obj_Form.txt_CompanyAddress_Street.value) == "" || obj_Form.txt_CompanyAddress_Street.value == "例 : 品川区東品川2-2-43")
	{
		alert( "住所を入力して下さい。" );
		obj_Form.txt_CompanyAddress_Street.focus();
		return false;	
	}
	
	// 電話番号
	//Upd 2012/06/20 T.Fukuoka メンバー登録フォーム簡素化 Start
	//if(trim(obj_Form.txt_Phone_2.value) == "")
	if (Js_CheckPhoneNumber(obj_Form.txt_Phone_11, "電話番号を入力して下さい。") == false) {
		return false;
	}

	if (Js_CheckPhoneNumber(obj_Form.txt_Phone_12, "電話番号を入力して下さい。") == false) {
		return false;
	}

	if (Js_CheckPhoneNumber(obj_Form.txt_Phone_13, "電話番号を入力して下さい。") == false) {
		return false;
	}
	
	if ((obj_Form.txt_Phone_11) && ((obj_Form.txt_Phone_11.value + obj_Form.txt_Phone_12.value + obj_Form.txt_Phone_13.value).length > 20)) {
		alert("電話番号は、20文字以内で入力してください。");
		obj_Form.txt_Phone_11.focus();
		obj_Form.txt_Phone_11.className = "err";
		return false;
	}

	// FAX番号
	if ((trim(obj_Form.txt_Fax_21.value) == "" || obj_Form.txt_Fax_21.value == "例 : 03")
		&& (trim(obj_Form.txt_Fax_22.value) == "" || obj_Form.txt_Fax_22.value == "例 : 3740")
		&& (trim(obj_Form.txt_Fax_23.value) == "" || obj_Form.txt_Fax_23.value == "例 : 4036")) {

	} else {
		if (Js_CheckPhoneNumber(obj_Form.txt_Fax_21, "FAX番号を入力してください") == false) {
			return false;
		}

		if (Js_CheckPhoneNumber(obj_Form.txt_Fax_22, "FAX番号を入力してください") == false) {
			return false;
		}

		if (Js_CheckPhoneNumber(obj_Form.txt_Fax_23, "FAX番号を入力してください") == false) {
			return false;
		}

		if ((obj_Form.txt_Fax_21) && ((obj_Form.txt_Fax_21.value + obj_Form.txt_Fax_22.value + obj_Form.txt_Fax_23.value).length > 20)) {
			alert("FAX番号は、20文字以内で入力してください。");
			obj_Form.txt_Fax_21.focus();
			obj_Form.txt_Fax_21.className = "err";
			return false;
		}
	}

	//会社Eメール
	if (!(obj_Form.txt_Company_Email.value == "" || obj_Form.txt_Company_Email.value == "例 : acs@amanaimages.com" ))
    {
		if (CheckText("会社Eメール", obj_Form.txt_Company_Email.value, false, 0, 100, "E-mail") == false) 
		{
			obj_Form.txt_Company_Email.focus();
			return false;
		}
    }
	
	//Del 2012/04/17 T.Fukuoka メンバー登録フォーム簡素化 Start
	/*
	// 設立年月日（西暦）
	
    var vYear = obj_Form.Setsuritsu_YY.value -0;
    var vMonth = obj_Form.Setsuritsu_MM.value - 1;
    var vDay = obj_Form.Setsuritsu_DD.value - 0;
    // 月,日の妥当性チェック 
    if( vYear >=1000 && vYear <= 2100 && vMonth >= 0 && vMonth <= 11 && vDay >= 1 && vDay <= 31){ 
        var vDt = new Date(vYear, vMonth, vDay); 
        if(isNaN(vDt)){
         alert( "設立年月日を入力して下さい。" );
            return false; 
        }else if(vDt.getFullYear() == vYear && vDt.getMonth() == vMonth && vDt.getDate() == vDay){ 
        }else{ 
        alert( "設立年月日を入力して下さい。" );
            return false; 
        } 
    }else{
    alert( "設立年月日を入力して下さい。" ); 
        return false; 
    } 
    */
    //Del 2012/04/17 T.Fukuoka メンバー登録フォーム簡素化 End
    
    // 会社登録区分
    if ( obj_Form.Touroku_Kubun.options[ obj_Form.Touroku_Kubun.selectedIndex ].value == "" )  {
        alert( "会社登録区分を選択してください。" ); 
        return false;
    }

	//Del 2012/04/17 T.Fukuoka メンバー登録フォーム簡素化 Start
	/*
	// 従業員数	
	if(obj_Form.Jyugyouin_Su.value == "")
	{
		alert( "従業員数入力して下さい。" );
		obj_Form.Jyugyouin_Su.focus();
		return false;	
	}else
	{	
		if(obj_Form.Jyugyouin_Su.value.match(/[^0-9]/g))
		{
			alert( "従業員数は数値で入力して下さい。" );
			obj_Form.Jyugyouin_Su.focus();
			return false;			
		}
	}
		
	// 年商
	if(trim(obj_Form.Nensho.value) == "")
	{
		alert( "年商入力して下さい。" );
		obj_Form.Nensho.focus();
		return false;	
	}
    */
    //Del 2012/04/17 T.Fukuoka メンバー登録フォーム簡素化 End
    
    // 業種
    if ( obj_Form.slct_Gyoshu.options[ obj_Form.slct_Gyoshu.selectedIndex ].value == "" )  {
        alert( "業種を選択してください。" ); 
        return false;
    }
    
	
	// 経理担当者連絡先
	if ((trim(obj_Form.txt_Phone_31.value) == "" || obj_Form.txt_Phone_31.value == "例 : 03")
		&& (trim(obj_Form.txt_Phone_32.value) == "" || obj_Form.txt_Phone_32.value == "例 : 3740") 
		&& (trim(obj_Form.txt_Phone_33.value) == "" || obj_Form.txt_Phone_33.value == "例 : 4025"))
	{

	} else {
		if (Js_CheckPhoneNumber(obj_Form.txt_Phone_31, "経理担当者連絡先を入力してください") == false) {
			return false;
		}

		if (Js_CheckPhoneNumber(obj_Form.txt_Phone_32, "経理担当者連絡先を入力してください") == false) {
			return false;
		}

		if (Js_CheckPhoneNumber(obj_Form.txt_Phone_33, "経理担当者連絡先を入力してください") == false) {
			return false;
		}

		if ((obj_Form.txt_Phone_31) && ((obj_Form.txt_Phone_31.value + obj_Form.txt_Phone_32.value + obj_Form.txt_Phone_33.value).length > 20)) {
			alert("経理担当者連絡先は、20文字以内で入力してください。");
			obj_Form.txt_Phone_31.focus();
			obj_Form.txt_Phone_31.className = "err";
			return false;
		}
	}
		
	// 会社代表者名
	//Upd 2012/04/27 T.Fukuoka メンバー登録フォーム簡素化
	//if(trim(obj_Form.txt_cDaihyo_Name_Shi.value) == "")
	if(trim(obj_Form.txt_cDaihyo_Name_Shi.value) == "" || obj_Form.txt_cDaihyo_Name_Shi.value == "例 : 亜麻奈")
	{
		alert( "会社代表者名（姓）を入力して下さい。" );
		obj_Form.txt_cDaihyo_Name_Shi.focus();
		return false;	
	}
	//Upd 2012/04/27 T.Fukuoka メンバー登録フォーム簡素化
	//if(trim(obj_Form.txt_cDaihyo_Name_Mei.value) == "")
	if(trim(obj_Form.txt_cDaihyo_Name_Mei.value) == "" || obj_Form.txt_cDaihyo_Name_Mei.value == "例 : 太郎")
	{
		alert( "会社代表者名（名）を入力して下さい。" );
		obj_Form.txt_cDaihyo_Name_Mei.focus();
		return false;	
	}	
	// 会社代表者名フリガナ
	//Upd 2012/04/27 T.Fukuoka メンバー登録フォーム簡素化
	//if(trim(obj_Form.txt_Daihyo_Name_Shi_Kana.value) == "")
	if(trim(obj_Form.txt_Daihyo_Name_Shi_Kana.value) == "" || obj_Form.txt_Daihyo_Name_Shi_Kana.value == "例 : アマナ")
	{
		alert( "会社代表者名フリガナ（姓）を入力して下さい。" );
		obj_Form.txt_Daihyo_Name_Shi_Kana.focus();
		return false;	
	}
	//Upd 2012/04/27 T.Fukuoka メンバー登録フォーム簡素化
	//if(trim(obj_Form.txt_Daihyo_Name_Mei_Kana.value) == "")
	if(trim(obj_Form.txt_Daihyo_Name_Mei_Kana.value) == "" || obj_Form.txt_Daihyo_Name_Mei_Kana.value == "例 : タロウ")
	{
		alert( "会社代表者名フリガナ（名）を入力して下さい。" );
		obj_Form.txt_Daihyo_Name_Mei_Kana.focus();
		return false;	
	}	
	
	if(trim(obj_Form.txt_dZIPCD1.value).match(/[^0123456789-]+/))
	{ 
 		// 数字以外が入力された場合は警告ダイアログを表示 
 		alert("郵便番号は半角数字または半角ハイフンのみ入力してください");
		obj_Form.txt_dZIPCD1.focus();
		return false;			
	}

	
	//Del 2012/04/17 T.Fukuoka メンバー登録フォーム簡素化 Start
	/*
	if(obj_Form.txt_dZIPCD2.value.match(/[^0-9]/g))
	{
		alert( "郵便番号は数値で入力して下さい。" );
		obj_Form.txt_dZIPCD2.focus();
		return false;			
	}
	
	// 会社代表者電話番号
	if(trim(obj_Form.txt_Phone_4.value) == "")
	{
	}else{
		if(trim(obj_Form.txt_Phone_4.value).match(/[^0123456789-]+/)){ 
 		// 数字以外が入力された場合は警告ダイアログを表示 
 		alert("半角数字または半角ハイフンのみ入力してください");
 		obj_Form.txt_Phone_4.focus();
  		return false;
  		}
	}

	// 会社代表者FAX番号
	if(trim(obj_Form.txt_Fax_3.value) == "")
	{
	}else{
		if(trim(obj_Form.txt_Fax_3.value).match(/[^0123456789-]+/)){ 
 		// 数字以外が入力された場合は警告ダイアログを表示 
 		alert("半角数字または半角ハイフンのみ入力してください");
 		obj_Form.txt_Fax_3.focus();
  		return false;
  		}
	}
	*/
	//Del 2012/04/17 T.Fukuoka メンバー登録フォーム簡素化 End

	//Add 2012/04/27 T.Fukuoka メンバー登録フォーム簡素化 Start
	if (obj_Form.txt_Fax_21.value == "例 : 03")
	{
		obj_Form.txt_Fax_21.value = "";
	}
	if (obj_Form.txt_Fax_22.value == "例 : 3740") {
		obj_Form.txt_Fax_22.value = "";
	}
	if (obj_Form.txt_Fax_23.value == "例 : 4036") {
		obj_Form.txt_Fax_23.value = "";
	}

	if (obj_Form.txt_Company_Email.value == "例 : acs@amanaimages.com")
	{
		obj_Form.txt_Company_Email.value = "";
	}

	if (obj_Form.txt_Company_Url.value == "例 : http://www.amanaimages.com")
	{
		obj_Form.txt_Company_Url.value = "";
	}

	if (obj_Form.txt_Keiri_Name_Shi.value == "例 : 亜麻奈")
	{
		obj_Form.txt_Keiri_Name_Shi.value = "";
	}
	
	if (obj_Form.txt_Keiri_Name_Mei.value == "例 : 太郎")
	{
		obj_Form.txt_Keiri_Name_Mei.value = "";
	}

	if (obj_Form.txt_Phone_31.value == "例 : 03")
	{
		obj_Form.txt_Phone_31.value = "";
	}
	if (obj_Form.txt_Phone_32.value == "例 : 3740") {
		obj_Form.txt_Phone_32.value = "";
	}
	if (obj_Form.txt_Phone_33.value == "例 : 4025") {
		obj_Form.txt_Phone_33.value = "";
	}
		
	return true;

}

function CstmrcrdForm_Satsuei_Create_Verify()
{
	var obj_Form = document.forms[0];

	
	// メンバー登録情報
	// お名前
	if(trim(obj_Form.txt_Name_Shi.value) == "")
	{
		alert( "お名前（姓）を入力して下さい。" );
		obj_Form.txt_Name_Shi.focus();
		return false;	
	}
	if(trim(obj_Form.txt_Name_Mei.value) == "")
	{
		alert( "お名前（名）を入力して下さい。" );
		obj_Form.txt_Name_Mei.focus();
		return false;	
	}
	
	// お客様カード登録情報
	
	// 会社名
	if(trim(obj_Form.txt_sCompanyName.value) == "")
	{
		alert( "会社名を入力して下さい。" );
		obj_Form.txt_sCompanyName.focus();
		return false;	
	}
	
	// 会社名フリガナ
	if(trim(obj_Form.txt_sCompanyName_Kana.value) == "")
	{
		alert( "会社名フリガナを入力して下さい。" );
		obj_Form.txt_sCompanyName_Kana.focus();
		return false;	
	}
    
    // 郵便番号	
	if(trim(obj_Form.txt_sZIPCD1.value) == "" )
	{
		alert( "郵便番号を入力して下さい。" );
		obj_Form.txt_sZIPCD1.focus();
		return false;	
	}else
	{	
		if(trim(obj_Form.txt_sZIPCD1.value).match(/[^0123456789-]+/))
		{ 
 			// 数字以外が入力された場合は警告ダイアログを表示 
 			alert("郵便番号は半角数字または半角ハイフンのみ入力してください");
			obj_Form.txt_sZIPCD1.focus();
			return false;			
		}
	}
	/*	
	if(trim(obj_Form.txt_sZIPCD2.value) == "" )
	{
		alert( "郵便番号を入力して下さい。" );
		obj_Form.txt_sZIPCD2.focus();
		return false;	
	}else
	{	
		if(obj_Form.txt_sZIPCD2.value.match(/[^0-9]/g))
		{
			alert( "郵便番号は数値で入力して下さい。" );
			obj_Form.txt_sZIPCD2.focus();
			return false;			
		}
	}	
	*/
	
	// ご住所
    if ( obj_Form.slct_CompanyAddress_Prefecture.options[ obj_Form.slct_CompanyAddress_Prefecture.selectedIndex ].value == 0 )    
    {
        alert( "都道府県を選択して下さい。" );
        obj_Form.slct_CompanyAddress_Prefecture.focus();
        return false;
    }
	if(trim(obj_Form.txt_CompanyAddress_Street.value) == "")
	{
		alert( "住所を入力して下さい。" );
		obj_Form.txt_CompanyAddress_Street.focus();
		return false;	
	}
	
	// 電話番号
	if(trim(obj_Form.txt_Phone_2.value) == "")
	{
		alert( "電話番号を入力して下さい。" );
		obj_Form.txt_Phone_2.focus();
		return false;	
	}else{
		if(trim(obj_Form.txt_Phone_2.value).match(/[^0123456789-]+/)){ 
 		// 数字以外が入力された場合は警告ダイアログを表示 
 		alert("半角数字または半角ハイフンのみ入力してください");
 		obj_Form.txt_Phone_2.focus();
  		return false;
  		}
	}
	
	
    // Eメール
	if(trim(obj_Form.txt_Email.value) == "")
	{
		alert( "Eメールを入力して下さい。" );
		obj_Form.txt_Email.focus();
		return false;	
	}else{
		if (CheckText("Eメール", obj_Form.txt_Email.value, false, 0, 100, "E-mail") == false) 
		{
			obj_Form.txt_Email.focus();
			return false;
		}
	}

	//会社Eメール
	if(obj_Form.txt_Company_Email.value == "")
	{
    }else{
		if (CheckText("会社Eメール", obj_Form.txt_Company_Email.value, false, 0, 100, "E-mail") == false) 
		{
			obj_Form.txt_Company_Email.focus();
			return false;
		}
    }
		
	// 設立年月日（西暦）
	
    var vYear = obj_Form.Setsuritsu_YY.value -0;
    var vMonth = obj_Form.Setsuritsu_MM.value - 1;
    var vDay = obj_Form.Setsuritsu_DD.value - 0;
    // 月,日の妥当性チェック 
    if( vYear >=1000 && vYear <= 2100 && vMonth >= 0 && vMonth <= 11 && vDay >= 1 && vDay <= 31){ 
        var vDt = new Date(vYear, vMonth, vDay); 
        if(isNaN(vDt)){
         alert( "設立年月日を入力して下さい。" );
            return false; 
        }else if(vDt.getFullYear() == vYear && vDt.getMonth() == vMonth && vDt.getDate() == vDay){ 
        }else{ 
        alert( "設立年月日を入力して下さい。" );
            return false; 
        } 
    }else{
    alert( "設立年月日を入力して下さい。" ); 
        return false; 
    } 
    
    // 会社登録区分
    if ( obj_Form.Touroku_Kubun.options[ obj_Form.Touroku_Kubun.selectedIndex ].value == "" )  {
        alert( "会社登録区分を選択してください。" ); 
        return false;
    }

	// 従業員数
	if(obj_Form.Jyugyouin_Su.value.match(/[^0-9]/g))
	{
		alert( "従業員数は数値で入力して下さい。" );
		obj_Form.Jyugyouin_Su.focus();
		return false;			
	}

		
	// 年商
	
    
    // 業種
    if ( obj_Form.slct_Gyoshu.options[ obj_Form.slct_Gyoshu.selectedIndex ].value == "" )  {
        alert( "業種を選択してください。" ); 
        obj_Form.txt_Osiharai_Shime.focus();
        return false;
    }
    
    // お支払条件
    if ( obj_Form.txt_Osiharai_Shime.value == "" ) {
        alert( "お支払い条件を入力してください。" ); 
        obj_Form.txt_Osiharai_Shime.focus();
        return false;
    }
    else {
        if ( (obj_Form.txt_Osiharai_Shime.value >= 1 && obj_Form.txt_Osiharai_Shime.value <= 31) || obj_Form.txt_Osiharai_Shime.value == "末" ) {
        }
        else {
            alert( "お支払い条件を正しく入力してください。" ); 
            obj_Form.txt_Osiharai_Shime.focus();
            return false;
        }
    }
    
    if ( obj_Form.slct_Osiharai_ShiharaiM.options[ obj_Form.slct_Osiharai_ShiharaiM.selectedIndex ].value == "" )  {
        alert( "お支払い条件を選択してください。" ); 
        obj_Form.slct_Osiharai_ShiharaiM.focus();
        return false;
    }
    
    if ( obj_Form.txt_Osiharai_ShiharaiD.value == "" ) {
        alert( "お支払い条件を入力してください。" ); 
        obj_Form.txt_Osiharai_ShiharaiD.focus();
        return false;
    }
    else {
        if ( (obj_Form.txt_Osiharai_ShiharaiD.value >= 1 && obj_Form.txt_Osiharai_ShiharaiD.value <= 31) || obj_Form.txt_Osiharai_ShiharaiD.value == "末" ) {
        }
        else {
            alert( "お支払い条件を正しく入力してください。" ); 
            obj_Form.txt_Osiharai_ShiharaiD.focus();
            return false;
        }
    }
    
	
	// 経理担当者連絡先
	if(trim(obj_Form.txt_Phone_3.value) == "")
	{
	}else{
		if(trim(obj_Form.txt_Phone_3.value).match(/[^0123456789-]+/)){ 
 		// 数字以外が入力された場合は警告ダイアログを表示 
 		alert("半角数字または半角ハイフンのみ入力してください");
 		obj_Form.txt_Phone_3.focus();
  		return false;
  		}
	}
		
	// 会社代表者名
	if(trim(obj_Form.txt_cDaihyo_Name_Shi.value) == "")
	{
		alert( "会社代表者名（姓）を入力して下さい。" );
		obj_Form.txt_cDaihyo_Name_Shi.focus();
		return false;	
	}
	if(trim(obj_Form.txt_cDaihyo_Name_Mei.value) == "")
	{
		alert( "会社代表者名（名）を入力して下さい。" );
		obj_Form.txt_cDaihyo_Name_Mei.focus();
		return false;	
	}	
	// 会社代表者名フリガナ
	if(trim(obj_Form.txt_Daihyo_Name_Shi_Kana.value) == "")
	{
		alert( "会社代表者名フリガナ（姓）を入力して下さい。" );
		obj_Form.txt_Daihyo_Name_Shi_Kana.focus();
		return false;	
	}
	if(trim(obj_Form.txt_Daihyo_Name_Mei_Kana.value) == "")
	{
		alert( "会社代表者名フリガナ（名）を入力して下さい。" );
		obj_Form.txt_Daihyo_Name_Mei_Kana.focus();
		return false;	
	}
    
	if(obj_Form.txt_dZIPCD1.value == "" || obj_Form.txt_dZIPCD2.value == "") {
        alert( "本社郵便番号を入力して下さい。" );
		obj_Form.txt_dZIPCD1.focus();
        return false;
    }
    else {
	    if(obj_Form.txt_dZIPCD1.value.match(/[^0-9]/g))
    	{
	    	alert( "本社郵便番号は数値で入力して下さい。" );
		    obj_Form.txt_dZIPCD1.focus();
    		return false;			
	    }
    	if(obj_Form.txt_dZIPCD2.value.match(/[^0-9]/g))
	    {
		    alert( "本社郵便番号は数値で入力して下さい。" );
    		obj_Form.txt_dZIPCD2.focus();
	    	return false;			
	    }
    }
	
	
	if ( obj_Form.slct_Daihyo_Address_Prefecture.options[ obj_Form.slct_Daihyo_Address_Prefecture.selectedIndex ].value == "" )  {
        alert( "本社ご住所を選択してください。" ); 
        return false;
    }
    
    if(obj_Form.txt_Daihyo_Address_Street.value == "" || obj_Form.txt_Daihyo_Address_Street.value == "") {
        alert( "本社ご住所を入力して下さい。" );
		obj_Form.txt_Daihyo_Address_Street.focus();
        return false;
    }
    
    
	// 会社代表者電話番号
	if(trim(obj_Form.txt_Phone_4.value) == "")
	{
	}else{
		if(trim(obj_Form.txt_Phone_4.value).match(/[^0123456789-]+/)){ 
 		// 数字以外が入力された場合は警告ダイアログを表示 
 		alert("半角数字または半角ハイフンのみ入力してください");
 		obj_Form.txt_Phone_4.focus();
  		return false;
  		}
	}

	// 会社代表者FAX番号
	if(trim(obj_Form.txt_Fax_3.value) == "")
	{
	}else{
		if(trim(obj_Form.txt_Fax_3.value).match(/[^0123456789-]+/)){ 
 		// 数字以外が入力された場合は警告ダイアログを表示 
 		alert("半角数字または半角ハイフンのみ入力してください");
 		obj_Form.txt_Fax_3.focus();
  		return false;
  		}
	}

	// 会社代表者Eメール
	if(obj_Form.txt_Daihyo_Email.value == "")
	{
    }else{
		if (CheckText("会社代表者Eメール", obj_Form.txt_Daihyo_Email.value, false, 0, 100, "E-mail") == false) 
		{
			obj_Form.txt_Daihyo_Email.focus();
			return false;
		}
    }

	return true;

}

function ResearchForm_Create_Verify()
{
	var obj_Form = document.forms[0];

	
	// メンバー登録情報
	// お名前
	if(trim(obj_Form.txt_Name_Shi.value) == "")
	{
		alert( "お名前（姓）を入力して下さい。" );
		obj_Form.txt_Name_Shi.focus();
		return false;	
	}
	if(trim(obj_Form.txt_Name_Mei.value) == "")
	{
		alert( "お名前（名）を入力して下さい。" );
		obj_Form.txt_Name_Mei.focus();
		return false;	
	}
	// 会社名
	if(trim(obj_Form.txt_CompanyName.value) == "")
	{
		alert( "会社名を入力して下さい。" );
		obj_Form.txt_CompanyName.focus();
		return false;	
	}
	//　住所
    if ( obj_Form.lst_Adress01.options[ obj_Form.lst_Adress01.selectedIndex ].value == 0 )    
    {
        alert( "都道府県を選択して下さい。" );
        obj_Form.lst_Adress01.focus();
        return false;
    }
	if(trim(obj_Form.txt_Adress02.value) == "")
	{
		alert( "住所を入力して下さい。" );
		obj_Form.txt_Adress02.focus();
		return false;	
	}
	// 電話番号
	if (Js_CheckPhoneNumber(obj_Form.txt_Phone_1, "電話番号を入力してください。") == false) {
		return false;
	}
	if (Js_CheckPhoneNumber(obj_Form.txt_Phone_2, "電話番号を入力してください。") == false) {
		return false;
	}
	if (Js_CheckPhoneNumber(obj_Form.txt_Phone_3, "電話番号を入力してください。") == false) {
		return false;
	}
	if ((obj_Form.txt_Phone_1) && ((obj_Form.txt_Phone_1.value + obj_Form.txt_Phone_2.value + obj_Form.txt_Phone_3.value).length > 20)) {
		alert("電話番号は、20文字以内で入力してください。");
		obj_Form.txt_Phone_1.focus();
		obj_Form.txt_Phone_1.className = "err";
		return false;
	}
	// FAX番号
	if (trim(obj_Form.txt_Fax_11.value) == "" && trim(obj_Form.txt_Fax_12.value) == "" && trim(obj_Form.txt_Fax_13.value) == "") {

	} else {
		if (Js_CheckPhoneNumber(obj_Form.txt_Fax_11, "FAX番号を入力してください") == false) {
			return false;
		}

		if (Js_CheckPhoneNumber(obj_Form.txt_Fax_12, "FAX番号を入力してください") == false) {
			return false;
		}

		if (Js_CheckPhoneNumber(obj_Form.txt_Fax_13, "FAX番号を入力してください") == false) {
			return false;
		}

		if ((obj_Form.txt_Fax_11) && ((obj_Form.txt_Fax_11.value + obj_Form.txt_Fax_12.value + obj_Form.txt_Fax_13.value).length > 20)) {
			alert("FAX番号は、20文字以内で入力してください。");
			obj_Form.txt_Fax_11.focus();
			obj_Form.txt_Fax_11.className = "err";
			return false;
		}
	}
    // Eメール
	if (trim(obj_Form.txt_Email.value) == "") {
	    alert("Eメールを入力して下さい。");
	    obj_Form.txt_Email.focus();
	    obj_Form.txt_Email.className = "err";
	    return false;
	} else {
	    if (CheckText("Eメール", obj_Form.txt_Email.value, false, 0, 50, "E-mail") == false) {
	        obj_Form.txt_Email.focus();
	        obj_Form.txt_Email.className = "err";
	        return false;
	    }
	}
	
	// リサーチ依頼登録情報
	
	//　使用目的
	if(trim(obj_Form.txt_Mokuteki.value) == "")
	{
		alert( "使用目的（使用媒体）を入力して下さい。" );
		obj_Form.txt_Mokuteki.focus();
		return false;	
	}
	
	// 依頼内容
	if(trim(obj_Form.TEXTAREA1.value) == "")
	{
		alert( "依頼内容詳細を入力して下さい。" );
		obj_Form.TEXTAREA1.focus();
		return false;	
	}
	
	//使用期間from
	if (!isVaridDate(obj_Form.FromYY.value,obj_Form.FromMM.value-1,obj_Form.FromDD.value))
	{
		alert( "使用期間を正しく入力して下さい。" );
		obj_Form.FromDD.focus();
		return false;	
	}

	//使用期間to
	if (!isVaridDate(obj_Form.ToYY.value,obj_Form.ToMM.value-1,obj_Form.ToDD.value))
	{
		alert( "使用期間を正しく入力して下さい。" );
		obj_Form.ToDD.focus();
		return false;	
	}
		
	return true;
}

function isVaridDate(argYear,argMonth,argDay) 
{
	if(0<= argMonth && argMonth <= 11 && 1<=argDay && argDay <= 31)
	{
		var DateTmp = new Date(argYear,argMonth,argDay);
		if(isNaN(DateTmp))
		{
			return false;
		}
		else if(DateTmp.getFullYear() == argYear && DateTmp.getMonth() == argMonth && DateTmp.getDate() == argDay)
		{
			return true;
		}else{
			return false;
		}
	}
	else
	{
		return false;
	}
}
