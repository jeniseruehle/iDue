class ListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :items
end
