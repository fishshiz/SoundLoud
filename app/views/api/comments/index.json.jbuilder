authors = {}

json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
    end

    authors[comment.author_id] = comment.author
  end
end

json.authors do
  authors.each do |key, artist|
    json.set! key do
      json.partial! 'api/artists/artist', artist: artist
    end
  end
end