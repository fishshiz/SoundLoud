class Api::FeatureController < ApplicationController
    def index
        @tracks = Track.featured()
        render :index
    end
end
