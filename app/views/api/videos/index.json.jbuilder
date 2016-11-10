@videos.each do |video|
  json.set! video.custom_key do
    json.partial! "api/videos/video", video: video
  end
end
