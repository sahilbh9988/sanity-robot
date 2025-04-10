const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3002;
const publicDir = path.join(__dirname, 'public');
const robotsPath = path.join(publicDir, 'robots.txt');

// Ensure /public exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Start HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.method === 'GET' && parsedUrl.pathname === '/robots.txt') {
    fs.readFile(robotsPath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('robots.txt not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });

  } else if (req.method === 'POST' && parsedUrl.pathname === '/update-robots') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        const content = parsed.content;

        if (!content) {
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          return res.end('❌ No "content" field found in POST data');
        }

        fs.writeFile(robotsPath, content, err => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end('❌ Failed to write robots.txt');
          }
          console.log('✅ robots.txt updated');
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('robots.txt updated');
        });
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('❌ Invalid JSON');
      }
    });

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Vanilla Node server running at http://localhost:${PORT}`);
});
