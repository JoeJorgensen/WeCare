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
      put '/update_image', to: 'users#update_image'
      get '/user_donations', to: 'donations#user_donations'
      get '/order_by_expd', to: 'campaigns#order_by_expd'
      get '/user_donations', to:'donations#user_donations'
      get '/user_with_campaigns', to: 'donations#user_with_campaigns'
  end
  get '*other', to: 'static#index'
end
