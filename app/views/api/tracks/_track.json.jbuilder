json.extract! track, :id, :title, :description, :artist_id
json.image_url asset_path(track.image.url)
json.audio_url asset_path(track.audio.url)