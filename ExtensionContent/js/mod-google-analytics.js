
 (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 'www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
 })(window,document,'script','dataLayer','GTM-NVRR7C');


try {
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-34165197-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(ga, s);
})();

var pair=location.search.substring(1).split('&');
for(i=0;pair[i];i++) {
var kv = pair[i].split('=');
if(kv[0]=='rtm')_gaq.push(['_trackEvent', 'rtm',kv[1] ,1]);
}
} catch (e) {
}

