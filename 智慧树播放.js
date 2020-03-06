let time = setInterval(() => {
  let flag = $('.passTime').css('width') === '100%';
  if (flag) {
    let temArr = $('.clearfix.video.lesson');
    for (let i = 0; i < temArr.length; i++) {
      let temClass = temArr.eq(i).attr('class');
      if (temClass.indexOf('current_play') >= 0) {
        temArr.eq(i + 1).click();
        break;
      }
    }
  }
}, 1000);

let flag = $('.videoCurrent span').text() === '100%';

let time = setInterval(() => {
  $('.speedList div')
    .eq(1)
    .attr('rate', 3);
  $('.speedList div')
    .eq(1)
    .click();
}, 10000);
