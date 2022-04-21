class Api::CampaignsController < ApplicationController

  #defines the CRUD actions before using them
  before_action :set_campaign, only: [:show, :destroy, :update]

  def order_by_expd
    render json: Campaign.order(:expiration)
  end

   #finds all Campaigns in DB
  def index
  render json: Campaign.all
  end

  #finds specific Campaign in DB
  def show 
  render json: @campaign
  end

  #creates a Campaign in DB
  def create 
    campaign = Campaign.new(campaign_params)
    file = params[:file]
    # binding.pry
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
            campaign.image = cloud_image['secure_url']
        rescue => e
            # image did not save to cloudinary
            render json: {errors:e}, status: 422
            # exit function for now
            return
        end
      end
    if(campaign.save)
      render json: campaign
    else
      render json: {errors: campaign.errors.full_messages}, status: 422
    end
end

#updates a Campaign in DB (edit)
def update 
  if(@campaign.update(campaign_params))
    render json: @campaign
  else
    render json: {errors: @campaign.errors.full_messages}, status: 422
 end
end

#deletes a Campaign in DB
def destroy 
  render json: @campaign.destroy
end

private
#function that allows @campaign to find specific campign
def set_campaign
    @campaign = Campaign.find(params[:id])
end

def campaign_params
  params.permit(:name, :description, :image, :goal, :expiration, :user_id, :current_amount)
end

end