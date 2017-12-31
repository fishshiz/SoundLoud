class Api::SearchController < ApplicationController
    def index
        @artists = Artist.top_three(search_params[:query])
        @tracks = Tracks.top_three(search_params[:query])
        render :index
    end

    def tracks_by_artist
        @tracks = Track.where(artist_id: search_params[:artist_id])
        render :tracks_by_artist
      end

    private
    def search_params
        params.require(:search).permit(:query, :artist_id, :track_id)
    end
end
