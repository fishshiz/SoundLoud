Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :artists, only: %i[create index show update destroy] do
      resources :tracks, only: %i[index show]
      resources :playlists, only: %i[index show]
    end
    resource :session, only: %i[create destroy]
    resources :upload, only: [:create] do
      post "payload_request", on: :collection
    end
    resources :tracks, only: %i[create index show update destroy] do
      resources :comments, only: %i[create index]
    end
    resources :comments, only: [:destroy]
    resources :search, only: [:index] do
      get "tracks_by_artist", on: :collection
    end
    resources :feature, only: [:index]
    resources :discussed, only: [:index]
    resources :playlists, only: %i[create index show update destroy]

  end

  root "static_pages#root"
end
