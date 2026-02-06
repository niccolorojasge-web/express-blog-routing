const express = require('express');
const app = express();
const port = 3000;
const postsRouter= require('./routes/posts')

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("<h1>server del mio blog</h1>");
});
app.listen(port,()=>{
console.log(`example app listening on port ${port}`); 
});
app.use('/posts',postsRouter)