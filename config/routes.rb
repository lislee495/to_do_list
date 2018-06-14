Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 
      resources :users
      resources :lists
      resources :items
      post "/login", to: "sessions#create"
      get "/current_user", to: "sessions#curr_user"
      post "/signup", to: "user#new"
      delete "/logout", to: "sessions#destroy"
    end 
  end 
end
