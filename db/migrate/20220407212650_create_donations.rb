class CreateDonations < ActiveRecord::Migration[6.1]
  def change
    create_table :donations do |t|
      t.text :comment
      t.float :amount
      t.boolean :anonymous
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :campaign, null: false, foreign_key: true

      t.timestamps
    end
  end
end
