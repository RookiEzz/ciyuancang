$(function () {
    $.cookie.json = true;
    var $products = $.cookie("products");
    console.log($products)
    var len = $products.length;
    for (var i = 0; i < len; i++) {
        $(".content").append("<p class='fahuo td'>" + $products[i].service + "发货" + "</p>");
        $(".thead").eq(0).clone(true).appendTo(".content")
        $(".content").append("<span class='label-info'>运费</span><b></b><em>卖家留言：</em><input type='text' placeholder='选填；可填写针对本次交易的说明。'>")
        if ($products[i].freight == 0) {
            $(".content b").html("本单已免邮")
        } else {
            $(".content b").html("￥" + $products[i].freight + ".00")
        }
    }
    for (var i = 0; i < len; i++) {
        $(".content .name").eq(i + 1).html("<img><p class ='des'></p>");
        $(".thead img").css({ "width": "63px", "height": "63px" })
        $(".thead img").eq(i + 1).attr("src", $products[i].image)
    }
    for (var i = 0; i < len; i++) {
        $(".thead img").eq(i).attr("src", $products[i].image)
        $(".thead .des").eq(i).html($products[i].intorduce)
        $(".price").eq(i + 1).html("￥" + $products[i].price + ".00")
        $(".thead").eq(i + 1).css("font-weight", "normal")
        $(".mount").eq(i + 1).html($products[i].account)
        if ($products[i].tariff < 25) {
            $(".expires").eq(i + 1).html("不多啦，请尽快下单")
        } else {
            $(".expires").eq(i + 1).html("有货")
        }
        $(".last").eq(i + 1).html("￥" + $products[i].account * $products[i].price + ".00")
    }

    var addr = {};	// 存放所有省市区信息的对象
    // 将省份名称/城市名称作为对象的属性名
    /* 类似于：{
        "四川":{
            "成都":["青羊区", "武侯区"],
            "绵阳":,
            "广元":
        },
        "广东":,
        "陕西":
    }*/
    // 读取所有省市区信息
    $.getJSON("data/add.json", function (data) {
        // 处理省份信息
        $.each(data.regions, function (index, province) {
            // 创建省份表示的对象
            addr[province.name] = {};
            // 处理城市信息
            $.each(province.regions, function (index, city) {
                // 创建城市表示的对象
                addr[province.name][city.name] = [];
                // 处理区县信息
                $.each(city.regions, function () {
                    addr[province.name][city.name].push(this.name);
                });
            });
        });

        // 初始化省份信息
        initProvince();
    });

    // 初始化省份下拉列表
    function initProvince() {
        for (var attr in addr) { // attr 代表 addr 对象属性名称，即省份名
            $("#province").append("<option>" + attr + "</option>")
        }

        // 初始化城市
        initCity();
    }

    // 初始化城市下拉列表
    function initCity() {
        // 先清除城市下拉列表中原有的选项
        $("#city").empty();

        // 获取选择的省份信息
        var _prov = $("#province").val(); // "四川", "广东"
        // 遍历所有城市
        for (var attr in addr[_prov]) {
            $("#city").append("<option>" + attr + "</option>");
        }

        // 初始化区县
        initDistrict();
    }

    // 初始化区县下拉列表
    function initDistrict() {
        $("#district").empty();

        // 获取选择的省份、城市信息
        var _prov = $("#province").val(),
            _city = $("#city").val();
        // 遍历所有区县
        var districts = addr[_prov][_city];
        for (var i in districts) {
            $("#district").append("<option>" + districts[i] + "</option>");
        }
    }

    // 省份选择发生改变，重新加载城市
    $("#province").on("change", initCity);
    $("#province").on("change", function () {
        $("#city").show();
    })
    // 城市选择改变后，重新加载区县信息
    $("#city").on("change", initDistrict);
    $("#city").on("change", function () {
        $("#district").show();
    })
    // $("#province").change(initCity);
    $(".new_dizhi").on("click", function(){
        $(".shade").show();
        $(".shouhuo_info").show();
    })
    $(".close,.cancel").on("click", function(){
        $(".shade").hide();
        $(".shouhuo_info").hide();
    })
     $(".add").on("click", function(){
        $(".shade").hide();
        $(".shouhuo_info").hide();
        $(".add_dizhi").html("<input type='radio'><span>收货人信息："+$('.person_name').val()+",  "+$('.person_number').val()+",  "+"</span>"+"<span>"+$("#province").val()+",  "+"</span>"+"<span>"+ $("#city").val()+",  "+"</span>"+"<span>"+ $("#district").val()+",  "+"</span>"+"<span>"+ $(".xiangxi").val()+"</span>");
    })
    $(".zhifu span").on("click", function(){
         $(".zhifu span").css("border-color", "#ed3f3f")
         $(".zhifu a").css("border-color", "#d2d1d1")
    })
    $(".zhifu a").on("click", function(){
         $(".zhifu a").css("border-color", "#ed3f3f")
         $(".zhifu span").css("border-color", "#d2d1d1")
    })
    var total = 0;
    for(var i = 0; i < len; i++){
        total = total + parseInt($products[i].price * $products[i].account + parseInt($products[i].freight));
    }
    $(".jiesuan p").eq(0).html("商品金额共计：￥"+total+".00")
    $(".jiesuan span").html("应付总额：￥"+total+".00")

})