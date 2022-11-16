const express = require('express')

const port = 8000

const app = express()

app.get('/about', (pet, res) => {
    res.json({
        name: 'Eduardo Perez Quintana',
        age: 23,
        country: 'Perú'
    })
})

app.post('/about', (pet, res) => {
    res.json({
        companies: ['Google', 'Facebook', 'Bcp']
    })
})

app.patch('/about', (pet, res) => {
    res.json({
        hobbies: ['Jugar videojuegos', 'Escuchar música', 'Ver videos']
    })
})

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
})