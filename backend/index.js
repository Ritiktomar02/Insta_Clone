const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const fileUpload=require('express-fileupload');
require('dotenv').config();
const app=express();

const PORT=process.env.PORT || 4001;

require("./config/database").connect()

app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
}));

app.use(express.json());
app.use(cookieParser());

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}))

app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});


