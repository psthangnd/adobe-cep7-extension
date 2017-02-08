
// 番号指定によるチェックボックスのON/OFF設定
function checkboxOnOff(chkNum,mode)
{
	var elements = document.getElementsByTagName("li");
	var bgposition = "";
	
	for(i=0;i<elements.length;i++)
	{
		if(elements[i].id == "clist" + chkNum)
		{
			// inputタグの取得
			var inputelm = document.getElementById("idSearchForm_chck_Ctgy_choice" + chkNum);
			
			if(mode == 0){inputelm.checked =  true;}
			else if(mode == 1){inputelm.checked =  false;}
			else
			{
				// 現在状態の反対を指定する
				if(inputelm.checked){if(IschekboxOff(chkNum)){inputelm.checked =  false;}}
				else{inputelm.checked =  true;} 
			}
			
			switch(chkNum)
			{
				case "01":
					if(inputelm.checked ){bgposition = "-12px -27px";}
					else{bgposition = "-12px 0px";}
					break;
				case "02":
					if(inputelm.checked){bgposition = "-54px -27px";}
					else{bgposition = "-54px 0px";}
					break;
				case "03":
					if(inputelm.checked){bgposition = "-108px -27px";}
					else{bgposition = "-108px 0px";}
					break;
				case "04":
					if(inputelm.checked){bgposition = "-190px -27px";}
					else{bgposition = "-190px 0px";}
					break;
				case "05":
					if (inputelm.checked) { bgposition = "-250px -27px"; }
					else { bgposition = "-250px 0px"; }
					break;
				default:
					bgposition = "";
					break;
			}
			elements[i].style.backgroundPosition = bgposition;
			break;
		}
	}

}

// チェックボックスのすべてON設定
function checkboxAllOn()
{
	checkboxOnOff("01",0);
	checkboxOnOff("02",0);
	checkboxOnOff("03",0);
	checkboxOnOff("04", 0);
	checkboxOnOff("05", 1);
}

// 一部のみON設定
function checkboxOn(chkNum)
{
	switch(chkNum)
	{
		case "01":
			checkboxOnOff("01",0);
			checkboxOnOff("02",1);
			checkboxOnOff("03",1);
			checkboxOnOff("04",1);
			break;
		case "02":
			checkboxOnOff("01",1);
			checkboxOnOff("02",0);
			checkboxOnOff("03",1);
			checkboxOnOff("04",1);
			break;
		case "03":
			checkboxOnOff("01",1);
			checkboxOnOff("02",1);
			checkboxOnOff("03",0);
			checkboxOnOff("04",1);
			break;
		case "04":
			checkboxOnOff("01",1);
			checkboxOnOff("02",1);
			checkboxOnOff("03",1);
			checkboxOnOff("04",0);
			break;
		default:
			break;
	}
}

// 指定チェックボックス以外がすべてOFFか調べる
function IschekboxOff(chkNum)
{
	if(document.getElementById("idSearchForm_chck_Ctgy_choice01").checked)
	{
		if(chkNum != "01"){return true;}
	}
	
	if(document.getElementById("idSearchForm_chck_Ctgy_choice02").checked)
	{
		if(chkNum != "02"){return true;}
	}
	
	if(document.getElementById("idSearchForm_chck_Ctgy_choice03").checked)
	{
		if(chkNum != "03"){return true;}
	}
	
	if(document.getElementById("idSearchForm_chck_Ctgy_choice04").checked)
	{
		if(chkNum != "04"){return true;}
	}
	
	return false;
}

