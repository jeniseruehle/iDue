class ItemsController < ApplicationController
    def index
        items = Item.all.order_by_created_at
        render json: ItemSerializer.new(items)
    end

    def create
        item = Item.new(item_params)
        if item.save
            render json: ItemSerializer.new(item), status: :accepted
        end
    end

    def destroy
        item = Item.find_by(id: params[:id])
        item.delete
        render json: item
    end

    private

    def item_params
        params.require(:item).permit(:name, :description, :price, :duedate, :list_id)
    end
end