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
    comment = Comment.find(params[:id])
    if comment
      comment.destroy
      @video = Video.find(comment_params[:video_id])
      render :show
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:id, :video_id, :body)
  end

end
