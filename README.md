psq
=========================================
psq (parse search query) converts a search query into JSON

[![build status](https://secure.travis-ci.org/swang/psq.png)](http://travis-ci.org/swang/psq)

## Requirements

- [node v0.8+](http://nodejs.org/) (may work with v0.6 but no guarantees)

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
            "\"hello world\"",
            "example"
        ]
    }
}
````
## Author

- [Shuan Wang](https://github.com/swang) [(twitter)](https://twitter.com/swang) (author)

## TODO

- Documentation

## CHANGELOG

0.0.1
- Initial Release

## LICENSE
- MIT
