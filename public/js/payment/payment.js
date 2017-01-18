/**
 * Created by Administrator on 2017/1/17 0017.
 */
 var msg=document.getElementById("payment_input02")
function fn() {
    var msg = sessionStorage.getItem("data");
   // console.log(msg)
    if(msg){
        $(".payment_input02").val(msg)
    }
}(fn())

//ajax数据提交
$(".payment_button").on("touchstart",function () {
    var Order = $(".payment_input").val();
    var Money = $(".payment_input02").val();
    console.log(Order,Money)
    $.ajax({
        url:"  ",//支付请求地址
        dataType:"json",//返回数据格式
        data:{
            Order: Order,
            Money:Money
        },
        success:function (request) {//支付成功后返回的数据处理
            //根据返回值进行状态显示
            if (request=="True"){
                alert("支付成功！");
              //  $(".success").css("display","block");
            }else{
                alert("支付失败！")
            }
            // $(".error").css("display","block");
        }

    })
})

$(".success_p01").on("touchstart",function () {
    $(".success").css("display","none");
})

$(".error_p01").on("touchstart",function () {
    $(".error").css("display","none");
})

