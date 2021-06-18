const fastify = require('fastify')({ logger: true });

// Declaring a route

fastify.get('/', async (req, reply) => {
  return { hello: 'world' };
});

// Running the server here
const start = async () => {
  try {
    await fastify.listen(3030);
  } catch (err) {
    fastify.log.error(err);
  }
};

start();
