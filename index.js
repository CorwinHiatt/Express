import express, { request, response } from 'express'

const app = express()     //webAPP

app.get('/test', (request, response) => {
    response.send({message: "It's all good, man!😜🥰🥸🫥"})
})

app.get('/', (request, response) => response.send({message:'welcome to our first API🫥🤯'}))

app.get('/error',(request, response) => {
response
    .status(500)
    .send({ message:'something went wrong🤯'})
})

app.listen(3030, () => console.log('listening on http://localhost:3030'))