var NN = false;
var str_EventCode = 0;
var str_Ener = 0;

//if ( navigator.appName == "Netscape" )
//{
//    NN = true;
//}
//else
//{
//}

/*
if ( navigator.userAgent.toUpperCase().indexOf("WINDOWS") != -1 )
{
    if ( NN )
    {
        window.document.captureEvents( Event.KEYPRESS );
//        window.document.onkeydown = Process_KeyDown_NN;
        window.document.onkeypress = Process_KeyDown_NN;
    }
    else
    {
//        window.document.onkeydown = Process_KeyDown_IE;
        window.document.onkeypress = Process_KeyDown_IE;
    }
}
else if ( navigator.userAgent.toUpperCase().indexOf("MAC") != -1 )
{
    if ( NN )
    {
        window.document.captureEvents( Event.KEYPRESS );
//        window.document.onkeydown = Process_KeyDown_MAC_NN;
        window.document.onkeypress = Process_KeyDown_MAC_NN;
    }
    else
    {
//        window.document.onkeydown = Process_KeyDown_MAC_IE;
        window.document.onkeypress = Process_KeyDown_MAC_IE;
    }
}else{
}
*/

function ChengeDropdownList( genre, url, ctrl )
{
	var int_Index
	var str_DdlValue
	
	switch (genre) {
	    case "artlist1":
			int_Index = ctrl.selectedIndex;
			str_DdlValue = ctrl.options[ int_Index ].value;
			document.location = "/Brand/result.aspx?Page=Contents&BrandKey=" + escape(str_DdlValue) + "&BrandID=16&ImageType=RM";
			break;
	    case "artlist2":
			int_Index = ctrl.selectedIndex;
			str_DdlValue = ctrl.options[ int_Index ].value;
   			document.location = "/Brand/result.aspx?Page=Contents&BrandKey=" + escape(str_DdlValue) + "&BrandID=16&ImageType=RM";
			break;
	    case "artlist3":
			int_Index = ctrl.selectedIndex;
			str_DdlValue = ctrl.options[ int_Index ].value;
			document.location = "/Brand/result.aspx?Page=Contents&BrandKey=" + escape(str_DdlValue) + "&BrandID=16&ImageType=RM";
			break;
	    case "magnum1":
			int_Index = ctrl.selectedIndex;
			str_DdlValue = ctrl.options[ int_Index ].value;
			document.location = "/Brand/result.aspx?Page=Contents&BrandKey=" + escape(str_DdlValue) + "&BrandID=5&ImageType=RM";
			break;
	    case "magnum2":
			int_Index = ctrl.selectedIndex;
			str_DdlValue = ctrl.options[ int_Index ].value;
			document.location = "/Brand/result.aspx?Page=Contents&BrandKey=" + escape(str_DdlValue) + "&BrandID=5&ImageType=RM";
			break;
	    case "magnum3":
			int_Index = ctrl.selectedIndex;
			str_DdlValue = ctrl.options[ int_Index ].value;
			document.location = "/Brand/result.aspx?Page=Contents&BrandKey=" + escape(str_DdlValue) + "&BrandID=5&ImageType=RM";
			break;
	    case "jump":
			int_Index = ctrl.selectedIndex;
			str_DdlValue = ctrl.options[ int_Index ].value;
			document.location = url + "&PageNum=" + str_DdlValue + "&JumpMode=ddlJump";
			break;
/*
	    case "cd":
			int_Index = ctrl.selectedIndex;
			str_DdlValue = ctrl.options[ int_Index ].value;
			document.location = "/stock/cdrom/result.aspx?GoodsNo=&MCategoryID=" + str_DdlValue;
			break;
	    case "cdsearch":
			int_Index = ctrl.selectedIndex;
			str_DdlValue = ctrl.options[ int_Index ].value;
			document.location = "/stock/cdrom/result.aspx?GoodsNo=&MCategoryID=" + str_DdlValue +"&InfoFlg=1";
			break;
	    case "tmp":
			int_Index = ctrl.selectedIndex;
			str_DdlValue = ctrl.options[ int_Index ].value;
   			document.location = "/stock/ppt/result.aspx?Page=Search&SearchKey=" + str_DdlValue;
			break;
	    case "photographer":
			int_Index = ctrl.selectedIndex;
			str_DdlValue = ctrl.options[ int_Index ].value;
			document.location = '/Brand/View/photographer/PhotographerProfile.aspx?pc=' + str_DdlValue
			break;
*/
	}
}


function MagnumPeople( Name )
{
	//	document.location = "/Brand/result.aspx?Page=Contents&BrandKey=" + escape(Name) + "&BrandID=5&ImageType=RM";
	top.location = "/index.aspx?SearchMode=7&FromDir=Brand&Page=KeySearch&ImageType=RM&BrandID=5&BrandKey=" + escape(Name);
}

