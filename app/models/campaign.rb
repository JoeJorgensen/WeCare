class Campaign < ApplicationRecord
  belongs_to :user
  has_many :donations, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :updates, dependent: :destroy
  has_many :campaign_categories, dependent: :destroy
  has_many :categories, through: :campaign_categories, dependent: :destroy
  has_many :users, through: :donations, dependent: :destroy

  # def self.expiration_date
  #   select(name, description, image, expiration, current_amount, goal)
  #   .from(campaigns)
  #   .order_by(expiration)
  # end
end