class Api::VideosController < ApplicationController

  def index
    @videos = Video.all
  end

  def show
    @video = Video.find(params[:id])
  end

	def create
		@video = User.new(video_params)
		if @video.save
			render :show
		else
			render json: @video.errors.full_messages, status: 422
		end
	end

	private

	def video_params
		params.require(:video).permit(:title, :user_id, :link_url)
	end

end
