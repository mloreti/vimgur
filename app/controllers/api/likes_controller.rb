class Api::LikesController < ApplicationController

  before_action :require_logged_in

  def show
    @video = Video.find(like_params[:video_id])
  end

  def create
    like = Like.new(
      user_id: current_user.id,
      video_id: like_params[:video_id]
    )
    if like.save
      @video = Video.find(like_params[:video_id])
      render :show
    else
      render json: ["You must be logged in"], status: 422
    end
  end

  def destroy
    like = Like.find_by(
    user_id: current_user.id,
    video_id: like_params[:video_id]
    )
    like.destroy
    @video = Video.find(like_params[:video_id])
    render :show
  end

  private

  def like_params
    params.require(:like).permit(:video_id)
  end

end
