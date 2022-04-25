class User < ActiveRecord::Base
  extend Devise::Models 

  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User


  has_many :campaigns, dependent: :destroy
  has_many :donations, dependent: :destroy

  def campaign_updates
    User.find_by_sql(['select users.id, campaigns.name, campaigns.description, campaigns.image, campaigns.current_amount, campaigns.goal, campaigns.expiration
    from campaigns
    INNER JOIN updates ON campaigns.id = updates.campaign_id
    INNER JOIN users ON users.id = campaigns.user_id
    WHERE users.id = ?', self.id])
  end
end
