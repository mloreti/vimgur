class Video < ActiveRecord::Base
  validates :title, :link_url, :user_id, presence: true
end
