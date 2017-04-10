# maybeContains

Helper method for the YOLO developer.

## Install
```
npm install maybe-contains --save
```

## Usage

### maybeContains(array, value, color)

```javascript
import maybeContains from 'maybe-contains'

var array = [0, 1, 2]
var value = 1
var color = '#ff0000'

maybeContains(array, value, color) // => "Array probably contains 1"
maybeContains(array, value, color) // => "Array probably doesn't contain 1"
```

Supply an array and a value. This method will guess if the array contains the value and return a string with it's estimation.

This method will also add a nice pure CSS loader to the body. The third parameter sets the loader color. *This parameter is OPTIONAL!*
