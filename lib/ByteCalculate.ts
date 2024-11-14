const ByteCalculator = (byte: number) => {
  if (byte < 1024) {
    return byte + ' bit';
  } else if (byte > 1024 && byte < 1048576) {
    let res = byte / 1024;
    return res.toFixed(2) + ' KB';
  } else if (byte > 1048576 && byte < 1073741824) {
    let res = byte / 1048576;
    return res.toFixed(2) + ' MB';
  } else if (byte > 1073741824 && byte < 1099511627776) {
    let res = byte / 1073741824;
    return res.toFixed(2) + ' GB';
  }
  // return byte;
};

export default ByteCalculator;
