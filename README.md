# generatePrime2.js
JavaScript snippet to generate Prime numbers between two limits

## How to use
```javascript
generatePrime2(lower_limit, upper_limit)
```
The `lower_limit` and `upper_limit` inputs must be larger than 0 and both have to be positive integers.

And also `upper_limit` > `lower_limit` value.

The output is an `array` for valid or invalid input(s).

## Example

```javascript
generatePrime2(3, 8); // will generate output: [5, 7]
generatePrime2(16, 18); // will generate output: [17]
generatePrime2(2, 3); // will generate output: [] (empty array)
generatePrime2(-100, 7.8); // will generate output: ["error info"]
```

## Demo with UI (user interface)
Go to <a href="http://portraptor.johanpaul.net/2015/09/prinutor2-prime-number-generator-2.html" target="_blank" title="new window">PortRaptor</a>.
