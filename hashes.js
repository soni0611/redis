const client = require("./client");

async function init() {
  // Setting fields in a hash
  await client.hset("user:1000", "name", "John Doe"); // Hash: {name: "John Doe"}
  await client.hset("user:1000", "email", "john.doe@example.com"); // Hash: {name: "John Doe", email: "john.doe@example.com"}
  const result = await client.hset("user:1000", "age", 30); // Hash: {name: "John Doe", email: "john.doe@example.com", age: 30}
  console.log("Result->", result);
  // Getting a field value from a hash
//   const name = await client.hget("user:1000", "name");
//   console.log("Name->", name); // Name-> John Doe

//   // Getting all fields and values from a hash
//   const user = await client.hgetall("user:1000");
//   console.log("User->", user); // User-> {name: "John Doe", email: "john.doe@example.com", age: "30"}

//   // Incrementing a field value in a hash
//   await client.hincrby("user:1000", "age", 1); // Hash: {name: "John Doe", email: "john.doe@example.com", age: 31}
//   const age = await client.hget("user:1000", "age");
//   console.log("Age->", age); // Age-> 31

//   // Deleting a field from a hash
//   await client.hdel("user:1000", "email"); // Hash: {name: "John Doe", age: 31}
//   const userAfterDeletion = await client.hgetall("user:1000");
//   console.log("User after deletion->", userAfterDeletion); // User after deletion-> {name: "John Doe", age: "31"}

//   // Checking if a field exists in a hash
//   const hasEmail = await client.hexists("user:1000", "email");
//   console.log("Does email exist? ->", hasEmail); // Does email exist? -> 0

//   // Getting the number of fields in a hash
//   const fieldCount = await client.hlen("user:1000");
//   console.log("Number of fields in user:1000 ->", fieldCount); // Number of fields in user:1000 -> 2
}

init();
