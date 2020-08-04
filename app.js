const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.sendFile(__dirname + 'PAGINA INICIAL')
})

app.get('/caduser', (req, res) => {
  return res.sendFile(__dirname + 'CADASTRO DE USUARIO')
})

app.get('/receitas', (req, res) => {
  return res.send({ titulo: 'PAGINA DE RECEITAS' })
})

module.exports = app
