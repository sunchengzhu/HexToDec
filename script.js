document.getElementById('hexInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    convertToDecimal();
  }
});

document.getElementById('decInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    convertToHex();
  }
});

function convertToDecimal() {
  let hexValue = document.getElementById('hexInput').value.toLowerCase();

  if (hexValue.startsWith('0x')) {
    hexValue = hexValue.substring(2);
  }

  // 使用正则表达式去除前导零
  hexValue = hexValue.replace(/^0+/, '');

  // 如果字符串为空，则置为 "0"
  if (hexValue === '') {
    hexValue = '0';
  }

  document.getElementById('decimalOutput').value = BigInt("0x" + hexValue).toString();
}

function convertToHex() {
  let decValue = document.getElementById('decInput').value;

  document.getElementById('hexOutput').value = parseInt(decValue, 10).toString(16);
}

function copyToClipboard() {
  let outputValue = document.getElementById('decimalOutput').value;
  navigator.clipboard.writeText(outputValue)
    .catch(err => {
      console.error('复制失败: ', err);
    });
}

function copyHexToClipboard() {
  let outputValue = document.getElementById('hexOutput').value;
  navigator.clipboard.writeText(outputValue)
    .catch(err => {
      console.error('复制失败: ', err);
    });
}
