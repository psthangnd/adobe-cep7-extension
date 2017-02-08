//EventAddBox.js

//ライトボックス/ショッピングカートへの追加リダイレクト

//シングル用
function AddRedirectPhoto(genre, id, type, catalog, brand, grp, prccd, photo, keyword, brandrm, brandrf)
{
	var str
    var str_PageType = "";
    var str_FrameDown_PageType = "";
    var str_FrameDown_BoxMode = "";
    var str_FrameDown_BoxHandle = "";
    var str_FrameDown_BoxLabel = "";
    var now = new Date().getTime();

    var arr_LightBoxDetails;

    str_PageType = JsTemplate_Get_FrameDownDetails( "Body" );

	switch (genre) {
		case "lightbox":
			if ( str_PageType.indexOf( "LightBox" ) > 0 )
            {
                // light box; reload needed; send to /framebody/LightBox/PopUp/Processor.aspx
                        
                strQuery_ReloadNecessary = "1";
                        
                arr_LightBoxDetails = ( new String( str_PageType ) ).split( '.' );
                        
                str_FrameDown_BoxMode = arr_LightBoxDetails[ 0 ];
                str_FrameDown_BoxType = arr_LightBoxDetails[ 1 ];
                str_FrameDown_BoxHandle = arr_LightBoxDetails[ 2 ];
                str_FrameDown_BoxLabel = arr_LightBoxDetails[ 3 ];
                        
				str = "/LightBox/PopUp/Processor.aspx?PgFrm=StockResultWithReload";
				str = str + "&PhotoHndl=" + escape( id );
				str = str + "&PhotoType=" + escape( type );
				str = str + "&PhotoBrand=" + escape( brand );
				str = str + "&PhotoPrc=" + escape( prccd );
				str = str + "&PhotoGrp=" + escape( grp );
				str = str + "&PhotoTitle=" + escape( photo );
				str = str + "&PhotoCtlg=" + escape( catalog );
				str = str + "&BxMd=" + escape( str_FrameDown_BoxMode );
				str = str + "&BxTyp=Light";
				str = str + "&BxHndl=" + escape( str_FrameDown_BoxHandle );
				str = str + "&BxLbl=" + escape( str_FrameDown_BoxLabel );
				str = str + "&ProcessType=OrderBoxAdd";
				str = str + "&" + keywordName + "=" + escape(keyword);
				str = str + "&" + brandrmName + "=" + escape(brandrm);
				str = str + "&" + brandrfName + "=" + escape(brandrf);
				str = str + "&" + now;

				var buff = window.open(str, "", "width=0, height=0, status=,scrollbars=yes, resizable=yes, left=3000 ,top=3000");
				buff.blur();

			}
            else
            {
				// 新ライトボックス判定(この状態であることをBoxMode=3で判別できるようにします)
				var newlightbox = getElementsByClassName("lb-b");
				if (newlightbox.length > 0 && newlightbox[0].style.display != "none") {
					if (newlightbox[0].style.bottom == "0px") {
						str = "/LightBox/PopUp/Processor3.aspx?PgFrm=StockResultWithReload";
						str = str + "&PhotoHndl=" + escape( id );
						str = str + "&PhotoType=" + escape( type );
						str = str + "&PhotoBrand=" + escape( brand );
						str = str + "&PhotoPrc=" + escape( prccd );
						str = str + "&PhotoGrp=" + escape( grp );
						str = str + "&PhotoTitle=" + escape( photo );
						str = str + "&PhotoCtlg=" + escape( catalog );
						str = str + "&BxMd=3";
						str = str + "&BxTyp=Light";
						str = str + "&BxHndl=" + escape( getSelectedBoxNo() );
						str = str + "&BxLbl=" + escape( getSelectedBoxLabel() );
						str = str + "&ProcessType=OrderBoxAdd";
						str = str + "&" + keywordName + "=" + escape(keyword);
						str = str + "&" + brandrmName + "=" + escape(brandrm);
						str = str + "&" + brandrfName + "=" + escape(brandrf);
						str = str + "&" + now;

						jQuery.ajax({
							type:"GET",
							url:str, 
							cache:false,
							success:function(data) {
								if(data)
								{
									var retParam=data.split(",");
									if (retParam.length = 2) {
										var retStatus=retParam[0].split(":");
										var retMessage=retParam[1].split(":");
										switch(parseInt(retStatus[1]))
										{
											case 1:
											case 2:
											case 9:
												alert(retMessage[1]);
												return;
												break;
											case 3:
												alert(retMessage[1]);
												break;
											default:
												// alert(retMessage[1]);
												updateActiveLightBoxItemLists(getSelectedBoxNo());
										}
									}
								}
							}
						});

						return;
					}
				}

				str = "/LightBox/PopUp/SelectToAdd.aspx?PgFrm=StockResult";
				str = str + "&PhotoHndl=" + escape( id );
				str = str + "&PhotoType=" + escape( type );
				str = str + "&PhotoBrand=" + escape( brand );
				str = str + "&PhotoPrc=" + escape( prccd );
				str = str + "&PhotoGrp=" + escape( grp );
				str = str + "&PhotoTitle=" + escape( photo );
				str = str + "&PhotoCtlg=" + escape( catalog );
				str = str + "&ProcessType=OrderBoxAdd";
				str = str + "&" + keywordName + "=" + escape(keyword);
				str = str + "&" + brandrmName + "=" + escape(brandrm);
				str = str + "&" + brandrfName + "=" + escape(brandrf);
				str = str + "&" + now;
				window.open(str, "lightbox","width=500, height=300, status=,scrollbars=yes, resizable=yes");
			}
			break;
			
		case "cart":
            str = "/OrderBox/PopUp/Processor.aspx?PgFrm=StockResult";
            str = str + "&PhotoHndl=" + escape( id );
            str = str + "&PhotoType=" + escape( type );
            str = str + "&PhotoBrand=" + escape( brand );
            str = str + "&PhotoPrc=" + escape( prccd );
            str = str + "&PhotoGrp=" + escape( grp );
            str = str + "&PhotoTitle=" + escape( photo );
            str = str + "&PhotoCtlg=" + escape( catalog );
            str = str + "&ProcessType=OrderBoxAdd";
            str = str + "&" + keywordName + "=" + escape(keyword);
            str = str + "&" + brandrmName + "=" + escape(brandrm);
            str = str + "&" + brandrfName + "=" + escape(brandrf);
            str = str + "&" + now;
			var buff = window.open(str, "", "width=0, height=0, status=,scrollbars=yes, resizable=yes, left=3000 ,top=3000");
			buff.blur();
			break;
	}	
}
//シングル用
function AddPopUpRedirectPhoto(genre, id, type, catalog, brand, grp, prccd, photo)
{
	var str
    var str_PageType = "";
    var str_FrameDown_PageType = "";
    var str_FrameDown_BoxMode = "";
    var str_FrameDown_BoxHandle = "";
    var str_FrameDown_BoxLabel = "";
    var now = new Date().getTime();

    var arr_LightBoxDetails;

    str_PageType = JsTemplate_Get_FrameDownDetails( "Body_PopUp" );

	switch (genre) {
		case "lightbox":
			if ( str_PageType.indexOf( "LightBox" ) > 0 )
            {
                // light box; reload needed; send to /framebody/LightBox/PopUp/Processor.aspx
                        
                strQuery_ReloadNecessary = "1";
                        
                arr_LightBoxDetails = ( new String( str_PageType ) ).split( '.' );
                        
                str_FrameDown_BoxMode = arr_LightBoxDetails[ 0 ];
                str_FrameDown_BoxType = arr_LightBoxDetails[ 1 ];
                str_FrameDown_BoxHandle = arr_LightBoxDetails[ 2 ];
                str_FrameDown_BoxLabel = arr_LightBoxDetails[ 3 ];
                        
				str = "/LightBox/PopUp/Processor.aspx?PgFrm=StockResultWithReload";
				str = str + "&PhotoHndl=" + escape( id );
				str = str + "&PhotoType=" + escape( type );
				str = str + "&PhotoBrand=" + escape( brand );
				str = str + "&PhotoPrc=" + escape( prccd );
				str = str + "&PhotoGrp=" + escape( grp );
				str = str + "&PhotoTitle=" + escape( photo );
				str = str + "&PhotoCtlg=" + escape( catalog );
				str = str + "&BxMd=" + escape( str_FrameDown_BoxMode );
				str = str + "&BxTyp=Light";
				str = str + "&BxHndl=" + escape( str_FrameDown_BoxHandle );
				str = str + "&BxLbl=" + escape( str_FrameDown_BoxLabel );
				str = str + "&ProcessType=OrderBoxAdd";
				str = str + "&" + now;

				var buff = window.open(str, "", "width=0, height=0, status=,scrollbars=yes, resizable=yes, left=3000 ,top=3000");
				buff.blur();

			}
            else
            {

				str = "/LightBox/PopUp/SelectToAdd.aspx?PgFrm=StockResult";
				str = str + "&PhotoHndl=" + escape( id );
				str = str + "&PhotoType=" + escape( type );
				str = str + "&PhotoBrand=" + escape( brand );
				str = str + "&PhotoPrc=" + escape( prccd );
				str = str + "&PhotoGrp=" + escape( grp );
				str = str + "&PhotoTitle=" + escape( photo );
				str = str + "&PhotoCtlg=" + escape( catalog );
				str = str + "&ProcessType=OrderBoxAdd";
				str = str + "&" + now;

				window.open(str, "lightbox","width=500, height=300, status=,scrollbars=yes, resizable=yes");
			}
			break;
			
		case "cart":
            str = "/OrderBox/PopUp/Processor.aspx?PgFrm=StockResult";
            str = str + "&PhotoHndl=" + escape( id );
            str = str + "&PhotoType=" + escape( type );
            str = str + "&PhotoBrand=" + escape( brand );
            str = str + "&PhotoPrc=" + escape( prccd );
            str = str + "&PhotoGrp=" + escape( grp );
            str = str + "&PhotoTitle=" + escape( photo );
            str = str + "&PhotoCtlg=" + escape( catalog );
            str = str + "&ProcessType=OrderBoxAdd";
            str = str + "&" + now;

			var buff = window.open(str, "", "width=0, height=0, status=,scrollbars=yes, resizable=yes, left=3000 ,top=3000");
			buff.blur();
			break;
	}	
}
//動画用
function AddRedirectMotion(genre, id, type, catalog, brand, grp, prccd, photo, keyword, brandrm, brandrf)
{
	var str
    var str_PageType = "";
    var str_FrameDown_PageType = "";
    var str_FrameDown_BoxMode = "";
    var str_FrameDown_BoxHandle = "";
    var str_FrameDown_BoxLabel = "";
    var now = new Date().getTime();

    var arr_LightBoxDetails;

    str_PageType = JsTemplate_Get_FrameDownDetails( "Body" );

	switch (genre) {
		case "lightbox":
			if ( str_PageType.indexOf( "LightBox" ) > 0 )
            {
                // light box; reload needed; send to /framebody/LightBox/PopUp/Processor.aspx
                        
                strQuery_ReloadNecessary = "1";
                        
                arr_LightBoxDetails = ( new String( str_PageType ) ).split( '.' );
                        
                str_FrameDown_BoxMode = arr_LightBoxDetails[ 0 ];
                str_FrameDown_BoxType = arr_LightBoxDetails[ 1 ];
                str_FrameDown_BoxHandle = arr_LightBoxDetails[ 2 ];
                str_FrameDown_BoxLabel = arr_LightBoxDetails[ 3 ];
                        
				str = "/LightBox/PopUp/Processor.aspx?PgFrm=StockResultWithReload";
				str = str + "&PhotoHndl=" + escape( id );
				str = str + "&PhotoType=" + escape( type );
				str = str + "&PhotoBrand=" + escape( brand );
				str = str + "&PhotoPrc=" + escape( prccd );
				str = str + "&PhotoGrp=" + escape( grp );
				str = str + "&PhotoTitle=" + escape( photo );
				str = str + "&PhotoCtlg=" + escape( catalog );
				str = str + "&BxMd=" + escape( str_FrameDown_BoxMode );
				str = str + "&BxTyp=Light";
				str = str + "&BxHndl=" + escape( str_FrameDown_BoxHandle );
				str = str + "&BxLbl=" + escape( str_FrameDown_BoxLabel );
				str = str + "&ProcessType=OrderBoxAdd";
				str = str + "&" + keywordName + "=" + escape(keyword);
				str = str + "&" + brandrmName + "=" + escape(brandrm);
				str = str + "&" + brandrfName + "=" + escape(brandrf);
				str = str + "&" + now;

				var buff = window.open(str, "", "width=0, height=0, status=,scrollbars=yes, resizable=yes, left=3000 ,top=3000");
				buff.blur();

			}
            else
            {
				// 新ライトボックス判定(この状態であることをBoxMode=3で判別できるようにします)
				var newlightbox = getElementsByClassName("lb-b");
				if (newlightbox.length > 0 && newlightbox[0].style.display != "none") {
					if (newlightbox[0].style.bottom == "0px") {
						str = "/LightBox/PopUp/Processor3.aspx?PgFrm=StockResultWithReload";
						str = str + "&PhotoHndl=" + escape( id );
						str = str + "&PhotoType=" + escape( type );
						str = str + "&PhotoBrand=" + escape( brand );
						str = str + "&PhotoPrc=" + escape( prccd );
						str = str + "&PhotoGrp=" + escape( grp );
						str = str + "&PhotoTitle=" + escape( photo );
						str = str + "&PhotoCtlg=" + escape( catalog );
						str = str + "&BxMd=3";
						str = str + "&BxTyp=Light";
						str = str + "&BxHndl=" + escape( getSelectedBoxNo() );
						str = str + "&BxLbl=" + escape( getSelectedBoxLabel() );
						str = str + "&ProcessType=OrderBoxAdd";
						str = str + "&" + keywordName + "=" + escape(keyword);
						str = str + "&" + brandrmName + "=" + escape(brandrm);
						str = str + "&" + brandrfName + "=" + escape(brandrf);
						str = str + "&" + now;

						jQuery.ajax({
							type:"GET",
							url:str, 
							cache:false,
							success:function(data) {
								if(data)
								{
									var retParam=data.split(",");
									if (retParam.length = 2) {
										var retStatus=retParam[0].split(":");
										var retMessage=retParam[1].split(":");
										switch(parseInt(retStatus[1]))
										{
											case 1:
											case 2:
											case 9:
												alert(retMessage[1]);
												return;
												break;
											case 3:
												alert(retMessage[1]);
												break;
											default:
												alert(retMessage[1]);
												updateActiveLightBoxItemLists(getSelectedBoxNo());
										}
									}
								}
							}
						});

						return;
					}
				}
				
				str = "/LightBox/PopUp/SelectToAdd.aspx?PgFrm=StockMotionResult";
				str = str + "&MotionHndl=" + escape( id );
				str = str + "&MotionType=" + escape( type );
				str = str + "&MotionBrand=" + escape( brand );
				str = str + "&MotionPrc=" + escape( prccd );
				str = str + "&MotionGrp=" + escape( grp );
				str = str + "&MotionTitle=" + escape( photo );
				str = str + "&MotionCtlg=" + escape( catalog );
				str = str + "&ProcessType=OrderBoxAdd";
				str = str + "&" + keywordName + "=" + escape(keyword);
				str = str + "&" + brandrmName + "=" + escape(brandrm);
				str = str + "&" + brandrfName + "=" + escape(brandrf);
				str = str + "&" + now;
				window.open(str, "lightbox","width=500, height=300, status=,scrollbars=yes, resizable=yes");
			}
			break;
			
		case "cart":
            str = "/OrderBox/PopUp/Processor.aspx?PgFrm=StockMotionResult";
            str = str + "&MotionHndl=" + escape( id );
            str = str + "&MotionType=" + escape( type );
            str = str + "&MotionBrand=" + escape( brand );
            str = str + "&MotionPrc=" + escape( prccd );
            str = str + "&MotionGrp=" + escape( grp );
            str = str + "&MotionTitle=" + escape( photo );
            str = str + "&MotionCtlg=" + escape( catalog );
            str = str + "&ProcessType=OrderBoxAdd";
            str = str + "&" + keywordName + "=" + escape(keyword);
            str = str + "&" + brandrmName + "=" + escape(brandrm);
            str = str + "&" + brandrfName + "=" + escape(brandrf);
            str = str + "&" + now;
			var buff = window.open(str, "", "width=0, height=0, status=,scrollbars=yes, resizable=yes, left=3000 ,top=3000");
			buff.blur();
			break;
	}	
}
//Sound---------------------------------------------------------
//音素材用
function AddRedirectSound(genre, id, type, catalog, brand, grp, prccd, photo, keyword, brandrm, brandrf)
{
	var str
    var str_PageType = "";
    var str_FrameDown_PageType = "";
    var str_FrameDown_BoxMode = "";
    var str_FrameDown_BoxHandle = "";
    var str_FrameDown_BoxLabel = "";
    var now = new Date().getTime();

    var arr_LightBoxDetails;

    str_PageType = JsTemplate_Get_FrameDownDetails( "Body" );

	switch (genre) {
		case "lightbox":
			if ( str_PageType.indexOf( "LightBox" ) > 0 )
            {
                strQuery_ReloadNecessary = "1";
                        
                arr_LightBoxDetails = ( new String( str_PageType ) ).split( '.' );
                        
                str_FrameDown_BoxMode = arr_LightBoxDetails[ 0 ];
                str_FrameDown_BoxType = arr_LightBoxDetails[ 1 ];
                str_FrameDown_BoxHandle = arr_LightBoxDetails[ 2 ];
                str_FrameDown_BoxLabel = arr_LightBoxDetails[ 3 ];
                        
				str = "/LightBox/PopUp/Processor.aspx?PgFrm=StockResultWithReload";
				str = str + "&PhotoHndl=" + escape( id );
				str = str + "&PhotoType=" + escape( type );
				str = str + "&PhotoBrand=" + escape( brand );
				str = str + "&PhotoPrc=" + escape( prccd );
				str = str + "&PhotoGrp=" + escape( grp );
				str = str + "&PhotoTitle=" + escape( photo );
				str = str + "&PhotoCtlg=" + escape( catalog );
				str = str + "&BxMd=" + escape( str_FrameDown_BoxMode );
				str = str + "&BxTyp=Light";
				str = str + "&BxHndl=" + escape( str_FrameDown_BoxHandle );
				str = str + "&BxLbl=" + escape( str_FrameDown_BoxLabel );
				str = str + "&ProcessType=OrderBoxAdd";
				str = str + "&" + keywordName + "=" + escape(keyword);
				str = str + "&" + brandrmName + "=" + escape(brandrm);
				str = str + "&" + brandrfName + "=" + escape(brandrf);
				str = str + "&" + now;

				var buff = window.open(str, "", "width=0, height=0, status=,scrollbars=yes, resizable=yes, left=3000 ,top=3000");
				buff.blur();

			}
            else
            {
				// 新ライトボックス判定(この状態であることをBoxMode=3で判別できるようにします)
				var newlightbox = getElementsByClassName("lb-b");
				if (newlightbox.length > 0 && newlightbox[0].style.display != "none") {
					if (newlightbox[0].style.bottom == "0px") {
						str = "/LightBox/PopUp/Processor3.aspx?PgFrm=StockResultWithReload";
						str = str + "&PhotoHndl=" + escape( id );
						str = str + "&PhotoType=" + escape( type );
						str = str + "&PhotoBrand=" + escape( brand );
						str = str + "&PhotoPrc=" + escape( prccd );
						str = str + "&PhotoGrp=" + escape( grp );
						str = str + "&PhotoTitle=" + escape( photo );
						str = str + "&PhotoCtlg=" + escape( catalog );
						str = str + "&BxMd=3";
						str = str + "&BxTyp=Light";
						str = str + "&BxHndl=" + escape( getSelectedBoxNo() );
						str = str + "&BxLbl=" + escape( getSelectedBoxLabel() );
						str = str + "&ProcessType=OrderBoxAdd";
						str = str + "&" + keywordName + "=" + escape(keyword);
						str = str + "&" + brandrmName + "=" + escape(brandrm);
						str = str + "&" + brandrfName + "=" + escape(brandrf);
						str = str + "&" + now;

						jQuery.ajax({
							type:"GET",
							url:str, 
							cache:false,
							success:function(data) {
								if(data)
								{
									var retParam=data.split(",");
									if (retParam.length = 2) {
										var retStatus=retParam[0].split(":");
										var retMessage=retParam[1].split(":");
										switch(parseInt(retStatus[1]))
										{
											case 1:
											case 2:
											case 9:
												alert(retMessage[1]);
												return;
												break;
											case 3:
												alert(retMessage[1]);
												break;
											default:
												alert(retMessage[1]);
												updateActiveLightBoxItemLists(getSelectedBoxNo());
										}
									}
								}
							}
						});

						return;
					}
				}
				
				str = "/LightBox/PopUp/SelectToAdd.aspx?PgFrm=StockSoundResult";
				str = str + "&SoundHndl=" + escape( id );
				str = str + "&SoundType=" + escape( type );
				str = str + "&SoundBrand=" + escape( brand );
				str = str + "&SoundPrc=" + escape( prccd );
				str = str + "&SoundGrp=" + escape( grp );
				str = str + "&SoundTitle=" + escape( photo );
				str = str + "&SoundCtlg=" + escape( catalog );
				str = str + "&ProcessType=OrderBoxAdd";
				str = str + "&" + keywordName + "=" + escape(keyword);
				str = str + "&" + brandrmName + "=" + escape(brandrm);
				str = str + "&" + brandrfName + "=" + escape(brandrf);
				str = str + "&" + now;
				window.open(str, "lightbox","width=500, height=300, status=,scrollbars=yes, resizable=yes");
			}
			break;
			
		case "cart":
            str = "/OrderBox/PopUp/Processor.aspx?PgFrm=StockSoundResult";
            str = str + "&SoundHndl=" + escape( id );
            str = str + "&SoundType=" + escape( type );
            str = str + "&SoundBrand=" + escape( brand );
            str = str + "&SoundPrc=" + escape( prccd );
            str = str + "&SoundGrp=" + escape( grp );
            str = str + "&SoundTitle=" + escape( photo );
            str = str + "&SoundCtlg=" + escape( catalog );
            str = str + "&ProcessType=OrderBoxAdd";
            str = str + "&" + keywordName + "=" + escape(keyword);
            str = str + "&" + brandrmName + "=" + escape(brandrm);
            str = str + "&" + brandrfName + "=" + escape(brandrf);
            str = str + "&" + now;
			var buff = window.open(str, "", "width=0, height=0, status=,scrollbars=yes, resizable=yes, left=3000 ,top=3000");
			buff.blur();
			break;
	}	
}
//'---------------------------------------------------------Sound

