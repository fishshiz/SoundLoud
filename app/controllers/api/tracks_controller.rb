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
        @track = Track.find_by(id: params[:id])
        if @track
            render :show
        else
            render json: ['Track not found'], status: 422
        end
    end

    def index
        @tracks = Track.select { |track| track.artist_id == params[:artist_id] }
        render :index
    end

    def update
        @track = Track.find_by(id: params[:id])
        if @track
            @track.play_count += 1
            @track.save!
            render :show
        else
            render json: @track.errors.full_messages, status: 422
        end
      end

    private

    def track_params
        params.require(:track).permit(:title, :description, :audio, :image)
    end
end
