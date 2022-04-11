class Api::DonationsController < ApplicationController
  before_action :set_campaign, only: [:show,:update,:destroy]

  def index
    render json: Campaign.all
  end

  def show
    render json: @campaign
  end

  def create
    campaign = Campaign.new(campaign_params)
    if campaign.save
      render json: campaign
    else
      render json: {errors: campaign.errors.full_messages}, status: 422
    end
  end

  def update
    if @campaign.update(campaign_params)
      render json: @campaign
    else
      render json: {errors: @campaign.errors.full_messages}, status: 422
    end
  end

  def destroy
    render json: @campaign.destroy
  end

  private 

  def campaign_params
    params.require(:campaign).permit(:name, :age)
  end  

  def set_campaign
    @campaign = Campaign.find(params[:id])
  end

end

