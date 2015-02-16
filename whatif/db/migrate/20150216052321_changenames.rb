class Changenames < ActiveRecord::Migration
  def change
    rename_column :effects, :effects, :consequence
  end
end
