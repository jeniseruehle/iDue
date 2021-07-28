class ChangeDuedateToDatetime < ActiveRecord::Migration[6.0]
  def change
    def up
      change_column :items, :duedate, :datetime
    end
  
    def down
      change_column :items, :duedate, :date
    end
  end
end
