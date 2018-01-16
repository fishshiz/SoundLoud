class CreateCommentCounts < ActiveRecord::Migration[5.1]
  def change
    create_table :comment_counts do |t|
      t.integer :track_id, null: false
      t.integer :comment_count, null: false, default: 0

      t.timestamps
    end

    add_index :comment_counts, :track_id
    add_index :comment_counts, :comment_count
  end
end
