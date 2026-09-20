import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('.', import.meta.url)))
const port = Number(process.env.PORT || 8080)
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
}

createServer((request, response) => {
  let requestedPath

  try {
    requestedPath = decodeURIComponent(new URL(request.url, `http://localhost:${port}`).pathname)
  } catch {
    response.writeHead(400).end('Endereço inválido')
    return
  }

  const relativePath = requestedPath === '/' ? 'index.html' : requestedPath.replace(/^\/+/, '')
  const absolutePath = resolve(root, relativePath)

  if (!absolutePath.startsWith(root + sep) || !existsSync(absolutePath) || !statSync(absolutePath).isFile()) {
    response.writeHead(404).end('Arquivo não encontrado')
    return
  }

  response.writeHead(200, { 'Content-Type': contentTypes[extname(absolutePath)] || 'application/octet-stream' })
  createReadStream(absolutePath).pipe(response)
}).listen(port, '127.0.0.1', () => {
  process.stdout.write(`Apresentação: http://127.0.0.1:${port}\n`)
  process.stdout.write('Pressione Ctrl+C para encerrar.\n')
})
