// --------------****************************-----------------------------
// This is only for showing Select product and sub porduct.

$(document).ready(function(){

    $("#right-arrow").click(function(){

        $(this).parent(".select-collection-box").addClass("active-s-c-box");
    });

    $("#down-arrow").click(function(){
       
        $(".select-collection-box").removeClass("active-s-c-box");
    });
});

    $(document).ready(function () {
        $('#right-arrow').click(function () {
            $(this).hide();
            $('#down-arrow').show();
            $('.sub-item-area').slideToggle();
        });

        $('#down-arrow').click(function () {
            $(this).hide();
            $('#right-arrow').show();
            $('.sub-item-area').slideToggle();
        });
    });

// --------------***************End*************-----------------------------

// --------------*************START***************-----------------------------



$(document).ready(function() {
    $("#right-arrow-show").click(function() {
        $(".product-details-area, .select-product-box").slideToggle();
        $(this).hide();
        $("#down-arrow-show").show();
        $(".show-collection-item").addClass("active-p");
    });

    $("#down-arrow-show").click(function() {
        $(this).hide();
        $("#right-arrow-show").show();
        $(".product-details-area, .select-product-box").slideToggle();
        $(".show-collection-item").removeClass("active-p");
    });
});














// --------------****************End************-----------------------------








// --------------**************START**************-----------------------------

// This is only for quantity

    $(document).ready(function () {
        $('.quantity-up-arrow').on('click', function () {
            var inputField = $(this).closest('.product-quantity').find('.quantity-text');
            var currentValue = parseInt(inputField.val()) || 0;
            if (currentValue < 1000) {
                inputField.val(currentValue + 1);
            }
        });

        $('.quantity-down-arrow').on('click', function () {
            var inputField = $(this).closest('.product-quantity').find('.quantity-text');
            var currentValue = parseInt(inputField.val()) || 0;
            if (currentValue > 0) {
                inputField.val(currentValue - 1);
            }
        });
    });


// --------------*************End***************-----------------------------

