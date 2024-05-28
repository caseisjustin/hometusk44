import mongoose from "mongoose";

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB ga muvaffaqiyatli ulandi');
    } catch (err) {
      console.error('MongoDB ga ulanishda xatolik:', err);
      process.exit(1);
    }
  };


  export default connectDB;