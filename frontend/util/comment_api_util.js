export const addComment = (comment, success) => {
  $.ajax({
    url: "/api/comments",
    type: "POST",
    data: {comment},
    success,
    error: (data) => console.log(data)
  })
}

export const removeComment = (comment, success) => {
  $.ajax({
    url: `/api/comments/${comment.id}`,
    type: "DELETE",
    data: {comment},
    success
  })
}
