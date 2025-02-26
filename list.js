const client=require('./client')

async function init(){
    // await client.blpop("messages",10);3
    // const result = await client.rpop("messages"); // List: [4, 3, 2], result: 1
    // console.log("Result->", result);

    // Adding elements to the end of the list
    // await client.rpush("messages", 5); // List: [4, 3, 2, 5]
    // await client.rpush("messages", 6); // List: [4, 3, 2, 5, 6]

    // Removing the first element from the list
    // const firstElement = await client.lpop("messages"); // List: [3, 2, 5, 6], firstElement: 4
    // console.log("First Element->", firstElement);

    // Getting the length of the list
    // const length = await client.llen("messages"); // length: 4
    // console.log("Length->", length);

    // Retrieving elements from the list
    // const elements = await client.lrange("messages", 0, -1); // elements: [3, 2, 5, 6]
    // console.log("Elements->", elements);

    // Trimming the list to keep only the specified range
    // await client.ltrim("messages", 1, 2); // List: [2, 5]
    // const trimmedElements = await client.lrange("messages", 0, -1); // trimmedElements: [2, 5]
    // console.log("Trimmed Elements->", trimmedElements);

    await client.lpush("messages",1);
    await client.lpush("messages",2);
    await client.lpush("messages",3);
    await client.lpush("messages",4);
    const result=await client.rpop("messages");
    console.log("Result->" ,result);

}
init();