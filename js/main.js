$(window).scroll(function () {
    var s = $(window).scrollTop(),
          d = $(document).height(),
          c = $(window).height();
          scrollPercent = (s / (d-c)) * 100;
          var position = scrollPercent;
  
     $(".progress__indicator").css('width', position + "%");
});

$(document).ready(function(){
    let open = false;
    $(".myNav__hamburger").click(function(){
        if(!open) {
            $( ".myNav__hamburger" ).addClass( "open" );
            $( ".myNav__list" ).removeClass( "outtabounds" );
            $( ".overflow-avoider" ).addClass( "overflow-y" );
            open = true;
        }
        else {
            $( ".myNav__hamburger" ).removeClass( "open" );
            $( ".myNav__list" ).addClass( "outtabounds" );
            $( ".overflow-avoider" ).removeClass( "overflow-y" );
            open = false;
        }
    });
});

$('.form__input').keyup(function(){ // run anytime the value changes
    var thirdValue;
    var firstValue  = Number($('#reais').val());   // get value of field
    var secondValue = Number($('#year').val()); // convert it to a float

    if(secondValue==2009) {
        thirdValue = 0.89;
    }
    else if (secondValue==2010) {
        thirdValue = 1;
    }
    else if (secondValue==2011) {
        thirdValue = 5;
    }
    else if (secondValue==2012) {
        thirdValue = 10;
    }
    else if (secondValue==2013) {
        thirdValue = 40;
    }
    else if (secondValue==2014) {
        thirdValue = 100;
    }
    else if (secondValue==2015) {
        thirdValue = 600;
    }
    else if (secondValue==2016) {
        thirdValue = 800;
    }
    else if (secondValue==2017) {
        thirdValue = 1000;
    }

    

    $('#btc').html(floor(firstValue / thirdValue)); // add them and output it
    $('#rs').html(floor((firstValue / thirdValue) * 30)); // add them and output it
    
// add them and output it
});