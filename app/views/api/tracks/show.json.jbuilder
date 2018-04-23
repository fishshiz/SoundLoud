artist = {}

json.track do
  json.partial! '/api/tracks/track', track: @track
  artist[@track.artist_id] = @track.artist
end

json.artist do
  json.partial! 'api/artists/artist', artist: artist[@track.artist_id]
end
ps=[]
json.current_artist_playlists do 
  @current_artist_playlists.each do |playlist|
    json.set! playlist.id do
      json.partial! 'api/playlists/playlist', playlist: playlist
      playlist_song = playlist.playlist_songs.select{|ps| ps.playlist_id == playlist.id}
      ps.push(playlist_song) if playlist_song != []
      end
    end
  end
  json.current_artist_playlist_songs do
    if ps != []
      ps.each do |section|
        section.each do |playlist_song|
          json.set! playlist_song.track_id do
            json.track_id playlist_song.track_id
            json.playlist_id playlist_song.playlist_id
            json.created_at playlist_song.created_at
          end
        end
      end
  end
end