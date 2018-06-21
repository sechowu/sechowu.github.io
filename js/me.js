//点赞
$(function() {
	for(var i = 0; i < $('.likes').length; i++) {
		var ran = Math.floor(Math.random() * 1000 + 1)
		$('.likes').eq(i).text(ran)
	};
	for(var i = 0; i < $('.watch').length; i++) {
		var ran = Math.floor(Math.random() * 500 + 1000)
		$('.watch_count').eq(i).text(ran)
	};
	$(".zan>span").click(function() {
		if($('.zan>span').hasClass('actived')) {
			var num = $(this).next().text()
			num--;
			$(this).next().text(num);
		} else {
			var num = $(this).next().text()
			num++;
			$(this).next().text(num);
		}
		$(this).toggleClass('actived')
	});
});
//返回顶部
$(function(){
  $(".center>img").click(function() {
      $("body").animate({scrollTop:0}, 500);
  }); 
 })