
$(function(){
    /*轮播图开始*/
    (function(){
        var timer;
        var n=0;
        var m=$("#slide ul li:eq(0)").width();
        function run2(){
            $("#slide ul li").hide();
            $("#slide ul li:eq("+n+")").show().css("left",m).finish().animate({left:0},300)
            if(n==0){
                $("#slide ul li:last").show().finish().animate({left:-m},300,function(){$(this).hide().css("left",0)})
            }else{
                $("#slide ul li:eq("+(n-1)+")").show().finish().animate({left:-m},300,function(){$(this).hide().css("left",0)})
            }
        }
        $("#slide ul li:eq(0)").show();// 第一张图片显示
        $("#slide ol li").on("click",function(){  //绑定点击事件
            if(n==$(this).index()){
            }else{
                n=$(this).index();
                run2();
                $(this).addClass("ac").siblings().removeClass("ac");
            };
        });
        $(".prev").on("click",function(){
            n--;
            if(n<0) n="3;" run2();="" $("#slide="" ol="" li:eq("+n+")").addclass("ac").siblings().removeclass("ac");="" })="" $(".next").on("click",function(){="" n++;="" if(n="=4)n=0;" function="" run(){="" timer="setInterval(function(){" $(".next").trigger("click")="" },3000)="" }="" run();="" $("#slide").hover(="" function(){clearinterval(timer)},="" function(){run()}="" )="" })();="" *轮播图结束*="" *菜单栏开始*="" (function(){="" var="" timer;="" $(".list_nav="" ul="" li").hover(="" function(){="" cleartimeout(timer);="" li").removeclass("ac")="" $(this).addclass("ac")="" index="$(this).index();" $(".popup").show();="" $(".popup="" .section").hide();="" .section:eq("+index+")").show();="" },="" $(".popup").hide();="" },200)="" .section").hover(="" *菜单栏结束*="" *选项卡开始*="" (function="" (){="" $("#one="" .title="" li").on("mouseover",function(){="" $(this).addclass("ac").siblings().removeclass("ac");="" .content").hide();="" .content:eq("+index+")").show();="" *选项卡结束*="" *楼层导航开始*="" arr="[];" $(".page4="" .floore").each(function(){="" arr[index]="{top:$(this).offset().top}" $(window).on("scroll",function(){="" t="$(document).scrollTop()" if(t="">1500){
                $("#LocationFloorList").show();
            }else{
                $("#LocationFloorList").hide();
            };
            for(var i=arr.length-1;i>=0;i--){
                if(t>=arr[i].top-300){
                    console.log(i);
                    $("#LocationFloorList li:eq("+i+")").addClass("ac").siblings().removeClass("ac");
                    break
                }
            }

        })
        $("#LocationFloorList li a[href*='#']").on("click",function(){
            var id= this.hash;
            console.log(id)
            $("html,body").finish().animate({
                scrollTop:$(id).offset().top
            },600)
            return false;
        });
    })();
    /*楼层导航结束*/
    /*天气变化*/
    function run(){
        var url="http://wthrcdn.etouch.cn/weather_mini?city="+$(".diqu select").val()+""
        $.getJSON(url,function(data){
            var html="温度:"+data.data.wendu+"℃　"
            html+="风向:"+data.data.forecast[0].fengxiang
            html+="　日期:"+data.data.forecast[0].date
            $("#tianqi").html(html)
        })
    };
    run();
    $(".diqu select").on("change",function(){
        run();
    })

});
</0)>