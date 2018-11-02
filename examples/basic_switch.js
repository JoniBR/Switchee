import $switch from 'switchee';

/**
 * basic case - same as a regualr switch,
 * but you can add multiple values to match
 * in each case.
 */

const switchee = $switch(
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

words.forEach(word => switchee(word));