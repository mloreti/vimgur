export const fetchCurrentUser = id => {
  $.ajax({
    url: `api/users/${id}`,
    success
  })
}
