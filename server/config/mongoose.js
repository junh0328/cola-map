const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ DB is connected');
  } catch (error) {
    console.log(error);
  }
};

connectDB();