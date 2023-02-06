const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage' :{
    'age' : 29,
    'birthName' : 'shéyaa somthin or other',
    'birthLocation' : 'london, england'
    },
    'chance blah blah' :{
        'age' : 29,
        'birthName' : 'benny',
        'birthLocation' : 'chicago, ill-annoy'
        },
        '????' :{
            'age' : '?',
            'birthName' : '?',
            'birthLocation' : '?'
            }
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })
  app.get('/api/:zebra', (req,res)=>{
    const userRapperInput = req.params.zebra.toLowerCase()
    if(rappers[userRapperInput]){
      res.json(rappers[userRapperInput])
    }else{
      res.json(rappers['????'])
    }
  })

  app.listen(PORT,()=>{
    console.log(`the server is running on port ${PORT}. You better go catch it!`)
  })