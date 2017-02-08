/***********************
  検索フォームの表示変更
************************/
function globalchangeLayer(id){

	if(document.getElementById){
		if(id=='1'){
			hideLayer('layer02');
		}
		else if(id=='2'){
			var layerStatus=document.getElementById('layer02').style.display;
			var aelm = document.getElementById("a_option");
			
			if(layerStatus==''){
				hideLayer('layer02');
				aelm.innerHTML = "<img id='img_option' src='/img/gsform/creative_optionopen_btn.gif' alt='絞り込みオプション' width='156' height='23' border='0' onMouseOver=\"changeImageCtrl(this,'/img/gsform/creative_optionopen_btn_on.gif');\" onMouseOut=\"changeImageCtrl(this,'/img/gsform/creative_optionopen_btn.gif');\" >"
			}else{
				showLayer('layer02');
				aelm.innerHTML = "<img id='img_option' src='/img/gsform/creative_optionclose_btn.gif' alt='絞り込みオプション' width='156' height='23' border='0' onMouseOver=\"changeImageCtrl(this,'/img/gsform/creative_optionclose_btn_on.gif');\" onMouseOut=\"changeImageCtrl(this,'/img/gsform/creative_optionclose_btn.gif');\">"
			}
		}
		else if(id=='3'){
			var layerStatus=document.getElementById('layer02').style.display;
			var aelm = document.getElementById("a_option");
			
			if(layerStatus==''){
				hideLayer('layer02');
				aelm.innerHTML = "<img id='img_option' src='/img/gsform/motion_optionopen_btn.gif' alt='絞り込みオプション' width='156' height='23' border='0' onMouseOver=\"changeImageCtrl(this,'/img/gsform/motion_optionopen_btn_on.gif');\" onMouseOut=\"changeImageCtrl(this,'/img/gsform/motion_optionopen_btn.gif');\" >"
			}else{
				showLayer('layer02');
				aelm.innerHTML = "<img id='img_option' src='/img/gsform/motion_optionclose_btn.gif' alt='絞り込みオプション' width='156' height='23' border='0' onMouseOver=\"changeImageCtrl(this,'/img/gsform/motion_optionclose_btn_on.gif');\" onMouseOut=\"changeImageCtrl(this,'/img/gsform/motion_optionclose_btn.gif');\">"
			}
		}
//'ThreeDimension:3D---------------------------------------------------------
//'1103xx qzc kawashima Add.
		else if(id=='4'){
			var layerStatus=document.getElementById('layer02').style.display;
			var aelm = document.getElementById("a_option");
			
			if(layerStatus==''){
				hideLayer('layer02');
//'ThreeDimension:3D---------------------------------------------------------
//'110531 003 qzc kawashima .
				//aelm.innerHTML = "<img id='img_option' src='/img/3dmodel/3d_optionopen_btn_on.gif' alt='絞り込みオプション' width='156' height='23' border='0' onMouseOver=\"changeImageCtrl(this,'/img/3dmodel/3d_optionopen_btn_on.gif');\" onMouseOut=\"changeImageCtrl(this,'/img/3dmodel/3d_optionopen_btn.gif');\" >"
				aelm.innerHTML = "<img id='img_option' src='/img/3dmodel/3d_optionopen_btn_on.gif' alt='絞り込みオプション' width='156' height='23' border='0' onMouseOver=\"changeImageCtrl(this,'/img/3dmodel/3d_optionopen_btn_on.gif');\" onMouseOut=\"changeImageCtrl(this,'/img/3dmodel/3d_optionopen_btn.gif');\" >"
//'---------------------------------------------------------ThreeDimension:3D
			}else{
//'ThreeDimension:3D---------------------------------------------------------
//'110531 003 qzc kawashima .
				showLayer('layer02');
				//aelm.innerHTML = "<img id='img_option' src='/img/3dmodel/3d_optionclose_btn_on.gif' alt='絞り込みオプション' width='160' height='23' border='0' onMouseOver=\"changeImageCtrl(this,'/img/3dmodel/3d_optionclose_btn_on.gif');\" onMouseOut=\"changeImageCtrl(this,'/img/3dmodel/3d_optionclose_btn.gif');\">"
				aelm.innerHTML = "<img id='img_option' src='/img/3dmodel/3d_optionopen_btn_on.gif' alt='絞り込みオプション' width='160' height='23' border='0' onMouseOver=\"changeImageCtrl(this,'/img/3dmodel/3d_optionclose_btn_on.gif');\" onMouseOut=\"changeImageCtrl(this,'/img/3dmodel/3d_optionclose_btn.gif');\">"
//'---------------------------------------------------------ThreeDimension:3D
			}
		}

//'Sound:MUSIC&SFX---------------------------------------------------------
//'1108xx qzc kawashima Add.
		else if(id=='5'){
			//alert('ok');    
			var layerStatus=document.getElementById('optMusic01').style.display;
			//alert(layerStatus);
			if(layerStatus==''){
				hideLayer('optMusic01');
				showLayer('optMusic02_1');
				showLayer('optMusic02_2');

				hideLayer('optSfx01');
				showLayer('optSfx02_1');
				showLayer('optSfx02_2');
			}else{
				showLayer('optMusic01');
				hideLayer('optMusic02_1');
				hideLayer('optMusic02_2');

				showLayer('optSfx01');
				hideLayer('optSfx02_1');
				hideLayer('optSfx02_2');
			}
		}
		else if(id=='6'){
			//alert('ok');    
			var layerStatus=document.getElementById('catMusic01').style.display;
			//alert(layerStatus);
			if(layerStatus==''){
				hideLayer('catMusic01');
				showLayer('catMusic02');

				hideLayer('catSfx01');
				showLayer('catSfx02');
			}else{
				showLayer('catMusic01');
				hideLayer('catMusic02');

				showLayer('catSfx01');
				hideLayer('catSfx02');
			}
		}
//'---------------------------------------------------------Sound:MUSIC&SFX

	}
}

