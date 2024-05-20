// server.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

// Log the environment variables to ensure they are loaded
// console.log(process.env);

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(con => {
  console.log(con.connections);
  console.log("DB connection successfully")
})


const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
  },

  rating: {
    type: Number,
    default: 4.5
  },

  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  
})

const Tour = mongoose.model('Tour', tourSchema);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
