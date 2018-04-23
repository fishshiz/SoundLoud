class Playlist < ApplicationRecord
    validates :title, presence: true

    has_attached_file :image, default_url: "missing_track.png"
    validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

    belongs_to :artist
    has_many :playlist_songs
    has_many :tracks, through: :playlist_songs
end
