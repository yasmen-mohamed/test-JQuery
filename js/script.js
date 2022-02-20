$("#demo").animate({width:"100%"} , 1500);
$("#demo").animate({height:"100vh"} , 1500 , function(){

    //$("#demo h1").slideDown(1500); 
    //$("#demo h1").show(1500); 
    $("#demo h1").fadeIn(1000 , function(){

        //$("#demo .col-md-4").slideDown(1000);
        $("#demo .col-md-4").show(1000);
        //$("#demo .col-md-4").fadeIn(1000);
    });
});

