class PhotosController < ApplicationController

	def index
		@photos = Photo.where.not(category: "wedding")
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
		@photo = Photo.find_by(params["photo"])
		if @photo
		  render json: @photo.image.thumb('x500').url(name: @photo.image_uid).to_json		
		else
		  render json: "failed".to_json
		end  
	end 

	def wedding
		@photos = Photo.where(category: "wedding")
		render layout: "wedding_layout"
	end	
	
	private

	def photo_show
		params.require(:photo).permit(:image_uid)
	end	
	
	def photo_params
		params.require(:photo).permit(:image, :title, :category, :model, :shootdate)
	end			
end