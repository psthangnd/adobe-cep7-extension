//
// イメージタイプチェックボックス
//
function checkImageTypeCheckBox(imageTypeObj, type) {
    var target = "";
    if ( type == "rm" ) {
        target = "idSearchForm_chck_License_RoyaltyFree";
    }
    else if ( type == "rf" ) {
        target = "idSearchForm_chck_License_RightsManaged";
    }
    else if ( type == "rm-creative" ) {
        target = "idSearchForm_chck_License_Creative_RoyaltyFree";
    }
    else if ( type == "rf-creative" ) {
        target = "idSearchForm_chck_License_Creative_RightsManaged";
    }
    else if ( type == "rm-motion" ) {
        target = "idSearchForm_chck_Motion_License_RoyaltyFree";
    }
    else if ( type == "rf-motion" ) {
        target = "idSearchForm_chck_Motion_License_RightsManaged";
    }
    
    // チェックボックスON
    if ( imageTypeObj.checked ) {
        if ( type == "rm" ) {
            checkLicense();
        } else if ( type == "rm-creative" ) {
			checkLicenseCreative();
        }
        // もうひとつのイメージタイプにチェックがついていたら
        if ( document.getElementById(target).checked ) {
            // 全ブランドを選択ON
            allBrandCheck(type, true);
            // ブランドリスト選択全体OFF
            allBrandListCheck(type, false);
        }
    }
    else {
        
        // もうひとつのイメージタイプにチェックがついていたらOFF
        if ( document.getElementById(target).checked ) {
            if ( type == "rm" ) {
                checkLicense();
            } else if ( type == "rm-creative" ) {
				checkLicenseCreative();
            }
            // 全ブランドを選択OFF
            allBrandCheck(type, false);
            // ブランドリスト選択全体OFF
            allBrandListCheck(type, false);
        }
    }
}

function ImageTypeCheckBoxSelect(imageTypeObj, type) {
	var target = "";
	if (type == "rm") {
		target = "idSearchForm_chck_License_RoyaltyFree";
	}
	else if (type == "rf") {
		target = "idSearchForm_chck_License_RightsManaged";
	}
	else if (type == "rm-creative") {
		target = "idSearchForm_chck_License_Creative_RoyaltyFree";
	}
	else if (type == "rf-creative") {
		target = "idSearchForm_chck_License_Creative_RightsManaged";
	}
	else if (type == "rm-motion") {
		target = "idSearchForm_chck_Motion_License_RoyaltyFree";
	}
	else if (type == "rf-motion") {
		target = "idSearchForm_chck_Motion_License_RightsManaged";
	}

	if (imageTypeObj.checked) {
		if (document.getElementById(target).checked) {
			allBrandCheck(type, true);
			allBrandListCheck(type, false);
		}
	}
	else {
		if (document.getElementById(target).checked) {
			allBrandCheck(type, false);
			allBrandListCheck(type, false);
			if (type == "rm" || type == "rm-creative" || type == "rm-motion") {
				DisablePriceZone();
			} else {
				DisablePriceSize();
			}
		}
	}
}

function DisablePriceZone() {
	document.forms[0].idSearchForm_chck_Standard.checked = false;
	document.forms[0].idSearchForm_chck_High_Standard.checked = false;
	document.forms[0].idSearchForm_chck_Premium.checked = false;
}

function DisablePriceSize() {
    document.forms[0].idSearchForm_ddl_Price.selectedIndex = 0;
    document.forms[0].idSearchForm_ddl_Size.selectedIndex = 0;
}

function ChooseStatusCheckbox(objControl) {
    if (objControl.checked) {
        imageTypeCheck('rm-creative', true);
        allBrandCheck('rm-creative', true);
    }
}

function ChangeItemDropdownlist(objControl) {
    if (objControl.options[objControl.selectedIndex].value != "") {
        if (isBrandListCheckAllOFF('rf-creative')) {
            imageTypeCheck('rf-creative', true);
            allBrandCheck('rf-creative', true);
        }

        document.forms[0].idSearchForm_chck_Ctgy_choice05.checked = false;
    }
}

function ChangeDisplayOnlyVector(objControl) {
    if (objControl != null && !objControl.checked) {
        DisablePriceSize();
    }
}
//
// 全ブランドを選択チェックボックス
//
function checkallBrandCheckBox(allBrandObj, type) {
    // チェックボックスON
    if ( allBrandObj.checked ) {
        // イメージタイプ選択ON
        imageTypeCheck(type, true);
        // ブランドリスト選択全体OFF
        allBrandListCheck(type, false);
        
        if ( type == "rm" ) {
            // パターンボックスON/OFF
            checkLicense();
        } else if ( type == "rm-creative" ) {
			checkLicenseCreative();
        }
    }
    else {
        var target = "";
        if ( type == "rm" ) {
            target = "idSearchForm_chck_License_RoyaltyFree";
        }
        else if ( type == "rf" ) {
            target = "idSearchForm_chck_License_RightsManaged";
        }
        else if ( type == "rm-creative" ) {
            target = "idSearchForm_chck_License_Creative_RoyaltyFree";
        }
        else if ( type == "rf-creative" ) {
            target = "idSearchForm_chck_License_Creative_RightsManaged";
        }
        else if ( type == "rm-motion" ) {
            target = "idSearchForm_chck_Motion_License_RoyaltyFree";
        }
        else if ( type == "rf-motion" ) {
            target = "idSearchForm_chck_Motion_License_RightsManaged";
        }
        // もうひとつのイメージタイプにチェックがついていたらOFF
        if ( target != "" && document.getElementById(target).checked ) {
            // イメージタイプ選択OFF
            imageTypeCheck(type, false);
            // ブランドリスト選択全体OFF
            allBrandListCheck(type, false);
            
            if ( type == "rm" ) {
                // パターンボックスON/OFF
                checkLicense();
            } else if ( type == "rm-creative" ) {
				checkLicenseCreative();
            }
        }
        else {
            // 全ブランドを選択ON
            allBrandCheck(type, true);
        }
    }
}

