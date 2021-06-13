import mongoose from "mongoose";

const _DATABASE_URI =
  process.env.DATABASE_URI || "mongodb://127.0.0.1:27017/ipl-dashboard";

(async () => {
  try {
    await mongoose.connect(_DATABASE_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("connected to " + _DATABASE_URI);
  } catch (error) {
    console.log("database initialization failed!!");
  }
})();
