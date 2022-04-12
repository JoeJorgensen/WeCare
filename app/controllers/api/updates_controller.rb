class Api::UpdatesController < ApplicationController
     #defines the CRUD actions before using them
     before_action :set_campaign, only: [:index]
     before_action :set_update,  only: [:show, :destroy, :update]

     #finds all Updates in DB
    def index
    render json: @campaign.updates.all
    end

    #finds specific Update in DB
    def show 
    render json: @update
    end
  
    #creates a Update in DB
    def create 
      update = Update.new(update_params)
      if(update.save)
        render json: update
      else
        render json: {errors: update.errors.full_messages}, status: 422
      end
  end
  
  #updates a Update in DB (edit) (needs work)
  def update 
    if(@update.update(update_params))
      render json: @update
    else
      render json: {errors: @update.errors.full_messages}, status: 422
   end
  end
  
  #deletes a Update in DB
  def destroy 
    render json: @update.destroy
  end
  
  private
  #function that allows @update to find specific campign
  def set_update
      @update = Update.find(params[:id])
  end
  
  def set_campaign
    @campaign = Campaign.find(params[:campaign_id])
  end
  
  def update_params
    params.require(:update).permit(:comment, :image, :campaign_id)
  end
  
end
