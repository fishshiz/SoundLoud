Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :artists, only: [:create, :index, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :upload, only: [:create] do
      post "payload_request", on: :collection
    end
  end

  root "static_pages#root"
end
