artists = {}

json.playlists do
  @playlists.each do |playlist|
    json.set! playlist.id do
      json.partial! '/api/playlists/playlist', playlist: playlist
    end

    artists[playlist.artist_id] = playlist.artist
  end
end

json.artists do
  artists.each do |key, artist|
    json.set! key do
      json.partial! 'api/artists/artist', artist: artist
    end
  end
end