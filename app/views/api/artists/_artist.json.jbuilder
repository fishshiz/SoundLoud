json.extract! artist, :id, :name, :email, :bio
json.image_url asset_path(artist.image.url)