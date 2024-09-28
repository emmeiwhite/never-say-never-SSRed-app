const { createServer } = require('http')
const { parse } = require('url')

const server = createServer((req, res) => {
  // Route-1 Homepage!
  // res.end('Hello World!')

  const pathName = parse(req.url, true).pathname

  if (pathName === '/') {
    res.end('Hello World! - Route-1')
  } else if (pathName === '/test') {
    res.end('TEST FILE - Route-2')
  } else {
    res.end('The URL cannot be found')
  }
})

server.listen(8000, () => {
  console.log('Listening on port 8000')
})
