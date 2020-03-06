var tem = 0;
i = -1;
var text = '';
var time = setInterval(() => {
  setTimeout(() => {
    text += $('.reader-page')[tem / 1437].textContent + '\n';
    // alert(i);
  }, 1000);
  $(document).scrollTop((tem += 1437));
}, 2000);
