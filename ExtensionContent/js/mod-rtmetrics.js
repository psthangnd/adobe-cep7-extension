var cname1="CookieNameAmanaUserId";
var cname2="CookieNameAmanaUserId2";
var cname3="CookieNameAmanaCustomSiteFlg";
var cname4="user_id";
var cvalue1 = "";
var cvalue2 = "";
var cvalue3 = "";
var cvalue4 = "";
if (document.cookie) {
	var cookies = document.cookie.split("; ");
	for (var i = 0; i < cookies.length; i++) {
		var str = cookies[i].split("=");
		if (str[0] == cname1){
			var cvalue1 = unescape(str[1]);
			//if (!isNaN(cvalue1)) cvalue1 = ++cookie_value1;
			var addprm1 = cname1 + "=" + escape(cvalue1);
			bcxBeacon.addQuery(addprm1);
		}
		if (str[0] == cname2){
			bcxBeacon.addQuery("member=1");
		}
		if (str[0] == cname3){
			var cvalue3 = unescape(str[1]);
			if(cvalue3 == 1){
				bcxBeacon.addQuery("custom=1");
			}
		}
		if(str[0] == cname4 && str[1] != "Guest"){
			userid = "userid=" + str[1];
			bcxBeacon.addQuery(userid);
		}
	}
}

if(typeof(noResultKw) != "undefined" && noResultKw != ""){
	nowUrl = document.location.href;
	if(nowUrl.indexOf("KeyWord=")>=0){
		nowKwBase = nowUrl.split("KeyWord=")[1];
	}
	if(nowKwBase.indexOf("&ImageID=")>=0){ // creative
		nowKw = nowKwBase.split("&ImageID=")[0];
	} else if(nowKwBase.indexOf("&ImageId=")>=0){ // editorial
		nowKw = nowKwBase.split("&ImageId=")[0];
	} else {
		nowKw = nowKwBase;
	}
	nrParam = "noHitText=" + nowKw;
	bcxBeacon.addQuery(nrParam);
}