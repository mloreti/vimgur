class Api::VideosController < ApplicationController

  def index
    @videos = Video.all
  end

  def show
    @video = Video.find(params[:id])
  end

	def create
		@video = Video.new(video_params)
    @video.user_id = current_user.id
    @video.set_data
		if @video.save
			render :show
		else
			render json: @video.errors.full_messages, status: 422
		end
	end

	private

	def video_params
		params.require(:video).permit(:link_url)
	end

end
