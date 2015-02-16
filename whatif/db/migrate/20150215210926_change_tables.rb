class ChangeTables < ActiveRecord::Migration
  def change
    remove_column :events, :affect, :string
    add_column :events, :name, :string
    add_column :events_emotions, :effects, :string
  end
end
