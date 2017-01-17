/**
 * Created by Administrator on 2017/1/16 0016.
 */
$(".cue_img").on("touchstart",function () {
    var a= $("input[name='sex']:checked").val();
    $(".payment_input02").val(a);
    console.log(a)
})
