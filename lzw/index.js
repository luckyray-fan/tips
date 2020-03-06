var lzw = function lzw(input) {
  console.log('压缩数据' + input);
  var R = 256,
    obj = {},
    output = [];
  for (var i = 0; i < R; i++) {
    obj[String.fromCharCode(i)] = i;
  }
  var code = R,
    pre = '',
    suf = input[0];

  for (var i = 1; i < input.length; ) {
    //pre+suf是否在obj中
    while (obj[pre + suf]) {
      pre += suf;
      suf = input[i++];
    }
    output.push(obj[pre]);
    //将pre+suf加入obj中
    obj[pre + suf] = code++;
    pre = suf;
    suf = input[i++];
  }
  console.log('尚未压缩数组 ');
  console.log(output);
  output.forEach(function(val, i, arr) {
    arr[i] = String.fromCharCode(val);
  });
  if (pre) {
    output.push(pre.charAt(0));
    if (suf) output.push(suf.charAt(0));
  }
  console.log('压缩结果数组 ');
  console.log(output);
  return output.join('');
};

var lzwUn = function lzwUn(input) {
  var inputArr = [],
    output = [];
  for (var i = 0; i < input.length; i++) {
    inputArr[i] = input[i].charCodeAt();
  }
  console.log('解压数组 ');
  console.log(inputArr);
  var map = {},
    imap = {},
    R = 256;
  //初始化字典
  for (var i = 0; i < R; i++) {
    imap[i] = String.fromCharCode(i);
  }
  var cw, pw, P, C;
  cw = inputArr[0];
  output.push(imap[cw]);
  pw = cw;

  for (var i = 1; i < inputArr.length; ) {
    pw = cw;
    cw = inputArr[i++];
    //cw是否在字典中
    if (imap[cw]) {
      output.push(imap[cw]);
      P = imap[pw];
      C = imap[cw].charAt(0);

      imap[R++] = P + C;
    } else {
      P = imap[pw];
      if (!imap[pw]) debugger;
      C = imap[pw][0];
      imap[R++] = P + C;
      output.push(P + C);
    }
  }
  console.log('解压结果' + output.join(''));
  return output.join('');
};
// lzwUn(
//   lzw(
//     'ABABABabababcdefgkkkfjsakfjaksjdflajfldkkkkaiejirhkjkfjakjlkhjfhdshfjkdsbfkjhdsaskjfbadskjhffjkadsgfhadskjfhaskjfhjkdsahfjahsfjdhsfjskljfklajsdkfjaskljflkajfklajdkfjaslkdjflkasddjfkljdfklajsdfjfklajdfkjlafjdsljflkajdfkasdjflkasjdfksajdklfjaldskfjkladsjflkasjdflkajsdklfjalksjfklasjfkljiouuuuerjekrjekjkfjsdiojdk'
//   )
// );
(' [4, 112, 73, 4, 96, 56, 3, 194, 144, 97, 6, 64, 100, 9, 16, 0, 0, 0, 195, 191, 16, 194, 176, 195, 191, 16, 194, 145, 9, 16, 195, 145, 9, 2, 16, 195, 185, 2, 194, 129, 14, 0, 0, 44, 17, 81, 6, 16, 194, 144, 195, 158, 8, 195, 128, 45, 9, 194, 144, 194, 135, 2, 194, 160, 28, 13, 195, 128, 51, 10, 0, 2, 7, 80, 195, 172, 9, 80, 195, 186, 10, 194, 128, 195, 158, 6, 0, 194, 140, 0, 64, 194, 145, 4, 195, 128, 10]');
('[4, 112, 73, 4, 96, 56, 3, 144, 97, 6, 64, 100, 9, 16, 0, 0, 0, 255, 16, 176, 255, 16, 145, 9, 16, 209, 9, 2, 16, 249, 2, 129, 14, 0, 0, 44, 17, 81, 6, 16, 144, 222, 8, 192, 45, 9, 144, 135, 2, 160, 28, 13, 192, 51, 10, 0, 2, 7, 80, 236, 9, 80, 250, 10, 128, 222, 6, 0, 140, 0, 64, 145, 4, 192, 10]');
