$(function () {
    $.cookie.json = true;
    console.log($.cookie("products"))
    var $products = $.cookie("products");
    if($.cookie('username')){
        $("#c_log_reg").html('<p>欢迎你，'+$.cookie('username')+'</p>')
    }
    if (!$products) {
        $(".c_thead").hide();
        $(".content").append("<p>购物车里神马都木有，解开封印买买买解b(￣▽￣)d</p>")
        $(".content").addClass("empty_cart")
    } else {
        $(".c_thead").show();
        var len = $products.length

        for (var i = 0; i < len; i++) {
            $(".c_thead").eq(0).clone(true).appendTo(".products_cart")

        }
        for (var i = 1; i < len + 1; i++) {
            $(".c_th_7").eq(i).css("width", "3%")
            $(".c_th_7").eq(i).css("overflow", "hidden")
            $(".c_th_7").eq(i).css("white-space", "nowrap")
            $(".c_th_7").eq(i).css("margin-right", "41px")
            $(".c_thead .c_th_33").eq(i).html("<img class='pro_img'/><a class='pro_prod'>" + $products[i - 1].intorduce + "</a>")

            $(".c_th_33 img").css({ "width": "80px", "height": "80px" })
        }
        for (var i = 1; i < len + 1; i++) {
            $(".price").eq(i).html("¥" + $products[i - 1].price + ".00")
            $(".mount").eq(i).html("<span class='jian'>-</span><b class='pro_mount'></b><span class='jia'>+</span>")


            $(".products_cart img").eq(i - 1).attr("src", $products[i - 1].image)
            if ($products[i - 1].tariff < 25) {
                $(".expires").eq(i).html("不多啦，请尽快下单")
            } else {
                $(".expires").eq(i).html("有货")
            }
        }
        for (var i = 0; i < len; i++) {
            $("b").eq(i).html($products[i].account)
            $(".small_cal").eq(i + 1).html("￥" + $products[i].price * $products[i].account + ".00")
            $(".del").eq(i + 1).html("<a>删除</a>")
        }
        for (let i = 0; i < len; i++) {
            $(".del").eq(i + 1).on("click", function () {
                if (confirm("确认删除该商品吗？")) {
                    $(this).parent().remove();
                    console.log($products)
                    $products.splice(i, 1);
                    console.log($products)
                    $.cookie("products", $products)
                }

            })
        }
        $(".content").append("<div><a>去结算</a><p>应付总额:<b class='pros_price'></b></p></div>")
        $(".content div:last").addClass("goCheck")
        var all = 0;
        for (var i = 0; i < len; i++) {

            all = all + parseFloat($(".small_cal").eq(i + 1).html().slice(1));
        }
        console.log(all)
        $(".goCheck b").html("￥" + all + ".00")
        $(".goCheck a").attr("target", "_blank")
        $(".goCheck a").attr("href", "pay.html")


        $(".on :checkbox").eq(0).on("change", function () {
            if ($(".on :checkbox").eq(0)[0].checked) {
                console.log(1)
                for (let i = 0; i < len; i++) {
                    $(".on :checkbox").eq(i + 1).prop("checked", "true")
                }

            } else {
                console.log(2)
                for (let i = 0; i < len; i++) {
                    $(".on :checkbox").eq(i + 1).prop("checked", false)
                }
            }

        })


        for (let i = 0; i < len; i++) {

            $(".jian").eq(i).on("click", function () {

                var pro_mount = $(".pro_mount").eq(i).html()
                if (pro_mount > 1) {
                    pro_mount--;
                    $(".pro_mount").eq(i).html(pro_mount)
                    $(".small_cal").eq(i + 1).html("￥" + pro_mount * $products[i].price + ".00");
                    $products[i].account--;
                    $.cookie("products", $products);
                    all = all - $(this).parent().parent().find(".price").html().slice(1);
            console.log(all)
        
                     $(".goCheck b").html("￥" + all + ".00")

                }

            })
        }
        for (let i = 0; i < len; i++) {

            $(".jia").eq(i).on("click", function () {

                var pro_mount = $(".pro_mount").eq(i).html()

                pro_mount++;
                $(".pro_mount").eq(i).html(pro_mount)
                $(".small_cal").eq(i + 1).html("￥" + pro_mount * $products[i].price + ".00")
                $products[i].account++;
                $.cookie("products", $products)
                all = all + parseFloat($(this).parent().parent().children(".price").html().slice(1));
            console.log(all)
        
                     $(".goCheck b").html("￥" + all + ".00")
            })
        }



    }
})
