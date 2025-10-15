const express = require('express');
const app = express();
app.use(express.json());
const reviews = require('./reviews');

//app.get('/reviews', (req, res) => {
    //res.send(reviews);
//}); 

app.post('/newReview', (req, res) => { 
    const {name, comment, rating} = req.body;
    reviews.push({name, comment, rating});
    res.send({"status": "Review added successfully"});
});
    
app.listen(8080, () => {
    console.log("Server Running On Port 8080...")
}); 

setInterval(() => {
    console.log("Server Still Running...")
}, 500000);