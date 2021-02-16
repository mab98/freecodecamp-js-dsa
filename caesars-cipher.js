function rot13(str) {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let str2 = ''
  for (let i in str) {
    let index = alphabets.indexOf(str[i])
    if (index === -1) {
      str2 += str[i]
    }
    else if (index > 12) {
      str2 += alphabets[index - 13]
    }
    else {
      str2 += alphabets[index % 13 + 13]
    }
  }
  console.log(str2);
  return str2;
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
