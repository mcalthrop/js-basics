var suffix = '.blah';
var numbers = [100, 200, 300];
var context = {
    a: 1,
    b: 2
};

function appendString(stringToAppendTo) {
    console.log('appendString(): this:', this);

    return stringToAppendTo + suffix;
}

console.log('--- Use forEach() loop without providing context:');
numbers.forEach(function (number, index) {
    console.log('index:', index, '; number:', number, '; context:', context, ', this:', this);
});

console.log('--- Use forEach() loop - this time providing context:');
numbers.forEach(function (number, index) {
    console.log('index:', index, '; number:', number, '; context:', context, ', this:', this);
}.bind(context));
