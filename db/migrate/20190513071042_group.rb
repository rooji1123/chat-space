class Group < ActiveRecord::Migration[5.0]
  def change
    change_column_null :groups, :title, false
  end
end