//'ThreeDimension:3D---------------------------------------------------------
//'1103xx qzc kawashima Add.
//3DModel用
function AddRedirect3Dmodel(genre, id, type, catalog, brand, grp, prccd, photo, keyword, brandrf)
{
	var str
    var str_PageType = "";
    var str_FrameDown_PageType = "";
    var str_FrameDown_BoxMode = "";
    var str_FrameDown_BoxHandle = "";
    var str_FrameDown_BoxLabel = "";
    var now = new Date().getTime();

    var arr_LightBoxDetails;

    str_PageType = JsTemplate_Get_FrameDownDetails( "Body" );

	switch (genre) {
		case "lightbox":
			if ( str_PageType.indexOf( "LightBox" ) > 0 )
            {
                strQuery_ReloadNecessary = "1";
                        
                arr_LightBoxDetails = ( new String( str_PageType ) ).split( '.' );
                        
                str_FrameDown_BoxMode = arr_LightBoxDetails[ 0 ];
                str_FrameDown_BoxType = arr_LightBoxDetails[ 1 ];
                str_FrameDown_BoxHandle = arr_LightBoxDetails[ 2 ];
                str_FrameDown_BoxLabel = arr_LightBoxDetails[ 3 ];
                        
				str = "/LightBox/PopUp/Processor.aspx?PgFrm=StockResultWithReload";
				str = str + "&PhotoHndl=" + escape( id );
				str = str + "&PhotoType=" + escape( type );
				str = str + "&PhotoBrand=" + escape( brand );
				str = str + "&PhotoPrc=" + escape( prccd );
				str = str + "&PhotoGrp=" + escape( grp );
				str = str + "&PhotoTitle=" + escape( photo );
				str = str + "&PhotoCtlg=" + escape( catalog );
				str = str + "&BxMd=" + escape( str_FrameDown_BoxMode );
				str = str + "&BxTyp=Light";
				str = str + "&BxHndl=" + escape( str_FrameDown_BoxHandle );
				str = str + "&BxLbl=" + escape( str_FrameDown_BoxLabel );
				str = str + "&ProcessType=OrderBoxAdd";
				str = str + "&" + keywordName + "=" + escape(keyword);
				str = str + "&" + brandrfName + "=" + escape(brandrf);
				str = str + "&" + now;

				var buff = window.open(str, "", "width=0, height=0, status=,scrollbars=yes, resizable=yes, left=3000 ,top=3000");
				buff.blur();

			}
            else
            {
				// 新ライトボックス判定(この状態であることをBoxMode=3で判別できるようにします)
				var newlightbox = getElementsByClassName("lb-b");
				if (newlightbox.length > 0 && newlightbox[0].style.display != "none") {
					if (newlightbox[0].style.bottom == "0px") {
						str = "/LightBox/PopUp/Processor3.aspx?PgFrm=StockResultWithReload";
						str = str + "&PhotoHndl=" + escape( id );
						str = str + "&PhotoType=" + escape( type );
						str = str + "&PhotoBrand=" + escape( brand );
						str = str + "&PhotoPrc=" + escape( prccd );
						str = str + "&PhotoGrp=" + escape( grp );
						str = str + "&PhotoTitle=" + escape( photo );
						str = str + "&PhotoCtlg=" + escape( catalog );
						str = str + "&BxMd=3";
						str = str + "&BxTyp=Light";
						str = str + "&BxHndl=" + escape( getSelectedBoxNo() );
						str = str + "&BxLbl=" + escape( getSelectedBoxLabel() );
						str = str + "&ProcessType=OrderBoxAdd";
						str = str + "&" + keywordName + "=" + escape(keyword);
						str = str + "&" + brandrfName + "=" + escape(brandrf);
						str = str + "&" + now;

						jQuery.ajax({
							type:"GET",
							url:str, 
							cache:false,
							success:function(data) {
								if(data)
								{
									var retParam=data.split(",");
									if (retParam.length = 2) {
										var retStatus=retParam[0].split(":");
										var retMessage=retParam[1].split(":");
										switch(parseInt(retStatus[1]))
										{
											case 1:
											case 2:
											case 9:
												alert(retMessage[1]);
												return;
												break;
											case 3:
												alert(retMessage[1]);
												break;
											default:
												alert(retMessage[1]);
												updateActiveLightBoxItemLists(getSelectedBoxNo());
										}
									}
								}
							}
						});

						return;
					}
				}
				
				str = "/LightBox/PopUp/SelectToAdd.aspx?PgFrm=Stock3DModelResult";
				str = str + "&3DModelHndl=" + escape( id );
				str = str + "&3DModelType=" + escape( type );
				str = str + "&3DModelBrand=" + escape( brand );
				str = str + "&3DModelPrc=" + escape( prccd );
				str = str + "&3DModelGrp=" + escape( grp );
				str = str + "&3DModelTitle=" + escape( photo );
				str = str + "&3DModelCtlg=" + escape( catalog );
				str = str + "&ProcessType=OrderBoxAdd";
				str = str + "&" + keywordName + "=" + escape(keyword);
				str = str + "&" + brandrfName + "=" + escape(brandrf);
				str = str + "&" + now;
				window.open(str, "lightbox","width=500, height=300, status=,scrollbars=yes, resizable=yes");
			}
			break;
			
		case "cart":
			str = "/OrderBox/PopUp/Processor.aspx?PgFrm=Stock3DModelResult";
			str = str + "&3DModelHndl=" + escape(id);
			str = str + "&3DModelType=" + escape(type);
			str = str + "&3DModelBrand=" + escape(brand);
			str = str + "&3DModelPrc=" + escape(prccd);
			str = str + "&3DModelGrp=" + escape(grp);
			str = str + "&3DModelTitle=" + escape(photo);
			str = str + "&3DModelCtlg=" + escape(catalog);
			str = str + "&ProcessType=OrderBoxAdd";
			str = str + "&" + keywordName + "=" + escape(keyword);
			str = str + "&" + brandrfName + "=" + escape(brandrf);
			str = str + "&" + now;
			var buff = window.open(str, "", "width=0, height=0, status=,scrollbars=yes, resizable=yes, left=3000 ,top=3000");
			buff.blur();
			break;
	}
}
//'---------------------------------------------------------ThreeDimension:3D

