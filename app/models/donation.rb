class Donation < ApplicationRecord
  belongs_to :user
  belongs_to :campaign

  def self.user_donations(id)
    Donation.find_by_sql(['SELECT d.comment, d.user_id, d.campaign_id, c.name
    FROM donations as d
    INNER JOIN campaigns as c ON d.campaign_id=c.id
    WHERE d.user_id=?', id])
  end
end
