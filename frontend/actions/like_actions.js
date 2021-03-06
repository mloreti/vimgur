export const ADD_LIKE = "ADD_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";
export const RECEIVE_LIKE_VIDEO = "RECEIVE_LIKE_VIDEO";

export const addLike = like => ({
  type: ADD_LIKE,
  like
})

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
})

export const receiveLikeErrors = errors => ({
  type: RECEIVE_LIKE_ERRORS,
  errors
});

export const receiveLikeVideo = video => ({
  type: RECEIVE_LIKE_VIDEO,
  video
})
