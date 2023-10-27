/* Урок 1. Введение в Node.js
Напишите HTTP сервер и реализуйте два обработчика, где:
— По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
— А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
— Также реализуйте обработку несуществующих роутов (404).
— * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница. */

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Запрос получен!");

  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });

    res.write("<h1>Корневая страница</h1>");
    res.write('<a href="/about">Ссылка на страницу /about</a>');
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.write("<h1>Страница about</h1>");
    res.write('<a href="/">Ссылка на корневую страницу</a>');
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.write("<h1>Страница не найдена!</h1>");
    res.write('<a href="/">Ссылка на корневую страницу</a>');
  }
  res.end("</body></html>");
});

const port = 3000;
server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
