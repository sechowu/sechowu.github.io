//返回顶部
$(function(){
  $(".center>img").click(function() {
      $("body").animate({scrollTop:0}, 500);
  }); 
});
//团队
$(function(){
	$('.right_aside_p2>ol>li').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
	});
	$('.my_team_button').click(function(){
		$('.my_team').css({'display':'block'})
		$('.creat_team').css({'display':'none'})
		$('.join_team').css({'display':'none'})
	});
	$('.creat_team_button').click(function(){
		$('.creat_team').css({'display':'block'})
		$('.my_team').css({'display':'none'})
		$('.join_team').css({'display':'none'})
	});
	$('.join_team_button').click(function(){
		$('.join_team').css({'display':'block'})
		$('.creat_team').css({'display':'none'})
		$('.my_team').css({'display':'none'})
	});
});
$(document).ready(function(){
	$('.my_team_button').addClass('active')
});
//左导航
$(document).ready(function() {
	$(window).scroll(function() {
		var st = $(document).scrollTop();
		console.log(document.documentElement.scrollTop)
		if(st < 299){
			$('.left_aside>ol>li:nth-of-type(1)').addClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(2)').removeClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(3)').removeClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(4)').removeClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(5)').removeClass('left_aside_active')
		}
		if(st >= 300) {
			$('.left_aside>ol>li:nth-of-type(1)').removeClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(2)').addClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(3)').removeClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(4)').removeClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(5)').removeClass('left_aside_active')
		} 
		if(st >= 540) {
			$('.left_aside>ol>li:nth-of-type(1)').removeClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(2)').removeClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(3)').addClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(4)').removeClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(5)').removeClass('left_aside_active')
		} 
		if(st >= 900) {
		  	$('.left_aside>ol>li:nth-of-type(1)').removeClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(2)').removeClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(3)').removeClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(4)').addClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(5)').removeClass('left_aside_active')
		} 
		if(st >= 1100) {
			$('.left_aside>ol>li:nth-of-type(1)').removeClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(2)').removeClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(3)').removeClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(4)').removeClass('left_aside_active')
			$('.left_aside>ol>li:nth-of-type(5)').addClass('left_aside_active')
		} 
	});
});
