module Api
  class ListsController < ApplicationController
    before_action :set_list, only: [:show, :update, :destroy]

    # GET /lists
    def index
      @lists = User.find(params[:user_id]).lists

      render json: @lists
    end

    # GET /lists/1
    def show
      render json: @list
    end

    # POST /lists
    def create
      @list = List.new(list_params)

      if @list.save
        render json: @list
      else 
        render(status: 404)
      end
    end

    # PATCH/PUT /lists/1
    def update
      if @list.update(list_params)
          render json: @list
      else 
          render(status: 404)
      end
    end

    # DELETE /lists/1
    def destroy
      @list.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_list
        @list = List.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def list_params
        params.require(:list).permit(:title, :description, :user_id)
      end
  end
end
