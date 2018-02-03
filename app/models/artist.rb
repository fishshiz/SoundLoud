class Artist < ApplicationRecord
  validates :name, :session_token, :password_digest, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
    
  has_many :tracks
  has_many :comments, foreign_key: :author_id

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_token

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(email, password)
    artist = Artist.find_by(email: email)
    artist && artist.is_password?(password) ? artist : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def self.top_three(query)
    param = '%' + query.downcase + '%'
    Artist.where('lower(name) LIKE ?', param).limit(3)
  end

  private

  def ensure_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
