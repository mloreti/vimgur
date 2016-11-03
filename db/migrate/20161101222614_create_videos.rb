class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :link_url, null:false
      t.integer :likes, default: 0
      t.integer :user_id 
      t.string :thumbnail, null: false
      t.string :embed_url, null: false
      t.timestamps null: false
    end
    add_index :videos, :user_id
  end
end
