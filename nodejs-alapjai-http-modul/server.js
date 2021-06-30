const http = require('http');
const SiteRouter = require('./routers/site.router');
const logger = require('./utils/logger')

const port = 8080;

http.createServer(({ url, method }, res) => {
  SiteRouter[url]
    ? SiteRouter[url](res)
    : SiteRouter['/404'](res)
    logger(url, method)
})
//.on('error', (err) => console.log(`Server error: ${err.message}`))
//.on('listening', () => console.log(`Server is running at http://127.0.0.1:${port}`))
.listen(port);

console.log(`Server is running at http://127.0.0.1:${port}`);