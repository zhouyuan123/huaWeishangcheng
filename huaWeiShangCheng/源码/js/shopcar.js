var sumcounts = 0;
for(var i = 0; i < $(".price").size(); i++) {
	sumcounts += parseInt($(".price:eq(" + i + ")").text());
}

$(".add").click(function() {

	$(".sub").css("cursor", "pointer")
	var count = parseInt($(this).prev().attr("value"));
	var price = parseInt($(this).parent().parent().find(".price").text());
	count++;
	$(this).prev().attr("value", count);
	$(this).parent().parent().find(".sumcounts").text(count * price);
	sumcounts += price;
	$("#sumaccounts").text(sumcounts);
});

$(".sub").click(function() {
	var count = parseInt($(this).prev().prev().prev().attr("value"));
	var price = parseInt($(this).parent().parent().find(".price").text());
	if(count == 0) {
		$(this).css("cursor", "not-allowed");
	} else {
		count--;
		$(this).prev().prev().prev().attr("value", count);
		$(this).parent().parent().find(".sumcounts").text(count * price);
		sumcounts -= price;
		$("#sumaccounts").text(sumcounts);
	}
});