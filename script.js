$(document).ready(function() {


    jQuery('.tabs .tab-links a').on('click', function(e) {
        var currentAttrValue = jQuery(this).attr('href');
        jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide(); // Show/Hide Tabs
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active'); // Change/remove current tab to active
        e.preventDefault();
    });


    $('#form').submit(function(e) {
        e.preventDefault();
        var values = {};
        $.each($('#form').serializeArray(), function(i, field) {
            values[field.name] = field.value;
       
        });
      
        console.log("User inputs: ", values); //log user input

        //varify email
        if (values['email'] == null) {
            console.log("Email is required");
            $('.response').append("Email is required");
            return false;
        } else if (values['fname'] == null) {
            console.log("First name is required");
            $('.nameResponse').append("First Name is required");
            return false;
        }
    });
});