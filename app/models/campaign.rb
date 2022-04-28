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

  def self.expiration_over_50
    Campaign.find_by_sql(["SELECT *
    FROM campaigns
    ORDER BY current_amount / goal"])
  end 

  def self.campaign_plus_categories(id)
    Campaign.find_by_sql(['select c.id, c.name, c.image, c.description, c.current_amount, c.goal, categories.name as category_name
    from campaigns as c
    inner join campaign_categories on c.id = campaign_categories.campaign_id
    inner join categories on campaign_categories.id = categories.id
    where c.id = ?', id])
  end

end