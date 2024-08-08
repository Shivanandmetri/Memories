import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import postsRoutes from "./routes/posts.js";

const port = 8082;
const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// routes
app.use("/posts", postsRoutes);

mongoose
  .connect(
    "mongodb+srv://shivanand1998metri:Shiva1234@cluster0.fcjuvyn.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "MERNProjectDB",
    }
  )
  .then(() => {
    console.log("MongoDb Connected....");
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch((er) => {
    console.log(er.message);
  });

// mongoose.set('useFindAndModify',false);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