//'Sound:MUSIC&SFX---------------------------------------------------------
//'1108xx qzc kawashima Add.
//Sound用
function AddRedirectSound(genre, id, type, catalog, brand, grp, prccd, photo, keyword, brandrm, brandrf)
{
	var str
    var str_PageType = "";
    var str_FrameDown_PageType = "";
    var str_FrameDown_BoxMode = "";
    var str_FrameDown_BoxHandle = "";
    var str_FrameDown_BoxLabel = "";
    var now = new Date().getTime();

    var arr_LightBoxDetails;

    str_PageType = JsTemplate_Get_FrameDownDetails( "Body" );

	switch (genre) {
		case "lightbox":
			if ( str_PageType.indexOf( "LightBox" ) > 0 )
            {
                strQuery_ReloadNecessary = "1";
                        
                arr_LightBoxDetails = ( new String( str_PageType ) ).split( '.' );
                        
                str_FrameDown_BoxMode = arr_LightBoxDetails[ 0 ];
                str_FrameDown_BoxType = arr_LightBoxDetails[ 1 ];
                str_FrameDown_BoxHandle = arr_LightBoxDetails[ 2 ];
                str_FrameDown_BoxLabel = arr_LightBoxDetails[ 3 ];
                        
				str = "/LightBox/PopUp/Processor.aspx?PgFrm=StockResultWithReload";
				str = str + "&PhotoHndl=" + escape( id );
				str = str + "&PhotoType=" + escape( type );
				str = str + "&PhotoBrand=" + escape( brand );
				str = str + "&PhotoPrc=" + escape( prccd );
				str = str + "&PhotoGrp=" + escape( grp );
				str = str + "&PhotoTitle=" + escape( photo );
				str = str + "&PhotoCtlg=" + escape( catalog );
				str = str + "&BxMd=" + escape( str_FrameDown_BoxMode );
				str = str + "&BxTyp=Light";
				str = str + "&BxHndl=" + escape( str_FrameDown_BoxHandle );
				str = str + "&BxLbl=" + escape( str_FrameDown_BoxLabel );
				str = str + "&ProcessType=OrderBoxAdd";
				str = str + "&" + keywordName + "=" + escape(keyword);
				str = str + "&" + brandrmName + "=" + escape(brandrm);
				str = str + "&" + brandrfName + "=" + escape(brandrf);
				str = str + "&" + now;

				var buff = window.open(str, "", "width=0, height=0, status=,scrollbars=yes, resizable=yes, left=3000 ,top=3000");
				buff.blur();

			}
            else
            {
				// 新ライトボックス判定(この状態であることをBoxMode=3で判別できるようにします)
				var newlightbox = getElementsByClassName("lb-b");
				if (newlightbox.length > 0 && newlightbox[0].style.display != "none") {
					if (newlightbox[0].style.bottom == "0px") {
						str = "/LightBox/PopUp/Processor3.aspx?PgFrm=StockResultWithReload";
						str = str + "&PhotoHndl=" + escape( id );
						str = str + "&PhotoType=" + escape( type );
						str = str + "&PhotoBrand=" + escape( brand );
						str = str + "&PhotoPrc=" + escape( prccd );
						str = str + "&PhotoGrp=" + escape( grp );
						str = str + "&PhotoTitle=" + escape( photo );
						str = str + "&PhotoCtlg=" + escape( catalog );
						str = str + "&BxMd=3";
						str = str + "&BxTyp=Light";
						str = str + "&BxHndl=" + escape( getSelectedBoxNo() );
						str = str + "&BxLbl=" + escape( getSelectedBoxLabel() );
						str = str + "&ProcessType=OrderBoxAdd";
						str = str + "&" + keywordName + "=" + escape(keyword);
						str = str + "&" + brandrmName + "=" + escape(brandrm);
						str = str + "&" + brandrfName + "=" + escape(brandrf);
						str = str + "&" + now;

						jQuery.ajax({
							type:"GET",
							url:str, 
							cache:false,
							success:function(data) {
								if(data)
								{
									var retParam=data.split(",");
									if (retParam.length = 2) {
										var retStatus=retParam[0].split(":");
										var retMessage=retParam[1].split(":");
										switch(parseInt(retStatus[1]))
										{
											case 1:
											case 2:
											case 9:
												alert(retMessage[1]);
												return;
												break;
											case 3:
												alert(retMessage[1]);
												break;
											default:
												alert(retMessage[1]);
												updateActiveLightBoxItemLists(getSelectedBoxNo());
										}
									}
								}
							}
						});

						return;
					}
				}
				
				str = "/LightBox/PopUp/SelectToAdd.aspx?PgFrm=StockSoundResult";
				str = str + "&SoundHndl=" + escape( id );
				str = str + "&SoundType=" + escape( type );
				str = str + "&SoundBrand=" + escape( brand );
				str = str + "&SoundPrc=" + escape( prccd );
				str = str + "&SoundGrp=" + escape( grp );
				str = str + "&SoundTitle=" + escape( photo );
				str = str + "&SoundCtlg=" + escape( catalog );
				str = str + "&ProcessType=OrderBoxAdd";
				str = str + "&" + keywordName + "=" + escape(keyword);
				str = str + "&" + brandrmName + "=" + escape(brandrm);
				str = str + "&" + brandrfName + "=" + escape(brandrf);
				str = str + "&" + now;
				window.open(str, "lightbox","width=500, height=300, status=,scrollbars=yes, resizable=yes");
			}
			break;
			
		case "cart":
            str = "/OrderBox/PopUp/Processor.aspx?PgFrm=StockSoundResult";
            str = str + "&SoundHndl=" + escape( id );
            str = str + "&SoundType=" + escape( type );
            str = str + "&SoundBrand=" + escape( brand );
            str = str + "&SoundPrc=" + escape( prccd );
            str = str + "&SoundGrp=" + escape( grp );
            str = str + "&SoundTitle=" + escape( photo );
            str = str + "&SoundCtlg=" + escape( catalog );
            str = str + "&ProcessType=OrderBoxAdd";
            str = str + "&" + keywordName + "=" + escape(keyword);
            str = str + "&" + brandrmName + "=" + escape(brandrm);
            str = str + "&" + brandrfName + "=" + escape(brandrf);
            str = str + "&" + now;
			var buff = window.open(str, "", "width=0, height=0, status=,scrollbars=yes, resizable=yes, left=3000 ,top=3000");
			buff.blur();
			break;
	}
}
//'---------------------------------------------------------Sound:MUSIC&SFX

