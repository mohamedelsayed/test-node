const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    msg: "Hello World2"
  })
})

const PORT = 3002

app.listen(PORT, () => console.log(`App running on PORT ${PORT}`))