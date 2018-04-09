class AddArtistIdToPlaylists < ActiveRecord::Migration[5.1]
  def change
    add_column :playlists, :artist_id, :integer, null: false
  end
end
