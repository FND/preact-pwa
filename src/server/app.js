import express from 'express'
import compression from 'compression'
import { cacheControl } from './middleware'
import { root } from './routes'

// likely our proxy will handle compression, cache-control, etc. these are healthy defaults
const app = express()
app.use(compression())
app.use('/public', express.static('build/public', { maxAge: '365d' }))
app.use(cacheControl())
app.use('/service-worker.js', express.static('build/public/service-worker.js'))
app.use('*', root)

export default app
