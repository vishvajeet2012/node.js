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

async function testRedis() {
    try {
        await client.connect();
        await client.set('name', 'vishvajeet');
        const extractedValue = await client.get('name');
        console.log(extractedValue); // Should log 'testValue'

                
        const deletedValue = await client.del('name');
        console.log(deletedValue); // Should log 1 if the key was deleted successfully

        
        const valueAfterDeletion = await client.get('name');
        console.log(valueAfterDeletion); // Should log null if the key was deleted successfully


        await client.set('count', 0);
        const incrementedValue = await client.incr('count');
        console.log(incrementedValue); // Should log 1








        console.log('Redis client connected successfully');
    } catch (error) {
        console.log('Error connecting to Redis:', error);
    } finally {
        await client.quit();
        console.log('Redis client disconnected');
    }
}

testRedis();