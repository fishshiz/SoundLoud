class Api::SearchController < ApplicationController
  def index
    @artists = Artist.top_three(search_params[:query])
    @tracks = Track.top_three(search_params[:query])
    render :index
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end
end
