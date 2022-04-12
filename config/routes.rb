Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
<<<<<<< HEAD
    resources :categories 
=======
<<<<<<< HEAD
    resources :categories
=======
    resources :categories 
>>>>>>> a73b81cf364d5ff24e3604d76de94acd6d3d46ba
>>>>>>> de169c5bad8d371f5e0eba9b245e0a46f8d2fdbc
    resources :campaign_categories
    resources :users
    resources :campaigns do
      resources :donations
      resources :updates
      end
      get '/donations', to: 'donations#index_of_all'
  end
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> de169c5bad8d371f5e0eba9b245e0a46f8d2fdbc
end
=======

end
>>>>>>> a73b81cf364d5ff24e3604d76de94acd6d3d46ba
