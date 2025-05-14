const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
app.use(express.json());

app.use("/user",userRoutes);
app.use("/admin",adminRoutes);

app.listen(port, ()=>{
    console.log(`http://localhost:${3000}`);
});