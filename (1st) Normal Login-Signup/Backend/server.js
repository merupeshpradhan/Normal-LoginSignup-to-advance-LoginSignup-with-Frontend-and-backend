import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log(`\n Server running on port ${process.env.PORT}`);
})