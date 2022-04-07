class CreateUpdates < ActiveRecord::Migration[6.1]
  def change
    create_table :updates do |t|
      t.text :comment
      t.string :img
      t.belongs_to :campaign, null: false, foreign_key: true

      t.timestamps
    end
  end
end
