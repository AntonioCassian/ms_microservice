import { Kafka } from "kafkajs";

const kafka = new Kafka({
    brokers: ['intent-robin-11846-usl-kafka.upstash.io:9092'],
    sasl: {
        mechanism: 'scram-sha-256',
        username: 'aW50ZW50LXJvYmluLTEx0DQ2JJlbt05WcUv0O',
        password: '4567896231569856412357'
    },
    ssl: true,
})

export {kafka}