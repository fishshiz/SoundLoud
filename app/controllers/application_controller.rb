class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_artist

  private
  def login!(artist)
    @current_artist = artist
    session[:session_token] = artist.reset_token!
  end

  def logout!
    @current_artist.reset_token!
    session[:session_token] = nil
    @current_artist = nil
  end

  def current_artist
    @current_artist ||= Artist.find_by(session_token: session[:session_token])
  end

  def require_login
    unless @current_artist
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end
end
