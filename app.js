require('dotenv').config()
const clc = require('cli-color')

const Koa = require('koa')

const config = require('./lib/config')
const handlers = require('./handlers')
const controllers = require('./controllers')
const mongooseConfig = require('./lib/mongoose-config')

const app = new Koa()

handlers.forEach((h) => app.use(h))

app.use(controllers.routes())
app.use(controllers.allowedMethods())
mongooseConfig()

app.listen(config.port, () => console.log(clc.blueBright(`Server has been started on port ${config.port}`)))