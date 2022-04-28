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
      get '/braintree_token', to: 'braintree#token'
      post '/payment', to: 'braintree#payment'
      get '/user_donations', to: 'donations#user_donations'
      get '/order_by_expd', to: 'campaigns#order_by_expd'
      get 'user_donations', to:'donations#user_donations'
      get '/donation_by_user/:id', to:'donations#donation_by_user'
      get '/expiration_over_50', to: 'campaigns#campaign_expiration_over_50'
      get '/user_donations', to:'donations#user_donations'
      get '/user_with_campaigns', to: 'donations#user_with_campaigns'
      get '/campaigns_by_user', to: 'users#campaigns_by_user'
      get '/updates_by_campaign', to: 'users#updates_by_campaign'
      get '/users_campaigns_donated_to/:id', to: 'users#users_campaigns_donated_to'
      get '/campaign_plus_categories/:id', to: 'campaigns#campaign_plus_categories'
  end
  get '*other', to: 'static#index'
end
