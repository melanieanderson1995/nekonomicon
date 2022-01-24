Rails.application.routes.draw do
  resources :cats
  resources :breeds
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"
  namespace :api do
    namespace :vi do
      resources :breeds
    end
  end
  get '*path', to: 'home#index', via: :all
end
