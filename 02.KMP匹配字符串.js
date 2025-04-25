// 1. 找前缀表
// 2. 找最长相等前缀和后缀的长度
// aabaaf
/*
 前缀： a aa aab aaba aabaa
 后缀： f af aaf baaf abaaf
 
 主要是找前缀
 模式串的前缀表如下：
 a      0
 aa     1
 aab    0
 aaba   1
 aabaa  2
 aabaaf 0

  [0,1,0,1,2,0] 这就是next数组
*/

function computeLPSArray(pattern) {
  const m = pattern.length;
  const lps = new Array(m).fill(0);
  let len = 0;
  let i = 1;
  lps[0] = 0;

  while (i < m) {
      if (pattern[i] === pattern[len]) {
          len++;
          lps[i] = len;
          i++;
      } else {
          if (len !== 0) {
              len = lps[len - 1];
          } else {
              lps[i] = 0;
              i++;
          }
      }
  }

  console.log(lps);
  
  return lps;
}

function KMPSearch(str, pattern) {
  const n = str.length;
  const m = pattern.length;
  const lps = computeLPSArray(pattern);
  let i = 0;
  let j = 0;

  while (i < n) {
      if (pattern[j] === str[i]) {
          j++;
          i++;
      }

      if (j === m) {
          return true;
      } else if (i < n && pattern[j] !== str[i]) {
          if (j !== 0) {
              j = lps[j - 1];
          } else {
              i++;
          }
      }
  }
  return false;
}

const str = 'aabaabaaf';
const pattern = 'aabaaf';
const result = KMPSearch(str, pattern);
console.log(result);
  