function globalchangeOptionBtn(id,openid){

	if(document.getElementById){
		if(id=='1'){
		}
		else if(id=='2'){
			var aelm = document.getElementById("a_option");
			if(openid=='1'){
				if (aelm)
				{
					aelm.innerHTML = "<img id='img_option' src='/img/gsform/creative_optionopen_btn.gif' alt='絞り込みオプション' width='156' height='23' border='0' onMouseOver=\"changeImageCtrl(this,'/img/gsform/creative_optionopen_btn_on.gif');\" onMouseOut=\"changeImageCtrl(this,'/img/gsform/creative_optionopen_btn.gif');\" >"
				}
			}else{
				if (aelm)
				{
					aelm.innerHTML = "<img id='img_option' src='/img/gsform/creative_optionclose_btn.gif' alt='絞り込みオプション' width='156' height='23' border='0' onMouseOver=\"changeImageCtrl(this,'/img/gsform/creative_optionclose_btn_on.gif');\" onMouseOut=\"changeImageCtrl(this,'/img/gsform/creative_optionclose_btn.gif');\">"
				}
			}
		}
		else if(id=='3'){
			var aelm = document.getElementById("a_option");
			if(openid=='1'){
				if (aelm)
				{
					aelm.innerHTML = "<img id='img_option' src='/img/gsform/motion_optionopen_btn.gif' alt='絞り込みオプション' width='156' height='23' border='0' onMouseOver=\"changeImageCtrl(this,'/img/gsform/motion_optionopen_btn_on.gif');\" onMouseOut=\"changeImageCtrl(this,'/img/gsform/motion_optionopen_btn.gif');\" >"
				}					
			}else{
				if (aelm)
				{
					aelm.innerHTML = "<img id='img_option' src='/img/gsform/motion_optionclose_btn.gif' alt='絞り込みオプション' width='156' height='23' border='0' onMouseOver=\"changeImageCtrl(this,'/img/gsform/motion_optionclose_btn_on.gif');\" onMouseOut=\"changeImageCtrl(this,'/img/gsform/motion_optionclose_btn.gif');\">"
				}
			}
		}
//'ThreeDimension:3D---------------------------------------------------------
//'110531 003 qzc kawashima Add.
		else if(id=='4'){
			var aelm = document.getElementById("a_option");
			if(openid=='1' && aelm){
				if(aelm)
				{
					aelm.innerHTML = "<img id='img_option' src='/img/3dmodel/3d_optionopen_btn.gif' alt='絞り込みオプション' width='156' height='23' border='0' onMouseOver=\"changeImageCtrl(this,'/img/3dmodel/3d_optionopen_btn_on.gif');\" onMouseOut=\"changeImageCtrl(this,'/img/3dmodel/3d_optionopen_btn.gif');\" >"
				}
			}else{
				if (aelm)
				{
					aelm.innerHTML = "<img id='img_option' src='/img/3dmodel/3d_optionclose_btn.gif' alt='絞り込みオプション' width='160' height='23' border='0' onMouseOver=\"changeImageCtrl(this,'/img/3dmodel/3d_optionclose_btn_on.gif');\" onMouseOut=\"changeImageCtrl(this,'/img/3dmodel/3d_optionclose_btn.gif');\">"
				}
			}
		}
//'---------------------------------------------------------ThreeDimension:3D
	}
}