function ArtlistDogs( DogName )
{
	//	document.location = "/Brand/result.aspx?Page=Contents&BrandKey=" + escape(DogName) + "&BrandID=16&ImageType=RM";
	top.location = "/index.aspx?SearchMode=7&FromDir=Brand&Page=KeySearch&ImageType=RM&BrandID=16&BrandKey=" + escape(DogName);
}

function ListVisible(boxflg){

	if(boxflg == 'RM'){
		if(document.forms[0].idSearchForm_chck_License_RightsManaged.checked==true){
			document.forms[0].idSearchForm_listRM.disabled=false;
			document.forms[0].idSearchForm_listRM.options[0].selected=true;
		}else{
			document.forms[0].idSearchForm_listRM.disabled=true;
			for(i=0;i<document.forms[0].idSearchForm_listRM.options.length;i++){
				document.forms[0].idSearchForm_listRM.options[i].selected=false;
			}
		}
	}
	else if(boxflg == 'RF'){
	
		if(document.forms[0].idSearchForm_chck_License_RoyaltyFree.checked==true){
			document.forms[0].idSearchForm_listRF.disabled=false;
			document.forms[0].idSearchForm_listRF.options[0].selected=true;
		}else{
			document.forms[0].idSearchForm_listRF.disabled=true;
			for(i=0;i<document.forms[0].idSearchForm_listRF.options.length;i++){
				document.forms[0].idSearchForm_listRF.options[i].selected=false;
			}
		}
	}
	else if(boxflg == 'RMMotion'){
		if(document.forms[0].idSearchFormMotion_chck_License_RightsManaged.checked==true){
			document.forms[0].idSearchFormMotion_listRM.disabled=false;
			document.forms[0].idSearchFormMotion_listRM.options[0].selected=true;
		}else{
			document.forms[0].idSearchFormMotion_listRM.disabled=true;
			for(i=0;i<document.forms[0].idSearchFormMotion_listRM.options.length;i++){
				document.forms[0].idSearchFormMotion_listRM.options[i].selected=false;
			}
		}	
	}	
	else if(boxflg == 'RFMotion'){
	
		if(document.forms[0].idSearchFormMotion_chck_License_RoyaltyFree.checked==true){
			document.forms[0].idSearchFormMotion_listRF.disabled=false;
			document.forms[0].idSearchFormMotion_listRF.options[0].selected=true;
		}else{
			document.forms[0].idSearchFormMotion_listRF.disabled=true;
			for(i=0;i<document.forms[0].idSearchFormMotion_listRF.options.length;i++){
				document.forms[0].idSearchFormMotion_listRF.options[i].selected=false;
			}
		}
	}
}
function ListVisibleSelBrand(boxflg){

	if(boxflg == 'RM'){
		if(document.forms[0].idSearchForm_chck_License_RightsManaged.checked==true){
			document.forms[0].idSearchForm_listRM.disabled=false;
		}else{
			document.forms[0].idSearchForm_listRM.disabled=true;
			for(i=0;i<document.forms[0].idSearchForm_listRM.options.length;i++){
				document.forms[0].idSearchForm_listRM.options[i].selected=false;
			}
		}
	}
	else if(boxflg == 'RF'){
	
		if(document.forms[0].idSearchForm_chck_License_RoyaltyFree.checked==true){
			document.forms[0].idSearchForm_listRF.disabled=false;
		}else{
			document.forms[0].idSearchForm_listRF.disabled=true;
			for(i=0;i<document.forms[0].idSearchForm_listRF.options.length;i++){
				document.forms[0].idSearchForm_listRF.options[i].selected=false;
			}
		}
	}	
	else if(boxflg == 'RMMotion'){
		if(document.forms[0].idSearchFormMotion_chck_License_RightsManaged.checked==true){
			document.forms[0].idSearchFormMotion_listRM.disabled=false;
		}else{
			document.forms[0].idSearchFormMotion_listRM.disabled=true;
			for(i=0;i<document.forms[0].idSearchFormMotion_listRM.options.length;i++){
				document.forms[0].idSearchFormMotion_listRM.options[i].selected=false;
			}
		}
	}
	else if(boxflg == 'RFMotion'){
	
		if(document.forms[0].idSearchFormMotion_chck_License_RoyaltyFree.checked==true){
			document.forms[0].idSearchFormMotion_listRF.disabled=false;
		}else{
			document.forms[0].idSearchFormMotion_listRF.disabled=true;
			for(i=0;i<document.forms[0].idSearchFormMotion_listRF.options.length;i++){
				document.forms[0].idSearchFormMotion_listRF.options[i].selected=false;
			}
		}
	}	
}


function LoadRightsSearchFont(){
}


function LoadRightsSearch(){
	changeLayerStatusSearch();
	/*
	ListVisibleSelBrand('RM');
	ListVisibleSelBrand('RF');
	*/
}
function LoadRightsSearchMotion(){
	//changeLayerStatusSearch();
    /*
	ListVisibleSelBrand('RMMotion');
	ListVisibleSelBrand('RFMotion');
    */
    
	sOption = getCookie();

	if(sOption=='1'){
		changeLayerForMotion(2);
	}else{
		changeLayerForMotion(1);
	}    
}

