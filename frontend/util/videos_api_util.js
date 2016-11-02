export const fetchVideos = success => {
  $.ajax({
    url: "api/videos",
    success
  })
}
