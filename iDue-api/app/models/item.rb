class Item < ApplicationRecord
    belongs_to :list
    
    scope :order_by_duedate, ->{order("items.duedate")}
end
