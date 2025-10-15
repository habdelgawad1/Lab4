const express = require('express');
const app = express();
app.use(express.json());

app.post('/isEven', (req, res) => {
    const {number}=req.body;
    let isEven=false;
    if(number%2==0){
        isEven=true;
    }
    else{
        isEven=false;
    }
    res.send({"even":isEven});
});

app.listen(8080, () => {
    console.log("Server Running On Port 8080...")
});

setInterval(() => {
    console.log("Server Still Running...")
}, 500000); 