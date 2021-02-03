const express = require('express')
const bodyParser = require('body-parser')

const config = require('../config')
const user = require('./components/user/network')

const app = express()

app.use(bodyParser.json())

app.use('/api/user', user)

app.listen(config.api.port, () => {
  console.log(`Escuchando desde el puerto ${config.api.port}`);
})