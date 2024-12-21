const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');  // تأكد أن ملف data.json موجود في نفس المجلد
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// إضافة سجل قبل بدء الاستماع
console.log('Starting JSON Server...');

server.listen(process.env.PORT || 5000, () => {
    console.log('JSON Server is running on port 5000');
  }).on('error', (err) => {
    console.error('Error starting server:', err);
  });
  