function AllBrandCheckBoxSelect(allBrandObj, type) {
	if (allBrandObj.checked) {
		imageTypeCheck(type, true);
		allBrandListCheck(type, false);
	}
	else {
		var target = "";
		if (type == "rm") {
			target = "idSearchForm_chck_License_RoyaltyFree";
		}
		else if (type == "rf") {
			target = "idSearchForm_chck_License_RightsManaged";
		}
		else if (type == "rm-creative") {
			target = "idSearchForm_chck_License_Creative_RoyaltyFree";
		}
		else if (type == "rf-creative") {
			target = "idSearchForm_chck_License_Creative_RightsManaged";
		}
		else if (type == "rm-motion") {
			target = "idSearchForm_chck_Motion_License_RoyaltyFree";
		}
		else if (type == "rf-motion") {
			target = "idSearchForm_chck_Motion_License_RightsManaged";
		}
		if (target != "" && document.getElementById(target).checked) {
			imageTypeCheck(type, false);
			allBrandListCheck(type, false);
		}
		else {
			allBrandCheck(type, true);
		}
	}
}

//
// ブランドリスト選択チェックボックス
//
function checkBrandListCheckBox(brandListObj, type) {
    // チェックボックスON
    if ( brandListObj.checked ) {
        // イメージタイプ選択ON
        imageTypeCheck(type, true);
        // 全ブランドを選択OFF
        allBrandCheck(type, false);
        if ( type == "rm" ) {
            // パターンボックスON/OFF
            checkLicense();
        } else if ( type == "rm-creative" ) {
			checkLicenseCreative();
        }
    }
    else {
        var target = "";
        if ( type == "rm" ) {
            target = "idSearchForm_chck_License_RoyaltyFree";
        }
        else if ( type == "rf" ) {
            target = "idSearchForm_chck_License_RightsManaged";
        }
        else if ( type == "rm-creative" ) {
            target = "idSearchForm_chck_License_Creative_RoyaltyFree";
        }
        else if ( type == "rf-creative" ) {
            target = "idSearchForm_chck_License_Creative_RightsManaged";
        }
        else if ( type == "rm-motion" ) {
            target = "idSearchForm_chck_Motion_License_RoyaltyFree";
        }
        else if ( type == "rf-motion" ) {
            target = "idSearchForm_chck_Motion_License_RightsManaged";
        }
        // 全てのブランドリストがOFFかつもう一方のイメージタイプチェックがONだったらイメージタイプチェックOFF
        if ( isBrandListCheckAllOFF(type) ) {
            if ( target != "" && document.getElementById(target).checked ) {
                // イメージタイプ選択OFF
                imageTypeCheck(type, false);
                // 全ブランドを選択OFF
                allBrandCheck(type, false);
                if ( type == "rm" ) {
                    // パターンボックスON/OFF
                    checkLicense();
                } else if ( type == "rm-creative" ) {
					checkLicenseCreative();
                }
            }
            else {
                // 全ブランドを選択ON
                allBrandCheck(type, true);
            }
        }
    }
}

function ListBrandCheckBoxSelect(brandListObj, type) {
	if (brandListObj.checked) {
		imageTypeCheck(type, true);
		allBrandCheck(type, false);
	}
	else {
		var target = "";
		if (type == "rm") {
			target = "idSearchForm_chck_License_RoyaltyFree";
		}
		else if (type == "rf") {
			target = "idSearchForm_chck_License_RightsManaged";
		}
		else if (type == "rm-creative") {
			target = "idSearchForm_chck_License_Creative_RoyaltyFree";
		}
		else if (type == "rf-creative") {
			target = "idSearchForm_chck_License_Creative_RightsManaged";
		}
		else if (type == "rm-motion") {
			target = "idSearchForm_chck_Motion_License_RoyaltyFree";
		}
		else if (type == "rf-motion") {
			target = "idSearchForm_chck_Motion_License_RightsManaged";
		}
		if (isBrandListCheckAllOFF(type)) {
			if (target != "" && document.getElementById(target).checked) {
				imageTypeCheck(type, false);
				allBrandCheck(type, false);
			}
			else {
				allBrandCheck(type, true);
			}
		}
	}
}

/*--------------------------------------------*/
/*                                            */
/*--------------------------------------------*/

