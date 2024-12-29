/**
 * 翻转整数
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 注意:
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231, 231 − 1]。
 * 请根据这个假设，如果反转后整数溢出那么就返回 0。
 * @param {number} int 一个 32 位的有符号整数
 * @return {number} 返回值
 */
var reverseInt = function (int) {
  // 字符串翻转方法
  // 参数校验
  if (typeof int !== 'number') {
    return;
  }
  // 极值
  const MAX = 2147483647;
  const MIN = -2147483648;
  // 识别数字剩余部分并翻转
  const rest = int < 0 ? String(int).split('').reverse().join('') : int;

};

// 测试用例
console.log(reverseInt(123)); // 321
console.log(reverseInt(-123)); // -321
console.log(reverseInt(120)); // 21