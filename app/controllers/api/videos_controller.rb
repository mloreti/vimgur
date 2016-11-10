class Api::VideosController < ApplicationController

  def index
    if params["sort"] == "new"
      @videos = Video.all.order(created_at: :desc).limit(20)
    elsif params[:search] && !params[:search].empty?
      @videos = Video.where([
          'title LIKE :query',
          {query: "%#{params[:search]}%"}
        ])
    else
      @videos = Video
      .joins('LEFT JOIN likes ON likes.video_id = videos.id')
      .order('likes')
      .limit(20)
    end
  end

  def show
    @video = Video.find(params[:id])
  end

	def create
		@video = Video.new(video_params)
    @video.user_id = current_user.id if current_user
    @video.set_data
		if @video.save
			render :show
		else
			render json: @video.errors.full_messages, status: 422
		end
	end

  def update
    @video = Video.find(params[:id])
    if @video.update(video_params)
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

	private

	def video_params
		params.require(:video).permit(:link_url, :title, :user_id, :embed_url, :thumbnail, :search)
	end

end
