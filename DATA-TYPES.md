# JavaScript data types <small>[[index]](README.md)</small>

It's helpful to know the building blocks of a language, so here we will be looking at the six data types used in JavaScript:

1. [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) &ndash; for a variable that can only be either true or false
1. [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) &ndash; represents the intentional absence of any object value
1. [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) &ndash; automatically assigned to a variable that has been declared but not initialised, or to function parameters that have not been supplied
1. [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) &ndash; generic container for a number; unlike many other languages, there is no distinction between integers and floating point numbers
1. [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) &ndash; to represent strings; there is no distinction between a single character and a string (a single character is a string that has a `length` of 1)
1. [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) &ndash; a simple object; note that the `{}` syntax is shorthand for instantiating a new `Object`

> **NOTE:** ES2015 introduces the [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) primitive as well; here we are just sticking to ES5.


## Digging deeper

### Passing by value or reference

When passing variables to a function, it's important to know whether they are passed by _value_ or by _reference_:

- when passed by _value_ the original variable will not be modifiable
- but when passed by _reference_, any changes made to the variable within the function will also be made to the variable passed in

So to test this out, let's declare the following variables:

``` js
var single = true;
var age = 23;
var name = 'Bruce';
var homeAddress = {
  street: 'Strand',
  suburb: 'London',
  postcode: 'WC2B 4LA'
};
```

We can define function that mutates each parameter passed in &ndash; this will help us find out which data types are passed by value, and which by reference:

``` js
function updateThings(s, a, n, h) {
  s = !s;
  a += 10;
  n += 'y';
  h.street += ' Street';
  h.suburb += ' Town';
  h.postcode += 'ZY';
}
```

Now we call this function:

``` js
updateThings(single, age, name, homeAddress);
```

And see which values have changed:

``` js
console.log(single);
console.log(age);
console.log(name);
console.log(homeAddress);
```

Any surprises there?

Note that because `Array`s and `Function`s are extended from `Object`, they behave in the same way too.


## Further reading

For a more in-depth understanding, you might like to read the following pages from MDN:

- [Primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
- [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
