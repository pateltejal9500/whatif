class MoveEmotions < ActiveRecord::Migration
  def change
  drop_table :emotions
  remove_column :effects, :emotion_id, :integer
  add_column :effects, :emotion, :string
    
  end
end
