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
    User.find_by_sql(['select updates.campaign_id, updates.id, campaigns.name as campaign_name, updates.comment, updates.image, updates.created_at
    from campaigns
    inner join updates on updates.campaign_id = campaigns.id
    where campaigns.user_id = ?', self.id])
  end

  def users_campaigns_donated_to
    User.find_by_sql (['SELECT d.user_id, d.campaign_id, d.id as donation_id, d.amount, c.name, u.name as user_name, u.image, c.image as campaign_image, d.comment, d.created_at
    FROM donations as d
    INNER JOIN campaigns AS c ON d.campaign_id = c.id
    INNER JOIN users AS u ON d.user_id = u.id
    WHERE d.user_id = ?', self.id])
  end

  def user_filtered
    User.find_by_sql (['SELECT u.bio, u.image, u.name, u.id
    FROM users as u
    WHERE u.id = ?', self.id])
  end

end