// イメージタイプ選択ON/OFF
function imageTypeCheck(type, mode) {
    if ( type == "rm" ) {
        document.getElementById("idSearchForm_chck_License_RightsManaged").checked = mode;
    } else if ( type == "rf" ) {
        document.getElementById("idSearchForm_chck_License_RoyaltyFree").checked = mode;
    } else if ( type == "rm-creative" ) {
        document.getElementById("idSearchForm_chck_License_Creative_RightsManaged").checked = mode;
    } else if ( type == "rf-creative" ) {
        document.getElementById("idSearchForm_chck_License_Creative_RoyaltyFree").checked = mode;
    } else if ( type == "rm-motion" ) {
        document.getElementById("idSearchForm_chck_Motion_License_RightsManaged").checked = mode;
    } else if ( type == "rf-motion" ) {
        document.getElementById("idSearchForm_chck_Motion_License_RoyaltyFree").checked = mode;
    }
}


// 全ブランドを選択ON/OFF
function allBrandCheck(type, mode) {
    if ( type == "rm" || type == "rm-creative" ) {
        document.getElementById("idSearchForm_allCheck_rm").checked = mode;
    }
    else if ( type == "rf" || type == "rf-creative" ) {
        document.getElementById("idSearchForm_allCheck_rf").checked = mode;
    }
    else if ( type == "rm-motion" ) {
        document.getElementById("idSearchForm_allCheck_rm_Motion").checked = mode;
    }
    else if ( type == "rf-motion" ) {
        document.getElementById("idSearchForm_allCheck_rf_Motion").checked = mode;
    }
    else if ( type == "3d-brand" ) {
        document.getElementById("idSearchForm_chck_3D_Brand_All").checked = mode;
    }
    else if ( type == "3d-app" ) {
        document.getElementById("idSearchForm_chck_3D_App_All").checked = mode;
    }
    else if ( type == "3d-mdl-exte" ) {
        document.getElementById("idSearchForm_chck_3D_MDL_Exte_All").checked = mode;
    }
    else if ( type == "3d-tex-exte" ) {
        document.getElementById("idSearchForm_chck_3D_TEX_Exte_All").checked = mode;
    }
    else if ( type == "soundmu-brand" ) {
        document.getElementById("idSearchForm_chck_Brand_All_Sound").checked = mode;
    }
    else if ( type == "soundse-brand" ) {
        document.getElementById("idSearchForm_chck_Brand_All_Sfx").checked = mode;
    }
}

// ブランドリスト選択全体ON/OFF
function allBrandListCheck(type, mode) {
    var target = "";
    if ( type == "rm" || type == "rm-creative" ) {
        target = "idSearchForm_dtlRMList";
    }
    else if ( type == "rf" || type == "rf-creative" ) {
        target = "idSearchForm_dtlRFList";
    }
    else if ( type == "rm-motion" ) {
        target = "idSearchForm_dtlRMList_Motion";
    }
    else if ( type == "rf-motion" ) {
        target = "idSearchForm_dtlRFList_Motion";
    }
    else if ( type == "3d-brand" ) {
        target = "idSearchForm_dtl_Brand_3D";
    }
    else if ( type == "3d-app" ) {
        target = "idSearchForm_dtl_App_3D";
    }
    else if ( type == "3d-mdl-exte" ) {
        target = "idSearchForm_dtl_MDL_Exte_3D";
    }
    else if ( type == "3d-tex-exte" ) {
        target = "idSearchForm_dtl_TEX_Exte_3D";
    }
    else if ( type == "soundmu-brand" ) {
        target = "idSearchForm_dtl_Brand_Sound";
    }
    else if ( type == "soundse-brand" ) {
        target = "idSearchForm_dtl_Brand_Sfx";
    }
    
    var box=document.getElementById(target).childNodes;
    for ( var i=0; i<box.length; i++ ) {
        box_child = box[i].childNodes;
        for ( var j=0; j<box_child.length; j++ ) {
            if((box_child[j].type || box_child[j].type)=='checkbox'){
                box_child[j].checked = mode;
            }
	        box_child2 = box_child[j].childNodes;
		    for ( var k=0; k<box_child2.length; k++ ) {
			    if((box_child2[k].type || box_child2[k].type)=='checkbox'){
				    box_child2[k].checked = mode;
				}
			}
        }
    }
}

// ブランドリストチェックボックスが全てONになっているか
function isBrandListCheckAllON( type ) {
    var target = "";
    if ( type == "rm" || type == "rm-creative" ) {
        target = "idSearchForm_dtlRMList";
    }
    else if ( type == "rf" || type == "rf-creative" ) {
        target = "idSearchForm_dtlRFList";
    }
    else if ( type == "rm-motion" ) {
        target = "idSearchForm_dtlRMList_Motion";
    }
    else if ( type == "rf-motion" ) {
        target = "idSearchForm_dtlRFList_Motion";
    }
    else if ( type == "3d-brand" ) {
        target = "idSearchForm_dtl_Brand_3D";
    }
    else if ( type == "3d-app" ) {
        target = "idSearchForm_dtl_App_3D";
    }
    else if ( type == "3d-mdl-exte" ) {
        target = "idSearchForm_dtl_MDL_Exte_3D";
    }
    else if ( type == "3d-tex-exte" ) {
        target = "idSearchForm_dtl_TEX_Exte_3D";
    }
    else if ( type == "soundmu-brand" ) {
        target = "idSearchForm_dtl_Brand_Sound";
    }
    else if ( type == "soundse-brand" ) {
        target = "idSearchForm_dtl_Brand_Sfx";
    }
    
    var isChecked = true;
    var box=document.getElementById(target).childNodes;
    for ( var i=0; i<box.length; i++ ) {
        box_child = box[i].childNodes;
        for ( var j=0; j<box_child.length; j++ ) {
            if((box_child[j].type || box_child[j].type)=='checkbox'){
                if ( ! box_child[j].checked ) {
                    isChecked = false;
                }
            }
        }
    }
    
    return isChecked;
}

