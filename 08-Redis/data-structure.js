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
                /// string -> set -> get-> MSET ,MGET

        await client.connect();

        await client.set('name:name', 'vishvajeet shukla');
        const nameValue = await client.get('name:name');
        
        await client.mSet(["name:email","vishvajeet@gmail.com","name:age","60","name:country","india"]);
    
            const [emailValue, ageValue, countryValue] = await client.mGet(['name:email', 'name:age', 'name:country']);
            console.log(`Email: ${emailValue}, Age: ${ageValue}, Country: ${countryValue}`);



            /// list -> lPush , rpop, lRange, rpush, lpop, lindex, llen


            await client.lPush('notes',['first note', 'second note', 'third note']);
            const notes = await client.lRange('notes', 0, -1);
            console.log('Notes:', notes); // Should log all notes in the list


            









    
    }catch (error) {
        console.log('Error connecting to Redis:', error);
    }
    finally {
        await client.quit();
        console.log('Redis client disconnected');
    }
        
}

redisDataStructure();
