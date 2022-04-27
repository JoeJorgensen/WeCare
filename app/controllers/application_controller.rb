class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken
        before_action :configure_permitted_parameters, if: :devise_controller?

        protected

        def configure_permitted_parameters
                updated_attrib = []
                added_attrib = [:name]
                devise_parameter_sanitizer.permit :sign_up, keys: added_attrib
                devise_parameter_sanitizer.permit :account_update, keys: updated_attrib
        end
end
