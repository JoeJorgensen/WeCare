class Api::DonationsController < ApplicationController
  before_action :authenticate_user!, only:[:user_donations]
  before_action :set_campaign, only: [:create, :index]
  before_action :set_donation, only: [:show,:update,:destroy]



  def index_of_all
    render json: Donation.all
  end

  def user_donations
    render json: Donation.user_donations(current_user.id)
  end

  def donation_by_user
    puts params[:id]
    # Needs to map over d and check key to see if it is image or name, and return regular value otherwise
    # donation = Donation.donation_by_user(params[:id].to_i)
    # mapped_donation = donation.map{|d| d.anonymous==true ?(  
    #   puts d.class
    #   d.to_hash each{|key, value|
    # if key=='name'
    #   value='anonymous'
    # elsif  key=='image'
    #   value=null
    # else
    #   value
    # end} 
    # ): d}
    # puts mapped_donation
    # render json: mapped_donation
    render json: Donation.donation_by_user(params[:id].to_i)
  end

  def user_with_campaigns
    render json: Donation.user_with_campaign
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

