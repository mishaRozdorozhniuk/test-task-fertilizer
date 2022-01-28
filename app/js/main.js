// $(document).ready(function() {
//     $('.fade').slick({
//         dots: true,
//         infinite: true,
//         speed: 700,
//         autoplay: true,
//         arrows: false,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     });

// });

function displayNum() {
    $("#yield").keyup(calc);
    $("#cost-of-fertilizer").keyup(calc);
    $("#sown-area").keyup(calc);
    var optionValue = $("select#culture").val();

    function calc() {
        if (!$.isNumeric($("#yield").val())) {
            $(".validation-error-yield").addClass('show-error')
            $(".validation-error-yield").removeClass('hide-error')
        } else {
            $(".validation-error-yield").addClass('hide-error')
            $(".validation-error-yield").removeClass('show-error')
        }
        if (!$.isNumeric($("#cost-of-fertilizer").val())) {
            $(".validation-error-cost").addClass('show-error')
            $(".validation-error-cost").removeClass('hide-error')
        } else {
            $(".validation-error-cost").addClass('hide-error')
            $(".validation-error-cost").removeClass('show-error')
        }
        if (!$.isNumeric($("#sown-area").val())) {
            $(".validation-error-sown").addClass('show-error')
            $(".validation-error-sown").removeClass('hide-error')
        } else {
            $(".validation-error-sown").addClass('hide-error')
            $(".validation-error-sown").removeClass('show-error')
        }
        $('.calc__price').html(
            parseFloat(optionValue) + parseFloat($("#yield").val(), 10) + parseFloat($("#cost-of-fertilizer").val(), 10) + parseFloat($("#sown-area").val(), 10)
        );
    }
}
$("select#culture").change(displayNum);