const redis = require('redis');

const client = redis.createClient({
    host: "localhost",
    port: 6379,
});

// Event listeners
client.on('error', (err) => {
    console.error('Redis Client Error', err);
});

client.on('connect', () => {
    console.log('Connected to Redis server');
});


async function redisDataStructure() {
    try {
        ////////////////////////////////////// string -> set -> get-> MSET ,MGET////////////////////////////////////////////////

        await client.connect();

        await client.set('name:name', 'vishvajeet shukla');
        const nameValue = await client.get('name:name');

        await client.mSet(["name:email", "vishvajeet@gmail.com", "name:age", "60", "name:country", "india"]);

        const [emailValue, ageValue, countryValue] = await client.mGet(['name:email', 'name:age', 'name:country']);
        console.log(`Email: ${emailValue}, Age: ${ageValue}, Country: ${countryValue}`);



        ////////////////////// list -> lPush , rpop, lRange, rpush, lpop, lindex, llen//////////////////////////////



        await client.del('notes'); // Clear list if already exists

        await client.lPush('notes', ['first note', 'second note', 'third note']);
        const notes = await client.lRange('notes', 0, -1);
        console.log('Notes:', notes); // Should log all notes in the list


        const firstNote = await client.lPop('notes');
        console.log('First Note:', firstNote); // Should log 'first note' if it exists



        const reamaingTasks = await client.lRange('notes', 0, -1);
        console.log('Remaining Notes:', reamaingTasks); // Should log remaining notes in the list





        ///////////////// ///// set -> SADD, SREM, SMEMBERS, SISMEMBER////////////////////////////////////





        //  await client.del('usernickName'); // Clear set if already exists

        await client.sAdd('user:nickNames', ['shukla', 'ritik', 'vishvajeet', "xyz"]);
        const tags = await client.sMembers('user:nickNames');
        console.log('Tags:', tags); // Should log all tags in the set

        const isVishvajeetMember = await client.sIsMember('user:nickNames', 'vishvajeet');
        console.log('Is Vishvajeet a member?', isVishvajeetMember); // Should log true if 'vishvajeet' is in the set

        await client.sRem("user:nickNames", "xyz");
        const updatedTags = await client.sMembers('user:nickNames');
        console.log('Updated Tags:', updatedTags); // Should log all tags after removal



        /////////////////  sorted set -> ZADD, ZRANGE, ZREM, ZSCORE //////////////////////////////////////
        /// soteted set is a data structure that stores unique elements with a score, allowing for efficient range queries and sorting.
        await client.del('cart'); // Clear sorted set if already exists
        await client.zAdd('cart', [
            { score: 12, value: "cart 1" },
            { score: 22, value: "cart 2" },
            { score: 3, value: "cart 3213" },
            { score: 14, value: "cart 4" },

        ])

        const getTopCarts = await client.zRange('cart', 0, -1)
        console.log('Top Carts:', getTopCarts); // Should log all carts in the sorted set


        const extractCartItem = await client.zRangeWithScores('cart', 0, -1);
        console.log('Extracted Cart Items:', extractCartItem); // Should log all cart items

        const cartTwoRank = await client.zRank('cart', 'cart 4');
        console.log('Rank of cart 4:', cartTwoRank); // Should log the rankq




/////////////////////// hasesh -> HSET, HGET, HGETALL, HDEL //////////////////////////////////////

                



    } catch (error) {
        console.log('Error connecting to Redis:', error);
    }
    finally {
        await client.quit();
        console.log('Redis client disconnected');
    }

}

redisDataStructure();
