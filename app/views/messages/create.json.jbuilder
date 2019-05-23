json.body @message.body
json.name @message.user.name
json.created_at @message.created_at.in_time_zone('Tokyo').strftime('%Y/%m/%d %H:%M')
json.image @message.image
json.id @message.id
