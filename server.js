// server.js
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

// Log the environment variables to ensure they are loaded
// console.log(process.env);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
