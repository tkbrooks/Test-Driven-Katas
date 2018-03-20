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
		expect(wrap('Gooby went for a walk with Molly', 8)).to.equal(
			'Gooby \nwent \nfor a \nwalk \nwith \nMolly'
		)
	})
	it('Adds a line break if maxLength is shorter than all words', () => {
		expect(wrap('Dog cat bat dog cat bat', 2)).to.equal(
			'Dog \ncat \nbat \ndog \ncat \nbat'
		)
	})
	it('Returns the string if there are no spaces and maxLength is less than word length', () => {
		expect(wrap('Dogcatbatdogcatbat', 2)).to.equal(
			'Dogcatbatdogcatbat'
		)
	})
})
