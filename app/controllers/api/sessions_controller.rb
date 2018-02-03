class Api::SessionsController < ApplicationController
    
  def create
    @artist = Artist.find_by_credentials(params[:artist][:email], params[:artist][:password])

    if @artist
      login!(@artist)
      render :show
    else
      render json: ['Iinvalid email or password'], status: 422
    end
  end

  def destroy
    @artist = current_artist

    if @artist
      logout!
      render :show
    else
      render json: ['Must Sign in'], status: 404
    end
  end
    
end
