

# Swithceroo 
Powerful alternative to JavaScript's vanilla switch statement.
Lets you create different cases that will match on one of this ***matchers:***

 - [isEqual](#basic-usage)
 - [inRange](#inrange )
 - [isType](#istype)
 
Checkout the  [examples](./examples/) directory for a working examples.
## Install
    npm install switcheroo
## Basic Usage
```javascript
import $switch from 'switcheroo';

/**
$switch(cases :Array *required , defaultAction : object | function)
$switch expects an array of case object,
and can use a default action that will be called when there is no match
**/
const switcheroo = $switch(
    [{
            matcher: "isEqual",
            params: ["hello", "hey", "yo"], // will call action if one of the params is equal to switch input
            action: () => console.log("Recived a greeting!")
        },
        {
            matcher: "isEqual",
            params: "goodbye", // can also recieve only one value to match
            action: () => console.log("farwell"),
            break: true // will break and not look for any more matches
        },
        {
            matcher: "isEqual",
            params: "goodbye",
            action: () => console.log("arrivederci")
        },
        {
            matcher: "isEqual",
            params: ["don't you repeat me!"],
            useVal: true, // when useVal is true action is called with the value matched
            action: val => console.log(val)
        }
    ],
    () => console.log("No match!?!") // defaultAction will be called when there is no match
);

const words = [
    "hello",
    "hey",
    "lets try this",
    "don't you repeat me!",
    "goodbye"
];

words.forEach(word => switcheroo(word));
```
```
output:
Recived a greeting!
Recived a greeting!
No match!?!
don't you repeat me!
farwell

```

## The case object
```javascript
  {
  matcher: string , // *required - the type of matcher to be used in this case
  params : array // *required -  array of paramaters for the matcher | one param for the matcher
  action: function // *required - the function that will be called in the event of a match
  useVal : boolean // when true action is called using the switch argument as an argument
  break: boolean // when true if this case is matched , it will be that last one checked
  op: string // used in case mathcers have multiple operations  
  useProperty : string // when provided the matcher will use the switch argument at the property 
  }
```
## Other matchers

 ### inRange 
 Will match case if number is in given range
 uses the following ops:
 ```
 'between'- params[0] < val < params[1]
 'between-inclusive'-params[0] <= val <= params[1] 
 'between-left-inclusive-params[0] <= val < params[1]
 'between-right-inclusive'-params[0] < val <= params[1]
 'bigger'-params[0] < val
 'bigger-equals'- params[0] <= val
 'smaller'- params[0] > val
'smaller-equals'-params[0] => val
 ```
 For example , lets sort people to groups by age :
   ```javascript
   import $switch from "switcheroo";

// lets sort people into groups by age
const ageGroups = {
  infants: [],
  kids: [],
  teens: [],
  adults: [],
  oldTimers: [],
  epics: []
};
const switcheroo = $switch([
  {
    matcher: "inRange",
    params: 4,
    op: "smaller-equals",
    useVal: true,
    action: infant => ageGroups.infants.push(infant),
    useProperty: "age" // uses the properety provided for to match the case
  },
  {
    matcher: "inRange",
    params: [5, 12],
    op: "between-inclusive",
    useVal: true,
    action: kid => ageGroups.kids.push(kid),
    useProperty: "age"
  },
  {
    matcher: "inRange",
    params: [12, 20],
    op: "between",
    useVal: true,
    action: teen => ageGroups.teens.push(teen),
    useProperty: "age"
  },
  {
    matcher: "inRange",
    params: [20, 70],
    op: "between-inclusive",
    useVal: true,
    action: adult => ageGroups.adults.push(adult),
    useProperty: "age"
  },
  {
    matcher: "inRange",
    params: [70, 100],
    op: "between",
    useVal: true,
    action: oldTimer => ageGroups.oldTimers.push(oldTimer),
    useProperty: "age"
  },
  {
    matcher: "inRange",
    params: 100,
    op: "bigger-equals",
    useVal: true,
    action: epic => ageGroups.epics.push(epic),
    useProperty: "age"
  }
]);

const people = [
  { name: "Yoni", age: 26 },
  { name: "Anna", age: 28 },
  { name: "Alon", age: 4 },
  { name: "Nava", age: 12 },
  { name: "George", age: 55 },
  { name: "Billi", age: 72 },
  { name: "Pablo", age: 120 }
];

people.forEach(person => switcheroo(person));
console.log(ageGroups);
   ```
   

   ```
   output : 
   { infants: [ { name:  'Alon', age:  4 } ],

kids: [ { name:  'Nava', age:  12 } ],

teens: [],

adults:

[ { name:  'Yoni', age:  26 },

{ name:  'Anna', age:  28 },

{ name:  'George', age:  55 } ],

oldTimers: [ { name:  'Billi', age:  72 } ],

epics: [ { name:  'Pablo', age:  120 } ] }
   ```

 ### isType
will match if type the of switch argument equals one of the params provided,
will also match on ES6 classes :
```javascript
import $switch from "switcheroo";

class Test {
  test() {
    console.log("this is a test");
  }
}

const switcheroo = $switch([
  {
    matcher: "isType",
    params: "number",
    useVal: true,
    action: num => console.log(num + 1)
  },
  {
    matcher: "isType",
    params: ["string"],
    useVal: true,
    action: name => console.log(`hello ${name}`)
  },
  {
    matcher: "isType",
    params: "Test", // isType mathcer will also match to the class of the switch argument
    useVal: true,
    action: test => test.test()
  }
]);

const things = [1, 2, "Trump", new Test()];

things.forEach(thing => switcheroo(thing));

```


   

   

 > Written with [StackEdit](https://stackedit.io/).
