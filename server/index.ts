import * as config from './config'
import * as server from './server'

async function start() {
  server.Instance.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}...`)
  })
}

start()