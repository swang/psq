psq
=========================================
psq (parse search query) converts a search query into JSON

[![build status](https://secure.travis-ci.org/swang/psq.png)](http://travis-ci.org/swang/psq)

## Requirements

- [node v0.6+](http://nodejs.org/)

## Install

- npm install psq

## Example
```javascript
var psq = require('psq')

console.log(psq('"hello world" -python +example'))
```

```json
{
    "exclude": {
        "labels": {},
        "words": [
            "python"
        ]
    },
    "include": {
        "labels": {},
        "words": [
            "hello world",
            "example"
        ]
    }
}
````
## Author

- [Shuan Wang](https://github.com/swang) [(twitter)](https://twitter.com/swang) (author)

## TODO

- Documentation
- Add flags for HTML escaping/stripping and URL encoding/decoding

## CHANGELOG
0.0.3
- Added support for terms when they contain a dash
- Words inside quotes will now have quotes stripped in results

0.0.2
- Fixed return object (now returns JSON)
- Added example

0.0.1
- Initial Release

## LICENSE
- MIT
