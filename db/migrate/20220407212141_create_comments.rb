class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.text :input
      t.integer :likes
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :campaign, null: false, foreign_key: true

      t.timestamps
    end
  end
end
