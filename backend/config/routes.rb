Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :destroy]
    end
  end
  namespace :api do
    namespace :v1 do
      resources :sessions, only: [:create, :destroy]
    end
  end
end
