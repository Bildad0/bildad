$(document).ready(function() {


    jQuery('.tabs .tab-links a').on('click', function(e) {
        var currentAttrValue = jQuery(this).attr('href');
        jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide(); // Show/Hide Tabs
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active'); // Change/remove current tab to active
        e.preventDefault();
    });


    $('#form').submit(function() {
        var $inputs = $('#form:input');

        var values = {};

        $inputs.each(() => {
            values[this.name] = $(this).val();
        });
    });
});