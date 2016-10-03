# JavaScript Classes <small>[[index]](README.md)</small>

We'll start off by revisiting some basics of JavaScript classes.

As a simple use-case, let's imagine we want to create a class that allows us to define a circle, and calculate its circumference.

## The class definition

To define a JavaScript class, just create a function (which is the constructor), pass it a parameter, and store this value:

``` js
function Circle(radius) {
    this.radius = radius;
}
```

Note the following:

- the class name, `Circle`, has an _upper-case first letter_ &ndash; this is the convention used for defining a class
- the parameter `radius` and the instance variable `radius` both have a _lower-case first letter_
- and will be stored on the _instance_ of the class by adding it to the `this` object
- these naming conventions (and others on this page) are used not just in JavaScript, but in most other object-oriented languages


## Adding a static property to the class

Thinking ahead, we know that in order to calculate the circumference of the circle (and possibly later add a method to calculate the area), we will need the value of &pi;. This does not need to be added to every instantiation of the `Circle` class, so we can make it a static property:

``` js
Circle.PI = 3.14;
```

Note the convention of using _all upper-case letters_ for a property that will be used as a constant.

> In the real world, we would use `Math.PI`, but here we are adding our own value for &pi; to demonstrate the use of static properties on a class.

## Adding an instance method to the class

We can now add an _instance_ method to calculate the circumference:

``` js
Circle.prototype.circumference = function () {
    return 2 * Circle.PI * this.radius;
}
```

Note the following:

- the convention of naming a class method with a _lower case first letter_
- we want to have a distinct `circumference()` method for each _instance_ of this class, so we add the function to the `prototype` object of the class &ndash; compare this with the way we added the static property `PI`, above
- we reference the static property `PI` by referring to `Circle`
- and the instance variable `radius` via the `this` object

## Instantiating the class

Now we are ready to use the class we have defined, so firstly we create an instance of it:

``` js
var disc = new Circle(3);
```

Note the following:

- the convention of naming an instance of a class with a _lower-case first letter_
- we pass the value `3` as the parameter to the constructor, which will be used as the value for the radius of this instance of `Circle`

## Calculating the circumference

Now that we have an instance of the `Circle` class, we can calculate the circumference of it:

``` js
disc.circumference();
```

And that's it!

## Roundup

So to recap, the final definition of `Circle` class will look like this:

``` js
function Circle(radius) {
  this.radius = radius;
}

Circle.PI = 3.14;

Circle.prototype.circumference = function () {
  return 2 * Circle.PI * this.radius;
};
```

## Practice

It would be useful to have a method to calculate the area of the circle too.

Add an instance method to the `Circle` object called `area()` to accomplish this.

You'll need to create a new instance of the class in order to see it working of course.