//'ThreeDimension:3D---------------------------------------------------------
//'1103xx qzc kawashima Add.
function LoadRightsSearch3DModel(){
	//changeLayerStatusSearch();
    /*
	ListVisibleSelBrand('RMMotion');
	ListVisibleSelBrand('RFMotion');
    */
//alert('ok');    
	sOption = getCookie();

	if(sOption=='1'){
		changeLayerFor3DModel(2);
	}else{
		changeLayerFor3DModel(1);
	}    
}
//'---------------------------------------------------------ThreeDimension:3D

//'Sound:MUSIC&SFX---------------------------------------------------------
//'1108xx qzc kawashima Add.

function LoadRightsSearchSound(){

	sOption = getCookie();

	if(sOption=='1'){
		changeLayerForSound(2);
	}else{
		changeLayerForSound(1);
	}    
}
function LoadSearchSoundCategory(){

	sOption = getCookieSoundCategory();
	if(sOption=='1'){
		changeLayerForSoundCategory(2);
	}else{
		changeLayerForSoundCategory(1);
	}    
}
//'---------------------------------------------------------Sound:MUSIC&SFX

function changeLayerStatusSearch(){
	sOption = getCookie();

	if(sOption=='1'){
		changeLayer(2);
	}else{
		changeLayer(1);
	}
}

function Process_KeyDown_NN( e )
{
    var obj_form_handle;
    if ( NN )
    {
        str_EventCode = e.which;
        if ( str_EventCode == 13 )
        {
			if (str_Ener == 0) {
				var document_handle = top.body.document;
				var form_button_Search = document_handle.getElementById("idSearchForm:bttn_Search");
				if ( form_button_Search )
				{
					eval( "JavaScript:__doPostBack('idSearchForm:bttn_Search','')" );
				}
				else
				{
					form_button_Search = document_handle.getElementById("bttn_Search");
					if ( form_button_Search )
					{
						eval( "javascript:void(search('SearchWord'))" );
					}
					else
					{
					}
				}
				str_Ener = 1;
			}
        }
    }
    return true;
}

function Process_KeyDown_IE(e)
{
	if (0 < GetVerIE() && GetVerIE() <=8) {
		str_EventCode = event.keyCode;
	}
	else
	{
        str_EventCode = e.which;
	}
    if ( str_EventCode == 13 )
    {
		if (str_Ener == 0) {
			var document_handle = top.document;       
			var form_button_Search = document_handle.getElementById("idSearchForm:bttn_Search");
			if ( form_button_Search )
			{
				eval( "JavaScript:__doPostBack('idSearchForm:bttn_Search','')" );
			} 
			else
			{
				form_button_Search = document_handle.getElementById("bttn_Search");
				if ( form_button_Search )
				{
					eval( "javascript:void(search('SearchWord'))" );
				}
				else
				{
				}
			}
			str_Ener = 1;
		}
    }          
    return true;
}

function Process_KeyDown_MAC_NN( e )
{
    var obj_form_handle;
    if ( NN )
    {
        str_EventCode = e.which;
        if ( str_EventCode == 13 )
        {
			if (str_Ener == 0) {
				var document_handle = top.body.document;
				var form_button_Search = JsGetDocumentObjectByName_MAC("idSearchForm:bttn_Search");
				if ( form_button_Search )
				{
					eval( "JavaScript:__doPostBack('idSearchForm:bttn_Search','');" );
				}
				else
				{
					form_button_Search = document_handle.getElementById("bttn_Search");
					if ( form_button_Search )
					{
						eval( "javascript:void(search('SearchWord'))" );
					}
					else
					{
					}
				}
				str_Ener = 1;
			}
        }
    }
    return true;
}

function Process_KeyDown_MAC_IE()
{
    var str_JsRedirect = "";
    str_EventCode = event.keyCode;
    if ( str_EventCode == 13 )
    {
		if (str_Ener == 0) {
			var document_handle = top.document;       
			var form_button_Search = JsGetDocumentObjectByName_MAC( "idSearchForm:bttn_Search" );
			if ( form_button_Search )
			{
				eval( "JavaScript:__doPostBack('idSearchForm:bttn_Search','')" );
			}
			else
			{
				form_button_Search = document_handle.getElementById("bttn_Search");
				if ( form_button_Search )
				{
					eval( "javascript:void(search('SearchWord'))" );
				}
				else
				{
				}
			}
			str_Ener = 1;
			return true;
		}
    }
    return true;
}

function JsGetDocumentObjectByName_MAC( str_ElementName )
{
    var ObjToReturn = null;
    
    for ( var i = 0; i < top.document.forms[0].elements.length; i++ )
    {
        ObjToReturn = top.document.forms[0].elements[i];
        if ( ObjToReturn.name == str_ElementName )
        {
            return ObjToReturn;
        }
    }
    return null;
}
