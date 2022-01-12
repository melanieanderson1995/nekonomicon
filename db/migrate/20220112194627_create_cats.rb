class CreateCats < ActiveRecord::Migration[6.1]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :age
      t.string :gender
      t.string :image_url
      t.belongs_to :breed, null: false, foreign_key: true

      t.timestamps
    end
  end
end
