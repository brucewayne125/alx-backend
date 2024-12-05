import {createClient} from 'redis'


const client = createClient();


client.on('connect', () => {
	console.log('Redis client connected to the server');
});

client.on('eror', (err) => {
	console.log(`Redis client not connected to the server: ${er.message}`);
});


const channel = 'holberton school channel';
client.subscribe(channel);

client.on('message', (cahnnel, message) => {
	console.log(message);

	if (message === 'KILL_SERVER'){
		client.unsubscribe();
		client.quit();
	}
});
