require 'rails_helper'

describe MessagesController do
  let(:group) { create(:group) }
  let(:user) { create(:user) }
  describe 'creaitあくしろよ' do
    let(:params) { { group_id: group.id, user_id: user.id, message: attributes_for(:message) } }
    context 'ログインしているとき' do
      before do
        login(user)
      end

      context "@messageが保存できたとき" do
        subject {
          post :create,
          params: params
        }
        it "メッセージが保存されているか" do
          expect{ subject }.to change(Message, :count).by(1)
        end
        it "root ビューに遷移できているか" do
          subject
          expect(response).to redirect_to(group_messages_path(group))
        end
      end

      context "@messageが保存できなかったとき"do
        let(:invalid_params) { { group_id: group.id, user_id: user.id, message: attributes_for(:message,body: nil, image: nil) } }
        subject {
          post :create,
          params: invalid_params
        }
        it "データーベースに値が保存されない" do
          expect{ subject }.not_to change(Message, :count)
        end

        it ":indexビューに戻る" do
          subject
          expect(response).to render_template :index
        end
      end
    end

    context 'not log in' do
      it 'rendirects to new_user_session_path' do
        post :create, params: params
        expect(response).to redirect_to(new_user_session_path)
      end
    end
  end
end
