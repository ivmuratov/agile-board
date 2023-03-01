const path = require('path');
const jsonServer = require('json-server');

const PORT = 8080;

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(async (req, res, next) => {
  await new Promise(res => {
    setTimeout(res, 1000);
  });
  next();
});

// TODO: сделать на tasks GET, POST, PUT, DELETE
server.use(
  jsonServer.rewriter({
    '/projects/:projectId/tasks/:taskId': '/tasks?id=:taskId&projectId=:projectId',
  }),
);

server.use(middlewares);

server.use(router);

server.listen(PORT, () => {
  console.log(`server is running on ${PORT} port`);
  console.log();
  console.log(`http://localhost:${PORT}/`);
});
