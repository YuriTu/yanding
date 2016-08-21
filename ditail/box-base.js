jQuery(document).ready(function($) {
    var action = {
        getIndexCode(){
            
        },
        willMount(){
            $.ajax({
                url:"http://gsjk.oykj.net//WebQj.asmx/T_P_GetIndex",
                method:"GET",
                data:"",
                crossDomain: true,
                dataType: 'jsonp',
            }).then(function (rs) {
                debugger;
                console.log(rs)
            })
        }
    }

    var init = {
        init(){
            action.willMount();
        }
    }
    init.init()
});