class ChangeTablesAgainAgain < ActiveRecord::Migration
  def change
     rename_table :events_emotions, :effects
  end
end
