$(function(){
	function GetQueryString(name)
				{
			     	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			     	var r = window.location.search.substr(1).match(reg);
			     	if(r!=null)return  unescape(r[2]); return null;
				}
	$.getJSON("../php/product.php?id="+GetQueryString("proId"), function(data){
		console.log(data);
		$(".cyc_product_name").text(data[0].intorduce);
		$("#c_price_num").text(data[0].price+".00");
		// $(".sp-large img").eq(1).attr("src", data[0].image)
		$(".sp-large img").eq(0).attr("src", data[0].image)
		$(".fakeA img").attr("src", data[0].image)
		


		// console.log($(".sp-large img").eq(2).attr("src"))
		// $(".sp-large img").eq(0).attr("src", http:+'//'+localhost/gulp-home/html/data[0].image)
		// http://localhost/gulp-home/imgs/1480929701769.jpg
		// http://localhost/gulp-home/imgs/1480929701769.jpg
	});
	var lis = $("li", "#demo-slider-0"), // 所有图片的 li
			len = lis.length, // 图片张数

			imgWidth = $("li:first", "#demo-slider-0").outerWidth(true), // 每张图片的宽度
			currentIndex = 1, // 当前显示图片的索引
			nextIndex = 2; // 即将显示图片的索引
	var time = setInterval(move,1000)

	function move(){
			// 计算轮播过程中定位位置
			var _left = -1 * nextIndex * imgWidth;

			
			// 调用 animate() 函数实现运动动画
			$("ul","#demo-slider-0").animate({left:_left}, function(){
				// 图片完全显示后，修改当前显示图片的索引
				currentIndex = nextIndex;
				// 当前图片完全显示出来后，修改即将显示图片的索引
				nextIndex++;
				// 判断是否显示到所有图片中的最后一张图片
				if (currentIndex >= len - 7) { // nextIndex 自增到最后一张图片后
					$("ul","#demo-slider-0")[0].style.left = -imgWidth + "px";
					nextIndex = 2;
					currentIndex = 1;
				}
				
				// 判断是还是显示所有图片中的第一张图片
				if (currentIndex == 0) {
					$("ul","#demo-slider-0")[0].style.left = -1 * (len - 5) * imgWidth + "px";
					currentIndex = len - 7;
					nextIndex = len - 6;
				}
			});
		}
	

	$(".am-slider").hover(function(){
		clearInterval(time);
		$("#J_reco_list_right").show();
		$("#J_reco_list_left").show();
		
	},function(){
		time = setInterval(move,1000);
		$("#J_reco_list_right").hide();
		$("#J_reco_list_left").hide();
	})
	
	$("li",".am-slider").hover(function(){
		
		$(this).css("backgroundColor", "#ED3F3F");
	},function(){
		$(this).css("backgroundColor", "white");
		
	})
	//点击翻页
	$("#J_reco_list_right").on("click",function(){
		$("ul","#demo-slider-0").stop();
		move();
	})
	$("#J_reco_list_left").on("click",function(){
		$("ul","#demo-slider-0").stop();
		nextIndex = currentIndex - 1;
			// 切换
		move();
	})
	
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

	//加减选择商品个数
	$(".cyc_size_add").on("click",function(){
		var num = $("#c_num_ipt").val();
		num++;
		$("#c_num_ipt").val(num);
		if(num > 1){
			$(".cyc_size_min").css("cursor", "pointer");
			$(".cyc_size_min").css("color", "black");
		}
	})
	$(".cyc_size_min").on("click",function(){
		if($("#c_num_ipt").val() > 1){
		var num = $("#c_num_ipt").val();
		num--;
		$("#c_num_ipt").val(num);
		if(num <= 1){
			$(".cyc_size_min").css("cursor", "not-allowed");
			$(".cyc_size_min").css("color", "white");

		}
		}
		})
	
	
		
		var proId = GetQueryString("proId");
		if($.cookie("products")){
			$.cookie.json = true;
			$products = $.cookie("products")
			$(".cyc_cart_nums").show();
			console.log($.cookie("products")[0].account)
			var account = 0;
			for(var i = 0; i < $products.length; i++){
					account = account + $products[i].account;
					console.log(account)
				}
			
			$(".cyc_cart_nums").text(account);
			
		}
	
		
	
	// 加入购物车的动画
	$("#c_add_to_cart").on("click",function(){
		console.log(1)
		account += parseInt($("#c_num_ipt").val());
			$(".cyc_cart_nums").text(account);
		var offsetX = $(".cyc_cart_icon").offset().left ,

			offsetY = $(".cyc_cart_icon").offset().top - $(window).scrollTop(),
			flyer = $('<img class="u-flyer" src="../imgs/cart.png"/>'),
			startX = $("#c_add_to_cart").position().left,
			startY = $("#c_add_to_cart").position().top;
			
			flyer.fly({
				start: {
					left: startX,
					top: startY
				},
				end: {
					left: offsetX,
					top: offsetY
				}
			});
		
		var proId = GetQueryString("proId");
		console.log(proId);
		$.getJSON("../php/product.php", {id:proId}, function(data){
			$.cookie.json = true;
			console.log(data);
			$products = $.cookie("products") || [];
			var test1 = 0;
			for(var i = 0; i < $products.length; i++){
					if($products[i].id == proId){
						
						test1 = 1;
					}
				}
			if(test1 == 0){
				console.log("chucijianmian")
				data[0].account = parseInt($("#c_num_ipt").val());
				var $products = $.cookie("products")||[];
				console.log(data[0])
				$products.push(data[0]);	
				$.cookie("products", $products)
			
			}else{
				var $products = $.cookie("products");
			
				console.log($products.length)
				var test = 0;
				for(var i = 0; i < $products.length; i++){
					if($products[i].id == proId){
						console.log("cunzai")
						$products[i].account = $products[i].account + parseInt($("#c_num_ipt").val());
						$.cookie("products", $products);
						test = 1;
					}
				}
				if(test == 0){
					var $products = $.cookie("products");
				
					
					$products.push(data[0]);
					$.cookie("products", $products);
					console.log("添加了一个")
					
				}
			}
			
		// 	var num1 = $("#c_num_ipt").val();
		$(".cyc_cart_nums").show();

		// var num2 = $(".cyc_cart_nums").text();
		// num1 = parseInt(num1) + parseInt(num2);
		
			// if($.cookie("username")){
			// 	var _username = $.cookie("username"),
			// 		_product_name = $.cookie("products").introduce,
			// 		_price = $.cookie("products").price,
			// 		_account = $.cookie("products").account,
			// 		_expires = "有货",
			// 		_total_price = _account * _price,
			// 		_type = $.cookie("products").country,
			// 		_fare = $.cookie("products").freight;
			// 	$.getJSON("")

			// }


			// 	$products.account +=  $("#c_num_ipt").val();
			// }
			// console.log($.cookie("products"));
			// console.log($products.account)
// 			用户名
// 名称
// 价格
// 数量
// 库存
// 小计
// 类型
// 运费
			
				// if(attr == 3){
				// 	if(this.account){
				// 		this.account = $("#c_num_ipt").val();
				// 	}else{
				// 		this.account += $("#c_num_ipt").val();
				// 	}
					
				// }else{
				// 	this.account = 0;
				// }
				// console.log($.cookie("products")[3].account);
		
		
		})

	})


 	
})


