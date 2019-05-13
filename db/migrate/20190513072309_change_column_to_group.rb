class ChangeColumnToGroup < ActiveRecord::Migration[5.0]
  def change
     def up
      change_column :groups, :title, :string, null: false, unique: true
     end
  end
end
