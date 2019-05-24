require 'rails_helper'

feature 'tweet', type: :feature do
  let(:user) { create(:user) }
  scenario 'post tweet' do
    visit root_path
    expect(page).to have_no_content('投稿する')

    visit new_user_session_path
    fill_in 'user_email', with: user.email
    fill_in 'user_password', with: user.password
    find('input[name="commit"]').click
    expect(current_path).to eq root_path
    expect(page).to have_content('投稿')
  end
end