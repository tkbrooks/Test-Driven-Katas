const { expect } = require('chai')
const wrap = require('./wrap')

describe('wrap', () => {
	it('Returns empty string if empty string was provided', () => {
		expect(wrap('', 10)).to.equal('')
	})
	it('Returns the string if it is shorter than the maxLength', () => {
		expect(wrap('Hello world!', 20)).to.equal('Hello world!')
	})
	it('Adds a line break at the maxLength', () => {
		expect(wrap('Dog cat bat dog cat bat', 12)).to.equal(
			'Dog cat bat \ndog cat bat'
		)
	})
})
