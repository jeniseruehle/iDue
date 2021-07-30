class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :duedate, :list_id, :list
end
