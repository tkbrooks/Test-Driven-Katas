const wrap = (string, maxLen) => {
	if (string.length <= maxLen) {
		return string
	} else {
		return string.slice(0, maxLen) + '\n' + string.slice(maxLen)
	}
}

module.exports = wrap
