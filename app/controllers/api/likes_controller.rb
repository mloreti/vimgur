class Api::LikesController < ApplicationController

  before_action :require_logged_in

  def create
    like = Like.new(
      user_id: current_user.id,
      video_id: like_params[:video_id]
    )
    if like.save
      render json: {
        user_id: current_user.id,
        video_id: like_params[:video_id]
        }, status: 200
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
    render json: {
      user_id: current_user.id,
      video_id: like_params[:video_id]
      }, status: 200
  end

  private

  def like_params
    params.require(:like).permit(:video_id)
  end

end
