$(function() {
  function buildHTML(users, current_user_name){
    users.forEach(function(user) {
      if (user == undefined) {
        $("#user-search-result").append(`<p>ユーザーが見つかりません</p>`)
      } else if (user.name == current_user_name ) {
        ""
      } else {
        var user_name = user.name;
        var user_id = user.user_id;
        var html =
        `<div class="chat-group-user clearfix">
          <p class="chat-group-user__name">${user_name}</p>
          <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user_id}" data-user-name="${user_name}">追加</div>
        </div>`
        $("#user-search-result").append(html)
      };
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
      var current_user_name = $(".current_user_name").val();
      if (users !== 0) {
        buildHTML(users, current_user_name);
      } else {
        $("#user-search-result").append(`<p>ユーザーが見つかりません</p>`);
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました')
    })
  });
});

$(function() {
  function buildHTML(user){
    var user_name = user.userName;
    var user_id = user.userId;
    var html = 
    `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
      <input name='group[user_ids][]' type='hidden' value='${user_id}'>
      <p class='chat-group-user__name'>${user_name}</p>
      <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn' data-user-id="${user_id}" data-user-name="${user_name}">削除</div>
    </div>
    `
    $(".add-user-group").append(html)
  }

$(document).on("click",".chat-group-user__btn--add", function() {
  var user = $(this).data();
  $(this).parent().remove();

  buildHTML(user)
})
});

$(function() {
  function buildHTML(user) {
    var user_name = user.userName;
    var user_id = user.userId;
    var html =
      `<div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user_name}</p>
        <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user_id}" data-user-name="${user_name}">追加</div>
      </div>`
    return html;
  }

  $(document).on("click", ".user-search-remove", function() {
    $(this).parent().remove();
    var user = $(this).data();
    html = buildHTML(user);
    $("#user-search-result").append(html);
  });
});