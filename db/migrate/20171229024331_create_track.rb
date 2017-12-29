class CreateTrack < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.integer :artist_id, null: false
      t.string :title, null: false
      t.text :description
    end
  end
end
