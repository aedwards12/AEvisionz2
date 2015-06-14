class Shoot < ActiveRecord::Base
  has_many   :comments, as: :commentable
  has_many   :photos
  # has_many   :photos, through: :photo_shoots, source: :shoot_id
  accepts_nested_attributes_for :photos
  belongs_to :user
end
