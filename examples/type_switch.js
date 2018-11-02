import $switch from "../dist";

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
