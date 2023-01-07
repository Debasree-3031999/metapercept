const jsonServer=require('json-server');
const server=jsonServer.create();
const router=jsonServer.router('db.json');
const mid=jsonServer.defaults();
const port=8080;

server.use(mid);
server.use(router);

server.listen(port);
