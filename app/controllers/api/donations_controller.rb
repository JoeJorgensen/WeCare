class Api::DonationsController < ApplicationController
  before_action :set_donation, only: [:show,:update,:destroy]

  def index
    render json: Donation.all
  end

  def show
    render json: @donation
  end

  def create
    donation = Donation.new(donation_params)
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
    params.require(:donation).permit(:text, :amount, :anonymous, :user_id, :campaign_id)
  end  

  def set_donation
    @donation = donation.find(params[:id])
  end

end

