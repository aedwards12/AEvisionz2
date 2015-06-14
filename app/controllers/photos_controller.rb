class PhotosController < ApplicationController

  def index
    @photos = Photo.where.not(category: ["wedding", "event"])
  end

  def new
    @shoot = Shoot.new
    @shoot.photos.build
    @photo = Photo.new
  end

  def create
    respond_to do |format|
      @photo = Photo.new(photo_params)
      if @photo.save
        flash[:success] = "Photo saved"
        format.html {redirect_to photos_path}
        format.js
      else
      render 'new'
      end
    end
  end

  def weddings
    @photos = Photo.where(category: "wedding").shuffle.shuffle
    render layout: "wedding_layout"
  end

  def wedding
    respond_to do |format|
      @photos = Photo.where(title: params[:id]).shuffle
      format.js
    end
  end

  def events
    @photos = Photo.where(category: "events")
  end

  def event
    respond_to do |format|
      @photos = Photo.where(title: params[:id])
      format.js
    end
  end

      def new_multiple
        @photo = Photo.new
      end

  private

  def photo_show
    params.require(:photo).permit(:image_uid)
  end

  def photo_params
    params.require(:photo).permit(:image, :title, :category, :model, :shootdate)
  end
end