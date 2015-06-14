class AddColumnRoleAccessToPhotos < ActiveRecord::Migration
  def change

    add_column :photos, :admittance, :integer, default: 1
    add_column :photos, :rating, :integer, default: 0

  end
end
