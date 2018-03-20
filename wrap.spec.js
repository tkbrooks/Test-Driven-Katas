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
	it('Adds a line break at the beginning of a word if maxLength is in the middle of a word', () => {
		expect(wrap('Dog cat bat dog cat bat', 10)).to.equal(
			'Dog cat \nbat dog \ncat bat'
		)
	})
	it('Adds a line break at the beginning of a word if maxLength is in the middle of a word', () => {
		expect(wrap('Gooby went for a walk with Molly', 8)).to.equal(
			'Dog cat \nbat dog \ncat bat'
		)
	})
})
