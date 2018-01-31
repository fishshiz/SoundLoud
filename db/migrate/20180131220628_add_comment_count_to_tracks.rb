class AddCommentCountToTracks < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :comment_count, :integer, default: 0, null: false

    # Update the counter for existing records
    Track.find_each do |result|
      Track.reset_counters(result.id, :comments)
    end
  end
end
