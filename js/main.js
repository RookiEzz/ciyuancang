require.config({
	paths:{
		"jquery":"jquery-1.12.4.min",
		"template":"template-native",
		"amazeui":"amazeui.min",
		"floor":"../floor_nav/js/jquery.nav",
		"prettify":"../floor_nav/js/prettify",
		"lazy":"jquery.lazyload.min"
	}
});
require(["template"], function(template) {
	var data = {
			products : [
				{imgUrl:"imgs/flash1.png", title:"【零食仓】【麦大叔】开心豆 牛肉味蚕豆 牛肉豆 100g", price_pre:6.50, price_cur:5.5, buybuy:10},
				{imgUrl:"imgs/flash2.png", title:"【零食仓】 【麦大叔】好吃的 美式球形 爆米花 进口原料", price_pre:12.80, price_cur:10.9, buybuy:20},
				{imgUrl:"imgs/flash3.png", title:"【零食仓】 【麦大叔】 长寿果 即食美国山核桃 奶油口味",price_pre:15.50, price_cur:13.2, buybuy:30},
				{imgUrl:"imgs/flash4.png", title:"【零食仓】 【麦大叔】奶油味 夏威夷果 即食干果坚果", price_pre:16.80, price_cur:14.3, buybuy:0},
				{imgUrl:"imgs/flash5.png", title:"【零食仓】 【麦大叔】 炭烧腰果 即食干果坚果", price_pre:22.00, price_cur:18.7, buybuy:80},
				{imgUrl:"imgs/flash6.png", title:"【零食仓】 【麦大叔】奶油味 夏威夷果 即食干果坚果", price_pre:23.00, price_cur:19.6, buybuy:90}
			]
		};

		// 使用数据渲染模板
		var html = template("temp", data);

		// 显示出渲染结果
		document.getElementById("flash_buy").innerHTML += html;

		var data = {
			products : [
				{imgUrl:"imgs/new1.jpg", title:"【新年礼盒】次元仓 超值 新年大吉大利 168 零食礼盒 内含《岁宴》特典明信片", price:"168.00"},
				{imgUrl:"imgs/new2.jpg", title:"【Infanta.婴梵塔】Lolita 草莓小厨娘 KC", price:"58.00"},
				{imgUrl:"imgs/new3.jpg", title:"【Infanta.婴梵塔】Lolita*草莓小厨娘*MINI JSK 日常连衣裙",price:"299.00"},
				{imgUrl:"imgs/new4.jpg", title:"【散漫舍】魔卡少女樱小樱FATE魔法阵USB暖水保温杯垫", price:"15.00"},
				{imgUrl:"imgs/new5.jpg", title:"【有萌】【日版周边预售】BUSHIROAD 从零开始的异世界 蕾姆新年", price:"120.00"},
				{imgUrl:"imgs/new1.jpg", title:"【新年礼盒】次元仓 超值 新年大吉大利 168 零食礼盒 内含《岁宴》特典明信片", price:168.00},
				{imgUrl:"imgs/new2.jpg", title:"【Infanta.婴梵塔】Lolita 草莓小厨娘 KC", price:"58.00"},
				{imgUrl:"imgs/new3.jpg", title:"【Infanta.婴梵塔】Lolita*草莓小厨娘*MINI JSK 日常连衣裙",price:"299.00"},
				{imgUrl:"imgs/new4.jpg", title:"【散漫舍】魔卡少女樱小樱FATE魔法阵USB暖水保温杯垫", price:"15.00"},
				{imgUrl:"imgs/new5.jpg", title:"【有萌】【日版周边预售】BUSHIROAD 从零开始的异世界 蕾姆新年", price:"120.00"},
				{imgUrl:"imgs/new1.jpg", title:"【新年礼盒】次元仓 超值 新年大吉大利 168 零食礼盒 内含《岁宴》特典明信片", price:168.00},
				{imgUrl:"imgs/new2.jpg", title:"【Infanta.婴梵塔】Lolita 草莓小厨娘 KC", price:"58.00"},
				{imgUrl:"imgs/new3.jpg", title:"【Infanta.婴梵塔】Lolita*草莓小厨娘*MINI JSK 日常连衣裙",price:"299.00"},
				{imgUrl:"imgs/new4.jpg", title:"【散漫舍】魔卡少女樱小樱FATE魔法阵USB暖水保温杯垫", price:"15.00"},
				{imgUrl:"imgs/new5.jpg", title:"【有萌】【日版周边预售】BUSHIROAD 从零开始的异世界 蕾姆新年", price:"120.00"},
				{imgUrl:"imgs/new1.jpg", title:"【新年礼盒】次元仓 超值 新年大吉大利 168 零食礼盒 内含《岁宴》特典明信片", price:168.00},
				{imgUrl:"imgs/new2.jpg", title:"【Infanta.婴梵塔】Lolita 草莓小厨娘 KC", price:"58.00"},
				{imgUrl:"imgs/new3.jpg", title:"【Infanta.婴梵塔】Lolita*草莓小厨娘*MINI JSK 日常连衣裙",price:"299.00"},
				{imgUrl:"imgs/new4.jpg", title:"【散漫舍】魔卡少女樱小樱FATE魔法阵USB暖水保温杯垫", price:"15.00"},
				{imgUrl:"imgs/new5.jpg", title:"【有萌】【日版周边预售】BUSHIROAD 从零开始的异世界 蕾姆新年", price:120.00}
				
			]
		};

		// 使用数据渲染模板
		var html = template("temp2", data);

		// 显示出渲染结果
		document.getElementsByClassName("new_products")[0].innerHTML += html;

		var data = {
			products : [
				{imgUrl:"imgs/shouban1.jpg", title:"【官方正版】【现货】 1/8 叶修in《全职高手》1.0 手办", price:"510.00"},
				{imgUrl:"imgs/shouban2.jpg", title:"【猫受屋】HobbyMax Vsinger迷你桌面系列 花语Ver. 盒蛋 预定", price:"278.00",discount:"50.00"},
				{imgUrl:"imgs/shouban3.jpg", title:"【猫受屋】GSC 15周年企划 魔卡少女樱 木之本樱手办 小樱 预定",price:"1438.00", discount:"150.00"},
				{imgUrl:"imgs/shouban4.jpg", title:"【有萌】【日版手办现货】GSC × 双翼社Phat! 噬神者2GodEater莉贝柯莉特", price:"756.00"},
				{imgUrl:"imgs/shouban5.jpg", title:"【有萌】【日版手办现货】MaxFactory figma魔卡少女樱木之本樱战斗服", price:"300.00"},
				{imgUrl:"imgs/shouban6.jpg", title:"【INMAX】Medicom Toy RAH 689 黑执事 塞巴斯蒂安 可动手办", price:"1499.00"},
				{imgUrl:"imgs/shouban7.jpg", title:"GSC 干物妹！小埋  盒蛋 手办 现货 粘土", price:"278.00",discount:"250.00"},
				{imgUrl:"imgs/shouban8.jpg", title:"【INMAX】潮儿正版 神探夏洛克 夏洛克 华生 卷福 手办", price:"96.00",discount:"48.00"}
			]
		};

		// 使用数据渲染模板
		var html = template("shouban", data);

		// 显示出渲染结果
		document.getElementsByClassName("shouban_p")[0].innerHTML += html;

		var data = {
			products : [
				{imgUrl:"imgs/shoushi1.jpg", title:"【官方正版】【现货】 1/8 叶修in《全职高手》1.0 手办", price:"510.00"},
				{imgUrl:"imgs/shoushi2.jpg", title:"【猫受屋】HobbyMax Vsinger迷你桌面系列 花语Ver. 盒蛋 预定", price:"278.00",discount:"50.00"},
				{imgUrl:"imgs/shoushi3.jpg", title:"【猫受屋】GSC 15周年企划 魔卡少女樱 木之本樱手办 小樱 预定",price:"1438.00", discount:"150.00"},
				{imgUrl:"imgs/shoushi4.jpg", title:"【有萌】【日版手办现货】GSC × 双翼社Phat! 噬神者2GodEater莉贝柯莉特", price:"756.00"},
				{imgUrl:"imgs/shoushi5.jpg", title:"【有萌】【日版手办现货】MaxFactory figma魔卡少女樱木之本樱战斗服", price:"300.00"},
				{imgUrl:"imgs/shoushi6.jpg", title:"【INMAX】Medicom Toy RAH 689 黑执事 塞巴斯蒂安 可动手办", price:"1499.00"},
				{imgUrl:"imgs/shoushi7.jpg", title:"GSC 干物妹！小埋  盒蛋 手办 现货 粘土", price:"278.00",discount:"250.00"},
				{imgUrl:"imgs/shoushi8.jpg", title:"【INMAX】潮儿正版 神探夏洛克 夏洛克 华生 卷福 手办", price:"96.00",discount:"48.00"}
			]
		};

		// 使用数据渲染模板
		var html = template("shoushi", data);

		// 显示出渲染结果
		document.getElementsByClassName("shouban_p")[1].innerHTML += html;

		var data = {
			products : [
				{imgUrl:"imgs/lingshi1.jpg", title:"【官方正版】【现货】 1/8 叶修in《全职高手》1.0 手办", price:"510.00"},
				{imgUrl:"imgs/lingshi2.jpg", title:"【猫受屋】HobbyMax Vsinger迷你桌面系列 花语Ver. 盒蛋 预定", price:"278.00",discount:"50.00"},
				{imgUrl:"imgs/lingshi3.jpg", title:"【猫受屋】GSC 15周年企划 魔卡少女樱 木之本樱手办 小樱 预定",price:"1438.00", discount:"150.00"},
				{imgUrl:"imgs/lingshi4.jpg", title:"【有萌】【日版手办现货】GSC × 双翼社Phat! 噬神者2GodEater莉贝柯莉特", price:"756.00"},
				{imgUrl:"imgs/lingshi5.jpg", title:"【有萌】【日版手办现货】MaxFactory figma魔卡少女樱木之本樱战斗服", price:"300.00"},
				{imgUrl:"imgs/lingshi6.jpg", title:"【INMAX】Medicom Toy RAH 689 黑执事 塞巴斯蒂安 可动手办", price:"1499.00"},
				{imgUrl:"imgs/lingshi7.jpg", title:"GSC 干物妹！小埋  盒蛋 手办 现货 粘土", price:"278.00",discount:"250.00"},
				{imgUrl:"imgs/lingshi8.jpg", title:"【INMAX】潮儿正版 神探夏洛克 夏洛克 华生 卷福 手办", price:"96.00",discount:"48.00"}
			]
		};

		// 使用数据渲染模板
		var html = template("lingshi", data);

		// 显示出渲染结果
		document.getElementsByClassName("shouban_p")[2].innerHTML += html;

		var data = {
			products : [
				{imgUrl:"imgs/lingshi1.jpg", title:"【官方正版】【现货】 1/8 叶修in《全职高手》1.0 手办", price:"510.00"},
				{imgUrl:"imgs/lingshi2.jpg", title:"【猫受屋】HobbyMax Vsinger迷你桌面系列 花语Ver. 盒蛋 预定", price:"278.00",discount:"50.00"},
				{imgUrl:"imgs/lingshi3.jpg", title:"【猫受屋】GSC 15周年企划 魔卡少女樱 木之本樱手办 小樱 预定",price:"1438.00", discount:"150.00"},
				{imgUrl:"imgs/lingshi4.jpg", title:"【有萌】【日版手办现货】GSC × 双翼社Phat! 噬神者2GodEater莉贝柯莉特", price:"756.00"},
				{imgUrl:"imgs/lingshi5.jpg", title:"【有萌】【日版手办现货】MaxFactory figma魔卡少女樱木之本樱战斗服", price:"300.00"},
				{imgUrl:"imgs/lingshi6.jpg", title:"【INMAX】Medicom Toy RAH 689 黑执事 塞巴斯蒂安 可动手办", price:"1499.00"},
				{imgUrl:"imgs/lingshi7.jpg", title:"GSC 干物妹！小埋  盒蛋 手办 现货 粘土", price:"278.00",discount:"250.00"},
				{imgUrl:"imgs/lingshi8.jpg", title:"【INMAX】潮儿正版 神探夏洛克 夏洛克 华生 卷福 手办", price:"96.00",discount:"48.00"}
			]
		};

		// 使用数据渲染模板
		var html = template("gufeng", data);

		// 显示出渲染结果
		document.getElementsByClassName("shouban_p")[3].innerHTML += html;

		var data = {
			products : [
				{imgUrl:"imgs/lingshi1.jpg", title:"【官方正版】【现货】 1/8 叶修in《全职高手》1.0 手办", price:"510.00"},
				{imgUrl:"imgs/lingshi2.jpg", title:"【猫受屋】HobbyMax Vsinger迷你桌面系列 花语Ver. 盒蛋 预定", price:"278.00",discount:"50.00"},
				{imgUrl:"imgs/lingshi3.jpg", title:"【猫受屋】GSC 15周年企划 魔卡少女樱 木之本樱手办 小樱 预定",price:"1438.00", discount:"150.00"},
				{imgUrl:"imgs/lingshi4.jpg", title:"【有萌】【日版手办现货】GSC × 双翼社Phat! 噬神者2GodEater莉贝柯莉特", price:"756.00"},
				{imgUrl:"imgs/lingshi5.jpg", title:"【有萌】【日版手办现货】MaxFactory figma魔卡少女樱木之本樱战斗服", price:"300.00"},
				{imgUrl:"imgs/lingshi6.jpg", title:"【INMAX】Medicom Toy RAH 689 黑执事 塞巴斯蒂安 可动手办", price:"1499.00"},
				{imgUrl:"imgs/lingshi7.jpg", title:"GSC 干物妹！小埋  盒蛋 手办 现货 粘土", price:"278.00",discount:"250.00"},
				{imgUrl:"imgs/lingshi8.jpg", title:"【INMAX】潮儿正版 神探夏洛克 夏洛克 华生 卷福 手办", price:"96.00",discount:"48.00"}
			]
		};

		// 使用数据渲染模板
		var html = template("zhoubian", data);

		// 显示出渲染结果
		document.getElementsByClassName("shouban_p")[4].innerHTML += html;

		var data = {
			products : [
				{imgUrl:"imgs/lingshi1.jpg", title:"【官方正版】【现货】 1/8 叶修in《全职高手》1.0 手办", price:"510.00"},
				{imgUrl:"imgs/lingshi2.jpg", title:"【猫受屋】HobbyMax Vsinger迷你桌面系列 花语Ver. 盒蛋 预定", price:"278.00",discount:"50.00"},
				{imgUrl:"imgs/lingshi3.jpg", title:"【猫受屋】GSC 15周年企划 魔卡少女樱 木之本樱手办 小樱 预定",price:"1438.00", discount:"150.00"},
				{imgUrl:"imgs/lingshi4.jpg", title:"【有萌】【日版手办现货】GSC × 双翼社Phat! 噬神者2GodEater莉贝柯莉特", price:"756.00"},
				{imgUrl:"imgs/lingshi5.jpg", title:"【有萌】【日版手办现货】MaxFactory figma魔卡少女樱木之本樱战斗服", price:"300.00"},
				{imgUrl:"imgs/lingshi6.jpg", title:"【INMAX】Medicom Toy RAH 689 黑执事 塞巴斯蒂安 可动手办", price:"1499.00"},
				{imgUrl:"imgs/lingshi7.jpg", title:"GSC 干物妹！小埋  盒蛋 手办 现货 粘土", price:"278.00",discount:"250.00"},
				{imgUrl:"imgs/lingshi8.jpg", title:"【INMAX】潮儿正版 神探夏洛克 夏洛克 华生 卷福 手办", price:"96.00",discount:"48.00"}
			]
		};

		// 使用数据渲染模板
		var html = template("fushi", data);

		// 显示出渲染结果
		document.getElementsByClassName("shouban_p")[5].innerHTML += html;

		var data = {
			products : [
				{imgUrl:"imgs/guess1.jpg", title:"【官方正版】【现货】 1/8 叶修in《全职高手》1.0 手办", price:"510.00"},
				{imgUrl:"imgs/guess2.jpg", title:"【猫受屋】HobbyMax Vsinger迷你桌面系列 花语Ver. 盒蛋 预定", price:"278.00",discount:"50.00"},
				{imgUrl:"imgs/guess3.jpg", title:"【猫受屋】GSC 15周年企划 魔卡少女樱 木之本樱手办 小樱 预定",price:"1438.00", discount:"150.00"},
				{imgUrl:"imgs/guess4.jpg", title:"【有萌】【日版手办现货】GSC × 双翼社Phat! 噬神者2GodEater莉贝柯莉特", price:"756.00"},
				{imgUrl:"imgs/guess5.jpg", title:"【有萌】【日版手办现货】MaxFactory figma魔卡少女樱木之本樱战斗服", price:"300.00"},
				
			]
		};

		// 使用数据渲染模板
		var html = template("guess", data);

		// 显示出渲染结果
		document.getElementsByClassName("guess_pic")[0].innerHTML += html;

})
require(["jquery"], function($){
	$(function(){
		//分类导航
		var $lis = $("li", ".banner_left");
		for(let i = 0; i < $lis.length; i++){
			$lis.eq(i).hover(function(){
				allshow();
					try{
						this.style.borderBottomColor = "red";
						this.style.borderRightColor = "white";
						$lis[i-1].style.borderBottomColor = "red";
					}

					catch(e){};
					$(".classify").eq(i).show();
			},function(){
				allhide();
				try{
				this.style.borderBottomColor = "white";
				$lis[i-1].style.borderBottomColor = "white";
				this.style.borderRightColor = "white";
				}
				catch(e){};
				$(".classify").eq(i).hide();
				
			})
			function allshow() {
				for(var i = 0; i < $lis.length; i++){
					$lis[i].style.borderRightColor = "red";
				}
			}
			function allhide() {
				for(var i = 0; i < $lis.length; i++){
					$lis[i].style.borderRightColor = "white";
				}
			}
		}
		//倒计时
		var value = 12 * 60 * 60;
		var time = setInterval(function(){
			var hour = "00" + Math.floor(value / 3600);
			hour = hour.slice(-2);
			var minutes = "00" + Math.floor(value % 3600 / 60);
			minutes = minutes.slice(-2)
			var second =  "00" + Math.floor(value % 3600 % 60);
			second = second.slice(-2);
			var time = "<i>"+hour+":"+minutes+":"+second+"</i>";
			$("#daojishi").html( "距本期闪购结束还有 " + time) ;
			value--;
			if(value<=0){
				clearInterval(time);
				$("#daojishi").html("本次闪购已结束") ;
				for(var i = 0; i < $(".shouqing").length; i++){
					$(".shouqing").eq(i).css("background","gray");
					$(".shouqing").eq(i).css("disabled","disabled");
					$(".shouqing").eq(i).css("cursor","default")
				}
				
			}
		}, 1000)

		//回到顶部
		$(window).on("scroll", function(){
			var $_top = $(window).scrollTop();
		
			if($_top >= 600){
				$("#totop").fadeIn("slow");
			}else{
				$("#totop").fadeOut("slow");
			}
		})
		
		$("#totop").on("click",function(){
			$("html, body").animate({scrollTop: 0})
		})
	})
})	
	
//轮播
require(["amazeui", "jquery"],function(){
	
	 $('.am-slider').flexslider({
     directionNav: false
  })
})

//懒加载
require(["jquery", "lazy"], function($, lazyload){
	$(function(){
		
		$(".container img").addClass("lazy");
		var len = $(".lazy").length;
		for(var i = 0; i < len;i++){
			console.log($(".container img").eq(i).attr("src"));
			$(".container img").eq(i).attr("data-original",$(".container img").eq(i).attr("src"))
		}
		
	
		$(".lazy").lazyload({effect: "fadeIn"});
	})
	

})
