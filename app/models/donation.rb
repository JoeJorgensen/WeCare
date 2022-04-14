class Donation < ApplicationRecord
  belongs_to :user
  belongs_to :campaign

  def self.user_donations(id)
    Donation.find_by_sql(['SELECT d.amount, d.comment, d.user_id, d.campaign_id, c.name
    FROM donations as d
    INNER JOIN campaigns as c ON d.campaign_id=c.id
    WHERE d.user_id=?', id])
  end

  def self.donation_by_user(id)
    Donation.find_by_sql(['SELECT campaign_id, donations.id, donations.user_id, comment, amount, u.name, u.image  FROM donations
    INNER JOIN users as u
    ON user_id = u.id 
    WHERE campaign_id = ?',id] )
  end

  
  def self.user_with_campaign
    Donation.find_by_sql (['SELECT donations.campaign_id, donations.user_id, donations.comment, campaigns.name AS campaign_name, users.name AS username, donations.amount
    FROM donations
    INNER JOIN campaigns ON campaigns.id=donations.campaign_id
    INNER JOIN users ON users.id=donations.user_id'])
  end
end
