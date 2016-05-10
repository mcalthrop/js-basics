var numbers = [100, 200, 300];
var context = {
    greeting: 'Merry'
};

function appendStringToThisGreeting(stringToAppend) {
    console.log('appendStringToThisGreeting(): this:', this);
    this.greeting += stringToAppend;
    console.log('appendStringToThisGreeting(): this.greeting:', this.greeting, '; context.greeting:', context.greeting);
}

this.greeting = 'Happy';
console.log('--- top of script: this.greeting:', this.greeting, '; context.greeting:', context.greeting);
console.log('--- call appendStringToThisGreeting() without context:');
appendStringToThisGreeting('Hannukah');

console.log('--- call appendStringToThisGreeting() - this time providing context:');
appendStringToThisGreeting.bind(context)('Christmas');

console.log('--- Use forEach() loop without providing context:');
numbers.forEach(function (number, index) {
    console.log('index:', index, '; number:', number, '; context:', context, ', this:', this);
});

console.log('--- Use forEach() loop - this time providing context:');
numbers.forEach(function (number, index) {
    console.log('index:', index, '; number:', number, '; context:', context, ', this:', this);
}.bind(context));