//'Font---------------------------------------------------------
//Font用
function AddRedirectFont(genre, id, type, catalog, brand, grp, prccd, photo, keyword, brandrf)
{
	var str
    var str_PageType = "";
    var str_FrameDown_PageType = "";
    var str_FrameDown_BoxMode = "";
    var str_FrameDown_BoxHandle = "";
    var str_FrameDown_BoxLabel = "";
    var now = new Date().getTime();

    var arr_LightBoxDetails;

    str_PageType = JsTemplate_Get_FrameDownDetails( "Body" );

	switch (genre) {
		case "lightbox":
			if ( str_PageType.indexOf( "LightBox" ) > 0 )
            {
                strQuery_ReloadNecessary = "1";
                        
                arr_LightBoxDetails = ( new String( str_PageType ) ).split( '.' );
                        
                str_FrameDown_BoxMode = arr_LightBoxDetails[ 0 ];
                str_FrameDown_BoxType = arr_LightBoxDetails[ 1 ];
                str_FrameDown_BoxHandle = arr_LightBoxDetails[ 2 ];
                str_FrameDown_BoxLabel = arr_LightBoxDetails[ 3 ];
                        
				str = "/LightBox/PopUp/Processor.aspx?PgFrm=StockResultWithReload";
				str = str + "&PhotoHndl=" + escape( id );
				str = str + "&PhotoType=" + escape( type );
				str = str + "&PhotoBrand=" + escape( brand );
				str = str + "&PhotoPrc=" + escape( prccd );
				str = str + "&PhotoGrp=" + escape( grp );
				str = str + "&PhotoTitle=" + escape( photo );
				str = str + "&PhotoCtlg=" + escape( catalog );
				str = str + "&BxMd=" + escape( str_FrameDown_BoxMode );
				str = str + "&BxTyp=Light";
				str = str + "&BxHndl=" + escape( str_FrameDown_BoxHandle );
				str = str + "&BxLbl=" + escape( str_FrameDown_BoxLabel );
				str = str + "&ProcessType=OrderBoxAdd";
				str = str + "&" + keywordName + "=" + escape(keyword);
				str = str + "&" + brandrfName + "=" + escape(brandrf);
				str = str + "&" + now;

				var buff = window.open(str, "", "width=0, height=0, status=,scrollbars=yes, resizable=yes, left=3000 ,top=3000");
				buff.blur();

			}
            else
            {
				// 新ライトボックス判定
				var newlightbox = getElementsByClassName("lb-b");
				if (newlightbox.length > 0 && newlightbox[0].style.display != "none") {
					if (newlightbox[0].style.bottom == "0px") {
						str = "/LightBox/PopUp/Processor3.aspx?PgFrm=StockResultWithReload";
						str = str + "&PhotoHndl=" + escape( id );
						str = str + "&PhotoType=" + escape( type );
						str = str + "&PhotoBrand=" + escape( brand );
						str = str + "&PhotoPrc=" + escape( prccd );
						str = str + "&PhotoGrp=" + escape( grp );
						str = str + "&PhotoTitle=" + escape( photo );
						str = str + "&PhotoCtlg=" + escape( catalog );
						str = str + "&BxMd=3";
						str = str + "&BxTyp=Light";
						str = str + "&BxHndl=" + escape( getSelectedBoxNo() );
						str = str + "&BxLbl=" + escape( getSelectedBoxLabel() );
						str = str + "&ProcessType=OrderBoxAdd";
						str = str + "&" + keywordName + "=" + escape(keyword);
						str = str + "&" + brandrfName + "=" + escape(brandrf);
						str = str + "&" + now;

						jQuery.ajax({
							type:"GET",
							url:str, 
							cache:false,
							success:function(data) {
								if(data)
								{
									var retParam=data.split(",");
									if (retParam.length = 2) {
										var retStatus=retParam[0].split(":");
										var retMessage=retParam[1].split(":");
										switch(parseInt(retStatus[1]))
										{
											case 1:
											case 2:
											case 9:
												alert(retMessage[1]);
												return;
												break;
											case 3:
												alert(retMessage[1]);
												break;
											default:
												alert(retMessage[1]);
												updateActiveLightBoxItemLists(getSelectedBoxNo());
										}
									}
								}
							}
						});

						return;
					}
				}
				
				str = "/LightBox/PopUp/SelectToAdd.aspx?PgFrm=StockFontResult";
				str = str + "&FontHndl=" + escape( id );
				str = str + "&FontType=" + escape( type );
				str = str + "&FontBrand=" + escape( brand );
				str = str + "&FontPrc=" + escape( prccd );
				str = str + "&FontGrp=" + escape( grp );
				str = str + "&FontTitle=" + escape( photo );
				str = str + "&FontCtlg=" + escape( catalog );
				str = str + "&ProcessType=OrderBoxAdd";
				str = str + "&" + keywordName + "=" + escape(keyword);
				str = str + "&" + brandrfName + "=" + escape(brandrf);
				str = str + "&" + now;
				window.open(str, "lightbox","width=500, height=300, status=,scrollbars=yes, resizable=yes");
			}
			break;
			
		case "cart":
            str = "/OrderBox/PopUp/Processor.aspx?PgFrm=StockFontResult";
            str = str + "&FontHndl=" + escape( id );
            str = str + "&FontType=" + escape( type );
            str = str + "&FontBrand=" + escape( brand );
            str = str + "&FontPrc=" + escape( prccd );
            str = str + "&FontGrp=" + escape( grp );
            str = str + "&FontTitle=" + escape( photo );
            str = str + "&FontCtlg=" + escape( catalog );
            str = str + "&ProcessType=OrderBoxAdd";
            str = str + "&" + keywordName + "=" + escape(keyword);
            str = str + "&" + brandrfName + "=" + escape(brandrf);
            str = str + "&" + now;
			var buff = window.open(str, "", "width=0, height=0, status=,scrollbars=yes, resizable=yes, left=3000 ,top=3000");
			buff.blur();
			break;
	}
}
//'---------------------------------------------------------Font
function SetTimerWindowClose(iTimer)
{
	if ( (navigator.userAgent.indexOf("Safari") > 0 && navigator.userAgent.indexOf("Chrome") < 0 ) || navigator.userAgent.indexOf("Firefox") > 0 )
	{}else
	{
	 window.close();
	 return;
	}
	setTimeout( function() {window.close();}, iTimer);
	
}

