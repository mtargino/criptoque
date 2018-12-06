$(window).scroll(function () {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    scrollPercent = (s / (d - c)) * 100;
    var position = scrollPercent;

    $(".progress__indicator").css('width', position + "%");
});

$(document).ready(function () {
    let open = false;
    $(".myNav__hamburger").click(function () {
        if (!open) {
            $(".myNav__hamburger").addClass("open");
            $(".myNav__list").removeClass("outtabounds");
            $(".overflow-avoider").addClass("overflow-y");
            open = true;
            $(".myNav__list__item").click(function () {
                $(".myNav__hamburger").removeClass("open");
                $(".myNav__list").addClass("outtabounds");
                $(".overflow-avoider").removeClass("overflow-y");
                open = false;
            })
        }
        else {
            $(".myNav__hamburger").removeClass("open");
            $(".myNav__list").addClass("outtabounds");
            $(".overflow-avoider").removeClass("overflow-y");
            open = false;
        }
    });
});

$.fn.digits = function () {
    return this.each(function () {
        $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
}

$('.form__input').keyup(function () { // run anytime the value changes
    var thirdValue;
    var firstValue = Number($('#reais').val());   // get value of field
    var secondValue = Number($('#year').val()); // convert it to a float

    if (secondValue == 2009) {
        thirdValue = 0.001;
    }
    else if (secondValue == 2010) {
        thirdValue = 0.21;
    }
    else if (secondValue == 2011) {
        thirdValue = 40;
    }
    else if (secondValue == 2012) {
        thirdValue = 21;
    }
    else if (secondValue == 2013) {
        thirdValue = 300;
    }
    else if (secondValue == 2014) {
        thirdValue = 1800;
    }
    else if (secondValue == 2015) {
        thirdValue = 700;
    }
    else if (secondValue == 2016) {
        thirdValue = 1800;
    }
    else if (secondValue == 2017) {
        thirdValue = 35000;
    }



    $('#btc').html(Number.parseFloat(firstValue / thirdValue).toFixed(4)); // add them and output it
    $('#rs').html(Math.floor((firstValue / thirdValue) * 13940.86)).digits(); // add them and output it

    // add them and output it
});

$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
});
