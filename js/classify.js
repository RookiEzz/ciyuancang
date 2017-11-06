$(function(){
	$.ajax({
		url:"../php/classify.php",
		type:"get",
		dataType:"json",
		success:function(data){
			
			var data1 ={products: data}
		// 使用数据渲染模板
		var html = template("products_lazy", data1);

		// 显示出渲染结果
		$("#pubu")[0].innerHTML += html;
	}
})
	$(window).on("scroll", function(){
		var totalheight = parseFloat($(window).height())+ parseFloat($(window).scrollTop()); //浏览器的高度加上滚动条的高度 
		console.log(totalheight)
		if ($(document).height() <= totalheight){
			$.ajax({
				url:"../php/classify.php",
				type:"get",
				dataType:"json",
				success:function(data){

					var data1 ={products: data}
		// 使用数据渲染模板
		var html = template("products_lazy", data1);

		// 显示出渲染结果
		$("#pubu")[0].innerHTML += html;
	}
})
		}
	})
	
	
})



// var data = {
// 			products : [
// 				{imgUrl:"imgs/flash1.png", title:"【零食仓】【麦大叔】开心豆 牛肉味蚕豆 牛肉豆 100g", price_pre:6.50, price_cur:5.5},
// 				{imgUrl:"imgs/flash2.png", title:"【零食仓】 【麦大叔】好吃的 美式球形 爆米花 进口原料", price_pre:12.80, price_cur:10.9},
// 				{imgUrl:"imgs/flash3.png", title:"【零食仓】 【麦大叔】 长寿果 即食美国山核桃 奶油口味",price_pre:15.50, price_cur:13.2},
// 				{imgUrl:"imgs/flash4.png", title:"【零食仓】 【麦大叔】奶油味 夏威夷果 即食干果坚果", price_pre:16.80, price_cur:14.3},
// 				{imgUrl:"imgs/flash5.png", title:"【零食仓】 【麦大叔】 炭烧腰果 即食干果坚果", price_pre:22.00, price_cur:18.7},
// 				{imgUrl:"imgs/flash6.png", title:"【零食仓】 【麦大叔】奶油味 夏威夷果 即食干果坚果", price_pre:23.00, price_cur:19.6}
// 			]
// 		};