document.getElementsByTagName('textarea')[0].value = '老师上课认真, 能照顾到学生';
var eles = document.querySelectorAll('table')[3].getElementsByTagName('td');
for (var i = 0; i < eles.length; i++) {
  var tem = 'zbda_';
  document.getElementById(tem + i).click();
}
