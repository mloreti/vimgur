export const addLike = (like, success, error) => {
  $.ajax({
    url: "/api/likes",
    type: "POST",
    data: {like},
    success,
    error
  })
}

export const removeLike = (like, success, error) => {
  $.ajax({
    url: "/api/likes",
    type: "DELETE",
    data: {like},
    success,
    error
  })
}
