var ParseSearchQuery = function(query) {
  var results = query.match(/([\+\-]?[a-z]+\:[^ ]+|[\+\-]?"[^"]+"|[\+\-]?[\w\+]+)/ig)
    , json

  json = {
    include: { labels: {}, words: [] },
    exclude: { labels: {}, words: [] }
  }

  results.forEach(function(result) {
    var regExpLabelMatch = result.match(/([\+\-]?)(.*):(.*)/)
    var reWord = result.match(/([\+|\-]?)("[^"]+"|\w+)/)
    if (regExpLabelMatch) {
      json[(regExpLabelMatch[1] !== '-' ? 'include' : 'exclude')]['labels'][regExpLabelMatch[2]] = regExpLabelMatch[3]
    }
    else if (reWord) {
      json[(reWord[1] !== '-' ? 'include' : 'exclude')]['words'].push(reWord[2])
    }
  })
  return json
}
module.exports = ParseSearchQuery
