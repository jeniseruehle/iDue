class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :price, :duedate, :list_id, :list
end
