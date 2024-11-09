class UsersController < ApplicationController
  def show
    @user = User.find_by(email: params[:id])
  end
end
