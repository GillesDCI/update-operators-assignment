const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();
const app = express();


app.set("port", process.env.PORT || 4000);

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
,{
   useNewUrlParser:true, 
   useUnifiedTopology:true
})
.then(() => {console.log("we are connected to the database.")})
.catch((error) => { console.log('an error occurred while connecting ot the db', error)})


const songRoutes = require('./routes/orderRoutes');
app.use('/api/songs',songRoutes);

app.all('*',(req, res) => {
    res.status(500);
    res.send('Invalid path');
})


app.listen(app.get("port"), () => {
    console.log("Server started on port " + app.get("port"));
});