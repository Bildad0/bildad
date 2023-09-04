$(document).ready(function() {

    jQuery('.tabs .tab-links a').on('click', function(e) {
        var currentAttrValue = jQuery(this).attr('href');
        jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide(); // Show/Hide Tabs
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active'); // Change/remove current tab to active
        e.preventDefault();
    });



// submiting form 
$('#form').submit(function(e) {
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
             
             $.post("form.php", values, function(response){
                console.log("Api response: ", response);
             });
            }
       } 
});

});