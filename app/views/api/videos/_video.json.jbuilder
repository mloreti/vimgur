json.merge! video.attributes
json.likes video.likes.length
json.liked video.user_likes
json.comments video.comments do |comment|
  json.id comment.id
  json.username comment.user.username
  json.body comment.body
  json.date comment.created_at
end
