class Item < ApplicationRecord
    belongs_to :list
    
    # validates :name, :description, presence: true
    scope :order_by_created_at, ->{order("created_at DESC")}
end
