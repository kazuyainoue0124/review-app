require 'rails_helper'

RSpec.describe 'Api::V1::Sessions', type: :request do
  before do
    create(:user, user_name: '山田太郎', email: 'taro@example.com', password: 'password', password_confirmation: 'password')
    session_params = { email: 'taro@example.com', password: 'password' }
    post '/api/v1/sessions', params: session_params
  end

  describe 'ログインする' do
    it '成功する場合' do
      # リクエスト成功を確認
      expect(response.status).to eq(200)

      # セッションへユーザーIDが保存されることを確認
      expect(logged_in?).to be_truthy

      # 登録したユーザーのデータを返すことを確認
      json = JSON.parse(response.body)
      expect(json['user']['id']).to eq(current_user.id)
      expect(json['user']['user_name']).to eq(current_user.user_name)
      expect(json['user']['email']).to eq(current_user.email)
      expect(json['user']['password_digest']).to eq(current_user.password_digest)
    end
  end

  describe 'ログアウトする' do
    it '成功する場合' do
      delete "/api/v1/sessions/#{current_user.id}"

      # リクエスト成功を確認
      expect(response.status).to eq(200)

      # セッションからユーザーIDが破棄されることを確認
      expect(logged_in?).to_not be_truthy
    end
  end
end
