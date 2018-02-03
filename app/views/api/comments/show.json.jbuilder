json.comment do 
  json.partial! 'api/comments/comment', comment: @comment
end

json.author do
  json.partial! 'api/artists/artist', artist: current_artist
end