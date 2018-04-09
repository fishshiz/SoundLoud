class AddDescriptionToPlaylists < ActiveRecord::Migration[5.1]
  def change
    add_column :playlists, :description, :text, default: '', null: false
  end
end
