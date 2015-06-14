class CreateShoots < ActiveRecord::Migration
  def change
    create_table :shoots do |t|
      t.references :user
      t.string        :title
      t.timestamps
    end
  end
end
