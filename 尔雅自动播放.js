setInterval(function() {
  //获取iframe
  var video = $('iframe')
    .contents()
    .find('iframe')
    .contents();
  //播放函数
  var play = function() {
    video.find('#video > button').click();
    var jy = video.find(
      '#video > div.vjs-control-bar > div.vjs-volume-panel.vjs-control.vjs-volume-panel-vertical > button'
    );
    if (jy.attr('title') != '取消静音') {
      jy.click();
    }
  };
  //如果正在加载
  var load = video.find('#loading');
  if (load.css('visibility') != 'hidden') {
    return;
  }
  //获取当前进度
  var spans = video
    .find('#video > div.vjs-control-bar > div.vjs-progress-control.vjs-control > div')
    .attr('aria-valuenow');
  // 如果还没播放完
  if (spans != 100) {
    play();
  }
  //如果播放结束
  if (spans == 100) {
    var bs = false;
    $('.onetoone')
      .find('.ncells')
      .each(function() {
        if (bs) {
          let nextClass = $(this)
            .find('a')
            .attr('href');

          eval(nextClass);
          console.log(
            '开始播放' +
              $(this)
                .find('a')
                .attr('title')
                .trim() +
              '  ' +
              new Date().toString().split(' ')[4]
          );
          setTimeout(() => {
            $('#dct2').attr('title') === '视频' ? $('#dct2').click() : $('#dct1').click();
          }, 2000);
          bs = false;
        }
        if (
          $('#mainid h1')
            .text()
            .trim() ==
          $(this)
            .find('a')
            .attr('title')
            .trim()
        ) {
          bs = true;
        }
      });
  }
  $('#lfsenior').html('自动模式已开启,本章进度:' + spans + '%');
}, 100);
