function ImageSearch(type, id, vari, no, keyword, brandrm, brandrf) {
	var url = "";
	if (keyword == null || keyword == "undefined" || keyword == "")
		keyword = "";
	else {
		keyword = "&keyword=" + getParameterByName(keyword);
	}
	if (brandrm == null || brandrm == "undefined")
		brandrm = "";
	else {
		brandrm = "&brandrm=" + escape(brandrm);
	}
	if (brandrf == null || brandrf == "undefined")
		brandrf = "";
	else {
		brandrf = "&brandrf=" + escape(brandrf);
	}
	if (type == "RM") {
		url = "/info/infoRM.aspx?SearchKey=" + escape(id) + "&GroupCD=" + escape(vari) + "&no=" + escape(no) + keyword + brandrm + brandrf;
		if (window.name == "info") {
			document.location.href = url;
		}
		else {
			url = "/info/infoRM.aspx?SearchKey=" + escape(id) + "&GroupCD=" + escape(vari) + "&no=" + escape(no) + keyword + brandrm + brandrf;
			if (GetVerIE() <= 8) {
				redirectForIE(url);
			}
			else {
				var popup = window.open("", "info");
				popup.window.location.href = url;
			}
		}
	}else if (type == "RF") {
		if (window.name == "info") {
			url = "/info/infoRF.aspx?SearchKey=" + escape(id) + "&GroupCD=" + escape(vari) + "&no=" + escape(no) + keyword + brandrm + brandrf;
			document.location.href = url;
		}
		else {
			url = "/info/infoRF.aspx?SearchKey=" + escape(id) + "&GroupCD=" + escape(vari) + "&no=" + escape(no) + keyword + brandrm + brandrf;
			if (GetVerIE() <= 8) {
				redirectForIE(url);
			}
			else {
				var popup = window.open("", "info");
				popup.window.location.href = "/info/infoRF.aspx?SearchKey=" + escape(id) + "&GroupCD=" + escape(vari) + "&no=" + escape(no) + keyword + brandrm + brandrf;
			}
		}
	}else if (type == "LI") {
		// document.location.href = "/ImageSearch/imagelist.aspx?mode=List&ImageId="+escape(id)+"&ImageType="+escape(no)+"&GroupCD="+escape(vari);
		top.location.href = "/ImageSearch/imagelist.aspx?mode=List&ImageId=" + escape(id) + "&ImageType=" + escape(no) + "&GroupCD=" + escape(vari) + keyword + brandrm + brandrf;
	}else if (type == "RM_EVE") {
		document.location.href = "/eve/info/infoRM.aspx?SearchKey=" + escape(id) + "&GroupCD=" + escape(vari) + "&no=" + escape(no) + keyword;
	}else if (type == "RF_EVE") {
		document.location.href = "/eve/info/infoRF.aspx?SearchKey=" + escape(id) + "&GroupCD=" + escape(vari) + "&no=" + escape(no) + keyword;
	} else {
		return false;
	}
}
function getParameterByName(field, url) {
	field = field.toLowerCase();
	if (url != null && url != "undefined")
		url = url.toLowerCase();
	var href = url ? url : window.location.href;
	var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
	var string = reg.exec(href);
	return string ? string[1] : "";
}
function redirectForIE(targetUrl) {
	var theLink = '';
	theLink = document.createElement('a');
	theLink.style.display = 'none';
	theLink.href = targetUrl;
	theLink.target = "_blank";
	document.body.appendChild(theLink);
	theLink.click();
}
function PrevNextPage(mode,no) {
	var imgId
	var imgType
	var grpCd
	var obj_WindowOpener = window.opener.parent;
	
	if (mode == "prev") {
		number = no - 1;
		if (obj_WindowOpener.frames[0] == null) {
			return false;
		}
		else {
			imgId = obj_WindowOpener.frames[0].document.forms[0].elements["hdnImageId_"+number].value;
			imgType = obj_WindowOpener.frames[0].document.forms[0].elements["hdnImageType_"+number].value;
			grpCd = obj_WindowOpener.frames[0].document.forms[0].elements["hdnGroupCd_"+number].value;
			if ( imgType == "1" || imgType == "2" ) {
					document.location = "/info/infoRM.aspx?SearchKey="+escape(imgId)+"&GroupCD="+escape(grpCd)+"&no="+escape(number);
			} else {
					document.location = "/info/infoRF.aspx?SearchKey="+escape(imgId)+"&GroupCD="+escape(grpCd)+"&no="+escape(number);
			}
		}
	}else if (mode == "next") {
		number = no + 1;
		if (obj_WindowOpener.frames[0] == null) {
			return false;
		}
		else {
			imgId = obj_WindowOpener.frames[0].document.forms[0].elements["hdnImageId_"+number].value;
			imgType = obj_WindowOpener.frames[0].document.forms[0].elements["hdnImageType_"+number].value;
			grpCd = obj_WindowOpener.frames[0].document.forms[0].elements["hdnGroupCd_"+number].value;
			if ( imgType == "1" || imgType == "2" ) {
					document.location = "/info/infoRM.aspx?SearchKey="+escape(imgId)+"&GroupCD="+escape(grpCd)+"&no="+escape(number);
			} else {
					document.location = "/info/infoRF.aspx?SearchKey="+escape(imgId)+"&GroupCD="+escape(grpCd)+"&no="+escape(number);
			}
		}
	} else {
		return false;
	}
}

