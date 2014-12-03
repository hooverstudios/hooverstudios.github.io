$(document).ready(function(){

    //nojs
    $("body").removeClass("no-js");

    //------------------------------------------------------------------------//

    //fakelink
    $('a[href="#"]').on('click',function(e){e.preventDefault();});

    //------------------------------------------------------------------------//

    //placeholder
    $('input[placeholder], textarea[placeholder]').placeholder();

    //------------------------------------------------------------------------//
    
    // Smooth Scrolling
    
    $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

    //------------------------------------------------------------------------//

    // tab
    $(function(){
        $('.tabs').delegate('li:not(.active)','click',function(){
            $(this).addClass('active').siblings().removeClass('active').parents('.tab').find('.box').hide().eq($(this).index()).fadeIn(250);
        })
    });

    // tab arrows
    if ( $(".tab").has(".tab-prev").length || $(".tab").has(".tab-next").length ) {
        $('.tab-prev, .tab-next').click(function(){
            var $active = $(this).parents(".tab").find(".tabs .active");
            $next = $(this).hasClass('tab-prev') ? $active.prev() : $active.next();
            if (!$next.length) $next = $(this).hasClass('tab-prev') ? $(this).parents(".tab").find('.tabs li:last') : $(this).parents(".tab").find('.tabs li:first');
            $next.click();
            return false;
        });
    }

    //------------------------------------------------------------------------//

});//document ready
