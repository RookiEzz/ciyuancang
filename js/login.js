$(function(){
	var cookie_uname = $.cookie("username");
	var cookie_pwd = $.cookie("password");
	if(cookie_uname && cookie_pwd){
		console.log(cookie_uname)
		$("#cycang_user").val(cookie_uname);
		$("#cycang_pwd").val(cookie_pwd);
	}
	$("#login-btn").on("click", function(){
		var code = $("#code").val();
		if(code!="5410"){
			alert("验证码有误，请填写正确的验证码");
			return false;
		}
		var uname = $("#cycang_user").val();
		var pwd = $("#cycang_pwd").val();
		var isSave = $("#remember")[0].checked;
		$.getJSON("../php/login.php",{username: uname, password:pwd},function(data){
			if(data.status == 1){
				console.log("哈")
				if(isSave){
					$.cookie("username", uname, {path:"/", expires: 7});
					$.cookie("password", pwd, {path:"/", expires: 7});
					console.log(1)
				}else{
					$.cookie("username", "", {path:"/"});
					$.cookie("password", "", {path:"/"});
				}
				
				alert("登录成功");
				
				window.location.href = "../index.html";
			}else{
				console.log("货")
				alert("登录失败，请确认你已注册，并查看密码和手机号是否正确");
			}
		})
	})

})