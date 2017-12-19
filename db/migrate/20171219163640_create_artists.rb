class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.text :bio, default: '', null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false

      t.timestamps
    end

    add_index :artists, :email, unique: true
    add_index :artists, :session_token
  end
end
