class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :description 
      t.boolean :completed 
      t.integer :list_id
      t.datetime :date_completed 
      t.timestamps
    end
  end
end
