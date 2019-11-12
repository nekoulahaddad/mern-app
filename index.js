const express = require("express");
const mongoose = require("mongoose");
const items = require("./routes/items")
const users = require("./routes/Users")
const auth = require("./routes/auth")

const app = express();

app.use(express.json());

mongoose
.connect("mongodb://localhost/mernapp", {useNewUrlParser: true,useCreateIndex:true})
.then(() => console.log("the database is ready to use ..."))
.catch((err) => console.log(err));

app.use("/items", items);
app.use("/users", users);
app.use("/auth", auth);




const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log("every thing is okk ...")
});