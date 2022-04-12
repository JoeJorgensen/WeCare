Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :categories 
    resources :campaign_categories
    resources :users
    resources :campaigns do
      resources :donations
      resources :updates
      end
      get '/donations', to: 'donations#index_of_all'
  end
end