function PopUp_After_InsertBox(framedownurl, alt)
{//alert("PopUp_After_InsertBox:EventAddBox")
/*
	try {
		//2011/10/01 カート改善
		//カート数、ステータス変更を行う為リロードする
		ReloadAll(null,1);
		ReloadAll(null,0);
	}
	catch(e) {}
	
*/	
	if (alt != ""){
		//2007/05/21 kuramochi
		//alert(alt);
		}

	SetTimerWindowClose(1000);
}

function PopUp_After_InsertBox_ForImageDetail(framedownurl, alt)
{//alert("PopUp_After_InsertBox_ForImageDetail")
	try {
		//2011/10/01 カート改善
		//カート数、ステータス変更を行う為リロードする
		ReloadAll(null,1);
		ReloadAll(null,0);
	}
	catch(e) {}
	
	if (alt != ""){
		//2007/05/21 kuramochi
		alert(alt);
	}
	SetTimerWindowClose(1000);
	
}

function PopUp_After_InsertBox_EVE(framedownurl, imageid)    //EVE用
{//alert("PopUp_After_InsertBox_EVE")
	//2011/10/01 カート改善
	//カート数、ステータス変更を行う為リロードする
	var obj_WindowOpener = window.opener.parent;
	var bln_FrameDown_Exists = false;

	bln_FrameDown_Exists = HtmlFrames_Exists( obj_WindowOpener, "down" );
	if ( bln_FrameDown_Exists ) {
		obj_WindowOpener.down.location.reload();
	}
	else {
		if (!window.opener.opener || window.opener.opener.closed){
			window.open("/index.aspx?SearchMode=7&FromDir=keyword&Page=Search&KeyWord=" + imageid + "&ImageID=" + imageid);
		}
		else {
			var obj_WindowOpenerOpener = window.opener.opener.parent;
			bln_FrameDown_Exists = HtmlFrames_Exists( obj_WindowOpenerOpener, "down" );
			if ( bln_FrameDown_Exists ) {
				obj_WindowOpenerOpener.down.location.reload();
			}
		}
	}

	window.close();
}