// ブランドリストチェックボックスが全てOFFになっているか
function isBrandListCheckAllOFF( type ) {
    var target = "";
    var list_type = 0;
    if ( type == "rm" || type == "rm-creative" ) {
        target = "idSearchForm_dtlRMList";
    }
    else if ( type == "rf" || type == "rf-creative" ) {
        target = "idSearchForm_dtlRFList";
    }
    else if ( type == "rm-motion" ) {
        target = "idSearchForm_dtlRMList_Motion";
    }
    else if ( type == "rf-motion" ) {
        target = "idSearchForm_dtlRFList_Motion";
    }
    else if ( type == "3d-brand" ) {
        target = "idSearchForm_dtl_Brand_3D";
        list_type = 1;
    }
    else if ( type == "3d-app" ) {
        target = "idSearchForm_dtl_App_3D";
        list_type = 1;
    }
    else if ( type == "3d-mdl-exte" ) {
        target = "idSearchForm_dtl_MDL_Exte_3D";
        list_type = 1;
    }
    else if ( type == "3d-tex-exte" ) {
        target = "idSearchForm_dtl_TEX_Exte_3D";
        list_type = 1;
    }
    else if ( type == "soundmu-brand" ) {
        target = "idSearchForm_dtl_Brand_Sound";
        list_type = 1;
    }
    else if ( type == "soundse-brand" ) {
        target = "idSearchForm_dtl_Brand_Sfx";
        list_type = 1;
    }
    
    var isChecked = true;
    var box=document.getElementById(target).childNodes;
    for ( var i=0; i<box.length; i++ ) {
        box_child = box[i].childNodes;
        //if (box_child.length == 3) {
		//	box_child = box_child[1].childNodes;
        //}
        for ( var j=0; j<box_child.length; j++ ) {
			if (list_type == 1) {
				if((box_child[j].type || box_child[j].type)=='checkbox'){
					if ( box_child[j].checked ) {
						isChecked = false;
					}
				}
            } else {
				box_child_child = box_child[j].childNodes;
				for ( var k=0; k<box_child_child.length; k++ ) {
					if((box_child_child[k].type || box_child_child[k].type)=='checkbox'){
						if ( box_child_child[k].checked ) {
							isChecked = false;
						}
					}
				}
            }
        }
    }
    
    return isChecked;
}

//
// 全カテゴリを選択チェックボックス
//
function checkallCategoryCheckBox(allCategoryObj, type) {
    // チェックボックスON
    if ( allCategoryObj.checked ) {
		if (isCategoryListCheck(type)) {
			// カテゴリリスト選択全体OFF
			allCategoryListCheck(type, false);
        }
		jq(allCategoryObj).parent().addClass("listcheck");
    }
    else {
        // 全カテゴリを選択ON
        allCategoryCheck(type, true);
    }
    setCategorySearchParam(type);
}

//
// カテゴリリスト選択チェックボックス
//
function checkCategoryListCheckBox(categoryListObj, type) {
    // チェックボックスON
    if ( categoryListObj.checked ) {
		// 全ブランドを選択OFF
		allCategoryCheck(type, false);
		jq(categoryListObj).parent().addClass("listcheck");
    }
    else {
		if (!isCategoryListCheck(type)) {
			// 全カテゴリを選択ON
			allCategoryCheck(type, true);
        }
		jq(categoryListObj).parent().removeClass("listcheck");
    }
    setCategorySearchParam(type);
}

// 全カテゴリを選択ON/OFF
function allCategoryCheck(type, mode) {
    if ( type == "mu" ) {
		jq('#category_all_mu').prop('checked', mode);
		if (mode) {
			jq('#category_all_mu').parent().addClass('listcheck');
		} else {
			jq('#category_all_mu').parent().removeClass('listcheck');
		}
    }
    else if ( type == "se" ) {
		jq('#category_all_se').prop('checked', mode);
		if (mode) {
			jq('#category_all_se').parent().addClass('listcheck');
		} else {
			jq('#category_all_se').parent().removeClass('listcheck');
		}
    }
}

// カテゴリリスト選択全体ON/OFF
function allCategoryListCheck(type, mode) {
    var target = "";
    if ( type == "mu" ) {
        target = "category_contents_mu";
    }
    else if ( type == "se" ) {
        target = "category_contents_se";
    }
    
    var target_checks = jq('.' + target + ' input');
    
    target_checks.each(function() {
		jq(this).prop('checked', mode);
		if (mode) {
			jq(this).parent().addClass('listcheck');
		} else {
			jq(this).parent().removeClass('listcheck');
		}
    });
}

