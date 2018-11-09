# Politify

Have you ever struggled how to implement a function to accomplish the desired task?

No hassle anymore. Pass your function to **politify** and make a wish about how you want the function works and... Viola!

**Eventually** you will get a function back that works as you expect.

## Install

```bash
npm i politify
```

## Usage

```js
const politify = require('politify')

const inc = a => a + 1

politify(inc)
  .then((wishInc) => console.log(wishInc(1) === Infinity ? 'success' : 'failure'))
```