function HtmlFrames_Exists( obj_Document, str_ObjectHandle )
{
    var bln_ToReturn = false;

	for ( var i = 0; i < obj_Document.frames.length; i++ )
	{
		currentObj = obj_Document.frames[i];
	    currentObjName = currentObj.name;
		if ( currentObjName == str_ObjectHandle )
		{
			return true;
		}
	}
	return false;
}

function openDirectPurchaseProcess(url) {
//alert("EventAddBox.js:openDirectPurchaseProcess:" + url)
	if (url.indexOf("Order")>-1 )
	{
		//今すぐ購入機能、非window.open 対応
		openDirectPurchaseProcess2(url);
	}
	else
	{
		window.open(url,"","width=1,height=1,left=9999,top=9999");
	}
	return false;
}

//非　window.open バージョン
// 親window　を探して、その画面のurlを書き換える(location.href 使用)
var obj_WindowNew;
function openDirectPurchaseProcess2(url) {
		//今すぐ購入機能、非window.open 対応

	//フレームの子であることもあるため、parent が必要
	//ただしopener.parent を書き換えると、opener にアクセスできなくなるという制限がある
	
	var obj_WindowOpener=window.opener;

	if (obj_WindowOpener && typeof(obj_WindowOpener.document)!='unknown')
	{
		if (window.opener.parent)
		{

			obj_WindowOpener= window.opener.parent;
		}
		else
		{
			//obj_WindowOpener= window.opener;
		}

		if (obj_WindowOpener)
		{
			if (obj_WindowOpener.closed)
			{

				obj_WindowOpener=window.open(url);
			}
			else
			{

			
				try{
						// try catch block is needed to firefox 3.6
						obj_WindowOpener.location.href= url;
						obj_WindowOpener.blur();
						obj_WindowOpener.focus();
					}
				catch(e)
					{
						obj_WindowNew=window.open(url);
					}
			}
		}
		else
		{
			if (obj_WindowNew)
			{

				obj_WindowNew.location.href= url;
			}
			else
			{

				obj_WindowNew=window.open(url);
			}
			obj_WindowNew.blur();
			obj_WindowNew.focus();
		
		}
	}
	else
	{
			if (obj_WindowNew)
			{
				if (obj_WindowNew.closed)
				{
					obj_WindowNew=window.open(url);
				}
				else
				{
					obj_WindowNew.location.href= url; 
				}
			}
			else
			{
				obj_WindowNew=window.open(url);
			}
			obj_WindowNew.blur();
			obj_WindowNew.focus();

	}


	return false;
	
}

