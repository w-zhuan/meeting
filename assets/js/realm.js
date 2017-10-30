$(function(){
  // $.ajax({
  //       url:'http://dev01.nearsen.cn:9090/nearsen_enterprise/api/web/meeting/getallmeetings',
  //       type:'POST',
  //       dataType:"json",
  //       contentType:"application/json",
  //       data:JSON.stringify({sponsorId:""}),
  //       crossDomain:true,
  //       async:false,
  //       cache:false,
  //       success:function(data){
  //            console.log(data.data.historyinMeetings)
  //           var historys=data.data.historyinMeetings
  //           var his = ""
  //           var id=[];
  //           for(var i  in historys){
  //               his += "<li>"+historys[i].title +"</li>";
  //           }
  //           for(var j  in historys){
  //
  //               id[j] = historys[j].id;
  //
  //           }
  //
  //           $(".history").html(his)
  //           $(".history li").click(function(){
  //               var index = $(this).index()
  //
  //               var meetingId = id[index]
  //               console.log(typeof meetingId)
  //               console.log( meetingId)
  //                   $.ajax({
  //                       url:'http://dev01.nearsen.cn:9090/nearsen_enterprise/api/web/meeting/getMeetingMans',
  //                       type:'POST',
  //                       dataType:"json",
  //                       contentType:"application/json",
  //                       data:JSON.stringify({
  //                           "meetingId":"meeting:2052afdc97097388faf4747fe56178f4" ,
  //                           "pageIndex": 0,
  //                           "pageSize": 20,
  //                           "selectState": 0,
  //                           "selectString": "string"
  //                       }),
  //                       async:false,
  //                       success:function(data) {
  //                          var business = data.data.mans
  //                           console.log(business)
  //                           var card = "";
  //                          for ( var i in business){
  //                             card+=  '<li><img src="'+ data.data.mans[i].bigphotopath +'" alt="头像"><div><span>'+
  //                                 data.data.mans[i].name +'</span><p>'+data.data.mans[i].position+'</p><div><span>'+
  //                                 data.data.mans[i].industry+'</span>&nbsp;&nbsp;&nbsp;<span >'+data.data.mans[i].company+'</span> </div></div></li>'
  //                          }
  //                          $(".lists-card").html(card)
  //                       }
  //                   })
  //           })
  //
  //       },
  //       error:function(data){
  //
  //       }
  //
  //   });
    $(".lists-nav").hover(function(){

        $(".lists-nav").css("overflow","scroll")

    },function () {

        $(".lists-nav").css( "overflow","none")

    })

    $("#but button").click(function(){
        var index = $(this).index();
        console.log(index);
        // if(index==0){
        //
        //   var path = "http://dev01.nearsen.cn:9090/nearsen_enterprise/api/web/meeting/getMeetingMans";
        //   var datas = {sponsorId:""};
        //   var success = function(data){
        //     console.log(data.data.historyinMeetings)
        //   }
        //   ajax(path,datas,success)
        // }else if (index==1) {
        //
        //
        // }else if (index==2) {
        //
        //
        // }

    })
    // function ajax(path,datas,success){
    //     $.ajax({
    //       url: path,
    //       type: "POST",
    //       dataType: 'json',
    //       data:JSON.stringify(datas),
    //       async:false,
    //       success:success,
    //       error:function(err){
    //         console.log(err);
    //       }
    //     })
    //   }


})
