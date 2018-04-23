json.extract! playlist, :id, :title, :description, :artist_id
json.image_url asset_path(playlist.image.url)