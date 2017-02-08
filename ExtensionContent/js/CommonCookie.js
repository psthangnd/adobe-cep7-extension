
var CookieExpiresDays=90;
var CookieExpiresDate="2100/12/31";
var CookieName1="COOKIE_VALUE_AMANA_VISITS_FLG";
var CookieName2="COOKIE_VALUE_AMANA_VISITS_FLG2";
var CookieNameUserId="user_id";
var CookieValueGuest="Guest";

function getCookie2(CookieName)
{
	if (arguments.length == 1)
	{
		theName = CookieName + "="; 
		theCookie = document.cookie+";";
		start = theCookie.indexOf(theName);
		if (start != -1)
		{
			end = theCookie.indexOf(";",start);
			return unescape(theCookie.substring(start+theName.length,end));
		}
		return "";
	}
}

function setCookie2(CookieName,CookieValue)
{
	if (arguments.length == 2)
	{
		document.cookie = CookieName + "=" + escape(CookieValue) + ";expires=" + new Date(CookieExpiresDate).toUTCString() +";path=/;";
	}
}

function setCookie3(CookieName,CookieValue,expireDays)
{
	if (arguments.length == 2)
	{
		CookieExpiresDate=30
	}

	if (arguments.length == 2 || arguments.length == 3)
	{
		expDay = new Date();
		expDay.setTime(expDay.getTime()+(CookieExpiresDate*1000*60*60*24));
		expDay = expDay.toGMTString();
	
		document.cookie = CookieName + "=" + escape(CookieValue) + ";expires=" + expDay +";path=/;";
	}
}
function setCookie4(CookieName,CookieValue,expireSecond)
{

	if (arguments.length == 3)
	{
		expDay = new Date();
		expDay.setTime(expDay.getTime()+(expireSecond*1000));
		expDay = expDay.toGMTString();
	
		document.cookie = CookieName + "=" + escape(CookieValue) + ";expires=" + expDay +";path=/;";
	}
}
function setCookie_COOKIE_VALUE_AMANA_VISITS_FLG2()
{
	var https_header="https://";
	var http_header ="http://";
	var d=document;
	var h=document.location.href;
	var hs=document.location.host;

	//if (d.referrer.length!=0 && d.referrer.indexOf(http_header + hs)!=0 && d.referrer.indexOf(https_header + hs)!=0)
	//{
		if (getCookie2(CookieName1)=="" && getCookie2(CookieName2)=="")
		{	setCookie2(CookieName2,"1");
		}
		//else{}
	//}
}
