class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(
      user_id: current_user.id,
      video_id: comment_params[:video_id],
      body: comment_params[:body]
    )
    if @comment.save
      @video = Video.find(comment_params[:video_id])
      render :show
    else
      render json: ["You must be logged in"], status: 422
    end
  end

  def destroy
    comment = Comment.find_by(
    user_id: current_user.id,
    video_id: comment_params[:video_id]
    )
    comment.destroy
    @video = Video.find(comment_params[:video_id])
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:video_id, :body)
  end

end
