$(function() {
  function buildHTML(message){
    var html = 
    `<div class="group-main__messages">
        <p class="group-main__messages__user-name">${message.name}</p>
        <p class="group-main__messages__date">${message.created_at}</p>
        <p class="group-main__messages__message">${message.body}</p>
    </div>`
    return html;
  }
  $('.message_send').submit(function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "post",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.group-main').append(html)
      $('.footer-form__message__input').val('')
      $('.group-main').animate({scrollTop: $('.group-main')[0].scrollHeight}, '500')
    })

    .always(() => {
      $(".footer-form__send").removeAttr("disabled");
      });
  })
})