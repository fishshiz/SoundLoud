FactoryBot.define do
  factory :artist do
    name "Johnny Appleseed"
    email "japples@soundloud.com"
    bio "I like apples"
    password_digest "$2a$10$VcMWUQPL0M81JEDwZOrx2.0aQuyBsAQ1IQPXUbmmPAV3vQ4s89yK2"
    session_token 'O8fDG4NKQqiBu-ED8nkvkQ'
  end
end