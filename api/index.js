const express = require("express")
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
// const cors = require("cors");

// app.use(cors({credentials:true,origin:'http://localhost:5000/api/'}));
dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"/images")))

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
}).then(console.log("Connected to mongodb")).catch(err => console.log(err));


const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "images");
    },filename:(req, file, cb) => {
        cb(null, req.body.name) //req.jpeg fro testing
    },
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", () => {
    console.log("running");
})