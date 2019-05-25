$(function(){
  function buildHTML(messages){
    messages.forEach(function(message) {
      image = message.image.url == null ? "" :  `<image src='${message.image.url}'></image>`;
      var html = 
      `<div class="group-main__messages">
          <p class="group-main__messages__user-name">${message.name}</p>
          <p class="group-main__messages__date">${message.created_at}</p>
          <div class="group-main__messages__bottom">
            <p class="group-main__messages__bottom__message">${message.body}</p>
            <p class="group-main__messages__bottom__image">
              ${image}
            </p>
          </div>
          <div class="message_id" data-id="${message.id}"></div>
      </div>`
      $('.group-main').append(html)
    })
  }

  $(function() {
    var url = location.href;
    if(url.match(/messages/) && $('.group-main__messages').length) {
      setInterval(update, 1000);
    }
  });

  function update() {
    var message_id = $('.message_id:last').data('id');
    $.ajax({
      url: 'api/messages',
      type: 'get',
      data: {
        message: { id: message_id}
      },
      dataType: 'json'
    })
    .done(function(data) {
      if (data.length) {
        buildHTML(data);
        $('.group-main').animate({scrollTop: $('.group-main')[0].scrollHeight},'500')
      }
    })
    .fail(function() {
      alert("更新に失敗しました");
    });
  };
});
