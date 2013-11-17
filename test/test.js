var ParseSearchQuery = require('../index.js')
    , chai = require('chai')
    , should = chai.should
    , expect = chai.expect

describe('ParseSearchQuery', function() {

  describe('basic queries', function() {
    it('should return array of results', function(done) {

      expect(ParseSearchQuery("alpha"))
        .to.have.deep.property('include.words')
        .that.deep.equals(['alpha'])

      var parse = ParseSearchQuery('"alpha quadrant"')

      expect(parse)
        .to.have.deep.property('include.words')
        .that.deep.equals(['"alpha quadrant"'])

      expect(parse)
        .to.have.deep.property('exclude.words')
        .that.deep.equals([])

      var parse2 = ParseSearchQuery('+"alpha quadrant" beta gamma info')

      expect(parse2)
        .to.have.deep.property('include.words')
        .that.deep.equals(['"alpha quadrant"', 'beta', 'gamma', 'info'])

      expect(parse2)
        .to.have.deep.property('exclude.words')
        .that.deep.equals([])

      var parse3 = ParseSearchQuery('-"alpha quadrant" beta gamma info')

      expect(parse3)
        .to.have.deep.property('include.words')
        .that.deep.equals(["beta", "gamma", "info"])

      expect(parse3)
        .to.have.deep.property('exclude.words')
        .that.deep.equals(['"alpha quadrant"'])

      done()
    })
  })
  describe('basic labeled keywords', function() {
    it('handles labeling' , function(done) {
      var parse = ParseSearchQuery('site:test.website.org')
      expect(parse)
        .to.have.deep.property('include.labels.site')
        .that.deep.equals("test.website.org")
      done()
    })
    it('handles exclusion labeling' , function(done) {
      var parse2 = ParseSearchQuery('-site:test.website.org')
      expect(parse2)
        .to.have.deep.property('exclude.labels.site')
        .that.deep.equals("test.website.org")
      done()
    })
  })
})
