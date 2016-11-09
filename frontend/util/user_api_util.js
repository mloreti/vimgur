export const fetchCurrentUser = (id, success) => {
  $.ajax({
    url: `api/users/${id}`,
    success
  })
}
