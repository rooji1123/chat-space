# README

## menbersテーブル

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
|menber_id|integer||

### Association
- has_many :messages
- has_many :users, through: :menbers


## user テーブル
|column|type|options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, add_index|
|password|string|null:false|

### Association
- has_many :messages
- has_many :groups, through: :menbers


## messageテーブル
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