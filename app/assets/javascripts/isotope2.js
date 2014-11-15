document.addEventListener('DOMContentLoaded', function(){

 $container = $('#masonry-container');

 var size = $(window).width() > 600 ? 100 : 100;
 console.log($(window).width())
console.log(size);
    $container.imagesLoaded( function(){
      $container.isotope({
        itemSelector: '.box',
    
        masonry: {
          columnWidth: size,
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
