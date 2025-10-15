const express = require('express');
const app = express();
app.use(express.json());    

const user = {
    username: "Hussein",
    password: "password123"
};

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    if(username === user.username && password === user.password) {
        res.send({"login": "success"});
    } else {
        res.send({"login": "failure"});
    }
});

app.listen(8080, () => {
    console.log("Server Running On Port 8080...")
}); 

setInterval(() => {
    console.log("Server Still Running...")
}, 500000);
