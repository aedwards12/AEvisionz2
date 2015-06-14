class ShootsController < ApplicationController

  def index
    @shoots = load_shoots
  end

  def show
    load_shoot
  end

  def new
    shoot_build
    @shoot.photos.build
  end

  def create

   build_shoot
   save_shoot or render 'new'
  end

  def edit
    load_shoot
    build_shoot
  end

  def update
    load_shoot
    build_shoot

    save_shoot or render 'edit'
    respond_to do |format|
        format.js { redirect_to @person }
    end
  end

  def destroy
    load_shoot
    @shoot.destroy
    redirect_to shoots_path
  end

  private

  def load_shoots
    @shoots ||= shoot_scope
  end

  def load_shoot
    @shoot ||= shoot_scope.find(params[:id])
  end

  def build_shoot
    @shoot ||= shoot_scope.build
    p @shoot
    @shoot.attributes = shoot_params
    p "shoot_params"
    p @shoot.attributes
  end

  def save_shoot
      if @shoot.save
        # p '*'*100
      # p  shoot = params[:shoot][:photos_attributes]["0"].merge(params[:photo])
      # Photo.create(shoot)
          # @shoot.photos.create(shoot)
        redirect_to @shoot
    end
  end

  def shoot_params

    shoot_params =params[:shoot]

    shoot_params ? shoot_params.permit(:user_id, :title, photos_attributes: [:title, :shoot_id, :category, :model, :shootdate, :admittance, photo: :image]) : {}

  end

  def shoot_scope
    Shoot.all
  end
end
