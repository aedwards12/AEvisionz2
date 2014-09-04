class AddColumnToPhotos < ActiveRecord::Migration
  def change
  	add_column :photos, :category, :string
  	add_column :photos, :model, :string
  	add_column :photos, :shootdate, :date
  	
  end
end
