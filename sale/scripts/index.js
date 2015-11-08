$(document).ready(function() {
    $(".guess_box").click(function() {
        // $(".guess_box p").remove();
        var discount = Math.floor((Math.random() * 6)) + 5;
        var discount_msg = "<p>Your Discount is " + discount + "%</p>";
        //alert("discountMsg");
        //$(".guess_box").append(discount_msg);
        $(this).append(discount_msg);
        $(".guess_box").each(function() {
            $(this).unbind("click");
        });


    });

});
