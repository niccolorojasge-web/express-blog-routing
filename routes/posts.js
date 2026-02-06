const express = require('express')
const postsphoto = express.Router();
const menuPost =require('./menupost');
const posts = require('./menupost');

//rotte di crud

//index
 postsphoto.get('/', function(req, res){
    res.send('lista dei post');
 });
 //show
 postsphoto.get('/:id', function(req, req){
res.send('dettagli deei post' + req.params.id);  
 });
//store
postsphoto.post('/', function (req, res){
    res.send('creazione nuovo post');
});
//update
postsphoto.put('/:id', function(req, res){
    res.send('modifica integrale del post'+ req.params.id);
});
//modify
postsphoto.patch('/:id', function(req, res){
res.send('modifica parziale post'+ req.params.id);
});
//delete
postsphoto.delete('/:id', function(req, res){
    res.send('elimina post'+req.params.id);
});
module.exports= postsphoto;
posts.use("/menupost",menuPost)
