const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./rotas')
const MethodOverride = require('method-override')
const server = express()


server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))
server.use(MethodOverride('_method'))
server.use(routes)



server.set("view engine", "njk")

nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
    noCache: true,
    watch: true
})


server.listen(5000, function(err, results){
    console.log("server is running")
    
})