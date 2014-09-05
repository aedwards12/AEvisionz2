document.addEventListener('DOMContentLoaded', function(){
	console.log("content loaded");

	var categories = document.querySelector(".categories")
	categories.addEventListener('click', showcategory)

});

function showcategory(event){
	//show individual category or show all
	var category = event.target.innerHTML;
	console.log(category)

	if (category !== "all" && category != "shuffle"){			
		var photos = document.querySelectorAll('li[data-category]');
		 // console.log(photos.dataset.data-category=== category);
		for(var i = 0; i<photos.length; i++){
			 console.log(photos[i].dataset.category=== category)
			if (photos[i].dataset.category !== category){
			photos[i].style.display = "none";
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
		console.log(photos)
		for(var i = 0; i<photos.length; i++){
			photos[i].style.display = "";
		}
	}//end if
	

	
}//end showcategory