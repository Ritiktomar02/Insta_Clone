const express = require("express");
const { urlencoded } = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./utils/db.js");
const userRoute = require("./routes/user.route.js");
const postRoute = require("./routes/post.route.js");
const messageRoute = require("./routes/message.route.js");
const {app, server} = require("./socket/socket.js");

 


const PORT = process.env.PORT || 3000;



//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));


const corsOptions = {
    origin: process.env.URL,
    credentials: true
}
app.use(cors(corsOptions));

// yha pr apni api ayengi
app.use("/api/v1/user", userRoute);
app.use("/api/v1/post", postRoute);
app.use("/api/v1/message", messageRoute);


app.get("/", (req, res) => {
    res.send("Hello World");
});


server.listen(PORT, () => {
    connectDB();
    console.log(`Server listen at port ${PORT}`);
});