function handlerCopyTranslateData({ target }) {
  if (target.tagName !== 'TH') {
    return;
  }

  let translateData = [];
  let rows = target.closest('table').querySelectorAll('tr');
  var nodes = [].slice.call(rows, 1); 
  
  nodes.forEach((row) => {
    let data = row.querySelectorAll('td');
    translateData.push([data[0].textContent, data[1].textContent]);
  });

  function copyText(){
    let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = JSON.stringify(translateData);
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
  };

  copyText(translateData);
}

document.addEventListener('click', handlerCopyTranslateData);
