class Category < ApplicationRecord
  has_many :campaign_categories, dependent: :destroy
  has_many :campaigns, through: :campaign_categories, dependent: :destroy
end