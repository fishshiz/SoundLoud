class Track < ApplicationRecord
    validates :title, presence: true

    has_attached_file :image, default_url: "missing_track.png"
    validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

    has_attached_file :audio
    validates_attachment_content_type :audio, :content_type => [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio']

    belongs_to :artist

    def self.top_three(query)
        param = '%' + query_param.downcase + '%'
        Track.where('lower(name) LIKE ?', param).limit(3)
    end
end
