//导航侧拉菜单
$(".navigation>ul>li").mouseover(function() {
	var a = $(this).index() + 1;
	$("#nav_hidden" + a).show();
	$("#nav_hidden" + a).mouseover(function() {
		$(this).show();
	})
	$("#nav_hidden" + a).mouseout(function() {
		$(this).hide();
	})

})
$(".navigation>ul>li").mouseout(function() {
	var a = $(this).index() + 1;
	$("#nav_hidden" + a).hide();
})

//滚动
var a = 0;
$("#click_right").click(function() {
	var b = parseInt($(".click_gundong ul").css("margin-left"))
	if(b >= -1000) {
		$(this).css("cursor", "pointer");
		$(".click_gundong ul").css("margin-left", a -= 200);
	} else {
		$(this).css("cursor", "not-allowed");
	}

});
$("#click_left").click(function() {
	var b = parseInt($(".click_gundong ul").css("margin-left"))
	if(b < 0) {
		$(".click_gundong ul").css("margin-left", a += 200);
		$(this).css("cursor", "pointer");

	} else {
		$(this).css("cursor", "not-allowed");

	}
});

//小轮播图

$(".goodslist_lunbo_ul1 li").mouseover(function() {
	var index = $(this).index();
	$(".goodslist_lunbo_ul li:eq(" + index + ")").show();
})
$(".goodslist_lunbo_ul1 li").mouseout(function() {
	var index = $(this).index();
	$(".goodslist_lunbo_ul li:eq(" + index + ")").hide();
})
var index = 0;
var timeinterval = setInterval(function() {

	$(".goodslist_lunbo_ul li:eq(" + index + ")").hide();
	$(".goodslist_lunbo_ul1 li:eq(" + index + ")").css("background-color", "white");
	$(".goodslist_lunbo_ul1 li:eq(" + (index - 1) + ")").css("background-color", "black");

	index += 1;
	$(".goodslist_lunbo_ul li:eq(" + index + ")").show();
	if(index == 6) {
		$(".goodslist_lunbo_ul li:eq(" + index + ")").hide();
		index = 0
	}
}, 3000)

//侧边导航
window.onscroll = function() {
	//变量t就是滚动条滚动时，到顶部的距离
	var t = document.documentElement.scrollTop || document.body.scrollTop;

	var left = document.getElementById("right");
	if(t >= 520) { //当拖动到距离顶部5px处时，左边导航固定，不随滚动条滚动
		left.style.position = "fixed";
		left.style.top = "120px";

	} else {

		//恢复正常 
		left.style.position = "absolute";
		left.style.top = "700px";

	}
	// 顶部固定
	if(t>0){
		$("#asfasdf").css({"position":"fixed" , "top" : "0"  , "background-color" : "#f5f5f5"})
	}else{
		$("#asfasdf").css({"position":"static" , "top" : "0" , "background-color" : "none"})
	}
}

$("#gouwuche_a").hover(function(){
	$("#gouwu_che").slideDown("slow")
});
$("#gouwu_che").mouseleave(function(){
	$(this).hide("slow")
})