$(window).load(function(){

 // $container = $('#masonry-container');

 $(window).width() < 600 ? $( ".box" ).removeClass( "col2" ).addClass( "col3" )  : 10;

 var $container = $('#masonry-container').isotope({
    
        itemSelector: '.box',
    
        masonry: {
          columnWidth: 5,
          isFitWidth: true
        }
      });


 $container.imagesLoaded(function(){
  $container.isotope('layout');
 })

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
