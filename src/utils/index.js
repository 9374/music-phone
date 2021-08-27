// 对数字进行格式化 (超过4位变万,超过8位变亿)
export const formatNumber = (number) => {
  if (number) {
    const str = String(number)
    // const str1 = '123222'
    if (str.length <= 4) {
      return str
    }
    if (str.length > 8) {
      return str.substring(0, str.length - 8) + '亿'
    }
    if (str.length > 4) {
      return str.substring(0, str.length - 4) + '万'
    }
  }
}
