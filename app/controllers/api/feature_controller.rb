class Api::FeatureController < ApplicationController
    def index
        @featured_tracks = Track.featured()
        track_ids = @featured_tracks.map { |track| track.artist_id }
        @featured_artists = Artist.select { |artist| track_ids.include?(artist.id) }
        render :index
    end
end
