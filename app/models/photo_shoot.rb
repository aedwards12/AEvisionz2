class PhotoShoot < ActiveRecord::Base
  belongs_to :photo
  belongs_to :shoot
end
