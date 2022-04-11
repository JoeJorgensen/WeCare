class Api::CampaignCategoriesController < ApplicationController
before_action :set_campaign_category, only: [:update]


    def index
        render json: CampaignCategory.all
    end
    def create
        @campaign_category  = CampaignCategory.new(campaign_category_params)
        if(@campaign_category.save)
            render json: @campaign_category
        else
            render json: error {@campaign_category.errors.full_messages}, status: 422
            end
        end



    
    def update
        if(@campaign_category.update(campaign_category_params))
            render json: @campaign_category 
        else
            render json: error {@campaign_category.errors.full_messages}, status: 422
            end
    end
    private


        # def set_campaign
        #     @campaign = Campaign.find(params(campaign_id))
        # end

        def set_campaign_category
            @campaign_category = CampaignCategory.find(params[:id])
        end

        def campaign_category_params
            params.require(:campaign_category).permit(:campaign_id, :category_id)
    end

end
