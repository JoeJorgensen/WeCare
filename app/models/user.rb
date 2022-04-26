class User < ActiveRecord::Base
  extend Devise::Models 

  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User


  has_many :campaigns, dependent: :destroy
  has_many :donations, dependent: :destroy

  def campaigns_by_user
    User.find_by_sql(['select *
    from campaigns
    where campaigns.user_id = ?', self.id])
  end

  def updates_by_campaign
    User.find_by_sql(['select campaigns.name as campaign_name, updates.comment, updates.image
    from campaigns
    inner join updates on updates.campaign_id = campaigns.id
    where campaigns.user_id = ?', self.id])
  end

end
