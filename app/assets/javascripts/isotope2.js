document.addEventListener('DOMContentLoaded', function(){

 $container = $('#masonry-container');
    $container.imagesLoaded( function(){
      $container.isotope({
        itemSelector: '.box',
    
         masonry: {
          columnWidth: 200,
          isFitWidth: true
    }

      });

      $container.masonry({
        itemSelector: '.box',
        isAnimated: !Modernizr.csstransitions,
        isFitWidth: true
     });  
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
  $('#nav').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    console.log(filterValue)
    $container.isotope({ filter: filterValue });
  });
});
