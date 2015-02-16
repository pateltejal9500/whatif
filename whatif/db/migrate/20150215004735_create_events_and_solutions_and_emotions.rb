class CreateEventsAndSolutionsAndEmotions < ActiveRecord::Migration

 def change
    create_table :events do |t|
      t.string :description
      t.integer :probability
      t.integer :impact
      t.string :affect
      t.boolean :accept 
    end
 
    create_table :solutions do |t|
      t.string :description
      t.integer :probability 
    end

 create_table :emotions do |t|
      t.string :name
     
    end

    create_table :events_emotions, id: false do |t|
      t.belongs_to :event
      t.belongs_to :emotion
    end

     create_table :events_solutions, id: false do |t|
      t.belongs_to :event
      t.belongs_to :solution
    end
  end
  
end
