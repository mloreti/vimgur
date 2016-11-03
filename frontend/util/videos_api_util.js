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
