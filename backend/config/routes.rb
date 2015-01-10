Rails.application.routes.draw do
  namespace :api do
    resources :tweets, only: :index
  end
end
