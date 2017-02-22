$(function () {
   /* var date = new Date();
            n=date.getFullYear();
            m=date.getMonth()+1;
            d=date.getDay();
    var b="本次活动截止日期:"+n+"年"+m+"月"+d+"日";
    console.log(b)*/
    var name=sessionStorage.getItem("name")

    if(name=="02_011"){
        var getsrc="../../public/img/poster/qita.JPG";
        var getvid="../../public/img/video.ogg/加勒比(7).mp4";
        $('#list_img_src').attr('src',getsrc);
        $("#video_source").attr('src',getvid);
        //console.log(getsrc)
    }else if (name=="02_012"){
        var video=document.getElementById("video");
        var vid  ='<div class="video_img">';
        vid += '<img class="video_img_src" id="video_img_src" src="../../public/img/poster/加勒比(9).JPG">';
        vid +='</div>';
        vid +='<video class="video_01" id="video_01" controls preload="auto" >';
        vid +='<source class="video_source" id="video_source" src="../../public/img/video.ogg/加勒比(9).mp4">';
        vid +='</video>';
        vid +='<div class="video_center">';
        vid +='<img src="../../public/img/homepage/paly.png">';
        vid +='</div>';
        vid +='</div>';
        video.innerHTML=vid;
        //console.log(video)
    }else if(name=="02_013"){
        var video=document.getElementById("video");
        //var sroure=document.getElementById("video_source")
        var vid  ='<div class="video_img">';
        vid += '<img class="video_img_src" id="video_img_src" src="../../public/img/poster/人妻.JPG">';
        vid +='</div>';
        vid +='<video class="video_01" id="video_01" controls preload="auto" >';
        vid +='<source class="video_source" id="video_source" src="../../public/img/video.ogg/人妻3.mp4">';
        vid +='</video>';
        vid +='<div class="video_center">';
        vid +='<img src="../../public/img/homepage/paly.png">';
        vid +='</div>';
        vid +='</div>';
        video.innerHTML=vid;
    }else if(name=="02_05"){
        var video=document.getElementById("video");
        //var sroure=document.getElementById("video_source")
        var vid  ='<div class="video_img">';
        vid += '<img class="video_img_src" id="video_img_src" src="../../public/img/poster/人妻(3).JPG">';
        vid +='</div>';
        vid +='<video class="video_01" id="video_01" controls preload="auto" >';
        vid +='<source class="video_source" id="video_source" src="../../public/img/video.ogg/人妻(3).mp4">';
        vid +='</video>';
        vid +='<div class="video_center">';
        vid +='<img src="../../public/img/homepage/paly.png">';
        vid +='</div>';
        vid +='</div>';
        video.innerHTML=vid;
    }else if(name=="02_06"){
        var video=document.getElementById("video");
        //var sroure=document.getElementById("video_source")
        var vid  ='<div class="video_img">';
        vid += '<img class="video_img_src" id="video_img_src" src="../../public/img/poster/制服.JPG">';
        vid +='</div>';
        vid +='<video class="video_01" id="video_01" controls preload="auto" >';
        vid +='<source class="video_source" id="video_source" src="../../public/img/video.ogg/制服.mp4">';
        vid +='</video>';
        vid +='<div class="video_center">';
        vid +='<img src="../../public/img/homepage/paly.png">';
        vid +='</div>';
        vid +='</div>';
        video.innerHTML=vid;
    }else if(name=="02_07"){
        var video=document.getElementById("video");
        //var sroure=document.getElementById("video_source")
        var vid  ='<div class="video_img">';
        vid += '<img class="video_img_src" id="video_img_src" src="../../public/img/poster/制服丝袜.JPG">';
        vid +='</div>';
        vid +='<video class="video_01" id="video_01" controls preload="auto" >';
        vid +='<source class="video_source" id="video_source" src="../../public/img/video.ogg/制服丝袜.mp4">';
        vid +='</video>';
        vid +='<div class="video_center">';
        vid +='<img src="../../public/img/homepage/paly.png">';
        vid +='</div>';
        vid +='</div>';
        video.innerHTML=vid;
    }


    $(".end_en").on("touchstart", function () {
        var a = $(this).index();
        // console.log(a);
        if (a !== 0) {
            $(".img01").css("display", "block");
            $(".img02").css("display", "none");
        } else {
            $(".img01").css("display", "none");
            $(".img02").css("display", "block");
        }
        if (a !== 1) {
            $(".img03").css("display", "none");
            $(".img04").css("display", "block");
        } else {
            $(".img03").css("display", "block");
            $(".img04").css("display", "none");
        }
        if (a !== 2) {
            $(".img05").css("display", "none");
            $(".img06").css("display", "block");
        } else {
            $(".img05").css("display", "block");
            $(".img06").css("display", "none");
        }
        if (a !== 3) {
            $(".img07").css("display", "none");
            $(".img08").css("display", "block");
        } else {
            $(".img07").css("display", "block");
            $(".img08").css("display", "none");
        }
    });
       //视频监听
         var myVideo =  document.getElementById('video_01');//获取video元素
         var Video= myVideo.addEventListener("timeupdate",sum)
         //设置播放点
         function sum(){
         var  currentTime =  myVideo.currentTime;//获取当前播放时间

         //console.log(currentTime);//在调试器中打印
         if (currentTime>=20){
             $("#video_01").hide();
             $(".video_img").show();
              $(".bxc").css("display","block");
              $(".bomb_box").css("display","block");
              myVideo.currentTime=0;
              document.getElementById("video_01").pause();
              //console.log(currentTime);//在调试器中打印
              }}

    var myid=document.cookie.split("=")[1];
        console.log(myid);
        //定时器
        $(".video_center").on("touchstart",function () {
            console.log(myid);
            //var settime=setInterval(fn,20000);
            //获取cookie值
            $(this).css("display","none");
            $(".video_img").css("display","none");
            $(".video_01").show();
            document.getElementById("video_01").play();
            var c = $(".video_source").attr('src');
            //console.log(c)
            //ajax数据提交
            var n1= c.lastIndexOf("/")+1;
            var n2= c.lastIndexOf(".");
            var fName= c.substring(n1,n2);
            $.ajax({
                type:"get",
                url:"../../pay/check",//检查请求视频是否付费地址
                timeout:320,
                dataType:"json",//返回数据格式
                jsoncallback :"json",
                data: {
                    fName:fName,
                    Nameid:myid
                },
                success:function (request) {//成功后返回的数据处理
                    //根据返回值进行状态显示
                    console.log(request)
                    console.log(typeof (request));
                    if (request==true){
                        myVideo.removeEventListener("timeupdate",sum); // removeEvent删除监听事件

                    }/*else if(request==false){
                        myVideo.removeEventListener("timeupdate",sum); // removeEvent删除监听事件
                    }else{
                        myVideo.removeEventListener("timeupdate",sum); // removeEvent删除监听事件
                    }*/
                }
            })
        });

        $(".top_right").on("touchstart",function () {
            $(".bxc").css("display","block");
            $(".bomb_box").css("display","block");

        });



    $(".error").on("touchstart",function () {

        $(".bxc").css("display","none");
        $(".video_center").css("display","block");
        $(".video_img").css("display","block");
        $(".video_01").css("display","none");
    });

    $(".cue_img").on("touchstart",function () {
        var myid=document.cookie.split("=")[1];
        console.log(myid);
        var c = $(".video_source").attr('src');
        //console.log(c)
        //ajax数据提交
        var n1= c.lastIndexOf("/")+1;
        var n2= c.lastIndexOf(".");
        var fName= c.substring(n1,n2);
        window.location.href="../../pay/video?fName="+fName;
        //console.log(window.location.href)
        $.ajax({
            type:"POST",
            url:"../../pay/video?fName="+fName,//视频付费提交地址
            timeout:320,
            data: {
                fName:fName,
                id:myid
            }
        });
    });
    $(".success_x").on("touchstart", function () {
        $(".success").hide();
    });
    $(".fail_x").on("touchstart", function () {
        $(".fail").hide();
    });
    $(".being_x").on("touchstart", function () {
        $(".being_paid").hide();
    });

    $(".prompt_a").on("touchstart",function () {
        $(".bxc").show();
        $(".bomb_box").show();
    })


});















