const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection established"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.get("/api/test", (req, res) => {
  console.log("GET /api/test");
});

app.listen(PORT, () => console.log('listening on port ' + PORT));