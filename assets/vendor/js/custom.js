$(document).ready(function(){
    $("#right-arrow").click(function(){

        $(this).parent(".select-collection-box").addClass("active-s-c-box");
    });

    $("#down-arrow").click(function(){
       
        $(".select-collection-box").removeClass("active-s-c-box");
    });
});