@artists.each do |artist|
  json.set! artist.id do
    json.set! :type, 'artist'
    json.partial! 'api/artists/artist', artist: artist
  end
end

@tracks.each do |track|
  json.set! track.id do
    json.set! :type, 'track'
    json.partial! 'api/tracks/track', track: track
  end
end
