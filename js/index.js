//banner
$(document).ready(function(e) {
	var progress = $(".progress"),
		li_width = $("#b04 li").length;
	var unslider04 = $('#b04').unslider({
			dots: true,
			complete: function(index) {
				progress.animate({
					"width": (100 / li_width) * (index + 1) + "%"
				});
			}
		}),
		data04 = unslider04.data('unslider');
	$('.unslider-arrow04').click(function() {
		var fn = this.className.split(' ')[1];
		data04[fn]();
	});
});
//登录
$(document).ready(function() {
	$(".login_menu").click(function() {
		$(".login_dropdown").css({
			"visibility": "visible",
			"opacity": "1",
			"transform": "scaleY(1)"
		});
	});
	$(document).click(function(e) {
		if($(e.target).closest(".login").length === 0) {
			$(".login_dropdown").css({
				"visibility": "hidden",
				"opacity": "0",
				"transform": "scaleY(0)"
			});
		};
	});
});
//注册
$(document).ready(function() {
	$(".register_menu").click(function() {
		$(".register_dropdown").css({
			"visibility": "visible",
			"opacity": "1",
			"transform": "scaleY(1)"
		});
	});
	$(document).click(function(e) {
		if($(e.target).closest(".register").length == 0) {
			$(".register_dropdown").css({
				"visibility": "hidden",
				"opacity": "0",
				"transform": "scaleY(0)"
			});
		};
	});
});
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
//搜索框固定
$(document).ready(function() {
	$(window).scroll(function() {
		var st = $(document).scrollTop();
		if(st >= 541) {
			$("#search_all").css({
				"position": "fixed",
				"top": "70px",
				"z-index": "400",
				"box-shadow": "0px 1px 3px #ccc",
				"background-color": "#fff"
			});
			$("article").css({
				"margin-top": "106px"
			});
		} else {
			$("#search_all").css({
				"position": "relative",
				"top": "0px",
				"margin": "0px",
				"box-shadow": "none"
			});
			$("article").css({
				"margin": "0px"
			});
		}
	});
});
//导航变色
$(document).ready(function() {
	$(window).scroll(function() {
		var h = $(document).scrollTop();
		if(h >= 60) {
			$("header>nav>ul,.dropdown_nav,.login>ul,.register>ul").css({
				"background": "rgba(50,50,50,.95)"
			});
		} else {
			$("header>nav>ul,.dropdown_nav,.login>ul,.register>ul").css({
				"background": "#333"
			});
		}
	});
});
//搜索下拉
$(document).ready(function() {
	$("#search_input").focus(function() {
		$("#search_dropdown").css({
			"visibility": "visible",
			"opacity": "1",
			"height": "235px"
		});
	});
	$("#search_input").focusout(function() {
		$("#search_dropdown").css({
			"visibility": "hidden",
			"opacity": "0",
			"height": "0px"
		});
	});
});
//返回顶部
$(function(){
  $(".center>img").click(function() {
      $("body").animate({scrollTop:0}, 500);
  }); 
 })
//加载更多
$(document).ready(function() {
	$(".load_all>h1").click(function() {
		$(".content:nth-of-type(5),.content:nth-of-type(6),.content:nth-of-type(7),.content:nth-of-type(8)").css({'position':'relative','left':'0px',"top":'0px'})
		$('.load_all').css({"display":'none'})
	});
});