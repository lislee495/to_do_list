Rails.application.routes.draw do
  namespace :api do 
      resources :users do 
        resources :lists do 
          resources :items
        end 
      end
      
      post "/login", to: "sessions#create"
      get "/current_user", to: "sessions#curr_user"
      post "/signup", to: "users#new"
      delete "/logout", to: "sessions#destroy"
  end 
end
