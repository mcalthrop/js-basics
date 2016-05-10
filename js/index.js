// assign a value to the `window` variable, which
window.greeting = 'Merry';
// declare an array of numbers for later use
var numbers = [100, 200, 300];
// declare an object that will be bound in order to provide context
var context = {
    greeting: 'Happy'
};

function appendStringToThisGreeting(stringToAppend) {
    console.log('appendStringToThisGreeting(): this:', this);
    this.greeting += stringToAppend;
    console.log('appendStringToThisGreeting(): after append: this.greeting:', this.greeting, '; context.greeting:', context.greeting);
}
