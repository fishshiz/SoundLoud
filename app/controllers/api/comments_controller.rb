class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_artist.id
    @comment.track_id = params[:track_id]

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy!
    render :show
  end

  def index
    track_id = params[:track_id].to_i
    @track = Track.find(track_id)
    if @track
      @comments = @track.comments.includes(:author).order("created_at DESC")
      render :index
    else
      render json: ["Track not found"], status: 404
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
