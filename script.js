$(document).ready(function() {


    jQuery('.tabs .tab-links a').on('click', function(e) {
        var currentAttrValue = jQuery(this).attr('href');
        jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide(); // Show/Hide Tabs
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active'); // Change/remove current tab to active
        e.preventDefault();
    });



// submiting form 
    $('#form').submit(function(e) {
        e.preventDefault();

        const values = {};
        $.each($('#form').serializeArray(), function(i, field) {
            values[field.name] = field.value;
       
        });
      
        //form validation
       if($('#form').find("firstName").val()=== ""){
   $('.nameResponse').append("First Name is required");
    return false;
       } else if($('#form').find("email").val()=== ""){
        $('.response').append("Email is required");
        return false;
       }else if($('#form').find("message").val()=== ""){
        $('.messageResponse').append("Message is reqiured");
        return false;
       }else{

        //do http post
        console.log("User inputs: ", values);
       }
         //log user input







        // if($("#fname").value === null){
        // console.log("First name is required");
        // $('.nameResponse').append("First Name is required");
       
        // }else if($("#message").value === null){
        //     console.log("Message is reqiured")
        //     $('.messageResponse').append("Message is reqiured");
        
        // } else if($("#email").value === null){
        //      console.log("Email is required");
        //     $('.response').append("Email is required");
        //     return false;
        // }else {
     
        // }
      
    });
});