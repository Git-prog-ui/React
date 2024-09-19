const express = require('express')
const app = express()
const cors = require('cors');
const port = 4000


 
app.use(cors())

const data = [
    {
        name : "User1",
        amount : 100
    },
    {
        name : "User2",
        amount : 50
    },
    {
        name : "User3",
        amount : 120
    },
    {
        name : "User4",
        amount : 45
    }
]

app.get('/data', (req, res) => {
    res.json(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})