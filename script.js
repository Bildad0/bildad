$(document).ready(function() {

//progress

$('#progress').progressbar({
value:0,
max:100, 

// function(value){
//     for(i=value; i<100; i++){
//         $('#progress').css('background','white')
//         return value;
//     }
// }

});

//slide show

setTimeout(function(){
    $( "slide1" ).hide( "drop", { direction: "down" }, "slow" );
}, 1000)
// var child = $('#slide-show').children('#slide');

// for (i=0; i<child.lenght; i++){
//     setTimeout(function(){
//         $('#slide').slideDown(10, function(){
//             $(this).css('display','none');
//         });
//     },500);
// }

//animation on scroll



    jQuery('.tabs .tab-links a').on('click', function(e) {
        var currentAttrValue = jQuery(this).attr('href');
        jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide(); // Show/Hide Tabs
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active'); // Change/remove current tab to active
        e.preventDefault();
    });



var stickyTop =$('header').offset().top;
$(window).scroll(function(){
    var windowTop = Math.round($(window).scrollTop());
    var scrollHeight = $(document).height();
    console.log("Device height: " ,scrollHeight);
    console.log("Scroll position: ", windowTop);
        
    if(stickyTop< windowTop){
        $('header').css('display','flex');
        $('header').css('position', 'fixed');
        $('header').css('width','100%');
    }else{
        $('header').css('display','none');
        $('header').css('position','relative');
        $('header').css('width','100%');
        $('header').css('z-index','5');
    }

    if(windowTop=scrollHeight-windowTop) {
      
        $("#fadeIn").fadeIn();
    }else {

        $("#fadeOut").fadeIn();
        
    }
//    if(windowTop=scrollHeight-windowTop){
// console.log("new height is:", scrollHeight-windowTop);
//    }else{

//    }
    
})


//menu click
$('#menu').click(function(){
    console.log("menu clicked");
    $('.menu-popup').slideToggle();
})



//btn hover

$('#work-btn').hover(function(){
    $(this).css('background','brown');
  
}, function(){
    $(this).css('background', 'transparent');  
})

$('#hire-btn').hover(function(){
    $(this).css('background','brown');
}, function(){
$(this).css('background','white');

})

// submiting form 
$('#submit').click(function(e) {
    const values = {};

    e.preventDefault();
        
    $("#submit").prop('disabled', true);
        
    $.each($('#form').serializeArray(), function(_i, field) {
        values[field.name] = field.value;
       
    });
     

    setTimeout(function(){
        $('form').trigger("reset");
        $("#submit").prop('disabled', false);
    },500);

if(values.isEmpty){
    return false;
       } else
       {
          if(values["firstName"]==""){
            $('.nameResponse').append("First Name is required");
            return false;
            } else if(values["email"]==""){
             $('.response').append("Email is required");
             return false;
            }else if( values["message"]==""){
             $('.messageResponse').append("Message is required");
             return false;
            }else{
             //do http post
             console.log("User inputs: ", values);

            //  $.post("/form.php", values, function(response){
            //     console.log("Api response: ", response);
            //  }); 
             
            const MongoDB_BASE_API = "https://ap-south-1.aws.data.mongodb-api.com/app/data-vvges/"
            
                    var headers ={
                        'Content-Type':'application/json',
                        'Access-Control-Request-Headers':'*',
                        'api-key':'l1RSobxFUBlmM9oIsJb8YLStl0Fzm0UXKJ6LfdFDZvJ10G8uFe5ouWcbOPgGAFHa'
                    };
                    var requesteData ={
                        dataSource:'cluster0',
                        database:'FeedBack',
                        projection:values,
                    }
             $.ajax({
                url:`${MongoDB_BASE_API}/endpoint/data/v1`,
                type:"POST",
                headers: headers,
                data:JSON.stringify(requesteData),
                success:function(response){
                    console.log(response);
                },
                error:function(xhr, status,error){
                    console.error(error);
                 }, 
             });
            }
       } 
});

});