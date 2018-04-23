class Api::TracksController < ApplicationController

  def create
    @track = Track.new(track_params)
    @track.artist_id = current_artist.id
    if @track.save
      render :show
    else
      render @track.errors.full_messages, status: 422
    end        
  end

  def show
    @current_artist_playlists = current_artist.playlists
    @track = Track.find_by(id: params[:id])
    if @track
      render :show
    else
      render json: ["Track not found"], status: 404
    end
  end

  def index
    @tracks = Track.includes(:artist)
    render :index
  end

  def update
    @track = Track.find_by(id: params[:id])
      
    if @track && params[:play_count_inc]
      @track.play_count += 1
      @track.save!
      render :track
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = current_artist.tracks.find(params[:id])
    @track.destroy!
    render :track
  end

  private

  def track_params
    params.require(:track).permit(:title, :description, :audio, :image)
  end
end
