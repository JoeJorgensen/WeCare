require "rails/application_controller"

class StaticController < Rails::ApplicationController
  layout false

  def index
    render file: Rails.root.join("client","public", "index.html")
  end
end