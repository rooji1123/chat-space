$(function() {
  function buildHTML(users){
    users.forEach(function(user) {
      var user_name = user.name;
      var user_id = user.user_id;
      var html = 
      `<div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user_name}</p>
        <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user_id}" data-user-name="${user_name}">追加</div>
      </div>`
      $("#user-search-result").append(html)
    });
  }

  $(".chat-group-form__name").on("keyup", function() {
    var input = $(".chat-group-form__name").val();

    $.ajax({
      type: 'get',
      url: '/users',
      data: { keyword: input},
      dataType: 'json'
    })

    .done(function(users) {
      $("#user-search-result").empty();
      if (users !== 0) {
        buildHTML(users);
      } else {
        $("#user-search-result").append(`<p>ユーザーが見つかりません</p>`);
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました')
    })
  });
});