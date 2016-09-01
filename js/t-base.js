jQuery(document).ready(function($) {
    var action = {
        willMpunt(){
            $.ajax({
                url:"http://gsjk.oykj.net/WebQj.asmx/T_P_GetIndex",
                type:"get",
                dataType:"JSON",
                data:"",
            }).then(function (rs) {
                let data = rs[0];
                $("#h1").text(data.h1);
                $("#h2").text(data.h2);
                $("#h3").text(data.h3);
                $("#h4").text(data.h4);
                $("#p1").html(data.p1);
                $("#p2").html(data.p2);
                $("#p3").html(data.p3);
                $("#p4").html(data.p4);
                $("#pic1").attr("src",data.pic1);
                $("#pic2").attr("src",data.pic2);
                $("#pic3").attr("src",data.pic3);
                $("#pic4").attr("src",data.pic4);
            })            
        },
        test(){
            $.ajax({
                url:"./json/indexPage.json",
                type:"get",
                dataType:"JSON",
                data:"",
            }).then(function (rs) {
                let data = rs[0];
                $("#h1").text(data.h1);
                $("#h2").text(data.h2);
                $("#h3").text(data.h3);
                $("#h4").text(data.h4);
                $("#p1").html(data.p1);
                $("#p2").html(data.p2);
                $("#p3").html(data.p3);
                $("#p4").html(data.p4);
                $("#pic1").attr("src",data.pic1);
                $("#pic2").attr("src",data.pic2);
                $("#pic3").attr("src",data.pic3);
                $("#pic4").attr("src",data.pic4);
            })
        }
    }

	var init = {
        init(){
            // action.willMpunt();
            action.test()
        }
    }
    init.init()
});