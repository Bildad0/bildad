$(document).ready(function() {


    // function scrollUp (){
    //  this.scrollY>500? $("nav").style()

    // }

    //all jquery here

    $('#tabs li a').click(function() {
        var t = $(this).attr('id');

        if ($(this).hasClass('inactive')) {
            $('#tabs li a').addClass('inactive');
            $(this).removeClass('inactive');

            $('.tab-content').hide();
            $('#' + t + 'c').fadeIn('slow');
        }
    });

});