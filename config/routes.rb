Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    get 'campaigns/:id/donations', to: 'campaigns#index'
    post 'camapigns/:id/donations', to: 'campaings#create'
    get 'campaigns/:id/donations/:id', to: 'campaigns#show'
    put 'campaigns/:id/donations/:id', to: 'campaigns#update'
    delete 'campaigns/:id/donations/:id', to: 'campaigns#destroy'
  end

end
