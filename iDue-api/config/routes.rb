Rails.application.routes.draw do
  resources :items, only: [:index, :create, :update, :destroy]
  resources :lists, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
