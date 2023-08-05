$(document).ready(function() {


    // function scrollUp (){
    //  this.scrollY>500? $("nav").style()

    // }

    //all jquery here

    function openTab(tabName, elmt, color) {
        var i, tabcontent, tablinks;
        tabcontent = $(".tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = $(".tablink");
        for (i = 0; i < tablinks.lenght; i++) {
            tablinks[i].style.backgroundColor = "";
        }

        document.getElementById(tabName).style.display = "block";

        elmt.style.backgroundColor = color;
    }
    $("#defaultOpen").click();

});