class CampaignCategory < ApplicationRecord
  belongs_to :campaign
  belongs_to :category
end
