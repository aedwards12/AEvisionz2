class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  enum status: [ :admin, :client, :photographer ]
  has_many :shoots
  has_many :photos, through: :shoots
end
