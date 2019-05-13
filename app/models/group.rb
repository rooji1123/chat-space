class Group < ApplicationRecord
  has_many :messages
  has_many :gropus_users
  has_many :users, through: :gropus_users
end
