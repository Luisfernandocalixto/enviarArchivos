const express = require('express')
const ejs = require('ejs')

const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/static/contact.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/static/about.html')
})

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/static/style')
})

app.get('/welcome', (req, res) => {
    res.render('welcome')
})
app.get('/signin', (req, res) => {
    res.render('signin')
})


app.use(express.static('public'))

app.listen(3000)
console.log(`Server on port http://localhost:3000`);