function Js_AdjustImage_Info( strName )
{
	var arr_Images = new Array();
	var str_ImageMaxDimension = "0";

	str_ImageMaxDimension = '65';
	arr_Images = document.getElementsByName( strName );
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

function Js_Adjust_ImageSearch( strName )
{
	var arr_Images = new Array();
	var str_ImageMaxDimension = "0";

	str_ImageMaxDimension = '130';
	arr_Images = document.getElementsByName( strName );
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

function Js_hayawariPageReDirect()
{
	var link='/pickup/feature/creative/event-winter130815.html';
	try{
		window.opener.parent.frames[0].focus();
		window.opener.top.location.href = link;	
	}
	catch(e)
	{
		window.open( link);
	}
}

function Js_campaignPageReDirect(strCampain)
{
	try{
		window.opener.parent.frames[0].focus();
		
		if(strCampain=="hayawari")
		{	
		window.opener.top.location.href = "/topics/campaign-hayawari/";	
		}
		else if(strCampain=="RF")
		{
		window.opener.top.location.href = "/topics/campaign-rf/";			
		}
		else if(strCampain=="MW")
		{
		window.opener.top.location.href = "/topics/campaign-minowa/";
		}			
		else if(strCampain=="LT")
		{
		window.opener.top.location.href = "/lovefromtohoku/";			
		}
		else if(strCampain=="SL")
		{
		window.opener.top.location.href = "/sample-image/";			
		}
	}
	catch(e)
	{
		if(strCampain=="hayawari")
		{	
		window.open("/topics/campaign-hayawari/","hayawari");
		}
		else if(strCampain=="RF")
		{
		window.open("/topics/campaign-rf/","rf");
		}
		else if(strCampain=="MW")
		{
		window.open("/topics/campaign-minowa/","minowa");			
		}
		else if(strCampain=="LT")
		{
		window.open("/lovefromtohoku/","lovefromtohoku");			
		}

	}
}

function getSimilarImageDetailinfo(sImageId, sImageType, sVariation, sPageId, bCache, keyword_a) {
	str_ImageMaxDimension = "65";
	var version = GetVerIE();
	var url = "/home/SimilarInfoManager.aspx?ImageId=" + sImageId + "&ImageType=" + sImageType + "&Variation=" + sVariation + "&PageId=" + sPageId;
	if (keyword_a !== null || keyword_a !== '') {
	    url = url + "&keyword_a=" + escape(keyword_a);
	}
	jQuery("#screen").show();
	if( version != 8 ){
		var variation = jQuery("#tblVariationImage img[name='VariImgItem']");
		var iCountVariation = jQuery(variation).length;
		if( iCountVariation > 0 ){
			var iCnt = 0;
			jQuery(variation).each(function () {
				jQuery(this).imagesLoaded().always(function (instance) {
					if( instance.images[0].isLoaded ){
						var img = instance.elements[0];
						var w = img.width;
						var h = img.height;
						if (w > h) {
							if (parseInt(w) > parseInt(str_ImageMaxDimension)) {
								img.width = str_ImageMaxDimension;
							}
						}
						else {
							if (h > parseInt(str_ImageMaxDimension)) {
								img.height = str_ImageMaxDimension;
							}
						}	
					}
				}).done(function (instance) {
					if( iCnt == iCountVariation - 1 ){
						var sValue = jQuery("#tblVariationImage").html();
						jQuery("#tblVariationImage").empty();
						jQuery("#tblVariationImage").html(sValue);	
					}
					iCnt++;
				});
			});
		}	
	}
	jQuery.ajax({
		type: "GET",
		cache: bCache,
		url: url,
		success: function (r) {
			if (r != null && r != "" & r != "undefined") {
				jQuery("#tblLikeImage").empty();
				var response = r;
				response = response.similar;
				if (response == "" || response == null || response == "undefined" || response[0] == "") {
					jQuery("#dvLikeImage").hide();
				}
				else if ( response[0] == "0") {
					jQuery("#screen").hide();
				} else {
					GenerateHtml(response, version);
				}
			}else{
				jQuery("#screen").hide();
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
		  jQuery("#screen").hide();
		}
	});
}
function GenerateHtml(response, version){
	var trHTML = "";
	var iCount = 0;
	if (version == 8 || version == 9 || version == 10) {
		trHTML += "<tr>";
		jQuery.each(response, function (i, item) {
			trHTML += "<td>";
			trHTML += "<a id='dlLikeImage_lnkliImgItem_" + item.item_count + "' title='" + item.title + "' href='" + item.detail_path + "' style='display:inline-block;border-width:0px;'" + ">";
			trHTML += "<img src='" + item.thumb_path + "' name='LIImgItem' border='0' >";
			trHTML += "</a>";
			trHTML += "<input type='hidden' value='" + item.image_id + "' name='lihdnImageId_" + item.item_count + "'>";
			trHTML += "<input type='hidden' value='" + item.image_type + "' name='lihdnImageType_" + item.item_count + "' >"
			trHTML += "<input type='hidden' value='" + item.group_cd + "' name='lihdnGroupCd_" + item.item_count + "' >"
			trHTML += "</td>";
		});
		jQuery("#dvLikeImage").show();
		trHTML += "</tr>";
		jQuery("#tblLikeImage").append(trHTML);
		ProcessComplete(version);
	}else{
		jQuery("#dvLikeImage").show();
		jQuery.each(response, function (i, item) {
			jQuery("<img id='img"+ i +"' src='" + item.thumb_path + "' name='LIImgItem' border='0' >").imagesLoaded()
				.always(function (instance) {
					trHTML = "";
					var img = instance.elements[0];
					var w = img.width;
					var h = img.height;
					var sImg = "";
					if (w > h) {
						if (parseInt(w) > parseInt(str_ImageMaxDimension)) {
							sImg += "<img src='" + item.thumb_path + "' name='LIImgItem' border='0' width='" + str_ImageMaxDimension + "' >";
						}
					}
					else {
						if (h > parseInt(str_ImageMaxDimension)) {
							sImg += "<img src='" + item.thumb_path + "' name='LIImgItem' border='0' height='" + str_ImageMaxDimension + "' >";
						}
					}
					trHTML += "<td>";
					trHTML += "<a id='dlLikeImage_lnkliImgItem_" + item.item_count + "' title='" + item.title + "' href='" + item.detail_path + "' style='display:inline-block;border-width:0px;'" + ">";
					trHTML += sImg;
					trHTML += "</a>";
					var sId = parseInt(item.item_count) - 1;
					trHTML += "<input type='hidden' value='" + item.image_id + "' name='lihdnImageId_" + sId + "'>";
					trHTML += "<input type='hidden' value='" + item.image_type + "' name='lihdnImageType_" + sId + "' >"
					trHTML += "<input type='hidden' value='" + item.group_cd + "' name='lihdnGroupCd_" + sId + "' >"
					trHTML += "</td>";
				})
				.done(function (instance) {
					if (iCount == 0) {
						jQuery("#tblLikeImage").append("<tr id='trFirst'>" + trHTML + "</tr>");
					} else {
						jQuery("#tblLikeImage tr[id='trFirst']").append(trHTML);
					}
					if( iCount == parseInt(response.length) - 1  ){
						jQuery("#screen").hide();		
					}
					iCount++;
				}).fail(function () { jQuery("#screen").hide();});
		});
	}
}
function ProcessComplete(version) {
	if (version == 8 || version == 9 || version == 10) {
		Js_AdjustImage_Info('VariImgItem');
		var container = jQuery('#dvLikeImage img[name=\"LIImgItem\"]');
		var iComplete = 0;
		var iCount = 0;
		if (jQuery(container).length)
			iCount = jQuery(container).length;
		if (iCount > 0) {
			jQuery(container).each(function () {
				jQuery(this).load(function () {
					if (this.width > this.height) {
						if (parseInt(this.width) > parseInt(str_ImageMaxDimension)) {
							this.width = str_ImageMaxDimension;
						}
					}
					else {
						if (this.height > parseInt(str_ImageMaxDimension)) {
							this.height = str_ImageMaxDimension;
						}
					}
					iComplete++;
					if (iComplete == iCount) {
						jQuery("#screen").hide();
					}
				}).error(function () {
					jQuery("#screen").hide();
				});
			});
		} else {
			jQuery("#screen").hide();
		}
	}
}
function GetVerIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // IE 12 => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return 0;
}


// COMP DL WINDOW

addCompOnload(function(){
	var thisUrl = document.location.href;
	if(thisUrl.indexOf("/info/info")>0){
		var btnCompDl = document.getElementById("hLnk_comp_dl_10_mb");
		var btnMotionCompDl = document.getElementById("hLnk_motion_comp_dl");
		var thisUrl = document.location;
		if(btnCompDl != null){
			openUrl = btnCompDl.href;
			btnCompDl.onclick = function(){
				window.open(openUrl,"","width=560,height=600,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
				return false;
			}
		} else if(btnMotionCompDl != null){
			loginFlag = document.getElementsByClassName("comp-member").length;
			if(loginFlag == 0){
				openUrl = btnMotionCompDl.href;
				btnMotionCompDl.onclick = function(){
					window.open(openUrl,"","width=560,height=600,status=yes,scrollbars=yes,resizable=yes,left=50,top=50");
					return false;
				}
			}
		}
	}
});
function addCompOnload(func){
	try{
		window.addEventListener("load", func, false);
	} catch(e){
		window.attachEvent("onload",func);
	}
}
