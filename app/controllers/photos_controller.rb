class PhotosController < ApplicationController

	def index
		@photos = Photo.all
	end

	def new
		@photo = Photo.new
	end

	def create 
		@photo = Photo.new(photo_params)
		if @photo.save
			flash[:success] = "Photo saved"
			redirect_to photos_path
		else
		render 'new'
		end
	end

	def id_show
		p "inhere"
		p params["photo"]
		@photo = Photo.find_by(params["photo"])

		if @photo
		  render json: @photo.image.thumb('x500').url.to_json		
		else
		  render json: "failed".to_json
		end  
	end 
	
	private

	def photo_show
		p params
		params.require(:photo).permit(:image_uid)
	end	
	
	def photo_params
		params.require(:photo).permit(:image, :title, :category, :model, :shootdate)
	end			
end