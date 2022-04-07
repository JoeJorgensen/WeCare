class CreateCampaigns < ActiveRecord::Migration[6.1]
  def change
    create_table :campaigns do |t|
      t.string :name
      t.text :description
      t.string :img
      t.float :current_amount
      t.float :goal
      t.datetime :expiration
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
