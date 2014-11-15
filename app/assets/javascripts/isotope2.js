document.addEventListener('DOMContentLoaded', function(){

 $container = $('#masonry-container');

 $(window).width() < 600 ? $( ".box" ).removeClass( "col2" ).addClass( "col3" )  : 10;

 console.log($(window).width())

    $container.imagesLoaded( function(){
      $container.isotope({
        itemSelector: '.box',
    
        masonry: {
          columnWidth: 5,
          isFitWidth: true
        }

      });

     //  $container.masonry({
     //    itemSelector: '.box',
     //    isAnimated: !Modernizr.csstransitions,
     //    isFitWidth: true
     // });  
  });

   // $container.isotope({    
     // getSortData: {
     //      // fashion: '.fashion',
     //      // beauty: '.beauty',
     //      // headshots: '.headshots',
     //      // landscape: '.landscape',
     //      category: '[data-category]',

     //    }
     // });  
  $('#nav > li > ul').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    console.log(filterValue)
    $container.isotope({ filter: filterValue });
  });
});
