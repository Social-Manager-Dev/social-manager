import mongoose from "mongoose";

// function which makes it possible for us to connect to mongo database
async function startConnectionWithDatabase() {
  console.log('hi')
  await mongoose.connect(
    "mongodb+srv://managersocial71:tqvfKznBEjFms5tx@cluster0.vgnxfmd.mongodb.net/?retryWrites=true&w=majority"
  );
}

export { startConnectionWithDatabase };
