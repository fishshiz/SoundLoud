class Api::ArtistsController < ApplicationController
  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      login!(@artist)
      render 'api/sessions/show'
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def index(ids)
    @artists = Artist.where('id LIKE ?', ids)
    if @current_artist
      @current_artist_playlists = current_artist.playlists
    end
    render :index
  end

  def show    
    if current_artist
      @current_artist_playlists = current_artist.playlists
    end
    @artist = Artist.find_by(id: params[:id])
    if @artist
      render :show
    else
      render json: ["Artist not found."], status: 404
    end
  end

  def update
    @artist = current_artist
    if @artist.update_attributes(update_params)
      render 'api/artists/show'
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  private
    
  def artist_params
    params.require(:artist).permit(:name, :email, :password)
  end

  def update_params
    params.require(:artist).permit(:bio, :image)
  end

end
