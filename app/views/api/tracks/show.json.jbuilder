artist = {}

json.track do
  json.partial! '/api/tracks/track', track: @track
  artist[@track.artist_id] = @track.artist
end

json.artist do
  json.partial! 'api/artists/artist', artist: artist[@track.artist_id]
end