function isCategoryListCheck(type) {
    var target = "";
    if ( type == "mu" ) {
        target = "category_contents_mu";
    }
    else if ( type == "se" ) {
        target = "category_contents_se";
    }
    
    var target_checks = jq('.' + target + ' input:checked');
    if (target_checks.length > 0) {
		return true;
    } else {
		return false;
    }
}

function setSoundCategory() {
	var type = jq('#selectbox').val();
    var categorys = jq('#optionsound input[name="category"]').val();
    if (categorys == "") {
    } else {
		var category = categorys.split(',');
		if (type == "soundmu") {
			for (var i in categorys.split(',')) {
				jq('.category_contents_mu').find('input[value="' + category[i] + '"]').prop('checked', true).parent().addClass('listcheck');
			}
			allCategoryCheck('mu', false);
		} else {
			for (var i in categorys.split(',')) {
				jq('.category_contents_se').find('input[value="' + category[i] + '"]').prop('checked', true).parent().addClass('listcheck');
			}
			allCategoryCheck('se', false);
		}
    }
}

function setCategorySearchParam(type) {
    var target = "";
    if ( type == "mu" ) {
        target = "category_contents_mu";
    }
    else if ( type == "se" ) {
        target = "category_contents_se";
    }
    
    var target_checks = jq('.' + target + ' input:checked');
    var param = "";
    
    target_checks.each(function(){
		if (param == "") {
			param = jq(this).val();
		} else {
			param = param + "," + jq(this).val();
		}
    });
    jq('#optionsound input[name="category"]').val(param);
}

function selectPrice() {
    var objLicenseRM;
    var objPrice;
    var valuePrice;
    
    objLicenseRM = document.forms[0].idSearchForm_chck_License_RightsManaged;
    if (! objLicenseRM.checked ) {
        enablePattern("off");
        return false;
    }
    objPrice = document.forms[0].idSearchForm_ddl_Price;
    valuePrice = objPrice.options[objPrice.selectedIndex].value;
    
    
    if ( valuePrice != "" ) {
	    enablePattern("on");	
    }
    else {
	    enablePattern("off");
    }

    return false;
}

// 新検索フォーム用
function selectPriceHome() {
    var objLicenseRM;
    var objPrice;
    var valuePrice;
    
    objLicenseRM = document.forms[0].idSearchForm_chck_License_Creative_RightsManaged;
    if (! objLicenseRM.checked ) {
        enablePattern("off");
        return false;
    }
    objPrice = document.forms[0].idSearchForm_ddl_Price;
    valuePrice = objPrice.options[objPrice.selectedIndex].value;
    
    
    if ( valuePrice != "" ) {
	    enablePattern("on");	
    }
    else {
	    enablePattern("off");
    }

    return false;
}


function checkLicense() {
    var objLicenseRM;
    var objPrice;
    
    objPrice = document.forms[0].idSearchForm_ddl_Price;
    objLicenseRM = document.forms[0].idSearchForm_chck_License_RightsManaged
    //RMチェックされてなかったらパターンOFF
    if (! objLicenseRM.checked ) {
        enablePattern("off");
    }
    else {
        selectPrice();
    }
    return false;
}

function checkLicenseCreative() {
    var objLicenseRM;
    var objPrice;
    
    objPrice = document.forms[0].idSearchForm_ddl_Price;
    objLicenseRM = document.forms[0].idSearchForm_chck_License_Creative_RightsManaged
    //RMチェックされてなかったらパターンOFF
    if (! objLicenseRM.checked ) {
        enablePattern("off");
    }
    else {
        selectPriceHome();
    }
    return false;
}

function setSearchPattern() {
    checkLicense();
    selectPrice();
    if (document.forms[0].idSearchForm_ddl_MyPattern.options.length > 2)
    document.forms[0].idSearchForm_ddl_MyPattern.options[2].disabled = true;
}

function enablePattern(mode) {
    if (document.forms[0].idSearchForm_ddl_MyPattern.options.length <= 2) mode = "off";
    if ( mode == "on") {
	    document.forms[0].idSearchForm_ddl_MyPattern.disabled = false;
    }
    else if ( mode == "off" ) {
	    document.forms[0].idSearchForm_ddl_MyPattern.disabled = true;
        document.forms[0].idSearchForm_ddl_MyPattern.selectedIndex = 0;
    }
    return false;
}

function selectPattern() {
    if (document.forms[0].idSearchForm_ddl_MyPattern.options.length > 2)
    document.forms[0].idSearchForm_ddl_MyPattern.options[2].disabled = true;
    var objPattern;
    var valuePattern;
    objPattern = document.forms[0].idSearchForm_ddl_MyPattern;
    valuePattern = objPattern.options[objPattern.selectedIndex].value;

    if ( valuePattern == "login" ) {
	    Js_Dispatcher( 'SignInTop' );
    }
    else if ( valuePattern == "regist" ) {
	    Js_AccountPopupWindow( 'https://' + location.host + '/account/EditEstimatePattern.aspx', 1030, 860, 'yes', 'yes', 'yes', 'PopUpHandle_Account_Cr' );
    }

    return false;
}

