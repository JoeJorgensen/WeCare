class Api::UsersController < ApplicationController
  before_action :authenticate_user!, only: [:update_image, :update, :show, :destroy]
  

  def index
    render json: User.all
  end

  def show
    render json: current_user
  end

  def create
    user = User.new(user_params)
    if(user.save)
      render json: user
    else
      render json: {error:user.errors.full_messages}, status: 422
    end
  end

  def update
    if(current_user.update(user_params))
      render json: current_user
    else
      render json: {error:current_user.errors.full_messages}, status: 422
    end
  end

  def destroy
    render json: current_user.destroy
  end

  def update_image
     
    file = params[:fileYO]
   
    # CREATE AN IMAGE TO CLOUDINARY
    #check if we have a file, if we do try to save 
    if file 
        begin
            # try to save img (file) to cloudinary
            # if .env not setup correctly this will fail
            cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
            # binding.pry
            puts '===cloud_image==='
            puts cloud_image
            current_user.image = cloud_image['secure_url']
        rescue => e
            # image did not save to cloudinary
            render json: {errors:e}, status: 422
            # exit function for now
            return
        end
    
    end
    # STORE THE IMAGE URL FROM CLOUD TO OUR MODEL (TO OUR DB)
    # VIA UPDATING OUR USER, WE ALSO MIGTH WANT TO UPDAT OTHER 
    # FIELDS (name)IN THIS CASE
    if current_user.save
        render json: current_user
    else
        render json: {errors:current_user.errors.full_messages}, status: 422
    end
end

  private

 

  def user_params
    params.require(:user).permit(:name, :email, :password, :bio, :image)
  end

  
end
