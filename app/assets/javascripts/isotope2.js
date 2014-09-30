document.addEventListener('DOMContentLoaded', function(){

 $container = $('#masonry-container');
    $container.imagesLoaded( function(){
      $container.isotope({
        itemSelector: '.box',
    //  layoutMode: 'fitRows'
        // getSortData: {
        //   fashion: '[data-fashion]',
        //   beauty: '[data-beauty]',
        //   headshots: '[data-headshots]',
        //   landscape: '[data-landscape]',
        //   category: '[data-category]',

        // },
        // sortBy: [ 'fashion','beauty']

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
