class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string :title, :member_id
      t.timestamps
    end
  end
end
