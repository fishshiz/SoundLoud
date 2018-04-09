json.playlist do 
  json.partial! 'api/playlists/playlist', playlist: @playlist
end

json.artist do
  json.partial! 'api/artists/artist', artist: current_artist
end