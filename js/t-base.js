jQuery(document).ready(function($) {
    var action = {
        
        willMount(){
            $.ajax({
                url:"http://gsjk.oykj.net/WebQj.asmx/T_P_GetIndex",
                type     : "POST",
                dataType : "JSON",
                cache    : false,
                data:"",
                success:function (data) {
                    console.log(data)
                    alert(data)
                },
                error: function (data,XMLHttpRequest, textStatus,errorThrown ) {
                    console.log(data)
                    alert("Request: " + XMLHttpRequest.toString() + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                },
            })
        },
        mountTest(){
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
        },
        toggleHead(){
            $("document").on("click",'.main-left',function (e) {
                var self = $(this).children('.i-head');
                self.css("opacity","0.9")
            })
        }
    }

	var init = {
        init(){
            // action.willMount();
            action.mountTest();
            action.toggleHead()
        }
    }
    init.init()
});