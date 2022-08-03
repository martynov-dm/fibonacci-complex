import keys from "./keys.js";
import Redis from 'ioredis'
import pkg from 'pg';

const { Pool } = pkg;

export const start = async () => {
    const redisClient = new Redis({
        host: keys.redisHost,
        port: keys.redisPort,
        retry_strategy: () => 1000
    });

    redisClient.on("error", (error) => console.error(`Error : ${error}`));

    const pgClient = new Pool({
        user: keys.pgUser,
        host: keys.pgHost,
        database: keys.pgDatabase,
        password: keys.pgPassword,
        port: keys.pgPort
    })

    pgClient.on("connect", (client) => {
        client
            .query("CREATE TABLE IF NOT EXISTS values (number INT)")
            .catch((err) => console.error(err));
    });

    const redisPublisher = redisClient.duplicate()

    return { redisClient, redisPublisher, pgClient }
}
