/* global describe, it */
'use strict';

var psq = require('../index.js')
    , chai = require('chai')
    , expect = chai.expect

describe('psq', function() {

  describe('basic queries', function() {
    it('should return array of results', function(done) {

      expect(JSON.parse(psq("alpha")))
        .to.have.deep.property('include.words')
        .that.deep.equals(['alpha'])

      var parse = JSON.parse(psq('"alpha quadrant"'))

      expect(parse)
        .to.have.deep.property('include.words')
        .that.deep.equals(['alpha quadrant'])

      expect(parse)
        .to.have.deep.property('exclude.words')
        .that.deep.equals([])

      var parse2 = JSON.parse(psq('+"alpha quadrant" beta gamma info'))

      expect(parse2)
        .to.have.deep.property('include.words')
        .that.deep.equals(['alpha quadrant', 'beta', 'gamma', 'info'])

      expect(parse2)
        .to.have.deep.property('exclude.words')
        .that.deep.equals([])

      var parse3 = JSON.parse(psq('-"alpha quadrant" beta gamma info'))

      expect(parse3)
        .to.have.deep.property('include.words')
        .that.deep.equals(["beta", "gamma", "info"])

      expect(parse3)
        .to.have.deep.property('exclude.words')
        .that.deep.equals(['alpha quadrant'])

      done()
    })
  })
  describe('basic labeled keywords', function() {
    it('handles labeling' , function(done) {
      var parse = JSON.parse(psq('site:test.website.org'))
      expect(parse)
        .to.have.deep.property('include.labels.site')
        .that.deep.equals("test.website.org")
      done()
    })
    it('handles exclusion labeling' , function(done) {
      var parse2 = JSON.parse(psq('-site:test.website.org'))
      expect(parse2)
        .to.have.deep.property('exclude.labels.site')
        .that.deep.equals("test.website.org")
      done()
    })
  })
})
