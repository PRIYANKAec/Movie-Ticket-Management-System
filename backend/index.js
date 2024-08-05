import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose'; // Import Mongoose

dotenv.config();

const app = express();
app.use(cors());

// MongoDB connection setup
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

app.get('/', async (req, res) => {
  res.send("Mongo DB Connected to the server");
});

const startServer = async () => {
  try {
    await connectDB(); // Call the connectDB function
    app.listen(8080, () => console.log(`Server has started on port ${process.env.SERVER_URL}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();