// Refactor later... much later
// const wrap = (string, maxLen) => {
// 	if (string.length <= maxLen) {
// 		return string
// 	} else {
// 		let newStr = ''
// 		while (string.length > maxLen) {
// 			if (string[maxLen - 1] === ' ') {
// 				newStr += string.slice(0, maxLen) + '\n'
// 				string = string.slice(maxLen)
// 			} else {
// 				const i = string.slice(0, maxLen).lastIndexOf(' ')
// 				if (i === -1) {
// 					const firstSpace = string.indexOf(' ')
// 					if (firstSpace === -1) {
// 						newStr += string;
// 						return newStr;
// 					}
// 					newStr += string.slice(0, firstSpace + 1) + '\n'
// 					string = string.slice(firstSpace + 1)
// 				} else {
// 					newStr += string.slice(0, i + 1) + '\n'
// 					string = string.slice(i + 1)
// 				}
// 			}
// 		}
// 		newStr += string
// 		return newStr
// 	}
// }

function wrap(line, maxLen) {
  if (line.length <= maxLen) {
    return line;
  }

  const indexOfBlank = line.lastIndexOf(' ', maxLen);
  let split;
  let offset;
  if (indexOfBlank > -1) {
    split = indexOfBlank;
    offset = 1;
  } else {
    split = maxLen;
    offset = 0;
  }

  return (
    line.substring(0, split) +
    '\n' +
    wrap(line.substring(split + offset), maxLen)
  );
}

module.exports = wrap;
