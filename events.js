var events = require('events');
var util = require('util');

// element.on('click', function(){});

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(message){
  console.log(message);
});

myEmitter.emit('someEvent', 'The event was emitted');

// something more complex

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');

var mary = new Person('mary');

var ryu = new Person('ryu');

var people = [james, mary, ryu];

people.forEach(function(person){
  person.on('speak', function(message){
    console.log(person.name + ' said ' + message);
  });
});

james.emit('speak', 'Hey dudes');

ryu.emit('speak', 'I want a curry!');