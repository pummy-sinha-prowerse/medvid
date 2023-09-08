import mongoose from "mongoose";

// const CONNECTION_URL = `mongodb://${config.db_local.url}/${config.db_local.name}`;

const CONNECTION_URL ="mongodb+srv://pummysinhaprowerse:vgxLj9OJacyLdD6z@cluster.8vncg7w.mongodb.net/MedVid"
//"mongodb+srv://doadmin:8gbyMv0a6123ox57@eb-node-mongodb-ams3-413996da.mongo.ondigitalocean.com/admin?replicaSet=eb-node-mongodb-ams3&tls=true&authSource=admin";
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// mongoose.connect(CONNECTION_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on("connected", () => {
//   console.log("Mongo has connected succesfully");
// });
// mongoose.connection.on("reconnected", () => {
//   console.log("Mongo has reconnected");
// });
// mongoose.connection.on("error", (error) => {
//   console.log("Mongo connection has an error", error);
//   mongoose.disconnect();
// });
// mongoose.connection.on("disconnected", () => {
//   console.log("Mongo connection is disconnected");
// });
