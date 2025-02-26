const client=require('./client')

async function init(){
 // Setting string values
//  await client.set("msg:1", "Hello, World!"); // Set key "msg:1" to "Hello, World!"
//  await client.set("msg:2", "Redis is awesome!"); // Set key "msg:2" to "Redis is awesome!"
//  await client.set("msg:3", "This is a test message."); // Set key "msg:3" to "This is a test message."

 // Getting string values
//  const result1 = await client.get("msg:1");
//  console.log("Result 1->", result1); // Result 1-> Hello, World!

//  const result2 = await client.get("msg:2");
//  console.log("Result 2->", result2); // Result 2-> Redis is awesome!

 // Setting a key with an expiration time
//  await client.set("msg:4", "This message will expire in 5 seconds.");
//  await client.expire("msg:4", 5); // Set key "msg:4" to expire in 5 seconds

 // Incrementing a value
//  await client.set("counter", 0); // Set key "counter" to 0
//  await client.incr("counter"); // Increment key "counter" by 1
//  const counterValue = await client.get("counter");
//  console.log("Counter Value->", counterValue); // Counter Value-> 1

 // Decrementing a value
//  await client.decr("counter"); // Decrement key "counter" by 1
//  const decrementedCounterValue = await client.get("counter");
//  console.log("Decremented Counter Value->", decrementedCounterValue); // Decremented Counter Value-> 0

    // await client.set("msg:4","whats up");
    // await client.expire("msg:3",5);
    const result=await client.get("msg:1");
    console.log("Result->" ,result);

}
init();