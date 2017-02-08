//WebAntenna
var https_header="https://";
var http_header ="http://";
var p=parent;
var pd;
try
{ if (p){pd=parent.document};
} catch (e) {}

var d=document;
var h=document.location.href;
var hs=document.location.host;

var retLP=-3;
var retCV_tokushu_visit=-3;

function WebantennaLP()
{
	var cnt=0;
	do
	{
		retLP=-3;
		cnt=cnt+1;
		if ( typeof( webantenna ) == 'function' )
		{	_wa.account = 'WASkJj-1';
			try
			{
				if(p && pd && (pd.location.href!= h))
				{
					if(pd.referrer.length==0 || (pd.referrer.length>0 && pd.referrer.indexOf(http_header + hs)!=0 && pd.referrer.indexOf(https_header + hs)!=0)) 
					{	if(d.referrer==pd.location.href) 
						{	retLP=-5;webantenna();retLP=-4;	}
					}
				}
				else
				{	if(d.referrer.length==0 || (d.referrer.indexOf(http_header + hs)!=0 && d.referrer.indexOf(https_header + hs)!=0)) 
					{		retLP=-2;webantenna();retLP=-1;	}
				}
			} catch (e) {retLP=Math.abs(retLP*10);}
		}
		else
		{ retLP=99;		}
	} while (retLP>0 && cnt<10);
}

function WebantennaCV_tokushu_visit()
{
	var strDirName='Feature';
	strDirName=strDirName.toLowerCase();
	var pathname=document.location.pathname;
	var rawpathname=pathname.toLowerCase();

	retCV_tokushu_visit=-3;
	if ( typeof( webantenna ) == 'function' )
	{
		_wa = new WA_Processor();// this is necessary code
		_wa.account = 'WASkJj-1';
		_wa.cv = 'tokushu_visit';
		 
		var CookieUserIdValue=getCookie2(CookieNameUserId);
		if (CookieUserIdValue==CookieValueGuest) CookieUserIdValue="";
		try
		{
			var slash_location=pathname.lastIndexOf('/');
			if (slash_location!=-1)
			{
  				if (pathname.length==slash_location+1)
  				{ slash_location=pathname.lastIndexOf('/',slash_location-1);
  				pathname=pathname.substring(slash_location+1,pathname.length-1); 
  				}
  				else
				{ pathname=pathname.substr(slash_location+1);}
			}
			if (strDirName==pathname.toLowerCase() )
			{
				pathname=strDirName;
			}
			else
			{	if (rawpathname.indexOf(strDirName)==1)
				{
					pathname=strDirName + '_' + pathname;
				}
			}

			_wa.parameters[ 'prop01' ] = CookieUserIdValue;
			_wa.parameters[ 'prop08' ] = pathname;
			retCV_tokushu_visit=-5;webantenna(true);retCV_tokushu_visit=-4;
		} catch (e) {retCV_tokushu_visit=Math.abs(retCV_tokushu_visit*10);}
	}
	else
	{ //alert(pathname);
	}
}


function DispWebantenna_LP_Status(argDebug)
{
	switch (argDebug) 
	{
		case 0:
			break;
		case 1:
		if (retLP>0)
		{
			alert('webantenna_LP Error : ' + retLP + ' / ' + cnt+ ':' + h);
		}
		else{
			if (retLP==-3 )
			{
	 			alert('webantenna_LP Passed :' + h);
			}else{
	 			alert('webantenna_LP Success : '+ retLP + ':' + h);
			}
		}
		break;
		case true:
		if (retLP>0)
		{
			alert('webantenna_LP Error : ' + retLP + ' / ' + cnt+ ':' + h);
		}
	}

}

function DispWebantenna_CV_tokushu_visit_Status(argDebug)
{
	if (retCV_tokushu_visit>0)
	{
		alert('webantenna_CV_tokushu_visit Error : ' + retCV_tokushu_visit );
	}else
	{
	 		alert('webantenna_CV_tokushu_visit Success : '+ retCV_tokushu_visit );
	}

}

