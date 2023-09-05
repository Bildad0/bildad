$(document).ready(function() {

    jQuery('.tabs .tab-links a').on('click', function(e) {
        var currentAttrValue = jQuery(this).attr('href');
        jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide(); // Show/Hide Tabs
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active'); // Change/remove current tab to active
        e.preventDefault();
    });



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
             
            const MongoDB_BASE_API = "https://ap-south-1.aws.data.mongodb-api.com/app/data-vvges/endpoint/data/v1"
            
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
                url:MongoDB_BASE_API,
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