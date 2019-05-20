class RemoveDateToMessages < ActiveRecord::Migration[5.0]
  def change
    remove_column :messages, :date, :string
  end
end
