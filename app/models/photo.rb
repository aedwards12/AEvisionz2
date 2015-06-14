class Photo < ActiveRecord::Base
  dragonfly_accessor :image
  has_many :comments, as: :commentable
  belongs_to :shoot
  enum admittance: ["open", "closed" ]
  enum rating: ['0', '1', '2', '3', '4',  '5']
end
