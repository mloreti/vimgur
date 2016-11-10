require 'net/http'
require 'json'

class Video < ActiveRecord::Base
  validates :title, :link_url, :embed_url, :thumbnail, presence: true

  has_many :likes
  has_many :user_likes,
    through: :likes,
    source: :user
  has_many :comments

  def set_data
    url = "https://vimeo.com/api/oembed.json?url=#{self.link_url}&autoplay=true&autoplay=true"
    uri = URI(url)
    response = Net::HTTP.get(uri)
    data = JSON.parse(response)
    self.title = data["title"]
    self.embed_url = data["html"]
    self.thumbnail = data["thumbnail_url"]
    self
  end

  def custom_key
    "#{self.likes.count}-#{self.id}"
  end

end
