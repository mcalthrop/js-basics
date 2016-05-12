# JavaScript variables <small>[[index]](README.md)</small>

## Data types

It's helpful to know the building blocks of a language, so here we will be looking at the six data types used in JavaScript:

1. [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) &ndash; for a variable that can only be either true or false
1. [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) &ndash; represents the intentional absence of any object value
1. [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) &ndash; automatically assigned to a variable that has been declared but not initialised, or to function parameters that have not been supplied
1. [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) &ndash; generic container for a number; unlike many other languages, there is no distinction between integers and floating point numbers
1. [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) &ndash; to represent strings; there is no distinction between a single character and a string (a single character is a string that has a `length` of 1)
1. [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) &ndash; a simple object; note that the `{}` syntax is shorthand for instantiating a new `Object`

> **NOTE:** ES2015 introduces the [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) primitive as well; here we are just sticking to ES5.

## What about arrays and functions?

[`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)s and [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)s are both extensions of `Object` &ndash; as is [everything in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype#Description).

## Literals and instances

There is a subtle but important distinction to be made between a _literal_ and an _instance_.

For example, the following are _literals_:

```js
true;
'some text';
1969;
{};
[];
undefined;
null;
```

And the following are _instances_:

``` js
var aBoolean = false;
var aString = 'kangaroo';
var aNumber = 1969;
var anObject = {};
var anArray = [];
var aFunction = function () {
  return 'this is a function';
};
var noValueAssigned;
var nullValue = null;
```

So when you declare a variable, it becomes an _instance_ of a particular data type.

## Constructors

Now that we have some variable instances, we can look at the `constructor` property on each of them:

``` js
console.log('aBoolean.constructor:', aBoolean.constructor);
console.log('aString.constructor:', aString.constructor);
console.log('aNumber.constructor:', aNumber.constructor);
console.log('anObject.constructor:', anObject.constructor);
console.log('anArray.constructor:', anArray.constructor);
console.log('aFunction.constructor:', aFunction.constructor);
```

And check these ones separately:

``` js
console.log('noValueAssigned.constructor:', noValueAssigned.constructor);
```

``` js
console.log('nullValue.constructor:', nullValue.constructor);
```

## Passing by value or reference

When passing variables to a function, it's important to know whether they are passed by _value_ or by _reference_:

- when passed by _value_ the original variable will not be modifiable
- but when passed by _reference_, any changes made to the variable within the function will also be made to the variable passed in

We can define function that mutates each parameter passed in:

``` js
function updateVariables(bool, str, num, obj, arr, fun) {
  bool = !bool;
  str = 'wallaby';
  num *= 1000;
  obj.mutatedObjectKey = 'mutated mutated object value';
  arr.push['mutated array value'];
  fun = function () {
    return '*** this is a new function ***';
  }
}
```

Now we can call this function, in order to find out which data types are passed by value, and which by reference:

``` js
updateVariables(aBoolean, aString, aNumber, anObject, anArray, aFunction);
```

And see which values have changed:

``` js
console.log('aBoolean:', aBoolean);
console.log('aString:', aString);
console.log('aNumber:', aNumber);
console.log('anObject:', anObject);
console.log('anArray:', anArray);
console.log('aFunction():', aFunction ());
```

Any surprises there?

Note that because `Array`s and `Function`s are extended from `Object`, they behave in the same way too.


## Further reading

For a more in-depth understanding, you might like to read the following pages from MDN:

- [Primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
- [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
