
jq(function () {

pagerSize();

//ページ読み込み後と、リサイズ後に関数言う
		var timer = false;
		jq(window).resize(function() {
			if (timer !== false) {
				clearTimeout(timer);
			}
			timer = setTimeout(function() {
				pagerSize();
			}, 200);
		});

		function pagerSize() {
			//result-list-box幅取る
			var pagerWidth = jq('#title-result').innerWidth();
			var allpartsWidth = jq('.page-btn-nextback').innerWidth();
			var numWidth = jq('.wrap').innerWidth();
			var arrowWidth = (allpartsWidth - numWidth) / 2 - 40;

			if (pagerWidth < 826) {
				jq('.page-back,.page-next').css('width', '120px');
				jq('.page-box').css('padding-top', '57px');
				jq('#font .page-box').css('padding-top', '5px');
			} else {
				jq('.page-back,.page-next').css('width', arrowWidth);
				jq('.page-box').css('padding-top', '5px');
			}

		}

});