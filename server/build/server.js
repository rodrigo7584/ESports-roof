import express from 'express'
const app = express()
app.get('/ads', (request, response) => {
  return response.json([
    {
      id: 'tester'
    }
  ])
})
app.listen(3333)
