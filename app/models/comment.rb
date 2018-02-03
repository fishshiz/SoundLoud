class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :author,
             foreign_key: :author_id,
             class_name: :Artist

  belongs_to :track, counter_cache: :comment_count
end
