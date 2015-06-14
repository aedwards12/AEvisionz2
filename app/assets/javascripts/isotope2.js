$(window).load(function(){

 // $container = $('#masonry-container');


 var $container = $('#masonry-container').isotope({

        itemSelector: '.box',

        masonry: {
          columnWidth: 5,
          gutter: 5,
          isFitWidth: true
        }
      });


 $container.imagesLoaded(function(){
  $container.isotope('layout');
 });

  //   $container.imagesLoaded()

  //   .done( function( instance ){
  //     $container.isotope({
  //       itemSelector: '.box',

  //       masonry: {
  //         columnWidth: 5,
  //         isFitWidth: true
  //       }

  //     });
  // });

  $('#nav > li > ul').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    console.log(filterValue)
    $container.isotope({ filter: filterValue });
  });
});