function openDirectPurchaseProcessForSmplcty(url) {
	
	// 見積もり価格がある場合には見積もり内容も一緒に送付
	var szPrice = $("ChargeBox").innerHTML + "";
	// (税込)文字がある場合
	if(szPrice.indexOf("税込") > 0){
	// 簡易見積もり情報あり登録
	
		// 価格の取得
		szPrice = szPrice.substring(0,szPrice.length-6);
	
		var index = $("Use_1").selectedIndex;
		var index2 = $("Use_2").selectedIndex;
		var index3 = $("Use_3").selectedIndex;
		var index4 = $("Period").selectedIndex;
		if(index3 == 0)index3=1;
		if(index4 == 0)index4=1;
		var index5 = $("Detail").selectedIndex;
		if(index5 == 0)index5=1;
		var szId = $("Use_1").options[index].value;
		var sz2Id = $("Use_2").options[index2].value;
		var sz3Id = $("Use_3").options[index3].value;
		var sz4Id = $("Period").options[index4].value;
		var sz5Id = $("Detail").options[index5].value;			
	
		// サイズコードの変換(とりあえず版)
		if(sz5Id == "1"){sz5Id = "50A101";}
		if(sz5Id == "2"){sz5Id = "50A102";}
		if(sz5Id == "19"){sz5Id = "50A401";}
		if(sz5Id == "20"){sz5Id = "50A402";}
		if(sz5Id == "21"){sz5Id = "50A403";}
		if(sz5Id == "22"){sz5Id = "50A404";}
		if(sz5Id == "23"){sz5Id = "50A405";}
		if(sz5Id == "24"){sz5Id = "50A406";}
		if(sz5Id == "12"){sz5Id = "50W112";}
		if(sz5Id == "13"){sz5Id = "50W113";}
		if(sz5Id == "4"){sz5Id = "50X104";}
		if(sz5Id == "5"){sz5Id = "50X105";}
		if(sz5Id == "14"){sz5Id = "50Y114";}
		if(sz5Id == "15"){sz5Id = "50Y115";}
		if(sz5Id == "17"){sz5Id = "50Z117";}
		if(sz5Id == "18"){sz5Id = "50Z118";}
		if(sz5Id == "19"){sz5Id = "50Z119";}
		if(sz5Id == "0"){sz5Id = "999999";}
		
		url = url + "&sl=" + szId + "&sm=" + sz2Id + "&ss=" + sz3Id + "&sp=" + sz4Id + "&sd=" + sz5Id + "&spr=" + szPrice;
	}			
	//　簡易見積もり情報なし登録
	window.open(url,"","width=1,height=1,left=9999,top=9999");
	return false;
}


/* 一発購入リダイレクト */
function RedirectDirectPurchase(image_id, size, reload, open) {
	try {
		url = "/OrderBox/DirectPurchase.aspx?image_id=" + image_id + "&size=" + size;
		
//		alert("EventAddBox.js:RedirectDirectPurchase:" + url + "  [open]:" + open )
		//今すぐ購入機能、非window.open 対応
		
		if (1)
		{
			var userAgent = window.navigator.userAgent.toLowerCase();
			if (!userAgent.match("firefox") )
			{
				window.blur(); //firefox2.0～3.6 では、これがあると逆効果
			}
			window.focus();
			
			window.parent.location.href=url;
			
			//もし、ログインを行った場合、ログイン画面の親windowをリロードさせる必要がある
			if ( reload == "on" ) 
			{
				if (window.opener)
				{
					window.opener.top.location.reload();
					window.opener.top.blur();
				}
			}
			
			return false;
		}
	
		win = window.opener.opener;
		if ( open == "on" ) {
			url = "/OrderBox/DirectPurchase.aspx?image_id=" + image_id + "&size=" + size
			window.open( url, "", "width=1,height=1,top=9999,left=9999");
		}
		else if ( win  && !win.closed ) {
			win.focus();			
			win.parent.location.href = "/OrderBox/DirectPurchase.aspx?image_id=" + image_id + "&size=" + size;
			
			try {
				if ( reload == "on" ) {
					window.opener.location.reload();
				}
			}
			catch(e){}
		}
		else {
			window.open("/OrderBox/DirectPurchase.aspx?image_id=" + image_id + "&size=" + size, "direct");
			try {
				if ( reload == "on" ) {
					window.opener.location.reload();
				}
			}
			catch(e){}
		}
	}
	catch(e) {
		window.open("/OrderBox/DirectPurchase.aspx?image_id=" + image_id + "&size=" + size, "direct");
		try {
			if ( reload == "on" ) {
				window.opener.location.reload();
			}
		}
		catch(e){}
	}
	window.close();
	return false;
}

/* 一発購入リダイレクト  非window.open バージョン*/
function RedirectDirectPurchase2(image_id, size, reload, open) 
{
	return RedirectDirectPurchase(image_id, size, reload, open) ;
 
 
/*
	url = "/OrderBox/DirectPurchase.aspx?image_id=" + image_id + "&size=" + size;
	window.location.href = "/OrderBox/DirectPurchase.aspx?image_id=" + image_id + "&size=" + size;
	window.focus();
			
	return false;
*/
}



//	2011/10/01 カート改善
//	作品詳細画面で【ショッピングカートに入れる】押下時のダイアログ画面の設定
//	prototypeを使っている画面もあるので念のためjQueryで
function InitCartJQueryDialog(topUrl)
{
	jQuery('#popup').dialog({
			autoOpen: false,
			width: 406,
			height:234,
			modal: true,
			resizable: false,
			zIndex:65000,
			open:function(event){
				if(jQuery("#player")){
					var ua=navigator.userAgent.toLowerCase();
					if (ua.indexOf("firefox") == -1){
						jQuery("#player").hide();
						jQuery("#flowplayer").hide();
						jQuery("#playerDummy").show();
					}
				}
				jQuery(".ui-dialog-titlebar").hide();
				jQuery("#popup-l-btn-link").click(function(){
					jQuery('#popup').dialog("close");
					if(window.opener)
					{
						ReloadAll(window.opener,1);
						window.close();
					}
					else
					{
						window.open(topUrl);
						window.close();
					}
				});
				jQuery("#popup-r-btn-link").click(function(){
					jQuery('#popup').dialog("close");
					if(window.opener)
					{
						try{
							window.opener.top.document.location.href="/index.aspx?BoxMode=2&BxTyp=OrderBox";
							
						}catch(e){
							window.open("/index.aspx?BoxMode=2&BxTyp=OrderBox");
						}
						window.close();
					}
					else
					{
						window.open("/index.aspx?BoxMode=2&BxTyp=OrderBox");
						window.close();
					}
				});
				jQuery("#popup-close-btn-link").click(function(){
					if(jQuery("#player")){
						var ua=navigator.userAgent.toLowerCase();
						if (ua.indexOf("firefox") == -1){
							jQuery("#player").show();
							jQuery("#flowplayer").show();
							jQuery("#playerDummy").hide();
						}
					}
					jQuery('#popup').dialog("close");
				});
			}
	});
}


