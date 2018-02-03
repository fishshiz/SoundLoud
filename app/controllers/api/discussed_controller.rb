class Api::DiscussedController < ApplicationController
  def index
    @discussed_tracks = Track.most_discussed
    track_ids = @discussed_tracks.map(&:artist_id)
    @discussed_artists = Artist.select { |artist| track_ids.include?(artist.id) }
    render :index
  end
end
