$(".end_en").on("touchstart",function () {
    var a= $(this).index();
    // console.log(a);
    if (a!==0){
        $(".img01").css("display","block");
        $(".img02").css("display","none");
    }else{
        $(".img01").css("display","none");
        $(".img02").css("display","block");
    }
    if (a!==1){
        $(".img03").css("display","none");
        $(".img04").css("display","block");
    }else{
        $(".img03").css("display","block");
        $(".img04").css("display","none");
    }
    if (a!==2){
        $(".img05").css("display","none");
        $(".img06").css("display","block");
    }else{
        $(".img05").css("display","block");
        $(".img06").css("display","none");
    }
    if (a!==3){
        $(".img07").css("display","none");
        $(".img08").css("display","block");
    }else{
        $(".img07").css("display","block");
        $(".img08").css("display","none");
    }
})

$(".video_center").on("touchstart",function () {
    $(this).css("display","none");
    document.getElementById("video_01").play();


    var video_01=document.getElementById("video_01")
    var settime = setInterval(function () {
        document.getElementById("video_01").pause();
        $(".video_center").css("display","block");
        $(".bomb_box").css("display","block");
        //console.log($(".bomb_box").css())
    },20000);
})
$(".cue_img").on("touchstart",function () {
   var a= $("input[name='sex']:checked").val();
    $(".payment_input02").val(a);
    console.log(a)

    if ($("input[name='sex']:checked").val()){
        sessionStorage.setItem("data",$("input[name='sex']:checked").val());
    }else{
        alert("失败");
    }
})
