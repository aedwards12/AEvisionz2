document.addEventListener('DOMContentLoaded', function(){
	console.log("content loaded");

	var categories = document.querySelector(".categories");
	categories.addEventListener('click', showcategory);

	var img = document.querySelector("#photos-list");
	img.addEventListener('click', imageModal);
	// console.log(img)

	var closeModal = document.querySelector("#close");
	closeModal.addEventListener('click', closeImageModal)

	 window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop
        var shrinkOn = 200;
           header = document.querySelector("header");
           console.log(distanceY)
        if (distanceY > shrinkOn) {
        	header.classList.add("smaller");
            // classie.add(header,"smaller");
        } else {
            if (header.classList.contains("smaller")) {
                header.classList.remove("smaller");
            }
               // header.classList.toggle("smaller");
        }
    });

});

function showcategory(event){
	//show individual category or show all
	if (event.target === document.querySelector("#nav")){
		return null;
	}

	var category = event.target.innerHTML;
	 console.log(category)
	 // if catergory == 

	if (category !== "all" && category != "shuffle"){			
		var photos = document.querySelectorAll('li[data-category]');
		 // console.log(photos.dataset.data-category=== category);
		for(var i = 0; i<photos.length; i++){
			 // console.log(photos[i].dataset.category=== category)
			if (photos[i].dataset.category !== category){
				// toggle display
				if (photos[i].style.display == "none"){
					photos[i].style.display = "";
				}else{
					photos[i].style.display = "none";
				}
			}
		}
	}else if(category === "shuffle") {
		console.log("inside heree");

		// remove photos,
		// add photos in diffeent order
			Array.prototype.shuffle = function (){
			    var i = this.length, j, temp;
			    if ( i == 0 ) return;
			    while ( --i ) {
			        j = Math.floor( Math.random() * ( i + 1 ) );
			        temp = this[i];
			        this[i] = this[j];
			        this[j] = temp;
			    }
            };

            var turnObjToArray = function(obj) {
			  return [].map.call(obj, function(element) {
			    return element;
			  })
			};

			var photos = document.querySelectorAll('li[data-category]');
			var parent = document.querySelector("#photos-list");

			var listimages = turnObjToArray(photos);
			listimages.shuffle();

			//remove elements from parent
			while (parent.firstChild) {
			  parent.removeChild(parent.firstChild);
			}		

			for(var i = 0; i<listimages.length; i++){
			  parent.appendChild(listimages[i])
			}

	}else { 
		//make images visible
		var photos = document.querySelectorAll('li[data-category]');
		// console.log(photos)
		for(var i = 0; i<photos.length; i++){
			photos[i].style.display = "";
		}
	}//end if	
}//end showcategory


function imageModal(event){
	event.preventDefault();
	 console.log(event.target.dataset.id)

	var src = event.target.src;
	var simulate = document.querySelector("#openM").click();
	var image = document.querySelector("#imageView");
	var photos = document.querySelectorAll('li[data-category]');
	var imageDisplay = document.createElement("img");
	// imageDisplay.setAttribute("src", src);
    // console.log(imageDisplay);
    // image.appendChild(imageDisplay);

     var block = {photo:{image_uid: event.target.dataset.id }}

     $.ajax({
    url:"/photos/id_show",
     method:"POST",
     data: block,
     dataType: 'json'
	 }).done(function(data) {
	     // appendExerciseTable(fm);
	     console.log(data)
	   imageDisplay.setAttribute("src", data);
       image.appendChild(imageDisplay);
	 }).fail(function(){console.log("FAILURE")})	
}

function closeImageModal(event){
	var image = document.querySelector("#imageView");
	image.innerHTML = " ";
}