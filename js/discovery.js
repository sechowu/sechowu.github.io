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
//搜索
$(document).ready(function() {
	$(".search_button").click(function() {
		$("#search").css({
			"visibility": "visible",
			"opacity": "1",
			"transform": "scaleX(1)"
		});
		$(".search_button").css({
			"opacity": "0",
			"visibility": "hidden"
		});
	});
});
//关闭搜索
$(document).ready(function() {
	$(".search_close_button").click(function() {
		$("#search").css({
			"visibility": "hidden",
			"opacity": "0",
			"transform": "scaleX(0)"
		});
		$(".search_button").css({
			"opacity": "1",
			"visibility": "visible"
		});
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
//搜索固定展开
$(document).ready(function() {
	$(window).scroll(function() {
		var st = $(document).scrollTop();
		console.log(document.documentElement.scrollTop)
		if(st >= 220) {
			$("#search").css({
				"visibility": "visible",
				"opacity": "1",
				"transform": "scaleX(1)",
				"margin-left": "-500px"
			});
			$(".search_button").css({
				"opacity": "0",
				"visibility": "hidden"
			});
			$('#search>li:nth-of-type(5)>input').css({
				'background': 'linear-gradient(to bottom right,rgba(245,108,100,1),rgba(234,56,46,1))'
			});
			$(".dropdown_nav>li").hover(function() {
				$($(this).find('a')).css({
					'color': 'rgb(130,34,46)'
				});
			}, function() {
				$($(this).find('a')).css({
					'color': '#fff'
				});
			});
			$(".search_close_button").css({
				"display": "none"
			});
			$("#search_all").css({
				"position": "fixed",
				"top": "70px",
				"margin-top": "0px",
				"box-shadow": "0 1px 5px #ccc",
				"z-index": "20",
				"background": "#fff"
			});
			$('article').css({
				"margin-top": "118px"
			});
		} else {
			$("#search").css({
				"margin-left": "-535px"
			});
			$("#search_all").css({
				"position": "relative",
				"top": "40px",
				"margin": "0px",
				"box-shadow": "none",
				"background": "none"
			});
			$('#search>li:nth-of-type(5)>input').css({
				'background': '#333'
			});
			$(".dropdown_nav>li").hover(function() {
				$($(this).find('a')).css({
					'color': '#333'
				});
			}, function() {
				$($(this).find('a')).css({
					'color': '#fff'
				});
			});
			$(".search_close_button").css({
				"display": "block"
			});
			$('article').css({
				"margin": "60px"
			});
		}
	});
});
//导航变色
$(document).ready(function() {
	$(window).scroll(function() {
		var h = $(document).scrollTop();
		if(h >= 60) {
			$("header>nav>ul").css({
				"background": "linear-gradient(to bottom right,rgba(245,108,100,.95),rgba(234,56,46,.95))"
			});
			$('.dropdown_nav,.login>ul,.register>ul').css({
				"background": "linear-gradient(to bottom right,rgba(245,108,100,.95),rgba(234,56,46,.95))"
			});
			$(".login>ul>li:nth-of-type(5)>ul>li,.login>ul>li:nth-of-type(6),.login>ul>li:nth-of-type(6)>a,.register>ul>li:nth-of-type(8)>ul>li,.register>ul>li:nth-of-type(9),.register>ul>li:nth-of-type(9)>a").css({
				'color': '#fff'
			});
			$('.dropdown_nav>li').css({
				'border-bottom': '1px solid whitesmoke'
			});
			$(".center>img").css({
				'cursor':"url('img/aff(cursor)red.png') 14 8,auto"
			});
			$(".login>ul>li:nth-of-type(5)>ul>li,.login>ul>li:nth-of-type(6),.login>ul>li:nth-of-type(6)>a,.register>ul>li:nth-of-type(8)>ul>li,.register>ul>li:nth-of-type(9),.register>ul>li:nth-of-type(9)>a").hover(function() {
				$(this).css({
					'color': 'rgb(130,34,46)'
				});
			}, function() {
				$(this).css({
					'color': '#fff'
				});
			});
		} else {
			$("header>nav>ul,.dropdown_nav,.login>ul,.register>ul").css({
				"background": "rgba(51,51,51,.95)"
			});
			$(".login>ul>li:nth-of-type(5)>ul>li,.login>ul>li:nth-of-type(6),.login>ul>li:nth-of-type(6)>a,.register>ul>li:nth-of-type(8)>ul>li,.register>ul>li:nth-of-type(9),.register>ul>li:nth-of-type(9)>a").css({
				'color': '#ccc'
			});
			$('.dropdown_nav>li').css({
				'border-bottom': '1px solid #666'
			});
			$('.center>img').css({
				'cursor':"url('img/aff(cursor)blk.png') 14 8,auto"
			});
			$(".login>ul>li:nth-of-type(5)>ul>li,.login>ul>li:nth-of-type(6),.login>ul>li:nth-of-type(6)>a,.register>ul>li:nth-of-type(8)>ul>li,.register>ul>li:nth-of-type(9),.register>ul>li:nth-of-type(9)>a").hover(function() {
				$(this).css({
					'color': '#fff'
				});
			}, function() {
				$(this).css({
					'color': '#ccc'
				});
			});
		}
	});
});
//返回顶部
$(function() {
	$(".center>img").click(function() {
		$("body").animate({
			scrollTop: 0
		}, 500);
	});
})
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