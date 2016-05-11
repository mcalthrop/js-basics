# Using and setting the context <small>[[index]](README.md)</small>

In this section, we look at how we can use and set the value of the `this` object.

## Setup

Let's start by declaring some variables:

``` js
var numbers = [100, 200, 300];
var scores = [];
var context = {
    scores: []
};
```

## Setting the context of a `forEach()` anonymous function

If we use a JavaScript [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) loop without providing any context, we can see the value of `this` within the anonymous function:

``` js
numbers.forEach(function (number, index) {
    var newNumber = number / 100;

    if (index === 0) {
        console.log('this:', this);
        console.log('this === window?', this === window);
        console.log('this === context?', this === context);
    }
    this.scores.push(newNumber);
    console.log('numbers[' + index + ']:', number, '; newNumber:', newNumber, '; context.scores:', context.scores);
});
```

## `bind`ing the context

Now see what happens when we bind it to a context object:

``` js
numbers.forEach(function (number, index) {
    var newNumber = number + 1;

    if (index === 0) {
        console.log('this:', this);
        console.log('this === window?', this === window);
        console.log('this === context?', this === context);
    }
    this.scores.push(newNumber);
    console.log('numbers[' + index + ']:', number, '; newNumber:', newNumber, '; context.scores:', context.scores);
}.bind(context));
```

You can see that in each iteration of the loop, a new element is added to the `context.scores` array.

Let's check those variables to see what has changed:

``` js
console.log('numbers:', numbers);
console.log('scores:', scores);
console.log('context.scores:', context.scores);
```
