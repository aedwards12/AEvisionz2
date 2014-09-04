document.addEventListener('DOMContentLoaded', function(){
	console.log("content loaded");

	var categories = document.querySelector(".categories")
	categories.addEventListener('click', showcategory)

});

function showcategory(event){
	//show individual category or show all
	var category = event.target.innerHTML;

	if (category !== "all"){			
		var photos = document.querySelectorAll('li[data-category]');
		 // console.log(photos.dataset.data-category=== category);
		for(var i = 0; i<photos.length; i++){
			 console.log(photos[i].dataset.category=== category)
			if (photos[i].dataset.category !== category){
			photos[i].style.display = "none";
			}
		}
	}else{ 
		//make images visible
		var photos = document.querySelectorAll('li[data-category]');
		console.log(photos)
		for(var i = 0; i<photos.length; i++){
			photos[i].style.display = "";
		}
	}//end if
	

	
}//end showcategory