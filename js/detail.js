jQuery(document).ready(function($) {

    var param = {
        safe:"wangyifan",
        pageCode:0,
    };
    
    var action = {

        willMount(){
            var pathname = window.location.search
            param.pageCode = pathname.substr(pathname.indexOf("index=")+6,1);

            param.safe = param.safe + param.pageCode
        },
        getData(){
            $.ajax({
                url:"http://gsjk.oykj.net/WebQj.asmx/T_P_Getlist",
                type:"get",
                dataType:"JSON",
                data:param,
            }).then(function (rs) {
                let data = rs[0];
                $("#h1").html(data.h1) ;
                $("#h2").html(data.h2) ;
                $("#h3").html(data.h3) ;
                $("#h4").html(data.h4) ;
                $("#p1").html(data.p1 );
                $("#p2").html(data.p2 );
                $("#p3").html(data.p3 );
                $("#banner").attr("src",data.banner);
                if(data.h3 === "null"){
                    $("#panel3").hide()
                }
                if(data.h2 === "null"){
                    $("#panel2").hide()
                }
                if(data.h1 === "null"){
                    $("#panel1").hide()
                }
            })
        },
        test(){
            $.ajax({
                url:"./json/detailPage" + param.pageCode +".json",
                type:"GET",
                dataType:"JSON",
                // data:param,
            }).then(function (rs) {
                let data = rs[0];
                $("#h1").html(data.h1) ;
                $("#h2").html(data.h2) ;
                $("#h3").html(data.h3) ;
                $("#h4").html(data.h4) ;
                $("#p1").html(data.p1 );
                $("#p2").html(data.p2 );
                $("#p3").html(data.p3 );
                $("#banner").attr("src",data.banner);
                if(data.h3 === "null"){
                    $("#panel3").hide()
                }
                if(data.h2 === "null"){
                    $("#panel2").hide()
                }
                if(data.h1 === "null"){
                    $("#panel1").hide()
                }
            })
        },
    }
    var init = {
        init(){
            action.willMount();
            // action.getData();
            action.test();
        }
    }
    init.init()
});