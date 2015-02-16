class ChangeTablesAgain < ActiveRecord::Migration
  def change
    drop_table :events_solutions
    add_column :solutions, :event_id, :integer
  end
end
