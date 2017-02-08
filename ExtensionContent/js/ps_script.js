/** Common **/
function saveToPC(path, url){
	//create folder
	if(!cep.fs.stat(path).data.isDirectory()){
		var result = window.cep.fs.makedir(path);
		if (0 == result.err) {
			//alert("Create folder success");
		}
		else {
			//alert("Create folder fail");
		}
	} else{
		//alert("Folder has exits!");
	}
	
	//convert url image into base64
	//call function writeFile of Adobe Extension CEP
	convertImgToBase64(url, function(base64Img){
		//get name image file
		var imageFile = url.match(/.*\/(.*)$/)[1];
		
		var result = window.cep.fs.writeFile(path+imageFile, base64Img.substr(23), window.cep.encoding.Base64);
		if (0 == result.err) {
			//alert("Write data success");
		}
		else {
			//alert("Write data fail");
		}
	}, 'image/jpeg');
}

function saveToPS(csInterface, pathImage) {
	//var csInterface = new CSInterface();
	//var pathImage = csInterface.getSystemPath(SystemPath.EXTENSION) + "/img/favicons.png";
	//var pathImage = "C:/Chrysanthemum.jpg";
	
	var script = "app.open(File(\'" + pathImage + "\'));";
	csInterface.evalScript(script, function(result) {
		if ("undefined" != result || result == EvalScript_ErrMessage ) {
			//alert(result);
		}
	});
}

function cc_openPage(page) {
	//https://forums.adobe.com/thread/1311885
	
	//use default lib CEPEngine_extension.js (not must import)
	window.cep.util.openURLInDefaultBrowser(page);
}

function ps_redirectPage(page){
	location.href = page;
	//window.open(page, '_blank');
}
/** .Common **/


/* Sign in **/

/* .Sign in **/


/** Home Page **/

/** .Home Page **/