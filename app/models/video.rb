require 'net/http'
require 'json'

class Video < ActiveRecord::Base
  validates :title, :link_url, :user_id, presence: true

  def set_data
    url = "https://vimeo.com/api/oembed.json?url=#{self.link_url}"
    uri = URI(url)
    response = Net::HTTP.get(uri)
    data = JSON.parse(response)
    self.title = data["title"]
    self
  end

end
