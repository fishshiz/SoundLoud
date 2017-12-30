Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :artists, only: [:create, :index, :show, :update, :destroy] do
      resources :tracks, only: [:index, :show]
    end
    resource :session, only: [:create, :destroy]
    resources :upload, only: [:create] do
      post "payload_request", on: :collection
    end
    resources :tracks, only: [:create, :index, :show]
  end

  root "static_pages#root"
end
