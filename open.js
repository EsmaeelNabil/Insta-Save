var s = document.getElementsByClassName("tWeCl");
var temp = s[0].getAttribute("src");

  var eeel = document.createElement('textarea');
  eeel.value = temp;
  eeel.setAttribute('readonly', '');
  eeel.style.position = 'absolute';
  eeel.style.left = '-9999px';
  document.body.appendChild(eeel);
  eeel.select();
  document.execCommand('copy');
  document.body.removeChild(eeel);

//alert("Link is Successfully Copied Now!");
openInNewTab(temp);

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
