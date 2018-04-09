class Api::PlaylistsController < ApplicationController
  def create
    @playlist = Playlist.new(playlist_params)

    @playlist.artist_id = current_artist.id
        if @playlist.save
            render :show
        else
            render @playlist.errors.full_messages, status: 422
        end        
    end

    def show
        @playlist = Playlist.find_by(id: params[:id])
        if @playlist
            render :show
        else
            render json: ["Playlist not found"], status: 404
        end
    end

    def index
        @playlists = Playlist.includes(:artist)
        render :index
    end

    def update
        @playlist = Playlist.find_by(id: params[:id])
      
        if @playlist.update_attributes(update_params)
            render 'api/playlists/show'
            render :playlist
        else
            render json: @playlist.errors.full_messages, status: 422
        end
    end

    def destroy
        @playlist = current_artist.playlists.find(params[:id])
        @playlist.destroy!
        render :playlist
    end

    private

    def playlist_params
        params.require(:playlist).permit(:title, :description, :image)
    end
end
