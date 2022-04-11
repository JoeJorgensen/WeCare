class Api::CampaignCategoriesController < ApplicationController
before_action :set_campaign, only: [:show, :update, :destroy]

    def create
        @category = Campaign_category.new(campaign_category)
        if(@category.save)
            render json: @category
        else
            render json: error {@category.errors.full_messages}, status: 422
            end
        end



    # def update
    #     if(@category.update(campaign_category_params))
    #         render json: @category
    #     else
    #         render json: error {@category.errors.full_messages}, status: 422
    #         end
    #     end
    # end
    private


        def set_campaign
            @campaign = Campaign.find(params(campaign_id))
        end

        def campaign_category_params
            params.require(:campaign_category).permit(:campaign_id, :category_id)
    end

end
