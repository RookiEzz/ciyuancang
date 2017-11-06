function checkPhone(){ 
    var phone = document.getElementById('phone').value;
    if(!(/^1[34578]\d{9}$/.test(phone))){ 
        alert("手机号码有误，请重填");
        
        return false; 
    } 
    return true;
}
function password(){
	if(document.getElementById('pwd').value == ""){
		alert("密码不能为空");
		return false;
	}
	return true;
}
function repassword(){
	if(document.getElementById('pwd').value != document.getElementById('repwd').value){
		alert("两次输入的密码不一致，请改成一致");
		return false;
	}
	return true;
}
function captcha(){

	if(document.getElementById('captcha').value!='5410'){
		alert("请输入正确的验证码");
	
	
		return false;
	}
	return true;
}
$(function(){
	$("#reg-btn").on("click",function(){
		if(!$("#if_agree")[0].checked){
			alert("协议都不接受，怕是注册不了哦");
			return;
		}
		var ph=checkPhone();
		
		var pwd = password();
		var repwd = repassword();
		var cap = captcha();
		
		if(ph&pwd&repwd&cap){
			$.ajax({
				url: "../php/yanz.php",
				dataType: "json",
				data: "username= "+$("#phone").val()+"&password="+$("#pwd").val()+"&action=select",
				success:function(data){
					if(data.status == 1){
						alert("该手机号已经被注册，请前往登录界面");
					}else{
						console.log("另外")
						$.get("../php/yanz.php",{username: $("#phone").val(), password:$("#pwd").val(), action:"insert"},function(data){
							alert("注册成功，即将跳转到登录界面");
							window.location.href="login.html"
						})
					}
				}

			})
			
		}
	})
})