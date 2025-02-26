const client = require("./client");

async function init() {
  // Adding elements to a set
  await client.sadd("myset", "value1"); // Set: {"value1"}
  await client.sadd("myset", "value2"); // Set: {"value1", "value2"}

  const result = await client.sadd("myset", "value3");
  console.log("Result->", result);
  // // Checking if an element is in the set
  // const isMember = await client.sismember("myset", "value1");
  // console.log("Is value1 a member of myset? ->", isMember); // Is value1 a member of myset? -> 1

  // // Removing an element from the set
  // await client.srem("myset", "value2"); // Set: {"value1", "value3"}
  // const isMemberAfterRemoval = await client.sismember("myset", "value2");
  // console.log("Is value2 a member of myset after removal? ->", isMemberAfterRemoval); // Is value2 a member of myset after removal? -> 0

  // // Getting all elements from the set
  // const members = await client.smembers("myset");
  // console.log("Members of myset ->", members); // Members of myset -> ["value1", "value3"]

  // // Getting the number of elements in the set
  // const setSize = await client.scard("myset");
  // console.log("Size of myset ->", setSize); // Size of myset -> 2

  // // Performing set operations: union, intersection, difference
  // await client.sadd("otherset", "value3");
  // await client.sadd("otherset", "value4");

  // const union = await client.sunion("myset", "otherset");
  // console.log("Union of myset and otherset ->", union); // Union of myset and otherset -> ["value1", "value3", "value4"]

  // const intersection = await client.sinter("myset", "otherset");
  // console.log("Intersection of myset and otherset ->", intersection); // Intersection of myset and otherset -> ["value3"]

  // const difference = await client.sdiff("myset", "otherset");
  // console.log("Difference of myset and otherset ->", difference); // Difference of myset and otherset -> ["value1"]
}

init();
