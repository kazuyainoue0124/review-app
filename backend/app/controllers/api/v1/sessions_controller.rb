class Api::V1::SessionsController < ApplicationController
  def create
    @user = User.find_by(email: session_params[:email])

    if @user&.authenticate(session_params[:password])
      login(@user)
      render json: { logged_in: true, user: @user }
    else
      render json: { status: 401, errors: ['ログインに失敗しました。'] }
    end
  end

  def destroy
    logout if logged_in?
    render json: { status: 200, logged_out: true }
  end

  private

  def session_params
    params.permit(:email, :password)
  end
end
