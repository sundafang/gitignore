

$(function () {
    var id=document.cookie.split("=")[1];//获取cookie
    console.log(id);
    if (id==undefined){//判断cookie有没有  没有就设置一个
        //js 生成uuid
        var myid=getUuid();
        function getUuid(){
            var len=32;//32长度
            var radix=16;//16进制
            var chars='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');var uuid=[],i;radix=radix||chars.length;if(len){for(i=0;i<len;i++)uuid[i]=chars[0|Math.random()*radix];}else{var r;uuid[8]=uuid[13]=uuid[18]=uuid[23]='-';uuid[14]='4';for(i=0;i<36;i++){if(!uuid[i]){r=0|Math.random()*16;uuid[i]=chars[(i==19)?(r&0x3)|0x8:r];}}}
            return uuid.join('');
        }
        //设置cookie的时间期限
        console.log(myid)
        var id=myid;
        document.cookie="Nameid="+myid;
        function setCookie(myid) {
            var Days = 30; //cookie 将被保存一个月
            var exp = new Date(); //获得当前时间
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000); //换成毫秒
            document.cookie = userName + "=" +  ";expires=" + exp.toGMTString();
            //console.log(document.cookie);
            //console.log(username)
        }
    }


//获取轮播元素
var $banner_carousel_li = $(".banner_carousel_li");
//获取轮播容器
var $banner_ul = $(".banner_ul");
 //获取屏幕宽度
var wd = $(window).width();
 //获取轮播个数
 //var lg = $(slider).length;
 //计算容器宽度
 var allWd = wd * lg;
//获取所有的点
var $banner_punctuation_li = $(".banner_punctuation_li");
//获取屏幕宽度
var wd = $(window).width();
//获取轮播个数
var lg = $(".banner_carousel_li").length;


$(".navbar_nav_ion").on("touchstart",function (){
    var a= $(this).index()
    //console.log(a)
   $(".navbar_nav_ion").removeClass("active");
    $(".navbar_nav_ion").eq(a).addClass("active");

    if (a!==0){
        $(".bocc").css("display","none");

    }else{
        $(".bocc").css("display","block");
    }
    if (a!==1){
        $(".bocc02").css("display","none");

    }else{
        $(".bocc02").css("display","block");
    }
    if (a!==2){
        $(".bocc03").css("display","none");

    }else{
        $(".bocc03").css("display","block");
    }
    if (a!==3){
        $(".bocc04").css("display","none");

    }else{
        $(".bocc04").css("display","block");
    }
    if (a!==4){
        $(".bocc05").css("display","none");

    }else{
        $(".bocc05").css("display","block");
    }
    if (a!==5){
        $(".bocc06").css("display","none");

    }else{
        $(".bocc06").css("display","block");
    }
})


//尾部点击事件
$(".end_en").on("touchstart",function () {
    var a= $(this).index();
   // console.log(a);
    if (a!==0){
        $(".img01").css("display","none");
        $(".img02").css("display","block");
    }else{
        $(".img01").css("display","block");
        $(".img02").css("display","none");
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
//定时轮播图
var n=0;
    var settime = setInterval(sum,3000);
        function sum() {
            $(".banner_ul").animate({
                "marginLeft": -wd + "px"
            },2000,function () {
                $(".banner_carousel_li").eq(0).appendTo($(".banner_ul"));
                $(".banner_ul").css("margin-left",0);

                n++;
                if(n>lg-1){
                    n=0;
                }
               //console.log(n)
                $(".banner_punctuation_li").removeClass("banner_active");
                $(".banner_punctuation_li").eq(n).addClass("banner_active");
            })
        }
//滑动事件

//触点屏幕时清除定时器
$(".banner_ul").on("touchstart",function () {
    clearInterval(settime);
});
//离开时启动定时器
$(".banner_ul").on("touchend",function () {
    settime =setInterval(sum,3000);
})
//向左滑动
$(".banner_ul").on("swipeLeft",function (evt) {
    evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等


    $('.banner_ul').animate({
        'margin-left':-wd+'px'
    }, 500, function(){
        $(this).find('.banner_carousel_li').eq(0).appendTo($('.banner_ul'));
        $('.banner_ul').css('margin-left',0);
    });
    n++;
    if(n>lg-1){
        n=0;
    }
    $(".banner_punctuation_li").removeClass("banner_active");
    $(".banner_punctuation_li").eq(n).addClass("banner_active");

    //console.log(n)

});

//向右滑动
$(".banner_ul").on("swipeRight",function (evt) {
    evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
    $('.banner_ul').css('margin-left', -wd+'px');
    $(this).find('.banner_carousel_li').first().before($(this).find('.banner_carousel_li').eq(4));
    $('.banner_ul').animate({
        'margin-left':0
    }, 500);
    n--;
    if(n<0){
        n=lg-1;
    }
    $(".banner_punctuation_li").removeClass("banner_active");
    $(".banner_punctuation_li").eq(n).addClass("banner_active");

});

$(".top_right").on("touchstart",function () {
    $(".bxc").css("display","block");
    $(".bomb_box").css("display","block")
});

//上传图片信息到cookie
    $(".list_img_src").on("touchstart",function () {
        var a=$(this).attr("src");
       var n1= a.lastIndexOf("/")+1;
        var n2= a.lastIndexOf(".");
        var name= a.substring(n1,n2);
       // console.log(name)
        if(name){
            sessionStorage.setItem("name",name);
           // console.log(name)
        }else{
           console("失败")
        }
    })
//点击获取触点坐标。

$(".error").on("touchstart",function () {
    $(".bxc").css("display","none")
});


$(".cue_img").on("touchstart",function () {
    var fName="vip";
    window.location.href="pay/video?fName="+fName;
    console.log(window.location.href);
    $.ajax({
        type:"POST",
        url:"pay/video?fName="+fName,//视频付费提交地址
        timeout:320,
        data: {
            fName:fName
        }
    });
})
});





