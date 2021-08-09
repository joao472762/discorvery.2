const exprees = require('express')

const route = exprees.Router()

route.get('/',(req,res)=> res.render('index'))

module.exports= route