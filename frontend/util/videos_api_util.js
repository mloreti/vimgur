export const fetchVideos = success => {
  $.ajax({
    url: "api/videos",
    success
  })
}

export const fetchVideo = (id, success) => {
  $.ajax({
    url: `api/videos/${id}`,
    success
  })
}

export const createVideo = (link_url, success) => {
  $.ajax({
    url: "api/videos",
    type: "POST",
    data: {video: {link_url}},
    success
  })
}

export const updateVideo = (video, success) => {
  $.ajax({
    url: `api/videos/${video.id}`,
    type: "PATCH",
    data: {video},
    success
  })
}

export const fetchBestVideos = success => {
  $.ajax({
    url: "api/videos?sort=best",
    success
  })
}

export const fetchNewVideos = success => {
  $.ajax({
    url: "api/videos?sort=new",
    success
  })
}