//	2011/10/01 カート改善
//	作品詳細画面で【ショッピングカートに入れる】押下時のダイアログ画面の設定
//	prototypeを使っている画面もあるので念のためjQueryで
function InitCartJQueryDialog2(topUrl)
{
	$('#popup').dialog({
			autoOpen: false,
			width: 406,
			height:234,
			modal: true,
			resizable: false,
			zIndex:65000,
			open:function(event){
				if(jQuery("#player")){
					var ua=navigator.userAgent.toLowerCase();
					if (ua.indexOf("firefox") == -1){
						$("#player").hide();
						jQuery("#flowplayer").hide();
						$("#playerDummy").show();
					}
				}
				$(".ui-dialog-titlebar").hide();
				$("#popup-l-btn-link").click(function(){
					$('#popup').dialog("close");
					if(window.opener)
					{
						ReloadAll(window.opener,1);
						window.close();
					}
					else
					{
						window.open(topUrl);
						window.close();
					}
				});
				$("#popup-r-btn-link").click(function(){
					$('#popup').dialog("close");
					if(window.opener)
					{
						try{
							window.opener.top.document.location.href="/index.aspx?BoxMode=2&BxTyp=OrderBox";
							
						}catch(e){
							window.open("/index.aspx?BoxMode=2&BxTyp=OrderBox");
						}
						window.close();
					}
					else
					{
						window.open("/index.aspx?BoxMode=2&BxTyp=OrderBox");
						window.close();
					}
				});
				$("#popup-close-btn-link").click(function(){
					if($("#player")){
						var ua=navigator.userAgent.toLowerCase();
						if (ua.indexOf("firefox") == -1){
							$("#player").show();
							jQuery("#flowplayer").show();
							$("#playerDummy").hide();
						}
					}
					$('#popup').dialog("close");
				});
			}
	});
}


//	2011/10/01 カート改善
//	作品詳細画面で【ショッピングカートに入れる】押下時の処理
//	ダイアログ画面の表示前に/OrderBox/PopUp/Processor3.aspxへアクセスしカートへの追加を試みる
//	戻り値でダイアログの切り替え
//	prototypeを使っている画面もあるので念のためjQueryで
function AddCartItemAsync(Processor3AspxUrl)
{
	jQuery.get(Processor3AspxUrl, {},
	function(data){
		if(data)
		{
			var retStatus=data.split(":");
			//retStatus[1]=9;
			switch(parseInt(retStatus[1]))
			{
				case 1:
					alert("ショッピングカートの追加可能な件数を超えるため追加できません。");return false;
					break;
				case 4:
					alert("複数サイトで同一コンテンツをショッピングカートに入れることはできません。\r\n別サイトのショッピングカートからこのコンテンツを削除いたしました。");
				default:
					//追加成功時
					jQuery('#popup').show();
					jQuery('#popup').dialog('open');
					return false;
					break;
			}
		}
	});		
}

//	2011/10/01 カート改善
//	作品詳細画面で【ショッピングカートに入れる】押下時の処理
//	ダイアログ画面の表示前に/OrderBox/PopUp/Processor3.aspxへアクセスしカートへの追加を試みる
//	戻り値でダイアログの切り替え
function AddCartItemAsync2(Processor3AspxUrl)
{
	
	$.get(Processor3AspxUrl, {},
	function(data){
		if(data)
		{
			var retStatus=data.split(":");
			//retStatus[1]=9;
			switch(parseInt(retStatus[1]))
			{
				case 1:
					
					alert("ショッピングカートの追加可能な件数を超えるため追加できません。");return false;
					break;
				case 4:
					alert("複数サイトで同一コンテンツをショッピングカートに入れることはできません。\r\n別サイトのショッピングカートからこのコンテンツを削除いたしました。");
				default:
					//追加成功時
					$('#popup').show();
					$('#popup').dialog('open');
					return false;
					break;
			}
		}
	});		
}

//	2011/10/01 カート改善
//	検索結果一覧画面で【ショッピングカートに入れる】押下時の処理
//	戻り値でダイアログの切り替え
//	prototypeを使っている画面もあるので念のためjQueryで
function AddCartItemAsyncFromList(o,Processor3AspxUrl)
{
	jQuery.get(Processor3AspxUrl, {},
	function(data){
		if(data)
		{
			var retStatus=data.split(":");
			//retStatus[1]=9;
			switch(parseInt(retStatus[1]))
			{
				case 1:
					alert("ショッピングカートの追加可能な件数を超えるため追加できません。");return false;
					break;
				case 4:
					alert("複数サイトで同一コンテンツをショッピングカートに入れることはできません。\r\n別サイトのショッピングカートからこのコンテンツを削除いたしました。");
				default:
					if (o.id.indexOf("hLnk_ShoppingCart_Add") !== -1 && parseInt(retStatus[1]) != 4) {
						// ライトボックスの場合、アラート表示
						alert("ショッピングカートに追加しました。");
						// ナビゲーションエリアの「ショッピングカート(X)」の数字を更新する
						var imgsrc = $("#imagecount").attr('src');
						var count = 0;
						if (imgsrc != "../img/btn-016.gif") {
							imgsrc = imgsrc.replace('/img/cart-btn/cart-on', '');
							imgsrc = imgsrc.replace('.gif', '');
							count = Number(imgsrc);
						}
						count++;
						var index = ('0' + count).slice(-2)
						$("#imagecount").attr({
							src: "../img/cart-btn/cart-on" + index + ".gif",
								width: 126,
								height : 13});

						$("#imagecount").hover(
							function () {
								$("#imagecount").attr({
									src: "../img/cart-btn-hover/cart-on" + index + "-hv.gif"
								});
							},
							function () {
								$("#imagecount").attr({ src: "../img/cart-btn/cart-on" + index + ".gif" });
							}
						);
					}
					// カートボタンを更新する
					if (parent.down != null) {
						var parentlocation=parent.down.location.href;
						ReloadAll(null,1);
						jQuery(o).css("display","none");
						if(jQuery(o).next("a").length==1){
							jQuery(o).next().css("display","block");
						}else{
							jQuery(o).parent().next().children().css("display","block");
						}
						var cartTipsCss;
						if (parentlocation.indexOf( "LightBox"   )>-1 ) {cartTipsCss="mini-lb";}
						else{
							if (parentlocation.indexOf( "OpenMiddle"   )>-1 ) {cartTipsCss="mini";}
							if (parentlocation.indexOf( "navigation" )>-1 ) {cartTipsCss="";}
						}
						if ('function' === typeof window.DisplayTipsWhenAddedToCart){ DisplayTipsWhenAddedToCart(cartTipsCss);}
					} else {
						jQuery(o).css("display","none");
						if(jQuery(o).next("a").length==1){
							jQuery(o).next().css("display","block")
						}else{
							jQuery(o).parent().next().children().css("display","block")
						}
						
					}
					break;
			}
		}
	});		

	return false;
}

//	2011/10/01 カート改善
//	検索結果一覧画面で【ショッピングカートに入れる】押下時の処理
//	戻り値でダイアログの切り替え
function AddCartItemAsyncFromList2(o,Processor3AspxUrl)
{
	$.get(Processor3AspxUrl, {},
	function(data){
		if(data)
		{
			var retStatus=data.split(":");
			//retStatus[1]=9;
			switch(parseInt(retStatus[1]))
			{
				case 1:
					alert("ショッピングカートの追加可能な件数を超えるため追加できません。");return false;
					break;
				case 4:
					alert("複数サイトで同一コンテンツをショッピングカートに入れることはできません。\r\n別サイトのショッピングカートからこのコンテンツを削除いたしました。");
				default:
					ReloadAll(null,1);
					$(o).css("display","none");
					if($(o).next().length==1){
						$(o).next().css("display","block")
					}else{
						$(o).parent().next().children().css("display","block")
					}
					DisplayTipsWhenAddedToCart();
					break;
			}
		}
	});		

	return false;
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

var keywordName = "keyword";
var brandrmName = "brandrm";
var brandrfName = "brandrf";

