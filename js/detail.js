jQuery(document).ready(function($) {

    var param = {
        safe:"wangyifan",
        pageCode:0,
    };
    var action = {

        willMount(){
            var pathname = window.location.pathname
            param.pageCode = pathname.substr(pathname.indexOf("index=")+5,1);
            param.safe = param.safe + pageCode
        },
        getData(){
            $.ajax({
                url:"http://gsjk.oykj.net/WebQj.asmx/T_P_Getlist",
                type:"get",
                dataType:"JSON",
                data:param,
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
                $("#banner").attr("src",data.banner);
            })
        },
        // mountTest(){
        //     $.ajax({
        //         url:"../json/detailPage.json",
        //         type:"get",
        //         dataType:"JSON",
        //         data:"",
        //     }).then(function (rs) {
        //         let data = rs[0];
        //         $("#h1").text(data.h1);
        //         $("#h2").text(data.h2);
        //         $("#h3").text(data.h3);
        //         $("#h4").text(data.h4);
        //         $("#p1").html(data.p1);
        //         $("#p2").html(data.p2);
        //         $("#p3").html(data.p3);
        //         $("#p4").html(data.p4);
        //         $("#banner").attr("src",data.banner);
        //     })
        // },
        mountTest(){
            $.ajax({
                url:"../json/indexPage.json",
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
                $("#banner").attr("src",data.banner);
                if(data.h3 === ""){
                    $("#panel3").hide()
                }
                if(data.h2 === ""){
                    $("#panel2").hide()
                }
                if(data.h1 === ""){
                    $("#panel1").hide()
                }
            })
        },
    }

    var init = {
        init(){
            // action.willMount();
            action.mountTest();
            // action.getData();
            // action.toggleHead()
        }
    }
    init.init()
});