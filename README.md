# env-array [![Build Status](https://travis-ci.org/HaNdTriX/env-array.svg?branch=master)](https://travis-ci.org/HaNdTriX/env-array)

Create an array based on the `process.env.NODE_ENV` value.

## Usage

```javascript
    import envArray from 'env-array'

    envArray({
        common: [
            // This will always be part of the result
        ],
        development: [
            // Included if `process.env.NODE_ENV === 'development'`
        ],
        someOtherEnvName: []
    }) // => []
```

## License

MIT © [Henrik Wenz](https://github.com/handtrix)