// 3dmodel
function checkListCheckBoxApp(ListObj, listID_MDL, listID_TEX ) {

	allBrandCheck('3d-mdl-exte', true);
	allBrandListCheck('3d-mdl-exte', false);
	jq('#idSearchForm_chck_3D_MDL_Exte_All').next('label').addClass('listcheck');
	jq('#' + listID_MDL).find('span').removeClass('listcheck');

	allBrandCheck('3d-tex-exte', true);
	allBrandListCheck('3d-tex-exte', false);
	jq('#idSearchForm_chck_3D_TEX_Exte_All').next('label').addClass('listcheck');
	jq('#' + listID_TEX).find('span').removeClass('listcheck');

	var selectApplicationStatus = false;

    var boxApp=document.getElementById(ListObj).childNodes;
    for ( var l=0; l<boxApp.length; l++ ) {
        var boxApp_child = boxApp[l].childNodes;
        for ( var m=0; m<boxApp_child.length; m++ ) {
            if((boxApp_child[m].type || boxApp_child[m].type)=='checkbox'){
                if ( boxApp_child[m].checked ) {
					var strId = boxApp_child[m].id;
					var strReplace = 'idSearchForm_dtl_App_3D_chck_3D_App_';
					var wkID = strId.indexOf(strReplace) > -1 ? strId.replace(strReplace, '') : '';
					var htbox = document.getElementById("dtl_App_3D_hidden_" + wkID);

					var sourceValue = htbox.value;

					if( sourceValue != '' ){
						
						selectApplicationStatus = true;

						var box=document.getElementById(listID_MDL).childNodes;
						for ( var i=0; i<box.length; i++ ) {
							var box_child = box[i].childNodes;
							for ( var j=0; j<box_child.length; j++ ) {
								if((box_child[j].type || box_child[j].type)=='hidden'){

									var arrWK = sourceValue.split(',');
									for( var k=0; k<arrWK.length; k++ ){

										if( box_child[j].value == arrWK[k] ){

										    var strId = box_child[j].id.substr(box_child[j].id.lastIndexOf('_')+1, box_child[j].id.length );
										    var cbox = document.getElementById("idSearchForm_dtl_MDL_Exte_3D_chck_3D_MDL_Exte_" + strId );

											if( cbox ){
												cbox.checked = true;
												cbox.parentElement.classList.add("listcheck");
												allBrandCheck('3d-mdl-exte', false);
												jq('#idSearchForm_chck_3D_MDL_Exte_All').next('label').removeClass('listcheck');
											}
										}
									}
								}

							}
						}


						box=document.getElementById(listID_TEX).childNodes;
						for ( var i=0; i<box.length; i++ ) {
							box_child = box[i].childNodes;
							for ( var j=0; j<box_child.length; j++ ) {
								if((box_child[j].type || box_child[j].type)=='hidden'){

									if( sourceValue != '' ){
										var arrWK = sourceValue.split(',');
										for( var k=0; k<arrWK.length; k++ ){

											if( box_child[j].value == arrWK[k] ){

												var strId = box_child[j].id.substring( box_child[j].id.lastIndexOf('_')+1, box_child[j].id.length );
												var cbox = document.getElementById("idSearchForm_dtl_TEX_Exte_3D_chck_3D_TEX_Exte_" + strId);

												if( cbox ){
													cbox.checked = true;
													cbox.parentElement.classList.add("listcheck");
													allBrandCheck('3d-tex-exte', false);
													jq('#idSearchForm_chck_3D_TEX_Exte_All').next('label').addClass('listcheck');
												}
											}
										}
									}

								}
							}
						}


					}

				}

            }
        }
    }

	if(selectApplicationStatus == true)
	{
		checkboxOnOff3D('02', 1);
	}
	else
	{
		checkboxOnOff3D('02', 0);
	}
}

