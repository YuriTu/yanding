jQuery(document).ready(function($) {
    var dataForIndex =
    {
        "safe":"",
        "pic1":"",
        "pic2":"",
        "pic3":"",
        "pic4":"",
        "h1":"",
        "h2":"",
        "h3":"",
        "h4":"",
        "p1":"",
        "p2":"",
        "p3":"",
        "p4":""
    }
    var dataForDetail =
    {
        "safe":"",
        "pic1":"",
        "pic2":"",
        "pic3":"",
        "pic4":"",
        "h1":"",
        "h2":"",
        "h3":"",
        "h4":"",
        "p1":"",
        "p2":"",
        "p3":"",
        "p4":"",
    }

    var action = {
        listerInputIndex(){
            $(document).on('click',"#indexSubmit",function (event) {
                event.preventDefault();
                var data = $("#indexForm")[0]
                dataForIndex = {
                    "safe":data[0].value,
                    "pic1":data[2].value,
                    "pic2":data[5].value,
                    "pic3":data[8].value,
                    "pic4":data[11].value,
                    "h1":data[1].value,
                    "h2":data[4].value,
                    "h3":data[7].value,
                    "h4":data[10].value,
                    "p1":data[3].value,
                    "p2":data[6].value,
                    "p3":data[9].value,
                    "p4":data[12].value,
                }
                $.ajax({
                    url:"http://gsjk.oykj.net/WebQj.asmx/T_P_I_Update",
                    type:"POST",
                    dataType:"JSON",
                    data:dataForIndex,
                    contentType: "application/x-www-form-urlencoded; charset=utf-8",
                }).then(function (rs) {
                    alert(rs.mes)
                })
                
            })
        },
        listerInputDetail(){
            $(document).on('click',"#detailSubmit",function (event) {
                event.preventDefault();
                var dataDetail = $("#detailForm")[0]
                dataForDetail = {
                    safe:dataDetail[0].value,
                    pageCode:dataDetail[1].value,
                    banner:dataDetail[3].value,
                    h1:dataDetail[4].value,
                    h2:dataDetail[6].value,
                    h3:dataDetail[8].value,
                    h4:dataDetail[2].value,
                    p1:dataDetail[5].value,
                    p2:dataDetail[7].value,
                    p3:dataDetail[9].value,
                }
                $.ajax({
                    url:"http://gsjk.oykj.net/WebQj.asmx/T_P_L_Update",
                    type:"POST",
                    dataType:"JSON",
                    data:dataForDetail,
                    contentType: "application/x-www-form-urlencoded; charset=utf-8",
                }).then(function (rs) {
                    alert(rs.mes)
                })

            })
        },
    }

    var init = {
        init(){
            action.listerInputIndex()
            action.listerInputDetail()
        }
    }
    init.init()
});