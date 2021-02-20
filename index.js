const Sentry = require("@sentry/node");
Sentry.init({
  dsn: "https://df0c4554cf6b489d839688c29b0f255d@o87286.ingest.sentry.io/5641149",
});

undefinedFuntion();

const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node. No more change!\n'
  res.end(msg);
});

try {
 console.log("hello");
} catch (error) {
  console.error(error);
}

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