/* sound */
function checkListCheckBoxSound(imageTypeObj, type) {

	//'Sound : 1005
	var targetRFRM = new Array();
	var target = new Array();
    // チェックボックスONにした
    if ( imageTypeObj.checked ) { //ライツマネージドクリック
	    if ( type == "rmMusic" ) {
			target[0] = document.getElementById('idSearchForm_chck_License_Music_RoyaltyFree');
			target[1] = document.getElementById('idSearchForm_chck_Brand_All_Sound');
			target[2] = document.getElementById('idSearchForm_dtl_Brand_Sound_chck_Brand_Sound_0');
			target[3] = document.getElementById('idSearchForm_dtl_Brand_Sound_chck_Brand_Sound_1');
			target[4] = document.getElementById('idSearchForm_dtl_Brand_Sound_chck_Brand_Sound_2');
			target[5] = document.getElementById('idSearchForm_dtl_Brand_Sound_chck_Brand_Sound_3');
			
			if( target[0].checked && !target[1].checked ){
				target[1].click();
			}
	    }
	    else if ( type == "rfMusic" ) {
			target[0] = document.getElementById('idSearchForm_chck_License_Music_RightsManaged');
			target[1] = document.getElementById('idSearchForm_chck_Brand_All_Sound');
			if( target[0].checked && !target[1].checked ){
				target[1].click();
			}
	    }
	    else if ( type == "rmSfx" ) {
			target[0] = document.getElementById('idSearchForm_chck_License_Sfx_RoyaltyFree');
			target[1] = document.getElementById('idSearchForm_chck_Brand_All_Sfx');
			target[2] = document.getElementById('idSearchForm_dtl_Brand_Sfx_chck_Brand_Sfx_0');
			target[3] = document.getElementById('idSearchForm_dtl_Brand_Sfx_chck_Brand_Sfx_1');
			target[4] = document.getElementById('idSearchForm_dtl_Brand_Sfx_chck_Brand_Sfx_2');
			if( target[0].checked && !target[1].checked && target[2].checked  && target[3].checked ){
				target[1].click();
			}else{
				target[4].click();
			}
	    }
	    else if ( type == "rfSfx" ) {
			target[0] = document.getElementById('idSearchForm_chck_License_Sfx_RightsManaged');
			target[1] = document.getElementById('idSearchForm_chck_Brand_All_Sfx');
			if( target[0].checked && !target[1].checked ){
				target[1].click();
			}
	    }
    }
    //チェックを外したとき
    else {
		targetRFRM[0] = document.getElementById('idSearchForm_chck_License_Music_RoyaltyFree');
		targetRFRM[1] = document.getElementById('idSearchForm_chck_License_Music_RightsManaged');
		targetRFRM[2] = document.getElementById('idSearchForm_chck_License_Sfx_RoyaltyFree');
		targetRFRM[3] = document.getElementById('idSearchForm_chck_License_Sfx_RightsManaged');

		target[6] = document.getElementById('idSearchForm_chck_Brand_All_Sound');
		target[7] = document.getElementById('idSearchForm_chck_Brand_All_Sfx');

		target[0] = document.getElementById('idSearchForm_dtl_Brand_Sound_chck_Brand_Sound_0');
		target[1] = document.getElementById('idSearchForm_dtl_Brand_Sound_chck_Brand_Sound_1');
		target[2] = document.getElementById('idSearchForm_dtl_Brand_Sound_chck_Brand_Sound_2');
		target[8] = document.getElementById('idSearchForm_dtl_Brand_Sound_chck_Brand_Sound_3');
		target[9] = document.getElementById('idSearchForm_dtl_Brand_Sound_chck_Brand_Sound_4');
		target[3] = document.getElementById('idSearchForm_dtl_Brand_Sfx_chck_Brand_Sfx_0');
		target[4] = document.getElementById('idSearchForm_dtl_Brand_Sfx_chck_Brand_Sfx_1');
		target[5] = document.getElementById('idSearchForm_dtl_Brand_Sfx_chck_Brand_Sfx_2');

	    if ( type == "rmMusic" ) { //ライツマネージドクリック
	    	if (targetRFRM[0].checked ){
	    		target[2].clicked = false;
	    		if( !target[0].checked ){
					target[0].click();
				}
	    		if( !target[1].checked ){
					target[1].click();
				}
	    		if( !target[8].checked ){
					target[8].click();
				}
	    		if( !target[9].checked ){
					target[9].click();
				}

	    	}
	    	else
	    	{
				if( target[6].checked ){//全ブランドon
					if( !target[0].checked ){
						target[0].click();
					}

					//Add 2012年6月メイン対応 T.Fukuoka Start
					if( !target[2].checked ){
						target[2].click();
					}
					//Add 2012年6月メイン対応 T.Fukuoka End
			    }else{
					if( target[2].checked ){
						target[2].click();
					}

				}
			}
	    }
	    else if ( type == "rfMusic" ) {

				if( !target[2].checked ){
					target[2].click();
				}

	    }
	    else if ( type == "rmSfx" ) {
			if( target[7].checked ){
				if( !target[3].checked ){
					target[3].click();
				}
				if( !target[4].checked ){
					target[4].click();
				}
				if( target[5].checked ){
					target[5].click();
				}
		    }else{
				if( target[5].checked ){
					target[5].click();
				}
			}
	    }
	    else if ( type == "rfSfx" ) {
			if( target[3].checked ){
				target[3].click();
			}
			if( target[4].checked ){
				target[4].click();
			}
			if( !target[5].checked ){
				target[5].click();
			}
	    }
	}
}

// サムネイルのボタン表示操作
var jq = jQuery;
jq(function () {
    SetHoverIcon();
});

