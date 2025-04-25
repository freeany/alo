// 暴力解法 字符串匹配问题
function bruteForceSearch(str, pattern) {
  if (str.length === 0) return true; // 处理空模式字符串的情况
  if (str.length < pattern.length) return false;

  for (let i = 0; i <= str.length - pattern.length; i++) {
      let j;
      for (j = 0; j < pattern.length; j++) {
          if (str[i + j] !== pattern[j]) {  // 进行逐一匹配
              break;
          }
      }
      if (j === pattern.length) { // 所有字符均匹配
          return true;
      }
  }
  return false;
}

const str = 'aabaabaaf';
const pattern = 'aabaaf';
console.log(bruteForceSearch(str, pattern)); // 输出: true
