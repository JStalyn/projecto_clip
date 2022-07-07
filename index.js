const express = require ('express');
const app = express();
const port = 3000 || process.env.PORT;

app.get("/", (req, res)=>{
    res.sendFile('./index.html', {root: __dirname});
})

app.get("/profile", (req, res)=>{
    res.sendFile('./pages/profile.html', {root: __dirname});
})
app.get("/data", (req, res)=> {
    res.sendFile('./modulos/data.json', {root: __dirname});})

app.listen(port,()=>{
    console.log(`Server is running on port localhost${port}`);
})