function SetHoverIcon() {
	var setTimeoutConst;
	var surl = location.href;
	if(surl.indexOf("motion/result.aspx")>0){
		jq("#idResultListMotion_dtlSearchResult span").each(function(){
			var imgload = jq(this).find(".thumbnailMotionImgLoad");
			var imgicons = jq(this).find(".dtlSearchResultMotionIcons");
			imgload.hover(function(){
				setTimeoutConst = setTimeout(function(){
					imgicons.css("display","block");
				},300);
			},function(){
				if(setTimeoutConst>0){
					clearTimeout(setTimeoutConst);
				}
				imgicons.css("display","none");
			});
		});
	} else 	if(surl.indexOf("3dmodel/result")>0){
		jq("#idResultList3DModel_dtlSearchResult span").each(function(){
			var imgload = jq(this).find(".thumbnail3dImgLoad");
			var imgicons = jq(this).find(".dtlSearchResult3dIcons");
			imgload.hover(function(){
				setTimeoutConst = setTimeout(function(){
					imgicons.css("display","block");
				},300);
			},function(){
				if(setTimeoutConst>0){
					clearTimeout(setTimeoutConst);
				}
				imgicons.css("display","none");
			});
		});
	} else {
		jq("#idResultList_dtlSearchResult span").each(function(){
			var imgload = jq(this).find(".thumbnailImgLoad");
			var imgicons = jq(this).find(".dtlSearchResultIcons");
			imgload.hover(function(){
				setTimeoutConst = setTimeout(function(){
					imgicons.css("display","block");
				},300);
			},function(){
				if(setTimeoutConst>0){
					clearTimeout(setTimeoutConst);
				}
				imgicons.css("display","none");
			});
		});
	}
}
function SetTipContentIcon() {
	var searchbody = document.URL;
	var photoindex = searchbody.indexOf(location.hostname + "/keyword/result.aspx");
	if (photoindex >= 1) {
		icon001 = jq("#idResultList_dtlSearchResult .icon001");
		icon002 = jq("#idResultList_dtlSearchResult .icon002");
		icon003 = jq("#idResultList_dtlSearchResult .icon003");
	} else {
		icon001 = jq("#idResultList_dtlSearchResult .icon001");
		icon002 = jq("#idResultList_dtlSearchResult .icon002");
		icon003 = jq("#idResultList_dtlSearchResult .icon003");
	}
	icon001.hover(function () {
		titletxt = jq(this).children("a").children("img").attr("alt");
		tipcontent = '<span class="tipcontent">' + titletxt + '</span>'
		textlength = titletxt.length;
		txtwidth = textlength + "em";
		txtleft = -(textlength / 2 + 0.5) + "em";
		//jq(this).parent().append(tipcontent);
		jq(this).append(tipcontent);
		jq(".tipcontent").css({ "width": txtwidth, "top": "25px", "margin-left": txtleft });
	}, function () {
		jq(".tipcontent").remove();
	});
	icon002.hover(function () {
		titletxt = jq(this).children("a").children("img").attr("alt");
		tipcontent = '<span class="tipcontent">' + titletxt + '</span>'
		textlength = titletxt.length;
		txtwidth = textlength + "em";
		txtleft = -(textlength / 2 + 0.5) + "em";
		//jq(this).parent().append(tipcontent);
		jq(this).append(tipcontent);
		jq(".tipcontent").css({ "width": txtwidth, "top": "25px", "margin-left": txtleft }).addClass("ic002");
	}, function () {
		jq(".tipcontent").removeClass("ic002").remove();
	});
	icon003.hover(function () {
		titletxt = jq(this).children("a").children("img").attr("alt");
		tipcontent = '<span class="tipcontent">' + titletxt + '</span>'
		textlength = titletxt.length;
		txtwidth = textlength + "em";
		txtleft = -(textlength / 2 + 0.5) + "em";
		//jq(this).parent().append(tipcontent);
		jq(this).append(tipcontent);
		jq(".tipcontent").css({ "width": txtwidth, "top": "25px", "margin-left": txtleft });
	}, function () {
		jq(".tipcontent").remove();
	});
}

function karteEdiKw(bln){
	if(bln == false){
		karteKwPhoto = jsAmanaUserInfo.dlpo_kwphoto;
		if(karteKwPhoto != null){
			kwSeparator = karteKwPhoto.split(" ").length;
			var karteKwFlg = 0;
			var targetKwArray = ["ベートーヴェン","モーツァルト","バッハ","シューマン","チャイコフスキー","ショスタコーヴィチ","プロコフィエフ","シベリウス","シェーンベルク","シューベルト","ショパン","ハイドン","ドビュッシー","ブラームス","マーラー","ラヴェル","ドヴォルザーク","シュニトケ","ワーグナー","メンデルスゾーン","ストラヴィンスキー","サン＝サーンス","ラフマニノフ","スメタナ","R・シュトラウス","シュトラウス２世","バルトーク","シャブリエ","ベルリオーズ","フォーレ","ラモー","プーランク","ホルスト","ミヨー","デュカス","ハチャトゥリアン","シマノフスキ","グラナドス","スクリャービン","メシアン","ブーレーズ","アルベニス","ブルックナー","ヴィヴァルディ","ヘンデル","リスト","エルガー","サティ","ロッシーニ","ビゼー"];
			if(kwSeparator > 0){
				kwArray = new Array;
				kwlist = karteKwPhoto.split(" ");
				for(i=0;i<kwSeparator;i++){
					introFlag = jQuery.inArray(kwlist[i],targetKwArray);
					if(introFlag >= 0){
						karteKwFlg ++;
					}
				}
			} else {
				introFlag = jQuery.inArray(karteKwPhoto,targetKwArray);
				if(introFlag >= 0){
					karteKwFlg ++;
				}
			}
		}
	} else {
		var karteKwPhoto;
		var karteKwFlg;
	}
	return[karteKwFlg, karteKwPhoto];
}
