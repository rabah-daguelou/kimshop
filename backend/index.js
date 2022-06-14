const express= require('express');
const app= express();


app.get('/products', (req, res)=>{
    res.send('yes!')
})

app.listen(8080,()=>{
    console.log (' Serveur à l\'écoute')
})