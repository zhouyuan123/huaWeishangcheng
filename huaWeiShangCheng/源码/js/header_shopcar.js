$("#gouwuche_a").hover(function() {
	$("#gouwu_che").slideDown()
});
$("#gouwu_che").mouseleave(function() {
	$(this).hide("slow")
})

window.onscroll = function() {
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	// 顶部固定
	if(t > 0) {
		$("#asfasdf").css({
			"position": "fixed",
			"top": "0",
			"background-color": "white"
		})
	} else {
		$("#asfasdf").css({
			"position": "static",
			"top": "0",
			"background-color": "none"
		})
	}
}

//头部，更多精彩
$(".s-dropdown").hover(function() {
		$(".icon-dropdownb").show();
	},
	function() {
		$(".icon-dropdownb").hide();
	}
);

