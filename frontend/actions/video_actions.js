export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const FETCH_VIDEOS = "FETCH_VIDEOS";

export const fetchVideos = () => ({
  type: FETCH_VIDEOS
})

export const receiveVideos = videos => ({
  type: RECEIVE_VIDEOS,
  videos
})