# README

## membersテーブル
|column|type|options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル
|column|type|options|
|------|----|-------|
|title|string|null: false|
|member_id|integer||

### Association
- has_many :messages
- has_many :members
- has_many :users, through: :members


## usersテーブル
|column|type|options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, add_index|
|password|string|null:false|

### Association
- has_many :messages
- has_many :members
- has_many :groups, through: :members


## messagesテーブル
|column|type|options|
|------|----|-------|
|body|text||
|image|string||
|date|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key:true|

###Association
- belongs_to :user
- belongs_to :group