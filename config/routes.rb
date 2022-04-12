Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
<<<<<<< HEAD
    resources :categories
=======
    resources :categories 
>>>>>>> a73b81cf364d5ff24e3604d76de94acd6d3d46ba
    resources :campaign_categories
    resources :users
    resources :campaigns do
      resources :donations
      resources :updates
      end
      get '/donations', to: 'donations#index_of_all'
  end
<<<<<<< HEAD
end
=======

end
>>>>>>> a73b81cf364d5ff24e3604d76de94acd6d3d46ba
