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

    def show
        @artist = Artist.find_by(id: params[:id])
        if @artist
            render :show
        else
            render json: ["Artist not found."], status: 404
        end
    end

    private
    
    def artist_params
        params.require(:artist).permit(:name, :email, :password)
    end

end
