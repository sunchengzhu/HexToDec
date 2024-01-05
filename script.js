// 监听输入变化，自动进行转换
document.getElementById('hexInput').addEventListener('input', function () {
  convertToDecimal();
});

document.getElementById('decInput').addEventListener('input', function () {
  convertToHex();
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

  // 使用正则表达式检查是否为有效的十六进制数
  if (!/^[0-9a-f]+$/i.test(hexValue)) {
    document.getElementById('decimalOutput').value = "请输入合法的16进制数";
    return;
  }

  document.getElementById('decimalOutput').value = BigInt("0x" + hexValue).toString();
}

function convertToHex() {
  let decValue = document.getElementById('decInput').value;

  // 使用正则表达式检查是否为有效的10进制数
  if (!/^\d+$/.test(decValue)) {
    document.getElementById('hexOutput').value = "请输入合法的10进制数";
    return;
  }

  document.getElementById('hexOutput').value = BigInt(decValue).toString(16);
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
