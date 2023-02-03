const express = require('express')
const qr = require('qrcode')
const path = require('path')
const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname + '/public')))
app.get('/',(req,res) => { 
    res.sendFile(path.join(__dirname + '/public'))
 })
app.post('/qrcode',(req,res) => { 
    console.log('sfxff',req.body.url);
    const url = req.body.url
    qr.toDataURL(url,{errorCorrectionLevel:'Q'},(err,qrcode) => { 
        console.log(`err`, err);
        console.log(`qrcode`, qrcode);
        res.status(200).send(qrcode)
     })
 })
app.listen(3000,() => { console.log('i am listening '); })