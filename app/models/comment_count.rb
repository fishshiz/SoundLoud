class CommentCount < ApplicationRecord
    belongs_to :track

    def self.most_discussed()
        CommentCount.includes(:track).order('comment_count DESC').limit(8)
    end
end
