const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3005;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes)
app.use('*', (req, res) => {
   res.send(" wrong route. make sure you are using /api")
})

db.once('open', () => {

   app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
   })
})
