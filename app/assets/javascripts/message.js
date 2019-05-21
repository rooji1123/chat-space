$(function() {
  function buildHTML(message){
    var html = 
    `<div class="group-main__messages">
        <p class="group-main__messages__user-name">${message.name}</p>
        <p class="group-main__messages__date">${message.created_at}</p>
        <div class="group-main__messages__bottom">
          <p class="group-main__messages__bottom__message">${message.body}</p>
        </div>
    </div>`
    return html;
  }
  function buildHTML2(message){
    var html = 
    `<div class="group-main__messages">
        <p class="group-main__messages__user-name">${message.name}</p>
        <p class="group-main__messages__date">${message.created_at}</p>
        <div class="group-main__messages__bottom">
          <p class="group-main__messages__bottom__message">${message.body}</p>
          <p class="group-main__messages__bottom__image">
            <image src='${message.image.url}' ></image>
          </p>
        </div>
    </div>`
    return html;
  }
  $('.message_send').submit(function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    var image =$('.image__form').val();
    if (image == "") {
      load_html = buildHTML
    } else {
      load_html = buildHTML2
    }
    $.ajax({
      url: url,
      type: "post",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = load_html(data);
      $('.group-main').append(html)
      $('.footer-form__message__input').val('')
      $('.image__form').val('')
      $('.group-main').animate({scrollTop: $('.group-main')[0].scrollHeight}, '500')
    })
    .fail(function(){
      alert("送信に失敗しました");
    })

    .always(() => {
      $(".footer-form__send").removeAttr("disabled");
      });
  })
})