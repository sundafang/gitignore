
$(function () {
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
            $(".img04").css("display","block");
            $(".img03").css("display","none");
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

    $(".top_right").on("touchstart",function () {
        $(".bxc").css("display","block");
        $(".bomb_box").css("display","block")
    });
    $(".error").on("touchstart",function () {
        $(".bxc").css("display","none")
    });

    //付费页面跳转
    $(".cue_img").on("touchstart",function () {
        var fName="vip";
        window.location.href="../pay/video?fName="+fName;
        console.log(window.location.href);
        $.ajax({
            type:"POST",
            url:"../pay/video?fName="+fName,//视频付费提交地址
            timeout:320,
            data: {
                fName:fName
            }
        });
    });
});
