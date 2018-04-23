json.playlist do 
  json.partial! 'api/playlists/playlist', playlist: @playlist
 
end
artists = []
ps = []
p "playlist tracks --->  #{@playlist.tracks}"
json.tracks do
  json.array!(@playlist.tracks) do |track|
    p "track --->  #{track}"
    json.partial! 'api/tracks/track', track: track
    artists.push(track.artist) unless artists.include?(track.artist)
    playlist_song = track.playlist_songs.select{|ps| ps.playlist_id == @playlist.id}[0]
    ps.push(playlist_song)
  end
  p ps
end
json.artists do
  json.array!(artists) do |artist|
  json.partial! 'api/artists/artist', artist: artist
end
end

json.playlist_songs do
  ps.each do |playlist_song|
    json.set! playlist_song.track_id do
      json.track_id playlist_song.track_id
      json.playlist_id playlist_song.playlist_id
      json.created_at playlist_song.created_at
    end
  end
end