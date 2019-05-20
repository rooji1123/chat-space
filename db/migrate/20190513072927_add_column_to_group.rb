class AddColumnToGroup < ActiveRecord::Migration[5.0]
  def change
    add_column :groups, :title, :string, null: false, unique: true
  end
end
