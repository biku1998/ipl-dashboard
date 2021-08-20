import mongoose from "mongoose";

(async () => {
  try {
    if (!process.env.DATABASE_URI) {
      console.log("DATABASE_URI environment variable missing.");
      console.log("Shutting down...");
      process.exit();
    }
    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("\n🔗 connected to " + process.env.DATABASE_URI);
  } catch (error) {
    console.log("database initialization failed!!");
  }
})();
