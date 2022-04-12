class Api::DonationsController < ApplicationController
  before_action :set_campaign, only: [:create, :index]
  before_action :set_donation, only: [:show,:update,:destroy]

  def index_of_all
    render json: Donation.all
  end

  def index
    render json: @campaign.donations.all
  end

  def show
    render json: @donation
  end

  def create
    donation = @campaign.donations.new(donation_params)
    if donation.save
      render json: donation
    else
      render json: {errors: donation.errors.full_messages}, status: 422
    end
  end

  def update
    if @donation.update(donation_params)
      render json: @donation
    else
      render json: {errors: @donation.errors.full_messages}, status: 422
    end
  end

  def destroy
    render json: @donation.destroy
  end

  private 

  def donation_params
    params.require(:donation).permit(:comment, :amount, :anonymous, :user_id, :campaign_id)
  end  

  def set_campaign
    @campaign = Campaign.find(params[:campaign_id])
  end

  def set_donation
    @donation = Donation.find(params[:id])
  end

end

