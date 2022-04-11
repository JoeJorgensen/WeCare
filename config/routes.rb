Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
<<<<<<< HEAD

  namespace :api do
    get 'campaigns/:id/donations', to: 'campaigns#index'
    post 'camapigns/:id/donations', to: 'campaings#create'
    get 'campaigns/:id/donations/:id', to: 'campaigns#show'
    put 'campaigns/:id/donations/:id', to: 'campaigns#update'
    delete 'campaigns/:id/donations/:id', to: 'campaigns#destroy'
  end

=======
  namespace :api do
    resources :campaigns
  end
>>>>>>> 411e56121fdd78da439a07dc59d0a7f0efade192
end
