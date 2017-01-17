/**
 * Created by Administrator on 2017/1/17 0017.
 */
 var msg=document.getElementById("payment_input02")
function fn() {
    var msg = sessionStorage.getItem("data");
    console.log(msg)
    if(msg){
        $(".payment_input02").val(msg)
    }
}(fn())