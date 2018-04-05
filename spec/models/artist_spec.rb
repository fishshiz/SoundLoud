require 'rails_helper'

RSpec.describe Artist do
  subject(:artist) { build(:artist) }
  describe 'validations and associations' do 
    it { should have_many(:tracks) }
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:email) }
  end
end