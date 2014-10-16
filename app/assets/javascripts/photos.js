document.addEventListener('DOMContentLoaded', function(){

	var img = document.querySelector(".photos-list");
	img.addEventListener('click', imageModal);

	window.addEventListener('scroll', function(e){
				var distanceY = window.pageYOffset || document.documentElement.scrollTop
				var shrinkOn = 200;
					 header = document.querySelector("header");
					 text = document.querySelector(".contact");
						console.log(distanceY)
				if (distanceY > shrinkOn) {
					header.classList.add("smaller");
					text.classList.add("smaller")
				} else {
						if (header.classList.contains("smaller")) {
								header.classList.remove("smaller");
						}
						else if (text.classList.contains("smaller")) {
								header.classList.remove("smaller");
						}
				}
		});
});

function imageModal(event){
	event.preventDefault();
	document.querySelector("#pictureModal").click();
	var image_modal = document.querySelector("#pictureModal");
	image_modal.innerHTML = " ";
	var imageDisplay = document.createElement('img');
	imageDisplay.setAttribute('src', event.target.src);
	image_modal.appendChild(imageDisplay);

	console.log(event.target.height)
	console.log(event.target.width)

	if (event.target.height < event.target.width){
		image_modal.className += ' medium';
	}else{
		image_modal.classList.remove("medium");
		console.log(this.classList);
	}
}

